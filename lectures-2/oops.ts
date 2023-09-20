export { }

class Base {
    name = "Santoshi"
    age: number;
    constructor(age: number) {
        this.age = age
        console.log("constructor default called when create object")
    }
    getName(): void {
        console.log(this.name)
    }
    getAge(): number{
        return this.age
    }
    

}

// let obj = new Base(25)
// obj.getName()
// console.log(obj.getAge())


//inheritance ----------

class child extends Base{
    
    callName():string {
        return this.name
    }
    callAge():number {
        return this.age
    }
}

let obj1 = new child(0)
console.log("child class data name->" + obj1.callName())
console.log("child class data Age->"+obj1.callAge())