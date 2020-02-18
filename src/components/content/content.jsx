import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './content.css';

const Content = ({content}) => {
    const [isMount, setMount] = useState(false);

    useEffect(() => {
        setMount(true);
    }, []);

    return (
        <article className={`${styles.default} ${isMount ? styles.mounted : ''}`} data-test="component-content">
            {content}
        </article>
    );
};

Content.propTypes = {
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.node,
        PropTypes.number,
    ]).isRequired,
};

export default Content;
