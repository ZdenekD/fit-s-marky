import React from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';
import Header from '../header';
import Footer from '../footer';
import Nav from '../nav';
import Aside from '../aside';
import Content from '../content';
import Alert from '../../UI/alert';
import {useStateValue} from '../../state';
import pages from '../../data/pages';
import VariantsEnum from '../../types/VariantsEnum';
import styles from './layout.module.css';

interface ILayout {
    children: React.ReactNode
    className?: string
}

const Layout: React.FC<ILayout> = ({children, className = ''}) => {
    const router = useRouter();
    const {state} = useStateValue();
    const [item] = pages.filter(page => `/${page.slug}` === router.pathname);

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale = 1.0, shrink-to-fit=no" />
                <meta name="author" content="ZdenekD, zdenekd.cz" />
                <title>{item?.title || 'Fit s Marky'}</title>
                <meta name="description" content={item?.description} />
                <meta property="og:title" content={item?.title} />
                <meta property="og:type" content="fitness.course" />
                <meta property="og:description" content={item?.description} />
                <meta property="og:url" content="https://fit-s-marky.cz/" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={item?.title} />
                <meta name="twitter:description" content={item?.description} />
                <meta name="twitter:site" content="https://fit-s-marky.cz/" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;600&display=swap&subset=latin-ext" rel="stylesheet" crossOrigin="anonymous" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#6c6ce5" />
                <meta name="theme-color" content="#ffffff" />
                {process.env.NODE_ENV === 'production' && (
                    <script async defer data-domain="fit-s-marky.cz" src="https://plausible.io/js/plausible.js" />
                )}
            </Head>
            <main className={`${styles.main} ${state.message.content ? styles.blur : ''}`}>
                <Header />
                <Nav />
                <Aside />
                <Content className={className}>
                    {children}
                </Content>
                <Footer />
            </main>
            <Alert isOpen={!!state.message.content} variant={VariantsEnum[state.message.variant]} timeout={3}>
                {state.message.content}
            </Alert>
        </>
    );
};

export default Layout;
