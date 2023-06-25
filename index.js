
//prime number or not
//function prime(n){
//   var c=0;
//    for(let i=2;i<=n/2;i++){
//        if(n%i==0)
//        {
//            c=1;
//            break;
//        }
//    }
//    if(c==0){
//       console.log("The number is prime");
//  }
//    else{
//       console.log("The number is not prime");
//    }  
//
//}
//var number1=prime(5);
//var number2=prime(15);
//var number3=prime(179);

//multiplication table

//function table(a){
  //  for(let i=1;i<=10;i++)
//    {
//        console.log(a," * ",i," = ",a*i);
//    }
//}
//table(5);
//console.log("another table");
//table(7);

//circle area
//function area(r){
//    const pi=3.1416;
//    circlearea=pi*r;
//    console.log( parseFloat(circlearea. toFixed(2)));
//}
//area(10);

//function reverse(num){
  //  let rev=0;
//while (num > 0) 
//{
 //   rev = rev * 10;
 // rev = rev + num % 10;
   // num = num / 10;}
 //   console.log(rev);
//}
 
//reverse(125);

//function factorial(num){
//let fact=1;

//for( let i=1; i<=num; i++)
//    {
//        fact = fact * i;
//    }
//    console.log(fact);
//}
//factorial(5);
//factorial(10);
// program to check leap year
//function checkLeapYear(year) {

//    
//    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//        console.log(year + ' is a leap year');
//    } else {
//        console.log(year + ' is not a leap year');
//    }
//}

//checkLeapYear(2000);

// Armstrong number
const lowNumber =8 ;
const highNumber = 500;

console.log ('Armstrong Numbers:');

for (let i = lowNumber; i <= highNumber; i++) {

    
    let numberOfDigits = i.toString().length;

    let sum = 0;


    let temp = i;

    while (temp > 0) {

        let remainder = temp % 10;
        sum += remainder ** numberOfDigits;
        temp = parseInt(temp / 10);
    }
 
    if (sum == i) {
        console.log(i);
    }
}




























