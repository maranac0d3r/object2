const OBJECT_TYPE = "[object Object]";
const FUNCTION_TYPE="[object Function]"
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
        object[path[0]]=typeOf(value)=== FUNCTION_TYPE?value(object[path[0]]):value;
        return  object;
    }
    var obj = object;
    var index=-1;
    while(++index < len){
        isLast = index==len-1
        if(typeOf(obj[path[index]]) !== OBJECT_TYPE &&!isLast ){
            obj[path[index]]={}
        }
        if(!isLast){
            obj=obj[path[index]]
        }else{
            obj[path[index]] = typeOf(value)===FUNCTION_TYPE?value(object[path[index]]):value;
            return  object;
        }
    }
}

function delete1(path,object){
  path = getPath(path);
  var len = path.length;
  if(!len){
    return;
  }
  if(len==1){
    delete object[path[0]];
  }
  var index=-1;
  while(++index<len){
    isLast = index==len-1;
    if(typeOf(object[path[index]]) != OBJECT_TYPE && !isLast){
      return;
    }else if(isLast){
        delete object[path[index]]
    }else{
      object=object[path[index]]
    }
  }
}

module.export =  {
    get:get,
    put:put,
    delete:delete1
}