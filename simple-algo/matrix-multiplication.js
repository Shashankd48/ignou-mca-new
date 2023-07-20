function matrixMultiplication(A, B) {
   if (A[0].length !== B.length) return [];

   const rowA = A.length;
   const columnsA = A[0].length;
   const columnsB = B[0].length;

   let result = Array.from(Array(rowA), () => Array(columnsB).fill(0));

   for (let i = 0; i < rowA; i++) {
      for (let j = 0; j < columnsB; j++) {
         for (let k = 0; k < columnsA; k++) result[i][j] += A[i][k] * B[k][j];
      }
   }

   return result;
}

// Example matrices A and B
const A = [
   [1, 2, 3, 4],
   [5, 6, 7, 8],
   [9, 10, 11, 12],
   [13, 14, 15, 16],
];

const B = [
   [16, 15, 14],
   [12, 11, 10],
   [8, 7, 6],
   [4, 3, 2],
];

// Perform matrix multiplication
const result = matrixMultiplication(A, B);

// Output the result
console.log("Resultant Matrix C:");
for (let i = 0; i < result.length; i++) {
   console.log(result[i]);
}
