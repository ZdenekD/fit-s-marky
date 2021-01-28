import React from 'react';
import styles from './loader.module.css';

const Loader: React.FC = () => (
    <div className={styles.loader} data-test="component-loader" />
);

export default Loader;
