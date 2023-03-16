var num1=12;
var num2=10.34;
console.clear();
//toString() number as input and returns a string 

console.log (num1.toString())
console.log(num2.toString())

var strNum1="12";
var strNume2="10.34";
var strNume3 = "ABC";
//parseInt() string number as input and return a number 
 
console.log(parseInt(strNum1))
console.log(parseInt(strNume2))
console.log(parseInt(strNume3))

//parseFloat() string number as input and return a float ing number 

console.log(parseFloat(strNum1))
console.log(parseFloat(strNume2))
console.log(parseFloat(strNume3))

//toFixed() takes floaating number and rounds it off to give positin

var strFloat=87.9875653;
console.log(strFloat.toFixed())
console.log(strFloat.toFixed(1))
console.log(strFloat.toFixed(5))
console.log(strFloat.toFixed(10))