import LinkedList from './list'

class Queue<Type>{
    headQ : LinkedList<Type>;

    constructor(value : Type){
        this.headQ = new LinkedList(value);
    }

    isEmpty():boolean{
        if(this.headQ.head === null){
            return true;
        }else{
            return false
        }
    }

    size(){
        return this.headQ.size();
    }

    enqueue(value : Type){
        this.headQ.insertLast(value);
    }

    dequeue(){
        return this.headQ.deleteFirst();
    }

    peak(){
        return this.headQ.head.data;
    }
}

export default Queue;

/*const queue = new Queue(1);
console.log(queue.dequeue());
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.isEmpty());

console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue);
console.log(queue.isEmpty());*/