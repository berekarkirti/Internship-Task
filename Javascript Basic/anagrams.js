// Write a function that checks if two strings are anagrams (contain the same characters in the same frequency).

function isAnagram(str1, str2) 
{
  if (str1.length !== str2.length) 
  {
    return false; 
  }

  const Count = {};

  for (let i = 0; i < str1.length; i++) 
  {
    const letter = str1[i];
    Count[letter] = (Count[letter] || 0) + 1;
  }
  
  for (let i = 0; i < str2.length; i++) 
  {
    const letter = str2[i];
    
    if (!Count[letter]) 
    {
      return false; 
    }
    Count[letter]--;
  }

  return true; 
}

let str1 = "listen";
let str2 = "silent";

console.log(isAnagram(str1, str2));
