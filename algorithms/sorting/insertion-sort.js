// Big O
// Best - O(n)
// Average - O(n2)
// Worst - O(n2)
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = currentVal;
  }

  return arr;
}

insertionSort([0, 2, 34, 22, 10, 19, 17]);
// [0, 2, 10, 17, 19, 22, 34]
