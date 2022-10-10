/**
 * @param {number[]} height
 * @return {number}
 */

// works but slow
function maxArea(height) {
  let maxArea = 0;
  for (let i = 0; i < height.length; i++) {
    let j = i + 1;
    while (j < height.length) {
      if (height[j] > height[i] || height[i] * (j - i) < maxArea) {
        j++;
      } else {
        let area = height[i] * (j - i);
        if (maxArea < area) {
          maxArea = area;
        }
        j++;
      }
    }
  }
  return maxArea;
}

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));
