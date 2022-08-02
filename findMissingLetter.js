//Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

//CodeWars tests keep failing but I'm pretty sure it should work

function findMissingLetter(array)
{
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let indexFirst = alphabet.indexOf(array.join('').toUpperCase()[0])
    let isUpper = array => array.join('').toUpperCase() == array.join('') //not necessary but I wanted to experiment a bit 
    let difference = alphabet.toLowerCase().split('').slice(indexFirst, indexFirst + array.length).filter(x => array.join('').toLowerCase().split('').indexOf(x) === -1)
    if (array.length == 1) {
        return array[0]
    }
    return difference.join('')
}

array = ['p']
console.log(findMissingLetter(array))

