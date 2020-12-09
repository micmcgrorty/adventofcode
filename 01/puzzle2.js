const fs = require("fs");

const numbers = fs.readFileSync("input.txt").toString().split(/\r?\n/);

let matchFound = false;
numbers.forEach((number) => {
	const num1 = Number(number);
	numbers.forEach((number2) => {
		if (matchFound === true) return;
		const num2 = Number(number2);
		numbers.forEach((number3) => {
			const num3 = Number(number3);
			if (num1 + num2 + num3 === 2020) {
				console.log(num1 * num2 * num3);
				matchFound = true;
				return;
			}
		});
	});
});
