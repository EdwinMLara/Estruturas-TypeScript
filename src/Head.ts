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
        let auxLeft = node.left === null ? 0 : node.left.left === null ? 1 : 2;
        return (auxRight - auxLeft);
    }

    checkDoubleBalance(node:NodeMMH<Type>):number{
        let auxRight = node.right === null ? 0 : node.right.left === null ? 1 : 2;
        let auxLeft = node.left === null ? 0 : node.left.right === null ? 1 : 2;
        return (auxRight - auxLeft); 
    }

    typeBalance(data:Type,balance:number,type:boolean){
        if(-1 > balance || balance > 1){
            switch (true){
                case balance > 1:
                    type ? this.rightLeftBalance(data) : this.rightBalance(data);
                    break;
                case balance < -1:
                    type ? this.leftRightBalancing(data) : this.leftBalance(data);
                    break;
            }
        } 
    }

    insert(data:Type,child ?: ChildNodeMMH){
        let parent = ((child === undefined) ? this.root : child) as NodeMMH<Type>;
        let balance = 0;
        let balance2 = 0;
        if(parent.data < data){
            parent.right === null ? parent.right = new NodeMMH(data) : this.insert(data,parent.right);
            balance = this.checkBalance(parent);
            balance2 = this.checkDoubleBalance(parent);
            }else{
            parent.left === null ? parent.left = new NodeMMH(data) : this.insert(data,parent.left);
            balance = this.checkBalance(parent);
            balance2 = this.checkDoubleBalance(parent);
        }

        this.typeBalance(parent.data,balance,false);
        this.typeBalance(parent.data,balance2,true);
        
    }

    rightBalance(value : Type){
        let aux = this.root;
        if(aux.data === value){
            this.root = aux.right;
            aux.right = null;
            this.root.left = aux; 
        }
        else{
            while(aux.right !== null){
                if(aux.right?.data === value){
                    let auxNode = aux.right;
                    aux.right = aux.right.right;
                    auxNode.right = null;
                    aux.right.left = auxNode;
                    break;
                }
                aux = aux.right;
            }
        }
    }

    rightLeftBalance(value :  Type){
        let aux = this.root;
        if(aux.data === value){
            let auxNode1 = aux.right;
            let auxNode2 = aux.right.left;
            auxNode2!.right = auxNode1;
            auxNode1.left = null;
            auxNode2!.left = aux;
            aux.right = null;
            this.root = auxNode2;
        }else{
            while(aux.right !== null){
                if(aux.right?.data === value){
                    let auxNode1 = aux.right;
                    let auxNode2 = aux.right.left;
                    auxNode2!.right = auxNode1;
                    auxNode1.left = null;
                    auxNode2!.left = aux;
                    aux.right = null;
                    aux = auxNode2;
                    break; 
                }
                aux = aux.right;
            }
        }
    }

    leftBalance(value : Type){
        let aux = this.root;
        if(aux.data === value){
            this.root = aux.left;
            aux.left = null;
            this.root.right = aux;
        }else{
            while(aux.left !== null){
                if(aux.left?.data === value){
                    let auxNode = aux.left ;
                    aux.left = aux.left.left ;
                    auxNode.left = null;
                    aux.left.right = auxNode;
                    break;
                }
                aux = aux.left ;
            }
        }
    }

    leftRightBalancing(value : Type){
        let aux = this.root;
        if(aux.data === value){
            let auxNode1 = aux.left;
            let auxNode2 = aux.left.right;
            auxNode2!.left = auxNode1;
            auxNode1.right = null;
            auxNode2!.right = aux;
            aux.left = null;
            this.root = auxNode2;
        }else{
            while(aux.left !== null){
                if(aux.left.data === value){
                    let auxNode1 = aux.left;
                    let auxNode2 = aux.left.right;
                    auxNode2!.left = auxNode1;
                    auxNode1.right = null;
                    auxNode2!.right = aux;
                    aux.left = null;
                    aux = auxNode2;
                    break;
                }
                aux = aux.left;
            }
        }
    }
}


export default MaxAndMinHean;