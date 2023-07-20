// function selectionSort(arr) {
//    const n = arr.length;

//    for (let i = 0; i < n - 1; i++) {
//       let minIndex = i;

//       // Find the index of the minimum element in the unsorted portion
//       for (let j = i + 1; j < n; j++) {
//          if (arr[j] < arr[minIndex]) {
//             minIndex = j;
//          }
//       }

//       // Swap the minimum element with the first element of the unsorted portion
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//    }
// }

// // Example usage:
let myArray = [64, 34, 25, 12, 22, 11, 90];

for (let i = 0; i < myArray.length - 1; i++) {
   minIndex = i;

   for (let j = i + 1; j < myArray.length; j++) {
      if (myArray[j] < myArray[minIndex]) minIndex = j;
   }

   [myArray[i], myArray[minIndex]] = [myArray[minIndex], myArray[i]];
}

// selectionSort(myArray);
console.log(myArray); // Output: [11, 12, 22, 25, 34, 64, 90]
