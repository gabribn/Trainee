const path = require('path')

module.exports={
    entry: path.resolve(__dirname, 'src','index.js'),
    output:{
        path: path.resolve(__dirname, 'public'),
        __filename: 'bundle.js'
    },
    devServer:{
        contentBase:path.resolve(__dirname, 'public'),
    },
    //regras
    module :{
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader',
            }
        },
    {
        test:/\.css$/,
        exclude:/node_modules/,
        use:[
            {loader :'style-loader'},
            {loader :'css-loader'},
        ]
    },
        {
            test:/.*\.(gif|png|jpeg)$/i,
            use:{
                loader:'file-loader',
            }
        }
     ]
    },
};