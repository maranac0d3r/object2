!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.object2=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])(1)
});