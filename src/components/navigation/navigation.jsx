import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './navigation.css';
import data from '../../data/pages.json';

const Navigation = () => {
    const menu = data.pages.map(page => (
        <li key={page.id} className={styles.item}>
            <NavLink
                to={`/${page.slug}`}
                className={`${styles.link} ${styles[page.icon]}`}
                activeClassName={styles.active}
                aria-label={page.title}
            >
                <span className={styles.title}>{page.title}</span>
            </NavLink>
        </li>
    ));

    return (
        <nav className={styles.default}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink
                        exact
                        to="/"
                        className={`${styles.link} ${styles[data.index.id]}`}
                        activeClassName={styles.active}
                        aria-label={data.index.title}
                    >
                        <span className={styles.title}>{data.index.title}</span>
                    </NavLink>
                </li>
                {menu}
            </ul>
        </nav>
    );
};

export default Navigation;
