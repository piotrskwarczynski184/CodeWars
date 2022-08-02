//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//Not working yet
function solution(str, ending){
    if (str.slice(-ending.length) == ending) {
        return true
    }
    else return false
  }

  str = 'abcde'
  end = ''

  console.log(solution(str, end))