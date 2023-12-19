type NextL =  NodeL<any> | null | undefined;

class NodeL<Type>{
    data : Type;
    next : NextL; 
    constructor(value : Type){
        this.data = value;
        this.next = null;
    }
}

export {NodeL};

class LinkedList<Type>{
    head : NodeL<Type>;

    constructor(value : Type){
        this.head = new NodeL(value);   
    }

    insertFirst(value:Type): void{
        let aux = new NodeL(value);
        aux.next = this.head;
        this.head = aux;
    }

    insertLast(value:Type, next ?: NextL): void{
        let auxNode = ((next === undefined) ? this.head : next) as NodeL<Type>; 
        if(auxNode !== null){
            if(auxNode.next === null){
                let aux = new NodeL(value);
                auxNode.next = aux;
            }else{
                this.insertLast(value,auxNode.next);
            }
        }else{
            this.head = new NodeL(value);
        }
    }

    size():number{
        let aux : NodeL<Type> = this.head;
        let auxSize = 0;
        while(aux !== null){
            auxSize += 1;
            aux = aux.next as NodeL<Type>;
        }
        return auxSize;
    }

    /*update(updatedValue: Type,newValue : Type, next ?: NextL) : boolean{
        let updatedStatus : boolean = false;
        let auxNode = ((next === undefined) ? this.head : next) as NodeL<Type>;
        if(auxNode.data.value === updatedValue){
            auxNode.data.value = newValue;
            return true;
        }else{
            auxNode.next != null && (updatedStatus = this.update(updatedValue,newValue,auxNode.next));
        }
        return updatedStatus;
    }*/

    deleteFirst(): Type{
        let dataDelete = this.head.data;
        let auxDelete = this.head.next;
        this.head = auxDelete as NodeL<Type>;
        return dataDelete;
    }

    delete(value:any,next ?: NextL) : boolean{
        let auxPrev = ((next === undefined) ? this.head : next) as NodeL<Type>;
        if(auxPrev.data === value){
            let auxDelete = this.head.next;
            this.head = auxDelete as NodeL<Type>;
        }else if (auxPrev.next?.data === value) {
             auxPrev.next = auxPrev.next!.next;
        }else{
            this.delete(value,auxPrev.next);
        }
        return true;
    }

    printList():void{
        let aux = this.head;
        while(aux !== null){
            console.log(aux.data);
            aux = aux.next as NodeL<Type>;
        }
    }

    removeDuplicates(){
        let aux : NextL = this.head;
        let nodeCheck = aux.next as NodeL<Type>;

        while(aux !== null){
            while(nodeCheck !== null){
                if(aux.data === nodeCheck.data){
                    this.delete(aux.data);
                    break;
                }else{
                    nodeCheck = nodeCheck.next as NodeL<Type>;
                }    
            }
                
            if(aux.next !== null){
                aux = aux.next as NodeL<Type>;
                nodeCheck = aux.next as NodeL<Type>;
            }else{
                aux = aux.next;
            }
        }
    }
}

export default LinkedList;

