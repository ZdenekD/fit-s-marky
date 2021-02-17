import Link from 'next/link';
import Logo from '../logo';
import Menu from '../menu';
import styles from './header.css';

interface IHeader {
    title?: string
}

const Header: React.FC<IHeader> = ({title}) => (
    <header className={styles.header} data-test="component-header">
        <Menu />
        <Logo />
        <Link passHref href="/">
            <h1>
                <span className="_visuallyhidden">{title}</span>
                <a href="/" className={styles.logo}>Fit&nbsp;<strong className={styles.strong}>s</strong>&nbsp;Marky</a>
            </h1>
        </Link>
    </header>
);

export default Header;
