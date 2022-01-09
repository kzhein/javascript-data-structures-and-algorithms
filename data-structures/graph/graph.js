// {
//   adjacencyList: {
//     Dallas: [ 'Tokyo', 'Aspen', 'Hong Kong' ],
//     Tokyo: [ 'Dallas', 'Hong Kong' ],
//     Aspen: [ 'Dallas', 'Los Angeles' ],
//     'Los Angeles': [ 'Hong Kong', 'Aspen' ],
//     'Hong Kong': [ 'Tokyo', 'Dallas', 'Los Angeles' ]
//   }
// }

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    // if we want to make this a directed graph, we can just only push vertex2 to vertex1's list
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      vertex => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      vertex => vertex !== vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();

graph.addVertex('Dallas');
graph.addVertex('Tokyo');
graph.addVertex('Aspen');
graph.addVertex('Los Angeles');
graph.addVertex('Hong Kong');

graph.addEdge('Dallas', 'Tokyo');
graph.addEdge('Dallas', 'Aspen');
graph.addEdge('Hong Kong', 'Tokyo');
graph.addEdge('Hong Kong', 'Dallas');
graph.addEdge('Los Angeles', 'Hong Kong');
graph.addEdge('Los Angeles', 'Aspen');
