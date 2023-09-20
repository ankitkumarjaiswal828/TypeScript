export { }
//from 10th videos of code step by step

function call() {
    
    return 19+19
}
console.log(call())

function m(str:string): string{
    return str
}

console.log(m("Ankit"))
//console.log(m(2322))  //Argument of type 'number' is not assignable to parameter of type 'string'

function m2(num:number ,num2:number){
    return num+num2
}

//console.log(m2("Ankit"))  //app.ts:21:16 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(m2(10,30))