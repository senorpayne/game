
var score = 0;
var target =0;
var wins = 0;
var losses = 0;

$(document).ready(function()
 

{$("#one").on("click",function(){
 var rand0 = Math.floor(Math.random()*12)+1;
 score+=rand0; 
 $("#yourScore").text(score);

alert("yes");})


$("#two").on("click",function(){
 var rand1 = Math.floor(Math.random()*12)+1;
 score+=rand1; 
 $("#yourScore").text(score);
alert("yes");})


$("#three").on("click",function(){
 var rand2 = Math.floor(Math.random()*12)+1;
 score+=rand2;
 $("#yourScore").text(score);
alert("yes");})

$("#four").on("click",function(){
 var rand3 = Math.floor(Math.random()*12)+1;
 score+=rand3;
 $("#yourScore").text(score);
alert("yes");})


var newDiv = $("<div>");
newDiv.text("Good Luck!");
$(".jumbotron").append(newDiv);



var randomNumber = Math.floor(Math.random() * 120) +19;


$("#random").text(randomNumber);

console.log("You won!");   








});








 