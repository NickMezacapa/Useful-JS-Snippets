// Merge Sort
// declaration of a merge helper function to be used for recursive merge sort


const merge = (arr1, arr2) => {
    // initialize empty array to be used to return results of sorting
    let results = [];
    // initialze pointers that will be sued to compare the first elements of each input array
    let i = 0,
        j = 0;
    // start first while loop, loop while i and j are less than respective input arrays
    while (i < arr1.length && j < arr2.length) {
        // compare arr[j] and arr[i], push the smaller element to the results array, 
        // then continue loop starting from one element after the pushed element
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    // make sure we are only incrementing i or j for the length of it's respective array
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
};

// recursive mergeSort function
const mergeSort = arr => {
    // base case
    if (arr.length <= 1) return arr;
    // get the middle index of input array
    let midpoint = Math.floor(arr.length / 2),
    // declare left and right portions of the array,
    // we want single length arrays, so we need to continue to call recursive mergeSort function to continue decomposing input array
        left = mergeSort(arr.slice(0, midpoint)),
        right = mergeSort(arr.slice(midpoint));
    // merge decomposed subarrays into one array using previously declared merge function
    // Merge the left and right portions and return this value
    return merge(left, right);
};

// test:
mergeSort([2,8,1,5,99,44,39,101]); // expected: [1,2,5,8,39,44,99,101]
