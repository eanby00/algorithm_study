// https://www.acmicpc.net/problem/11279
// 최대 힙

// 최소 힙의 반대 버전
// 힙 구현에 익숙해지기 위해서 그냥 풀어보기

import * as fs from 'fs';

const INPUT_LOCATION = './input/inputs.txt';

const heap = (items: number[]) => {
  const heap = [NaN];
  const answers: number[] = [];

  const exchangeValue = (currentIndex: number, targetIndex: number) => {
    const currentItem = heap[currentIndex];
    heap[currentIndex] = heap[targetIndex];
    heap[targetIndex] = currentItem;
  };

  const getMaxIndex = (leftIndex: number, rightIndex: number): number => {
    if (!heap[rightIndex] || heap[leftIndex] > heap[rightIndex]) {
      return leftIndex;
    }

    return rightIndex;
  };

  const addItemToHeap = (item: number) => {
    heap.push(item);

    let currentIndex = heap.length - 1;
    let parrentIndex = Math.floor(currentIndex / 2);

    while (heap[currentIndex] > heap[parrentIndex]) {
      exchangeValue(currentIndex, parrentIndex);

      currentIndex = parrentIndex;
      parrentIndex = Math.floor(currentIndex / 2);
    }
  };

  const popItemFromHeap = () => {
    if (heap.length <= 1) {
      answers.push(0);
      return;
    }

    exchangeValue(1, heap.length - 1);
    const returnValue = heap.pop() as number;

    let currentIndex = 1;
    let leftChildIndex = currentIndex * 2;
    let rightChildIndex = currentIndex * 2 + 1;

    while (
      heap[currentIndex] < heap[leftChildIndex] ||
      heap[currentIndex] < heap[rightChildIndex]
    ) {
      const maxIndex = getMaxIndex(leftChildIndex, rightChildIndex);
      exchangeValue(currentIndex, maxIndex);

      currentIndex = maxIndex;
      leftChildIndex = currentIndex * 2;
      rightChildIndex = currentIndex * 2 + 1;
    }

    answers.push(returnValue);
  };

  const solution = (items: number[]) => {
    items.forEach((item) => {
      if (item === 0) {
        popItemFromHeap();
      } else {
        addItemToHeap(item);
      }
    });
    return answers.join('\n');
  };

  return solution(items);
};

const inputs: number[] = fs
  .readFileSync(INPUT_LOCATION)
  .toString()
  .trim()
  .split('\n')
  .map((input) => +input.trim());

const [, ...items] = inputs;
console.log(heap(items));
