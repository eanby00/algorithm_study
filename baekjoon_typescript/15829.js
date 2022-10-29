"use strict";
exports.__esModule = true;
// https://www.acmicpc.net/problem/15829
// Hashing
var fs = require("fs");
var inputs = fs
    .readFileSync("inputs.txt")
    .toString()
    .trim()
    .split("\n");
var num = inputs[0], checkValue = inputs[1];
var hash = new Map();
hash.set(0, 1);
var sum = 0;
checkValue
    .trim()
    .split("")
    .forEach(function (alphabet, index) {
    var specialValue = hash.get(index);
    if (specialValue === undefined) {
        specialValue = hash.get(index - 1) * 31 % 1234567891;
        hash.set(index, specialValue);
    }
    var a = alphabet.charCodeAt(0) - 96;
    sum += a * specialValue;
});
console.log(sum % 1234567891);
