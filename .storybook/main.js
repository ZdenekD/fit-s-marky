const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.js'],
    webpackFinal: async (config, {configType}) => {
        const isProduction = configType === 'production';
        const index = config.module.rules.findIndex(item => item.test.toString() === /\.css$/.toString());

        config.module.rules.splice(index, 1);
        config.module.rules.push({
            test: /\.css$/,
            use: [
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            mode: 'local',
                            localIdentName: !isProduction ? '[name]-[local]--[hash:base64:6]' : '[hash:base64:8]',
                            context: path.resolve(__dirname, 'src'),
                        },
                        sourceMap: !isProduction,
                    },
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: 'inline',
                    },
                },
            ],
        })

        return config;
    }
};
