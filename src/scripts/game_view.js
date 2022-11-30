import Game from "./game";

export default class GameView {
    constructor(ctx) {
        this.ctx = ctx;
        this.music = document.getElementsByClassName('music');
    }
    
    startGame() {
        this.game = new Game(this.ctx);
        this.game.gameOff = false;
        this.game.paused = false;
        this.music[0].play();
        document.getElementById('play-again-btn').addEventListener('click', this.restart);
        document.getElementById('return-home-btn').addEventListener('click', this.returnHome);
        this.game.startLevel();
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