var countSubstrings = function (s) {
  let count = 0;

  const countPalindrome = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    countPalindrome(i, i); //odd
    countPalindrome(i, i + 1); //even
  }

  return count;
};
