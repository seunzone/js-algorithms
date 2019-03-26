const maxChar = str => {
    const myStr = str.toLowerCase();
    const charMap = {};
    let max = 0;
    let maxChar = '';
  
    for (let char of myStr) {
      if (!charMap[char]) {
        charMap[char] = 1;
      } else {
        charMap[char]++;
      }
    }
  
    for (let char in charMap) {
      if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
    }
  
    return maxChar;
  }
  
  module.exports = maxChar;