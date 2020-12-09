const fs = require("fs");

const passwords = fs.readFileSync("input.txt").toString().split(/\r?\n/);

const passwordsThatMatch = [];
passwords.forEach((password) => {
	const elements = password.split(/(\s+)/);

	const minMax = elements[0].split("-");
	const min = minMax[0];
	const max = minMax[1];

	const letter = elements[2].slice(0, -1);

	const passwordString = elements[4];

	if (passwordString.includes(letter)) {
		matchingLetters = passwordString.split(letter).length - 1;
		if (matchingLetters >= min && matchingLetters <= max) {
			passwordsThatMatch.push(password);
		}
	}
});

console.log(passwordsThatMatch.length);
