const array = [3, 4, 35, 13, 12, 5, 7, 15, 4];

const bubbleSort = (array) => {
   let tempArr = array;
   for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
         if (tempArr[j] > tempArr[j + 1]) {
            let temp = tempArr[j];
            tempArr[j] = tempArr[j + 1];
            tempArr[j + 1] = temp;
         }
      }
   }
   return tempArr;
};

console.log(bubbleSort(array));
