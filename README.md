# Data Estructures with TypeScript
it's a library to practice and get a good understanding from data structures. However we can see how they are build

## Status
1. **TypeScript** 
    * Version 5.3.3
2. **Node**
    * Version 16.15.1

## How to install

```
npm install estruturas-typescript
```

One example about how to use is shown below. in this case we are using an Min-Max Head binary tree which gonna print pre-order transversal visit

```
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
```

### Available data structues in this version
we going to list the available  data structures a their methods at hand

- Linked list
- Stack
- Queue
- Binary tree
- Min max head