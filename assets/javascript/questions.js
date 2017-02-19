var correctAnswers = ["Austin","Augusta","Salem","Trenton","in the book"]
var userAnswers = []



$(document).ready(function(){
        $(".question-box").hide();
})

$("#start").on("click", function() {   
     $(".question-box").show();

 
});

$(".Submit-button").on("click", function(e){
    e.preventDefault();
         $('#radio-answers input:checked').each(function() {
            userAnswers.push($(this).attr('value'))


        })
        console.log(userAnswers)








for (var i = correctAnswers.length - 1; i >= 0; i--) {

        if( correctAnswers[i]= userAnswers[i]){
            alert( "you won");


        }
        else{
             alert("you loss");

        }
            };
    });

