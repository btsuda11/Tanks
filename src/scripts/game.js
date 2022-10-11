import Bullet from "./bullet";
import PlayerTank from "./player_tank";
import EnemyTank from "./enemy_tank";
import Tank from "./tank";
import Wall from "./wall";
import Mine from "./mine";
import Function from "./util";

export default class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.level = 1;
        this.playerTank = new PlayerTank({pos: [150, 650], game: this});
        if (this.level === 1) {
            this.enemyTanks = [new EnemyTank({pos: [1250, 125], game: this, type: 'red'})];
            this.tanks = [this.playerTank].concat(this.enemyTanks);
            this.walls = [new Wall(75, 750, [250, 200]), new Wall(75, 750, [400, 550])];
        } else if (this.level === 2) {
            this.enemyTanks = [new EnemyTank({pos: [1000, 125], game: this, type: 'green'}), new EnemyTank({pos: [1250, 375], game: this, type: 'green'})];
            this.tanks = [this.playerTank].concat(this.enemyTanks);
            this.walls = [new Wall(75, 150, [125, 500]), new Wall(75, 75, [200, 575]), new Wall(75, 150, [1150, 200]), new Wall(75, 75, [1150, 125])];
        }
        this.bullets = [];
        this.mines = [];
        this.cursorPos = [];
        this.missionScreen = document.getElementsByClassName('mission-screen')[0];
        this.missionHeader = document.getElementsByClassName('mission')[0];
        this.enemyTanksHeader = document.getElementsByClassName('enemy-tanks')[0];
        // this.frame = 0;
        // this.music = document.getElementsByClassName('music')[0];
        this.bindEventListeners();
    }

    startLevel() {
        // if this.enemyTanks.length === 0, endLevel => this.level++, startLevel(this.level)
        // this.missionScreen.style.display = 'block';
        // this.music.play();
        this.missionHeader.innerHTML = `Mission ${this.level}`;
        this.enemyTanksHeader.innerHTML = `Enemy Tanks: ${this.enemyTanks.length}`;
        setTimeout(() => {
            this.missionScreen.style.display = 'none';
        }, 10000);
        this.update(this.ctx);
    }

    endLevel() {
        cancelAnimationFrame(this.frameID);
        let missionCleared = document.getElementsByClassName('mission-cleared')[0];
        setTimeout(() => {
            missionCleared.style.display = 'block';
            setTimeout(() => {
                missionCleared.style.display = 'none';
            }, 10000);
            this.level++;
            this.startLevel();
        })
    }

    gameOver() {
        cancelAnimationFrame(this.frameID);
        let missionFailed = document.getElementsByClassName('mission-failed')[0];
        this.state = 'game over';
        missionFailed.style.display = 'block';
        setTimeout(() => {
            missionFailed.style.display = 'none';
        }, 10000);
    }

    add(object) {
        if (object instanceof EnemyTank) {
            this.enemyTanks.push(object);
        } else if (object instanceof Bullet) {
            this.bullets.push(object);
        } else if (object instanceof Mine) {
            this.mines.push(object);
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
        this.step();
        this.draw(ctx);
        // this.frame++;
        this.frameID = requestAnimationFrame(() => this.update(ctx));
    }

    checkCollisions() {
        for (let i = 0; i < this.bullets.length; i++) {
            for (let j = 0; j < this.tanks.length; j++) {
                if (this.bullets[i].hasHit(this.tanks[j])) {
                    this.bullets[i].hits(this.tanks[j]);
                }
            }
            for (let j = 0; j < this.bullets.length; j++) {
                if (this.bullets[i] !== this.bullets[j]) {
                    if (this.bullets[i].hasHit(this.bullets[j])) {
                        this.bullets[i].hits(this.bullets[j]);
                    }
                }
            }
            for (let j = 0; j < this.mines.length; j++) {
                if (this.bullets[i].hasHit(this.mines[j])) {
                    this.bullets[i].hits(this.mines[j]);
                }
            }
        }
    }

    step() {
        this.moveObjects();
        this.checkCollisions();
    }

    remove(object) {
        if (object instanceof Bullet) {
            this.bullets.splice(this.bullets.indexOf(object), 1);
        } else if (object instanceof Tank) {
            if (object instanceof PlayerTank) {
                this.gameOver();
            } else {
                this.enemyTanks.splice(this.enemyTanks.indexOf(object), 1);
            }
            this.tanks.splice(this.tanks.indexOf(object), 1);
            if (this.enemyTanks.length === 0) {
                this.endLevel();
            }
        } else if (object instanceof Mine) {
            console.log(this.mines, 'mines');
            console.log(this.mines.indexOf(object), 'mine index')
            this.mines.splice(this.mines.indexOf(object), 1);
        }
    }

    allObjects() {
        return [].concat(this.tanks, this.bullets, this.walls, this.mines);
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
        document.addEventListener('keydown', e => {
            if (e.code === 'Space') this.playerTank.placeMine();
        });
    }

    removeEventListeners() {

    }
}