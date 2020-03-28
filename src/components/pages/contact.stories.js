import React from 'react';
import Contact from './contact';
import Content from '../content';

export default {
    title: 'Pages',
};

export const contact = () => <Content content={<Contact />} />;
