// https://www.acmicpc.net/problem/2606
// 바이러스

import * as fs from 'fs';

type GraphType = { [vertex: number]: number[] };

class Graph {
  private graph: GraphType = {};
  private visited: number[];

  constructor(computerNumber: number) {
    for (let vertex = 1; vertex <= computerNumber; ++vertex) {
      this.graph[vertex] = [];
    }
    this.visited = new Array(computerNumber + 1).fill(0);
  }

  setGraphByEdges = (edges: number[][]) => {
    for (const [start, end] of edges) {
      this.graph[start].push(end);
      this.graph[end].push(start);
    }
  };

  isVisited = (vertex: number): boolean => {
    if (this.visited[vertex] === 1) {
      return true;
    }
    return false;
  };

  dfs = (vertex: number) => {
    this.visited[vertex] = 1;

    this.graph[vertex].forEach((vertex) => {
      if (!this.isVisited(vertex)) {
        this.dfs(vertex);
      }
    });
  };

  printAnswer = () => {
    const answer =
      this.visited.reduce(
        (prevValue, currentValue) => prevValue + currentValue,
        0
      ) - 1;
    console.log(answer);
  };
}

const INPUT_LOCATION = 'inputs.txt';
const parseNumber = (item: string): number => parseInt(item);
const splitLine = (item: string): string[] => item.split(' ');
const splitLineAndParseNumber = (item: string) =>
  splitLine(item).map(parseNumber);
const START_VERTEX: number = 1;

const inputs: string[] = fs
  .readFileSync(INPUT_LOCATION)
  .toString()
  .trim()
  .split('\n');

const [[computerNumber], , ...edges] = inputs.map(splitLineAndParseNumber);

const graph = new Graph(computerNumber);
graph.setGraphByEdges(edges);
graph.dfs(START_VERTEX);
graph.printAnswer();
