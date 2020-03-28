import React from 'react';
import Calories from './calories';
import Content from '../content';

export default {
    title: 'Pages',
};

export const calories = () => <Content content={<Calories />} />;
