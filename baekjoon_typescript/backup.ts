// https://www.acmicpc.net/problem/10845

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

    pop(): number {
        if (this.head) {
            if (this.head === this.tail) {
                this.tail = null;
            }
            let node = this.head;
            this.head = node.next;
            this.length -= 1;
            return node.item;
        } else {
            return -1;
        }
    }

    size(): number {
        return this.length;
    }

    empty() : number {
        if (this.length === 0) {
            return 1
        } else {
            return 0
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

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let inputs: string[] = [];
let inputNumber: number = 0;
rl.on("line", function(line: string): void {
    let input: string = line.trim();
    if (inputNumber === 0) {
        inputNumber = parseInt(input);
    } else {
        inputs.push(input);
    }
    if (inputNumber === inputs.length) {
        rl.close();
    }
})

rl.on("close", function(): void {
    const queue = new Queue();
    inputs.forEach((input: string) => {
        const [command, item] = input.split(" ");
        switch(command) {
            case 'push':
                queue.push(parseInt(item))
                break
            case 'pop':
                console.log(queue.pop());
                break
            case 'size':
                console.log(queue.size());
                break
            case 'empty':
                console.log(queue.empty());
                break
            case 'front':
                console.log(queue.front());
                break
            case 'back':
                console.log(queue.back());
                break
        }
    })
})


// https://www.acmicpc.net/problem/10845
import fs from 'fs';

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
            let node = this.head;
            this.head = node.next;
            this.length -= 1;
            return node.item;
        } else {
            return -1;
        }
    }

    size(): number {
        return this.length;
    }

    empty() : number {
        if (this.length === 0) {
            return 1
        } else {
            return 0
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

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

rl.on("close", function(): void {
    const queue = new Queue();
    inputs.forEach((input: string) => {
        const [command, item] = input.split(" ");
        switch(command) {
            case 'push':
                queue.push(parseInt(item))
                break
            case 'pop':
                console.log(queue.pop());
                break
            case 'size':
                console.log(queue.size());
                break
            case 'empty':
                console.log(queue.empty());
                break
            case 'front':
                console.log(queue.front());
                break
            case 'back':
                console.log(queue.back());
                break
        }
    })
})

