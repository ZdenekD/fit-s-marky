import React from 'react';
import Gallery from '../gallery';

const galleryContent = props => (
    <Gallery {...props} data-test="component-content" />
);

export default galleryContent;
