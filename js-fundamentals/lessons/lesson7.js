// Loops

for (let i = 0; i < 5; i++) {
    console.log("Hello World" + i)
}

let cars = ["Volvo", "Toyota", "Tesla"]

// for of
for (let car of cars) {
    console.log(car)
    if(car === "Toyota") {
        break
    }
}

// ES6 Syntax for Each Loop

cars.forEach(car => {
    console.log(car)
})
