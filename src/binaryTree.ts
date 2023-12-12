import Queue from './queque';

type ChildNodeBT = NodeBT<any> | null;
class NodeBT<Type>{
    data:Type;
    height:number;
    left:ChildNodeBT;
    right:ChildNodeBT;
    constructor(data : Type, height:number = 0){
        this.data = data;
        this.height = height;
        this.left = null;
        this.right = null;
    }
}

class BTree<Type>{
    root : NodeBT<Type>
    constructor(data : Type){
        this.root = new NodeBT(data);
    }

    insert(data:Type,child ?: NodeBT<Type>):void{
        let parent = ((child === undefined) ? this.root : child) as NodeBT<Type>;
        if(parent.data < data){
            parent.right === null ? parent.right = new NodeBT(data,parent.height + 1) : this.insert(data,parent.right);
        }else{
            parent.left === null ? parent.left = new NodeBT(data,parent.height + 1) : this.insert(data,parent.left);
        }
    }

    preOrdenFindMaxHeigh(maxHeight : number[],child ?: NodeBT<Type>):number{
        let parent = ((child === undefined) ? this.root : child) as NodeBT<Type>;
        if(parent !== null){
            let aux = this.preOrdenFindMaxHeigh(maxHeight,parent.left as NodeBT<Type>);
            if(aux > maxHeight[0]){
                maxHeight[0] = aux;
            }
            aux = this.preOrdenFindMaxHeigh(maxHeight,parent.right as NodeBT<Type>);
            if(aux > maxHeight[0]){
                maxHeight[0] = aux;
            }
        }else{
            return 0;
        }

        return parent.height;
    }

    /**Recorrido en Anchura */
    ordenPorNivel():void{
        const queue = new Queue(this.root);
        let auxNodeBT : NodeBT<Type>;
        while(!queue.isEmpty()){
            auxNodeBT = queue.dequeue();
            console.log(auxNodeBT.data);
            if(auxNodeBT.left !== null){
                queue.enqueue(auxNodeBT.left as NodeBT<Type>);
            }
            if(auxNodeBT.right !== null){
                queue.enqueue(auxNodeBT.right as NodeBT<Type>);
            }
        }
    }
}

export default BTree;