# modulo

A robust modular arithmetic utility for JavaScript, handling both positive and negative integers with ease. Ensure consistent, non-negative results for your modulo operations. Perfect for mathematical computations, circular buffer implementations, and more.

## Installation

```bash
npm install @hridel/modulo
```

## `mod` function example

```javascript
import { mod } from '@hridel/modulo';

const exampleResult: number = mod(-1, 5);
console.log(`The result of -1 mod 5 is: ${exampleResult}`);  // The result of -1 mod 5 is: 4
```

## `rem` function example

```javascript
import { rem } from '@hridel/modulo';

// Example usage
const exampleResult: number = rem(-1, 5);
console.log(`The result of -1 rem 5 is: ${exampleResult}`);  // The result of -1 rem 5 is: -1
```

## `div` function example

```javascript
import { div } from '@hridel/modulo';

// Example usage
const exampleResult: number = div(-1, 5);
console.log(`The result of -1 div 5 is: ${exampleResult}`);  // The result of -1 div 5 is: -1
```

## Why to use this library?

Because `(-1 % 5)` in JavaScript returns `-1`, which is not a valid result for a **modulo** operation.

This library ensures that the result of the `mod` function is always a non-negative integer.

The `rem` function returns the remainder of the division operation, which can be negative.

And the `div` function returns the quotient rounded towards negative infinity, similar to Haskell's `div`.