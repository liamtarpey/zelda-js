const path = require('path');

/* Main config */
const Config = {
    entry: './src/scripts/init.js',
    output: {
        filename: 'scripts/bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['es2015'] },
                    }
                ],
            },
        ]
    }
};

module.exports = Config;
