

export default class GameView {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
    }

    start() {
        this.bindKeyHandlers();
        setInterval
    }

    bindKeyHandlers() {
        key('w', () => this.game.tank.move([0, -2]));
        key('a', () => this.game.tank.move([-2, 0]));
        key('s', () => this.game.tank.move([0, 2]));
        key('d', () => this.game.tank.move([2, 0]));
    }
}