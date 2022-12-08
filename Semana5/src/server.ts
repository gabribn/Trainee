import express from 'express';
import routes from './routes';
const app = express();

app.use(express.json());
app.use(routes);

app.get('/',(request, response) =>{
    return response.json({message:'helloto'});
});
app.listen(5345, () =>{
    console.log('BABEL 3333');
});
