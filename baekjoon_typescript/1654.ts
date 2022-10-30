// https://www.acmicpc.net/problem/1654
// 랜선 자르기

import * as fs from "fs";

const findAnswer = (lines: number[], N: number): number => {
  let low = 1;
  let high = Math.max(...lines);
  let answer = 0;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const cnt = lines.reduce(
      (prev, current) => prev + Math.floor(current / mid),
      0
    );
    if (cnt >= N) {
      if (mid > answer) {
        answer = mid;
      }
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return answer;
};

const inputs: string[] = fs
  .readFileSync("inputs.txt")
  .toString()
  .trim()
  .split("\n");
const N: number = parseInt(inputs[0].trim().split(" ")[1]);
const [, ...lines] = inputs.map((input) => parseInt(input.trim()));
console.log(findAnswer(lines, N));
