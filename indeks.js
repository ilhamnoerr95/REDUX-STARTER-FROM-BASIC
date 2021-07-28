// import { compose, pipe} from 'lodash/fp'


let input = "   javascript    ";
let output = "<div>" + input.trim() + "</div>";

const trim1 = str => str.trim();
const toLowerCase1 = str => str.toLowerCase();
const wrapInDiv = str => `<div>${str}</div>`
// nested function tanpa menggunakan compose or pipe 
const result = wrapInDiv(toLowerCase1(trim1('  TITIT  ')))
console.log(result)
// CONTOH CURRYING FUNCTION
const wrapInDiv2= (type) => (str) => `<${type}> ${str} </${type}>`
const result2 = wrapInDiv2(toLowerCase1(trim1('span')))

console.log(result2(input))


const trim = (str) => str.trim();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`   
const toLowerCase = str => str.toLowerCase();


const transform = wrap(trim('   titit  '))

// console.log(transform)
// const transform = pipe(trim, wrap('ayam goreng'), toLowerCase)




document.querySelector('.coba').innerHTML = output;