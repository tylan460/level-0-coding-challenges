function areaOfTriangle(num1, num2, num3) {
  var sp = (num1 + num2 + num3)/2;
  var area = Math.sqrt(sp * (sp - num1)*(sp - num2)*(sp - num3));
return area;
}
console.log(areaOfTriangle(4, 3, 5)) 