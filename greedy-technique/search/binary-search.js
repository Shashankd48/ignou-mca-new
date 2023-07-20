function binarySearch(arr, target, start = 0, end = arr.length - 1) {
   if (start > end) {
      return -1; // Target not found
   }

   const mid = Math.floor((start + end) / 2);

   if (arr[mid] === target) {
      return mid; // Target found at the middle index
   } else if (arr[mid] < target) {
      return binarySearch(arr, target, mid + 1, end); // Search in the right half
   } else {
      return binarySearch(arr, target, start, mid - 1); // Search in the left half
   }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(binarySearch(array, 9));
