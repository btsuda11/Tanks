import Game from "./scripts/game"
import GameView from "./scripts/game_view";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game-canvas');
    const canvasContainer = document.getElementById('canvas-container')
    canvas.height = Game.DIM_Y;
    canvas.width = Game.DIM_X;
    const ctx = canvas.getContext('2d');

    const startGame = () => {
        const gameView = new GameView(ctx);
        gameView.startGame();
    }

    const startScreen = document.getElementById('start-screen');
    const instructionsScreen = document.getElementById('instructions');

    const showInstructions = () => {
        startScreen.style.display = 'none';
        instructionsScreen.style.display = 'flex';
    }

    const startButton = document.getElementById('start-btn');
    startButton.addEventListener('click', startGame);

    const instructionsButton = document.getElementById('instructions-btn');
    instructionsButton.addEventListener('click', showInstructions);

    instructionsScreen.addEventListener('click', () => {
        instructionsScreen.style.display = 'none';
        startScreen.style.display = 'flex';
    });
})