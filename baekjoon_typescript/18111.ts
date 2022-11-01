// https://www.acmicpc.net/problem/18111
// 마인크래프트

// 들어온 땅 높이를 하나의 배열로 변환
// 0~256까지의 높이만 체크하면 됨
// 256의 loop를 돌리면서 주어진 B로 채울 수 있는지 체크
// 불가능하다면 다음 빈도로 체크
// 일정 조건에서 loop를 break할 조건 추가
// 일정 높이부터는 어차피 B가 부족해서 실패할수밖에 없기 때문
// 모든 loop를 끝내고 시간이 가장 낮으면서 높이가 가장 높은 것을 출력

import * as fs from "fs";

// input
const inputs: string[] = fs
  .readFileSync("inputs.txt")
  .toString()
  .trim()
  .split("\n");
const [first, ...values] = inputs;
const [N, M, B] = first.split(" ").map((item) => parseInt(item));

// input받은 땅 높이를 하나의 number 배열로 전환
const groundLengths: number[] = [];
values
  .map((value) => value.trim().split(" "))
  .forEach((line) => {
    groundLengths.push(...line.map((item) => parseInt(item)));
  });

// 정답 구하기
const answers: { time: number; height: number }[] = [];

for (let i = 0; i <= 256; ++i) {
  let spare = B;
  let answer: number = 0;
  let shortFall = 0;
  groundLengths.forEach((length) => {
    if (length > i) {
      answer += 2 * (length - i);
      spare += length - i;
    } else {
      shortFall += i - length;
    }
  });

  if (shortFall <= spare) {
    answer += shortFall;
  } else {
    // 만약 주어진 spare보다 더 많은 부족분이 있을 경우 앞으로는 모두 이런 케이스가 될 것이기 때문에 break
    answer = Number.MAX_SAFE_INTEGER;
    break;
  }

  answers.push({ time: answer, height: i });
}

// 가장 시간이 적게 걸리면서 같은 시간에서는 가장 높이가 높은 것을 출력하기 위한 sort
answers.sort((a, b) => {
  if (a.time < b.time) {
    return -1;
  } else if (a.time > b.time) {
    return 1;
  } else {
    if (a.height < b.height) {
      return 1;
    } else if (a.height > b.height) {
      return -1;
    } else {
      return 0;
    }
  }
});

console.log(answers[0].time, answers[0].height);
