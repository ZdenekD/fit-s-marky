import React from 'react';
import {Route, Switch} from 'react-router-dom';
import loadable from '@loadable/component';
import Head from '../head';
import data from '../../data/pages.json';
import styles from './content.css';
import getMeta from '../../helpers/meta';

const Page = loadable(props => import(`../pages/${props.page}`));
const Content = () => {
    const pages = data.pages.map(item => (
        <Route path={`/${item.slug}`} key={item.id}>
            <Head title={item.title} meta={getMeta(item)} />
            <Page page={item.id} />
        </Route>
    ));

    return (
        <article className={styles.default}>
            <Switch>
                {pages}
            </Switch>
        </article>
    );
};

export default Content;
