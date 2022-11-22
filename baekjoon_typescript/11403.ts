// https://www.acmicpc.net/problem/11403
// 경로 찾기

// dfs로 풀어보려다가 fail
// 정확히는 인접행렬에다가 dfs를 적용하려다가 fail
// input으로 받은 값을 이용해서 인접배열로 만들고 그 값에 dfs를 적용하여 인접행렬을 만든다면 해결 가능할 듯?

// 확인해보니 플로이드 워샬 유형의 문제
// 이번 기회에 플로이드 워샬 익히기

import * as fs from 'fs';

const INPUT_LOCATION = './input/inputs.txt';

const inputs = fs.readFileSync(INPUT_LOCATION).toString().trim().split('\n');

const setPath = (n: number, matrix: number[][]) => {
  const printAnswer = (matrix: number[][]) => {
    return matrix.map((row) => row.join(' ')).join('\n');
  };

  for (let temp = 0; temp < n; ++temp) {
    for (let start = 0; start < n; ++start) {
      for (let end = 0; end < n; ++end) {
        if (matrix[start][temp] === 1 && matrix[temp][end] === 1) {
          matrix[start][end] = 1;
        }
      }
    }
  }

  console.log(printAnswer(matrix));
};

const [[n], ...matrix] = inputs.map((input) =>
  input
    .trim()
    .split(' ')
    .map((item) => +item)
);

setPath(n, matrix);
