// https://www.acmicpc.net/problem/11866
import * as fs from 'fs';

class Node {
    item: number;
    next: null | Node;

    constructor(item: number) {
        this.item = item;
        this.next = null;
    }
}

class circleQueue {

    queueSize: number;
    tail: Node | null;
    size: number = 0;
    prev: null | Node = null;

    constructor(size: number) {
        this.queueSize = size;
        this.tail = null;
    }

    push(item: number): void {
        const node = new Node(item);
        if (this.size === 0) {
            node.next = node;
        } else {
            node.next = this.tail!.next;
            this.tail!.next = node;
        }
        this.tail = node;
        this.size += 1;
    }

    pop(space: number): number {
        let prevTarget: Node;
        let target : Node;
        if (this.prev) {
            target = this.prev;
        } else {
            target = this.tail!;
        }

        for (let i = 0; i < space; ++i) {
            prevTarget = target!;
            target = target.next!;
        }

        this.prev = target;
        prevTarget!.next = target!.next;
        return target!.item;
    }

}

let inputs: number[] = fs.readFileSync('inputs.txt').toString().trim().split(" ")
    .map((input: string):number => parseInt(input));
const [number, space] = inputs;
const queue = new circleQueue(number);
for (let i = 1; i <= number; ++i) {
    queue.push(i)
}
let answer = []
for (let i = 0; i < number; ++i) {
    answer.push(queue.pop(space));
}
console.log("<"+answer.join(', ')+">");