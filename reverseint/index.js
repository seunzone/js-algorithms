const reversedInt = (n) =>{
    const reversed = n
      .toString()
      .split('')
      .reverse()
      .join('');
  if(n < 0){
      return parseInt(reversed) * -1;
    }
    return parseInt(reversed);
}
  module.exports = reversedInt;