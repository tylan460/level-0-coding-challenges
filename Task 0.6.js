function maxnum(num1, num2, num3) {
/*  if (num1 > num2 && num1 > num3) {
  return num1;
} else if (num2 > num1 && num2 > num3) {
  return num2;
} else  {
  return num3;
}  initial task instructions completed*/

 
 var newMax = arguments[0];
 for (var i = 0 ; i < arguments.length; i++ ) {
   if (arguments[i] > newMax) {
     newMax = arguments[i];
   }
 }
return newMax
}
console.log(maxnum(15, 18, 19, 66, 94))