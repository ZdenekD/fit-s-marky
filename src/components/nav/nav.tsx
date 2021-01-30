/* eslint-disable react/display-name */
import Link from 'next/link';
import {useRouter} from 'next/router';
import {Player} from '@lottiefiles/react-lottie-player';
import icons from '../../UI/icons';
import pages from '../../data/pages';
import styles from './nav.module.css';

const Nav: React.FC = () => {
    const router = useRouter();

    return (
        <aside className={styles.aside}>
            <nav className={styles.nav} data-test="component-nav">
                <ul className={styles.list}>
                    {pages.map(page => {
                        const isActive = router.pathname.includes(`/${page.slug}`);

                        return (
                            <li key={page.id} className={`${styles.item} ${isActive ? styles.itemActive : ''}`}>
                                {page.icon && (
                                    <>
                                        {icons[page.icon]()}
                                    </>
                                )}
                                <Link passHref href={`/${page.slug}`}>
                                    <a href={`/${page.slug}`} className={`${styles.link} ${isActive ? styles.linkActive : ''}`}>{page.title}</a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <div className={styles.animation}>
                <Player
                    autoplay
                    loop
                    src="/animation_01.json"
                />
            </div>
        </aside>
    );
};

export default Nav;
