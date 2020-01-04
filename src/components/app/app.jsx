import React from 'react';
import {Route, Switch} from 'react-router-dom';
import loadable from '@loadable/component';
import Head from '../head';
import Header from '../header';
import Navigation from '../navigation';
import Content from '../content';
import Footer from '../footer';
import data from '../../data/pages.json';
import getMeta from '../../helpers/meta';
import styles from './app.css';

const Page = loadable(props => import(`../pages/${props.page}`));
const App = () => {
    const routes = data.pages.map(item => (
        <Route path={`/${item.slug}`} key={item.id}>
            <Head title={item.title} meta={getMeta(item)} />
            <Content content={<Page page={item.id} />} />
        </Route>
    ));

    return (
        <section className={styles.default}>
            <aside className={styles.sidebar}>
                <Header />
                <Navigation />
            </aside>
            <div className={styles.content}>
                <Switch>
                    <Route exact path="/">
                        <Head title={data.index.title} meta={getMeta(data.index)} />
                        <Content content={<Page page={data.index.id} />} />
                    </Route>
                    {routes}
                    <Route>
                        <Content content={<Page page="notfound" />} />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </section>
    );
};

export default App;
