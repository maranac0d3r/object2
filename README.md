# object2 - Inspired from Selectn
Get from and put to an object, easily.

```shell
npm i object2 --save
```
or

```html
<srcipt src="https://unpkg.com/object2/object2.js"></script>
```

###### npm stats

[![npm](https://img.shields.io/npm/v/object2.svg)](https://www.npmjs.org/package/object2) [![NPM downloads](https://img.shields.io/npm/dm/object2.svg)](https://www.npmjs.org/package/object2) 


## Overview

###### allows you to refactor this:

    thor && thor.weapon && thor.weapon.stormbreaker 

###### into:

    object2.get('weapon.stormbreaker', thor)


###### allows you to refactor this:

    if(!thor.info ) {
    thor.info={}
    }
    
    if(!thor.info.name){
    thor.info.name={}
    }
    thor.info.name.actorname = "Chris Hemsworth"

###### into:

    object2.put("thor.info.name.actorname",avengers,"Chris Hemsworth")
      
## Usage example(s)
#### get

```js
var object2 = require('object2')
var avengers={
    thor:{
        info:{
            name:{
                castname:"Thor",
                actorname:"Chris Hemsworth",
                
            }
        },
        weapon:{
            stormbreaker:{
                activate:function(status){
                    console.log("Yeah!! its "+(status?"activated":"deactivated"));
                }

            }
        }
    }
}


object2.get("thor.info.name.actorname",avengers);
=>Chris Hemsworth

object2.get(["thor","info","name","actorname"],avengers);
=>Chris Hemsworth

object2.get("thor.weapon.stormbreaker.activate",avengers)(true);
=>"Yeah!! its activated"

object2.get("ironman.info.name.actoname",avengers);
=>undefined

```

#### put

```js
var object2 = require('object2')
var avengers = {
    ironman:{
        info:{
            name:"Tony Stark"
        }
    }
}

** Note: This will change the original object **

object.put("ironman.info.name.actorname",avengers,"Robert Downey")
=> {
ironman:{
        info:{
            name:{
                actorname:"Robert Downey"
            }
        }
    }
}

object.put("ironman.info.name.actorname",avengers,function(val){ return val+" Jr"})
=> {
ironman:{
        info:{
            name:{
                actorname:"Robert Downey Jr"
            }
        }
    }
}

object.put(["ironman","info","name","castname"],avengers,"Tony Stark")
=> {
ironman:{
        info:{
            name:{
                actorname:"Robert Downey Jr",
                castname:"Tony Stark"
            }
        }
    }
}

/*
console.log(avengers);
=> {
ironman:{
        info:{
            name:{
                actorname:"Robert Downey Jr",
                castname:"Tony Stark"
            }
        }
    }
}
*/
```


## Licenses
[![LICENSE](http://img.shields.io/npm/l/object2.svg)](license)
