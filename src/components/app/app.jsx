import React from 'react';
import styles from './app.css';
import Header from '../header';
import Navigation from '../navigation';
import Content from '../content';
import Footer from '../footer';

const App = () => (
    <section className={styles.default}>
        <Header />
        <Navigation />
        <Content />
        <Footer />
    </section>
);

export default App;
