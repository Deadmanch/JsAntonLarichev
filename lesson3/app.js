const res = prompt('Сколько будет 7 + или - 15?');

switch (true) {
	case Number(res) === 22 :
	case Number(res) === -8 :
	case res === 'Я не робот' :
		console.log('Успех')
		break;
	default :
		console.log('Вы робот')
}