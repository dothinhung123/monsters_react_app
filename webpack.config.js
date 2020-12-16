
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports ={
    entry:{
        polyfill:"@babel/polyfill",
        main:"./src/index.js",
        
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer:{
        contentBase:path.resolve(__dirname,"dist"),
        open: 'chrome'
    },

    module:{
        
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'

                }
            },
            {
                test:/\.css$/,
                use :['style-loader','css-loader']
            },
            {
                test:/\.html$/,
                use :{
                    loader:'html-loader'
                }
            },
         
        ]
    },
    
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ],
    output:{
        filename:"[name].bundle.js",
        path:path.join(__dirname,"dist")
    }
}