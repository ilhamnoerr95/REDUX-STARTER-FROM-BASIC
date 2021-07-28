import { compose, pipe} from 'lodash/fp'

let input = "   javascript    ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const toLowerCase = str => str.toLowerCase();
// curryig function
const wrap = (type) => (str) => `<${type}>${str}</${type}>`

// contoh without pipe, nested function
// const result = wrapInDiv(toLowerCase(trim(input)));

const transform = pipe(trim,  toLowerCase ,wrap('div'))
console.log(transform(input))

document.querySelector('.coba').innerHTML = output;

// TODO: EXAMPLA OF COMPOSE 
// const compose = (g,f)=> x => g(f(x));
// x in compose()
const user = {nama:'ilham',umur:25}
// f in compose()
const getUserName = (paramsAny) => paramsAny.nama;

const upperCase = (paramsAny) => paramsAny.toUpperCase();

const firstFour= (string) => string.substring(0,4)

const getNameAndUpper = compose(firstFour,upperCase,getUserName)(user)
console.log(getNameAndUpper)

// -------------------------------------
//TODO: UPDATE OBJEK
const person = {
    nama:'ilham',
    address: {
        country: 'indonesia',
        city: 'Jakarta'
    }
}
//METHOD UPDATE OBJEK 
// ARGUMEN PERTAMA OBJEK KOSONG TEMPAT UNTUK MENGCOPY SEMUA OBJEK YG ADA PADA ARGUMEN KE DUA
// ARGUMEN KETIGA PADA OBJECT ASSIGN ADALAH UPDATE DATA
const updated = Object.assign({},person,{nama:'adit', umur: 24})

//SPREAD OPERATOR 
const updateData = {
    ...person,
    nama:'tania',
    address: {
    ...person.address,
    city: 'Tangerang Selatan'
    }
    }
// updateData.address.city = "tangerang"

console.log(updateData)
// ---------------------------------------------

//IMMUNIBALITY WITH ARRAY
const number = [1,2,3,4]

//adding
const added = [...number, 5]
// ADDING DI TENGAH ANTARA 2 DAN 3  
//INDEXOF SETIAP SPASINYA DIHITUNG
const index = number.indexOf(3)
//ARGUMEN PERTAMA DIAMBIL DARI INDEX YG INGIN DIPOTONG KEBELAKANG: INDEX 0 YG AKAN DIPOTONG DAN DI MULAI DARI INDEX 1
// ARGUMEN KEDUA DIAMBIL DARI INDEX YG INGIN DIPOTONG MULAI DR INDEX TERSEBUT.
// KARENA ARGUMEN index diambil dari number.indexOF yg hasilnya dapet index ke dua 
/// MAKA SLICE DIMULAI DARI INDEX KEDUA SAMPAI KEDEPANNYA(2- SETERUSNYA)
const addedSlice = [
    ...number.slice(0,index),
    5,
    //COPY NUMBER MENGGUNAKAN SPREAD OPERATOR LALU DI SLICE DARI INDEX 2 KEBELAKANG YAITU 1 & 0 DI POTONG
    ...number.slice(index)
]

const  addSlice = [
    ...number.slice(0,index)
]

const sliceIndex = [
    ...number.slice(index)
]
console.log(sliceIndex)
console.log(`Add SLICE: ${addSlice}`)
console.log(addedSlice)
console.log(`HASIL INDEX: ${index}`)
console.log(added)

// ------------------------------

// TODO: REMOVE
const remove = number.filter(n => n !== 4);

console.log(remove)

//TODO UPDATING
// MENGGUNAKAN MAP DAN TENARY
const updating = number.map(n => n === 2 ? 20 : n);

console.log(updating) 

// IMMUTABL OBJECT
//IMPORT FROM LIBRARY
import {Map} from 'immutable';
import {produce} from 'immer';

// TODO: MAP IMMUTABLE LIBRARY
let books = Map({title:'ayam'});
//MAP FROM IMMUTEABLE
function publish(book){
    return book.set('isPublished', true);
}
books = publish(books)
const updateBooks = publish(books)

console.log(books)
console.log(updateBooks.toJS())
console.log(books.toJS())
console.log(books.get("title"))



// TODO: PRODUCE FROM IMMER LIBRARY
const Book = {title:'FILOSOFI TERAS'}

function publishUpdate(param){
    return produce(param, aliasDariParam => {
        aliasDariParam.isPublished = true;
    })
}

const updateBook = publishUpdate(Book)

console.log(Book)
console.log(updateBook)



