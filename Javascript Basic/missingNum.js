// arr = [4,0,1,2]
// output = Missing Number = 3

let arr = [4, 0, 1, 2];

let n = arr.length;
let sum = (n * (n + 1)) / 2;
let main = 0;

for (let i = 0; i < arr.length; i++) {
  main = main + arr[i];
}

let missingNum = sum - main;

console.log("Missing Number = " + missingNum);
