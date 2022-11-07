//quando adicionar tipos
//importando função 
import { Request, Response } from 'express';
import createUser from './services/CreateUser';
//exportar a função
export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'Gabriel@gmail.com',
        password: '123456',
        techs: [
            'Node.js', 
            'React.js', 
            'React Native',
            { title: 'JavaScipt', experience: 100 },    
        ],
    });

    return response.json({ message: 'Hello World'} );
}