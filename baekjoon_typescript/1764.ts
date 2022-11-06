// https://www.acmicpc.net/problem/1764
// 듣보잡

// 가설
// 입력값을 받아서 첫 줄과 나머지를 분리함
// 한 번의 루프를 돌면서
// index가 n-1일 때까지는 map에 새로운 데이터로 추가
// index가 n이상일 때부터는 map에서 해당 인물이 존재하는지 여부를 체크하고 있다면 그 값을 배열에 담음
// 배열을 사전 순으로 정렬
// 배열의 길이와 배열의 데이터를 출력

import * as fs from 'fs';

const INPUT_LOCATION = 'inputs.txt';

const inputs = fs.readFileSync(INPUT_LOCATION).toString().trim().split('\n');

const [firstLine, ...names] = inputs.map((input) => input.trim());
const n: number = parseInt(firstLine.split(' ')[0]);

const people = new Map<string, boolean>();
const answer: string[] = [];

names.forEach((name, index) => {
  if (index < n) {
    people.set(name, true);
  } else {
    if (people.has(name)) {
      answer.push(name);
    }
  }
});

answer.sort((a, b) => (a < b ? -1 : 1));

console.log(answer.length);
console.log(answer.join('\n'));
