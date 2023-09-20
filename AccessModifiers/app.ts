class User{
    name = "";
    setName(name:string) {
        this.name = name
    }

    display() {
        console.log(this.name)
    }
    displayLength() {
        console.log("public class --"+this.name.length)
    }
}

const obj = new User();
obj.setName("Ankit in public class");
obj.name = "Ruchi"
obj.display()
obj.displayLength()


class User1{
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

const obj1 = new User1();
obj1.setName("Santoshi in private class ");
//obj1.name = "sdsd"  //Property 'name' is private and only accessible within class 'User1'.ts(2341)
obj1.display()
//obj1.displayLength()  ////Property 'name' is private and only accessible within class 'User1'.ts(2341)
