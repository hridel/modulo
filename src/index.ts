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
