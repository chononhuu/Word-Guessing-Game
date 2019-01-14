//win count starts from 0
var wins = 0;
var game = function () {
    newGame();
}

var newGame = function () {
    //guess word list stored in array
    var wordsArray = ["washington", "oregon", "california", "idaho", "nevada", "montana", "utah", "arizona", "wyoming", "colorado", "new mexico"];
    //select random word from wordArray
    var selectedWords = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    //puts letters in selectedWords and splitting into array
    var letters = selectedWords.split('');
    //stores right guessed letters in array
    var rightGuess = [];
    //stores wrong guessed letters in array
    var wrongGuess = [];
    //total attempts, if attempts reach 0 game will over
    var attempts = 13;
    //letter counter
    var letterCount = letters.length;
    //right guessed letters counter
    var rightGuessLetterCount = 0;

    
    for (var i = 0; i < selectedWords.length; i++) {
        //swapping selected word's letters to _ 
        rightGuess.push('_ ');
        // if player select right letter reveal letter
        document.getElementById('rightGuess').innerHTML = rightGuess.join('');
        // display attempt status after every key pressed
        document.getElementById('attempts').innerHTML = attempts;
        // if selected letter(or any other key) wrong store them into wrongGuess
        document.getElementById('wrongGuess').innerHTML = wrongGuess;
    }
    //store players key input into playerGuess
    document.onkeyup = function(event) {
        var playerGuess = event.key;

        //if selected letter's index greater than -1 
        if (letters.indexOf(playerGuess) > -1) {
            
            for (var i = 0; i < letterCount; i++) {
                //if player guessed right letter from selected word then reveal letter and add 1 on right guessed letters
                if (letters[i] === playerGuess) {
                    rightGuess[i] = playerGuess;
                    document.getElementById('rightGuess').innerHTML = rightGuess.join('');
                    rightGuessLetterCount++;
                }
            }
        }
        // losses attempts and stores wrong guessed letters
        else {
            attempts--;
            wrongGuess.push(playerGuess);
            document.getElementById('attempts').innerHTML = attempts;
            document.getElementById('wrongGuess').innerHTML = wrongGuess;
        }
        // if right guessed letters count equal to selected word's letter count add 1 to total win number and display message.
        if (rightGuessLetterCount === letters.length) {
            wins++;
            document.getElementById('wins').innerHTML = wins;
            document.getElementById('my-4').innerHTML = "You Win! Word: " + letters.join('');
            //start new game
            game();
        }
        // if there is no more attempts left display message
        if (attempts === 0) {
            document.getElementById('my-4').innerHTML = "You Lost! Word: " + letters.join('');
            //start new game
            game();
        }
    }
}

newGame();