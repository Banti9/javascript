var btn= document.getElementById("btn-click");

var mainDiv=document.querySelector("hearder div");
// console.log(mainDiv);


function onBtnClick(){

    // var randomNum=Math.floor(Math.random() * 255);
    // alert("rgb(" + randomNum +"," + 45 + "," + 155 + ")");


    // alert("rgb(" + Math.floor(Math.random() * 255) +","+Math.floor(Math.random() * 255) + ","+Math.floor(Math.random() * 255) +"," + 45 + "," + 155 + ")");
    // alert(Math.floor(Math.random() * 255));
    // alert("Button Clicked");
    // btn.style.backgroundColor="lightcoral"
    mainDiv.style.backgroundColor="rgb(" + Math.floor(Math.random() * 255) +","+Math.floor(Math.random() * 255) + ","+Math.floor(Math.random() * 255) +"," + 45 + "," + 155 + ")";

}
// btn.onclick = onBtnClick;

// btn.addEventListener('click',function(){
    // alert('Anonymous Function Called')
// })

btn.addEventListener('click',onBtnClick)