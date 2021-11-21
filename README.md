# Assignment 4.1 - Unit Testing
## Learning Objective
The goal is to learn the usage of Jest (https://jestjs.io/) to run automated tests in Javascript. Furthermore, it is a 
great exercise to strengthen the use an implementation of classes.

## Task 1 - Investigating the code
Have a look at `Search.js` and `Search.spec.js`. The latter is there to run tests on our `Search.js` class, so we can 
automatically test the functionality. Have a look at the code and identify the open TODOs.

Run `npm install --dev` on your CLI to install all dependencies.
Read https://www.valentinog.com/blog/jest/ to get a feeling for Jest and try to run it both on your CLI and inside your
IDE (there should be a green "play" icon next to the tests in `Search.spec.js`).

## Task 2 - Adding tests
Is there test suite in `Search.spec.js` already complete? Did we consider all test cases to confirm that our code is 
working properly? If not, add the necessary test cases.

_Big plus:_ try to write the test cases for the method you still need to implement (like `filterByUrl`) *before* you
implement them!

## Task 3 - Implement the missing functionality
Implement the methods that are missing in `Search.js`. Make sure that they are properly tested and try to think of all
possible test scenarios.