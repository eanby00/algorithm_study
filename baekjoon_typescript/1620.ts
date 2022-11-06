// https://www.acmicpc.net/problem/1620
// 나는야 포켓몬 마스터 이다솜

// 가설: 그냥 들어온 N개의 값에 대해서 맵을 만들고 그것에 기초해서 출력하면 되지 않을까?
// 숫자에 대해서 영어인, 영어에 대해서 숫자인 두 경우를 모두 저장해야 한다.
// 데이터를 2배로 저장해야 할까? 개선안은 없을까?

// 들어온 값에 기반하여 맵을 만든다
// 출력이 필요한 만큼 값을 반환하여 배열에 담고 배열을 출력한다.

import * as fs from 'fs';

const INPUT_LOCATION = 'inputs.txt';

const inputs: string[] = fs
  .readFileSync(INPUT_LOCATION)
  .toString()
  .trim()
  .split('\n');

const [firstLine, ...lines] = inputs.map((input) => input.trim());
const [n, m] = firstLine.split(' ').map((number) => parseInt(number));

const books = new Map<string, string>();
for (let index = 0; index < n; ++index) {
  books.set(String(index + 1), lines[index]);
  books.set(lines[index], String(index + 1));
}

for (let index = n; index < n + m; ++index) {
  console.log(books.get(lines[index]));
}
