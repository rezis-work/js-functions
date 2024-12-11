Extension Challenges
Challenge 1
Create a function functionValidator that accepts an array of functions and two different values (let's call them input and output). This function should return a new array containing _only_ the functions from the original array that, when invoked with input, return the value output. Use reduce!
Challenge 2
Create a function allClear that accepts an array of evaluator functions (each returning a boolean value), and a single value. Using reduce, return a single boolean value indicating whether the value "passes" every single one of the evaluator functions (i.e. returns true).
Challenge 3
Write a function numSelectString that accepts an array of numbers and returns a string. This function should use filter, sort, and reduce to return a string containing only the odd numbers from the array, separated by commas, in ascending order.
Challenge 4
Write a function movieSelector that accepts an array of objects containing movie information (id, title, and score). Chain together invocations of map, filter AND reduce to return an array containing only movies with a score greater than 5. The titles should be all uppercase strings.
Challenge 5
Create a function curriedAddThreeNums that adds three numbers together when run thrice in succession as follows:
curriedAddThreeNums(1)(3)(7) //should return 10
Challenge 6
Use partial application with your previously-defined curriedAddThreeNums to create a new function curriedAddTwoNumsToFive that when run twice in succession, adds two numbers to five as follows:
curriedAddTwoNumsToFive(6)(7) //should return 18
