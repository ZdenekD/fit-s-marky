import Link from 'next/link';
import Menu from '../menu';
import styles from './header.module.css';

const Header: React.FC = () => (
    <header className={styles.header} data-test="component-header">
        <Menu />
        <Link passHref href="/">
            <a href="/" className={styles.logo}>Fit s Marky</a>
        </Link>
    </header>
);

export default Header;
