// Selection Sort

/* 
Pseudocode:
1. Start looping with a variable called i from the beginning towards the end of the array.
2. Declare a variable for theminimum value and set it equal to i.
3. Start an inner loop with variable j, starting from i+1 to the end of the array.
4. Compare: if arr[j] is less than arr[minimum], set minimum to j.
5. If we don't swap, we move to the next element.
6. Swap the minimum value with the value at i, only if the minimum value is not the value we started with
7. Return the sorted array.
*/

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
};

// test: 
let test2 = [1,3,5,4,2,7,9,0,6,8];
console.log(selectionSort(test2));