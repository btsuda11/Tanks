import Bullet from "./bullet";
import PlayerTank from "./player_tank";
import EnemyTank from "./enemy_tank";
import Function from "./util";

export default class Game {
    constructor() {
        this.level = 1;
        this.playerTank = new PlayerTank({pos: [100, 100], game: this});
        this.enemyTanks = [];
        this.bullets = [];
        this.cursorPos = [];
        this.bindEventListeners();
    }

    add(object) {
        if (object instanceof EnemyTank) {
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
        return window.innerWidth;
    }

    static get DIM_Y() {
        return window.innerHeight;
    }

    mouseOnPage(e) {
        // console.log(e)
        this.cursorPos = [e.clientX, e.clientY];
        // console.log(this.cursorPos);
    }

    bindEventListeners() {
        document.addEventListener('mousemove', (e) => this.mouseOnPage(e));
        document.addEventListener('keydown', e => {
                if (e.code === 'KeyA') this.playerTank.vel[0] = -1;
                if (e.code === 'KeyD') this.playerTank.vel[1] = 1;
                if (e.code === 'KeyW') this.playerTank.vel[2] = -1;
                if (e.code === 'KeyS') this.playerTank.vel[3] = 1;
        });
        document.addEventListener('keyup', e => {
                if (e.code === 'KeyA') this.playerTank.vel[0] = 0;
                if (e.code === 'KeyD') this.playerTank.vel[1] = 0;
                if (e.code === 'KeyW') this.playerTank.vel[2] = 0;
                if (e.code === 'KeyS') this.playerTank.vel[3] = 0;
        });
        document.addEventListener('click', this.playerTank.shoot.myThrottle(this.playerTank, 2000));
    }
}