import { get } from "https";

let getContact=()=>{
return fetch('/api/contacts',{
headers:{
    Accept:'application/json',
},
}).then(checkStatus)
.then(parseJSON);
}

let addContact=(data)=>{
return fetch('/api/addContact',{
    method:"post",
    body:JSON.stringify(data),
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'

    }
})
}
// editContact=()=>{

// }
// delContact=()=>{

// }

let checkStatus=(response)=>{
 if(response.status>=200 && response.status<300){
 return response;
 }else{
     const error = new Error(`HTTP Error ${response.statusText}`);
     error.status = response.statusText;
     error.response = response;
     console.log(error);
     throw error;
 }
}
function parseJSON(response){
    return response.json();
}

const Client = {
getContact,

}
export default Client;