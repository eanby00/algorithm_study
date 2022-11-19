// https://www.acmicpc.net/problem/11286
// 절대값 힙

import * as fs from 'fs';

const INPUT_LOCATION = './input/inputs.txt';

const absHeap = (datas: number[]) => {
  const heap: number[] = [NaN];

  const checkMinValueWithSameAbsValue = (
    startIndex: number,
    targetIndex: number
  ) => {
    return (
      Math.abs(heap[startIndex]) === Math.abs(heap[targetIndex]) &&
      heap[startIndex] > heap[targetIndex]
    );
  };

  const push = (item: number) => {
    heap.push(item);

    let currentIndex = heap.length - 1;
    let parrentIndex = Math.floor(currentIndex / 2);

    while (
      Math.abs(heap[parrentIndex]) > Math.abs(heap[currentIndex]) ||
      checkMinValueWithSameAbsValue(parrentIndex, currentIndex)
    ) {
      const temp = heap[currentIndex];
      heap[currentIndex] = heap[parrentIndex];
      heap[parrentIndex] = temp;

      currentIndex = parrentIndex;
      parrentIndex = Math.floor(currentIndex / 2);
    }
  };

  const getMinAbsIndex = (leftIndex: number, rightIndex: number) => {
    if (
      !heap[rightIndex] ||
      Math.abs(heap[leftIndex]) < Math.abs(heap[rightIndex]) ||
      checkMinValueWithSameAbsValue(rightIndex, leftIndex)
    ) {
      return leftIndex;
    }
    return rightIndex;
  };

  const pop = () => {
    if (heap.length === 1) {
      return 0;
    }

    const temp = heap[1];
    heap[1] = heap[heap.length - 1];
    heap[heap.length - 1] = temp;

    const returnValue = heap.pop()!;
    let currentIndex = 1;
    let leftChildIndex = currentIndex * 2;
    let rightChildIndex = currentIndex * 2 + 1;

    while (
      Math.abs(heap[currentIndex]) > Math.abs(heap[leftChildIndex]) ||
      Math.abs(heap[currentIndex]) > Math.abs(heap[rightChildIndex]) ||
      checkMinValueWithSameAbsValue(currentIndex, leftChildIndex) ||
      checkMinValueWithSameAbsValue(currentIndex, rightChildIndex)
    ) {
      const minIndex = getMinAbsIndex(leftChildIndex, rightChildIndex);

      const temp = heap[currentIndex];
      heap[currentIndex] = heap[minIndex];
      heap[minIndex] = temp;

      currentIndex = minIndex;
      leftChildIndex = currentIndex * 2;
      rightChildIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  };

  const solution = (datas: number[]) => {
    const answers: number[] = [];
    datas.forEach((data) => {
      if (data === 0) {
        answers.push(pop());
      } else {
        push(data);
      }
    });
    return answers;
  };

  return solution(datas).join('\n');
};

const [, ...inputs] = fs
  .readFileSync(INPUT_LOCATION)
  .toString()
  .trim()
  .split('\n')
  .map((input) => +input.trim());

console.log(absHeap(inputs));
