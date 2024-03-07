const inquirer = require('inquirer');

inquirer.prompt([
    {
      name: 'p1',
      message: "Qual é a primeira nota? ",
    },
    {
      name: 'p2',
      message: "Qual é a segunda nota? ",
    },
    
  ])
  .then((answers) => {
    console.log(answers);
    var soma = Number(answers.p1) + Number(answers.p2);
    var media = soma / 2
   
    console.log(media);
    
  })
  .catch((err) => console.log(err));
