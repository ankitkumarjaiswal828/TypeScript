namespace storeRoom{

    export class Parent{
        name: string;
        
        setName(name:string):string {
            return this.name=name
        }
    }

    export interface userType{
        getName():string;
    }
}