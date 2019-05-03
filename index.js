

function  get(path,object) {
    path =Object.prototype.toString.call(path)==="[object Array]"?path: path.split(".");
    var len = path.length;
    if(!len){
        return void  0;
    }
    var obj = object;
    var index = -1;

    while(++index < len){
        if(Object(obj)!==obj){
            return void 0;
        }
        obj = obj[path[index]]
    }
    return  obj;
}

module.export =  {
    get:get
}