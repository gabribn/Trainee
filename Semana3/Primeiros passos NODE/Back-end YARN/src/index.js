//imporando express
const express = require('express');
const app = express();
//enviando json
app.get('/projects', (request, response)=>{
    return response.json({ message: 'hello motto'})
});

//criando porta 
app.listen(3333);