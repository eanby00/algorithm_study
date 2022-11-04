// https://www.acmicpc.net/problem/1260
// DFS와 BFS

import * as fs from 'fs';

type GraphType = { [vertex: number]: number[] };

class Graph {
  graph: GraphType = {};
  visited: number[] = [];
  answer: number[] = [];

  constructor(vertexNumber: number, edges: number[][]) {
    for (let vertex = 1; vertex <= vertexNumber; ++vertex) {
      this.graph[vertex] = [];
    }
    this.visited = new Array(vertexNumber + 1).fill(0);

    this.setGraphByEdges(edges);
  }

  setGraphByEdges = (edges: number[][]) => {
    for (const [startVertex, endVertex] of edges) {
      this.graph[startVertex].push(endVertex);
      this.graph[endVertex].push(startVertex);
    }

    for (const vertex in this.graph) {
      this.graph[vertex].sort((a, b) => a - b);
    }
  };

  isVisited = (vertex: number): boolean => {
    if (this.visited[vertex] === 1) {
      return true;
    }
    return false;
  };

  printAnswer = () => {
    console.log(this.answer.join(' '));
  };
}

class DFSGraph extends Graph {
  dfs = (vertex: number) => {
    this.visited[vertex] = 1;
    this.answer.push(vertex);

    this.graph[vertex].forEach((vertex) => {
      if (!this.isVisited(vertex)) {
        this.dfs(vertex);
      }
    });
  };
}

class BFSGraph extends Graph {
  queue: number[] = [];

  bfs = (vertex: number) => {
    this.visited[vertex] = 1;
    this.answer.push(vertex);
    this.queue.push(vertex);

    while (this.queue.length > 0) {
      const checkVertex = this.queue.shift();
      this.graph[checkVertex!].forEach((vertex) => {
        if (!this.isVisited(vertex)) {
          this.visited[vertex] = 1;
          this.answer.push(vertex);
          this.queue.push(vertex);
        }
      });
    }
  };
}

const INPUT_LOCATION = 'inputs.txt';
const splitLine = (item: string): string[] => item.split(' ');
const parseNumber = (item: string): number => parseInt(item);
const splitLineAndParseNumber = (item: string) =>
  splitLine(item).map(parseNumber);

const inputs: string[] = fs
  .readFileSync(INPUT_LOCATION)
  .toString()
  .trim()
  .split('\n');

const [[vertexNumber, , startVertex], ...edges] = inputs.map(
  splitLineAndParseNumber
);

const dfsGraph = new DFSGraph(vertexNumber, edges);
dfsGraph.dfs(startVertex);
dfsGraph.printAnswer();

const bfsGraph = new BFSGraph(vertexNumber, edges);
bfsGraph.bfs(startVertex);
bfsGraph.printAnswer();
