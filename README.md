# object2
Get from and put to an object easily.


```shell
npm i object2 --save
```

or

```html
<script src="https://unpkg.com/object2@1.0.1/object2.js"></script>
```


###### npm stats

[![npm](https://img.shields.io/npm/v/object2.svg)](https://www.npmjs.org/package/object2) [![NPM downloads](https://img.shields.io/npm/dm/object2.svg)](https://www.npmjs.org/package/object2) 


## Overview

###### allows you to refactor this:

    thor && thor.weapon && thor.weapon.stormbreaker 

###### into:

    object2.get('weapon.stormbreaker', thor)


## Features

  - When the value at the given path is a function, it wont invoke (Seperated from selectn).
  - Mitigate boilerplate guards like `if (obj && obj.a && obj.a.b && obj.a.b.c)`.
  - Mitigate **TypeError** `Cannot read property '...' of undefined`.
  - Dashed key access: `'stats.temperature-today'`.
  - Compatible with [modern and legacy browsers][browsers], Node/CommonJS, and AMD.

## Need to do
  - Multiple levels of array nesting: `'group[0].section.a.seat[3]'`.
  
## Usage example(s)

#### property accessor as predicate
> Avoid annoying __Cannot read property '...' of undefined__ `TypeError` without writing boilerplate anonymous functions or guards.

```js
var object2 = require('@maranac0d3r/objectutils')
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
=>null
```

## Licenses
[![LICENSE](http://img.shields.io/npm/l/object2.svg)](license)
