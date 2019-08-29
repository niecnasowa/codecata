// Task from https://www.codewars.com/kata/57fb04649610ce369a0006b8
//
// Description:
// Remove the minimum number of exclamation marks from the start/end of each word in the sentence to make their amount equal on both sides.
//
// Notes:
// Words are separated with spaces
// Each word will include at least 1 letter
// There will be no exclamation marks in the middle of a word
// Examples
// remove("Hi!") === "Hi"
// remove("!Hi! Hi!") === "!Hi! Hi"
// remove("!!Hi! !Hi!!") === "!Hi! !Hi!"
// remove("!!!!Hi!! !!!!Hi !Hi!!!") === "!!Hi!! Hi !Hi!"

const remove = (string) => string.split(" ").map(
    (word) => {
        const splitExclamation = word.split("!");
        const wordPosition = splitExclamation.findIndex((item) => item !== "");
        const mainWord = splitExclamation[wordPosition];

        const add = Array(Math.min(wordPosition, splitExclamation.length - wordPosition - 1)).fill('!').join('');

        return add + mainWord + add;
    }
).join(' ');

console.log(remove("Hi!") === "Hi");
console.log(remove("!Hi! Hi!") === "!Hi! Hi");
console.log(remove("!!Hi! !Hi!!") === "!Hi! !Hi!");
console.log(remove("!!!!Hi!! !!!!Hi !Hi!!!") === "!!Hi!! Hi !Hi!");
