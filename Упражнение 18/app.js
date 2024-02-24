const user = [
   { 
        fname: 'Вася',
        surname: 'Пупкин',
        age: 30,
        skills: ['Программирование', 'DevOps']
    },
    { 
        fname: 'Катя',
        surname: 'Белова',
        age: 18,
        skills: ['Дизайн']
    }
];

const newUsers = user.map((user) => {
    return {
        fullname: `${user.fname} ${user.surname}`,
        slkillNum: user.skills.length
    };
});
console.log(newUsers)