// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Erick Faloni" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let totalCookies = 0


// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function () {
    document.getElementById('qty-gb').textContent = ++gb
    document.getElementById('qty-total').textContent = ++totalCookies
    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
})

document.getElementById('minus-gb').addEventListener('click', function () {
    //Make it so the quantity of gb cookies -1 but no less than 0
    document.getElementById('qty-gb').textContent = --gb
    document.getElementById('qty-total').textContent = --totalCookies
})

document.getElementById('minus-cc').addEventListener('click', function () {
    //make is so quantity of cc cookies -1 but no less than 0
    document.getElementById('qty-cc').textContent = --cc
    document.getElementById('qty-total').textContent = --totalCookies
})

document.getElementById('add-cc').addEventListener('click', function () {
    //make is so quantity of cc cookies +1
    document.getElementById('qty-cc').textContent = ++cc
    document.getElementById('qty-total').textContent = ++totalCookies
})

document.getElementById('add-sugar').addEventListener('click', function () {
    //make is so quantity of sugar cookies +1
    document.getElementById('qty-sugar').textContent = ++sugar
    document.getElementById('qty-total').textContent = ++totalCookies
})

document.getElementById('minus-sugar').addEventListener('click', function () {
    //make is so quantity of sugar cookies -1 but no less than 0
    document.getElementById('qty-sugar').textContent = --sugar
    document.getElementById('qty-total').textContent = --totalCookies
})

