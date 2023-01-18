console.log('Hello from homework.js!');

//==================Exercise #1 ==========//
/*
    Given the array [1, 2, 3, 5, 6, 7],  finds the index of the first non-consecutive element in the array.
    It should log out 3 because the array at index 3 is 5 which is not consecutive.
*/

// PYTHON SOLUTION
// def exerciseOneArr(nums):
//     for x in range(0, len(nums)):
//         if nums[x] - nums[x-1] > 1:
//             return x
//     return -1


let arr1 = [1, 2, 3, 5, 6, 7]

for (let x = 0; x < arr1.length; x++){
    if(arr1[x] - arr1[x-1] > 1){
        console.log(x);
    }
}



//============Exercise #2 ============//
/*
Given the two array of numbers below, loop through them both individually and the sum all of the positives elements.

Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 40
Explain: 10 + 12 + 3 + 15 = 40

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 26

Note: if there is nothing to sum, the sum is default to 0.
*/


let arr = [10, 12, -9, 3, -1, 0, 15];
let sum = 0;

for (let x of arr) {if
    (x>0)
    sum += x;
}

console.log(`${sum}`);

// codewars problem - Jenny's Secret Message

//def greet(name):
// if name == "Johnny":
// return "Hello, my love!"
// else:
// return "Hello, {name}!".format(name=name)


let n = "Johnny";

if(n === "Johnny"){
    console.log("Hello my love!");
}
else if (n !== 'Johnny'){
    console.log("Hello humanoid");
}

// DISEMVOWEL 


// def disemvowel(string_):
//     for x in "aeiouAEIOU":
//         string_ = string_.replace(x, "")
//     return string_


let str = "geepers creepers";
str = str.replace(/[aeiouAEIOU]/g,"");
console.log(str);

// Reversed sequence

// def reverse_seq(n):
//     seq = []
//     while n>0:
//         seq.append(n)
//         n = n-1
//     return(seq)

let ogList = [1, 2, 3, 4, 5]
let seq = [];

ogList.reverse();
console.log(ogList);

// multiply 

function multiply(a, b){
    let sum = a * b;
    return sum;
  };
  
  let a = 9
  let b = 8
  let result = multiply(a, b);
  console.log(result);

//Even or Odd


function evenOrOdd(number) { 
    if (number %2==0) {
      return true;
    } else {
      return false; 
  }
  };
  
  let figure = evenOrOdd(8)
  console.log(evenOrOdd)
  