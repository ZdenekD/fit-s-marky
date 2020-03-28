import React from 'react';
import Notfound from './notfound';
import Content from '../content';

export default {
    title: 'Pages',
};

export const notfound = () => <Content content={<Notfound />} />;
