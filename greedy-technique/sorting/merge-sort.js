function mergeSort(arr) {
   if (arr.length <= 1) {
      return arr; // Base case: array with 0 or 1 element is already sorted
   }

   // Divide the array into two halves
   const mid = Math.floor(arr.length / 2);
   const leftHalf = arr.slice(0, mid);
   const rightHalf = arr.slice(mid);

   // Recursive calls to mergeSort() for the two halves
   const sortedLeft = mergeSort(leftHalf);
   const sortedRight = mergeSort(rightHalf);

   // Merge the sorted halves
   return merge(sortedLeft, sortedRight);
}

function merge(leftArr, rightArr) {
   let mergedArr = [];
   let leftIndex = 0;
   let rightIndex = 0;

   // Merge the two sorted arrays into a single sorted array
   while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      if (leftArr[leftIndex] <= rightArr[rightIndex]) {
         mergedArr.push(leftArr[leftIndex]);
         leftIndex++;
      } else {
         mergedArr.push(rightArr[rightIndex]);
         rightIndex++;
      }
   }

   // Add any remaining elements from the left array
   while (leftIndex < leftArr.length) {
      mergedArr.push(leftArr[leftIndex]);
      leftIndex++;
   }

   // Add any remaining elements from the right array
   while (rightIndex < rightArr.length) {
      mergedArr.push(rightArr[rightIndex]);
      rightIndex++;
   }

   return mergedArr;
}

const arr = [3, 4, 1, 2, 3, 4, 5, 9, 0, 11, 0, 1];

console.log(mergeSort(arr));
