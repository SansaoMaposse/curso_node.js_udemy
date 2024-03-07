const x = 10;

if (!Number.isInteger(x)) {
    throw new Error("X não é um número inteiro, é uma string");
    
}
console.log('Continuando o código...');