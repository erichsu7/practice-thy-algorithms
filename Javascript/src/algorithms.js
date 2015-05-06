(function () {
if(typeof Algorithms === "undefined") {
  window.Algorithms = {};
}

// Write a method, digital_root(num).
// It should sum the digits of a positive integer.
// If it is greater than or equal to 10, sum the digits of the resulting number.
// Keep repeating until there is only one digit in the result, called the "digital root".
// Do not use string conversion within your method.
Algorithms.digitalRoot = function (number) {
  if (number < 10) { return number; }
  return number % 9
};

// Write a function that takes a message and an increment amount and outputs the same letters shifted by that amount in the alphabet.
// Assume lowercase and no punctuation.
// Preserve spaces.
Algorithms.caesarCipher = function (string, shift) {
  var result = "";
  var charCode;
  var firstCharCode = "a".charCodeAt(0);
  for (var i = 0; i < string.length; i++) {
    charCode = string.charCodeAt(i);
    if (charCode === 32) {
      result += " ";
    } else {
      charCode = ((charCode - firstCharCode + shift) % 26 ) + firstCharCode;
      result += String.fromCharCode(charCode);
    }
  }

  return result;
};

// Write a function that takes two strings and returns the longest common substring.
Algorithms.commonSubstrings = function (stringOne, stringTwo) {
  var shortString = stringOne <= stringTwo ? stringOne : stringTwo;
  var longString = stringOne > stringTwo ? stringOne : stringTwo;
  var len = shortString.length;

  while (len > 0) {
    for (var i = 0; i + len <= shortString.length; i++) {
        var substring = shortString.substring(i, i + len);
        if (longString.indexOf(substring) > -1) {
          return substring;
        }
    }
    len--;
  }
  return false;
};

// Write a function that takes an array of integers and returns their sum.
// Use recursion.
Algorithms.sumRec = function (numbers) {
  if (numbers.length === 1) {
    return numbers[0];
  }

  return numbers[0] + Algorithms.sumRec(numbers.slice(1));
};

// Write a function which returns the first n elements from the fibonnacci sequence, given n.
Algorithms.fibs = function (number) {
  var fibsArray = [0, 1];
  if (number <= 2) { return fibsArray.slice(0, number); }

  //recursive solution
  // var prevFibs = Algorithms.fibs(number - 1);
  // var nextFib = prevFibs[prevFibs.length - 1] + prevFibs[prevFibs.length - 2];
  // return prevFibs.concat([nextFib]);

  //iterative solution
  while (fibsArray.length < number) {
    fibsArray.push(fibsArray[fibsArray.length - 1] + fibsArray[fibsArray.length - 2] );
  }

  return fibsArray;
};

// Write a function that takes a string and returns true if it's a palindrome, false if it's not.
// Your solution should take less time and memory than rebuilding the string backward and comparing the two.
Algorithms.isPalindrome = function (string) {
  for (var i = 0; i < (string.length / 2); i++) {
    if (string[i] !== string[string.length - 1 - i]) { return false; }
  }

  return true;
};

// Implement the Folding Cipher.
// It folds the alphabet in half and uses the adjacent letter.
// a <=> z, b <=> y, c <=> x, m <=> n.
Algorithms.foldingCipher = function (string) {
  var firstCharCode = "a".charCodeAt(0);
  var lastCharCode = "z".charCodeAt(0);
  var result = "";
  for (var i = 0; i < string.length; i++) {
    var charCode = string.charAt(i).charCodeAt(0);
    result += String.fromCharCode(firstCharCode + lastCharCode - charCode);
  }

  return result;
};

// Write a method that finds all the unique substrings for a word.
Algorithms.uniqSubs = function (string) {

};


// Given an array of integers (positive and negative) find the largest contiguous subsum (sum of a subarray).
// You can solve this trivially in O(n**2) time by considering all subarrays.
// Try to solve it in O(n) time with O(1) memory.
Algorithms.lcs = function (array) {

};

// Write a function that takes a year (four digit integer) and returns an array with the 10 closest subsequent years that meet the following condition:
// the first two digits summed with the last two digits are equal to the middle two digits.
Algorithms.sillyYears = function (number) {

};

// Given an array of integers, return all pairs that sum up to a specified value k.
// List the pairs in [min, max] order.
// Time complexity: O(n).
// Return an array.
Algorithms.pairSum = function (array, k) {

};

// Given a matrix of integers and coordinates of a rectangular region within the matrix.
// Find the sum of numbers falling inside the rectangle.
// Time complexity: O(number of rows * number of columns).
Algorithms.matrixRegionSum = function (matrix, topLeftCoords, bottomRightCoords) {

};

})();
