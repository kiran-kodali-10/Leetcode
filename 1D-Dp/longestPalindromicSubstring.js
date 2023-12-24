/**
 * Longest Palindromic Substring
 * Time complexity: O(n^2)
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        for (let [left, right] of [[i, i], [i, i + 1]]) {
            while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
                if (right - left + 1 > result.length)
                    result = s.substring(left, right + 1)
                left--;
                right++
            }
        }
    }
    return result;
};