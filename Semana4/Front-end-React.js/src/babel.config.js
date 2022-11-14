module.exports={
    presets:[
        '@babel/preset-env',//converte funcionalidades que o node não entende
        '@babel/preset-react'//add funcionalidades do react
    ],
    plugins: [
        '@babel/plugin-transform-runtime'
    ]
};