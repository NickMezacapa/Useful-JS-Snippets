// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// A word is a palindrome if it reads the same backward as forward.

const isPalindrome = (str) => {
	let left = 0;
	let right = str.length - 1;
	if (str.length <= 1) return false;
	while (left < right) {
		if (str[left] !== str[right]) return false;
		left++;
		right--;
	}
	return true;
};
