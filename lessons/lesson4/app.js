const balance = 500,
			bonusBalance = 90,
			isBanned = false,
			isExist = false,
			isSelling = true;

const canBuy = (balance > 1000 || bonusBalance > 100)
				&& !isBanned
				&& !isExist
				&& isSelling;

console.log(`Могу купить игру: ${canBuy ? 'Да' : 'Нет'}`)