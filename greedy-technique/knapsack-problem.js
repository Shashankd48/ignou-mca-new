function knapsackGreedy(weights, values, capacity) {
   const n = weights.length;
   const ratios = new Array(n);

   for (let i = 0; i < n; i++) {
      ratios[i] = {
         index: i,
         ratio: values[i] / weights[i],
      };
   }
   ratios.sort((a, b) => b.ratio - a.ratio);

   let totalWeight = 0;
   let totalValue = 0;
   const selectedItems = [];

   for (let i = 0; i < n; i++) {
      const currentItem = ratios[i];
      const itemWeight = weights[currentItem.index];
      const itemValue = values[currentItem.index];

      if (totalWeight + itemWeight <= capacity) {
         totalWeight += itemWeight;
         totalValue += itemValue;
         selectedItems.push(currentItem.index);
      }
   }

   return {
      totalValue: totalValue,
      selectedItems: selectedItems,
   };
}

// Example usage:
const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const capacity = 5;
const result = knapsackGreedy(weights, values, capacity);
console.log("Maximum value:", result.totalValue);
console.log("Selected items:", result.selectedItems);
