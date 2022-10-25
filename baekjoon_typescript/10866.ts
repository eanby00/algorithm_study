// https://www.acmicpc.net/problem/10866

import * as fs from 'fs';

class Node {
    item: number;
    prev: Node | null;
    next: Node | null;

    constructor(item: number)  {
        this.item = item;
        this.prev = null;
        this.next = null;
    }
}

class Deque {
    head: Node | null;
    tail: Node | null;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push_front(item: number): void {
        const node = new Node(item);
        if (this.length === 0) {
            this.tail = node

        } else {
            node.next = this.head;
            this.head!.prev = node;
        }
        this.head = node;
        this.length += 1;
    }

    push_back(item: number): void {
        const node = new Node(item);
        if (this.length === 0) {
            this.head = node

        } else {
            node.prev = this.tail;
            this.tail!.next = node;
        }
        this.tail = node;
        this.length += 1;
    }

    pop_front(): number {
        if (this.length === 0) {
            return -1
        } else {
            let node : Node = this.head!;
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                node.next!.prev = null;
                this.head = node.next;
            }
            this.length -= 1;
            return node.item;
        }
    }

    pop_back(): number {
        if (this.length === 0) {
            return -1
        } else {
            let node : Node = this.tail!;
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                node.prev!.next = null;
                this.tail = node.prev;
            }
            this.length -= 1;
            return node.item;
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

const inputs: string[] = fs.readFileSync('./dev/stdin').toString().trim().split("\n");
const deque = new Deque()
let answer = []
const number:number = parseInt(inputs[0])
for (let i = 1; i <= number; ++i) {
    const [command, item] = inputs[i].trim().split(" ");
    switch(command) {
        case 'push_front':
            deque.push_front(parseInt(item));
            break
        case 'push_back':
            deque.push_back(parseInt(item));
            break
        case 'pop_front':
            answer.push(deque.pop_front());
            break
        case 'pop_back':
            answer.push(deque.pop_back());
            break
        case 'size':
            answer.push(deque.size());
            break
        case 'empty':
            answer.push(deque.empty());
            break
        case 'front':
            answer.push(deque.front());
            break
        case 'back':
            answer.push(deque.back());
            break
    }
}

console.log(answer.join('\n'))