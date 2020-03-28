import React from 'react';
import Pricelist from './pricelist';
import Content from '../content';

export default {
    title: 'Pages',
};

export const pricelist = () => <Content content={<Pricelist />} />;
