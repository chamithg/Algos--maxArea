/**
 * @param {number[]} height
 * @return {number}
 */

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  // set two pointers to the start and the end fo the array and start moving towards the middle of the array.

  // always move the max value cuz the small value is used to calculate the area.
  while (right > left) {
    let tempArea = (right - left) * Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, tempArea);
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
    console.log(tempArea);
  }
  return maxArea;
}

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));
