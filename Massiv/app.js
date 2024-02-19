const role1 = 'admin';
const role2 = 'user';
const role3 = 'superuser';

const roles = ['admin', 'user', 'superuser'];
const userInfo = ['Аня', 25];
console.log(roles);
console.log(roles[3]);

console.log(roles.length);
console.log(roles[roles.length - 1]);

console.log(roles.at(0));
console.log(roles.at(-1));

const usersAge = [2040 - 2022, 10 > 0 ? 5 : 0];
console.log(usersAge);

const usersNames = new Array('Вася', 'Петя', 'Катя');

function square(el) {
    return el * el;
}

console.log(square([1, 2, 3]));


//Управление массивов 

const users = ['Аня', 'Вика', 'Катя'];
console.log(users);
users[2] = 'Кристина';
console.log(users);
users[3] = 'Никита';
console.log(users);

const arrLenght = users.push('Никита');
console.log(users);
console.log(arrLenght);
const el3 = users.unshift('Вася');
console.log(users);
console.log(el3);

const el = users.pop();
console.log(users);
console.log(el);

const el2 = users.shift();
console.log(users);
console.log(el2);


//Поиск элемента массива

const rol = ['user', 'admin', 'manager', 'superuser'];

console.log(rol.indexOf('admin'));
console.log(rol.indexOf('superadmin'));

if (rol.indexOf('admin') >= 0 ) {
    console.log('Роль есть');
}

console.log(rol.includes('admin'));
console.log(rol.includes('superadmin'));
if (rol.includes('admin')) {
    console.log('Роль есть');
}

// slice, splice, concat, reverse 

const res = rol.slice(2);
console.log(rol);
console.log(res);

const res2 = rol.slice(2, 3);
console.log(rol);
console.log(res2);

const res3 = rol.slice(-1);
console.log(rol);
console.log(res3);

const res4 = rol.slice(1, -2);
console.log(rol);
console.log(res4);
/* 
const res5 = rol.splice(2);
console.log(rol);
console.log(res5); */

/* const res6 = rol.splice(2, 1);
console.log(res6);
console.log(rol);

const res7 = rol.splice(-1);
console.log(res7);
console.log(rol); */

const res8 = rol.reverse();
console.log(res8);
console.log(rol);

const newRoles = ['sis', 'developer'];
const res9 = rol.concat(newRoles);
console.log(res9);
console.log(rol);

// из строки в массив и обратно 

const url = '/auth/user/login';
const resu = url.split('/');
console.log(resu);

console.log(rol.join('-'));