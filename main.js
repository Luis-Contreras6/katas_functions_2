//KATAS 01:ADD

function sum(x, y) {
    return x + y
}
console.log('katas 1:', sum(5, 6))

//KATAS 02:MULTIPLY

function multiply(x, y) {
    let total = 0
    for (i = 0; i < y; i++) {
        total = sum(total, x)
    }
    return total
}
console.log('katas 2:', multiply(6, 8))

//KATAS 03: POWER/EXPONENITIATION

function power(x, n) {
    let total = 1;
    for (i = 0; i < n; i++) {
        let z = multiply(x, 1);
        total = multiply(z, total)
    }
    return total;
}
console.log('katas 3:', power(6, 9))

//KATAS 04: FACTORIAL

function factorial(x) {
    let total = 1
    let value = x
    for (let i = 0; i < x; i += 1) {
        let z = multiply(value, 1)
        value = sum(value, -1)
        total = multiply(z, total)
    }
    return total
}
console.log('katas 4:', factorial(6))