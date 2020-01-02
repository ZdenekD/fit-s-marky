import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './navigation.css';
import data from '../../data/pages.json';

const Navigation = () => {
    const menu = data.pages.map(item => (
        <li key={item.id} className={styles.item}>
            <NavLink
                to={item.slug}
                className={`${styles.link} ${styles[item.icon]}`}
                activeClassName={styles.active}
                aria-label={item.title}
            >
                <span className={styles.title}>{item.title}</span>
            </NavLink>
        </li>
    ));

    return (
        <nav className={styles.default}>
            <ul className={styles.list}>
                {menu}
            </ul>
        </nav>
    );
};

export default Navigation;
