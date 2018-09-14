import {
    RECEIVE_CONTACTS
} from './constants.js';
import Client from './client.js';

let ContactActionCreators = {
    getContacts() {
        return (dispatch) => {
            // dispatch({type:REQUEST_CONTACTS});
            Client.getContact().then(
                (contacts) => dispatch({
                    type: RECEIVE_CONTACTS,
                    success: true,
                    contacts
                }),
                (error) => dispatch({
                    type: RECEIVE_CONTACTS,
                    success: false,
                    error
                })
            )
        }
    },
    //    editContact(){

    //    }
    addContact() {
       return  (dispatch,getState)=>{
           Client
       }
    }
    //    deleteContact(){

    //    }
    //    viewContact(){

    //    }



}

export default ContactActionCreators;