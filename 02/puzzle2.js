const fs = require("fs");

const passwords = fs.readFileSync("input.txt").toString().split(/\r?\n/);

const passwordsThatMatch = [];
passwords.forEach((password) => {
	const elements = password.split(/(\s+)/);

	const letter = elements[2].slice(0, -1);

	const passwordString = elements[4].split("");

	const firstSecond = elements[0].split("-");
	const firstOccurence = passwordString[firstSecond[0] - 1];
	const secondOccurence = passwordString[firstSecond[1] - 1];

	if (
		(firstOccurence === letter || secondOccurence === letter) &&
		firstOccurence !== secondOccurence
	) {
		passwordsThatMatch.push(password);
	}
});

console.log(passwordsThatMatch.length);
