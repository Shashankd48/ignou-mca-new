// Graph representing a transportation network with edge weights and traffic factor
const transportationNetworkWithTraphic = {
   A: [
      { node: "B", distance: 10, traffic: 0.8 },
      { node: "C", distance: 15, traffic: 0.6 },
   ],
   B: [
      { node: "A", distance: 10, traffic: 0.5 },
      { node: "C", distance: 20, traffic: 0.7 },
      { node: "D", distance: 25, traffic: 0.9 },
   ],
   C: [
      { node: "A", distance: 15, traffic: 0.6 },
      { node: "B", distance: 20, traffic: 0.8 },
      { node: "D", distance: 30, traffic: 0.5 },
   ],
   D: [
      { node: "B", distance: 25, traffic: 0.9 },
      { node: "C", distance: 30, traffic: 0.5 },
   ],
};

// Function to find the shortest path between two locations considering edge weights and traffic
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

      // Update distances and previous nodes for neighboring nodes with consideration of edge weights and traffic
      for (let neighbor of graph[currentNode]) {
         const distance =
            distances[currentNode] + neighbor.distance * neighbor.traffic;
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

// Find the shortest path from node A to node D considering edge weights and traffic
const shortestPath = findShortestPath(
   transportationNetworkWithTraphic,
   "A",
   "D"
);
console.log("Shortest path:", shortestPath);
