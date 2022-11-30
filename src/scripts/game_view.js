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
        document.getElementById('play-again-btn').addEventListener('click', this.restart);
        document.getElementById('return-home-btn').addEventListener('click', this.returnHome);
        this.game.startLevel();
    }

    restart() {
        this.music[0].currentTime = 0;
        this.music[2].pause();
        this.music[2].currentTime = 0;
        this.toggleScreen('end-screen', false);
        this.toggleScreen('game-canvas', true);
    }

    returnHome() {
        this.music[2].pause();
        this.music[2].currentTime = 0;
        this.toggleScreen('end-screen', false);
        this.toggleScreen('game-canvas', false);
        this.toggleScreen('start-screen', true);
    }

    toggleScreen(id, toggle) {
        let element = document.getElementById(id);
        let display = (toggle) ? 'flex' : 'none';
        element.style.display = display;
    }
}