let b
let c
let a // = getClassifierCalculationResult(input)

switch (a) {
    case 'A' :
        b = //doAdvanceCalculation(a)
        c = 0.05 * b
        console.log(c)
    case 'B' :
        b = doAdvanceCalculation(a)
        c = 12.12 * b
        console.log(c)
    case 'C' :
        b = doAdvanceCalculation(a)
        c = 3.14 * b ^ 2
        console.log(c)
    default:
        throw('Unknown')
        console.log(c)
}

