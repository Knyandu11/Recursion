// Function to generate Fibonacci sequence iteratively
function fibs(n) {
    let fib_sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        fib_sequence.push(fib_sequence[i - 1] + fib_sequence[i - 2]);
    }
    return fib_sequence.slice(0, n);
}

// Function to generate Fibonacci sequence recursively
function fibsRec(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    let fib_sequence = fibsRec(n - 1);
    fib_sequence.push(fib_sequence[n - 2] + fib_sequence[n - 3]);
    return fib_sequence;
}

// Test the functions
console.log("Fibonacci sequence using iteration:", fibs(8));
console.log("Fibonacci sequence using recursion:", fibsRec(8));

// Function to perform merge sort recursively
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

// Function to merge two sorted arrays
function merge(left, right) {
    let merged = [];
    let leftIdx = 0, rightIdx = 0;
    
    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx] < right[rightIdx]) {
            merged.push(left[leftIdx]);
            leftIdx++;
        } else {
            merged.push(right[rightIdx]);
            rightIdx++;
        }
    }
    
    return merged.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}

// Test the function
console.log("Merge sorted array:", mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log("Merge sorted array:", mergeSort([105, 79, 100, 110]));