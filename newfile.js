// function main() {
//     var num1 = parseInt(readLine());
//     var num2 = parseInt(readLine());
//     var num3 = parseInt(readLine());
//     console.log(checkSign(num1, num2, num3));
// }
// function checkSign(num1, num2, num3) {
//   // Your code goes here
//   if (num1, num2, num3 >0 ){
//   console.log("+++");
//   }
  
// }

// for..of loop
let arr = [" shubham", " mayank", " rahul"," vikas"];
//for(let name of arr){
  //
  //console.log(`${name}`);
//}
for (let i =0;i < arr.length; i++){
  //console.log(arr[i]);
}
 let student_name =" abhishek";
 for ( let nameof of student_name){
  //console.log(nameof);
 }

// for each  always used for arrays. it take the function as a parameter.

 let arr2 =[{
  name : " raaju saangwann",
  city : " faridabad",
 },{
  name : " saagar",
  city : " dubai",
 }];
 arr2.forEach(function(element, i) {
  //console.log(i , element.name);
 });

 let arr3=[ 12,22,33,44,55,66,77,78,88,99,78, 79,90];
 for (let i =0; i < arr3.length;i++){
  if(arr3[i] === 78) break;
  //console.log(arr3[i]);

 }

 let arr4=[ 12,22,33,44,55,66,77,78,88,99,78, 79,90];
 for (let i =0; i < arr4.length;i++){
  if(arr3[i] === 78) continue;
  //console.log(arr3[i]);

 }

 // while loop mostly used in linked lists. in while loop , stop condition is not known.

//  let j =1;
//  while( j <= 10){
//   console.log(j);
//   j++
//  }

// do... while loop
 let k = 1;
 do{
 // console.log(k);
  k++
 } while( k<=12);
 // Javascript array
//  const words =['h','e','l','l','o'];
//  console.log(typeof words)
//  console.log(words);
//  console.log(words.length);
//   console.log(words[5]);

// let fruits =["apple","banana",'mango','grapes'];
// //console.log(fruits);
// let fruits1= new Array("apple","pineapple","papaya");
// //console.log(fruits1);
// let company =new Array("tata", "reliance"," escorts","jindal");
// //console.log(company);

// let myArray = [
//   1, "Hello", true, [2, 4, 6],
//   {
//     name: "John",
//     age: 30
//   },
//   function() {
//     //console.log("This is a function inside an array");
//   }
// ];

// //console.log(myArray[3][1]); // Output: 4

// myArray[5](); // Output: This is a function inside an array
// //console.log(myArray[5])
// fruits.push("lichi");
// fruits.push("chikku", "green apple");
// fruits.unshift("khajjur");
// fruits.unshift("sita fal");
// fruits[0]='ram fal'
// fruits[1]='water melon';
// fruits[7]='orange';
// fruits[9]='cherry';
// let removedFruits =fruits.shift();
// fruits.push('tarbujaa');

// console.log(fruits);
// console.log(removedFruits,   );
// console.log(fruits.length);
// console.log(fruits1.length);

let numbers =[ 5,9,8,6,2,3];
//console.log(numbers);
// after sort
//numbers.sort();
//let index = numbers.indexOf(5);

// console.log(numbers);
// console.log(index);
let moreNumbers=[ 12,16,18];
let totalNumbers=numbers.concat(moreNumbers);
//console.log(totalNumbers);
//console.log(totalNumbers.length);
let hasFive= totalNumbers.includes(16);
//console.log(hasFive);
//console.log(numbers.sort());
//console.log(totalNumbers.sort());
// multidimensional array = array contaioning arrays within it.

let mulArray =[ [2,5,1], ["sagar","sachin"], null, true, [7,"almaa"]];
//console.log(mulArray.length);
//mulArray.push('mobile');
//mulArray.unshift("colours");
//console.log(mulArray);
mulArray.splice(5,0,['hello india', 2023],["one more"]);
//console.log(mulArray);
//console.log(mulArray[6][5]);
let myName= `my name is "raju saangwan"`;
console.log(myName.toUpperCase());
let message = 'my name is \'chaudhary\'';
console.log(message); 
