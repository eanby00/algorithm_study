// https://www.acmicpc.net/problem/18870
// 좌표 압축

// x들을 set을 넣었다가 array로 다시 변환한다. -> 중복 제거
// array로 변환된 x들을 오름차순으로 sort한다
// sort된 x들을 map에 넣는다. x가 키, y는 0부터 시작하는 압축된 좌표로
// map을 이용해서 최초로 받은 input의 좌표를 변환하고 그것을 출력한다.

import * as fs from 'fs';

const INPUT_LOCATION = './input/inputs.txt';

const compresseCoordinate = (coordinates: number[]): string => {
  const removeDuplication = Array.from(new Set([...coordinates]));

  const sortedCoordinate = removeDuplication.sort((a, b) => a - b);

  const mappedCoordinate = new Map<number, number>();
  let compressedCoordinate = 0;

  sortedCoordinate.forEach((coordinate) => {
    mappedCoordinate.set(coordinate, compressedCoordinate);
    compressedCoordinate += 1;
  });

  return coordinates.map((x) => mappedCoordinate.get(x)!).join(' ');
};

const inputs = fs.readFileSync(INPUT_LOCATION).toString().trim().split('\n');

const [, coordinateXs] = inputs.map((input) =>
  input
    .trim()
    .split(' ')
    .map((x) => +x)
);

console.log(compresseCoordinate(coordinateXs));
