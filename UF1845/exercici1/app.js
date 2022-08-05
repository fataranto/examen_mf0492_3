// const cotxeDeProva = {
//     "model": "Fiat",
//     "matricula": "F 1234 TL",
//     "diesel": true
// };

// cargar el fichero cotxe_benzina.json

const fs = require('fs');
const cotxe = JSON.parse(fs.readFileSync('cotxe_benzina.json', 'utf8'));

let gas = cotxe.diesel ? 'diesel' : 'gasolina';

let response = `El model del cotxe es ${cotxe.model}, la seva matrícula és ${cotxe.matricula}, i funciona amb ${gas}`;

console.log(response);
