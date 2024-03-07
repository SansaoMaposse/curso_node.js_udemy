const url = require('url');
const  address = 'https://www.meusite.co.mz/catalog?produtos=laptop';
const parsedUrl = new url.URL(address);

console.log(parsedUrl.hostname);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams);
console.log(parsedUrl.searchParams.get('produtos'));

