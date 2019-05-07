!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.object2=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


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
},{}]},{},[1])(1)
});