import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import Image from '../image';
import Modal from '../modal';
import data from '../../data/gallery.json';
import styles from './gallery.css';

const Gallery = ({id = '', title = ''}) => {
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [modalContent, setModalContent] = React.useState('');
    const handleOpen = item => {
        const content = <Image
            path="/images"
            name={item}
            fallback="jpg"
            className={styles.modalImage}
            pictureClassName={styles.modalPicture}
        />;

        setModalContent(content);
        setModalOpen(true);
    };
    const handleClose = () => setModalOpen(false);
    const [gallery] = data.galleries.filter(item => item.id === id);
    const content = gallery?.images.length > 0
        ? gallery.images.map(item => (
            <li key={item} className={styles.item}>
                <button
                    type="button"
                    onClick={() => handleOpen(item)}
                    className={styles.button}
                    aria-label="Obrázek galerie"
                    data-test="component-button"
                >
                    <Image
                        path="/images"
                        name={item}
                        fallback="jpg"
                        className={styles.image}
                        pictureClassName={styles.picture}
                    />
                </button>
            </li>
        )) : null;

    return (
        <>
            <header>
                <div className={styles.navigation}>
                    <NavLink
                        to={'/fotogalerie'}
                        className={styles.heading}
                        aria-label="Zpět na výber fotogalerie"
                    ><h2>Fotogalerie</h2></NavLink>
                    <NavLink
                        to={'/fotogalerie'}
                        className={styles.link}
                        aria-label="Zpět na výber fotogalerie"
                    >&lt; Zpět</NavLink>
                </div>
                {title && (
                    <h3 data-test="component-title">{title}</h3>
                )}
            </header>
            <section className={styles.gallery} data-test="component-gallery">
                <ul className={styles.list}>
                    {content}
                </ul>
            </section>
            <Modal
                content={modalContent}
                isOpen={isModalOpen}
                handleClose={handleClose}
            />
        </>
    );
};

Gallery.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
};

export default Gallery;
