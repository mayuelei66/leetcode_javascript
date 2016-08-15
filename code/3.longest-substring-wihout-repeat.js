/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var sLength = s.length;
    if (!sLength) return 0;
    
    var max = 1;
    for (var i = 0; i < sLength; i++){
        var j = i;

        //use Set to remove duplicate value
        var uniq = new Set();

        //check the Set size
        while (uniq.add(s[j]).size === (j - i + 1)){
            j++;
            if (!s[i]) break;
        }
        var sub = j - i;
        max = max > sub ? max : sub;
    }
    return max;
};

