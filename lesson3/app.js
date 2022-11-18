const res = prompt('Сколько будет 7 + или - 15?');

switch (true) {
	case res === '22' :
	case res === '-8' :
		console.log('Успех')
		break;
	case res === 'Я не робот' :
		console.log('Успех')
		break;
		
	default :
		console.log('Вы робот')
}