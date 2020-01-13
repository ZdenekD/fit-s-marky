import React from 'react';
import {NavLink} from 'react-router-dom';
import Image from '../image';
import styles from './gallery.css';
import data from '../../data/pages.json';

const gallery = () => {
    const menu = data.pages.map(page => (
        page.secondary
            ? <NavLink
                to={`/${page.slug}`}
                className={styles.link}
                aria-label={page.title}
                key={page.id}
            >
                <figure className={styles.figure}>
                    <Image
                        path="/images"
                        name={page.image}
                        fallback="jpg"
                        className={styles.image}
                    />
                    <figcaption className={styles.caption}>
                        <span className={styles.title}>
                            {page.title}
                        </span>
                    </figcaption>
                </figure>
            </NavLink> : null
    ));

    return (
        <>
            <header>
                <h2>Fotogalerie</h2>
                <div className={styles.gallery}>
                    {menu}
                </div>
            </header>
        </>
    );
};

export default gallery;
