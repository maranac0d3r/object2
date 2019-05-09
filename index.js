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
    if(!len || Object(object)!==object){
        return undefined;
    }
    if(len==1){
        object[path[0]]=typeOf(value)=== FUNCTION_TYPE?value(object[path[0]]):value;
        return  object;
    }
    var obj = object;
    var index=-1;
    while(++index < len-1){
        if(Object(obj[path[index]])!==obj[path[index]]){
            obj[path[index]] = {}
        }
        obj = obj[path[index]]
    }
    obj[path[index]] = typeOf(value)===FUNCTION_TYPE?value(obj[path[index]]):value;
    return  object;
}

function delete1(path,object){
  path = getPath(path);
  var len = path.length;
  if(!len || Object(object)!==object){
    return;
  }
  if(len==1){
    delete object[path[0]];
  }
  var index=-1;
  while(++index<len-1){
      if(Object(object[path[index]]) !== object[path[index]]){
          return;
      }
      object = object[path[index]];
  }
  if(index==len-1){
      delete object[path[index]]
  }
}

module.export =  {
    get:get,
    put:put,
    delete:delete1
}