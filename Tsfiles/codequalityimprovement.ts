 /* Enable error reporting when local variables aren't read. */
function apple() {
    let item = 10;
    return true
}

console.log(apple())


/* Raise an error when a function parameter isn't read. */
function nouseparameter(data:string) {
    return false
}

console.log(nouseparameter("ankit"))


 /* Enable error reporting for codepaths that do not explicitly return in a function. */
function nouseReturn(data: string |number) {
    
    let item = 10
    
    if (data === 20) {
        return true
    }
    else {
        console.log(false);
        
    }

}

console.log(nouseReturn("dasas"))


/* Enable error reporting for fallthrough cases in switch statements. */
 
function nouseBreak(data: string |number) {
    
    switch (data) {
        case 'fruits':
            console.log("fruites")    

        case 'color':
            console.log('color')
    }

}

console.log(nouseBreak("dasas"))

// "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
// "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
// "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
// "noFallthroughCasesInSwitch": true,