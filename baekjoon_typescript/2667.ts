// https://www.acmicpc.net/problem/2667
// 단지번호붙이기

// 받은 행렬을 순회하면서 dfs나 bfs를 적용한다.
// 답을 하나의 배열에 담아두고 그것을 출력하게 만든다.

import * as fs from 'fs';

const INPUT_LOCATION = './input/inputs.txt';

const apartment = (n: number, matrix: number[][]) => {
  const answers: number[] = [];

  const isValidCoordinate = (row: number, col: number) => {
    try {
      if (matrix[row][col] === 1) {
        return true;
      }
    } catch {
      return false;
    }
    return false;
  };

  const setHouseNumber = () => {
    let numberOfHouseNumber = 0;
    const tempRow = [0, 0, 1, -1];
    const tempCol = [1, -1, 0, 0];
    const stack: number[][] = [];

    const dfs = (row: number, col: number) => {
      matrix[row][col] = 0;
      numberOfHouseNumber += 1;
      stack.push([row, col]);

      while (stack.length > 0) {
        const [nextRow, nextCol] = stack.pop()!;

        for (let i = 0; i < 4; ++i) {
          if (isValidCoordinate(nextRow + tempRow[i], nextCol + tempCol[i])) {
            matrix[nextRow + tempRow[i]][nextCol + tempCol[i]] = 0;
            numberOfHouseNumber += 1;
            stack.push([nextRow + tempRow[i], nextCol + tempCol[i]]);
          }
        }
      }

      answers.push(numberOfHouseNumber);
      numberOfHouseNumber = 0;
    };

    matrix.forEach((rows, rowIndex) => {
      rows.forEach((_, colIndex) => {
        if (isValidCoordinate(rowIndex, colIndex)) {
          dfs(rowIndex, colIndex);
        }
      });
    });
  };

  setHouseNumber();
  answers.sort((a, b) => a - b);
  return [answers.length, ...answers];
};

const inputs = fs.readFileSync(INPUT_LOCATION).toString().trim().split('\n');

const [nString, ...matrixString] = inputs;
const n = +nString.trim();
const matrix = matrixString.map((input) =>
  input
    .trim()
    .split('')
    .map((cell) => +cell)
);

console.log(apartment(n, matrix).join('\n'));
