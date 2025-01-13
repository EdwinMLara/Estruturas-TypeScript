import GraphLA from "./graph";

const graph = new GraphLA('A');
let A = 0;
let C = graph.addVertice('C');
let F = graph.addVertice('F');
let G = graph.addVertice('G');
let E = graph.addVertice('E');
let B = graph.addVertice('B');
let D = graph.addVertice('D');



graph.addEdges(A,{destino:C,peso:3});

graph.addEdges(C,{destino:F,peso:2});
graph.addEdges(C,{destino:G,peso:4});
graph.addEdges(C,{destino:E,peso:1});

graph.addEdges(F,{destino:B,peso:2});
graph.addEdges(B,{destino:C,peso:5});

graph.addEdges(E,{destino:A,peso:1});

graph.addEdges(D,{destino:A,peso:2});
graph.addEdges(D,{destino:E,peso:1});

//graph.PrintData();

console.log(graph.DFS(D));
console.log(graph.BFS(D));
