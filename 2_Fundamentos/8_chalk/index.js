const chalk = require('chalk')

const nota = 9;

if(nota >=10){
    console.log(chalk.green('Aprovado!'));
}else{
    console.log(chalk.red('Reprovado!'));
}
