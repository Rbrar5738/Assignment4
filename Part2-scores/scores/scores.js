"use strict";

const displayScores = (scores, scoresString) => {
    //Calculating the average of entered scores in the text field
    let totalScore = 0;
    for (let score of scores) {
        totalScore += score;
    }
    const scoreAvg = totalScore / scores.length;
  
    //Displaying the data enetered in scores textArea and acr_score Label
    $("#scores").val(scoresString.join("\n"));
    $("#avr_score").text(scoreAvg.toFixed(1));
	
};

$(document).ready( () => {
     // Intializing arrays values for score and strings 
    const scores = [];
    const scoresString = [];
    $("#add_button").click( () => {
            const first_name = $("#first_name").val();
            const last_name = $("#last_name").val();
            const score = parseInt($("#score").val());

            if (score && first_name && last_name) {
                //Saving the data in the array
                scores.push(score);
                scoresString.push(`${last_name}, ${first_name}: ${score}`);
          
                //Calling the displayScores function for calculations
                displayScores(scores, scoresString);
        
        
        // get the add form ready for next entry
        $("#first_name").val( "" );
        $("#last_name").val( "" );
        $("#score").val( "" );
        $("#first_name").focus();
    }else{
        alert("Please enter valid values in all firstname, lastname and scores fields");
    }
    }); // end click()
    
    $("#clear_button").click( () => {

        //Clearing the data in the score and scorsSting variables
        scores.length = 0;
        scoresString.length = 0;

        // remove the score data from the web page
        $("#avr_score").val( "" );
        $("#scores").val( "" );

        $("#first_name").focus();
    }); // end click()
       
    $("#sort_button").click( () => {
         //Sorting by students lastname
        scoresString.sort();
          //Redisplaying the score data after sorting
        displayScores(scores, scoresString);

    }); // end click()
    
    $("#first_name").focus();
}); // end ready()