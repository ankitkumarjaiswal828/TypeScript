function users<T>(data:T):T {
    return data
}

console.log(users(30))
console.log(users("Ankit"))
console.log(users([1,2,3,"ankit","kumar"]))
console.log(users({name:'ankit',age:30}))