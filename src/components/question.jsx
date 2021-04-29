import {BoolSolve, Solver} from "./Solver";

const array = [];
let count = 0;
for (let i = 0; i < 4; i++){
    let row = [];
    for (let j = 0; j < 4; j++) {
        if (i === 0 && j === 0 || i === 3 && j === 3) {
            row.push(1)
        } else {
            let random = Math.floor(Math.round(Math.random()));
            if (random === 0){
                count++;
            }
            row.push((count<=5)? random: 1)
        }
    }
    array.push(row)
}

console.log("ARRAY")
console.log(array)

export const question = array

export const answer = Solver(question)

export const Found = BoolSolve(question)