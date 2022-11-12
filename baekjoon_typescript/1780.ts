// https://www.acmicpc.net/problem/1780
// 종이의 개수

// 가설
// n * n의 행렬을 받아서 모든 칸이 -1, 0, 1 중 하나로 이루어져 있는지 체크
// 아니라면 3 * 3으로 분리하고
// 9개의 조각에 대해서 각각 1번의 작업을 반복

// 어려웠던 점
// 의외로 n * n의 행렬을 9개의 행렬로 쪼개는 것이 어려웠음
// divide 함수 참고
// row를 기준으로 3등분 한 후 col을 기준으로 3등분한다.
// 분리된 matrix의 순서
// 1, 2, 3
// 4, 5, 6
// 7, 8, 9

import * as fs from 'fs';

const INPUT_LOCATION = 'inputs.txt';

const checkMatrix = (matrix: number[][]) => {
  const checkMatrix = matrix.flat();

  const hasMinusOne = checkMatrix.includes(-1);
  const hasZero = checkMatrix.includes(0);
  const hasOne = checkMatrix.includes(1);

  if (hasMinusOne && !hasZero && !hasOne) {
    return '-1';
  } else if (!hasMinusOne && hasZero && !hasOne) {
    return '0';
  } else if (!hasMinusOne && !hasZero && hasOne) {
    return '1';
  }
  return null;
};

const answers = {
  '-1': 0,
  '0': 0,
  '1': 0,
};

const divide = (nextN: number, matrix: number[][]): number[][][] => {
  const dividedMatrix = [];
  for (let i = 0; i < 3 * nextN; i += nextN) {
    const rowDivide = matrix.slice(i, i + nextN);
    for (let j = 0; j < 3 * nextN; j += nextN) {
      const colDivide = rowDivide.map((line) => line.slice(j, j + nextN));
      dividedMatrix.push(colDivide);
    }
  }
  return dividedMatrix;
};

const checkAndDivide = (n: number, matrix: number[][]) => {
  const checkValue = checkMatrix(matrix);

  if (checkValue) {
    answers[checkValue] += 1;
    return;
  }

  const nextN = n / 3;
  const dividedMatrixs = divide(nextN, matrix);
  dividedMatrixs.forEach((dividedMatrix) => {
    checkAndDivide(nextN, dividedMatrix);
  });
};

const inputs: string[] = fs
  .readFileSync(INPUT_LOCATION)
  .toString()
  .trim()
  .split('\n');

const [[n], ...matrix] = inputs.map((input) =>
  input
    .trim()
    .split(' ')
    .map((value) => parseInt(value))
);

checkAndDivide(n, matrix);

console.log(`${answers['-1']}\n${answers['0']}\n${answers['1']}`);
