'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }

}
class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }

  addVertex(vertex) {
    this._adjacencyList.set(vertex, []);
  }

  addEdge(startVertex, endVertex, weight) {
    if (
      !this._adjacencyList.has(startVertex) ||
        !this._adjacencyList.has(endVertex)
    ) {
      console.log('Vertex not found');
    } else {
      const adjacencies = this._adjacencyList.get(startVertex);
      adjacencies.push(new Edge(endVertex, weight));
    }
  }

  getNeighbors(vertex) {
    if (this._adjacencyList.has(vertex)) {
      return this._adjacencyList.get(vertex);
    }
  }
  
  //   Size(){

  //   }

  // getVertices(){

  // }

  printAll() {
    // console.log(this._adjacencyList.entries());
    for (const [vertex, edge] of this._adjacencyList.entries()) {
      console.log('Vertex> ', vertex);
      console.log('Edges>', edge);
    }
  }

}
const graph = new Graph();
const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);
graph.addVertex(ten);
graph.addVertex(two);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(three);
graph.addVertex(eight);
graph.addEdge(ten, two);
graph.addEdge(ten, six);
graph.addEdge(ten, three);
graph.addEdge(ten, seven);
graph.addEdge(two, seven);
graph.addEdge(six, seven);
graph.addEdge(six, eight);
graph.addEdge(three, seven);
graph.addEdge(eight, three);
// console.log(graph);
graph.printAll();
console.log('NEIGHBORS', graph.getNeighbors(seven));
console.log('NEIGHBORS', graph.getNeighbors(three));