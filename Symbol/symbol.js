"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let s1 = Symbol();
let s2 = Symbol("Ankit");
console.log(s1);
console.log(s2);
console.log(s1 === s2);
let data = {
    [s1]: "Ankit kumar",
    name: 'Santoshi'
};
console.log("Access from key--" + data[s1]);
console.log(data.name);
class Demo {
    [s1]() {
        return "call sysmbol with Dynamic function";
    }
}
let obj = new Demo();
console.log(obj[s1]());
