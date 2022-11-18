const sumDeposit = 12000;
const ratePerMonth = 0.07;
const depositTerm = 24;
const houseCost = 13500

const totalSumOfDeposit = sumDeposit * (1 + ratePerMonth / 12)**depositTerm;
if(totalSumOfDeposit > houseCost) {
	console.log(`Вася сможет купить дом после снятия депозита. Остаток ${totalSumOfDeposit - houseCost}`)
} else  {
	console.log(`Васе не хватает для покупки дома: ${houseCost - totalSumOfDeposit}` )
}

