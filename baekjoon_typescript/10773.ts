// https://www.acmicpc.net/problem/10773
// 제로

// stack에 더해야 하는 수를 저장한다.
    // 배열의 push와 pop을 이용해 stack을 구현한다.
// 0을 만나면 stack에서 pop하여 가장 최근의 값을 제거한다.
// 모든 수가 stack에 들어오면 stack의 수를 합치고 출력한다.
    // reduce함수를 이용해 구현할 수 있다.

import * as fs from "fs";

const inputs: number[] = fs
  .readFileSync("inputs.txt")
  .toString()
  .trim()
  .split("\n")
  .map((input) => parseInt(input));

const [K, ...values] = inputs;
const stack: number[] = [];

values.forEach((value) => {
  if (value === 0) {
    stack.pop();
  } else {
    stack.push(value);
  }
});

const answer = stack.reduce((prev, current) => prev + current, 0);
console.log(answer);
