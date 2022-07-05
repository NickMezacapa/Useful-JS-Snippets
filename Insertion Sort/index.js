// Insertion Sort

/* 
Pseudocode:
1. Start an outer loop starting at the second element (first index) of the array.
2. Declare a variable for the current value (currentValue) and set it equal to the value at the current index.   // => var currentVal = arr[i].
3. Start inner loop with variable j, starting from i - 1, while j is greater than or equal to 0 (start) AND j is greater than currentVal, j --
4. Swap the value at j with the value at j+1 => arr[j+1] = arr[j]
5. After the innner loop, set arr[j+1] equal to currentVal to make the swap.
6. return arr.
*/

const insertionSort = arr => {
    for (var i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        for (var j = i -1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr;
};

// test:

let test = [2,1,9,76,4];
console.log(insertionSort(test));