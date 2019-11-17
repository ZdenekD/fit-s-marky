/* global document */
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './helpers/variables.css';
import './index.css';
import ComponentApp from './components/app';
import './helpers/base64.css';

const app = document.getElementById('js_page');

if (app === null) {
    throw new Error('There\'s no application element');
}

const renderApp = () => {
    render(
        <BrowserRouter>
            <ComponentApp />
        </BrowserRouter>,
        app
    );
};

renderApp();
