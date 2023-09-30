/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {

    const res = [];

    // Base case
    if (nums.length === 1) {
        return [nums.slice()]; // Use slice() for a deep copy
    }

    for (let i = 0; i < nums.length; i++) {
        const n = nums.splice(i, 1)[0]; // Remove the element at index i
        const perms = permute(nums);

        for (const perm of perms) {
            perm.push(n);
        }

        res.push(...perms);
        nums.splice(i, 0, n); // Restore the element to its original position
    }

    return res;
};

// Using iteration
function permute(nums) {
    const res = [];
    const stack = [[[], nums]];

    while (stack.length > 0) {
        const [currPerm, remainingNums] = stack.pop();

        if (remainingNums.length === 0) {
            res.push(currPerm);
        } else {
            for (let i = 0; i < remainingNums.length; i++) {
                const newPerm = currPerm.concat(remainingNums[i]);
                const newRemaining = remainingNums.slice(0, i).concat(remainingNums.slice(i + 1));
                stack.push([newPerm, newRemaining]);
            }
        }
    }

    return res;
}

const input = [1, 2, 3]; // Replace with your input list
const result = permute(input);
console.log(result);
