// https://www.acmicpc.net/problem/1697
// 숨바꼭질

// n에서 이동할 수 있는 것은 n-1, n+1, n * 2이다.
// 즉 시작점을 기준으로 나올 수 있는 가짓수는 3개다
// 5 => 4, 6, 10
// n초가 지날 때 나올 수 있는 가짓수는 3**n이다.
// bfs를 수행하면서 n-1, n+1, n*2를 넣어주고 shift했을 경우 나온 값이 hit한다면 그 떄 몇 초가 지났는지 return하자

import * as fs from 'fs';

const INPUT_LOCATION = './input/inputs.txt';

const getNumberOfArrivedK = (n: number, k: number) => {
  let queue: number[] = [];
  const visited: boolean[] = Array(100001).fill(false);
  let count = 0;

  const bfs = (startNumber: number) => {
    visited[startNumber] = true;
    queue.push(startNumber);

    while (queue.length >= 0) {
      const temp: number[] = [];

      for (let value of queue) {
        if (value === k) {
          return count;
        }

        for (let nextValue of [value - 1, value + 1, value * 2]) {
          if (nextValue >= 0 && nextValue < 100001 && !visited[nextValue]) {
            visited[nextValue] = true;
            temp.push(nextValue);
          }
        }
      }

      count += 1;
      queue = temp;
    }
  };

  return bfs(n);
};

const [n, k] = fs
  .readFileSync(INPUT_LOCATION)
  .toString()
  .trim()
  .split(' ')
  .map((input) => +input);

console.log(getNumberOfArrivedK(n, k));
