function characterReplacement(s, k) {
  let hashMap = {};
  let ans = 0;
  let l = 0;

  for (let r = 0; r < s.length; r++) {
    hashMap[s[r]] = 1 + (hashMap[s[r]] || 0);
    while (r - l + 1 - Math.max(...Object.values(hashMap)) > k) {
      hashMap[s[l]] -= 1;
      l += 1;
    }

    ans = Math.max(ans, r - l + 1);
  }
  return ans;
}
