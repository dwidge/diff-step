const diff = require("diff");

function step(str1, str2, index) {
  if (index < 0) index = 0;
  const differences = diff.diffChars(str1, str2);
  let result = "";

  for (let i = 0; i < differences.length; i++) {
    const part = differences[i];
    if (part.added) {
      if (index >= 0) {
        result += part.value.slice(0, index);
        index -= part.value.length;
      }
    } else if (part.removed) {
      if (index >= 0) {
        result += part.value.slice(index);
        index -= part.value.length;
      }
    } else {
      result += part.value;
    }
  }

  return result;
}
module.exports = step;
