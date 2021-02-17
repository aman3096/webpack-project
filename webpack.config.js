const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode= "development"

module.exports  ={
    mode: mode,

    module:{
        rules: [
            {
                test:/\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
           test:/\.js$/,
            exclude:/node_modules/,
            use: {
                loader: "babel-loader",
            }
            }
        ]
    },

    plugins: [new MiniCssExtractPlugin()],
    devtool:"source-map",
    devServer: {
        contentBase: "./dist",
    },
}