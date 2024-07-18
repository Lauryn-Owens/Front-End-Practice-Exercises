const numberCharacters = [
    '0', '1', '2', '3', '4', '5' , '6' , '7', '8', 
    '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const guessColorBox = document.querySelector('.gameBody__color');
const colorButtonsContainer = document.querySelector('.gameBody__guessColorContainer');
const guessColor = generateGuessColor();
let showWinLoseText = false;
const winLoseText = document.querySelector('.gameBody__outcome');

function generateGuessColor(){
    let color = '#';
    
    for(let i = 0; i < 6; i++){
        color += numberCharacters[Math.floor(Math.random() * numberCharacters.length)];
    }
    return color;
}
window.addEventListener('load', () => {
       newGame();
})
function newGame(){
    guessColorBox.style.backgroundColor = guessColor;
      generateColorButtons();
      if(!showWinLoseText){
        winLoseText.style.display = 'none';
      }

}
function colorButtonTemplate (textContent){
    const colorButton = document.createElement('button');
    colorButton.classList.add('gameBody__guessColorContainer__buttons--guessColor');
    colorButton.textContent = textContent;
    colorButton.addEventListener('click', (e) => {
        console.log([e.target.textContent, guessColor])
            playGame(e.target)
    })
    return colorButton;
}
function generateColorButtons() {
    const color =  guessColorBox.style.backgroundColor;
    const randomNumber = Math.floor(Math.random() * 3);

    for(let i = 0; i < 3; i++){
        if(i === randomNumber){ 
             colorButtonsContainer.appendChild(
               colorButtonTemplate(guessColor)
             );
        }
        else{
             colorButtonsContainer.appendChild(
               colorButtonTemplate(generateGuessColor())
             );
        }
    }
}

function playGame(button){
    winLoseText.style.display = 'block';
    if(button.textContent === guessColor){
        winLoseText.textContent += 'Win!!!';
    }
    else{
        winLoseText.textContent += 'Lose!!!';
    }
    setInterval(() =>{
        winLoseText.style.display = 'none';
    }, 1000);
}