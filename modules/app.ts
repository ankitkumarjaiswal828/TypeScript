//modeule in ts
//what is modeule
//make 2 file and make module
//use them in single file

import Slogin from './student'
import Tlogin from './teacher'

let teacher = new Tlogin()
console.log(teacher.data)

let student = new Slogin()
console.log(student.data)