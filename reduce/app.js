const operations = [100, -20, 7,, -30, 50];

const balance = operations.reduce((acc, value, i) => {
    console.log(`Итерация ${i}, acc: ${acc}, value ${value}`)
    return acc += value
}, 0);

console.log(balance);

const minEl = operations.reduce((acc, value, i) => {
    if (value > acc) {
        return acc;
    } else {
        return value;
    }
}, 0);
console.log(minEl);