function palindrome(str) {
    const myWord = str.split('').reverse().join('');
    if (myWord == str){
        return true
    } else {
        return false
    }
}
  
 module.exports = palindrome;