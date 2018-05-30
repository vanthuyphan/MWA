// blocking programming
const slowAdd = (a, b) => {
	for (let i = 0; i < 999999999; i++) { }
	console.log(a + b);
}
console.log('start');
const A = slowAdd(1, 2);
const B = slowAdd(2, 3);
const C = slowAdd(3, 4);
console.log('end');
// nonblocking
const slowAdd2 = (a, b) => {
	return setTimeout(() => { console.log(a + b) }, 5000);
}
console.log('start');
const A2 = slowAdd2(1, 2);
const B2 = slowAdd2(2, 3);
const C3 = slowAdd2(3, 4);
console.log('end');
// what happen when we set the timer to 0
// this time does not guarantee that this code will run after 0s
// but rather a mininum number of the specified delay