/* eslint-disable react/display-name */
import Link from 'next/link';
import {useRouter} from 'next/router';
import icons from '../../UI/icons';
import pages from '../../data/pages';
import styles from './nav.module.css';
import {useStateValue} from '../../state';
import ActionsEnum from '../../state/cursor/type/actions';
import Anchor from '../../UI/anchor';

const Nav: React.FC = () => {
    const router = useRouter();
    const {dispatch} = useStateValue();
    const handleClick = (event: React.MouseEvent) => {
        dispatch({
            type: ActionsEnum.save,
            payload: {
                cursor: {
                    top: event.clientY,
                    left: event.clientX,
                },
            },
        });
    };

    return (
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
                                <Anchor href={`/${page.slug}`} className={`${styles.link} ${isActive ? styles.linkActive : ''}`} onClick={handleClick}>
                                    {page.title}
                                </Anchor>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Nav;
