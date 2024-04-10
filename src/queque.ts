import LinkedList from "./list";

class Queue<Type> {
  headQ: LinkedList<Type>;

  constructor(value: Type) {
    this.headQ = new LinkedList(value);
  }

  isEmpty(): boolean {
    if (this.headQ.head === null) {
      return true;
    } else {
      return false;
    }
  }

  size() {
    return this.headQ.size();
  }

  enqueue(value: Type) {
    this.headQ.insertLast(value);
  }

  dequeue() {
    return this.headQ.deleteFirst();
  }

  peak() {
    return this.headQ.head.data;
  }

  printQueue() {
    let aux = this.headQ.head;
    while (aux != null) {
      console.log(aux.data);
      aux = aux.next;
    }
  }
}

export default Queue;
