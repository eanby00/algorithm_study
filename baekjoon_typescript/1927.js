"use strict";
// https://www.acmicpc.net/problem/1927
// 최소 힙
exports.__esModule = true;
// 가설
// 단순히 힙을 구현해보는 문제
// 힙은 최소, 최대의 값을 1번 인덱스에 저장하고 그 값을 pop요청이 있을 경우 뽑아낸다.
// 힙에서 부모 노드의 값은 항상 자식의 자식 노드 값보다 크거나 작아야 한다.
// 힙은 기본적으로 생각하면 tree의 모습이지만 이를 배열로 변경할 수 있다.
// 이 경우 자식 노드의 index는 부모 노드의 index * 2, index * 2 + 1이 된다.
// 이를 위해 index는 1번부터 시작해야 한다.
// 최소 힙임을 주의할 것
var fs = require("fs");
var INPUT_LOCATION = './input/inputs.txt';
var Heap = /** @class */ (function () {
    function Heap() {
        var _this = this;
        this.answers = [];
        this.receivedInput = function (items) {
            items.forEach(function (item) {
                if (item === 0) {
                    _this.answers.push(_this.pop());
                }
                else {
                    _this.push(item);
                }
            });
        };
        this.changeValues = function (currentIndex, targetIndex) {
            var currentItem = _this.heap[currentIndex];
            _this.heap[currentIndex] = _this.heap[targetIndex];
            _this.heap[targetIndex] = currentItem;
        };
        this.push = function (item) {
            var itemIndex = _this.heap.length;
            var parrentIndex = Math.floor(itemIndex / 2);
            _this.heap.push(item);
            while (_this.heap[parrentIndex] > _this.heap[itemIndex]) {
                _this.changeValues(itemIndex, parrentIndex);
                itemIndex = parrentIndex;
                parrentIndex = Math.floor(itemIndex / 2);
            }
        };
        this.pop = function () {
            if (_this.heap.length <= 1) {
                return 0;
            }
            var currentIndex = 1;
            var lastIndex = _this.heap.length - 1;
            _this.changeValues(currentIndex, lastIndex);
            var popValue = _this.heap.pop();
            var leftChildIndex = currentIndex * 2;
            var rightChildIndex = currentIndex * 2 + 1;
            var getMinIndex = function () {
                if (_this.heap.length <= rightChildIndex ||
                    _this.heap[leftChildIndex] < _this.heap[rightChildIndex]) {
                    return leftChildIndex;
                }
                return rightChildIndex;
            };
            while (_this.heap[currentIndex] > _this.heap[leftChildIndex] ||
                _this.heap[currentIndex] > _this.heap[rightChildIndex]) {
                var minIndex = getMinIndex();
                _this.changeValues(currentIndex, minIndex);
                currentIndex = minIndex;
                leftChildIndex = currentIndex * 2;
                rightChildIndex = currentIndex * 2 + 1;
            }
            return popValue;
        };
        this.printAnswer = function () {
            console.log(_this.answers.join('\n'));
        };
        this.print = function () {
            console.log(_this.heap);
        };
        this.heap = [0];
    }
    return Heap;
}());
var inputs = fs
    .readFileSync(INPUT_LOCATION)
    .toString()
    .trim()
    .split('\n')
    .map(function (input) { return +input.trim(); });
var items = inputs.slice(1);
var minHeap = new Heap();
minHeap.receivedInput(items);
minHeap.printAnswer();
