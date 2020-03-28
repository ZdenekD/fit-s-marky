import React from 'react';
import Image from './image';

const defaultProps = {
    path: '/images',
    name: 'image-13',
};

export default {
    title: 'Components/Image',
};

export const template = () => <Image {...defaultProps} />;
