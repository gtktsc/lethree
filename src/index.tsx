import ReactDOM from 'react-dom';
import React from 'react';
import App from './app/index';

const body = document.body || document.createElement('body');
const base = document.getElementById('root') || document.createElement('div');

body.appendChild(base);

console.log('test');
console.log('test');
ReactDOM.render(<App init />, base);
