describe("digitalRoot", function() {
  it("65,536 should return 7", function() {
    expect(Algorithms.digitalRoot(65536)).toBe(7);
  });

  it("1,853 should return 8", function() {
    expect(Algorithms.digitalRoot(1853)).toBe(8);
  });
});

describe("caesarCipher", function() {
  it("'hello' should return 'lipps' with shift of 4", function() {
    expect(Algorithms.caesarCipher('hello', 4)).toBe('lipps');
  });

  it("'abc' should return 'abc' with shift of 0", function() {
    expect(Algorithms.caesarCipher('abc', 0)).toBe('abc');
  });
});

describe("commonSubstrings", function() {
  it("'Hello' and 'Hello World' should return 'Hello'", function() {
    expect(Algorithms.commonSubstrings('Hello', 'Hello World')).toBe('Hello');
  });

  it("'ABABC' and 'BABCA' should return 'BABC'", function() {
    expect(Algorithms.commonSubstrings('ABABC', 'BABCA')).toBe('BABC');
  });

  it("'wizard' and 'mouse' should return false", function() {
    expect(Algorithms.commonSubstrings('wizard', 'mouse')).toBe(false);
  });
});

describe("sumRec", function() {
  it("[1, 2, 3] should return 6", function() {
    expect(Algorithms.sumRec([1, 2, 3])).toBe(6);
  });

  it("[99, 66, 33] should return 198", function() {
    expect(Algorithms.sumRec([99, 66, 33])).toBe(198);
  });
});

// describe("fibs", function() {
//   it("1 should return [0]", function() {
//     expect(Algorithms.fibs(1)).toBe([0]);
//   });
//
//   it("2 should return [0, 1]", function() {
//     expect(Algorithms.fibs(2)).toBe([0, 1]);
//   });
//
//   it("3 should return [0, 1, 1]", function() {
//     expect(Algorithms.fibs(3)).toBe([0, 1, 1]);
//   });
//
//   it("5 should return [0, 1, 1, 2, 3]", function() {
//     expect(Algorithms.fibs(5)).toBe([0, 1, 1, 2, 3]);
//   });
// });

describe("isPalindrome", function() {
  it("'ricercar' should return false", function() {
    expect(Algorithms.isPalindrome('ricercar')).toBe(false);
  });

  it("'racecar' should return true", function() {
    expect(Algorithms.isPalindrome('racecar')).toBe(true);
  });
});

describe("foldingCipher", function() {
  it("'abcm' should return 'zyxn'", function() {
    expect(Algorithms.foldingCipher('abcm')).toBe('zyxn');
  });

  it("'zyxn' should return 'abcm'", function() {
    expect(Algorithms.foldingCipher('zyxn')).toBe('abcm');
  });
});

describe("uniqSubs", function() {
  it("should return all the substrings", function() {
    var array = ["a", "b", "c", "d", "ab", "bc", "cd", "abc", "bcd", "abcd"]
    expect(Algorithms.uniqSubs('abcd').sort()).toEqual(array.sort());
  });

  it("should not return repeats", function() {
    var array = ["d", "du", "dud", "dude", "u", "ud", "ude", "de", "e"]
    expect(Algorithms.uniqSubs('dude').sort()).toEqual(array.sort());
  });
});

describe("lcs", function() {
  it("should return the largest subsum", function() {
    var array = [4, -1, 5, 6, -13, 2]
    expect(Algorithms.lcs(array)).toBe(14);
  });

  it("should return the largest subsum", function() {
    var array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    expect(Algorithms.lcs(array)).toBe(6);
  });
});

describe("sillyYears", function() {
  it("should return the ten subsequent silly years", function() {
    var array = [1978, 2307, 2417, 2527, 2637, 2747, 2857, 2967, 3406, 3516]
    expect(Algorithms.sillyYears(1978)).toEqual(array);
  });

  it("should return the ten subsequent silly years", function() {
    var array = [2307, 2417, 2527, 2637, 2747, 2857, 2967, 3406, 3516, 3626]
    expect(Algorithms.sillyYears(2307)).toEqual(array);
  });
});

describe("pairSum", function() {
  it("should return all the pairs that sum to 0", function() {
    var array = [[-1, 1]]
    expect(Algorithms.pairSum([1, 2, -1], 0)).toEqual(array);
  });

  it("should return all the pairs that sum to 1", function() {
    var array = [[-1, 2]]
    expect(Algorithms.pairSum([1, 2, -1, -1, -2], 1)).toEqual(array);
  });
});


describe("matrixRegionSum", function() {
  it("should return the sum of the elements within the coordinates", function() {
    var matrix = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
    var topLeftCoords = [0, 0]
    var bottomRightCoords = [1, 1]
    expect(Algorithms.matrixRegionSum(matrix, topLeftCoords, bottomRightCoords)).toBe(8);
  });

  it("should return the sum of the elements within the coordinates", function() {
    var matrix = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
    var topLeftCoords = [0, 0]
    var bottomRightCoords = [1, 2]
    expect(Algorithms.matrixRegionSum(matrix, topLeftCoords, bottomRightCoords)).toBe(15);
  });

  it("should return the sum of the elements within the coordinates", function() {
    var matrix = [[2, 3, 4], [3, 4, 5], [4, 5, 6]]
    var topLeftCoords = [0, 0]
    var bottomRightCoords = [2, 2]
    expect(Algorithms.matrixRegionSum(matrix, topLeftCoords, bottomRightCoords)).toBe(36);
  });
});

// describe("mergeSort", function () {
//   it("should sort an array", function () {
//     var sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     var unsortedArray = [4, 9, 5, 1, 6, 3, 7, 2, 8];
//     expect(Algorithms.mergeSort(unsortedArray)).toBe(sortedArray);
//   });
// });

describe("binarySearch", function () {
  it("should return the correct index", function () {
    var array = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    expect(Algorithms.binarySearch(array, 30)).toBe(2);
  });

  it("should return the correct index", function () {
    var array = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    expect(Algorithms.binarySearch(array, 80)).toBe(7);
  });

  it("should return null if no match", function () {
    var array = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    expect(Algorithms.binarySearch(array, 150)).toBe(null);
  });
});

describe("productify", function () {
  it("should map the product of every other number", function () {
    var array = [1, 2, 3, 4, 5];
    var result = [120, 60, 40, 30, 24];
    expect(Algorithms.productify(array)).toBe(result);
  });
});
