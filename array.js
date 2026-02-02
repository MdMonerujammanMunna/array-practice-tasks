// js-array-tasks
// 1. Declare an array
//  1.Declare an array with 5 elements containing fruits
//  4.console log the final array
// ****************************************************************answer******************************************
let fruits = ["mango", "banana", "lichi", "orange", "guava"]
console.log(fruits[3]) //  2.console log the 3rd index element
let jambura = fruits[2] = "jambura"; //  3.change the value of the 2nd index element to jambura
console.log(fruits)

// ****************************************************************answer******************************************

// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// display the final array as output

// ****************************************************************answer******************************************
let tourist = ["Coxs-bazar", "sazak", "Bandorbon"]

tourist.push("Tatulia") // Add a new tourist destination to your tourist array

tourist.unshift("Park", "Zoo")// Add two more to your array
console.log(tourist)

tourist.pop() // Remove the last tourist destination you have added

console.log(tourist)

// ****************************************************************answer******************************************
// 3. Checking Array Membership with ‘includes’
// Instructions:
// Create an array of books containing different book.
// Use the includes method to check if the array contains a javascript book.
// Print a message to the console indicating whether the element is present in the array or not.

// ****************************************************************answer******************************************

let book = ["python", "html", "css", "javascript", "React", "node", "java", "C++", "C+"]

let con = book.includes("javascript")
if (con == true) {
    console.log("the element is present in the array")
}
else {
    console.log("the element is not present in the array")
}

// ****************************************************************answer******************************************
// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.
// ****************************************************************answer******************************************
let value = [1, 2, 3, "Name"]
let ar = Array.isArray(value)
if (ar === true) {
    console.log("This is an array")
}
else {
    console.log("No this is Not an array")
}


// ****************************************************************answer******************************************
// 5. Combining Arrays
// Instructions:
// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().
let num1 = [1, 2, 3, 4, 5, 6]
let num2 = [7, 8, 9, 10, 11]
console.log("num1 main array " + num1)
console.log("num2 main array " + num2)
let num = num1.concat(num2)
console.log("Combine array " + num)