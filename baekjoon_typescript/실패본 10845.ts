// https://www.acmicpc.net/problem/10845
// 사유: 시간 초과


import * as readline from 'readline';
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

    pop(): void {
        if (this.head) {
            if (this.head === this.tail) {
                this.tail = null;
            }
            let node = this.head;
            this.head = node.next;
            this.length -= 1;
            console.log(node.item);
        } else {
            console.log(-1);
        }
    }

    size(): void {
        console.log(this.length);
    }

    empty() : void {
        if (this.length === 0) {
            console.log(1);
        } else {
            console.log(0);
        }
    }

    front() : void {
        if (this.head) {
            console.log(this.head.item);
        } else {
            console.log(-1);
        }
    }

    back() : void {
        if (this.tail) {
            console.log(this.tail.item);
        } else {
            console.log(-1);
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


let inputNumber: number = 0;
let count: number = 0;
const queue = new Queue();
rl.on("line", function(line: string): void {
    let input: string = line.trim();
    if (inputNumber === 0) {
        inputNumber = parseInt(input);
    } else {
        const [command, item] = input.split(" ");
        switch(command) {
            case 'push':
                queue.push(parseInt(item))
                break
            case 'pop':
                queue.pop();
                break
            case 'size':
                queue.size();
                break
            case 'empty':
                queue.empty();
                break
            case 'front':
                queue.front();
                break
            case 'back':
                queue.back();
                break
        }
        count += 1
    }
    if (inputNumber === count) {
        rl.close();
    }
})