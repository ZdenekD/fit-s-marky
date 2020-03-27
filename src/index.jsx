import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import * as Sentry from '@sentry/browser';
import loadable from '@loadable/component';
import './index.css';
import './assets/styles/utilities/images.css';

const app = document.getElementById('js_main');

if (process.env.NODE_ENV === 'production') {
    try {
        Sentry.init({dsn: 'https://eaaee4e90cf4449fbe33f6b176be32d7@sentry.io/1840666'});
    } catch (error) {
        console.log(error);
    }
}

const App = loadable(() => import(/* webpackPrefetch: true */ './components/app'));

if (app) {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        app
    );
} else {
    console.log('There\'s no application element');
}

console.info('%cHello Underworld! Authorship is attributed to %c01011010 01100100 01100101 01101110 01100101 01101011 01000100. %cYou can try this >> https://bit.ly/31QKTyy', 'color: #9cd9f2', 'color: #c8e49b', 'color: #9cd9f2');
