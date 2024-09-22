// sqrt(x), x selalu genap

// const squareRoot = (x) => 
function findSquareRoot(input) {
    if (input < 0) {
        return "Tidak bisa input bilangan negatif"
    }

    if (input % 2 !== 0) { // input tidak habis dibagi 0
        return "Tidak bisa input bilangan ganjil"
    }

    return Math.sqrt(input)
}
const x = 4
const result = findSquareRoot(x)
console.log(result)