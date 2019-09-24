// Create the function that as argument have a number (ex 541)
// Find the biggest number, but smaller that argument made from argument digit
// example 541 => 514

// permutator is copied from stackoverflow - https://stackoverflow.com/posts/20871714/revisions
const permutator = (inputArr) => {
    let result = [];

    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m)
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next))
            }
        }
    }

    permute(inputArr)

    return result;
}

const newSmallerBiggest = (startNumber) => {
    const dividedArray = startNumber.toString().split('');
    const allCombinations = permutator(dividedArray).map((num) => parseInt(num.join(''), 10));

    return allCombinations.reduce(
        (prev, num) => (num > prev && num < startNumber) ? num : prev,
        0
    );
};

const result = newSmallerBiggest(321);

console.log('result', result);