const express = require('express');
const validate = require('express-validation');
const validation = require('./validation');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

const app = express();

const DATA = path.join(__dirname, 'data/contacts.json');
app.set('port', (process.env.API_PORT || 3001));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.get('/api/contacts', (req, res) => {
  fs.readFile(DATA,(err,data)=>{
    res.setHeader('Cache-Control','no-cache');
    res.json(JSON.parse(data));
  });
})
app.post('/api/addContact',validate(validation.contact), (req, res) => {
  fs.readFile(DATA,(err,data)=>{
    const contacts = JSON.parse(data);
    const newContact = {
      _id:uuid.v4(),
      fname:req.body.fname,
      lname:req.body.lname,
      email:req.body.email,
      phonenumber:req.body.phonenumber

    };
    contacts.push(newContact);
    fs.writeFile(DATA,JSON.stringify(contacts,null,4),()=>{
      res.setHeader('Cache-Control', 'no-cache');
      res.json(contacts);
    })
  });
})
app.put('/api/editContact/:contactId',validate(validation.editContact), (req, res) => {
  fs.readFile(DATA,(err,data)=>{
    let contacts = JSON.parse(data);

    contacts.forEach((contact) => {
      if(contact._id == req.params.contactId){
        contact._id=req.params.contactId,
        contact.fname=req.body.fname,
        contact.lname=req.body.lname,
        contact.email=req.body.email,
        contact.phonenumber=req.body.phonenumber
      }
    });
    fs.writeFile(DATA,JSON.stringify(contacts,null,4),()=>{
      res.json(contacts);
    })
  });
})
app.delete('/api/delContact/:contactId',validate(validation.delContact), (req, res) => {
  fs.readFile(DATA,(err,data)=>{
    let contacts = JSON.parse(data);
    
    contacts=contacts.filter(contact =>contact._id !== req.params.contactId);
    fs.writeFile(DATA,JSON.stringify(contacts,null,4),()=>{
      res.json(contacts);
    })
  });
})


export default app;