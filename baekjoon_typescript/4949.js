"use strict";
// https://www.acmicpc.net/problem/4949
// 균형잡힌 세상
exports.__esModule = true;
var fs = require("fs");
var inputs = fs
    .readFileSync("inputs.txt")
    .toString()
    .trim()
    .split("\n")
    .map(function (input) { return input.trim().split(""); });
var testingInputs = inputs.slice(0, inputs.length - 1);
var answers = [];
testingInputs.forEach(function (input) {
    var answer = "yes";
    var stack = [];
    for (var i = 0; i < input.length; ++i) {
        if (input[i] === "(") {
            stack.push(input[i]);
        }
        else if (input[i] === "[") {
            stack.push(input[i]);
        }
        else if (input[i] === "]") {
            var check = stack.pop();
            if (check !== "[") {
                answer = "no";
                break;
            }
        }
        else if (input[i] === ")") {
            var check = stack.pop();
            if (check !== "(") {
                answer = "no";
                break;
            }
        }
    }
    if (stack.length !== 0) {
        answer = 'no';
    }
    answers.push(answer);
});
console.log(answers.join("\n"));
