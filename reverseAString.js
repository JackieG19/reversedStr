
function reverseString(str) {
 var strArray = str.split("");
// console.log(strArray);
  //console.log("after split:");
  
  strArray.reverse();
  //console.log(strArray);
  //console.log("after reverse");
  
  var reversedStr = strArray.join("");
  //console.log(reversedStr);
  //console.log("joining");
  return reversedStr;
}

reverseString("hello");

