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

  return fibsArray
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
  var uniqSubsHash = {};

  for (var i = 0; i < string.length; i++) {
    for (var j = i; j < string.length; j++) {
      var substring = string.substring(i, j + 1);
      uniqSubsHash[substring] = true;
    }
  }

  return Object.keys(uniqSubsHash).sort();
};


// Given an array of integers (positive and negative) find the largest contiguous subsum (sum of a subarray).
// You can solve this trivially in O(n**2) time by considering all subarrays.
// Try to solve it in O(n) time with O(1) memory.
Algorithms.lcs = function (array) {
  var maxSum = 0;
  var currentSum = 0;

  for (var i = 0; i < array.length; i++) {
    currentSum += array[i];
    if (currentSum > maxSum) { maxSum = currentSum; }
    if (currentSum < 0) { currentSum = 0; }
  }

  return maxSum;
};

// Write a function that takes a year (four digit integer) and returns an array with the 10 closest subsequent years that meet the following condition:
// the first two digits summed with the last two digits are equal to the middle two digits.
Algorithms.sillyYears = function (number) {
  var result = [];

  for (var year = number; result.length < 10 && year < 10000; year++) {
    var a = Math.floor(year / 1000);
    var b = Math.floor((year - (1000 * a)) / 100);
    var c = Math.floor((year - (1000 * a) - (100 * b)) / 10);
    var d = year % 10;

    if ((10 * a) - (9 * b) + (9 * c) + d === 0) {
      result.push(year);
    }
  }

  return result;
};

// Given an array of integers, return all pairs that sum up to a specified value k.
// List the pairs in [min, max] order.
// Time complexity: O(n).
// Return an array.
Algorithms.pairSum = function (array, k) {
  var result = [];
  var resultHash = {};
  var numsHash = {};

  for (var i = 0; i < array.length; i++) {
    numsHash[array[i]] = true;
    var diff = k - array[i];
    if (numsHash[diff]) {
      var pair = [array[i], diff].sort();
      if (!resultHash[pair]) {
        result.push(pair);
        resultHash[pair] = true;
      }
    }
  }

  return result;
};

// Given a matrix of integers and coordinates of a rectangular region within the matrix.
// Find the sum of numbers falling inside the rectangle.
// Time complexity: O(number of rows * number of columns).
Algorithms.matrixRegionSum = function (matrix, topLeftCoords, bottomRightCoords) {
  var sum = 0;
  for (var i = topLeftCoords[0]; i <= bottomRightCoords[0]; i++) {
    for (var j = topLeftCoords[1]; j <= bottomRightCoords[1]; j++) {
      sum += matrix[i][j];
    }
  }

  return sum;
};

// Implement a sorting function using the merge sort algorithm.
Algorithms.mergeSort = function (array) {
  if (array.length <= 1) { return array }
  var result = [];

  var midpoint = array.length / 2;
  var leftArray = Algorithms.mergeSort(array.slice(0, midpoint));
  var rightArray = Algorithms.mergeSort(array.slice(midpoint));

  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] < rightArray[0]) {
      result.push(leftArray.shift());
    } else {
      result.push(rightArray.shift());
    }
  }

  return result.concat(leftArray).concat(rightArray);
}

// Implement a recursive binary search function.
// Algorithms.binarySearch = function (array, target) {
//   if (array.length < 1) { return null; }
//
//   var midpoint = Math.floor(array.length / 2);
//   if (target < array[midpoint]) {
//     return Algorithms.binarySearch(array.slice(0, midpoint));
//   } else if (target > array[midpoint]) {
//     var nextMidpoint = Algorithms.binarySearch(array.slice(midpoint + 1));
//     return nextMidpoint ? midpoint + nextMidpoint + 1 : null;
//   } else {
//     return midpoint;
//   }
// }

// Implement an iterative binary search function.
Algorithms.binarySearch = function (array, target) {
  var low = 0;
  var high = array.length - 1;

  while (low <= high) {
    var midpoint = Math.floor((low + high) / 2);
    if (target < array[midpoint]) {
      high = midpoint - 1;
    } else if (target > array[midpoint]) {
      low = midpoint + 1;
    } else {
      return midpoint;
    }
  }

  return null;
}

// Given a list of numbers in an array, replace all the numbers
// with the product of all other numbers. Do this in O(n) time without
// using division.
Algorithms.productify = function (array) {
  var result = [];
  var product = 1;
  for (var i = 0; i < array.length; i++) {
    result[i] = product;
    product *= array[i];
  }

  product = 1;
  for (var j = array.length - 1; j >= 0; j--) {
    console.log(j);
    result[j] *= product;
    product *= array[j];
  }

  return result;
}

// Write a function that takes an array and returns all of its subsets.
Algorithms.subsets = function (array) {
  if (array.length === 0) { return [[]] };

  var prevSubsets = Algorithms.subsets(array.slice(0, -1));
  var newSubsets = prevSubsets.map(function (subset) {
    return subset.concat([array[array.length - 1]]);
  });
  return prevSubsets.concat(newSubsets);
}

})();
