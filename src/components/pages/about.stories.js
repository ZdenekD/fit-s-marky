import React from 'react';
import About from './about';
import Content from '../content';

export default {
    title: 'Pages',
};

export const about = () => <Content content={<About />} />;
