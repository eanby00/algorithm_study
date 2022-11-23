// https://www.acmicpc.net/problem/11404
// 플로이드

// 플로이드 워샬을 적용하기 위해 인접 행렬로 그래프 생성
// 플로이드 워샬 적용

// 거리의 최소값을 구하는 문제이기 떄문에
// 2차원 배열을 만들 때 0이 아닌 들어갈 수 있는 최대값을 넣어야 함을 주의하자

// setGraph에서 Math.min을 이용해서 조건문을 스킵할 경우
// 가독성은 좋아지지만 모든 경우에 대해서 비교를 함으로 시간 효율성이 나빠진다.

import { readFileSync } from 'fs';

const INPUT_LOCATION = './input/inputs.txt';
const MAX_LENGTH = Infinity;

const pathWithBus = (n: number, paths: number[][]) => {
  const graph: number[][] = Array.from(Array(n), () =>
    Array(n).fill(MAX_LENGTH)
  );

  const setGraph = (paths: number[][]) => {
    paths.forEach(([start, end, number]) => {
      if (graph[start - 1][end - 1] > number) {
        graph[start - 1][end - 1] = number;
      }
    });
  };

  const floyd = () => {
    for (let temp = 0; temp < n; ++temp) {
      for (let start = 0; start < n; ++start) {
        for (let end = 0; end < n; ++end) {
          if (
            graph[start][end] > graph[start][temp] + graph[temp][end] &&
            start !== end
          ) {
            graph[start][end] = graph[start][temp] + graph[temp][end];
          }
        }
      }
    }
  };

  const removeMaxLength = () => {
    graph.forEach((line, indexRow) => {
      line.forEach((_, indexCol) => {
        if (graph[indexRow][indexCol] === MAX_LENGTH) {
          graph[indexRow][indexCol] = 0;
        }
      });
    });
  };

  const printGraph = () => {
    console.log(graph.map((line) => line.join(' ')).join('\n'));
  };

  setGraph(paths);
  floyd();
  removeMaxLength();
  printGraph();
};

const inputs = readFileSync(INPUT_LOCATION).toString().trim().split('\n');

const [[n], , ...paths] = inputs.map((input) =>
  input
    .trim()
    .split(' ')
    .map((item) => +item)
);

pathWithBus(n, paths);
