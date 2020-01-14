import React from 'react';
import {Route, Switch} from 'react-router-dom';
import loadable from '@loadable/component';
import Error from '../error';
import Head from '../head';
import Header from '../header';
import Loader from '../loader';
import Navigation from '../navigation';
import Content from '../content';
import Footer from '../footer';
import data from '../../data/pages.json';
import getMeta from '../../helpers/meta';
import styles from './app.css';

const Page = loadable(props => import(`../pages/${props.content}`), {
    fallback: <Loader />,
});
const App = () => {
    const routes = data.pages.map(item => (
        <Route path={`/${item.slug}`} key={item.id}>
            <Head title={item.title} meta={getMeta(item)} />
            <Content content={<Page id={item.id} content={item.content} title={item.title} />} />
        </Route>
    ));

    return (
        <section className={styles.default}>
            <aside className={styles.sidebar}>
                <Header />
                <Navigation />
            </aside>
            <div className={styles.content}>
                <Error>
                    <Switch>
                        <Route exact path="/">
                            <Head title={data.index.title} meta={getMeta(data.index)} />
                            <Content content={<Page content={data.index.content} />} />
                        </Route>
                        {routes}
                        <Route>
                            <Content content={<Page content="notfound" />} />
                        </Route>
                    </Switch>
                </Error>
                <Footer />
            </div>
        </section>
    );
};

export default App;
