
$(document).ready(function()


{$("#one").on("click",function(){
$("#one").val(4)
alert("yes");})

var newDiv = $("<div>");
newDiv.text("Good Luck!");
$(".jumbotron").append(newDiv);





var randomNumber = Math.floor(Math.random() * 120) +19;


$("#random").text(randomNumber);

console.log("You won!");   



var yourScore = "imageTotal";

});








 