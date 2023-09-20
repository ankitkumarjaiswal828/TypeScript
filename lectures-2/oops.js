"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Base {
    constructor(age) {
        this.name = "Santoshi";
        this.age = age;
        console.log("constructor default called when create object");
    }
    getName() {
        console.log(this.name);
    }
    getAge() {
        return this.age;
    }
}
// let obj = new Base(25)
// obj.getName()
// console.log(obj.getAge())
//inheritance ----------
class child extends Base {
    callName() {
        return this.name;
    }
    callAge() {
        return this.age;
    }
}
let obj1 = new child(0);
console.log("child class data name->" + obj1.callName());
console.log("child class data Age->" + obj1.callAge());
