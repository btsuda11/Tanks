import Game from "./game";

export default class GameView {
    constructor(ctx) {
        this.ctx = ctx;
        this.game = new Game(this.ctx);
        // this.start();
    }
    
    start() {
        this.game.startLevel();
    }
}