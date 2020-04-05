const fs = require('fs');
const {SitemapStream, streamToPromise} = require('sitemap');
const config = require('../config.json');
const {pages} = require('../src/data/pages.json');

const sitemap = new SitemapStream({hostname: config.production});

sitemap.write({
    url: '/',
    changefreq: 'yearly',
    priority: 1,
});

pages.forEach(page => sitemap.write({
    url: `/${page.slug}`,
    changefreq: 'yearly',
    priority: 0.4,
}));

sitemap.end();

streamToPromise(sitemap)
    .then(item => fs.writeFileSync(`${config.output}/sitemap.xml`, item.toString()))
    .catch(error => console.log(error));
