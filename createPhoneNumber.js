function createPhoneNumber(numbers){
    //Takes an array of numbers and converts it into phone number of given format
    numbers = (numbers.toString()).replace(/\D/g, '');
    let phoneNumber = '(' + numbers.slice(0, 3) + ') ' + numbers.slice(3, 6) + '-' + numbers.slice(6-10)
    return phoneNumber
} 

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

//Another solution (not mine)

function createBetterPhoneNumber(numbers){
    let phoneNumber = '(xxx) xxx-xxxx'
    for (let i = 0; i < length(numbers); i++){
        phoneNumber.replace('x', numbers[i])
    }
    return pattern
}

console.log(createBetterPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))