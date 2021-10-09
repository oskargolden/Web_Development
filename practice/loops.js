// For Loops Practice

for (i = 0; i <= 10; i++){
    console.log(i)
}

let sum = 0;
// i = 0 means where to start where to initiate 
// i <= 101 says where to go up until, how far do we go or where do we stop... can use other things like i % 7 != 0; 
// i++ means i += i or i = i + 1.. can change the second plus to a any number like 5, or 2. Also can go down, see line 14. 
for (i = 0; i <=101; i++){
    sum += i; // same as saying sum = sum + i 
}
console.log(sum)

// decending loop
for (i = 100; i >= 1; i--){
    console.log(i)
}

var fruits = ['mango', 'banana', 'apple'];
const logArray = (arr) =>{
for (var i=0; i<arr.length; i++){
    console.log(arr[i])
    }
}


let data = {
    name: 'john',
    age: 28,
    martialstatus: true
}

for (var elem in data){
    console.log(elem, data[elem])
}

// While loops

let whileNum = 0;


while (whileNum < 10){
    console.log(whileNum)
    whileNum++;
}

let sum2 = 0; //store all the addition of numbers// final value
let sumNum = 0;

while (sum2 < 10){
    sum2 += sumNum;
    sumNum++;
}

let randomStuff = ['apple', 3.14568, true, false, undefined, ['apple', 'ball', 'cat'], 3, 2, 'lastobject'];

let x = 0;
// returns each part of the array 
while (x < randomStuff.length){
    console.log(randomStuff[x]);
    x++;
}
// reversed looped through array 
let otherStuff = ['apple', 3.14568, true, false, undefined, ['apple', 'ball', 'cat'], 3, 2, 'lastobject'];

let otherStuffNum = otherStuff.length -1;// the minus one starts us at the end

while (otherStuffNum >= 0){
    console.log(otherStuff[otherStuffNum]);
    otherStuffNum--;
}

let cars = ['lambo', 'bmw', 'tesla'];

let carNum = 0;

while (carNum < cars.length){
    console.log()
}









// //elquent JavaScript excersise 

// let hashMark = '#'
// let hashT = ''



// const hashTFunc = ( str) => {
//     let hashT = '#'
//     for (var i = 0; i < str.length; i++){
//         hashT = hasht + str[i]
//         if (str.length <= 7){
//         console.log(str + '#')
//         }
//     }
//     return hashT

// hash triangle problem
// for (var i = ''; i.length <= 7; i+'#'){
//     console.log(i);
//}

for (i = ''; i.length <= 7; i+='#'){
    console.log(i)
  }

   
//FuzzBizz problemWrite a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).



  for (i = 0; i <= 100; i++){
    if (i % 3 == 0 && !(i % 3 == 0 && i % 5 == 0)){
        console.log('Fizz')
    } else if (i % 5 == 0 && !(i % 3 == 0 && i % 5 == 0)){
        console.log('Buzz')
    } else if ((i % 3 == 0 && i % 5 == 0) && i != 0){
        console.log('FizzBuzz')
    } else {
        console.log(i)
    }
 }

// Chessboard Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

