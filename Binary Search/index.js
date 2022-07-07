// Binary Search 

const binarySearch = (arr, target) => {
    // declare pointers for starting and ending indexes
    let start = 0,
        end = arr.length - 1;
    // declare middle index
    let middle = Math.floor((start + end) / 2);
    // make sure the target is searchable in the array
    if (target < arr[0] || target > arr[end] || arr.length === 0) return -1;
    // while the middle index does not equal the target, loop through the input array and find the target
    // we will be dynamically decreasing the size of our seach by moving our pointers
    while (arr[middle] !== target) {
        target < arr[middle] ? end = middle - 1 : start = middle + 1;
        // redeclare the middle so that we get a new midpoint each time we shrink the search
        middle = Math.floor((start + end) / 2);
    }
    // return the middle index if it is equal to target, otherwise return -1.
    return arr[middle] === target ? middle : -1;
};


// test:
binarySearch([1,2,3,4,5,6,7], 5); // expected: 4