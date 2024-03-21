var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  const alphanumericSet = new Set('1234567890qazxswedcvfrtgbnhyujmkiolp');

  while (left < right) {
    while (left < right && !alphanumericSet.has(s[left].toLowerCase())) {
      left++;
    }
    while (left < right && !alphanumericSet.has(s[right].toLowerCase())) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};
