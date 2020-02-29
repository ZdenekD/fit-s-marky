import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
    path = '',
    name,
    fallback = 'png',
    alt = '',
    className = null,
    pictureClassName = null,
}) => ((
    <picture className={pictureClassName} data-test="component-picture">
        <source srcSet={`${path}/${name}.webp`} type="image/webp" />
        <source srcSet={`${path}/${name}.${fallback}`} type={`image/${fallback}`} />
        <img
            src={`${path}/${name}.${fallback}`}
            alt={alt}
            className={className}
        />
    </picture>
));

Image.displayName = 'Image';

Image.propTypes = {
    path: PropTypes.string,
    name: PropTypes.string.isRequired,
    fallback: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    pictureClassName: PropTypes.string,
};

export default Image;
