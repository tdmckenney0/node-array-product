# Node.js Array Product Calculator
## Requirements

 - Node.js v6.11.4 or later.
 - NPM v.3.5.2 or later. 
## Installation

 1. Unpack the files into your desired directory.
 2. `cd` into said directory.
 3. run `npm install`
 4. run `npm test` to test the contents. 

## Solution

The solution for this problem is in four parts, described as follows. First, the function checks that the incoming parameter is: an array, has a length longer than 3, and every element is an integer. According to the rules of multiplication, the largest possible product of three operands given a set is the three largest values in the set. However, there is an exception. Two negatives can cancel each other out, thus two of the smallest negative values can result in a larger product than the 3 largest positive values. That being said, we `sort()` our array from smallest to largest. Next, we `slice()` the last three values from the end of the array to check for the largest value there. We `slice()` the array again from the beginning to find the two smallest numbers, and pop the largest number from the end of the incoming array. Finally, we `reduce()` both arrays and compare which product is larger, returning the result. 

## Problem

### Given

An array of integers as input to your function

### Problem

Find the maximum possible product of 3 integers in the array

### Example

[1, 3, 7, 9] yields the maximum product of 3 values as 189 (379)