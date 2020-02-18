import React from 'react';
import styles from './footer.css';

const Footer = () => (
    <footer className={styles.default} data-test="component-footer">
        <span className={styles.rights}>&copy; Fit s Marky | All Rights Reserved</span>
        <span className={styles.link}>
            Telefon: <a href="tel:728618337" title="Telefon">728 618 337</a>
        </span>
        <span className={styles.link}>
            E-mail: <a href="mailto:fitsmarky@seznam.cz" title="E-mail: fitsmarky@seznam.cz">fitsmarky@seznam.cz</a>
        </span>
        <a href="https://www.facebook.com/fitsmarky" title="Facebook" className={styles.social} target="_blank" rel="noreferrer noopener">Facebook</a>
    </footer>
);

export default Footer;
