console.clear()
// run by node filename.js
var mCars ={
    "p1":"350 kmph",
   "gallardo":"409 kmph",
   "veyron":'429 kmph',
   "agera":'500 kmph'
}

console.log(mCars)
// console.log(type(mCars))


var mBanti={
   "name": "banti",
   "manfacture":{
    "name":"sweety",
    "location":"Ballia"
 },
 topSpeed:460,
 color:"black & red & white",
 spoilers:"femal",
pplyBreaks:function(){
    setTimeout(function() {
        console.log('Car stopped');

    }, 5000)


  }
}

console.log(mBanti)
console.log(mBanti.name)
console.log(mBanti.color)
console.log(mBanti.topSpeed)
console.log(mBanti.pplyBreaks())
console.log(mBanti.pplyBreaks)