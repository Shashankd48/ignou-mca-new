function evaluatePolynomialHorner(coefficients, x) {
   let result = coefficients[0];
   const n = coefficients.length;

   for (let i = 1; i < n; i++) {
      result = result * x + coefficients[i];
   }

   return result;
}

const coefficients = [4, 5, 3, 2];
const x = 2;
const result = evaluatePolynomialHorner(coefficients, x);
console.log("P(", x, ") =", result);
