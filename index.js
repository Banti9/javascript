console.log('JS Loaded');

// var mVar=[1,2,3,4,5,6,7]
// console.log(mVar)

// console.log(document.getElementById("logo"));
// 
// console.log(document.getElementsByClassName('blog-card'));
// console.log(document.getElementsByTagName('img'))
// 
// 
// console.log(document.querySelectorAll('.blog-card img'));
// console.log(document.querySelector('.blog-card img'));
// console.log(document.querySelector('topbar'));

var countdownElement =document.getElementById('countdown');
var bgImageElement = document.getElementById('bg-image');
// console.log(bgImageElement);
// bgImageElement.className = 'BackImage';
var initialCountdownVal=countdownElement.innerHTML;


setInterval(function(){
    initialCountdownVal=initialCountdownVal>0?initialCountdownVal-1:0;
    //  initialCountdownVal-=1;
    countdownElement.innerHTML=initialCountdownVal-1;
    countdownElement.style.fontSize = insitialCountdownVal*100+"px";
    // console.log(initialCountdownVal*100 + "px")
    // var backImgPath=initialCountdownVal%2===0?'background.jpg':'background2.jpg'
    bgImageElement.style.width = initialCountdownVal*10+"%"
    console.log(initialCountdownVal*100 + "px")

    if(initialCountdownVal<=0)
        clearInterval(Interval);
    
    // bgImageElement.src=backImgPath;
    // console.log('Interval Running')
},1000);



var countdownElement=document.getElementById("countdown");