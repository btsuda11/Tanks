import Tank from "./tank";

export default class Game {
    constructor() {
        this.level = 1;
        this.playerTank = new Tank({pos: [100, 100], vel: [0, 0], color: 'royalblue'});
        this.enemyTanks = [];
    }

    update(ctx) {
        ctx.clearRect(0, 0, 1000, 750);
        this.allObjects().forEach(object => {
            object.move();
            object.draw(ctx);
        });
        requestAnimationFrame(() => this.update(ctx));
    }

    allObjects() {
        return this.enemyTanks.slice().concat(this.playerTank);
    }
}