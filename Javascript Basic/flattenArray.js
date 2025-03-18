// Write a function to flatten a deeply nested array into a single-level array.
// arr = [1, [2, 3, 4, 5, 6], 7]
// output = [1, 2, 3, 4, 5, 6, 7]

function Flatten(array) 
{
  let flatArray = array.flat(Infinity);
  console.log("Main Array:", flatArray);
}
let array = [1, [2, 3, 4, 5, 6], 7];
Flatten(array);
