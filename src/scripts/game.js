import Tank from "./tank";

export default class Game {
    constructor() {
        this.level = 1;
        this.playerTank = new Tank({pos: [100, 100], color: 'royalblue'});
        this.enemyTanks = [];
    }

    draw(ctx) {
        ctx.clearRect(0, 0, 1000, 750);
        this.allObjects().forEach(object => {
            object.draw(ctx);
        });
    }

    allObjects() {
        return this.enemyTanks.slice().concat(this.playerTank);
    }
}