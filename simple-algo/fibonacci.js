function fibonacci(n) {
   if (n <= 0) {
      return [];
   } else if (n === 1) {
      return [0];
   } else if (n === 2) {
      return [0, 1];
   } else {
      const fibSeries = fibonacci(n - 1);
      fibSeries.push(
         fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2]
      );
      return fibSeries;
   }
}

// Example usage:
const n = 10;
const fibSeries = fibonacci(n);
console.log("Fibonacci Series:", fibSeries);
