// Graph representing a transportation network with constraints
const transportationNetwork = {
   A: [
      { node: "B", distance: 10, speedLimit: 60, roadClosed: false },
      { node: "C", distance: 15, speedLimit: 50, roadClosed: false },
   ],
   B: [
      { node: "A", distance: 10, speedLimit: 60, roadClosed: false },
      { node: "C", distance: 20, speedLimit: 50, roadClosed: false },
      { node: "D", distance: 25, speedLimit: 40, roadClosed: false },
   ],
   C: [
      { node: "A", distance: 15, speedLimit: 50, roadClosed: false },
      { node: "B", distance: 20, speedLimit: 50, roadClosed: false },
      { node: "D", distance: 30, speedLimit: 40, roadClosed: false },
   ],
   D: [
      { node: "B", distance: 25, speedLimit: 40, roadClosed: false },
      { node: "C", distance: 30, speedLimit: 40, roadClosed: false },
   ],
};

// Function to find the shortest path between two locations considering constraints
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

      // Update distances and previous nodes for neighboring nodes with consideration of constraints
      for (let neighbor of graph[currentNode]) {
         if (neighbor.roadClosed) {
            continue; // Skip closed roads
         }

         const travelTime = neighbor.distance / neighbor.speedLimit;
         const distance = distances[currentNode] + travelTime;
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

// Find the shortest path from node A to node D considering constraints
const shortestPath = findShortestPath(transportationNetwork, "A", "D");
console.log("Shortest path:", shortestPath);
