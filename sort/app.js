const users = ['Vasia', 'Masha', 'Katya', 'Anya'];

users.sort();
console.log(users);

const operations = [10, -2, 20, -34];

// < 0 - a, b -сохраняем порядок
// > 0 - b, a - меняем порядок
/* operations.sort((a, b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
}); */
operations.sort((a, b) => a - b)
console.log(operations);

operations.sort((a, b) => {
    if (a < b) {
        return 1;
    }
    if (a > b) {
        return -1;
    }
});
console.log(operations);