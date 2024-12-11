// Run node and path to run the file to test if it is working
// HAPPY CODING FROM REZI
console.log("BEST DEVS ARE IN LINEDEV");

// ###########
// # Closure #
// ###########

// Challenge 1
const createFunction = () => {};

// UNCOMMENT THESE TO TEST YOUR WORK!
// const function1 = createFunction();
// function1();

// Challenge 2
const createFunctionPrinter = (input) => {};

// UNCOMMENT THESE TO TEST YOUR WORK!
// const printSample = createFunctionPrinter('sample');
// printSample();
// const printHello = createFunctionPrinter('hello');
// printHello();

// Challenge 3
const outer = () => {
  let counter = 0; // this variable is outside incrementCounter's scope
  const incrementCounter = () => {
    counter++;
    console.log("counter", counter);
  };
  return incrementCounter;
};

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();

// Challenge 4
const addByX = (x) => {};

const addByTwo = addByX(2);

// now call addByTwo with an input of 1

// now call addByTwo with an input of 2

// Challenge 5
const once = (func) => {};

const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(onceFunc(4));  //should log 6
// console.log(onceFunc(10));  //should log 6
// console.log(onceFunc(9001));  //should log 6

// Challenge 6
const after = (count, func) => {};

const called = () => console.log("hello");
const afterCalled = after(3, called);

// afterCalled(); // -> nothing is printed
// afterCalled(); // -> nothing is printed
// afterCalled(); // -> 'hello' is printed

// Challenge 7
const delay = (func, wait) => {};

// Challenge 8
const russianRoulette = (num) => {};

// /*** Uncomment these to check your work! ***/
// const play = russianRoulette(3);
// console.log(play()); // should log: 'click'
// console.log(play()); // should log: 'click'
// console.log(play()); // should log: 'bang'
// console.log(play()); // should log: 'reload to play again'
// console.log(play()); // should log: 'reload to play again'

// Challenge 9
const average = () => {};

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // should log: 0
// console.log(avgSoFar(4)); // should log: 4
// console.log(avgSoFar(8)); // should log: 6
// console.log(avgSoFar()); // should log: 6
// console.log(avgSoFar(12)); // should log: 8
// console.log(avgSoFar()); // should log: 8

// Challenge 10
const makeFuncTester = (arrOfTests) => {};

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = str => str.toUpperCase();
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // should log: false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // should log: true

// Challenge 11
const makeHistory = (limit) => {};

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // should log: 'jump done'
// console.log(myActions('undo')); // should log: 'jump undone'
// console.log(myActions('walk')); // should log: 'walk done'
// console.log(myActions('code')); // should log: 'code done'
// console.log(myActions('pose')); // should log: 'pose done'
// console.log(myActions('undo')); // should log: 'pose undone'
// console.log(myActions('undo')); // should log: 'code undone'
// console.log(myActions('undo')); // should log: 'nothing to undo'

// Challenge 12
const blackjack = (array) => {};

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
// const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // should log: 9
// console.log(i_like_to_live_dangerously()); // should log: 11
// console.log(i_like_to_live_dangerously()); // should log: 17
// console.log(i_like_to_live_dangerously()); // should log: 18
// console.log(i_like_to_live_dangerously()); // should log: 'bust'
// console.log(i_like_to_live_dangerously()); // should log: 'you are done!'
// console.log(i_like_to_live_dangerously()); // should log: 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // should log: 4
// console.log(i_TOO_like_to_live_dangerously()); // should log: 15
// console.log(i_TOO_like_to_live_dangerously()); // should log: 19
// console.log(i_TOO_like_to_live_dangerously()); // should log: 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // should log: 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // should log: 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 10
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 13
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 'you are done!
