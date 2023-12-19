import LinkedList from "./list";

class NodeG<Type>{
    value: Type;
    listaAdyacencua : LinkedList<Type> | null;

    constructor(value: Type){
        this.value = value;
        this.listaAdyacencua = null;
    }
}

class GraphLA<Type>{
    vertices : LinkedList<NodeG<Type>>;

    constructor(value : Type){
        this.vertices = new LinkedList(new NodeG(value));
    }
}