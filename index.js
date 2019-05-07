function typeOf(obj){
    return Object.prototype.toString.call(obj);
}
function getPath(path){
    return typeOf(path)==="[object Array]"?path: path.split(".");
}

function  get(path,object) {
    path = getPath(path);
    var len = path.length;
    if(!len){
        return undefined;
    }

    var obj = object;
    var index = -1;

    while(++index < len){
        if(Object(obj)!==obj){
            return undefined;
        }
        obj = obj[path[index]]
    }
    return  obj;
}

function put(path,object,value){
    path = getPath(path);
    var len = path.length;
    if(!len){
        return undefined;
    }
    if(len==1){
        object[path[0]]=typeOf(value)==="[object Function]"?value(object[path[0]]):value;
        return  object;
    }
    var obj = object;
    var index=-1;
    while(++index < len){
        isLast = index==len-1
        if(typeOf(obj[path[index]]) !== "[object Object]" &&!isLast ){
            obj[path[index]]={}
        }
        if(!isLast){
            obj=obj[path[index]]
        }else{
            obj[path[index]] = typeOf(value)==="[object Function]"?value(object[path[index]]):value;
            return  object;
        }
    }
}

module.export =  {
    get:get,
    put:put
}