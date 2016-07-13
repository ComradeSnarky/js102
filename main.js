// The forEach method on an array executed a callback function for each element in the array.


function outputFruit(element, index, array) {
  console.log('array[' + index + '] = ' + element);
}

var fruits = ["apple", "banana", "cherry"];
fruits.forEach(outputFruit);
// The above is the same as this for loop:

for( var i = 0; i < fruits.length; i++ ) {
  console.log('fruits[' + i + ']  = ' + fruits[i]);
}
// The map() method creates a new array with the results of calling a provided function on every element in this array.

function reverseIt(element, index, array) {
  return element.split("").reverse().join("");
}

var fruits = ["apple", "banana", "cherry"];
var backwardFruits = fruits.map(reverseIt); 
console.log(backwardFruits); // ["elppa", "ananab", "yrrehc"]
// The above is the same as this for loop:

var backwardFruits = [];
for( var i = 0; i < fruits.length; i++ ) {
  backwardFruits.push(fruits[i].split("").reverse().join(""));
}
console.log(backwardFruits); // ["elppa", "ananab", "yrrehc"]
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

function filterIt(element, index, array) {
  if (element.length === 5) {
    return element;
  }
}

var fruits = ["apple", "banana", "cherry"];
var filteredFruits = fruits.filter(filterIt);
console.log(filteredFruits); // ["apple"]
// The above is the same as this for loop:

var filteredFruits = [];
for( var i = 0; i < fruits.length; i++ ) {
  if (fruits[i].length === 5) {
    filteredFruits.push(fruits[i]);
  }
}
console.log(filteredFruits); // // ["apple"]
// The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

var sum = [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
  console.log("curent index: " + index);
  return previousValue + currentValue;
});
console.log(sum);
// The above is the same as this for loop:

var sum = 0;
var numbers = [0, 1, 2, 3, 4];
for( var i = 0; i < numbers.length; i++ ) {
  sum = sum + numbers[i];
}
console.log(sum);