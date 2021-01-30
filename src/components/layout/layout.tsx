import React from 'react';
import Head from 'next/head';
import {useRouter} from 'next/router';
import Header from '../header';
import Footer from '../footer';
import Nav from '../nav';
import Content from '../content';
import Decoration from '../decoration';
import pages from '../../data/pages';
import styles from './layout.module.css';

interface ILayout {
    children: React.ReactNode
    className?: string
}

const Layout: React.FC<ILayout> = ({children, className = ''}) => {
    const router = useRouter();
    const [item] = pages.filter(page => `/${page.slug}` === router.pathname);

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale = 1.0, shrink-to-fit=no" />
                <meta name="author" content="ZdenekD, zdenekd.cz" />
                <title>{item?.title}</title>
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
                {process.env.NODE_ENV === 'production' && (
                    <script async defer data-domain="fit-s-marky.cz" src="https://plausible.io/js/plausible.js"></script>
                )}
            </Head>
            <main className={styles.main}>
                <Header />
                <Nav />
                <Content className={className}>
                    {children}

                    <Decoration />
                </Content>
                <Footer />
            </main>
        </>
    );
};

export default Layout;
