// https://www.acmicpc.net/problem/24479
// 알고리즘 수업 - 깊이 우선 탐색 1

// 들어온 입력값들을 기반으로 그래프 생성
// 그래프에서 dfs 실행

// 문제 좀 제대로 읽자

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
    .map((item) => parseInt(item))
);

// input으로 받은 edge를 기준으로 graph 구성
const graph: { [startVertex: number]: number[] } = {};

for (let i = 1; i <= first[0]; ++i) {
    graph[i] = [];
}

edges.forEach((edge) => {
  graph[edge[0]].push(edge[1]);
  graph[edge[1]].push(edge[0]);
});

// 오름차순 방문을 위한 sort
for (const vertex in graph) {
  graph[vertex].sort((a, b) => a - b);
}

// dfs 시작
const visited: number[] = new Array(Object.keys(graph).length + 1).fill(0);
let cnt = 1;
const dfs = (vertex: number) => {
  visited[vertex] = cnt;
  cnt += 1;
  graph[vertex].forEach((vertex) => {
    // 어차피 여기서 방문하지 않은 것들만 dfs를 호출하기 때문에 위에서 또 확인할 필요가 없다.
    if (visited[vertex] === 0) {
      dfs(vertex);
    }
  });
};
dfs(first[2]);

// 답 출력
const [,...answer] = visited;
console.log(answer.join('\n'));