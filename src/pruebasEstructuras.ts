import LinkedList from "./list";
import Queue from "./queque";
import Stack from "./Stack";
import BTree from "./binaryTree";
import MaxAndMinHean from "./Head";
import GraphLA from "./graph";

// =========== Linked List ============= 

/** 
interface user {
    id : number
    username : string
    password : string 
}

console.log("===============================================================");
console.log("      Testing a generic linked list with an user object       ");
console.log("===============================================================");

const list  = new LinkedList<user>({id:1, username:"User1", password:"prueba"});
list.insertFirst({id:2, username:"User2", password:"password"});
list.insertFirst({id:3, username:"User3", password:"Zeal12354"});
list.insertFirst({id:4, username:"User4", password:"Debt12548"});
list.insertFirst({id:5, username:"User5", password:"jzal12548"});
list.printList();

console.log("===============================================================");

*/


/*const queue = new Queue(1);
console.log(queue.dequeue());
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.isEmpty());

console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue);
console.log(queue.isEmpty());*/

/*const stack = new Stack(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());*/

/*const arbolRight = new MaxAndMinHean(1);
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
arbolLeftRight.ordenPorNivel(); */

const graph = new GraphLA(4);  

graph.addVertice(9);
graph.addVertice(5);
graph.addEdges(4,6);
graph.addEdges(9,6);
console.log(graph.vertices.printList());


