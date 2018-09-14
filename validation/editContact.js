const joi = require('joi');

module.exports={
options:{allowUnknownBody:false},
body:{
fname:joi.string().required(),
lname:joi.string().required(),
email:joi.string().email().required(),
phonenumber:joi.string().required(),
},
params:{
contactId:joi.string().required()
}
};