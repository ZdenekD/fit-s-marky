import React from 'react';
import Modal from './modal';
import Image from '../image';

const defaultProps = {
    content: 'Modal content',
    isOpen: true,
};
const imageProps = {
    content: <Image path="/images" name="image-13" />,
    isOpen: true,
};

export default {
    title: 'Components/Modal',
};

export const template = () => (<Modal {...defaultProps} />);
export const image = () => (<Modal {...imageProps} />);
