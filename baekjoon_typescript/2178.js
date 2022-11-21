"use strict";
// https://www.acmicpc.net/problem/2178
// 미로 탐색
exports.__esModule = true;
// 기본적인 bfs를 이용한다.
// 1. n * m의 배열을 만들어서 (n,m)까지 갈 동안 갔던 루트의 최소 칸 수를 기록한다.
// n, m에 도달하였을 경우 해당 칸에 기록된 값을 리턴한다.
// 2. 만약 1이 메모리 초과가 날 경우, 입력 받은 배열 자체를 변경하자
var fs = require("fs");
var INPUT_LOCATION = './input/inputs.txt';
var getNumberOfEscapeMaze = function (n, m, maze) {
    var recordPathOfMaze = Array.from(Array(n), function () {
        return Array(m).fill(0);
    });
    var queue = [];
    var setMaze = function (n, m, maze) {
        for (var y = 0; y < n; ++y) {
            for (var x = 0; x < m; ++x) {
                if (maze[y][x] === 0) {
                    recordPathOfMaze[y][x] = NaN;
                }
            }
        }
    };
    var isMergeValue = function (x, y, value) {
        if (Math.abs(recordPathOfMaze[y][x] - value) > 1) {
            return true;
        }
        return false;
    };
    var isValidCoordinate = function (currentCoordinate, previousValue) {
        var x = currentCoordinate[0], y = currentCoordinate[1];
        try {
            if (!Number.isNaN(recordPathOfMaze[y][x]) &&
                (recordPathOfMaze[y][x] === 0 || isMergeValue(x, y, previousValue))) {
                return true;
            }
        }
        catch (_a) {
            return false;
        }
        return false;
    };
    var mergeValues = function (x, y, value) {
        if (recordPathOfMaze[y][x] === 0) {
            return value;
        }
        return Math.min(recordPathOfMaze[y][x], value);
    };
    var bfs = function (x, y) {
        recordPathOfMaze[y][x] = 1;
        queue.push([x, y]);
        while (queue.length > 0) {
            var _a = queue.pop(), targetX = _a[0], targetY = _a[1];
            var previousValue = recordPathOfMaze[targetY][targetX];
            if (isValidCoordinate([targetX, targetY - 1], previousValue)) {
                queue.push([targetX, targetY - 1]);
                recordPathOfMaze[targetY - 1][targetX] = mergeValues(targetX, targetY - 1, recordPathOfMaze[targetY][targetX] + 1);
            }
            if (isValidCoordinate([targetX, targetY + 1], previousValue)) {
                queue.push([targetX, targetY + 1]);
                recordPathOfMaze[targetY + 1][targetX] = mergeValues(targetX, targetY + 1, recordPathOfMaze[targetY][targetX] + 1);
            }
            if (isValidCoordinate([targetX - 1, targetY], previousValue)) {
                queue.push([targetX - 1, targetY]);
                recordPathOfMaze[targetY][targetX - 1] = mergeValues(targetX - 1, targetY, recordPathOfMaze[targetY][targetX] + 1);
            }
            if (isValidCoordinate([targetX + 1, targetY], previousValue)) {
                queue.push([targetX + 1, targetY]);
                recordPathOfMaze[targetY][targetX + 1] = mergeValues(targetX + 1, targetY, recordPathOfMaze[targetY][targetX] + 1);
            }
        }
    };
    setMaze(n, m, maze);
    bfs(0, 0);
    console.log(recordPathOfMaze[n - 1][m - 1]);
};
var inputs = fs.readFileSync(INPUT_LOCATION).toString().trim().split('\n');
var _a = inputs[0]
    .trim()
    .split(' ')
    .map(function (item) { return +item; }), n = _a[0], m = _a[1];
var _b = inputs.map(function (input) {
    return input
        .trim()
        .split('')
        .map(function (item) { return +item; });
}), maze = _b.slice(1);
getNumberOfEscapeMaze(n, m, maze);
