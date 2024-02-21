function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function power(a, b) {
    return a ** b;
}

// Функция высшего порядка 

function calculete(a, b, fn) {
    console.log(fn.name);
    const res = fn(a, b);
    return res;
}

let res = calculete(3, 5, add);
console.log(res)
res = calculete(3, 5, subtract);
console.log(res)
res = calculete(3, 5, power);
console.log(res) 

