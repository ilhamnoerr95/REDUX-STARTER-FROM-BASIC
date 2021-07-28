// seperti: 
function add3(a,b){
    return a + b
}

add(1,3)

// contoh CURRYING FUNCTION
function add(a){
    return function(b){
        return a + b;
    }
}

const add2 = a => b => a + b; // (a,b) => a + b

// contoh add: add(1) fungsi parameter pertama yg ditampung kedalam adding
const adding = add(1)
// isi dari parameter kedua yg ada di dalam function add
adding(2)

// contoh kedua 
add(1)(2); // add(1,5)