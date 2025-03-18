// Create a function that takes a number and returns the sum of its digits. Repeat the process until a single-digit number is obtained.

function sumOfDigits(num) 
{
  while (num >= 10)
  { 
    let sum = 0;
    while (num > 0) 
    {
      sum = sum + (num % 10);
      num = Math.floor(num / 10);
    }
    num = sum;
  }
  return num;
}

let num = 123456789; // 1+2+3+4+5+6+7+8+9 = 45 --> 4+5 = 9
console.log(sumOfDigits(num));

