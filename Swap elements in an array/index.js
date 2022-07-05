// Swapping two elements in array
// Two different ways to swap two elements in an array, depending on preference.

// ES2015
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// tried and true

const swap2 = (arr, idx1, idx2) => {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}