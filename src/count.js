const diff = require("diff");

function count(str1, str2) {
  const differences = diff.diffChars(str1, str2);
  let count = 0;

  differences.forEach((part) => {
    if (part.added || part.removed) {
      count += part.value.length;
    }
  });

  return count;
}
module.exports = count;
