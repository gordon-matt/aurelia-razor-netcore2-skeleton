const path = require('path');
const webpack = require('webpack');
const { AureliaPlugin } = require("aurelia-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('vendor.css');

const bundleOutputDir = "./wwwroot/dist";

module.exports = (env, argv) => {
    if ((!argv || !argv.mode) && process.env.ASPNETCORE_ENVIRONMENT === "Development") {
        argv = { mode: "development" };
    }
    console.log("mode=", argv.mode);
    const isDevBuild = argv.mode !== "production";
    const cssLoader = { loader: isDevBuild ? "css-loader" : "css-loader?minimize" };

    return [{
        target: "web",
        mode: isDevBuild ? "development" : "production",
        entry: {
            app: ['aurelia-bootstrapper'],
            vendor: ['bluebird', 'jquery', 'bootstrap'],
        },
        resolve: {
            extensions: ['.js'],
            modules: ['wwwroot', 'node_modules'],
        },
        output: {
            path: path.resolve(bundleOutputDir),
            publicPath: 'dist/',
            filename: "[name].js",
            //chunkFilename: "[name].js"
            //filename: 'vendor.js'
        },
        //optimization: {
        //    splitChunks: {
        //        cacheGroups: {
        //            commons: {
        //                test: /[\\/]node_modules[\\/]/,
        //                name: "vendor",
        //                chunks: "all"
        //            }
        //        }
        //    }
        //},
        module: {
            rules: [
                { test: /\.(woff|woff2)(\?|$)/, loader: "url-loader?limit=1" },
                { test: /\.(png|eot|ttf|svg)(\?|$)/, loader: "url-loader?limit=100000" },
                { test: /\.html$/i, use: "html-loader" },
                { test: /\.css(\?|$)/, include: [/node_modules/], loader: extractCSS.extract([isDevBuild ? 'css-loader' : 'css-loader?minimize']) },
                { test: /\.css$/i, exclude: [/node_modules/], issuer: /\.html$/i, use: cssLoader },
                { test: /\.css$/i, exclude: [/node_modules/], issuer: [{ not: [{ test: /\.html$/i }] }], use: ["style-loader", cssLoader] },

                { test: /\.js?$/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } }
            ]
        },
        //devtool: isDevBuild ? "source-map" : false,
        plugins: [
            new webpack.DefinePlugin({ IS_DEV_BUILD: JSON.stringify(isDevBuild) }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            }),
            new AureliaPlugin({ aureliaApp: "main" }),
            extractCSS//,
            //new webpack.optimize.UglifyJsPlugin()
        ]
    }];
};