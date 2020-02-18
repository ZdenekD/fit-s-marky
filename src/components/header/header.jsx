import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import styles from './header.css';
import png from '../../images/logo.png';
import webp from '../../images/logo.webp';

const Header = ({location}) => (
    <header className={styles.default} data-test="component-header">
        <Link
            to="/"
            className={`${styles.link} ${location.pathname === '/' ? styles.disabled : ''}`}
            aria-label="Logo Fit s Marky"
        >
            <picture className={styles.picture}>
                <source srcSet={png} type="image/png" />
                <source srcSet={webp} type="image/webp" />
                <img src={png} alt="" className={styles.logo} />
            </picture>
        </Link>
    </header>
);

Header.propTypes = {
    location: PropTypes.object.isRequired,
};

export default withRouter(Header);
