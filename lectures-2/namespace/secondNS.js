"use strict";
var storeRoom;
(function (storeRoom) {
    class Parent {
        setName(name) {
            return this.name = name;
        }
    }
    storeRoom.Parent = Parent;
})(storeRoom || (storeRoom = {}));
