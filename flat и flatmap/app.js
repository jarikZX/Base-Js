const prices = [[2, 4], [3, 4], [10, [20]]];
const res = prices.flat(2);
const res2 = prices.flatMap(el => el.concat([1]));

console.log(res);
console.log(res2);