// Task from www.codewars.com/kata/valid-parentheses/
//
// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
//
// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

const validParentheses = (parentheses) => {
    const parRay = [...parentheses];
    const leftBackets = [];

    return parRay.every(
        (cur, index) => {
            if(cur === "(" && parRay.length > index + 1) {
                leftBackets.push(cur);
                return true;
            }

            if(cur === ")" && leftBackets.length > 0) {
                leftBackets.pop();
                return true;
            }

            return false;
        }
    )
};

console.log(1, validParentheses("()"));
console.log(2, validParentheses(")(()))"));
console.log(3, validParentheses("("));
console.log(4, validParentheses("(())((()())())"));
