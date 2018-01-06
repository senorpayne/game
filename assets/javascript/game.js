
var score = 0;
var target =0;
var wins = 0;
var losses = 0;
$(document).ready(function()


{$("#one").on("click",function(){
 var rand0 = Math.floor(Math.random()*12)+1;
 score+=rand0; 
 $("#yourScore").text(score);
scorecheck();
})


$("#two").on("click",function(){
 var rand1 = Math.floor(Math.random()*12)+1;
 score+=rand1; 
 $("#yourScore").text(score);
 scorecheck();
})


$("#three").on("click",function(){
 var rand2 = Math.floor(Math.random()*12)+1;
 score+=rand2;
 $("#yourScore").text(score);
 scorecheck();
})

$("#four").on("click",function(){
 var rand3 = Math.floor(Math.random()*12)+1;
 score+=rand3;
 $("#yourScore").text(score);
 scorecheck();
})


var newDiv = $("<div>");
newDiv.text("Good Luck!");
$(".jumbotron").append(newDiv);



var randomNumber = Math.floor(Math.random() * 120) +19;


$("#random").text(randomNumber);


function scorecheck(){

    if ( score > randomNumber)
    alert("Game Over! Please Refresh and try again");
    losses++

    if (score === randomNumber)
    alert("You Win. You have great luck!");

}

function win(){

    
}
console.log("You won!");   








});








 