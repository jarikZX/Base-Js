//Верные
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = '   +7(910) 323-53-56';
// Не верные
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';


function chekIsNumber(num) {
    const numChek = num.replace('(', '')
                       .replace(')', '')
                       .replace('+7', '8')
                       .replaceAll(/-/g, '')
                       .replaceAll(' ', '');
    if (numChek.lenght = 11 && !numChek.includes('g') && !numChek.includes('d') && numChek.startsWith('8')) {
        console.log('Номер нормальный')
    } else {
        console.log('Номер палёный')
    }
}

chekIsNumber(num1Error)