// let person={
//     name: " sachin",
//     age : 25,
//     city: "delhi",
//     job : true,
// };
// console.log(typeof person);
// console.log(person.age,person.name);

let person1 = new Object({state : " haryana", country: "india"});
//console.log(person1);
person1.name =" mohit";
person1.age = 26;
person1.address={
    flat_no : 2875,
    tehsil : "ballabgarh",
    district : "faridabad",
};
person1.address.flat_no = 2865;
person1['address']['district']="charkhi dadri";
person1.address.zip= 12345;
delete person1.address.tehsil;
//console.log(person1.address);
//console.log(Object.keys(person1));
//console.log(Object.values(person1));
//console.log(Object.entries(person1));

// assigning person2 object to person1 object
 let person2 ={name1 :"rahul sangwan",
    village : "mandola" };
    Object.freeze(person2);
    person2.name1="ravinder kumar"
    //Object.freeze(person2);

   // Object.assign(person1,person2);
    //console.log(Object.assign(person1,person2));


    // creating function as one of properties of object

    // 

// let bullet={
//     make : "royal enfield",
//     year : 2017,
//     model : "standard ",
//     engineCondition:function(){
//         console.log("engine is in good condition");
//     }
// };
// bullet.engineCondition();
// //console.log(bullet.engineCondition());

// ADDING OBJECT METHOD
// let student={};
//    student.name=" sachin kumar";
//    student.rollNo = 123456;
//    student.greet= function(){
//        console.log("hello Sachin, welcome to delhi university");
//    }
//    student.greet();
//    console.log(student.greet());

// USING "THIS " KEYWORD IN OBJECT;
// let language ={name : "javascript",
//      scope : " frontend and backend",
//      applications : "web applicatiobns, web pages",
//      welcome :function(){
//         console.log("hey welcome to the "+ this.name + " programming world");
//      }
// };
// console.log(language.welcome()
// );


// creating new set 
let newSet = new Set();
newSet.add("hello");
newSet.add("Goodbye");
newSet.add("hello");
newSet.add("how are you");
newSet.add("i am great");

//console.log(newSet);

//console.log(newSet.has("thankyou"));
//newSet.clear();

//console.log(newSet.size);
// iterating through foreach loop
newSet.forEach((value)=>{
    //console.log(value);
});
// iterating through for of loop
 for (let i of newSet){
    //console.log(i);

 }

// another way to create set
let fruitsArr =[" mango"," apple"," grapes","mango"];
let fruitsSet = new Set(fruitsArr);
//console.log(fruitsSet);

// creating set using literals
let mySet=new Set([1,2,3,4,4,3,2]);
//console.log(mySet);

// constructing array through set
let setArray = Array.from(newSet);
//console.log(setArray);

const obj1 = { name: "John", age: 30 };
const obj2 = { name: "John", age: 30 };

const myySet = new Set();

myySet.add(obj1);
myySet.add(obj2);

// console.log(myySet)
// console.log(myySet.size);


// creating javasripts MAP
let myMap = new Map();
myMap.set("name","raaju saangwann");
myMap.set("age",30);
myMap.set("address", 2865);

//myMap.delete("address");
// console.log(myMap);
// myMap.clear();
// console.log(myMap);
// console.log(myMap.size);

//console.log(typeof myMap);

const newMap = new Map([
    ['name', 'John'],
    ['age', 30]
]);

// from MAP to ARRAY

let mapToArray=Array.from(newMap);
//console.log(mapToArray);

  //console.log(newMap);
  //console.log(newMap.size);
  // for.. each loop
  //newMap.forEach((value,key)=>{
    //console.log(`${value}:${key}`)
//});
   //for (let[key,value]of newMap){
   // console.log(`${key}:${value}`);
   //}
  // Output
  2

//   const fruitss =new Map([["apples", 500],
//   ["lichi",200],
//   ["mango",900]]);
//   //console.log(fruitss);

//   let jsObj={
//     type: "object",
//     work: "front end and back end",
//     version : "es6"
  //}
//   console.log(typeof jsObj);
//     let jsonStr =JSON.stringify(jsObj);
//       console.log(jsonStr);
//   console.log(typeof jsonStr);
//   let jsStr= JSON.parse(jsonStr);
//   console.log(typeof jsStr);

// let jsonStr =`{"name": "randhir singh",
//  "age": 30,
// "address": true
// }`;

//  function parseJson(){
//     let jsObj=JSON.parse(jsonStr);
//     return jsObj;
//  }
// let result =parseJson();
// console.log(result);

// let nestedObject={"person":{"name": "John","age": 30,
// "address": {"city": "New York","country":"USA"}}};
// let str = "person.address.city"

// function nestedValue(){
//     let newStr =str.split(".");
//     let result = nestedObject;
// for (let key of newStr){
//     if(result && typeof result === "object" && key in result){
//         result =result[key];
//     }else {
//         return null;
//     }
// }
//     return result;
// }
 
// let output = nestedValue(nestedObject,str);
// console.log(output);

let text = "How.are.you.doing.today?";
const myArray = text.split(".", 3);
//const myArray = text.split(".");
console.log(myArray);