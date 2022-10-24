// https://www.acmicpc.net/problem/2164
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
        const node = new Node(item);
        if (!this.head) {
            this.head = node;
            this.head.next = this.tail;

        } else if (this.tail) {
            this.tail.next = node;
        }

        this.tail = node;
        this.length += 1;
    }

    popLeft(): Node | null{
        let item: Node | null;
        if (this.head) {
            item = this.head;
            this.head = this.head.next
            this.length -= 1
            return item;

        } else {
            return null;
        }
        
    }

    getHead(): number | undefined {
        return this.head?.item;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let input: number;

rl.on('line', function(line: string): void {
    input = parseInt(line.trim());
    rl.close();
})

rl.on('close', function(): void {
    let numbers = new Queue();
    Array(input).fill(0).map((value: any, index:number):void => numbers.push(index + 1));
    
    while (numbers.length > 1) {
        numbers.popLeft()
        let second: Node | null = numbers.popLeft();
        if (second) {
            numbers.push(second.item)
        }
    }
    console.log(numbers.getHead());
    
})