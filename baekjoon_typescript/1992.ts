// https://www.acmicpc.net/problem/1992
// 쿼드트리

// 특정 행렬이 모두 0이나 1로 이루어졌다면 0, 1을 리턴
// 아니라면 4등분하고 위의 과정 반복

import * as fs from 'fs';

const INPUT_LOCATION = './input/inputs.txt';

const makeQuadTree = (n: number, matrix: number[][]) => {
  const checkCompression = (n: number, x: number, y: number): boolean => {
    const standardValue = matrix[y][x];

    for (let i = x; i < n + x; ++i) {
      for (let j = y; j < n + y; ++j) {
        if (matrix[j][i] !== standardValue) {
          return false;
        }
      }
    }
    return true;
  };

  const getQuarTree = (n: number, x: number, y: number) => {
    if (checkCompression(n, x, y)) {
      return matrix[y][x].toString();
    }

    let answer = '';
    const nextN = n / 2;

    for (let i = 0; i < 2; ++i) {
      for (let j = 0; j < 2; ++j) {
        answer += getQuarTree(nextN, x + nextN * j, y + nextN * i);
      }
    }

    return `(${answer})`;
  };

  return getQuarTree(n, 0, 0);
};

const inputs = fs.readFileSync(INPUT_LOCATION).toString().trim().split('\n');

const n = +inputs[0].trim();
const [, ...matrix] = inputs.map((input) =>
  input
    .trim()
    .split('')
    .map((item) => +item)
);

console.log(makeQuadTree(n, matrix));
