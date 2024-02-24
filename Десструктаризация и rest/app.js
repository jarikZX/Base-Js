let user = {
    name: 'Вася',
    age: 40,
    city: 'Moscow'
}

const {age, ...userwithoutAge} = user;
console.log(age);
console.log(userwithoutAge);

const additionalData = {
    skill: ['DevOps', 'desinge'],
    creditCard: '2432-3512-7654-3512'
};

/* user.skill = additionalData.skill;  работает с const*/ 
user = {
    ...user,
    ...additionalData
};
console.log(user);