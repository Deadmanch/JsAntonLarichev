const wallet = {
	balance: 0,
	operations: [],
	balanceIncrease: function (sum, reason) {
		this.balance += sum;
		this.operations.push({
			reason,
			sum
		});
		return true;
	},
	balanceDecrease: function (sum, reason) {
		if(this.balance < sum) {
			console.log('Недостаточно баланса')
			return false;
		}
		this.balance -= sum;
		this.operations.push({
			reason,
			sum:-sum
		});
		return true;
	},
	getNumberOfOperations: function () {
		return this.operations.length;
	}
}

console.log(wallet.balanceIncrease(1000, 'Зарплата'));
console.log(wallet.balanceDecrease(500, 'Покупки в магазине'));
console.log(wallet.balanceIncrease(1000, 'Зарплата'));
console.log(wallet.balanceDecrease(2000, 'Покупка смартфона'));
console.log(wallet.getNumberOfOperations());
console.log(wallet.balance);
console.log(wallet.operations);
