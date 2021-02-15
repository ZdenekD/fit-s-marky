import Link from 'next/link';
import Logo from '../logo';
import Menu from '../menu';
import styles from './header.module.css';

const Header: React.FC = () => (
    <header className={styles.header} data-test="component-header">
        <Menu />
        <Logo />
        <Link passHref href="/">
            <a href="/" className={styles.logo}>Fit&nbsp;<strong className={styles.strong}>s</strong>&nbsp;Marky</a>
        </Link>
    </header>
);

export default Header;
