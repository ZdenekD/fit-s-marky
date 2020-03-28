import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import Navigation from './navigation';

export default {
    title: 'Layout/Navigation',
    decorators: [storyFn => <MemoryRouter>{storyFn()}</MemoryRouter>],
};

export const template = () => <Navigation />;
