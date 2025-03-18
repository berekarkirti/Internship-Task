// Balanced Brackets:
// Write a function that checks if a given string containing brackets ({}, [], ()) is balanced.

function Balanced(str) 
{
  let bracaket = [];

  function match(open, close) 
  {
    return ((open === "(" && close === ")") || (open === "{" && close === "}") || (open === "[" && close === "]"));
  }

  for (let i = 0; i < str.length; i++) 
  {
    let char = str[i];

    if (char === "(" || char === "{" || char === "[") 
    {
      bracaket.push(char);
    } 
    else if (char === ")" || char === "}" || char === "]") 
    {
      if (bracaket.length === 0 || !match(bracaket.pop(), char))
      {
        return false;
      }
    }
  }

  return bracaket.length === 0;
}

console.log(Balanced("{[()]}")); 
console.log(Balanced("{[(])}")); 

