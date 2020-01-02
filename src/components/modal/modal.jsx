import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import styles from './modal.css';

const Modal = ({
    content,
    contentLabel,
    className,
    isOpen,
    handleClose,
}) => (
    <ReactModal
        isOpen={isOpen}
        contentLabel={contentLabel}
        onRequestClose={handleClose}
        className={`${styles.default} ${className || ''}`}
        bodyOpenClassName={styles.opened}
        overlayClassName={styles.overlay}
    >
        {content}
        <button type="button" className={styles.close} onClick={handleClose}>&times;</button>
    </ReactModal>
);

ReactModal.setAppElement('#js_main');

Modal.propTypes = {
    content: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,
    contentLabel: PropTypes.string,
    className: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func,
};

Modal.defaultProps = {
    contentLabel: '',
    className: '',
};

export default Modal;