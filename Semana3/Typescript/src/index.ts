//importando express
import express from 'express'; //adicionar pacote de declaração de tipos
const app = express();

//rota para visualizar
app.get('/', (request, response) => {
    return response.json({ message: 'Hello Motto'} );
})

app.listen(4000);