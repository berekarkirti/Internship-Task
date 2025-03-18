function palindrome(str) {
    let rev = "";
  
    for (let i = str.length - 1; i >= 0; i--) {
      rev = rev + str[i];
    }
  
    if (rev === str) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  
  let str = "kuk";
  palindrome(str);
  palindrome("roror");
  palindrome("ra ror");
  