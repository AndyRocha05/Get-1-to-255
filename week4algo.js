function iteratePrint(num){
    for(var i= num ; i >=0 ; i--){
      console.log(i)
    }
  }
  iteratePrint(5)
  
  // FUNCTION DEFINED
  function recursivePrint(num){
    // 1. BASE CASE
    if(num == 1){
      console.log(num)
      return "hELLO"
    }
    console.log(num)
    // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
    num--
    // 3. RECURSIVE CALL
    recursivePrint(num)
  }
  // FUNCTION CALLED
  recursivePrint(3)
  
  // MON
  
  // 1, BASE CASE
  // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
  // 3. RECURSIVE CALL
  
  /* 
    Recursive Sigma
    Input: integer
    Output: sum of integers from 1 to Input integer
  
    SIGMA 3 => 3 + 2 + 1 => 6
  */
  
  function recursiveSigma(n) {
    // 1. BASE CASE
    if(n == 1){
      return 1
    }
    // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
    // 3. REC URSIVE CALL
    return n + recursiveSigma(n - 1)
  
  }
  // 5 => 5 + 4 + 3 + 2 + 1 => 15
  console.log(recursiveSigma(3)) // 6
  
  /* 
    Recursively sum an arr of ints
  */
  
  function sumArr(arr, i = 0) {
    // 1. BASE CASE
    if(i == arr.length - 1){
      return arr[i]
    }
    // 2. FORWARD PROGRESS (INCREMENT OR DECREMENT)
    var sum = arr[i]
    i++
    // 3. RECURSIVE CALL
    return sum + sumArr(arr, i)
    // return arr[i] + sumArr(arr, i + 1)
  }
  // [1,2,3] => 6
  console.log(sumArr([1,2,3]))
  
  
  
  // [1,2,3] => 6
  
  
  // EX. [1,[2,3,[4]],5] => [1,2,3,4,5]// -----------------------------------------------------------------------------------------------//
  
  // TUE
  /* 
      G iven an array nested with unknown amount of arrays,
      return the integers all under ONE array
      Array.isArray() will come in useful
      Array.isArray([1,2,3]) returns true
      Array.isArray({'a':1}) returns false
      Array.isArray(1) returns false
  
      for(var i=0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
          arr[i] is an array
        }
      }
  
      var arr1 = [1,2,3]
      var arr2 = [4,5,6]
      var arr3 = arr1.concat(arr2)
      console.log(arr3) => [1,2,3,4,5,6]
  */
  
  function recFlatten(arr){
    // 1. BASE CASE
    if(!Array.isArray(arr)){
      return arr
    }
    // 2. FORWARD PROGRESS
    var array = []
    for(var i =0; i < arr.length; i ++)
  {
      // 3. RECURSIVE CALL
      array = array.concat(recFlatten(arr[i]))
    }
    return array
  }
  console.log(recFlatten([1,[2,3,[4]],5]))
  
  // EX. [1,[2,3,[4]],5] => [1,2,3,4,5]
  
  
  // -----------------------------------------------------------------------------------------------//
  // -----------------------------------------------------------------------------------------------//
  
  // WED
  
  /*
    Recursive Binary Search
    Input: SORTED array of ints, int value
    Output: bool representing if value is found
    Recursively search to find if the value exists, do not loop over every element.
    Approach:
    Take the middle item and compare it to the given value.
    Based on that comparison, narrow your search to a particular section of the array
  */
  
  function recursiveBinary(arr, target){
    // 1. Base Case
    if(arr.length == 1){
      if(arr[0] == target){
        return true
      }
      return false
    }
    // 2. Forward Progress
    var midInd = Math.floor((arr.length - 1) / 2)
    // 3. Recursive Call
    if(target == arr[midInd]){
      return true
    }
    else if(target < arr[midInd]){
      // TAKE THE LEFT HALF OF THE ARR AND DO A RECURSIVE CALL
      return recursiveBinary(arr.slice(0, midInd), target )
    }
    else{
      // TAKE THE RIGHT HALF OF THE ARR AND DO A RECURSIVE CALL
      return recursiveBinary(arr.slice(midInd + 1, arr.length ), target )
    }
  }
  console.log(recursiveBinary([1,2,3,4,5,6,7,8,9], 7 ))
  
  // -----------------------------------------------------------------------------------------------//
  // -----------------------------------------------------------------------------------------------//
  
  // THUR
  
  /* 
      Rising Square
      Given a number return an array filled with the
      squares of integers up to given number
  */
  function risingSqaures(num, arr){
  
  }
  // EX. risingSquares(3) => [1,4,9]
  // EX. risingSquares(5) => [1,4,9,16,25]
  
  
  
  
  // -----------------------------------------------------------------------------------------------//
  // -----------------------------------------------------------------------------------------------//
  
  
  // FRI
  
  /*
      String Subset
      Given a string, return an array filled
      with IN-ORDER substrings
  */
  
  
  function stringSubset(string, arr){
  
  }
  
  // EX. "ABC" => ["ABC", "AB", "A", "BC", "B", "C", ""]