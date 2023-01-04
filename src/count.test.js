const count = require("./count");

const a = "aaaaaa";
const b = "aaabbbaaa";

test("added", () => {
  expect(count(a, b)).toBe(3);
  expect(count(a + a, b + b)).toBe(6);
  expect(count(a + a, b + b)).toBe(6);
});

test("removed", () => {
  expect(count(b, a)).toBe(3);
  expect(count(b + b, a + a)).toBe(6);
});

test("changed", () => {
  expect(count("the quick brown fox", "the slow brown fox")).toBe(9);
  expect(count("the quick brown fox", "the quick brown cat")).toBe(6);
});
