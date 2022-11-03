// https://www.acmicpc.net/problem/24444
// 알고리즘 수업 - 너비 우선 탐색1

import * as fs from "fs";

const inputs: string[] = fs
  .readFileSync("inputs.txt")
  .toString()
  .trim()
  .split("\n");

const [firstLine, ...edges] = inputs.map((inputLine) =>
  inputLine
    .trim()
    .split(" ")
    .map((input) => parseInt(input))
);

type GraphType = { [vertex: number]: number[] };
const graph: GraphType = {};

for (let i = 1; i <= firstLine[0]; ++i) {
  graph[i] = [];
}

edges.forEach((edge) => {
  graph[edge[0]].push(edge[1]);
  graph[edge[1]].push(edge[0]);
});

for (const vertex in graph) {
  graph[vertex].sort((a, b) => a - b);
}

const visited: number[] = new Array(firstLine[0] + 1).fill(0);
let cnt = 1;
const queue: number[] = [];

const bfs = (vertex: number) => {
  visited[vertex] = cnt;
  cnt += 1;
  queue.push(vertex);

  while (queue.length !== 0) {
    const checkVertex = queue.shift();

    graph[checkVertex!].forEach((endVertex) => {
      if (visited[endVertex] === 0) {
        visited[endVertex] = cnt;
        cnt += 1;
        queue.push(endVertex);
      }
    });
  }
};

bfs(firstLine[2]);
const [, ...answer] = visited;
console.log(answer.join("\n"));
