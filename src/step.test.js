const step = require("./step");

const a = "aaaaaa";
const b = "aaabbbaaa";

test("added", () => {
  expect(step(a, b, 0)).toBe("aaaaaa");
  expect(step(a, b, 1)).toBe("aaabaaa");
  expect(step(a, b, 2)).toBe("aaabbaaa");
  expect(step(a, b, 3)).toBe("aaabbbaaa");
  expect(step(a, b, 4)).toBe("aaabbbaaa");
});

test("removed", () => {
  expect(step(b, a, 0)).toBe("aaabbbaaa");
  expect(step(b, a, 1)).toBe("aaabbaaa");
  expect(step(b, a, 2)).toBe("aaabaaa");
  expect(step(b, a, 3)).toBe("aaaaaa");
  expect(step(b, a, 4)).toBe("aaaaaa");
});

test("edge cases", () => {
  expect(step(a, b, -1)).toBe("aaaaaa");
  expect(step(b, a, -1)).toBe("aaabbbaaa");
});

test("changed", () => {
  expect(step("the quick brown fox", "the slow brown fox", 0)).toBe(
    "the quick brown fox"
  );
  expect(step("the quick brown fox", "the slow brown fox", 3)).toBe(
    "the ck brown fox"
  );
  expect(step("the quick brown fox", "the slow brown fox", 4)).toBe(
    "the k brown fox"
  );
  expect(step("the quick brown fox", "the quick brown cat", 5)).toBe(
    "the quick brown ca"
  );
});
