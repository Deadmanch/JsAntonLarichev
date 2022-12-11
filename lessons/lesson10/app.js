const startingBalance = 100;
const operations = [1000, -1000, 800, -500, 10000];

// Функция проверки остатка баланса
function getBalance(arrayOfOperations, initialBalance) {
	let balance = initialBalance;
	for(const operation of arrayOfOperations) {
	balance += operation;
}
return balance;
}
console.log(getBalance(operations, startingBalance));

// Функция проверки баланса
function checkBalance(arrayOfOperations, initialBalance) {
	let balance = initialBalance;
	let isOk = true;
for(const operation of arrayOfOperations) {
	balance += operation;
	if(balance < 0) {
		isOk = false;
		break;
	}
}
return isOk;
}

// Функции вывода среднего расхода и дохода
function avarageOperations(arrayOfOperations ) {
	let positiveCount = 0,
			positiveSum = 0,
		  negativeCount = 0,
			negativeSum = 0;
	
	for (const operation of arrayOfOperations) {
		if(operation > 0) {
			positiveCount++;
			positiveSum += operation;
		}
		if(operation < 0) {
			negativeCount++;
			negativeSum += operation;
		}
	}
	return [positiveSum / positiveCount, negativeSum/negativeCount];
}

console.log(avarageOperations(operations));


console.log(checkBalance(operations, startingBalance));
