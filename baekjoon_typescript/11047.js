"use strict";
// https://www.acmicpc.net/problem/11047
// 동전 0
exports.__esModule = true;
// 가설
// 입력으로 받은 동전의 가치 배열에 reverse를 적용하여 내림차순으로 정렬한다.
// 배열에 forEach를 이용하여 접근해서 K를 나누어본다.
// 몫을 정수로 만들고 0이라면 무시하고
// 1보다 크면 해당 가치와 몫을 곱한 값을 기반으로 K를 수정하고 answer에 저장한다.
var fs = require("fs");
var INPUT_LOCATION = 'inputs.txt';
var inputs = fs
    .readFileSync(INPUT_LOCATION)
    .toString()
    .trim()
    .split('\n');
var _a = inputs.map(function (input) { return input.trim(); }), firstLine = _a[0], valueOfCoins = _a.slice(1);
var _b = firstLine.split(' ').map(function (item) { return +item; }), k = _b[1];
var valueOfCoinsNumber = valueOfCoins.map(function (valueOfCoin) { return +valueOfCoin; });
var valueOfCoinsReverse = valueOfCoinsNumber.reverse();
var answer = 0;
valueOfCoinsReverse.forEach(function (valueOfCoin) {
    var numberOfCoins = Math.floor(k / valueOfCoin);
    k -= numberOfCoins * valueOfCoin;
    answer += numberOfCoins;
});
console.log(answer);
