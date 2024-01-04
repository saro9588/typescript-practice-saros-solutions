// Determine the greatest common divisor of two positive integer numbers.
// Use the absolute value if params are negative
// Explore the Euclidean algorithm
// gcd(36, 63) => 9
// export function gcd...

function gcd(a: number, b: number): number {
  while (b !== 0) {
    let temp: number = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcd(10, 5)); // Output: 5
