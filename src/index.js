import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './configureStore'

import './index.css';
import App from './App';

const persistedState = localStorage.getItem('reduxState') 
                         ? JSON.parse(localStorage.getItem('reduxState'))
                         : {}

const store = configureStore(persistedState)

store.subscribe(()=>{
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})  

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));

