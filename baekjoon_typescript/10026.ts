// https://www.acmicpc.net/problem/10026
// 적록색약

// bfs나 dfs를 통해서 같은 색상을 만나면 visited를 1이상의 숫자로 변환시킨다.
// 적록색약인 조건과 아닌 조건을 만들어서 2개의 케이스를 모두 테스트한다.

import { readFileSync } from 'fs';

const INPUT_LOCATION = './input/inputs.txt';
// const INPUT_LOCATION = './dev/stdin';

type isValidVisit = (row: number, col: number, targetColor: string) => boolean;

const getAnswer = (n: number, matrix: string[][]) => {
  let visited: number[][] = Array.from(Array(n), () => Array(n).fill(0));
  let count = 0;
  const stack: number[][] = [];
  const dRow = [1, -1, 0, 0];
  const dCol = [0, 0, 1, -1];
  const answer: number[] = [];

  const reset = () => {
    visited = Array.from(Array(n), () => Array(n).fill(0));
    count = 0;
  };

  const isValidVisit = (row: number, col: number, targetColor: string) => {
    try {
      return visited[row][col] === 0 && matrix[row][col] === targetColor;
    } catch {
      return false;
    }
  };

  const isValidVisitWithColorWeakness = (
    row: number,
    col: number,
    targetColor: string
  ) => {
    try {
      if (matrix[row][col] === 'R' || matrix[row][col] === 'G') {
        return (
          visited[row][col] === 0 &&
          (targetColor === 'R' || targetColor === 'G')
        );
      }
      return visited[row][col] === 0 && matrix[row][col] === targetColor;
    } catch {
      return false;
    }
  };

  const dfs = (
    row: number,
    col: number,
    targetColor: string,
    isValidVisit: isValidVisit
  ) => {
    visited[row][col] = count;
    stack.push([row, col]);

    while (stack.length > 0) {
      const [rowStandard, colStandard] = stack.pop()!;
      for (let i = 0; i < dRow.length; ++i) {
        const rowNext = rowStandard + dRow[i];
        const colNext = colStandard + dCol[i];
        if (isValidVisit(rowNext, colNext, targetColor)) {
          stack.push([rowNext, colNext]);
          visited[rowNext][colNext] = count;
        }
      }
    }
  };

  const setCount = (isValidVisit: isValidVisit) => {
    for (let row = 0; row < n; ++row) {
      for (let col = 0; col < n; ++col) {
        if (visited[row][col] === 0) {
          count += 1;
          dfs(row, col, matrix[row][col], isValidVisit);
        }
      }
    }
  };

  setCount(isValidVisit);
  answer.push(count);
  reset();
  setCount(isValidVisitWithColorWeakness);
  answer.push(count);

  return answer.join(' ');
};

const inputs = readFileSync(INPUT_LOCATION).toString().trim().split('\n');

const n = +inputs[0].trim();
const [, ...matrix] = inputs.map((input) => input.trim().split(''));

console.log(getAnswer(n, matrix));
