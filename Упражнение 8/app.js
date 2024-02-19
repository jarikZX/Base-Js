const url = 'https://purpleschool.ru/course/javascript';

function destructURL(str) {
    const [protocol, _, domen, ...loyot] = str.split('/');
    if (protocol === 'https:' || protocol === 'http:'){
       console.log(`Протокол: ${protocol.split(':')[0]} 
Домен: ${domen}
Путь: /${loyot.join('/')}`)
    } 
}
    
destructURL(url);