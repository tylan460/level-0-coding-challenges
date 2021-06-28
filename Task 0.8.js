function convertNum(num) {
  var hour = num / 60;
  hour = Math.floor(hour);
  var minutes = num % 60;
   if (minutes == 1) {
    return hour + " " + "hours, " + " " + minutes + " " + "minute";
 } else if (num < 60) {
   return hour + " " + "hours, " + " " + minutes + " " + "minutes";
 } else if (hour == 1) {
    return hour + " " + "hour, " + " "  + minutes + " " + "minutes";
  } else if (hour > 1) {
    return hour + " " + "hours, " + " "  + minutes + " " + "minutes";
}
}
console.log(convertNum(121))
