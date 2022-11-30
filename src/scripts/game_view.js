import Game from "./game";

export default class GameView {
    constructor(ctx) {
        this.ctx = ctx;
        this.music = document.getElementsByClassName('music');
    }
    
    startGame() {
        this.game = new Game(this.ctx, this);
        this.music[0].play();
        this.game.startLevel();
    }

    gameLost() {
        this.music[0].pause();
        this.music[2].play();
        this.music[0].currentTime = 0;
        this.game.gameOver = true;

        GameView.toggleScreen('game-mission', false);
        GameView.toggleScreen('mission-failed', true);

        document.getElementById('play-again-btn').addEventListener('click', this.restart.bind(this));
        document.getElementById('return-home-btn').addEventListener('click', this.returnHome.bind(this));
        
        setTimeout(() => {
            GameView.toggleScreen('mission-failed', false);
            GameView.toggleScreen('end-screen', true);
        }, 5000);
    }

    restart() {
        this.music[0].currentTime = 0;
        this.music[2].pause();
        this.music[2].currentTime = 0;
        GameView.toggleScreen('end-screen', false);
        GameView.toggleScreen('game-canvas', true);
        this.startGame();
    }

    returnHome() {
        this.music[2].pause();
        this.music[2].currentTime = 0;
        GameView.toggleScreen('end-screen', false);
        GameView.toggleScreen('game-canvas', false);
        GameView.toggleScreen('start-screen', true);
    }

    static toggleScreen(id, toggle) {
        let element = document.getElementById(id);
        let display = (toggle) ? 'flex' : 'none';
        element.style.display = display;
    }
}