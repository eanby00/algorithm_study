// https://www.acmicpc.net/problem/11286
// 절대값 힙

import * as fs from 'fs';

const INPUT_LOCATION = './input/inputs.txt';

const absHeap = (datas: number[]) => {
  const heap: number[] = [NaN];

  const checkExchangeStartAndTarget = (
    startIndex: number,
    targetIndex: number
  ) => {
    return (
      Math.abs(heap[targetIndex]) > Math.abs(heap[startIndex]) ||
      (Math.abs(heap[targetIndex]) === Math.abs(heap[startIndex]) &&
        heap[targetIndex] > heap[startIndex])
    );
  };

  const exchangeStartAndTarget = (startIndex: number, targetIndex: number) => {
    const temp = heap[startIndex];
    heap[startIndex] = heap[targetIndex];
    heap[targetIndex] = temp;
  };

  const push = (item: number) => {
    heap.push(item);

    let currentIndex = heap.length - 1;
    let parrentIndex = Math.floor(currentIndex / 2);

    while (checkExchangeStartAndTarget(currentIndex, parrentIndex)) {
      exchangeStartAndTarget(currentIndex, parrentIndex);

      currentIndex = parrentIndex;
      parrentIndex = Math.floor(currentIndex / 2);
    }
  };

  const getMinAbsIndex = (leftIndex: number, rightIndex: number) => {
    if (
      !heap[rightIndex] ||
      checkExchangeStartAndTarget(leftIndex, rightIndex)
    ) {
      return leftIndex;
    }
    return rightIndex;
  };

  const pop = () => {
    if (heap.length === 1) {
      return 0;
    }

    exchangeStartAndTarget(1, heap.length - 1);

    const returnValue = heap.pop()!;

    let currentIndex = 1;
    let leftChildIndex = currentIndex * 2;
    let rightChildIndex = currentIndex * 2 + 1;

    while (
      checkExchangeStartAndTarget(leftChildIndex, currentIndex) ||
      checkExchangeStartAndTarget(rightChildIndex, currentIndex)
    ) {
      const minIndex = getMinAbsIndex(leftChildIndex, rightChildIndex);
      exchangeStartAndTarget(currentIndex, minIndex);

      currentIndex = minIndex;
      leftChildIndex = currentIndex * 2;
      rightChildIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  };

  const getAnswers = (datas: number[]): number[] => {
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

  return getAnswers(datas).join('\n');
};

const [, ...inputs] = fs
  .readFileSync(INPUT_LOCATION)
  .toString()
  .trim()
  .split('\n')
  .map((input) => +input.trim());

console.log(absHeap(inputs));
