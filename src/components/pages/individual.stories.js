import React from 'react';
import Individual from './individual';
import Content from '../content';

export default {
    title: 'Pages',
};

export const individual = () => <Content content={<Individual />} />;
