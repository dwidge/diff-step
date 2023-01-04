# diff-step

A function that steps through the differences between two strings character by character.

## Installation

To install the step function, run the following command:

`npm install @dwidge/diff-step`

## Usage

To use the step function, require it in your code and call it with two strings and an index:

```js
const { step } = require("@dwidge/diff-step");

const a = "aaaaaa";
const b = "aaabbbaaa";

console.log(step(a, b, 0)); // 'aaaaaa'
console.log(step(a, b, 1)); // 'aaabaaa'
console.log(step(a, b, 2)); // 'aaabbaaa'
console.log(step(a, b, 3)); // 'aaabbbaaa'
console.log(step(a, b, 4)); // 'aaabbbaaa'

console.log(step(b, a, 0)); // 'aaabbbaaa'
console.log(step(b, a, 1)); // 'aaabbaaa'
console.log(step(b, a, 2)); // 'aaabaaa'
console.log(step(b, a, 3)); // 'aaaaaa'
console.log(step(b, a, 4)); // 'aaaaaa'
```

To use the count function, require it in your code and call it with two strings:

```js
const { count } = require("@dwidge/diff-step");

console.log(count("aaaaaa", "aaabbbaaa")); // 3
console.log(count("the quick brown fox", "the slow brown fox")); // 9
console.log(count("the quick brown fox", "the quick brown cat")); // 6
```

## Testing

To run the tests for the step function, run the following command:

`npm test`

## License

The step function is licensed under the Boost Software License. See the LICENSE file for more information.
