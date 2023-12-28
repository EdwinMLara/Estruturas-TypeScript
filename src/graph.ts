import LinkedList from "./list";
import { equals } from "./utils";

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

    addEdges(origin : Type, value : Type) : boolean {
        if(typeof(value) === 'object'){
            if(!equals(origin, value))
                return false;
        }
        console.log("no es object");
        let auxVertices = this.vertices;
        let auxVerticesList = auxVertices.head
            while(auxVerticesList !== null){
                console.log(auxVerticesList.data.value)
                if(auxVerticesList.data.value === origin){
                    console.log(auxVerticesList.data, origin);
                    if(auxVerticesList.data.listaAdyacencua === null){
                        auxVerticesList.data.listaAdyacencua = new LinkedList(value);
                        return true;        
                    }
                    auxVerticesList.data.listaAdyacencua.insertLast(value);
                    return true;
                }
                auxVerticesList = auxVerticesList.next; 
            }
        return true;
    }

    addVertice(value: Type): void{
        let auxNodeG =  new NodeG(value)
        this.vertices.insertLast(auxNodeG);
    }
}

export default GraphLA;