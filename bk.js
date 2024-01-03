// Created by Bonome Katabana<3

/*alert('Dear friends!\nYour likes motivate me a lot to drop v.2 of this code ASAP.\nEnjoy💛💙')*/

document.addEventListener('DOMContentLoaded',function(e) {
  //find the arrows of clock
  var arrows = Array.from(document.querySelectorAll('#svgOutput g'))
  function setTime() {
   //create timer
   var dt = new Date()
   //get seconds,minutes,hours
   var times = [dt.getSeconds(),
   dt.getMinutes(),
   dt.getHours()]
   //how many degree per tick
   var tick = 0
   //center of rotation
   const center = 150
   //turn angle of the start point
   const start = 90
   //do the magic here in the loop:p
   for(let i=0;i<arrows.length;i++) {
       if(i==2) {
       //360 deg / 24 hours = 30
       tick = 30
       let attr=`rotate(${tick*times[i]-start},${center},${center})`
       arrows[i].setAttribute('transform', attr)
       }
       else {
       //360 deg / 60 mins or secs = 6
       tick = 6
       let attr=`rotate(${tick*times[i]-start},${center},${center})`
       arrows[i].setAttribute('transform', attr)
       }
      }
    }
    //establish the day,month,year here
    function setDate() {
      var dt = new Date()
      var dates = [dt.getDay(),
      dt.getMonth(),dt.getDate()]
      for(let i=0;i<dates.length;i++) {
       var el=document.createElement('i');
       if(i==0){
       el.textContent=pickDayName(dates[i])+', '
       } else if(i==1){
              el.textContent=pickMonthName(dates[i])+' ';
       } else {
         el.textContent=dates[i] 
       }  document.getElementById('date').appendChild(el) 
      }
    }
    //transform num of day to its name
    function pickDayName(num) {
      var res = ''
      switch(num) {
        case 1:
        case "1":{
         res = "Mon"
         break;
        }
        case 2:
        case "2":{
         res = "Tue"
         break;
        }
        case 3:
        case "3":{
         res = "Wed"
         break;
        }
        case 4:
        case "4":{
         res = "Thu"
         break;
        }
        case 5:
        case "5":{
         res = "Fri"
         break;
        }
        case 6:
        case "6":{
         res = "Sat"
         break;
        }
        case 7:
        case "7":{
         res = "Sun"
         break;
        }
        default:{
         res = "❌"
        }
      }
      return res;
    }
    //tranform num of month to its name
    function pickMonthName(num) {
        var res = ''
      switch(num) {
        case 0:
        case "0":{
         res = "Jan"
         break;
        }
        case 1:
        case "1":{
         res = "Feb"
         break;
        }
        case 2:
        case "2":{
         res = "Mar"
         break;
        }
        case 3:
        case "3":{
         res = "Apr"
         break;
        }
        case 4:
        case "4":{
         res = "May"
         break;
        }
        case 5:
        case "5":{
         res = "Jun"
         break;
        }
        case 6:
        case "6":{
         res = "Jul"
         break;
        }
        case 7:
        case "7":{
         res = "Aug"
         break;
        }
        case 8:
        case "8":{
         res = "Sep"
         break;
        }
        case 9:
        case "9":{
         res = "Oct"
         break;
        }
        case 10:
        case "10":{
         res = "Nov"
         break;
        }
        case 11:
        case "11":{
         res = "Dec"
         break;
        }
        default:{
         res = "❌"
        }
      }
      return res;
    }
    //Here we go!
    setDate()
    setInterval(setTime, 1000)
})
