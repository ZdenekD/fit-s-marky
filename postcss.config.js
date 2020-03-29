module.exports = () => ({
    modules: true,
    map: process.env.NODE_ENV === 'development',
    plugins: {
        stylelint: process.env.NODE_ENV === 'development' ? {} : undefined,
        'postcss-import': {},
        'postcss-nested': {},
        'postcss-normalize': {},
        'postcss-preset-env': {
            stage: 1,
            importFrom: 'src/assets/styles/utilities/media.css',
        },
        'postcss-custom-media': {},
        'postcss-reporter': {clearReportedMessages: true},
        cssnano: process.env.NODE_ENV === 'production',
    },
});
