// https://www.acmicpc.net/problem/11723
// 집합

// 해당 문제의 메모리 제한이 짧은 것을 고려
// length가 21인 배열을 생성, 배열은 boolean값을 가짐
// boolean값과 해당하는 index에 기반하여 해당 문제를 풀어보자

// boolean으로 조절하니 메모리 초과가 발동함
// number로 조정해도 메모리 초과가 발동함

// switch문을 안 쓰려고 하니 메모리 초과가 날수도 있다고 생각해서 switch문을 사용해본다.
// 기존 방식은 아무래도 커맨드의 종류를 가지는 배열을 추가로 가져야 하기 때문에

// 마찬가지로 fail

// 후에 도전해야할 문제라고 판단
// 비트마스크를 이용해서 존재를 확인할 수 있게 되거나
// 문제가 타입스크립트에게는 불가능한 메모리를 할당하였거나 <---
// 해당 문제를 node.js나 typescript 푼 인원이 없어서 2번째 가설이 맞지 않을까 생각됨

import * as fs from 'fs';

class Set {
  set: number[] = [];

  constructor() {
    this.empty();
  }

  add = (x: number) => {
    this.set[x] = 1;
  };

  remove = (x: number) => {
    this.set[x] = 0;
  };

  check = (x: number) => {
    return this.set[x];
  };

  toggle = (x: number) => {
    this.set[x] = Math.abs(this.set[x] - 1);
  };

  all = () => {
    this.set = new Array(21).fill(1);
  };

  empty = () => {
    this.set = new Array(21).fill(0);
  };
}

const INPUT_LOCATION = 'inputs.txt';

const inputs: string[][] = fs
  .readFileSync(INPUT_LOCATION)
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.trim().split(' '));

const [, ...commands] = inputs;

const set = new Set();

for (const [command, x] of commands) {
  switch (command) {
    case 'add':
      set.add(parseInt(x));
      break;

    case 'remove':
      set.remove(parseInt(x));
      break;

    case 'check':
      console.log(set.check(parseInt(x)));
      break;

    case 'toggle':
      set.toggle(parseInt(x));
      break;

    case 'all':
      set.all();
      break;

    case 'empty':
      set.empty();
      break;
  }
}
