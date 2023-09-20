enum Days{
    mon = 'Monday',
    //tus, web, thur, fri, sat, sun
}
//console.log(Days.fri)
console.log(Days.mon==='Monday')
console.log(Days.mon)

function show(day: Days) {
    return day
}

console.log(show(Days.mon))