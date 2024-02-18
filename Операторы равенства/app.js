const stcret = '7';

if (stcret == 7) {
    console.log('Угадал не строго');
}

if (Number(stcret) === 7) {
    console.log('Угадал Строго');
    
}

const q = prompt('Введите число');
if (q === 7 ) {
    console.log('!');
}