//! Objects

var customer = {
    firstName: "John",
    lastName: "Smith",
    cars: ["volvo", "toyota", "tesla"]
}

customer.firstName = "Mike"
customer["lastName"] = "Silver"

console.log(customer.firstName)
console.log(customer.lastName)


//! Arrays

let cars = ["volvo", "toyota", "tesla"]
cars[1] = "BMW"
console.log(cars[1])
