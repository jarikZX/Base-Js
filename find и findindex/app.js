const arr = [2, 4, 4, 10, 20];

let elGT5;
/* for (const el of arr) {
    if (el > 5) {
        elGT5 = el;
        break;
    }
} */

elGT5 = arr.find(el => el > 5);
elGT5Index = arr.findIndex(el => el > 5); // если нет элемента то вернёт -1
console.log(elGT5);
console.log(elGT5Index);