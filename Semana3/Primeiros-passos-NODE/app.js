//importando express
const { request, response } = require("express");
const express = require("express");
const fs = require("fs");
//gera id aleatorio 
const {randomUUID} = require("crypto")
//inicializando
const app = express()
//tratado no inicio da aplicação e no meio da requisição/retorno
app.use(express.json());

const products =[];
//pega info do banco de dados e add no array
fs.readFile("product.json", "utf-8", (err, data)=>{
    if(err){
        console.log(err)
    }else{
        products = JSON.parse(data);
    }
});

//rota de post (inserir dado)
//get (buscar dados)
//put (alterar um dado)
//delete (remover um dado)

//Body sempre que enviar dados para aplicação
//Params (parametros de rota)
//Query (faz parte da rota mas não sao obrigatórios)
app.post("/products", (request, response) =>{
    //NOME e preço => name/price
    const {name, price} = request.body;
    const product = {
        name,
        price,
        id: randomUUID(),
    };

    products.push(product);
    //atualiza arquivo
   createProductFile();

    return response.json(product);
});

//rota que retorna cadastros
app.get("/products",(request, response) =>{
    return response.json(products);
});

// rota que acha cadastro pelo id
app.get("/products:id", (response, request)=>{
    const {id } = request.params;
    //pegar iten dentro de array
    const product = products.find(products => product.id=== id);
    return response.json(product);
});

//ROTA QUE ALTERA CADASTRO
app.put("product/:id", (request, response)=>{
    const {id } = request.params;
    const {name, price} = request.body;

    //encontra array que deseja-se alterar
    const producIndex = products.findIndex(product => product.id===id);
    products[productIndex]={
        ...products[producIndex],
        name,
        price,
    }
    createProductFile();
    return response.json({messafe: "Produto alterado"});
});
//deleta o cadastro desejado
app.delete("/products/:id", (request, response)=>{
    const {id } = request.params;
    createProductFile();
    const producIndex = products.findIndex(product => product.id===id);

    products.splice(productIndex, 1);
    return response.json({message: "cadastro deletado"})
});

function createProductFile(){
    fs.writeFile("product.json", JSON.stringify(product) , (err) =>{
        if(err){
            console.log(err)
        }else{
            console.log("produto adicionado")
        }
    });
}

app.listen(4002, () => console.log("Server na porta 4002"));
