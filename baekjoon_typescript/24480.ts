// https://www.acmicpc.net/problem/24480
// 알고리즘 수업 - 깊이 우선 탐색 2

// 24479번과 내림차순이라는 점을 제외하면 같은 문제이다.

import * as fs from "fs";

// input 처리
const inputs: string[] = fs
  .readFileSync("inputs.txt")
  .toString()
  .trim()
  .split("\n");

const [first, ...edges] = inputs.map((inputLine) =>
  inputLine
    .trim()
    .split(" ")
    .map((input) => parseInt(input))
);

// graph 세팅
const graph: { [vertex: number]: number[] } = {};

for (let i = 1; i <= first[0]; ++i) {
  graph[i] = [];
}

edges.forEach((edge) => {
  graph[edge[0]].push(edge[1]);
  graph[edge[1]].push(edge[0]);
});

for (const vertex in graph) {
  graph[vertex].sort((a, b) => b - a);
}

// dfs
const visited: number[] = new Array(first[0] + 1).fill(0);
let cnt = 1;

const dfs = (vertex: number) => {
  visited[vertex] = cnt;
  cnt += 1;

  graph[vertex].forEach((next) => {
    if (visited[next] === 0) {
      dfs(next);
    }
  });
};

dfs(first[2]);
const [, ...answer] = visited;
console.log(answer.join("\n"));
