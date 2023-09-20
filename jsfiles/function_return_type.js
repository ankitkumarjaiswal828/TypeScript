"use strict";
function num() {
    return 10;
}
console.log(num());
function str(name) {
    return name;
}
console.log(str("Ankit"));
function boo(bool) {
    return bool;
}
console.log(boo(true));
function emptyValue() {
    console.log("Void function not return any value so ts is smart if we not apply void so it auto assume its return type");
}
emptyValue();
