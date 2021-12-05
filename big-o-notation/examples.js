// Time complexity: O(1)
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

const time1 = Date.now(); // performance.now();
addUpTo(1000000000);
const time2 = Date.now(); // performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);

////////////////////////////////////////////////////

// Time complexity: O(n)
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

const t1 = Date.now(); // performance.now();
addUpTo(1000000000);
const t2 = Date.now(); // performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

////////////////////////////////////////////////////

// Time complexity: O(n)
function countUpAndDown(n) {
  console.log('Going up!');
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  console.log('At the top!\nGoing down...');
  for (var j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log('Back down. Bye!');
}

////////////////////////////////////////////////////

// Space complexity: O(n)
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}

////////////////////////////////////////////////////

// Time complexity: O(n)
function logAtLeast5(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

////////////////////////////////////////////////////

// Time complexity: O(1)
function logAtMost5(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

////////////////////////////////////////////////////

// Time complexity: O(n²)
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

////////////////////////////////////////////////////

// Space complexity: O(1)
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
