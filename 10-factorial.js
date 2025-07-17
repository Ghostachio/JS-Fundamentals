function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const input = Number(process.argv[2]);
const result = Number.isNaN(input) ? 1 : factorial(input);

console.log(result);
