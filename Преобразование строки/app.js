const str ='Vasia Pupkin';
console.log(str.includes('a'));
console.log(str.startsWith('V'));
console.log(str.endsWith('n'));
console.log(new String('Vasia Pupkin').includes('a'));

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.replace('V', 'Y'));
console.log(str.replaceAll('i', 'g'));
console.log(str.replace(/a/g, 'g'));
const str2 ='      Vasia Pupkin         ';
console.log(str.trim());
