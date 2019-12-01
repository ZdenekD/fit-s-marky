import React from 'react';
import styles from './footer.css';

const Footer = () => (
    <footer className={styles.default}>
        &copy; Fit s Marky | All Rights Reserved
        Telefon: <a href="tel:728618337" title="Telefon">728 618 337</a>
        E-mail: <a href="mailto:fitsmarky@seznam.cz" title="E-mail: fitsmarky@seznam.cz">fitsmarky@seznam.cz</a>
        <a href="https://www.facebook.com/fitsmarky" title="Facebook" target="_blank" rel="noreferrer noopener">Facebook</a>
    </footer>
);

export default Footer;
