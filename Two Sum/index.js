// Given an array of integers, (nums), and a target integer (target), return indices of two numbers in the array that add up to the target.

const twoSum = (nums, target) => {
	const previousValues = {};
	if (nums.length <= 1) return "input array must be greater than 1";
	for (let i = 0; i < nums.length; i++) {
		const currentNumber = nums[i];
		const neededValue = target - currentNumber;
		const index2 = previousValues[neededValue];
		if (index2 != null) return [index2, i];
		else previousValues[currentNumber] = i;
	}
	return "no numbers add to target";
};
