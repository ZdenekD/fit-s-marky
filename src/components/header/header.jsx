import React from 'react';
import styles from './header.css';
import png from '../../images/logo.png';
import webp from '../../images/logo.webp';

const header = () => <header className={styles.default}>
    <a href="/">
        <picture>
            <source srcSet={png} type="image/webp" className={styles.logo} />
            <source srcSet={webp} type="image/png" className={styles.logo} />
            <img src={png} alt="" className={styles.logo} />
        </picture>
    </a>
</header>;

export default header;
