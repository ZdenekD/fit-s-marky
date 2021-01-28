import styles from './header.module.css';

const Header: React.FC = () => (
    <header className={styles.header} data-test="component-header">
        <span className={styles.logo}>LOGO</span>
    </header>
);

export default Header;
