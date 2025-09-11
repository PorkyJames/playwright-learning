// Declarative

function HelloOne() {
    console.log("Hello One!")
}

HelloOne()

//Anonymous

let helloTwo = function () {
    console.log("hello two")
}
helloTwo();

// ES6 Arrow

let helloThree = () => {
    console.log("Hello Three")
}

helloThree()

// FUnction with ARguments
function printName(name) {
    console.log(name)
}

printName("James")

function multiplyByTwo(number) {
    let result = number * 2
    return result
}

let myResult = multiplyByTwo(5)
console.log(myResult)

import { printAge } from "../helpers/printHelper.js"
import * as helper from "../helpers/printHelper.js"

helper.printAge(10)
