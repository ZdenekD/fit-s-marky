import React from 'react';

const getMeta = item => (
    [
        <meta name="description" content={item.description} key={item.id} />,
        <meta property="og:title" content={item.title} key={item.id} />,
        <meta property="og:type" content="website" key={item.id} />,
        <meta property="og:description" content={item.description} key={item.id} />,
        <meta property="og:url" content="https://fit-s-marky.cz/" key={item.id} />,
        <meta name="twitter:card" content="summary" key={item.id} />,
        <meta name="twitter:title" content={item.title} key={item.id} />,
        <meta name="twitter:description" content={item.description} key={item.id} />,
        <meta name="twitter:domain" content="https://fit-s-marky.cz/" key={item.id} />,
    ]
);

export default getMeta;
