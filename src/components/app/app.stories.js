import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import App from './app';

export default {
    title: 'App',
    decorators: [storyFn => <MemoryRouter>{storyFn()}</MemoryRouter>],
};

export const template = () => <App />;
