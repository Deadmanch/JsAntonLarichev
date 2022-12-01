const userName = 'Вася aka Terminator Пупкин';

const name = userName.slice(0, userName.indexOf(' '));
const surName = userName.slice(userName.lastIndexOf(' ') + 1, userName.length);

console.log(`Всем привет.
Мое имя - ${name}
Фамилия - ${surName}`);