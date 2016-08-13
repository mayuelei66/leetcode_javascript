'use strict';
/*
*Given an array of integers, return indices of the two numbers such that they add up to a specific target.
* You may assume that each input would have exactly one solution.
* */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    if (!Array.isArray(nums) || nums.length < 2) return new Error('arguments error!');
    for (var i = 0; i <= nums.length - 2; i++){
        for(var j = i + 1; j <= nums.length -1; j++){
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
    return [-1, -1];
};