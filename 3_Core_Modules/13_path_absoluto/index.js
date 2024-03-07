const path = require('path');

//path absoluto
console.log(path.resolve('teste.txt'));

//formar path
const modFolder = "relatorio";
const fileName = "sansao.txt";

const finalPath = path.join('/', 'arquivos',modFolder, fileName);
console.log(finalPath);