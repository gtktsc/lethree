// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/index';

const body: HTMLElement = document.body || document.createElement('body');
const base: HTMLElement = document.getElementById('root') || document.createElement('div');

body.appendChild(base);

ReactDOM.render(<App />, base);
