/* 

Create a javascript function to take in an array and reverse the array without using reverse method and without using another/temporary array. Return the modified array. 

*/

function reverseArray(arr) {
	var temp;
	for (var i = 0; i < arr.length / 2; i++) {
		temp = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = temp;
	}
	return arr;
}

/* 

  The function takes in an array and reverses it. It does this by swapping the first element with the last element, the second element with the second to last element, and so on. It does this for half the length of the array, since the other half will be swapped as well. 
  
  */
