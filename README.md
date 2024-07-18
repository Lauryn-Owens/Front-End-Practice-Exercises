Guess the Color Game
- This project is a simple browser-based game where the user has to guess the correct hex color code displayed on a colored box. The game dynamically generates hex color codes and updates the UI based on user interaction.

Features
- Randomly generates a hex color code for the user to guess.
- Displays the generated color as the background color of a box.
- Provides multiple buttons with different hex color codes, one of which is the correct code.
- Displays a win/lose message based on the user's selection.
- Allows the user to start a new game.

Getting Started
Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Safari, Edge).
Installation
- Clone the repository to your local machine:

bash
Copy code
- git clone https://github.com/yourusername/guess-the-color-game.git
Navigate to the project directory:

bash
Copy code
- cd guess-the-color-game
- Open the index.html file in your preferred web browser to start the game.

Running the Game
- On loading the page, a new game will automatically start, and a color box will display the generated color.
- Several buttons below the box will display different hex color codes. Click on the button that you think matches the color displayed in the box.
- A message will be displayed to indicate whether you guessed correctly ("You Win!!!") or incorrectly ("You Lose!!!").
- Click the "New Game" button to reload the page and start a new game.

Code Overview
- The main functionality of the game is implemented in JavaScript within the script.js file. Here is an overview of the key functions:

generateHexColor(): Generates a random hex color code.
initializeGame(): Initializes the game
