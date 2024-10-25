# modulo

A robust modular arithmetic utility for JavaScript, handling both positive and negative integers with ease. Ensure consistent, non-negative results for your modulo operations. Perfect for mathematical computations, circular buffer implementations, and more.

## Installation

```bash
npm install @hridel/modulo
```

## Example

```javascript
import { mod } from '@hridel/modulo';

const exampleResult: number = mod(-1, 5);
console.log(`The result of -1 mod 5 is: ${exampleResult}`);  // The result of -1 mod 5 is: 4
```

## Why to use this library?

Because `(-1 % 5)` in JavaScript returns `-1`, which is not a valid result for a modulo operation.
This library ensures that the result is always a non-negative integer.