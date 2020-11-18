// max characters
var max = 140;
// countdown
$('#wordsRemaining').html(max + " Characters Remaining");
// textarea input for characters | counter is the id
//Keyup method and new function
$('#counter').keyup(function(){
    // New variable to produce a length
    var textLength = $('#counter').val().length;
    // New varible to decrement the characters
    var countingDown = max - textLength;

    // Now the characters (not words) are counting down but have a -negative number when it goes past 0
    $('#wordsRemaining').html(countingDown + " Characters Remaining"); 

});
