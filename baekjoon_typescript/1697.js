"use strict";
// https://www.acmicpc.net/problem/1697
// 숨바꼭질
exports.__esModule = true;
// n에서 이동할 수 있는 것은 n-1, n+1, n * 2이다.
// 즉 시작점을 기준으로 나올 수 있는 가짓수는 3개다
// 5 => 4, 6, 10
// n초가 지날 때 나올 수 있는 가짓수는 3**n이다.
// bfs를 수행하면서 n-1, n+1, n*2를 넣어주고 shift했을 경우 나온 값이 hit한다면 그 떄 몇 초가 지났는지 return하자
var fs = require("fs");
var INPUT_LOCATION = './input/inputs.txt';
var getNumberOfArrivedK = function (n, k) {
    var queue = [];
    var visited = Array(100001).fill(false);
    var count = 0;
    var bfs = function (startNumber) {
        visited[startNumber] = true;
        queue.push(startNumber);
        while (queue.length >= 0) {
            var temp = [];
            for (var _i = 0, queue_1 = queue; _i < queue_1.length; _i++) {
                var value = queue_1[_i];
                if (value === k) {
                    console.log(value);
                    return count;
                }
                for (var _a = 0, _b = [value - 1, value + 1, value * 2]; _a < _b.length; _a++) {
                    var nextValue = _b[_a];
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
var _a = fs
    .readFileSync(INPUT_LOCATION)
    .toString()
    .trim()
    .split(' ')
    .map(function (input) { return +input; }), n = _a[0], k = _a[1];
console.log(getNumberOfArrivedK(n, k));
