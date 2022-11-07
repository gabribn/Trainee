//importando express
const { response } = require('express');
const express = require('express');
//importando gerador de id
const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(express.json());

//armazenando variável na memória da aplicação
const projects = [];

//disparando de forma automática em todas requisições
function logRequests(request, response, next) {
    const { method, url } = request;

    const logLabel = `[${method.toUpperCase()}] ${url}`;

    console.log(logLabel);

    return next();
}

function validateProjectId(request, response, next) {
    const { id } = request.params;

    if(!isUuid(id)) {
        return response.status(400).json({ error: 'Invalid project ID.' });
    }

    return next();
}

app.use(logRequests);
app.use ('/projects/:id', validateProjectId);

//retorna valores inseridos 
app.get('/projects', (request, response) => {
    const { title } = request.query;

    const results = title ? projects.filter(project => project.title.includes(title)) : projects;

    return response.json(results); 
});

//inserir 
app.post('/projects', (request, response) => {
    //filtros
    const { title, owner} = request.body;
    //criando 
    const project = { id: uuid(), title, owner };
    //jogando informação criada
    projects.push(project);
    //exibindo projeto recem criado
    return response.json(project);
});

//altera o valor do id inserido 
app.put('/projects/:id', (request, response) => {
    //filtros
    const { id } = request.params;
    //criando 
    const { title, owner } = request.body;
    //buscando projeto no array
    const projectIndex = projects.findIndex(project => project.id === id);
    //validação
    if(projectIndex < 0) {
        return response.status(400).json({ error: 'Project not found. '})
    }
    //definindo novas informações do projeto
    const project = {
        id,
        title,
        owner,
    };
    //acessando array e procurando para substituir
    projects[projectIndex] = project;
    //retornando projeto atualizado
    return response.json(project);
});

//Deleta valor do id inserido
app.delete('/projects/:id', (request, response) => {
    //filtros
    const { id } = request.params;
    //buscando projeto no array
    const projectIndex = projects.findIndex(project => project.id === id);
    //validação
    if(projectIndex < 0) {
        return response.status(400).json({ error: 'Project not found. '})
    }
    //remove informação de dentro do array
    projects.splice(projectIndex, 1);
    //retorno vazio
    return response.status(204).send();
});

app.listen(3333, () => {
    console.log("Servidor está rodando na porta 3333");
});
