class UnionFind {
   constructor(size) {
      this.parent = new Array(size).fill(null).map((_, i) => i);
      this.rank = new Array(size).fill(0);
   }

   find(x) {
      if (x !== this.parent[x]) {
         this.parent[x] = this.find(this.parent[x]);
      }
      return this.parent[x];
   }

   union(x, y) {
      const rootX = this.find(x);
      const rootY = this.find(y);

      if (rootX === rootY) return false;

      if (this.rank[rootX] < this.rank[rootY]) {
         this.parent[rootX] = rootY;
      } else if (this.rank[rootX] > this.rank[rootY]) {
         this.parent[rootY] = rootX;
      } else {
         this.parent[rootY] = rootX;
         this.rank[rootX]++;
      }

      return true;
   }
}

function kruskals(graph) {
   const vertices = Object.keys(graph);
   const edges = [];

   // Extract all edges from the graph
   for (let i = 0; i < vertices.length; i++) {
      const vertex = vertices[i];
      for (const neighbor in graph[vertex]) {
         edges.push([vertex, neighbor, graph[vertex][neighbor]]);
      }
   }

   // Sort edges in ascending order of weights
   edges.sort((a, b) => a[2] - b[2]);

   const minimumSpanningTree = [];
   const unionFind = new UnionFind(vertices.length);

   for (const edge of edges) {
      const [vertex1, vertex2, weight] = edge;

      if (
         unionFind.union(vertices.indexOf(vertex1), vertices.indexOf(vertex2))
      ) {
         minimumSpanningTree.push(edge);
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

const minimumSpanningTree = kruskals(graph);
console.log("Minimum Spanning Tree:");
for (const edge of minimumSpanningTree) {
   console.log(`${edge[0]} --(${edge[2]})-- ${edge[1]}`);
}
