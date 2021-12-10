// Big O
// Best - O(1)
// Average - O(n)
// Worst - O(n)
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i; // return the index at which the element is found
  }
  return -1;
}

linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 100);
