const fs = require('fs');

const arquivo = 'novoArquivo.txt';
const arquivoNovo = 'alterado.txt';


fs.rename(arquivo, arquivoNovo, function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log("Arquivo alterado com sucesso!");
    }
})