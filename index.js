
var din=Math.random();
din=din*6;
din=Math.floor(din)+1;
console.log(din);
var rm="dice" + din + ".png";
var r="images/"+ rm;
var d1=document.querySelectorAll("img")[0];
d1.setAttribute("src",r);

var din1=Math.random();
din1=din1*6;
din1=Math.floor(din1)+1;
console.log(din1);
var rm1="dice" + din1 + ".png";
var r1="images/"+ rm1;
var d2=document.querySelectorAll("img")[1];
d2.setAttribute("src",r1);

if(r >r1 )
document.querySelector("h1").innerHTML ="player 1 wins";
else if(r < r1 )
document.querySelector("h1").innerHTML ="player 2 wins";
else
document.querySelector("h1").innerHTML ="Draw,try agin";
