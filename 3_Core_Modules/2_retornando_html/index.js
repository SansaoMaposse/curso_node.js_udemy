const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Contenty-Type', 'txt/html');
    res.end('<h1>Olá, esse é o meu primeiro programa usando node e HTML</h1>');
});

server.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
})