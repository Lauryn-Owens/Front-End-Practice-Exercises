// Allowable digits array for hex colors
const numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

// Function to generate a random hex color
function generateHexColor() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += numberCharacters[Math.floor(Math.random() * numberCharacters.length)];
    }
    return color;
}

// Function to initialize game elements and logic
function initializeGame() {
    // Grab elements
    const guessColorBox = document.querySelector('.gameBody__color');
    const colorButtons = document.querySelectorAll('.gameBody__guessColorContainer__buttons--guessColor');
    const winLoseText = document.querySelector('.gameBody__outcome');
    const newGameButton = document.querySelector('.gameBody__buttons--gameController');

    // Generate the guess color
    const guessColor = generateHexColor();
    let showWinLoseText = false;

    // Function to start a new game
    function newGame() {
        guessColorBox.style.backgroundColor = guessColor;
        generateColorButtons();
        if (!showWinLoseText) {
            winLoseText.style.display = 'none';
        }
    }

    // Function to generate button text with colors
    function generateColorButtons() {
        const randomNumber = Math.floor(Math.random() * colorButtons.length);
        colorButtons.forEach((currButton, currIdx) => {
            if (currIdx === randomNumber) {
                currButton.textContent = guessColor;
            } else {
                currButton.textContent = generateHexColor();
            }
        });
    }

    // Function to handle the game logic on button click
    function playGame(button) {
        winLoseText.style.display = 'block';
        if (button.textContent === guessColor) {
            winLoseText.textContent = 'You Win!!!';
        } else {
            winLoseText.textContent = 'You Lose!!!';
        }
        colorButtons.forEach(currButton => currButton.disabled = true);
        showWinLoseText = true;
    }

    // Set up event listeners
    window.addEventListener('load', newGame);
    colorButtons.forEach(currButton => currButton.addEventListener('click', (e) => playGame(e.target)));
    newGameButton.addEventListener('click', () => window.location.reload());
}

// Initialize the game when the script loads
initializeGame();
