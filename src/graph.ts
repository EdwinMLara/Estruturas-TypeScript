import LinkedList from "./list";

interface Adyacencia {
  destino: number;
  peso: number;
}

class NodeG<Type> {
  adyacencia: LinkedList<Adyacencia> | null;
  payload: Type;
  constructor(value: Type) {
    this.adyacencia = null;
    this.payload = value;
  }
}

class GraphLA<Type> {
  counterId = null;
  vertices: Array<NodeG<Type>>;

  constructor(value: Type) {
    this.counterId = 0;
    let node = new NodeG(value);
    this.vertices = [];
    this.vertices.push(node);
  }

  addEdges(id: number, adyacencia: Adyacencia): boolean {
    if(this.vertices[adyacencia.destino] === undefined)
      throw  new Error("The destiny node doesn't exits")
    if(this.vertices[id].adyacencia === null) {
      this.vertices[id].adyacencia = new LinkedList<Adyacencia>(adyacencia);
      return true;
    }
    this.vertices[id].adyacencia.insertLast(adyacencia);
    return true;
  }

  addVertice(value: Type): number {
    let node = new NodeG(value);
    let newIndex = this.vertices.push(node);
    return newIndex - 1;
  }

  /**
   * 
   * @param startVertex is the index of the vertex array where i wanna start
   * the neighbors  are visited in the order ther appear in the adjancecy list
   */
  BFS(startVertex: number): Array<string> {
    const visitedNodes: Set<Type> = new Set();
    const result: string [] = []; 

    const iterateGraph = (startVertex : number) => {
      let value = this.vertices[startVertex].payload;
      if(!visitedNodes.has(value)){
        visitedNodes.add(value);
        result.push(value.toString());
        let adjacencyList = this.vertices[startVertex].adyacencia 
        if(adjacencyList === null) 
          return 
        let currentNode = adjacencyList.head;
        while(currentNode !== null) {
          let adjacency = currentNode.data;
          iterateGraph(adjacency.destino);
          currentNode = currentNode.next;
        }
      } 
    }
    iterateGraph(startVertex)
    return result;
  }
}

export default GraphLA;
