/* global document */
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import * as Sentry from '@sentry/browser';
import './styles/variables/variables.css';
import './styles/utilities/base64.css';
import './index.css';
import App from './components/app';

const app = document.getElementById('js_main');

if (process.env.NODE_ENV === 'production') {
    try {
        Sentry.init({dsn: 'https://eaaee4e90cf4449fbe33f6b176be32d7@sentry.io/1840666'});
    } catch (error) {
        console.log(error);
    }
}

const renderApp = () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        app
    );
};

if (app) {
    renderApp();
} else {
    console.log('There\'s no application element');
}

console.info('Hello World! Authorship is attributed to 01011010 01100100 01100101 01101110 01100101 01101011 01000100. You can try this >> http://goo.gl/gdkfG1');
