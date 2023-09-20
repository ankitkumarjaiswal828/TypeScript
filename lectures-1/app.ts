export {}
//Basic programs
// let s = 'hello world'
// console.log(s)


//class declaration
// class App{
//     test(){
//         console.log('ffdfdf')
//         console.log("chdgsvgegfre")
//     }
// }
// let obj = new App()
// obj.test()


//DATA TYPES
// let a: number = 10;
// console.log(a)

// const str: String = "Santoshi"
// console.log(typeof str)

// const boo: boolean = true
// console.log(typeof boo)

// const big= BigInt(123344343434343)
// console.log(typeof(big))

// let sym = Symbol(222)
// console.log(typeof sym)

// const json = JSON.parse("232");
// console.log(typeof json);

// const json = JSON.toString("sdds");
// console.log(typeof json);


//ARRAYS
// let arr:any = ["adsa", "dsds", "dsd", "sdsd"]
//let arr:string[] = []
//let arr:number[] = []
//let arr:boolean[] = []
// arr.push("Ankit")
// arr.push(12)
// arr.push(true)
// console.log(arr)


interface userdatatypes{
    name: string,
    age: number,
    address:any
}

let obj :userdatatypes ={
    name: 'Ankit',
    age: 24,
    address:'USA'
}
obj.name = "Ankit kumar"
console.log(obj)


//without interface we are modified
let obj2 :any ={
    nam: 'Ankit',
    ag: 24,
    addres:'USA'
}
obj2.nam = 24
obj2.ag = "Ankit kumar"
obj2.addres = 519
console.log(obj2)

//Union data types store multiple data types in one variable

let union_datatypes: string | number | boolean = 'Snkit kumar'
console.log(union_datatypes)

union_datatypes = 100000;
console.log(union_datatypes)

union_datatypes = true
console.log(union_datatypes)


//interface in typesscript

interface usertypes{
    name: string,
    age: number,
    getName:()=>string
}

let users: userdatatypes = {
    name: "Ankit kumar",
    age: 300,
    getName:function () {
        return this.name
    }
}

console.log(users)
console.log(users.getName())

