// https://www.acmicpc.net/problem/11279
// 최대 힙

// 최소 힙의 반대 버전
// 힙 구현에 익숙해지기 위해서 그냥 풀어보기

import * as fs from 'fs';

const INPUT_LOCATION = './input/inputs.txt';

const heap = (items: number[]) => {
  const heap = [NaN];
  const answers: number[] = [];

  const addItemToHeap = (item: number) => {
    heap.push(item);

    let currentIndex = heap.length - 1;
    let parrentIndex = Math.floor(currentIndex / 2);

    while (heap[currentIndex] > heap[parrentIndex]) {
      const currentItem = heap[currentIndex];

      heap[currentIndex] = heap[parrentIndex];
      heap[parrentIndex] = currentItem;

      currentIndex = parrentIndex;
      parrentIndex = Math.floor(currentIndex / 2);
    }
  };

  const popItemFromHeap = () => {
    if (heap.length <= 1) {
      answers.push(0);
      return;
    }

    const maxValue = heap[1];
    heap[1] = heap[heap.length - 1];
    heap[heap.length - 1] = maxValue;

    const returnValue = heap.pop() as number;

    let currentIndex = 1;
    let leftChildIndex = currentIndex * 2;
    let rightChildIndex = currentIndex * 2 + 1;

    const getMaxIndex = (leftIndex: number, rightIndex: number): number => {
      if (!heap[rightIndex] || heap[leftIndex] > heap[rightIndex]) {
        return leftIndex;
      }

      return rightIndex;
    };

    while (
      heap[currentIndex] < heap[leftChildIndex] ||
      heap[currentIndex] < heap[rightChildIndex]
    ) {
      const maxIndex = getMaxIndex(leftChildIndex, rightChildIndex);

      const tempValue = heap[currentIndex];
      heap[currentIndex] = heap[maxIndex];
      heap[maxIndex] = tempValue;

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
    console.log(answers.join('\n'));
  };

  solution(items);
};

const inputs: number[] = fs
  .readFileSync(INPUT_LOCATION)
  .toString()
  .trim()
  .split('\n')
  .map((input) => +input.trim());

const [, ...items] = inputs;
heap(items);
