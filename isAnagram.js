var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const count = {};

  for (let i = 0; i < s.length; i++) {
    if (!count[s[i]]) count[s[i]] = 0;
    if (!count[t[i]]) count[t[i]] = 0;

    count[s[i]]++;
    count[t[i]]--;
  }

  for (let ch in count) {
    if (count[ch] !== 0) return false;
  }

  return true;
};
