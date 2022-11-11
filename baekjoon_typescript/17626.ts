// https://www.acmicpc.net/problem/17626
// Four Squares

// 가설
// return 값은 1~4 사이로 정해짐
// 만약 n의 루트가 정수라면 return 1 => 1개의 수의 제곱이니까
// n의 루트까지 1씩 더하면서 제곱수를 구하여 뺀 값의 루트가 정수라면 return 2
// return 3의 경우는 2에서 한 번 더 뺀 값을 구하여 구함
// 나머지는 모두 return 4

import * as fs from 'fs';

const INPUT_LOCATION = 'inputs.txt';

const sqrtNumisInteger = (expression: number): boolean =>
  Number.isInteger(Math.sqrt(expression));

const getFourSquares = (num: number): number => {
  const rootFirst = Math.sqrt(num);
  if (sqrtNumisInteger(num)) {
    return 1;
  }

  for (let i = 1; i <= rootFirst + 1; ++i) {
    if (sqrtNumisInteger(num - i ** 2)) {
      return 2;
    }
  }

  for (let i = 1; i <= rootFirst + 1; ++i) {
    for (let j = 1; j <= i; ++j) {
      if (sqrtNumisInteger(num - i ** 2 - j ** 2)) {
        return 3;
      }
    }
  }

  return 4;
};

const input: number = +fs.readFileSync(INPUT_LOCATION).toString().trim();

console.log(getFourSquares(input));
