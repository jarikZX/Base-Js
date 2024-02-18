const role = 'manager';

if (role === 'manager') {
    console.log('Менеджер');
} else if (role === 'Admin') {
    console.log('Ad');
}


switch(role) {
    case 'manager':
        console.log('Менджер');
        break;
    case 'Admin':
        console.log('Админ');
        break;
    case 'GM':
    case 'Director':
        console.log('Руководитель');
        break;
    default:
        console.log('мы тебя не знаем')
}

const num = 1;

switch(true) { // true === num > 0 
    case num > 0:
        console.log('Положительный');
        break;
    case num < 0:
        console.log('Отрицательный');
        break;
    default:
        console.log('Ноль!');
}