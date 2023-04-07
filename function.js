console.log()

function mSum(){
    var num1 = 20;
    var num2 = 40;
    var sum = num1+num2;
    // console.log(sum)

    return sum
    // console.log('Im a print statement')

}

// console.log(mSum())
// 

var totalSum= 200+mSum()
console.log(totalSum)

function greeting(personName){
    console.log('Welcome' + personName);
}

// console.log('Welcome');
greeting('Kavien');
greeting('ITT');
greeting('DAY');
greeting('RAM');

function Calculus(num1,num2){
    console.log('num1 = ' + num1)
    console.log('num2= ' + num2)
    // console.log(num1+num2)
    // console.log(num1*num2)
    // console.log(num1-num2)
    // console.log(num1%num2)

    if (num1!== 'undefind'){
        console.log(num1+num2)
    }
    else{
        console.log(num1+num2)
    }
}

// Calculus(50.40,45)

Calculus(50.40,5.60)
// Calculus(60,45)