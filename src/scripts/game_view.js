import Game from "./game";

export default class GameView {
    constructor(ctx) {
        this.game = new Game();
        this.ctx = ctx;
        this.cursorPos = [];
        // this.missionScreen = document.getElementsByClassName('mission-screen')[0];
    }
    
    start() {
        this.game.update(this.ctx);
    }
}