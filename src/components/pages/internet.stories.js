import React from 'react';
import Internet from './internet';
import Content from '../content';

export default {
    title: 'Pages',
};

export const internet = () => <Content content={<Internet />} />;
