import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    // eslint-disable-next-line class-methods-use-this
    render(): JSX.Element {
        return (
            <Html lang="cs">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
