"use strict";
// https://www.acmicpc.net/problem/18870
// 좌표 압축
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
// x들을 set을 넣었다가 array로 다시 변환한다. -> 중복 제거
// array로 변환된 x들을 오름차순으로 sort한다
// sort된 x들을 map에 넣는다. x가 키, y는 0부터 시작하는 압축된 좌표로
// map을 이용해서 최초로 받은 input의 좌표를 변환하고 그것을 출력한다.
var fs = require("fs");
var INPUT_LOCATION = './input/inputs.txt';
var compresseCoordinate = function (coordinates) {
    var removeDuplication = Array.from(new Set(__spreadArray([], coordinates, true)));
    var sortedCoordinate = removeDuplication.sort(function (a, b) { return a - b; });
    var mappedCoordinate = new Map();
    var compressedCoordinate = 0;
    sortedCoordinate.forEach(function (coordinate) {
        mappedCoordinate.set(coordinate, compressedCoordinate);
        compressedCoordinate += 1;
    });
    return coordinates.map(function (x) { return mappedCoordinate.get(x); }).join(' ');
};
var inputs = fs.readFileSync(INPUT_LOCATION).toString().trim().split('\n');
var _a = inputs.map(function (input) {
    return input
        .trim()
        .split(' ')
        .map(function (x) { return +x; });
}), coordinateXs = _a[1];
console.log(compresseCoordinate(coordinateXs));
