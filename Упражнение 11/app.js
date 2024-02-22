const prices = [[100, 200], [120, 100], [200, 350]];

const delta = prices
    .map(el => el[1] - el[0])
    .filter(el => el > 0);
console.log(delta)