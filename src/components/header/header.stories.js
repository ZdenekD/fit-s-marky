import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import Header from './header';

export default {
    title: 'Layout/Header',
    decorators: [storyFn => <MemoryRouter>{storyFn()}</MemoryRouter>],
};

export const template = () => <Header />;
