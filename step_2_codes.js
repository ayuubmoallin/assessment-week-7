const perf = require('execution-time')();


function addToZero(numArray) {
    for (let i = 0; i < numArray.length; i++) {
      for (let j = i + 1; j < numArray.length; j++) {
        if (numArray[i] + numArray[j] === 0) {
          return true;
        }
      }
    }
    return false;
}
// input = [1,2,3]
// runtime = 131.5 microseconds


function hasUniqueChars(word) {
    let uniqueLetters = [];
    for(let char of word){
        const charToLower = char.toLowerCase()
        if(uniqueLetters.includes(charToLower)){
            // it means we found the duplicate
            return false;
        }
        uniqueLetters.push(charToLower)
    }
    return true;
}
// input = "Monday"
// runtime = 80.1 microseconds





function isPangram(string) {
    const englishLetters = "abcdefghijklmnopqrstuvwxyz";
    const stringToLower = string.toLowerCase();
    for (const char of englishLetters) {
      const charToLower = char.toLowerCase();
      // if the character of English alphabets is not found in the fiven input, it means the given input doesn't
      // have that character and hence will not be counted as pangram
      if (!stringToLower.includes(charToLower)) {
        return false;
      }
    }
    return true;
  }
// input =  "I like cats, but not mice"
// runtime = 71.7 microseconds





  function findLongestWord(arrayOfWords) {
    let longestWord = ""
    
    for (let currentWord of arrayOfWords) {
      if(currentWord.length > longestWord.length){
          longestWord = currentWord
      }
    }
    
    return longestWord.length;
  }




  
