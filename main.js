var convertFahrToCelsius = (num) => {
	let celsius;
	if (Array.isArray(num)) {
		return `[${num}] is not a valid number but a/an array`;
	}
	if (typeof num !== "number") {
		return `${JSON.stringify(
			num
		)} is not a valid number but a/an ${typeof num}`;
	}
	if (typeof parseInt(num) === "number") {
		celsius = (num - 32) * (5 / 9);
		return celsius.toFixed(4);
	}
};

const result = convertFahrToCelsius(0);
console.log(result);

var checkYuGiOh = (n) => {};
