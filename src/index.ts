/**
 * A robust modular arithmetic function.
 * Handles both positive and negative integers to ensure a non-negative result.
 *
 * @param n - The number to be divided.
 * @param m - The divisor.
 * @returns The non-negative remainder.
 */
export function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

// Example usage
const exampleResult: number = mod(-1, 5);
console.log(`The result of -1 mod 5 is: ${exampleResult}`);  // The result of -1 mod 5 is: 4

/**
 * Remainder function similar to Haskell's rem.
 * Returns the remainder with the same sign as the dividend.
 *
 * @param n - The number to be divided.
 * @param m - The divisor.
 * @returns The remainder.
 */
export function rem(n: number, m: number): number {
  return n % m;
}

// Example usage
const exampleRemResult: number = rem(-1, 5);
console.log(`The result of -1 rem 5 is: ${exampleRemResult}`);  // The result of -1 rem 5 is: -1

/**
 * Euclidean division function similar to Haskell's div.
 * Returns the quotient rounded towards negative infinity.
 *
 * @param n - The number to be divided.
 * @param m - The divisor.
 * @returns The quotient.
 */
export function div(n: number, m: number): number {
  return Math.floor(n / m);
}

// Example usage
const exampleDivResult: number = div(-1, 5);
console.log(`The result of -1 div 5 is: ${exampleDivResult}`);  // The result of -1 div 5 is: -1