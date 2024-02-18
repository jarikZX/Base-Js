let balance;
let bonus = 100;
const isBanned = false;
const isExist = false;
const isSelling = true;

if (((balance >= 1000) || (bonus >= 100)) && (!isBanned && !isExist && isSelling)) {
    console.log('Вы можете купить');
} else {
    console.log('Вы не можете купить');
}
