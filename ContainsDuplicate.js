var containsDuplicate = function (nums) {
  var hTable = {};

  for (let i = 0; i < nums.length; i++) {
    console.log(hTable);
    if (nums[i] in hTable) return true;

    hTable[nums[i]] = 1000;
  }

  return false;
};
