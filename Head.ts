import Queue from './queque';

type ChildNodeMMH = NodeMMH<any> | null ; 

class NodeMMH<Type>{
    data : Type;
    left:  ChildNodeMMH;
    right: ChildNodeMMH;

    constructor(data: Type){
        this.data = data;
        this.left = null,
        this.right = null
    }
}

class MaxAndMinHean<Type>{
    root : NodeMMH<Type>
    constructor(data : Type){
        this.root = new NodeMMH(data);
    }

    ordenPorNivel():void{
        const queue = new Queue(this.root);
        let auxNodeBT : NodeMMH<Type>;
        while(!queue.isEmpty()){
            auxNodeBT = queue.dequeue();
            console.log(auxNodeBT.data);
            if(auxNodeBT.left !== null){
                queue.enqueue(auxNodeBT.left as NodeMMH<Type>);
            }
            if(auxNodeBT.right !== null){
                queue.enqueue(auxNodeBT.right as NodeMMH<Type>);
            }
        }
    }

    checkBalance(node : NodeMMH<Type>):number{
        let auxRight = node.right === null ? 0 : node.right.right === null ? 1 : 2;
        if((auxRight > 0) && (node.right?.left !== null)){
            auxRight = 2;
        }
        let auxLeft = node.left === null ? 0 : node.left.left === null ? 1 : 2;
        if((auxLeft > 0) && (node.left?.right !== null)){
            auxLeft = 2
        }
        return (auxRight as number) - (auxLeft as number);
    }

    insert(data:Type,child ?: ChildNodeMMH){
        let parent = ((child === undefined) ? this.root : child) as NodeMMH<Type>;
        let balance = 0;
        if(parent.data < data){
            parent.right === null ? parent.right = new NodeMMH(data) : this.insert(data,parent.right);
            balance = this.checkBalance(parent);
            }else{
            parent.left === null ? parent.left = new NodeMMH(data) : this.insert(data,parent.left);
            balance = this.checkBalance(parent);
        }

        if(-1 > balance || balance > 1){
            switch (true){
                case balance > 1:
                    this.rightBalance(parent.data);
                    break;
                case balance < -1:
                    this.leftBalance(parent.data);
                    break;
            }

        }
    }

    rightBalance(value : Type){
        console.log(`Right balancing node with ${value}`);
        let aux = this.root;
        if(aux.data === value){
            if(aux.right?.right !== null){
                this.root = aux.right as NodeMMH<Type>;
                aux.right = null;
                this.root.left = aux;
            }else{
                let auxNode1 = aux.right;
                let auxNode2 = aux.right.left;
                auxNode2!.right = auxNode1;
                auxNode1.left = null;
                auxNode2!.left = aux;
                aux.right = null;
                this.root = auxNode2 as NodeMMH<Type>;
            }
        }
        else{
            while(aux.right !== null){
                if(aux.right?.data === value){
                    let auxNode = aux.right as NodeMMH<Type>;
                    aux.right = aux.right.right as NodeMMH<Type>;
                    auxNode.right = null;
                    aux.right.left = auxNode;
                    break;
                }
                aux = aux.right as NodeMMH<Type>;
            }
        }
    }

    leftBalance(value : Type){
        console.log(`Left balancing node with ${value}`);
        let aux = this.root;
        if(aux.data === value){
            if(aux.left?.left !== null){
                this.root = aux.left as NodeMMH<Type>;
                aux.left = null;
                this.root.right = aux;
            }else{
                let auxNode1 = aux.left;
                let auxNode2 = aux.left.right;
                auxNode2!.left = auxNode1;
                auxNode1.right = null;
                auxNode2!.right = aux;
                aux.left = null;
                this.root = auxNode2 as NodeMMH<Type>;
            }
        }else{
            while(aux.left !== null){
                if(aux.left?.data === value){
                    let auxNode = aux.left as NodeMMH<Type>;
                    aux.left = aux.left.left  as NodeMMH<Type>;
                    auxNode.left = null;
                    aux.left.right = auxNode;
                    break;
                }
                aux.left  as NodeMMH<Type>;
            }
        }
    }
}

/**
 * balanceando a la izquierda
 */
const arbol = new MaxAndMinHean(4);
arbol.insert(3);
arbol.insert(2);
arbol.ordenPorNivel();

/**
 * balancenando a la derecha 
 */

const arbol2 = new MaxAndMinHean(2);
arbol2.insert(3);
arbol2.insert(4);
arbol2.ordenPorNivel();

/**
 * balanceo de derecha a izquierda
 */

 const arbol3 = new MaxAndMinHean(2);
 arbol3.insert(5);
 arbol3.insert(4);
 arbol3.ordenPorNivel();

 /**
 * balanceando de izquierda a derecha
 */
  const arbol4 = new MaxAndMinHean(5);
  arbol4.insert(2);
  arbol4.insert(4);
  arbol4.ordenPorNivel();