const cities = {
    msk: {
        lt: 200,
        temp: 25
    },
    spb: {
        lt: 100,
        temp: 20
    }
}

let sumtemp = 0;
console.log(Object.keys(cities));
let countCi = Object.keys(cities).length;
/* for(const key in cities) {
    sumtemp += cities[key].temp;
}
console.log(sumtemp / countCi); */
for(const key of Object.keys(cities)) {
    sumtemp += cities[key].temp;
}
console.log(sumtemp / countCi);
