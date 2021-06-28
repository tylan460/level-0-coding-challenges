function maxnum(...arguments) {

 var newMax = arguments[0];
 for (var i = 0 ; i < arguments.length; i++ ) {
   if (arguments[i] > newMax) {
     newMax = arguments[i];
   }
 }
return newMax
}
console.log(maxnum(15, 18, 19, 66, 94))
