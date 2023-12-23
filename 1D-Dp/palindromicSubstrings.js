/**
 * 647. Palindromic Substrings
 * Solved using Two pointers
 * Time complexity: O(n^2)
 * Follow up: Manacher's algorithm (has O(n) complexity )
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    /**
     * 
     * THis function calculate the number of palindromes using the two pointer
     * 
     * @param {string} str 
     * @param {number} left 
     * @param {number} right 
     * @returns {number}
     */
    const countPalindrome = (str, left, right) => {
        let palinCount = 0;
        while (left >= 0 && right < s.length && str.charAt(left) == str.charAt(right)) {
            palinCount++;
            left--;
            right++;
        }
        return palinCount;
    }
    result = 0;
    for (let i = 0; i < s.length; i++) {
        result += countPalindrome(s, i, i); // For odd length
        result += countPalindrome(s, i, i + 1); // For even length
    }
    return result;
};