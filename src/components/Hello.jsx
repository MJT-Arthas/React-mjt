import React from 'react'

class Person{
    constructor(name, age){
        this.name =name
        this.age =age
}
}
class American extends Person {

}
const p1 = new American("张三",17)
console.log(p1)