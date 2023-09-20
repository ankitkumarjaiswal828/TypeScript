//Basic class use in contructor
// class User{
//     name: ""
//     age: 0
    
//     constructor(name:string,age:number) {
//         this.name = name
//         this.age = age
//     }

//     display() {
//         console.log(this.name+"  "+this.age)
//     }

// }

// let obj = new User("ankit", 24)
// obj.display()


//now compress the code in ts used shorthand

class User2{
    
    constructor(public name2:string,public age2:number){}

    display2() {
        console.log(this.name2+"  "+this.age2)
    }

}

let obj2 = new User2("ShortHand", 24)
obj2.display2()