// let name = " raaju saangwan";
// console.log("hello :",name);
//  let a = "good";
//  let b = " morning";
//  console.log( a + b);
//  console.log(" javascript" + " is"+ " dynamic language");
// let initialFee= 4000;
// let discountPercent= 10;
//  let afterDiscount = discountPercent/100 * initialFee;
//  let totalFee = initialFee - afterDiscount;
//  console.log(totalFee);
// coverting kilometers into miles
//     let distanceInKm= 15;

//      let milesdistance = distanceInKm / 1.5;
//   console.log(milesdistance);

  // converting celsius into fahranheit

//    let celsius = 15;
//    let fahranheit = celsius*1.8 +32;
//    console.log(" the temperature is " + fahranheit + " farhanheit"+ "in delhi");

// boolean expression 
// let text1 = 56 ;
// let text2 = 99;
// let text4 = "false";
// let text3 = text1 != 56 && text2 <= 99 ;
// console.log(!text3);
//console.log( typeof(text1,text2));

// program take array as input and return output as a object
// let arr = [ 99,89,77,65,56,40,33,94,86,72];
//   let score = {A:0,
//         B : 0,
//         C : 0,
//         D : 0,
//         F : 0,      
// };

//    for ( let i =0; i < arr.length; i++){
//   if ( arr[i] >= 90 && arr[i] <= 100){
//     //console.log("A");
//     //score.A =score.A+1;
//     score.A++;

     
//   } else if( arr[i] >=80 && arr[i] <= 89){
//     score.B++;
//   } else if( arr[i] >=70 && arr[i] <= 79){
//     score.C++;
//   } else if( arr[i] >=60 && arr[i]<= 69){
//     score.D++;
//   } else if( arr[i] < 60){
//     score.F++;
//   }
// } console.log(score);

// calcultor program
  let num1 ;
  let num2;
  let operator;
  switch (operator){
    case '+':
        return num1+num2;
        break;
    case '-':
        return num1-num2;
        break;
    case '*':
        return num1*num2;
        break;
    case '/':
        return num1/num2;
        break ;
    default :
    return 'enter the valid operator';
      }
  