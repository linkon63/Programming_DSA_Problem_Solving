// 1523. Count Odd Numbers in an Interval Range
// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).



// Example 1:

// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].
// Example 2:

// Input: low = 8, high = 10
// Output: 1
// Explanation: The odd numbers between 8 and 10 are [9].


// Constraints:

// 0 <= low <= high <= 10^9
// https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/

var countOdds = function (low, high) {
    let value = 0
    for (let i = low; i <= high; i++) {
        if ((i % 2 !== 0)) {
            value += 1
        }
    }
    return value
};

countOdds(8, 10)
