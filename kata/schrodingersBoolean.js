// Task from https://www.codewars.com/kata/schrodingers-boolean/train/javascript
//
// Can a value be both true and false?
//
// Define omniBool so that it returns true for the following:
//
// omniBool == true && omniBool == false

let last = false;

const omniBool = {
    [Symbol.toPrimitive]() {
        last = !last;
        return last;
    },
};

console.log('1', omniBool == true);
console.log('2', omniBool == false);
