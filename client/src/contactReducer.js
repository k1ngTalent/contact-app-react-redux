import {REQUEST_CONTACTS,RECEIVE_CONTACTS} from './constants.js';
const contacts = (state = [], action) => {
    switch (action.type) {
        case REQUEST_CONTACTS:
            return [];
        case RECEIVE_CONTACTS:
            return action.contacts;
        default:
            return state;
    }
}
export default contacts;