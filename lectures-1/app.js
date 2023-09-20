"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let obj = {
    name: 'Ankit',
    age: 24,
    address: 'USA'
};
obj.name = "Ankit kumar";
console.log(obj);
//without interface we are modified
let obj2 = {
    nam: 'Ankit',
    ag: 24,
    addres: 'USA'
};
obj2.nam = 24;
obj2.ag = "Ankit kumar";
obj2.addres = 519;
console.log(obj2);
//Union data types store multiple data types in one variable
let union_datatypes = 'Snkit kumar';
console.log(union_datatypes);
union_datatypes = 100000;
console.log(union_datatypes);
union_datatypes = true;
console.log(union_datatypes);
let users = {
    name: "Ankit kumar",
    age: 300,
    getName: function () {
        return this.name;
    }
};
console.log(users);
console.log(users.getName());
