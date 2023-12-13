import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
// Lấy state từ một biến global được đưa vào HTML do server tạo
const initialState = window.APP_STATE;

//React 17
// import ReactDOM from 'react-dom';
// ReactDOM.hydrate(<App {...initialState} />, document.getElementById('app'));

//React 18
const container = document.getElementById('app');
hydrateRoot(container, <App {...initialState} />);
