function prim(graph) {
   const minimumSpanningTree = [];
   const visited = new Set();
   const startVertex = Object.keys(graph)[0]; // Start from an arbitrary vertex

   // Heap to store the edges with their weights
   const edgeHeap = [];
   for (const neighbor in graph[startVertex]) {
      edgeHeap.push([graph[startVertex][neighbor], startVertex, neighbor]);
   }
   edgeHeap.sort((a, b) => a[0] - b[0]);

   visited.add(startVertex);

   while (edgeHeap.length > 0) {
      const [weight, vertex1, vertex2] = edgeHeap.shift();
      if (!visited.has(vertex2)) {
         visited.add(vertex2);
         minimumSpanningTree.push([vertex1, vertex2, weight]);

         for (const neighbor in graph[vertex2]) {
            if (!visited.has(neighbor)) {
               edgeHeap.push([graph[vertex2][neighbor], vertex2, neighbor]);
            }
         }
         edgeHeap.sort((a, b) => a[0] - b[0]);
      }
   }

   return minimumSpanningTree;
}

// Example usage:
const graph = {
   A: { B: 2, C: 3 },
   B: { A: 2, C: 4, D: 1 },
   C: { A: 3, B: 4, D: 5 },
   D: { B: 1, C: 5 },
};

const minimumSpanningTree = prim(graph);
console.log("Minimum Spanning Tree:");
for (const edge of minimumSpanningTree) {
   console.log(`${edge[0]} --(${edge[2]})-- ${edge[1]}`);
}
