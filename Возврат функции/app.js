/* function power(pow) {
    return function (num) {
       return num ** pow;
    }
}

const powwerOTwo = power(2);
console.log(powwerOTwo(5));
console.log(powwerOTwo(10));

console.log(power(10)(2)); */

const power = pow => num => num ** pow;

console.log(power(10)(2));