// https://www.acmicpc.net/problem/1927
// 최소 힙

// 가설
// 단순히 힙을 구현해보는 문제
// 힙은 최소, 최대의 값을 1번 인덱스에 저장하고 그 값을 pop요청이 있을 경우 뽑아낸다.
// 힙에서 부모 노드의 값은 항상 자식의 자식 노드 값보다 크거나 작아야 한다.
// 힙은 기본적으로 생각하면 tree의 모습이지만 이를 배열로 변경할 수 있다.
// 이 경우 자식 노드의 index는 부모 노드의 index * 2, index * 2 + 1이 된다.
// 이를 위해 index는 1번부터 시작해야 한다.
// 최소 힙임을 주의할 것

import * as fs from 'fs';

const INPUT_LOCATION = './input/inputs.txt';

class Heap {
  private heap: number[];
  private answers: number[] = [];

  constructor() {
    this.heap = [0];
  }

  receivedInput = (items: number[]) => {
    items.forEach((item) => {
      if (item === 0) {
        this.answers.push(this.pop());
      } else {
        this.push(item);
      }
    });
  };

  push = (item: number) => {
    let itemIndex = this.heap.length;
    let parrentIndex = Math.floor(itemIndex / 2);
    this.heap.push(item);

    while (itemIndex > 1 && this.heap[parrentIndex] > this.heap[itemIndex]) {
      const parrentItem = this.heap[parrentIndex];
      const currentItem = this.heap[itemIndex];

      this.heap[parrentIndex] = currentItem;
      this.heap[itemIndex] = parrentItem;

      itemIndex = parrentIndex;
      parrentIndex = Math.floor(itemIndex / 2);
    }
  };

  pop = (): number => {
    if (this.heap.length <= 1) {
      return 0;
    }

    let currentIndex = 1;
    let lastIndex = this.heap.length - 1;

    const currentitem = this.heap[currentIndex];
    const lastItem = this.heap[lastIndex];
    this.heap[currentIndex] = lastItem;
    this.heap[lastIndex] = currentitem;

    const popValue = this.heap.pop()!;

    let leftChildIndex = currentIndex * 2;
    let rightChildIndex = currentIndex * 2 + 1;

    const getMinIndex = () => {
      if (
        this.heap.length <= rightChildIndex ||
        this.heap[leftChildIndex] < this.heap[rightChildIndex]
      ) {
        return leftChildIndex;
      }
      return rightChildIndex;
    };

    while (
      this.heap[currentIndex] > this.heap[leftChildIndex] ||
      this.heap[currentIndex] > this.heap[rightChildIndex]
    ) {
      let minIndex = getMinIndex();

      const currentItem = this.heap[currentIndex];
      const childItem = this.heap[minIndex];
      this.heap[currentIndex] = childItem;
      this.heap[minIndex] = currentItem;

      currentIndex = minIndex;
      leftChildIndex = currentIndex * 2;
      rightChildIndex = currentIndex * 2 + 1;
    }
    return popValue;
  };

  printAnswer = () => {
    console.log(this.answers.join('\n'));
  };

  print = () => {
    console.log(this.heap);
  };
}

const inputs = fs
  .readFileSync(INPUT_LOCATION)
  .toString()
  .trim()
  .split('\n')
  .map((input) => +input.trim());

const [, ...items] = inputs;
const minHeap = new Heap();
minHeap.receivedInput(items);
minHeap.printAnswer();
