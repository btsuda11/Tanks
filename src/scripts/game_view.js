import Game from "./game";

export default class GameView {
    constructor(ctx) {
        this.game = new Game();
        this.ctx = ctx;
        this.cursorPos = [];
    }
    
    start() {
        this.game.update(this.ctx);
    }
}