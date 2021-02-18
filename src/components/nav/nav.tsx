import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {motion} from 'framer-motion';
import icons from '../../UI/icons';
import Anchor from '../../UI/anchor';
import pages from '../../data/pages';
import useWindowSize from '../../hooks/useWindowSize';
import {useStateValue} from '../../state';
import styles from './nav.css';

const Nav: React.FC = () => {
    const router = useRouter();
    const {state} = useStateValue();
    const [isOpen, setOpen] = React.useState(state.menu.isOpen);
    const [isMobile, setMobile] = React.useState(false);
    const {width} = useWindowSize();
    const nav = {
        initial: {opacity: isOpen ? 1 : 0},
        enter: {
            opacity: isOpen ? 1 : 0,
            transition: {
                ease: 'easeIn',
                duration: 0.2,
            },
        },
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
    const item = isMobile ? {
        initial: {
            opacity: 0,
            translateY: 200,
        },
        enter: {
            opacity: 1,
            translateY: 0,
        },
        exit: {opacity: 0},
    } : {
        initial: {translateX: 5},
        enter: {translateX: 0},
        exit: {translateX: 5},
    };

    if (width >= 1100 && isMobile) {
        setMobile(false);
    }

    if (!isMobile && !isOpen) {
        setOpen(true);
    }

    if (width < 1100 && !isMobile) {
        setMobile(true);
    }

    if (isMobile && isOpen !== state.menu.isOpen) {
        setOpen(state.menu.isOpen);
    }

    return (
        <motion.nav
            initial="initial"
            animate="enter"
            variants={nav}
            className={`${styles.nav} ${isOpen ? styles.isOpen : ''}`}
            data-test="component-nav"
        >
            {isOpen && (
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
                                {page.icon && (<>{icons[page.icon]()}</>)}
                                <Link passHref href={`/${page.slug}`}>
                                    <Anchor href={`/${page.slug}`} className={`${styles.link} ${isActive ? styles.linkActive : ''}`}>
                                        {page.title}
                                    </Anchor>
                                </Link>
                            </motion.li>
                        );
                    })}
                </motion.ul>
            )}
        </motion.nav>
    );
};

export default Nav;
