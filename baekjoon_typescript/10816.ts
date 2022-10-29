// https://www.acmicpc.net/problem/10816
// 숫자 카드

import * as fs from "fs";

const inputs: string[] = fs
  .readFileSync("inputs.txt")
  .toString()
  .trim()
  .split("\n");

let [num, items, checkNum, checkItems] = inputs;

// ------------------------------------------------------------------
// Map을 이용해서 구현한 경우
// 메모리: 140576KB
// 시간: 776ms

const hash = new Map<number, number>();
const answer: number[] = [];

items
  .trim()
  .split(" ")
  .forEach((item) => {
    let numItem = parseInt(item);
    let target = hash.get(numItem);
    if (target) {
      hash.set(numItem, target + 1);
    } else {
      hash.set(numItem, 1);
    }
  });

checkItems
  .trim()
  .split(" ")
  .forEach((item) => {
    let numItem = parseInt(item);
    let target = hash.get(numItem);
    if (target) {
      answer.push(target);
    } else {
      answer.push(0);
    }
  });

console.log(answer.join(" "));

// ------------------------------------------------------------------------
// map을 이용하지 않고 object로 map을 구현했을 경우
// 메모리: 204292KB
// 시간: 1240ms

// type Hash = {
//   [item: number]: number;
// };

// const hash: Hash = {};
// const answer: number[] = [];

// items
//   .trim()
//   .split(" ")
//   .forEach((item) => {
//     let numItem = parseInt(item);
//     if (hash[numItem]) {
//       hash[numItem] += 1;
//     } else {
//       hash[numItem] = 1;
//     }
//   });

// checkItems
//   .trim()
//   .split(" ")
//   .forEach((item) => {
//     let numItem = parseInt(item);
//     if (hash[numItem]) {
//       answer.push(hash[numItem]);
//     } else {
//       answer.push(0);
//     }
//   });

// console.log(answer.join(" "));
