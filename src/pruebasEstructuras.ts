/*const queue = new Queue(1);
console.log(queue.dequeue());
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.isEmpty());

console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue);
console.log(queue.isEmpty());*/

import MaxAndMinHean from "./Head";

/*const stack = new Stack(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());*/

const arbolRight = new MaxAndMinHean(1);
arbolRight.insert(2);
arbolRight.insert(3);
arbolRight.ordenPorNivel();

console.log('---------------------------------');
const arbolLeft = new MaxAndMinHean(3);
arbolLeft.insert(2);
arbolLeft.insert(1);
arbolLeft.ordenPorNivel();

console.log('---------------------------------');
const arbolRightLeft = new MaxAndMinHean(4);
arbolRightLeft.insert(6);
arbolRightLeft.insert(5);
arbolRightLeft.ordenPorNivel();

console.log('---------------------------------');
const arbolLeftRight = new MaxAndMinHean(4);
arbolLeftRight.insert(3);
arbolLeftRight.insert(5);
arbolLeftRight.ordenPorNivel();


