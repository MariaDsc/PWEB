const fs = require('fs'); //carregando módulo file system
const data = fs.readFileSync('file.txt');
// a execução é bloqueada até que o arquivo seja lido
console.log(data.toString()); //imprime o conteúdo do arquivo