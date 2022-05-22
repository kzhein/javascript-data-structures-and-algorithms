// Big O
// Best - O(n log n)
// Average - O(n log n)
// Worst - O(n2)

function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  const pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);

  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right); //3

    quickSort(arr, left, pivotIndex - 1); //left
    quickSort(arr, pivotIndex + 1, right); //right
  }

  return arr;
}

quickSort([4, 6, 9, 1, 2, 5, 3]);

// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1
