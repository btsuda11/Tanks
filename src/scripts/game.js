import Bullet from "./bullet";
import Tank from "./tank";
import Function from "./util"

export default class Game {
    constructor() {
        this.level = 1;
        this.playerTank = new Tank({pos: [100, 100], game: this, type: 'player'});
        this.enemyTanks = [];
        this.bullets = [];
        this.cursorPos = [];
        this.bindEventListeners();
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
        return 700;
    }

    mouseOnPage(e) {
        // console.log(e)
        this.cursorPos = [e.clientX, e.clientY];
        // console.log(this.cursorPos);
    }

    bindEventListeners() {
        document.addEventListener('mousemove', (e) => this.mouseOnPage(e));
        [].concat(this.playerTank, this.enemyTanks).forEach(tank => {
            document.addEventListener('keydown', e => {
                if (e.code === 'KeyA') tank.vel[0] = -1;
                if (e.code === 'KeyD') tank.vel[1] = 1;
                if (e.code === 'KeyW') tank.vel[2] = -1;
                if (e.code === 'KeyS') tank.vel[3] = 1;
            });
            document.addEventListener('keyup', e => {
                if (e.code === 'KeyA') tank.vel[0] = 0;
                if (e.code === 'KeyD') tank.vel[1] = 0;
                if (e.code === 'KeyW') tank.vel[2] = 0;
                if (e.code === 'KeyS') tank.vel[3] = 0;
            });
            document.addEventListener('click', tank.shoot.myThrottle(tank, 2000));
        })
    }
}