// https://www.acmicpc.net/problem/24445
// 알고리즘 수업 - 너비 우선 탐색 2

import * as fs from 'fs';

const inputs: string[] = fs
  .readFileSync('inputs.txt')
  .toString()
  .trim()
  .split('\n');

const [firstLine, ...edges] = inputs.map((inputLine) =>
  inputLine
    .trim()
    .split(' ')
    .map((input) => parseInt(input))
);

const N = firstLine[0];
const startVertex = firstLine[2];

type GraphType = { [vertex: number]: number[] };
const graph: GraphType = {};

for (let i = 1; i <= N; ++i) {
  graph[i] = [];
}

edges.forEach((edge) => {
  graph[edge[0]!].push(edge[1]);
  graph[edge[1]!].push(edge[0]);
});

for (const vertex in graph) {
  graph[vertex].sort((a, b) => b - a);
}

const visited: number[] = new Array(N + 1).fill(0);
let count = 1;
const queue: number[] = [];

const visitedLogic = (vertex: number) => {
  visited[vertex] = count;
  count += 1;
  queue.push(vertex);
};

const bfs = (vertex: number) => {
  visitedLogic(vertex);

  while (queue.length !== 0) {
    const checkVertex = queue.shift();

    graph[checkVertex!].forEach((endVertex) => {
      if (visited[endVertex] === 0) {
        visitedLogic(endVertex);
      }
    });
  }
};

bfs(startVertex);
const [, ...answer] = visited;
console.log(answer.join('\n'));
