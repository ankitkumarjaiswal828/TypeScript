"use strict";
/// <reference path='./secondNS.ts'/>
var storeRoom;
(function (storeRoom) {
    class store extends storeRoom.Parent {
        getName() {
            return this.name;
        }
    }
    storeRoom.store = store;
})(storeRoom || (storeRoom = {}));
let obj1 = new storeRoom.store();
obj1.setName("Ankit");
console.log(obj1.getName());
