import React from 'react';
import Head from 'next/head';

interface ILayout {
    children: React.ReactNode
}

const Layout: React.FC<ILayout> = ({children}) => (
    <>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale = 1.0, shrink-to-fit=no" />
            <meta
                name="description"
                content="Jmenuji se Markéta Dítětová a nabízím komplexní výživové poradenství, individuální lekce pilates a powerjógy."
                data-react-helmet="true"
            />
            <meta name="author" content="ZdenekD, zdenekd.cz" />
            <title>Fit s Marky</title>
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
            <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,700&display=swap&subset=latin-ext" rel="stylesheet" crossOrigin="anonymous" />
            {process.env.NODE_ENV === 'production' && (
                <script async defer data-domain="fit-s-marky.cz" src="https://plausible.io/js/plausible.js"></script>
            )}
        </Head>
        <main>
            {children}
        </main>
    </>
);

export default Layout;
