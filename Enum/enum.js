"use strict";
var Days;
(function (Days) {
    Days["mon"] = "Monday";
    //tus, web, thur, fri, sat, sun
})(Days || (Days = {}));
//console.log(Days.fri)
console.log(Days.mon === 'Monday');
console.log(Days.mon);
function show(day) {
    return day;
}
console.log(show(Days.mon));
