//Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

function findMissingLetter(array)
{
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let difference = alphabet.toLowerCase().split('').slice(alphabet.indexOf(array.join('').toUpperCase()[0]), array.length + 1).filter(x => array.join('').toLowerCase().split('').indexOf(x) === -1)
    return difference
}

array = ['e']
console.log(findMissingLetter(array))

