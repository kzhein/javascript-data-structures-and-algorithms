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

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
