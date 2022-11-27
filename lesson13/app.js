const arr = [2, 4, 4, 10];

const avg = arr.reduce((acc, value) => acc + value / arr.length, 0);

console.log(avg);