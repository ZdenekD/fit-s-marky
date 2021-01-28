/* eslint-disable react/display-name */
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useId} from 'react-id-generator';
import icons from '../../UI/icons';
import getPrefix from '../../helpers/getPrefix';
import pages from '../../data/pages';
import styles from './nav.module.css';

const Nav: React.FC = () => {
    const router = useRouter();
    const prefix = getPrefix();
    const ids = useId(pages.length, prefix);

    return (
        <nav className={styles.nav} data-test="component-nav">
            <ul className={styles.list}>
                {pages.map((page, i) => {
                    const isActive = router.pathname === page.pathname;

                    return (
                        <li key={ids[i]} className={`${styles.item} ${isActive ? styles.itemActive : ''}`}>
                            {page.icon && (
                                <>
                                    {icons[page.icon]()}
                                </>
                            )}
                            <Link passHref href={page.pathname}>
                                <a href={page.pathname} className={`${styles.link} ${isActive ? styles.linkActive : ''}`}>{page.title}</a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Nav;
