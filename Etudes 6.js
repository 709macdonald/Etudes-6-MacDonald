class MyTime {
   constructor(hours, minutes, seconds) {
     this.hours = hours
     this.minutes = minutes
     this.seconds = seconds
     var timeArray =[MyTime]
   }

 fromString(time_string) {
     let parts = time_string.split(':'),
         hours = parseInt(parts[0], 10),
         minutes = parseInt(parts[1], 10),
         seconds = parseInt(parts[2], 10);

     return new MyTime(hours, minutes, seconds);
   }

    toString(){
      return (this.hours + ":" + this.minutes + ":" + this.seconds);
    }

    compare(){
      timeArray.sort(MyTime.compare)
     }

     isBetween(){
       timeArray.sort
       if ((MyDate >= timeArray[0]) && (MyDate <= timeArray[timeArray.length])){
         console.log("True")
       }
       else{
         console.log("False")
       }
     }
  }

let newTime = new MyTime(21,3,17)
let anotherTime = new MyTime(11,2,14)
let onemoreTime = new MyTime(9,8,2)
console.log(newTime.seconds)
console.log(newTime.fromString("21:02:17"))
console.log(newTime.toString)
console.log(newTime.compare)
console.log(newTime.inBetween)
