const arr = [1, 4, 4, 10, 20];

function some(arr, findElement) {
	const res = arr.find(elem => elem === findElement);
	return res !== undefined;
}

console.log(some(arr, 5));
console.log(arr.some(el => el === 4));