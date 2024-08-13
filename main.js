console.log('Hello World!');

var hour=document.getElementById("hr");
var minute=document.getElementById("mm")
var second =document.getElementById("sec");

let date=new Date();
let hr=date.getHours();
let mm=date.getMinutes();
let sec=date.getSeconds();
var hrRotation=hr*30 + mm/2;
var mmRotation=mm*6;
var secRotation=sec*6;

console.log(secRotation);

hour.style.transform=`rotate(${hrRotation}deg)`;
minute.style.transform=`rotate(${mmRotation}deg)`
second.style.transform=`rotate(${secRotation}deg)`;
  
setInterval(function(){
  
let date=new Date();
let hr=date.getHours();
let mm=date.getMinutes();
let sec=date.getSeconds();
var hrRotation=hr*30 + mm/2;
var mmRotation=mm*6;
var secRotation=sec*6;

console.log(secRotation);

hour.style.transform=`rotate(${hrRotation}deg)`;
minute.style.transform=`rotate(${mmRotation}deg)`
second.style.transform=`rotate(${secRotation}deg)`




},1000);