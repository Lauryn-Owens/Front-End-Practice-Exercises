//allowable digits array
const numberCharacters = [
    '0', '1', '2', '3', '4', '5' , '6' , '7', '8', 
    '9', 'A', 'B', 'C', 'D', 'E', 'F'];

//grab elements
const guessColorBox = document.querySelector('.gameBody__color');
const colorButtons = document.querySelectorAll('.gameBody__guessColorContainer__buttons--guessColor');
const guessColor = generateGuessColor();
//flag variable for showing game results text
let showWinLoseText = false;
const winLoseText = document.querySelector('.gameBody__outcome');
const newGameButton  = document.querySelector('.ameBody__buttons--gameController');

//create hex code colors
function generateGuessColor(){
    //initialize hex color
    let color = '#';


    //populate color string with elements in numberCharacters
    for(let i = 0; i < 6; i++){
        color += numberCharacters[Math.floor(Math.random() * numberCharacters.length)];
    }
    //return populated finished color
    return color;
}

//create a new game
function newGame(){
    //make box background color the generate global guess color
    guessColorBox.style.backgroundColor = guessColor;
    //generate the button text content
      generateColorButtons();
      //don't display game results if the user hasn't played yet
      if(!showWinLoseText){
        winLoseText.style.display = 'none';
      }

}

//generate button text
function generateColorButtons() {
    //create random number so each game the correct button is different/random placement
    const randomNumber = Math.floor(Math.random() * 3);

    //loop through buttons and either give it the value the guessValue(to win the game) or a random hex color
    colorButtons.forEach((currButton, currIdx) => {
            if(currIdx === randomNumber){ 
                currButton.textContent = guessColor;
           }
           else{
              currButton.textContent = generateGuessColor();  
           }
        })
}

//display the win/lose game result text
function playGame(button){
    winLoseText.style.display = 'block';
    if(button.textContent === guessColor){
        winLoseText.textContent = ' You Win!!!';
    }
    else{
        winLoseText.textContent = 'You Lose!!!';
    }
    colorButtons.forEach((currButton) => {
        currButton.disabled = 'true';
    })
}
//on window load create a new game
window.addEventListener('load', () => {
    newGame();
})
//for each button run the playGame function to see if the play guessed correctly
colorButtons.forEach((currButton) => {
    currButton.addEventListener('click', (e) => {
            playGame(e.target)
    })
})
//reload the tab to restart and create a new a new game
document.querySelector('.gameBody__buttons--gameController').addEventListener('click',() =>{
    window.location.reload();
})  