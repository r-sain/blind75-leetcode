var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(')');
    else if (s[i] === '{') stack.push('}');
    else if (s[i] === '[') stack.push(']');
    else if (stack.pop() !== s[i]) return false;
  }

  if (stack.length === 0) return true;
  else return false;
};
