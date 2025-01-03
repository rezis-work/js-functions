// Run node and path to run the file to test if it is working
// HAPPY CODING FROM REZI
// console.log("BEST DEVS ARE IN LINEDEV");

// ##########################
// # Higher-Order Functions #
// ##########################

// Challenge 1
const addTwo = (num) => {
  return num + 2;
};

// To check if you've completed this function, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
const addS = (word) => {
  return `${word}S`;
};

// Uncomment these to check your work
// console.log(addS("pizza"));
// console.log(addS("bagel"));

// Challenge 3
const map = (array, callback) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
};

// console.log(map([1, 2, 3], (num) => num * 2));

// Challenge 4
let alphabet = "";
const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    alphabet = callback(alphabet, array[i]);
  }
};

function addLetter(string, letter) {
  string = string + letter;
  return string;
}

forEach(["a", "b", "c", "d"], addLetter);
// console.log(alphabet);

// See for yourself if your forEach works!

// Challenge 5
const mapWith = (array, callback) => {
  let newArray = [];
  array.forEach((item) => {
    newArray.push(callback(item));
  });
  return newArray;
};

// console.log(mapWith([1, 2, 3], (num) => num * 2));

// Challenge 6
const reduce = (array, callback, initialValue) => {
  let value = initialValue;
  for (let i = 0; i < array.length; i++) {
    value = callback(value, array[i]);
  }
  return value;
};

function add(num1, num2) {
  return num1 + num2;
}

// console.log(reduce([1, 2, 3, 4, 5], add, 0));

// Challenge 7
const intersection = (array1, array2, array3) => {
  return array1.reduce((acc, item) => {
    if (array2.includes(item) && array3.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
};

// console.log(
//   intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
// );
// should log: [5, 15]

// Challenge 8
const union = (...arrays) => {
  return arrays.reduce((acc, array) => {
    array.forEach((item) => {
      if (!acc.includes(item)) {
        acc.push(item);
      }
    });
    return acc;
  }, []);
};

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
const objOfMatches = (array1, array2, callback) => {};

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], (str) => str.toUpperCase()));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
const multiMap = (arrVals, arrCallbacks) => {};

// console.log(multiMap(['catfood', 'glue', 'beer'], [(str) => str.toUpperCase(), (str) => str[0].toUpperCase() + str.slice(1).toLowerCase(), (str) => str + str]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
const commutative = (func1, func2, value) => {};

// /*** Uncomment these to check your work! ***/
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 12
const objFilter = (obj, callback) => {};

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 13
const rating = (arrOfFuncs, value) => {};

// /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75

// Challenge 14
const pipe = (arrOfFuncs, value) => {};

// /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'

// Challenge 15
const highestFunc = (objOfFuncs, subject) => {};

// /*** Uncomment these to check your work! ***/
// const groupOfFuncs = {};
// groupOfFuncs.double = n => n * 2;
// groupOfFuncs.addTen = n => n + 10;
// groupOfFuncs.inverse = n => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'
