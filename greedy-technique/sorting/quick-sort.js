function quickSort1(arr) {
   if (arr.length <= 1) {
      return arr; // Base case: array with 0 or 1 element is already sorted
   }

   // Choose a pivot element (can be any element from the array)
   const pivot = arr[Math.floor(Math.random() * arr.length)];

   // Divide the array into two subarrays based on the pivot
   const lesser = [];
   const greater = [];
   const equal = [];

   for (let element of arr) {
      if (element < pivot) {
         lesser.push(element);
      } else if (element > pivot) {
         greater.push(element);
      } else {
         equal.push(element);
      }
   }

   // Recursively sort the subarrays
   const sortedLesser = quickSort(lesser);
   const sortedGreater = quickSort(greater);

   // Concatenate the sorted subarrays with the equal elements to get the final sorted array
   return [...sortedLesser, ...equal, ...sortedGreater];
}

function quickSort(arr, low, high) {
   if (low < high) {
      const pivotIndex = partition(arr, low, high);
      quickSort(arr, low, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, high);
   }
}

function partition(arr, low, high) {
   const pivot = arr[high];
   let i = low - 1;

   for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
         i++;
         swap(arr, i, j);
      }
   }

   swap(arr, i + 1, high);
   return i + 1;
}

function swap(arr, i, j) {
   const temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}

const arr = [2, 3, 4, 1, 2, 3, 54, 23, 43, 12, 34, 67, 8, 654];
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
