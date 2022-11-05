//servidor para requisições http
const http = require("http");

http.createServer((request, response)=>{
    //status da requisição     //o que é a requisição(retorno)
    response.writeHead(200,{'Content-type':'application/json'});
    //Acessando rotas 
    if(request.url === '/produto'){
        response.end(JSON.stringify({
            message:"Rota de produto"
        })
      );
    }
    if(request.url === "/usuario"){
        response.end(JSON.stringify({
            message:"Rota de usuário",
        })
     );
    }

    response.end(JSON.stringify({
        message: "Qualquer outra rota",
    }));
})
    .listen(4001, () => console.log("Server está rodando na porta 4001"));