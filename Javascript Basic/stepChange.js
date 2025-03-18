// arr=[1,2,3,4,5]
// output=[4,5,1,2,3]

let arr = [1, 2, 3, 4, 5];
let res = [];
let step = 6;

for (let i = 0; i < arr.length; i++) {
  res.push(arr[(i + step) % arr.length]);
}
console.log(res);
