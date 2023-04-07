var mainHeading=document.getElementById("main-heading")

var btn= document.getElementById('btn-click');

var sidebar = document.getElementById('sidebar');
var toggleButton= document.getElementById('toggle-icon');


mainHeading.classList.add('big');



toggleButton.addEventListener('click',function(){
    if(sidebar.classList,this.contains('show')){
        sidebar.classList.remove('show');
        sidebar.classList.add('hide');
    }else{
        sidebar.classList.remove('show');
        sidebar.classList.add('hide');
    }


    // sidebar.classList.add('show');

});


// btn.addEventListener('click',function(){
      // mainHeading.classList.remove('big');
// 
// });
// 
// setTimeout(function(){
//    mainHeading.classList.remove('big')

// },1500);