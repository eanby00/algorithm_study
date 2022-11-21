"use strict";
// https://www.acmicpc.net/problem/2178
// 미로 탐색
exports.__esModule = true;
// 기본적인 bfs를 이용한다.
// 1. n * m의 배열을 만들어서 (n,m)까지 갈 동안 갔던 루트의 최소 칸 수를 기록한다.
// n, m에 도달하였을 경우 해당 칸에 기록된 값을 리턴한다.
// 2. 만약 1이 메모리 초과가 날 경우, 입력 받은 배열 자체를 변경하자
// 다행이도 1번으로 해결할 수 있었다.
// bfs를 구현할 때는 당연하게도 queue를 이용함으로 shift 연산으로 계산해야 한다.
// pop을 쓰는 거는 정말 아니다.
var fs = require("fs");
var INPUT_LOCATION = './input/inputs.txt';
var getNumberOfEscapeMaze = function (n, m, maze) {
    var recordPathOfMaze = Array.from(Array(n), function () {
        return Array(m).fill(0);
    });
    var queue = [];
    var setMaze = function (n, m, maze) {
        for (var row = 0; row < n; ++row) {
            for (var col = 0; col < m; ++col) {
                if (maze[row][col] === 0) {
                    recordPathOfMaze[row][col] = 1;
                }
            }
        }
    };
    var isValidCoordinate = function (row, col) {
        try {
            if (recordPathOfMaze[row][col] === 0) {
                return true;
            }
        }
        catch (_a) {
            return false;
        }
        return false;
    };
    var bfs = function (row, col) {
        recordPathOfMaze[row][col] = 1;
        var dRow = [-1, 1, 0, 0];
        var dCol = [0, 0, -1, 1];
        queue.push([row, col]);
        while (queue.length > 0) {
            var _a = queue.shift(), targetRow = _a[0], targetCol = _a[1];
            for (var i = 0; i < 4; ++i) {
                var newRow = targetRow + dRow[i];
                var newCol = targetCol + dCol[i];
                if (isValidCoordinate(newRow, newCol)) {
                    queue.push([newRow, newCol]);
                    recordPathOfMaze[newRow][newCol] =
                        recordPathOfMaze[targetRow][targetCol] + 1;
                }
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
