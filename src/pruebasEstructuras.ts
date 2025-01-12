import GraphLA from "./graph";

const graph = new GraphLA('A');
let indexB = graph.addVertice('B');
let indexC = graph.addVertice('C');
let indexD = graph.addVertice('D');
graph.addEdges(0,{destino:1,peso:3});
graph.addEdges(0,{destino:2,peso:2});
graph.addEdges(indexC,{destino:1,peso:1});
graph.addEdges(indexD,{destino:0,peso:4});

console.log(graph.DFS(0));
console.log(graph.DFS(indexD));