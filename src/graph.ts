import LinkedList, { NodeL } from "./list";
import Queue from "./queque";
import { equals } from "./utils";

interface Adyacencia {
  destino: Number;
  peso: Number;
}

class NodeG<Type> {
  id: Number | null;
  adyacencia: Array<Adyacencia>;
  payload: Type;
  constructor(value: Type) {
    this.id = null;
    this.adyacencia = [];
    this.payload = value;
  }
}

class GraphLA<Type> {
  counterId = null;
  vertices: LinkedList<NodeG<Type>>;

  constructor(value: Type) {
    this.counterId = 0;
    let node = new NodeG(value);
    node.id = this.counterId;
    this.vertices = new LinkedList(node);
  }

  addEdges(id: Number, edge: Adyacencia): boolean {
    let vertice = this.vertices.head;
    while (vertice !== null) {
      if (id === vertice.data.id) {
        vertice.data.adyacencia.push(edge);
      }
      vertice = vertice.next;
    }
    if ((vertice = null)) return false;
    return true;
  }

  addVertice(value: Type): void {
    let node = new NodeG<Type>(value);
    this.counterId++;
    node.id = this.counterId;
    this.vertices.insertFirst(node);
  }

  showVertices() {
    this.vertices.printList();
  }

  BFS(id: Number, node: NodeL<NodeG<Type>>): Type {
    if (node.data.id == id) return node.data.payload;
    let adyacentes = node.data.adyacencia;
    adyacentes.map((item) => {
      if (item.destino === id) return;
      else {
        console.log(node.data);
        this.BFS(id, node.next);
      }
    });
    return;
  }
}

export default GraphLA;
