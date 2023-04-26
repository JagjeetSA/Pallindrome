 /* Question of the day - Find the following

- Largest Palindrome in a given string
- All Palindrome in a string

Ex - "Hello Mam, how are you. Madam, do you know racecar?
1- "racecar"
2- ["mam", "madam", "racecar"]    */

  // remove comma, dots and question marks from the input string & convert to lower case.
  // split this string and store each word as an array element.
  let input = "Hello Mam, how are you. Madam, do you know racecar?";
  let splitArray = input.replace(/[.,?]/g, "").toLowerCase().split(" ");
  console.log(splitArray);
  let finalArr = [];
  // looping on splitArray
  for (let i = 0; i < splitArray.length; i++) {
    let count = 0;
    //looping on each word of splitArray
    for (let j = 0; j < splitArray[i].length / 2; j++) {
      let word = splitArray[i];

      if (word[j] != word[word.length - j - 1]) {
        break;
      }
      if (word[j] === word[word.length - j - 1]) {
        count++;
      }
    }
    if (count >= splitArray[i].length / 2) {
      finalArr.push(splitArray[i]);
    }
  }
  console.log(finalArr);

  let longest_pallindrome = "";
  for (let k = 0; k < finalArr.length; k++) {
    if (finalArr[k].length > longest_pallindrome.length) {
      longest_pallindrome = finalArr[k]; // Update the longest word if a longer word is found
    }
  }
  console.log(longest_pallindrome);