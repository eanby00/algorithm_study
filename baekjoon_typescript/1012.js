"use strict";
// https://www.acmicpc.net/problem/1012
// 유기농 배추
exports.__esModule = true;
// 가설
// testcase를 분리
// 모두 0으로 이루어진 m, n의 행렬 생성
// 좌표값을 기준으로 1로 설정
// (0,0)부터 순회하면서 1을 만나면 dfs나 bfs를 이용해서 연결된 1을 모두 0으로 초기화
// 마지막 좌표까지 돌면서 bfs, dfs를 실행한 횟수를 저장하고 그것을 return
var fs = require("fs");
var INPUT_LOCATION = './input/inputs.txt';
var Ground = /** @class */ (function () {
    function Ground(m, n) {
        var _this = this;
        this.setCabbage = function (coordinate) {
            var x = coordinate[0], y = coordinate[1];
            _this.ground[y][x] = 1;
        };
        this.hasCabbasge = function (x, y) {
            try {
                if (_this.ground[y][x] === 1) {
                    return true;
                }
                return false;
            }
            catch (error) {
                return false;
            }
        };
        this.dfs = function (x, y) {
            _this.ground[y][x] = 0;
            if (_this.hasCabbasge(x - 1, y)) {
                _this.dfs(x - 1, y);
            }
            if (_this.hasCabbasge(x, y - 1)) {
                _this.dfs(x, y - 1);
            }
            if (_this.hasCabbasge(x + 1, y)) {
                _this.dfs(x + 1, y);
            }
            if (_this.hasCabbasge(x, y + 1)) {
                _this.dfs(x, y + 1);
            }
        };
        this.setAnswer = function () {
            for (var y = 0; y < _this.yLength; ++y) {
                for (var x = 0; x < _this.xLength; ++x) {
                    if (_this.ground[y][x] === 1) {
                        _this.dfs(x, y);
                        _this.answer += 1;
                    }
                }
            }
        };
        this.getAnswer = function () {
            console.log(_this.answer);
        };
        this.getGround = function () {
            var ground = '';
            _this.ground.forEach(function (line) {
                ground += line.join(' ') + '\n';
            });
            console.log(ground);
        };
        this.ground = Array.from(Array(n + 1), function () { return Array(m + 1).fill(0); });
        this.answer = 0;
        this.xLength = m;
        this.yLength = n;
    }
    return Ground;
}());
var inputs = fs
    .readFileSync(INPUT_LOCATION)
    .toString()
    .trim()
    .split('\n')
    .map(function (input) {
    return input
        .trim()
        .split(' ')
        .map(function (value) { return +value; });
});
var t = inputs[0][0], testCases = inputs.slice(1);
var index = 0;
for (var i = 0; i < t; ++i) {
    var _a = testCases[index], m = _a[0], n = _a[1], k = _a[2];
    var ground = new Ground(m, n);
    for (var j = index + 1; j < index + 1 + k; ++j) {
        ground.setCabbage(testCases[j]);
    }
    ground.getGround();
    ground.setAnswer();
    ground.getAnswer();
    index += k + 1;
}
