const glob = require('glob');
const path = require('path');
const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: mode,
    entry: glob.sync('./src/**/*.js').reduce((acc, path) => {
        const entry = path.replace(/^.*[\\\/]/, '').replace('.js', '');
        acc[entry] = path;
        return acc;
    }, {}),
    output: {
        filename: './assets/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
        minimize: mode === 'development' ? false : true,
    },
    watchOptions: {
        poll: true,
        ignored: /node_modules/,
        aggregateTimeout: 800,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                  },
                },
            },
            {
                test: /\.css$/,
                use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        url: false,
                        importLoaders: 1,
                    },
                },
                'postcss-loader',
            ],
        },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './assets/[name].css',
        }),
        new ESLintPlugin({
            fix: true,
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: '**/*',
                    context: path.resolve(__dirname, 'src'),
                    globOptions: {
                        ignore: [
                            '**/src/assets/**/*.js',
                            '**/src/bundles/**/*'
                        ],
                    }
                }
            ]
        })
    ],
    resolve: {
        extensions: ['.js'],
        preferRelative: true
    },
};