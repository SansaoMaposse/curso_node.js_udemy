const fs = require('fs');
console.log('Inicio');

fs.writeFile('arquivo.java', 'oi', function (err){
    setTimeout(function () {
        console.log('Arquivo criado com sucesso');
    },1000);
});
console.log('Fim');