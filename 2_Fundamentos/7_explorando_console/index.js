const x = 10;
const y = 'Algum texto';
const z = [1,2];

console.log(x, y, z);

//Contagem de impressão 
console.count("O valor de x é: ${x}, contagem");
console.count("O valor de x é: ${x}, contagem");
console.count("O valor de x é: ${x}, contagem");
console.count("O valor de x é: ${x}, contagem");

//Variavel entre string
console.log("nome é %s, ele é programador", y);

//Limpar console
setTimeout(() =>{
    console.clear();
},2000)
