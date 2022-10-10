/**
 * @param {number[]} height
 * @return {number}
 */

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (right > left) {
    let tempArea = (right - left) * Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, tempArea);
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return maxArea;
}

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));
