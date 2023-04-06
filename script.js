//function threeSum(arr, target) {
// write your code here
  function threeSum(arr, target) {
  // Sort the array in non-decreasing order
  arr.sort((a, b) => a - b);

  // Initialize variables for minimum difference and closest sum
  let minDiff = Infinity;
  let closestSum;

  // Loop through the array, fixing the first number and finding the other two numbers
  for (let i = 0; i < arr.length - 2; i++) {
    let j = i + 1; // start index for the second number
    let k = arr.length - 1; // end index for the third number

    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];
      let diff = Math.abs(sum - target);

      // If the sum is equal to the target, return it
      if (sum === target) {
        return sum;
      }

      // If the difference is smaller than the current minimum difference, update the variables
      if (diff < minDiff) {
        minDiff = diff;
        closestSum = sum;
      }

      // Move the second pointer to the right or the third pointer to the left, depending on the sum
      if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }

  // Return the closest sum
  return closestSum;
}

// Example usage
const arr = [-1, 2, 1, -4];
const target = 1;
const closestSum = threeSum(arr, target);
console.log(closestSum); // Output: 2

}

module.exports = threeSum;
