// Bubble Sort

/* 
Pseudocode:
1. Start looping with a variable called i, from the end of the array towards the beginning.
2. Start an inner loop, with a variable called j, from the beginning of the array up to i-1, or j < i.
3. We are using arr[j] to compare elements,
4. If arr[j] is greater than arr[j+1], we need to swap the elements.
5. If we don't swap, we move to the next element.
6. return the sorted array.
*/

const bubbleSort = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
};

// test:
let test1 = [1,3,5,4,2,7,9,0,6,8];
console.log(bubbleSort(test1));