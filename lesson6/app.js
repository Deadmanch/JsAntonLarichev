/*
	Пользователь:
	- Возраст
	- Наличие работы
	- Деньги
	Нужно проверить может ли он купить новый MacBook за 2000$?
	Он может брать не только свои деньги, но и взять кредит.
	Ему дадут 500$, только если ему больше 24-х лет и он
	имеет работу, 100$ если ему просто больше 24-х лет и 0 в
	ином случае.
	Напишите функцию, которая принимает данные пользователя
	и товара и возвращает true или false;
*/

const canGetCredit = (age, jobAvailability = false) => {
	switch (true) {
		case age > 24 && jobAvailability:
			return 500;
		case age > 24:
			return 100;
		default:
			return 0;
	}
}

const canBuy = (productPrice, age, money, jobAvailability = false ) => {
	const creditMoney = canGetCredit(age, jobAvailability);
	return productPrice <= money + creditMoney;
}

console.log(canBuy(2000, 25, 1600, true))