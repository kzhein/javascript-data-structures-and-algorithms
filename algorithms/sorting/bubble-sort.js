// Big O
// Best - O(n)
// Average - O(n2)
// Worst - O(n2)
function bubbleSort(arr) {
  let noSwaps; // Optimized with noSwaps

  for (let i = arr.length - 1; i > 0; i--) {
    noSwaps = true;

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return arr;
}

bubbleSort([0, 2, 34, 22, 10, 19, 17]);
// [0, 2, 10, 17, 19, 22, 34]
