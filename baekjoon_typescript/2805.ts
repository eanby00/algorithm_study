// https://www.acmicpc.net/problem/2805
// 나무자르기
import * as fs from "fs";

const inputs: string[] = fs
  .readFileSync("inputs.txt")
  .toString()
  .trim()
  .split("\n");
const m = parseInt(inputs[0].trim().split(" ")[1]);
const trees: number[] = inputs[1]
  .trim()
  .split(" ")
  .map((tree) => parseInt(tree));

let low = 1;
let high = Math.max(...trees);
let answer = 0;

while (low <= high) {
  const mid = Math.floor((low + high) / 2);

  const getTrees = trees.reduce((prev, current) => {
    if (current >= mid) {
      return prev + (current - mid);
    } else {
      return prev + 0;
    }
  }, 0);
  
  if (getTrees >= m) {
    // getTrees 줄이기 => mid를 높이기 => low를 높이기
    low = mid + 1;
    if (mid > answer) {
    // mid가 기존의 answer보다 높아야지 기존에 가지고 가던 getTrees보다는 적게 가져가니까
    // getTrees === m이 없는 이유는 문제가 적어도 m을 가져가는 경우라서
      answer = mid;
    }
  } else {
    high = mid - 1;
  }
}

console.log(answer);
