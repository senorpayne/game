
$(document).ready(function()


{$("#one").on("click",function(){
 var rand = Math.floor(Math.random()*4)+1;
 $("#yourScore").text(rand);
alert("yes");})


$("#two").on("click",function(){
 var rand = Math.floor(Math.random()*58)+1;
 $("#yourScore").text(rand);
alert("yes");})


$("#three").on("click",function(){
 var rand = Math.floor(Math.random()*15)+1;
 $("#yourScore").text(rand);
alert("yes");})

$("#four").on("click",function(){
 var rand = Math.floor(Math.random()*25)+1;
 $("#yourScore").text(rand);
alert("yes");})




var newDiv = $("<div>");
newDiv.text("Good Luck!");
$(".jumbotron").append(newDiv);






var randomNumber = Math.floor(Math.random() * 120) +19;


$("#random").text(randomNumber);

console.log("You won!");   



var yourScore = "imageTotal";

});








 