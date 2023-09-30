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