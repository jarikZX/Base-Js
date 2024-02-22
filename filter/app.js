const operations = [100, -20, 7, -20, 50];

const positive =operations.filter(operation => {
    return operation > 0;
});

console.log(positive);

const positiveRUB =operations
    .filter(operation => operation > 0)
    .map( operation => operation * 60);

console.log(positiveRUB);