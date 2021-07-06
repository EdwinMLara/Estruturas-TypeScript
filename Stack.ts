import LinkedList from './list';

class Stack{
    headS : LinkedList;

    constructor(value : any){
        this.headS = new LinkedList(value);
    }

    push<Type>(value : Type): void{
        this.headS.insertFirst(value);
    }

    pop<Type>():Type{
        return this.headS.deleteFirst();
    }
}

export default Stack
/*const stack = new Stack(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());*/