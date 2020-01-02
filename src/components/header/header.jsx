import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import styles from './header.css';
import png from '../../images/logo.png';
import webp from '../../images/logo.webp';

const Header = () => {
    const isHomepage = useLocation().pathname === '/';

    return (
        <header className={styles.default}>
            <Link
                to={'/'}
                className={`${styles.link} ${isHomepage ? styles.disabled : ''}`}
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
};

export default Header;
