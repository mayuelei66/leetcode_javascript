'use strict';

/*
* Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
* Output: 7 -> 0 -> 8
* */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var sumNode = new ListNode(-1),
    result = sumNode,
    ext = 0,
    sumVal = 0,
    val = 0;
    while (l1 || l2 || ext !== 0 ){
        var v1Val = l1 ? l1.val : 0;
        var v2Val = l2 ? l2.val : 0;
        sumVal = v1Val + v2Val + ext;
        val = sumVal >= 10 ? sumVal%10 : sumVal;
        ext = sumVal >= 10 ? 1 : 0;
        sumNode.next = new ListNode(val);
        sumNode = sumNode.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return result.next;
};
