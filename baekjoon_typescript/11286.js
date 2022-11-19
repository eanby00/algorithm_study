"use strict";
// https://www.acmicpc.net/problem/11286
// 절대값 힙
exports.__esModule = true;
var fs = require("fs");
var INPUT_LOCATION = './input/inputs.txt';
var absHeap = function (datas) {
    var heap = [NaN];
    var checkExchangeStartAndTarget = function (startIndex, targetIndex) {
        return (Math.abs(heap[targetIndex]) > Math.abs(heap[startIndex]) ||
            (Math.abs(heap[targetIndex]) === Math.abs(heap[startIndex]) &&
                heap[targetIndex] > heap[startIndex]));
    };
    var exchangeStartAndTarget = function (startIndex, targetIndex) {
        var temp = heap[startIndex];
        heap[startIndex] = heap[targetIndex];
        heap[targetIndex] = temp;
    };
    var push = function (item) {
        heap.push(item);
        var currentIndex = heap.length - 1;
        var parrentIndex = Math.floor(currentIndex / 2);
        while (checkExchangeStartAndTarget(currentIndex, parrentIndex)) {
            var temp = heap[currentIndex];
            heap[currentIndex] = heap[parrentIndex];
            heap[parrentIndex] = temp;
            currentIndex = parrentIndex;
            parrentIndex = Math.floor(currentIndex / 2);
        }
    };
    var getMinAbsIndex = function (leftIndex, rightIndex) {
        if (!heap[rightIndex] ||
            checkExchangeStartAndTarget(leftIndex, rightIndex)) {
            return leftIndex;
        }
        return rightIndex;
    };
    var pop = function () {
        if (heap.length === 1) {
            return 0;
        }
        var temp = heap[1];
        heap[1] = heap[heap.length - 1];
        heap[heap.length - 1] = temp;
        var returnValue = heap.pop();
        var currentIndex = 1;
        var leftChildIndex = currentIndex * 2;
        var rightChildIndex = currentIndex * 2 + 1;
        while (checkExchangeStartAndTarget(leftChildIndex, currentIndex) ||
            checkExchangeStartAndTarget(rightChildIndex, currentIndex)) {
            var minIndex = getMinAbsIndex(leftChildIndex, rightChildIndex);
            var temp_1 = heap[currentIndex];
            heap[currentIndex] = heap[minIndex];
            heap[minIndex] = temp_1;
            currentIndex = minIndex;
            leftChildIndex = currentIndex * 2;
            rightChildIndex = currentIndex * 2 + 1;
        }
        return returnValue;
    };
    var solution = function (datas) {
        var answers = [];
        datas.forEach(function (data) {
            if (data === 0) {
                answers.push(pop());
            }
            else {
                push(data);
            }
        });
        return answers;
    };
    return solution(datas).join('\n');
};
var _a = fs
    .readFileSync(INPUT_LOCATION)
    .toString()
    .trim()
    .split('\n')
    .map(function (input) { return +input.trim(); }), inputs = _a.slice(1);
console.log(absHeap(inputs));
