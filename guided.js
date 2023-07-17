// const carBrands = ['honda',"toyota", "ford", "subaru"];

// console.log(carBrands);

// // "Hyundai", "toyota" , "Mercedes" , "Ford", "Audi"

// carBrands.shift("Hyundai");
// console.log(carBrands);

// carBrands.pop();
// carBrands.push("Audi");
// console.log(carBrands);

// carBrands.splice(2, 0, "Mercedes")
// console.log(carBrands)

// Practise two - Loops
// "There once was a donkey named Eeyore"

// Creat variable with sentence
// Create counter variable
// Loop over sentence and count the number of E's

const sentence = "There once was a donkey named Eeyore"
let counter = 0

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === "e" || sentence[i] === "E") {
        counter++
    }
}

console.log(counter);