// https://www.acmicpc.net/problem/11724
// 연결 요소의 개수

// input으로 받은 값들을 이용해 graph (인접 리스트) 생성
// dfs나 bfs를 구현하기
// graph를 순회하면서 해당 값이 아직 visited가 되지 않았을 경우 순회 알고리즘으로 연결된 모든 vertex 탐색하기
// 연결 요소의 개수를 저장해두고 graph 순회가 끝나면 그것을 가져오기

import * as fs from 'fs';

const INPUT_LOCATION = './input/inputs.txt';

type GraphType = { [vertex: number]: number[] };

const solution = (n: number, edges: number[][]): number => {
  const graph: GraphType = {};
  const visited: boolean[] = Array(n + 1).fill(false);
  let countConnectedComponent = 0;

  const setGraph = (edges: number[][]) => {
    for (let vertex = 1; vertex <= n; ++vertex) {
      graph[vertex] = [];
    }

    edges.forEach(([startVertex, endVertex]) => {
      graph[startVertex].push(endVertex);
      graph[endVertex].push(startVertex);
    });
  };

  const dfs = (startVertex: number) => {
    visited[startVertex] = true;

    graph[startVertex].forEach((newStartVertex) => {
      if (!visited[newStartVertex]) {
        dfs(newStartVertex);
      }
    });
  };

  const setConnectedComponent = () => {
    for (const startVertex in graph) {
      if (!visited[startVertex]) {
        countConnectedComponent += 1;
        dfs(+startVertex);
      }
    }
  };

  setGraph(edges);
  setConnectedComponent();

  return countConnectedComponent;
};

const inputs = fs
  .readFileSync(INPUT_LOCATION)
  .toString()
  .trim()
  .split('\n')
  .map((input) =>
    input
      .trim()
      .split(' ')
      .map((vertex) => +vertex)
  );

const [[n], ...edges] = inputs;

console.log(solution(n, edges));
