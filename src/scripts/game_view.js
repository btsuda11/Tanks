import Game from "./game";

export default class GameView {
    constructor(ctx) {
        this.game = new Game();
        this.ctx = ctx;
    }

    start() {
        this.bindKeyHandlers();
        setInterval(() => {
            this.game.draw(this.ctx);
        }, 20);
    }

    bindKeyHandlers() {
        key('w', () => this.game.playerTank.move([0, -4]));
        key('a', () => this.game.playerTank.move([-4, 0]));
        key('s', () => this.game.playerTank.move([0, 4]));
        key('d', () => this.game.playerTank.move([4, 0]));
    }
}