"use strict";
// https://www.acmicpc.net/problem/11279
// 최대 힙
exports.__esModule = true;
// 최소 힙의 반대 버전
// 힙 구현에 익숙해지기 위해서 그냥 풀어보기
var fs = require("fs");
var INPUT_LOCATION = './input/inputs.txt';
var heap = function (items) {
    var heap = [NaN];
    var answers = [];
    var addItemToHeap = function (item) {
        heap.push(item);
        var currentIndex = heap.length - 1;
        var parrentIndex = Math.floor(currentIndex / 2);
        while (heap[currentIndex] > heap[parrentIndex]) {
            var currentItem = heap[currentIndex];
            heap[currentIndex] = heap[parrentIndex];
            heap[parrentIndex] = currentItem;
            currentIndex = parrentIndex;
            parrentIndex = Math.floor(currentIndex / 2);
        }
    };
    var popItemFromHeap = function () {
        if (heap.length <= 1) {
            answers.push(0);
            return;
        }
        var maxValue = heap[1];
        heap[1] = heap[heap.length - 1];
        heap[heap.length - 1] = maxValue;
        var returnValue = heap.pop();
        var currentIndex = 1;
        var leftChildIndex = currentIndex * 2;
        var rightChildIndex = currentIndex * 2 + 1;
        var getMaxIndex = function (leftIndex, rightIndex) {
            if (!heap[rightIndex] || heap[leftIndex] > heap[rightIndex]) {
                return leftIndex;
            }
            return rightIndex;
        };
        while (heap[currentIndex] < heap[leftChildIndex] ||
            heap[currentIndex] < heap[rightChildIndex]) {
            var maxIndex = getMaxIndex(leftChildIndex, rightChildIndex);
            var tempValue = heap[currentIndex];
            heap[currentIndex] = heap[maxIndex];
            heap[maxIndex] = tempValue;
            currentIndex = maxIndex;
            leftChildIndex = currentIndex * 2;
            rightChildIndex = currentIndex * 2 + 1;
        }
        answers.push(returnValue);
    };
    var solution = function (items) {
        items.forEach(function (item) {
            if (item === 0) {
                popItemFromHeap();
            }
            else {
                addItemToHeap(item);
            }
        });
        console.log(answers.join('\n'));
    };
    solution(items);
};
var inputs = fs
    .readFileSync(INPUT_LOCATION)
    .toString()
    .trim()
    .split('\n')
    .map(function (input) { return +input.trim(); });
var items = inputs.slice(1);
heap(items);
