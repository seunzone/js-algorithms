// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverseInt(str) {
    const arr = str.split('');
    arr.reverse();
    const final = arr.join('');
    console.log(final);
    return final;
}

module.exports = reverseInt;
