function groupAnagrams(strs) {
  let map = {};

  for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i].split('').sort().join('');

    if (!map[sorted]) {
      map[sorted] = [strs[i]];
    } else {
      map[sorted].push(strs[i]);
    }
  }
  return Object.values(map);
}
