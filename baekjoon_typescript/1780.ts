// https://www.acmicpc.net/problem/1780
// 종이의 개수

// 가설
// n * n의 행렬을 받아서 모든 칸이 -1, 0, 1 중 하나로 이루어져 있는지 체크
// 아니라면 3 * 3으로 분리하고
// 9개의 조각에 대해서 각각 1번의 작업을 반복

// 기존 코드는 컴파일에러가 발생한다.
// 백준의 코드 테스트를 하는 node 버전이 낮다는 것을 보고 es5로 다운그레이드한 코드를 node.js로 테스트했지만, 메모리 초과가 발생한다.
// 들어온 행렬를 복사하는 코드가 한두개가 아닌 시점에서 메모리 초과는 당연했다.

// 코드 개선안
// 기존의 복사해서 주던 값들을 대신해서 index들로 주자
// 기존의 행렬은 가만히 두고 좌표를 통해서 체크하도록 만들자

import * as fs from 'fs';

const INPUT_LOCATION = 'inputs.txt';

type MatrixType = (-1 | 1 | 0)[][];

const solution = (matrix: MatrixType, n: number) => {
  const answers = {
    '-1': 0,
    '0': 0,
    '1': 0,
  };

  const checkMatrix = (currentN: number, x: number, y: number) => {
    const standardValue = matrix[y][x];
    const numsOfMatrix = {
      '-1': 0,
      '0': 0,
      '1': 0,
    };

    for (let i = y; i < currentN + y; ++i) {
      for (let j = x; j < currentN + x; ++j) {
        if (matrix[i][j] !== standardValue) {
          break;
        }
        numsOfMatrix[matrix[i][j]] += 1;
      }
    }

    if (currentN ** 2 === numsOfMatrix['-1']) {
      answers['-1'] += 1;
      return true;
    } else if (currentN ** 2 === numsOfMatrix['0']) {
      answers['0'] += 1;
      return true;
    } else if (currentN ** 2 === numsOfMatrix['1']) {
      answers['1'] += 1;
      return true;
    }
    return false;
  };

  const checkAndDivide = (n: number, x: number, y: number) => {
    const changeAnswer = checkMatrix(n, x, y);

    if (changeAnswer) {
      return;
    }

    const nextN = n / 3;
    for (let i = 0; i < 3; ++i) {
      for (let j = 0; j < 3; ++j) {
        checkAndDivide(nextN, x + i * nextN, y + j * nextN);
      }
    }
  };

  checkAndDivide(n, 0, 0);
  return `${answers['-1']}\n${answers['0']}\n${answers['1']}`;
};

const inputs: string[] = fs
  .readFileSync(INPUT_LOCATION)
  .toString()
  .trim()
  .split('\n');

const n = parseInt(inputs[0]);
const [, ...matrix] = inputs.map((input) =>
  input
    .trim()
    .split(' ')
    .map((value) => parseInt(value) as -1 | 1 | 0)
);

console.log(solution(matrix, n));
