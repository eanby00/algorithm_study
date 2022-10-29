"use strict";
// https://www.acmicpc.net/problem/10816
// 숫자 카드
exports.__esModule = true;
var fs = require("fs");
var inputs = fs
    .readFileSync("inputs.txt")
    .toString()
    .trim()
    .split("\n");
var num = inputs[0], items = inputs[1], checkNum = inputs[2], checkItems = inputs[3];
var hash = new Map();
var answer = [];
items
    .trim()
    .split(" ")
    .forEach(function (item) {
    var numItem = parseInt(item);
    var target = hash.get(numItem);
    if (target) {
        hash.set(numItem, target + 1);
    }
    else {
        hash.set(numItem, 1);
    }
});
checkItems
    .trim()
    .split(" ")
    .forEach(function (item) {
    var numItem = parseInt(item);
    var target = hash.get(numItem);
    if (target) {
        answer.push(target);
    }
    else {
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
