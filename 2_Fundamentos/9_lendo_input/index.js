const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question('Qual é a sua linguagem favorita? ', (language) => {
    if (language === "java") {
        console.log("Você escolheu Java, tens que ver Spring Boot, para aprofundar os seus conhecimentos em java");
        
    }else{

        console.log(`Você escolheu ${language}`);
    }
    readLine.close();
})