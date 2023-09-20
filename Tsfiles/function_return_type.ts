function num(): number{
    return 10
}
console.log(num())

function str(name: string): string{
    return name
}

console.log(str("Ankit"))

function boo(bool: boolean): boolean{
    return bool
}

console.log(boo(true))

function emptyValue(): void{
    console.log("Void function not return any value so ts is smart if we not apply void so it auto assume its return type")
}
emptyValue()