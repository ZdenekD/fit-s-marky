import icons, {IconsEnum} from '../../UI/icons/icons';
import styles from './footer.module.css';

const Footer: React.FC = () => (
    <footer className={styles.footer} data-test="component-footer">
        <div className={styles.rights}>&copy; Fit s Marky | All Rights Reserved</div>
        <div className={styles.contact}>
            <span className={styles.link}>
                Telefon:&nbsp;<a href="tel:728618337" title="Telefon">728 618 337</a>
            </span>
            <span className={styles.link}>
                E-mail:&nbsp;<a href="mailto:fitsmarky@seznam.cz" title="E-mail: fitsmarky@seznam.cz">fitsmarky@seznam.cz</a>
            </span>
            <span className={styles.link}>
                <a href="https://www.facebook.com/fitsmarky" title="Facebook" className={styles.social} target="_blank" rel="noreferrer noopener">
                    {icons[IconsEnum.thumbUp]()}
                </a>
            </span>
        </div>
    </footer>
);

export default Footer;
