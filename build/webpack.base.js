const options = require('./options');
const autoprefixer = require('autoprefixer');

const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    resolve: {
        modules: [
            options.paths.root,
            options.paths.resolve('node_modules')
        ],
        alias: {
            src: 'src',
            vue$: 'vue/dist/vue.common.js'
        },
        extensions: ['.js', '.json', '.vue', '.less']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // configured in the script specific webpack configs
                    },
                    postcss: [
                        autoprefixer({
                            browsers: ['last 2 versions', 'ie > 9', 'Firefox ESR', 'android >= 4.0']
                        })
                    ]
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!less-loader'
                })
            }
        ]
    },

    // Stats is used to customize Webpack's console output
    // https://webpack.js.org/configuration/stats/
    stats: {
        hash: false,
        colors: true,
        chunks: false,
        version: false,
        children: false,
        timings: true
    }
};
