// Graph representing a transportation network
const transportationNetworkWithOnlyDistance = {
   A: [
      { node: "B", distance: 10 },
      { node: "C", distance: 15 },
   ],
   B: [
      { node: "A", distance: 10 },
      { node: "C", distance: 20 },
      { node: "D", distance: 25 },
   ],
   C: [
      { node: "A", distance: 15 },
      { node: "B", distance: 10 },
      { node: "D", distance: 30 },
      { node: "E", distance: 40 },
   ],
   D: [
      { node: "B", distance: 15 },
      { node: "C", distance: 30 },
      { node: "E", distance: 25 },
   ],
   E: [
      { node: "B", distance: 25 },
      { node: "C", distance: 30 },
   ],
};

// Function to find the shortest path between two locations using Di jkstra's algorithm
function findShortestPath(graph, startNode, endNode) {
   const distances = {};
   const previousNodes = {};
   const queue = [];

   // Set initial distances and add all nodes to the queue
   for (let node in graph) {
      if (node === startNode) {
         distances[node] = 0;
      } else {
         distances[node] = Infinity;
      }
      previousNodes[node] = null;
      queue.push(node);
   }

   while (queue.length > 0) {
      // Find the node with the smallest distance
      const currentNode = queue.reduce((minNode, node) => {
         return distances[node] < distances[minNode] ? node : minNode;
      });

      // Remove the current node from the queue
      queue.splice(queue.indexOf(currentNode), 1);

      // Stop if we've reached the end node
      if (currentNode === endNode) {
         break;
      }

      // Update distances and previous nodes for neighboring nodes
      for (let neighbor of graph[currentNode]) {
         const distance = distances[currentNode] + neighbor.distance;
         if (distance < distances[neighbor.node]) {
            distances[neighbor.node] = distance;
            previousNodes[neighbor.node] = currentNode;
         }
      }
   }

   // Reconstruct the shortest path
   const path = [];
   let currentNode = endNode;
   while (currentNode !== null) {
      path.unshift(currentNode);
      currentNode = previousNodes[currentNode];
   }

   return path;
}

// Find the shortest path from node A to node D
const shortestPath = findShortestPath(
   transportationNetworkWithOnlyDistance,
   "E",
   "A"
);
console.log("Shortest path:", shortestPath);
