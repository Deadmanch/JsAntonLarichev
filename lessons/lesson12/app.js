const prices = [[100, 200], [120, 100], [200, 350]];

const res = prices.map((product) => product[1] - product[0])
	.filter((price) => price > 0);

console.log(res);