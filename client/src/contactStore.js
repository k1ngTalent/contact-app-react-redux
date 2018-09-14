import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk'
import contacts from './contactReducer'

const logger = (store) => (next) => (action) => {
    if (typeof action !== "function") {
        console.log('dispatching:', action);
    }
    return next(action);
}
const contactStore = createStore(contacts, applyMiddleware(logger, thunk));
export default contactStore;