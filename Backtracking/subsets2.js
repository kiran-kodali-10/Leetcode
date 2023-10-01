/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums = nums.sort((a, b) => a - b);

    return helper(nums);
};

var helper = (nums, level = 0, result = [], subset = []) => {
    subset.push(result.slice())
    for (let i = level; i < nums.length; i++) {
        const isDuplicate = (level < i) && (nums[i - 1] === nums[i])
        if(isDuplicate) continue;
        backtrack(nums, i, result, subset)
    }
    return subset;
}


var backtrack = (nums, i, result, subset) => {
    result.push(nums[i])
    helper(nums, i + 1, result, subset);
    result.pop();
}