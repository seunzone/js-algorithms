// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(str) {
    const arr = str.split('');
    arr.reverse();
    const final = arr.join('');
    console.log(final);
    return final;
}

module.exports = reverseInt;
