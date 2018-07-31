import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import allReducers from './reducers';
import {createStore} from 'redux';

const store = createStore(allReducers);

ReactDOM.render(<h1> Hello World! </h1>, document.getElementById('root'));
registerServiceWorker();
