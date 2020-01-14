import React from 'react';
import PropTypes from 'prop-types';
import styles from './content.css';

const Content = ({content}) => (
    <article className={styles.default}>
        {content}
    </article>
);

Content.propTypes = {
    content: PropTypes.object.isRequired,
};

export default Content;
