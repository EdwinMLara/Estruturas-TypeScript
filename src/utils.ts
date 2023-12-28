function equals<Type> (obj1: Type, obj2: Type ): boolean{
    for(let key in obj1){
        if(obj2.hasOwnProperty(key))
            if(obj1[key] !== obj2[key])
                return false;
    }

    for(let key in obj2){
        if(obj1.hasOwnProperty(key))
            if(obj2[key] !== obj1[key])
                return false;
    }

    return true;
}

export{equals};