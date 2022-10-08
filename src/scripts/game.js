import Bullet from "./bullet";
import PlayerTank from "./player_tank";
import EnemyTank from "./enemy_tank";
import Tank from "./tank";
import Function from "./util";

export default class Game {
    constructor() {
        this.level = 1;
        this.playerTank = new PlayerTank({pos: [100, 100], game: this});
        this.enemyTanks = [new EnemyTank({pos: [700, 700], game: this, type: 'red'})];
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

    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        this.allObjects().forEach(object => {
            object.draw(ctx);
        });
    }

    moveObjects() {
        this.allObjects().forEach(object => {
            object.move();
        });
    }

    update(ctx) {
        this.moveObjects();
        // this.checkCollisions();
        this.draw(ctx);
        requestAnimationFrame(() => this.update(ctx));
    }

    checkCollisions() {
        for (let i = 0; i < this.bullets.length; i++) {
            for (let j = 0; j < this.allObjects().length; j++) {
                console.log(this.bullets);
                if (this.bullets[i] !== this.allObjects()[i]) {
                    console.log(this.allObjects());
                    if (this.bullets[i].hasHit(this.allObjects()[i])) {
                        this.bullets[i].hits(this.allObjects()[i]);
                    }
                }
            }
        }
    }

    remove(object) {
        if (object instanceof Bullet) {
            this.bullets.splice(this.bullets.indexOf(object), 1);
        } else if (object instanceof Tank) {
            this.enemyTanks.splice(this.enemyTanks.indexOf(object), 1);
        }
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