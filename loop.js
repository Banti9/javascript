console.clear()
console.log("############### While Loop ####################")

// while(condition){
//     block of code
// }

var mValue=0
while(mValue<=50){
    mValue++
}

console.log(mValue)

console.log("############### For Loop ####################")
var mList=[1,2,3,4,5]
var pos;
for(pos=0;pos<mList.length;pos++){
 console.log('Position => '+pos+'Value =>' + mList[pos])
}


///Break Keyword


console.log("#####**********###")


for(pos=0;pos<mList.length;pos++){
    if(pos>=3)
    break
    console.log('Position => '+pos+'Value =>' + mList[pos])
   }
   

   //continue Keywords

   console.log("######****************#####")
for(pos=0;pos<mList.length;pos++){
      if(pos%2!==0)
      continue
      console.log('Position => '+pos+'Value =>' + mList[pos])
 }



