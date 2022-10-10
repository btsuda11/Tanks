import Bullet from "./bullet";
import PlayerTank from "./player_tank";
import EnemyTank from "./enemy_tank";
import Tank from "./tank";
import Wall from "./wall";
import Function from "./util";

export default class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.level = 1;
        this.playerTank = new PlayerTank({pos: [150, 650], game: this});
        this.enemyTanks = [new EnemyTank({pos: [1250, 125], game: this, type: 'red'})];
        this.bullets = [];
        this.walls = [new Wall(75, 750, [250, 200]), new Wall(75, 750, [400, 550])];
        this.cursorPos = [];
        this.missionScreen = document.getElementsByClassName('mission-screen')[0];
        this.bindEventListeners();
    }

    startLevel() {
        // if this.enemyTanks.length === 0, endLevel => this.level++, startLevel(this.level)
        // this.missionScreen.style.display = 'block';
        setTimeout(() => {
            this.missionScreen.classList.remove('mission-screen');
            this.missionScreen.classList.add('hidden');
        }, 10000)
        this.update(this.ctx);
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
        [].concat(this.playerTank, this.enemyTanks, this.bullets).forEach(object => {
            object.move();
        });
    }

    update(ctx) {
        this.moveObjects();
        this.checkCollisions();
        this.draw(ctx);
        requestAnimationFrame(() => this.update(ctx));
    }

    checkCollisions() {
        for (let i = 0; i < this.bullets.length; i++) {
            // for (let j = 0; j < this.allObjects().length; j++) {
            //     // console.log(this.bullets);
            //     if (this.bullets[i] !== this.allObjects()[i]) {
            //         // console.log(this.allObjects());
            //         if (this.bullets[i].hasHit(this.allObjects()[i])) {
            //             this.bullets[i].hits(this.allObjects()[i]);
            //         }
            //     }
            // }
            // console.log(this.bullets[i].hasHit(this.enemyTanks[0]));
            if (this.bullets[i].hasHit(this.enemyTanks[0])) {
                this.bullets[i].hits(this.enemyTanks[0]);
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
        return [].concat(this.playerTank, this.enemyTanks, this.bullets, this.walls);
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