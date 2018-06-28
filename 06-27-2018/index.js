
var myGuess = document.getElementById('my_guess'),
    guessButton = document.getElementById('guess_button'),
    MIN = 1,
    MAX = 100,
    theAnswer = Math.floor((Math.random() * (MAX-MIN+1)) + MIN);

document.getElementById('minimum').innerHTML = MIN;
document.getElementById('maximum').innerHTML = MAX;

guessButton.addEventListener('click', function(event){
    var myGuessValue = parseInt(myGuess.value);
    if (myGuessValue == theAnswer) {
        alert(`You guess it right! \nThe correct number is ${theAnswer}!!!`);   
    } else if (myGuessValue < MIN || myGuessValue > MAX) {
        alert(`You must enter a number between ${MIN} and ${MAX}!`)
    } else if (myGuessValue > theAnswer) {
        alert('Your guessing number is too high compare to the correct number!')
    } else if (myGuessValue < theAnswer) {
        alert('Your guessing number is too low compare to the correct number!')
    } else {
        alert('I\'m sorry, that is incorrect!')
    }
}, false)