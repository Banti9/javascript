var myFirstString="I love my mom and dad";

console.clear();
console.log(typeof(myFirstString))

var mySecondString="We will learn javaScript together ";
console.log(typeof(mySecondString))


//what if my string contains a single quote

var singleQuotestring ='this is a \'javascript\' sting';
console.log(singleQuotestring)

var doubleQuotestring ="this is a \"javascript\" string";
console.log(doubleQuotestring)

//var singleQuotestring2='this is 'javaScript' string';


//************************************** */
//STRING FUNCTIONS

//?Returns the lenth of the string
console.log(myFirstString.length)

//find index of a string inside another string

console.log(mySecondString.indexOf('javaScript'))

console.log(myFirstString.indexOf('mom'))

//find LAST index of a string another string

console.log(myFirstString.lastIndexOf('dad'))
console.log(myFirstString.lastIndexOf('javaScript'))



//get a part of our string slice(start,end)

console.log(myFirstString.slice(0,6))
console.log(myFirstString.slice(6,10))
console.log(myFirstString.slice(-11))
console.log(myFirstString.slice(6))

//get sub string function  - PushSubscription(startpos, length)
console.log(myFirstString.substr(0,6))
console.log(myFirstString.substring(0,6))

console.log(myFirstString.substring(10,6))
console.log(myFirstString.substring(18))


//toUperCase() - it converts our string -> uppercase charecters
console.log(myFirstString.toUpperCase())

//toLowerCase() - it convert our string -> lowerCase charecters


console.log(myFirstString.toLowerCase())


// concat() - it marges two or more strings
var firstName="javascript";
var lastName="vscode";
console.log(myFirstString.concat(firstName))
console.log(myFirstString.concat(firstName,lastName))

//Or
//console.log(myFirstString.concat(' ',firstName,'',lastName)

//we can also use '+' to concat two or more string

//console.log(firstName+''+last+''+myFirstString)

//trim()- it remove extra spases

var extraspaceString= '   my string   '
console.log(extraspaceString.trim())

///charAt() ->this take a position as an arg returns the character at that position

var charAtexampleString ='This is my test string'
console.log(charAtexampleString.charAt(5))
console.log(charAtexampleString.charAt(15))

//split()- split our string on the basis of he arguments passed
var samplestring ='This is my sample string'
console.log(samplestring.split(''))
var samplestring1 ="This is my sample string";
console.log(samplestring1.split(''))

var samplestring2 ='This, is, my ,sample ,string'
console.log(samplestring2.split(','))

var samplestring3 ="This is my sample string";
console.log(samplestring3.split())





