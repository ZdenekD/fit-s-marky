import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

const Head = ({title, meta}) => (
    <Helmet>
        <title data-test="component-title">{title}</title>
        {meta}
    </Helmet>
);

Head.propTypes = {
    title: PropTypes.string,
    meta: PropTypes.array,
};

export default Head;
