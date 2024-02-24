const fullUserName = 'Вася aka Terminator Пупкин';

const firstName = fullUserName.slice(0, fullUserName.indexOf(' '))
const lastName = fullUserName.slice(fullUserName.lastIndexOf(' '), fullUserName.length + 1)
console.log(fullUserName.length)