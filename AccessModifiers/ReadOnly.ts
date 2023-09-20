class Read {
    readonly name = "ReadOnly --Ankit kumat";
   
}

const ob = new Read();
console.log(ob.name)
//ob.name = "ffdfd"  //Cannot assign to 'name' because it is a read-only property.ts(2540)


class Use{
   private name = "";
    setName(name:string) {
        this.name = name
        this.displayLength()
    }

    display() {
        console.log(this.name)
    }

    private displayLength() {
        console.log("private class --"+this.name.length)
    }
}

const object = new Use();
object.setName("Santoshi in private class ");
//obj1.name = "sdsd"  //Property 'name' is private and only accessible within class 'User1'.ts(2341)
object.display()
//obj1.displayLength()  ////Property 'name' is private and only accessible within class 'User1'.ts(2341)
