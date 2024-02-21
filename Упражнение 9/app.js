const arr = ['!', 'JS', 'Люблю', 'Я'];
const strArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
    strArr.push(arr[i]);    
}
console.log(strArr.join(' '));