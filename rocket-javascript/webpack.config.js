module.exports = {
    entry: ['@babel/polyfill','./src/newmain.js'], //classe base do código que será convertido em outras versões de js
    output: {
        path: __dirname,
        filename: 'newbundle.js'
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [{
            test: /\.js$/,           // aqui a expressão regular pode ser circundada por '' ou n
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }]
    }
}