// Given an array of numbers, find and return all duplicate elements in the array
// arr = [1, 2, 3, 4, 5, 6, 7, 5, 6, 3, 4, 8, 9, 9]
// output = [3, 4, 5, 6, 9]

function Duplicate(arr) 
{ 
  let result = [];
  
  for(let i = 0; i < arr.length; i++)
  {
    for(let j = i + 1; j < arr.length; j++)
    {
      if(arr[i] === arr[j])
      {
        result.push(arr[i]);
      }
    }
  }
  console.log(result);
}  

let  arr = [1, 2, 3, 4, 5, 6, 7, 5, 6, 3, 4, 8, 9, 9, 2];
Duplicate(arr);
