/// <reference path='./secondNS.ts'/>

namespace storeRoom{

    export class store extends Parent {
        getName():string {
            return this.name
        }
    }

}

let obj1 = new storeRoom.store()
obj1.setName("Ankit")
console.log(obj1.getName())