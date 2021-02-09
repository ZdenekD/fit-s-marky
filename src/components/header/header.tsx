import Link from 'next/link';
import styles from './header.module.css';

const Header: React.FC = () => (
    <header className={styles.header} data-test="component-header">
        <Link passHref href="/">
            <a href="/" className={styles.logo}>Fit s Marky</a>
        </Link>
    </header>
);

export default Header;