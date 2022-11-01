// https://www.acmicpc.net/problem/18111
// 마인크래프트

// 들어온 땅 높이를 하나의 배열로 변환
// 땅 높이를 카운팅해서 많은 순으로 정렬
// 땅 높이의 빈도가 가장 많은 것을 기준으로 더 낮은 땅들을 주어진 B로 채울 수 있는지 검증
// 불가능하다면 다음 빈도로 체크

import * as fs from "fs";

// input
const inputs: string[] = fs
  .readFileSync("inputs.txt")
  .toString()
  .trim()
  .split("\n");
const [first, ...values] = inputs;
let [N, M, B] = first.split(" ").map((item) => parseInt(item));

// input받은 땅 높이를 하나의 number 배열로 전환
const groundLengths: number[] = [];
values
  .map((value) => value.trim().split(" "))
  .forEach((line) => {
    groundLengths.push(...line.map((item) => parseInt(item)));
  });

// 땅 높이 빈도 체크
const map = new Map<number, number>();
groundLengths.forEach((groundLength) => {
  if (map.get(groundLength)) {
    map.set(groundLength, map.get(groundLength)! + 1);
  } else {
    map.set(groundLength, 1);
  }
});

// 가장 많은 빈도의 땅 높이를 내림차순으로 정렬
const groundFrequency: { height: number; frequency: number }[] = [];

map.forEach((frequency, height) => {
  groundFrequency.push({ height, frequency });
});

groundFrequency.sort((a, b) => {
  if (a.frequency < b.frequency) {
    return 1;
  } else {
    return -1;
  }
});

// 정답 구하기
const maxHeight = Math.max(...groundLengths);
const answers: {time:number, height: number}[] = [];

console.log(groundFrequency)

groundFrequency.forEach((item) => {
  let answer: number = 0;
  let shortFall = 0;
  groundLengths.forEach((length) => {
    if (length > item.height) {
      answer += 2 * (length - item.height);
      B += 1
    } else {
      shortFall += item.height - length;
    }
  });

  if (shortFall <= B) {
    answer += shortFall;
  } else {
    answer = Number.MAX_SAFE_INTEGER;
  }

  answers.push({time: answer, height: item.height})
  
});
answers.sort((a, b) => {
    if (a.time < b.time) {
        return -1
    } else if (a.time > b.time) {
        return 1
    } else {
        if (a.height < b.height) {
            return 1
        } else if (a.height > b.height) {
            return -1
        } else {
            return 0
        }
    }
})

console.log(answers)
// console.log(answers[0].time, answers[0].height)