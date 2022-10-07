import Game from "./game";

export default class GameView {
    constructor(ctx) {
        this.game = new Game();
        this.ctx = ctx;
    }
    
    start() {
        this.game.update(this.ctx);
    }

    
}