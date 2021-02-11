/* eslint-disable react/display-name */
import Link from 'next/link';
import {useRouter} from 'next/router';
import {motion} from 'framer-motion';
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
    const list = {
        initial: {opacity: 0.25},
        enter: {
            opacity: 1,
            transition: {
                ease: 'easeInOut',
                duration: 0.4,
                staggerChildren: 0.1,
            },
        },
        exit: {
            opacity: 0.25,
            transition: {
                ease: 'easeInOut',
                duration: 0.4,
                staggerChildren: 0.1,
            },
        },
    };
    const item = {
        initial: {translateX: 5},
        enter: {translateX: 0},
        exit: {translateX: 5},
    };

    return (
        <nav className={styles.nav} data-test="component-nav">
            <motion.ul
                initial="initial"
                animate="enter"
                exit="exit"
                variants={list}
                className={styles.list}
            >
                {pages.map(page => {
                    const isActive = router.pathname.includes(`/${page.slug}`);

                    return (
                        <motion.li
                            key={page.id}
                            variants={item}
                            className={`${styles.item} ${isActive ? styles.itemActive : ''}`}
                        >
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
                        </motion.li>
                    );
                })}
            </motion.ul>
        </nav>
    );
};

export default Nav;
