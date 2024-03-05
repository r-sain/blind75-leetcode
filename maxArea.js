var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let currheight = Math.min(height[left], height[right]);
    let currwidth = right - left;

    let currArea = currheight * currwidth;
    maxArea = Math.max(currArea, maxArea);

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};
