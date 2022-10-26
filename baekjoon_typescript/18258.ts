// https://www.acmicpc.net/problem/18258

import * as fs from 'fs';

class Node {
    item: number;
    next: null | Node = null;

    constructor(item: number) {
        this.item = item;
    }
}

class Queue {
    length: number = 0;
    head: null | Node;
    tail: null | Node;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(item: number): void {
        const node = new Node(item);
        if (this.length === 0) {
            this.head = node;
        } else {
            this.tail!.next = node;
        }
        this.tail = node;
        this.length += 1;
    }

    pop(): number {
        if (this.length === 0) {
            return -1
        } else {
            const node = this.head;
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = node!.next;
            }
            this.length -= 1;
            return node!.item;
        }
    }

    size(): number {
        return this.length;
    }

    empty(): number {
        if (this.length === 0) {
            return 1
        } else {
            return 0
        }
    }

    front(): number {
        if (this.length === 0) {
            return -1
        } else {
            return this.head!.item
        }
    }

    back(): number {
        if (this.length === 0) {
            return -1
        } else {
            return this.tail!.item
        }
    }
}

let inputs: string[] = fs.readFileSync('inputs.txt').toString().trim().split("\n");
const number: number = parseInt(inputs[0]);
const anwser: number[] = [];
const queue = new Queue();
for (let i = 1; i <= number; ++i) {
    const [command, item] = inputs[i].trim().split(" ");
    switch (command) {
        case 'push':
            queue.push(parseInt(item))
            break
        case 'pop':
            anwser.push(queue.pop());
            break
        case 'size':
            anwser.push(queue.size());
            break
        case 'empty':
            anwser.push(queue.empty());
            break
        case 'front':
            anwser.push(queue.front());
            break
        case 'back':
            anwser.push(queue.back());
            break
    }
}
console.log(anwser.join('\n'));