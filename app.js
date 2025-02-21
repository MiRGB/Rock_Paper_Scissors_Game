// Choices
const choices = ['rock', 'paper', 'scissors'];

// Variables for win/loss count
let wins = 0;
let losses = 0;

// Function to generate computer's choice
function computerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to check the result
function getResult(user, computer) {
    if (user === computer) {
        return 'Draw!';
    } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        wins++;
        return 'You Win!';
    } else {
        losses++;
        return 'You Lose!';
    }
}

// Function to update the UI and game result
function playGame(userChoice) {
    const compChoice = computerChoice(); // Computer's choice
    const result = getResult(userChoice, compChoice); // Game result

    // Update the UI
    document.getElementById('user-choice').textContent = userChoice;
    document.getElementById('computer-choice').textContent = compChoice;
    document.getElementById('result').textContent = result;

    // Update the win/loss count on the UI
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
}

// Add event listeners to the images
document.getElementById('rock').addEventListener('click', function() {
    playGame('rock');
});

document.getElementById('paper').addEventListener('click', function() {
    playGame('paper');
});

document.getElementById('scissors').addEventListener('click', function() {
    playGame('scissors');
});

// Find the audio element
const music = document.getElementById('background-music');

// Set the volume (0.0 - 1.0)
music.volume = 0.2;

// Find the button element and the text spans
const startMusicButton = document.getElementById('start-music');
const playText = startMusicButton.querySelector('.play-text');
const stopText = startMusicButton.querySelector('.stop-text');

// Add event listener to the button
startMusicButton.addEventListener('click', function() {
    // Toggle play/pause of the music
    if (music.paused) {
        music.play(); // Play the music if it's paused
        playText.classList.add('hidden'); // Hide "Play Music"
        stopText.classList.remove('hidden'); // Show "Stop Music"
    } else {
        music.pause(); // Pause the music if it's playing
        playText.classList.remove('hidden'); // Show "Play Music"
        stopText.classList.add('hidden'); // Hide "Stop Music"
    }
});