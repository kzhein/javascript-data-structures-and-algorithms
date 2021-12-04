// Time complexity: O(1)
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

const time1 = Date.now(); // performance.now();
addUpTo(1000000000);
const time2 = Date.now(); // performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);
