var maxProduct = function (nums) {
  let prevMin = nums[0];
  let prevMax = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let currMax = Math.max(nums[i], nums[i] * prevMax, nums[i] * prevMin);
    let currMin = Math.min(nums[i], nums[i] * prevMax, nums[i] * prevMin);

    prevMax = currMax;
    prevMin = currMin;

    result = Math.max(result, currMax);
  }

  return result;
};
