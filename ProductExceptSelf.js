var productExceptSelf = function (nums) {
  let res = [];
  let start1 = 1;

  for (let i = 0; i < nums.length; i++) {
    res.push(start1);
    start1 = start1 * nums[i];
  }

  let start2 = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = res[i] * start2;
    start2 = nums[i] * start2;
  }

  return res;
};
