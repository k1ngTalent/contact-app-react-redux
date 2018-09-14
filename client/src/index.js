import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import contactStore from './contactStore';
import {Provider} from 'react-redux';


ReactDOM.render(
<Provider store={contactStore}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
