const fs = require("fs");

const numbers = fs.readFileSync("input.txt").toString().split(/\r?\n/);

let matchFound = false;
numbers.forEach((number) => {
	if (matchFound === true) return;
	const num1 = Number(number);
	numbers.forEach((number2) => {
		const num2 = Number(number2);
		if (num1 + num2 === 2020) {
			console.log(num1 * num2);
			matchFound = true;
			return;
		}
	});
});
