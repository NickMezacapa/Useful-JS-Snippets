/* 

Given a string of letters, or a word, return the letter that appears the most amount of times. Also return how many times that letter appears.

*/

const mostFrequent = (str) => {
	let obj = {},
		max = 0,
		maxChar = "";

	// loop through the string and get a count for each character
	for (let i = 0; i < str.length; i++) {
		obj[str[i]] ? obj[str[i]]++ : (obj[str[i]] = 1);
	}

	// loop through the object and find the max value
	for (let key in obj) {
		if (obj[key] > max) {
			// as we are looping through the object, if the value is greater than the max, we set the max to the value and the maxChar to the key
			// we do this to dynamically update the max with the letter that appears the most
			max = obj[key];
			maxChar = key;
		}
	}
	return [maxChar, max];
};
