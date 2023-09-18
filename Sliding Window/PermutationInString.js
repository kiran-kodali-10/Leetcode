/*
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 

Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
*/

/*
Solution:   Using s1 length, check each part of s2 if they are
            anagrams or not.
*/
var checkInclusion = function(s1, s2){
    // for(let i=0;i<s2.length;i++){
    //     if(checkAnagrams(s1, s2.substring(i, i+s1.length))){
    //         return true;
    //     }
    // }
    // return false;

    

}

var checkAnagrams = function(s1, s2){
    let sortedS1 = s1.split('').sort().join('');
    let sortedS2 = s2.split('').sort().join('');
    return sortedS1 === sortedS2;
}

let s1 = "a";
let s2 = "ab";

console.log(checkInclusion(s1, s2));