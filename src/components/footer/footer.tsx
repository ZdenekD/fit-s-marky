import React from 'react';
import icons, {IconsEnum} from '../../UI/icons';
import Anchor from '../../UI/anchor';
import styles from './footer.module.css';

const Footer: React.FC = () => (
    <footer className={styles.footer} data-test="component-footer">
        <div className={styles.rights}>{icons[IconsEnum.copyright](16)} Fit s Marky | All Rights Reserved</div>
        <div className={styles.contact}>
            <span className={styles.link}>
                {icons[IconsEnum.phone](20)}
                <Anchor href="tel:728618337" title="Telefon">728 618 337</Anchor>
            </span>
            <span className={styles.link}>
                {icons[IconsEnum.mail](20)}
                <Anchor href="mailto:fitsmarky&#64;seznam.cz" title="E-mail: fitsmarky&#64;seznam.cz">fitsmarky&#64;seznam.cz</Anchor>
            </span>
            <span className={styles.link}>
                <Anchor
                    href="https://www.facebook.com/fitsmarky"
                    title="Facebook"
                    className={styles.social}
                    target="_blank"
                >
                    {icons[IconsEnum.thumbUp]()}
                </Anchor>
            </span>
        </div>

    </footer>
);

export default Footer;
