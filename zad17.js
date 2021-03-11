function wordsUppercase(str) {
	let strToUpper = str.toUpperCase();
	console.log(strToUpper);
	let words = strToUpper.split(/\W/);	
	console.log(words);
	words = words.filter(w => w != '');
	return words.join(', ');
}

console.log(wordsUppercase('Too many commas and uppercases'));