// https://www.acmicpc.net/problem/10845

import * as fs from 'fs';

class Node {
    item: number;
    next: Node | null;
    constructor(item: number) {
        this.item = item;
        this.next = null;
    }
}

class Queue {
    head: Node | null;
    tail: Node | null;
    length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(item: number): void {
        const node: Node = new Node(item);
        if (this.length === 0) {
            this.head = node;
        } else {
            this.tail!.next = node;
        }
        this.tail = node;
        this.length += 1;
    }

    pop(): number {
        if (this.head) {
            if (this.head === this.tail) {
                this.tail = null;
            }
            let item = this.head.item;
            this.head = this.head.next;
            this.length -= 1;
            return item;
            
        } else {
            return -1;
        }
    }

    size(): number {
        return this.length;
    }

    empty() : number {
        if (this.length === 0) {
            return 1;
        } else {
            return 0;
        }
    }

    front() : number {
        if (this.head) {
            return this.head.item;
        } else {
            return -1;
        }
    }

    back() : number {
        if (this.tail) {
            return this.tail.item;
        } else {
            return -1;
        }
    }
}
// "./dev/stdin"
const input = fs.readFileSync('inputs.txt').toString().trim().split("\n"); 
const answer = [];
const N = parseInt(input[0]);
const queue = new Queue();
for (let i = 1; i <= N; ++i) {
    const [command, item] = input[i].split(" ");
    switch(command) {
        case 'push':
            queue.push(parseInt(item))
            break
        case 'pop':
            answer.push(queue.pop());
            break
        case 'size':
            answer.push(queue.size());
            break
        case 'empty':
            answer.push(queue.empty());
            break
        case 'front':
            answer.push(queue.front());
            break
        case 'back':
            answer.push(queue.back());
            break
    }
}

console.log(answer.join('\n'))