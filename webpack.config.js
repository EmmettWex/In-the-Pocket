// webpack.config.js

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
// const path = require('path');

// everything below was already here.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    entry: [
        path.resolve(__dirname, 'src', 'index.js'),
        path.resolve(__dirname, 'src', 'index.scss')
    ],
    output: {
        path: path.join(__dirname, 'dist'), // bundled file in dist/
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, // applies to js files
                use: ['babel-loader'], // transpiles your js
                exclude: /node_modules/, // don't transpile node modules
            },
            {
                test: /\.s?[ac]ss$/, // applies to css/scss/sass files
                use: [
                    MiniCssExtractPlugin.loader, // create bundled css file
                    {
                        loader: 'css-loader', // resolves @import statements
                        options: { url: false } // don't resolve url() statements
                    },
                    'sass-loader', // compiles sass to css
                ]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()]
};

module.exports = (env, argv) => {
    if (argv.mode === 'production') {
        config.devtool = 'source-map';
    } else {
        config.devtool = 'eval-source-map';
    }

    return config;
}