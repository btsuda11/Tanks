import Bullet from "./bullet";
import Tank from "./tank";

export default class Game {
    constructor() {
        this.level = 1;
        this.playerTank = new Tank({pos: [100, 100], vel: [0, 0], game: this});
        this.enemyTanks = [];
        this.bullets = new Bullet({vel: [0, 0], tank: this.playerTank});
    }

    add(object) {
        if (object instanceof Tank) {
            this.enemyTanks.push(object);
        } else if (object instanceof Bullet) {
            this.bullets.push(object);
        }
    }

    update(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        this.allObjects().forEach(object => {
            object.move();
            object.draw(ctx);
        });
        requestAnimationFrame(() => this.update(ctx));
    }

    allObjects() {
        return [].concat(this.playerTank, this.enemyTanks, this.bullets);
    }

    static get DIM_X() {
        return 1000;
    }

    static get DIM_Y() {
        return 750;
    }
}