// // =================================ODD & EVEN NUMBERS=================================
// function Even(num: number): boolean {
//     return num % 2 === 0;
// }

// function Odd(num: number): boolean {
//     return num % 2 !== 0;
// }

// // Test the functions
// const numberToCheck = 787;

// if (Even(numberToCheck)) {
//     console.log(`${numberToCheck} is even Number.`);
// } else {
//     console.log(`${numberToCheck} is odd Number.`);
// }
function oddeven(nmber: number){
    if (nmber % 2 == 0){
        return "Even"
    }else {
        return "Odd"
    }
}
let nmber = oddeven(45)
console.log("The Number is", nmber)