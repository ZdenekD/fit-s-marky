import React from 'react';
import Body from './body';
import Content from '../content';

export default {
    title: 'Pages',
};

export const body = () => <Content content={<Body />} />;
