const url = require('url');
const  address = 'https://www.meusite.co.mz/catalog?'

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
   
});

server.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
})