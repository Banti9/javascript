console.clear()
var currentDay='mon'
if(currentDay==='mon'){
 console.log('Timings: 10:15-05:00')  

} else if(currentDay==='Tue'){
    console.log('Timings: 10:10-05:00')
} else if(currentDay==='wed'){
    console.log('Timings: 09:15-05:00')
} else if(currentDay==='thu'){
    console.log('Timings: 08:15-05:00')
} else if(currentDay==='fri'){
    console.log('Timings: 02:15-05:00')
} else if(currentDay==='sat'){
    console.log('Timings: 03:15-05:00')

} else if(currentDay==='sun'){
    console.log('Timings: 10:20-05:00')
}



switch(currentDay){
    case 'mon':
        console.log('MonDay')
        break;
    case 'tue':
         console.log('tuesDay')
         break;    
    case 'wed':
       console.log('WednesDay')
       break;
      
    case 'thu':
      
        console.log('ThursDay')
        break;

    case 'fri':
       console.log('FriDay')
       break;
    case 'sat':
       console.log('SaturDay')
        break;
    case 'sun':
       console.log('SunDay')
       break;

    default:
        console.log('undefinds')

}