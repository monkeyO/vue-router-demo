var webpack              =  require("webpack");
var path                 =  require("path");
var webpackDevServer     =  require("webpack-dev-server");
var HtmlWebpackPlugin    =  require("html-webpack-plugin");
var ExtractTextPlugin    =  require("extract-text-webpack-plugin");// 抽离css样式
var CleanPlugin          =  require("clean-webpack-plugin"); //用于在building之前删除你以前build过的文件
var webpackConfig     = module.exports = {};
//init
var production  = process.env.NODE_ENV === 'production';
var domain   = process.env.DOMAIN;
module.exports = {
    entry:{
        app:'./app.js'
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        publicPath: domain+'/dist/',
        filename: production ? '[name].[hash].js': '[name].js'
    },
    module:{
        loaders:[
            {
               test: /\.css$/,
               use: ExtractTextPlugin.extract({
                 fallback: "style-loader",
                 use: "css-loader",
                 publicPath: path.resolve(__dirname, 'dist')
               })
            },
            {
               test: /\.vue$/,
               loader: 'vue-loader', 
               options: {
                       // vue-loader options go here
                 }  
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/ 
            },
            {
                 test: /\.(png|jpg|gif)$/,
                 loader: 'file-loader'
            },
            { 
                 test:/\.(eot(|\?v=.*)|woff(|\?v=.*)|woff2(|\?v=.*)|ttf(|\?v=.*)|svg(|\?v=.*))$/,
                 loader: 'file-loader'
            }
        ]
    },
    plugins:[
       new HtmlWebpackPlugin({
            title: 'my-vue',
            filename: '../index.html',
            template: './template.html'
       }),
       new ExtractTextPlugin({ //与outputjs一致
           filename: production? 'app.[hash].css': 'app.css',
       }),
       new webpack.DefinePlugin({
           'process.env': {
            NODE_ENV: '"production"'
         }
       })
    ],
    resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
   devServer: {
    contentBase : "./",
    // open : true,
    port: 9000,
    inline: true
  }
}

if (production) {
  webpackConfig.plugins.concat([
    // clean build file
    new CleanPlugin('dist')
    ]);
}



