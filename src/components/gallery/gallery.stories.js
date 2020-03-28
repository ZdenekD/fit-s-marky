import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import Gallery from './gallery';
import Content from '../content';
import data from '../../data/gallery.json';

const defaultProps = {
    id: data.galleries[0].id,
    title: 'Photogallery title',
};

export default {
    title: 'Module/Gallery',
    decorators: [storyFn => <MemoryRouter>{storyFn()}</MemoryRouter>],
};

export const template = () => <Content content={<Gallery {...defaultProps} />} />;
