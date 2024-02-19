const userData = ['Name', 18, 'City'];

const [userName, _, city] = userData;
console.log(userName, city);

//Rest

const data = [ 1, 2, 3, 4, 5, 6]
const [one, two, ...other] = data;
console.log(one, two, other);