// Task from https://www.codewars.com/kata/range-extraction/train/javascript
//
// A format for expressing an ordered list of integers is to use a comma separated list of either
//
// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
//
// Example:
//
// solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"

const solution = (numbers) => numbers.reduce(
        (prev, cur, index, arr) => {
            if(index === 0) {
                prev.push([cur]);
                return prev;
            }

            const last = prev[prev.length-1];
            const lastNumber = Array.isArray(last) && last[last.length-1];
            const nextNumber = arr[index + 1];

            if(lastNumber + 1 === cur) {
                if(cur + 1 === nextNumber) {
                    last.push(cur);
                    return prev;
                }

                if(last.length > 1) {
                    last.push(cur);
                    return prev;
                }
            }

            prev.push([cur]);

            return prev;
        },
        []
    ).reduce(
        (prev, cur) => {
            if(cur.length === 1) {
                prev.push(cur[0]+'');
                return prev;
            }

            const first = cur[0];
            const last = cur[cur.length-1];

            prev.push(first + '-' + last);
            return prev;
        },
        []
    );

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));