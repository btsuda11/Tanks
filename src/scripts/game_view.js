import Game from "./game";

export default class GameView {
    constructor(ctx) {
        this.ctx = ctx;
        this.music = document.getElementsByClassName('music');
        document.getElementById('mute-btn').addEventListener('click', this.toggleMute.bind(this));
        document.getElementById('pause-btn').addEventListener('click', this.togglePause.bind(this));
        document.getElementById('play-again-btn').addEventListener('click', this.restart.bind(this));
        document.getElementById('return-home-btn').addEventListener('click', this.returnHome.bind(this));
    }
    
    startGame() {
        this.game = new Game(this.ctx, this);
        this.game.startLevel();
    }

    gameLost() {
        this.music[0].pause();
        this.music[2].play();
        this.music[0].currentTime = 0;
        this.game.gameOver = true;

        GameView.toggleScreen('game-mission', false);
        GameView.toggleScreen('mission-failed', true);
        
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

    togglePause() {
        if (this.game.paused) {
            const currentSound = Array.from(this.music).find(sound => sound.paused);
            this.game.paused = false;
            currentSound.play();
        } else {
            const currentSound = Array.from(this.music).find(sound => !sound.paused);
            this.game.paused = true;
            currentSound.pause();
        }
    }

    toggleMute() {
        const currentSound = Array.from(this.music).find(sound => !sound.paused);
        if (currentSound) currentSound.muted = !currentSound.muted;
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