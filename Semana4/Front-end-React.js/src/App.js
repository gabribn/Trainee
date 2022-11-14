import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import './App.css';
import back from './assets/back.jpeg';
import { getdomAPI } from "style-loader/dist/utils";
//Componente é uma funçao que retorna html
function App(){
    const[projects, setProjects] = useState(['Desenvolvimento de app']);
    //retorna array de 2 posições
    //1 variavel inicial 
    //2 função para att o valor
    useEffect(()=>{
        api.get('projects').then(response =>{
            setProjects(response.data);
        });
    })

    function handleAddProject(){
        //project.push('Novo p ${Date.now()}');
        //imutabilidade
        //setProjects([...projects, 'Novo p ${Date.now()}']);
        //console.log(project);

        //listando na api
        const responmse = await api.post('projects', {title: 'Novo p ${Date.now()}', owner: "gabriel"});

        const project = response.data;
        setProjects([...projects, project]);
    }

    return (<>
        <Header title="homepage">
        </Header>
        <img src={back}/>
        <ul>
            {projects.map(project => <li Key={project}>{project}</li>)}
        </ul>
        <button type="button" onClick={handleAddProject}>ADD</button>
    </>);
}
export default App;
//fragment <></> conteiner sem reproduzir visualmente


//Propriedades:informação que passada de um componmete pai para um componete filho
//Estado: 
//imutabilidae: nao se pode mudar variavel 