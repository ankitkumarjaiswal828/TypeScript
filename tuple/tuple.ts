export {}
let tup: [string, string, number, number, boolean?] = ['ankit', 'kumar', 1, 2]
tup.push(true)
tup[1] = "jaiswal"
console.log(tup)


//literals
const vehicleType: 'car' | 'bike' = "bike";


//vehicleType = "dddass"  
//Type '"dddass"' is not assignable to type '"car" | "bike"'.ts(2322)

console.log(vehicleType)

function getVehicleType(vehicleType: "car" | 'bike') {
    return vehicleType +" yes"
}

console.log(getVehicleType('car'))
console.log(getVehicleType('bike'))
console.log(getVehicleType('truck')) //Argument of type '"truck"' is not assignable to parameter of type '"car" | "bike"'.ts(2345)


