# object2 - Inspired from Selectn
Get,Put,Delete from an object easily.

```shell
npm i object2 --save
```

###### npm stats

[![npm](https://img.shields.io/npm/v/object2.svg)](https://www.npmjs.org/package/object2) [![NPM downloads](https://img.shields.io/npm/dm/object2.svg)](https://www.npmjs.org/package/object2) 


## Overview

###### Get-allows you to refactor this:

    thor && thor.weapon && thor.weapon.stormbreaker 

###### into:

    object2.get('weapon.stormbreaker', thor)


###### Put-allows you to refactor this:

    if(!thor.info ) {
    thor.info={}
    }
    
    if(!thor.info.name){
    thor.info.name={}
    }
    thor.info.name.actorname = "Chris Hemsworth"

###### into:

    object2.put("thor.info.name.actorname",avengers,"Chris Hemsworth")
 
 
###### Delete-allows you to refactor this:

    if(thor && thor.weapon && thor.weapon.stormbreaker){
        delete thor.weapon.stormbreaker
    }

###### into:

    object2.delete('weapon.stormbreaker', thor)
      
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
#### delete
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

/*
If the path exists in the given object,then it will delete the key,which is the path, from the object.
If the path doesn't exists,then it won't do any thing.
*/

** Note: This will change the original object **

object2.delete("thor.info.name.actorname",avengers);

object2.delete(["thor","weapon"],avengers);

object2.delete("ironman.info.name.actorname",avengers); //this won't do anything because of the path doesn't exist in the given object.

/*
console.log(avengers);
=> {
thor:{
        info:{
            name:{
                castname:"Thor"
            }
        }
    }
}
*/

```


## Licenses
[![LICENSE](http://img.shields.io/npm/l/object2.svg)](license)
