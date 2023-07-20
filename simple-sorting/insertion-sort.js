function insertionSort(arr) {
   for (let i = 1; i < arr.length; i++) {
      let currentElement = arr[i];
      let j = i - 1;

      while (j >= 0 && currentElement < arr[j]) {
         arr[j + 1] = arr[j];
         j--;
         console.log(arr);
      }

      arr[j + 1] = currentElement;

      console.log(arr);
   }
}

// Example usage:
let myArray = [64, 34, 25, 12, 22, 11, 90];
insertionSort(myArray);
console.log(myArray); // Output: [11, 12, 22, 25, 34, 64, 90]
