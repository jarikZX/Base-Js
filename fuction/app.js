function logName(name, surname) {
    console.log(`Моё имя ${name} ${surname}`);
}

logName('Ярослав', 'Ташланов');


function countDepositSum(depositInUSD, mouth, rate) {
    return  depositInUSD * (1 + rate / 12) ** mouth;
}

const example1 = countDepositSum(1000, 24, 0.12);
console.log(example1);

const example2 = countDepositSum(1000, 48, 0.10);
console.log(example2);

console.log(countDepositSum(1000, 48, 0.10));

// anon

function powerOftwo(num) {
    return num * num;
}

console.log(powerOftwo(5));

const poft = function (num) {
    return num * num;
}
console.log(poft(6));

//arrow func

/* const pofT = num => num * num; */

const pofT = num => {
    console.log(num);
    return num * num
};


console.log(pofT(6));

//Свойство аргументов 

function toPower(num = 2, power = 2) {
    const res = num ** power;
    return res;
}

console.log(toPower(2, 3));
console.log(toPower(2));

// Условия в функциях 

function canAccessWbsite(age) {
    if (age < 18){
        return 'no'
    }
    return 'yes'
}

console.log(canAccessWbsite(15));

const canAccessWbsite2 = age => age < 18 ? 'no' : 'yes';
console.log(canAccessWbsite2(18));

// функция внутри функции 

const KG_IN_USD = 7;
const KM_IN_USD = 5;

function calcW (present) {
    return present * KG_IN_USD
}
function calcKM (distance) {
    return distance * KM_IN_USD
}

function getExchangePrice(present1, present2, distance) {
    const price1 = calcW(present1);
    const prece2 = calcW(present2);
    const distancePrice = calcKM(distance);
    return price1 + prece2 + distancePrice;
}

console.log(getExchangePrice(1,2,10));