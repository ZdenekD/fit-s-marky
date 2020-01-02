import React from 'react';
import styles from './app.css';
import Header from '../header';
import Navigation from '../navigation';
import Content from '../content';
import Footer from '../footer';

const App = () => (
    <section className={styles.default}>
        <aside className={styles.sidebar}>
            <Header />
            <Navigation />
        </aside>
        <div className={styles.content}>
            <Content />
            <Footer />
        </div>
    </section>
);

export default App;
