const isAdmin = true;
const canWrite = true;

console.log(`Системный файл ${isAdmin && canWrite}`);
console.log(`Обычный файл ${isAdmin || canWrite}`);
console.log(`Инвертируем права админа ${!isAdmin}`);


const isEdited = true;
const isSuperAdmin = true;

console.log(`Файл с редактированием ${
    isAdmin && canWrite && !isEdited
}`);
console.log(`Файл с редактированием ${
    isAdmin && canWrite && (!isEdited || isSuperAdmin)
}`);

let a = -8;

if (a === -8 || a === 22) {

}


console.log('Вася' || 'Олег');
console.log(false || 'Олег');
console.log('Вася' || false);
console.log(false || false);
console.log('Вася' && 'Олег');
console.log('Вася' && false);
console.log(false && 'Олег');
console.log(false && false);


let g = 'Марина';

const userName = g || 'Петя';
console.log(userName);


let userNameA = '';
let age = '';
console.log(userNameA || 'Default');
console.log(userNameA ?? 'Default');

console.log(age || 18);
console.log(age ?? 18);
