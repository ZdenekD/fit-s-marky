import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import Gallery from './gallery';
import Content from '../content';

export default {
    title: 'Pages/Gallery',
    decorators: [storyFn => <MemoryRouter>{storyFn()}</MemoryRouter>],
};

export const gallery = () => <Content content={<Gallery />} />;
