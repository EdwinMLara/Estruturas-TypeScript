import LinkedList from './list';

class Stack<Type>{
    headS : LinkedList<Type>;

    constructor(value : Type){
        this.headS = new LinkedList(value);
    }

    push(value : Type): void{
        this.headS.insertFirst(value);
    }

    pop():Type{
        return this.headS.deleteFirst();
    }
}

export default Stack