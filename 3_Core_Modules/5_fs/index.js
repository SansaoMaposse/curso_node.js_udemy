const http = require('http');
const url = require('url');

const port = 3000;

const server = http.createServer((req, res) => {
    
});

server.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
})