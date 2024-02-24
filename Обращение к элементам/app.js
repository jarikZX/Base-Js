const user = {
    name: 'Вася',
    surname: 'Пупкин',
    age: 24,
    skills: [
        'Программирование',
        'Готовки'
    ],
    eduBasic: 'Школа 10',
    eduPro: 'МФТИ'
};

console.log(user);
console.log(user.city);
console.log(user.name);
console.log(user.skills);
console.log(user['skills']);
const level = 'Pro'
console.log(user['edu' + level]);

/* const res = promt('Введите свойсство'); */
/* console.log(user[res]); */
user['city'] = 'Москва';
user.city = 'Москва';
console.log(user.city);
user.age = 30;
console.log(user.age);
