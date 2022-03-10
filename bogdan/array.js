const myArray = [1, 2, 4, 5, 6, 7, 8]
console.log(myArray)

const myArray2 = new Array(1, 2, 3, 4, 5, 5, 6, 7)
console.log(myArray2)

myArray2.forEach(function (el) {
    console.log(el * 2)
})

myArray.forEach(i => console.log(i * 3))


const newArray = myArray.map(el => el * 3)
console.log(newArray)


function DNAtoRNA(dna) {
    return dna.split("").map(function (el) { if (el == "T") { return el = "U" } return el }).join("")
}