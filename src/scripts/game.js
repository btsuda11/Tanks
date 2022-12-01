import Bullet from "./bullet";
import PlayerTank from "./player_tank";
import EnemyTank from "./enemy_tank";
import Tank from "./tank";
import Mine from "./mine";
import Level from "./level";
import GameView from "./game_view";

export default class Game {
    constructor(ctx, gameView) {
        this.ctx = ctx;
        this.gameView = gameView;
        this.playerTank = new PlayerTank({pos: [Game.DIM_X * 0.10, Game.DIM_Y * 0.80], game: this});
        this.level = new Level(this, 2);
        this.bullets = [];
        this.mines = [];
        this.getDOMElements();
        this.cursorPos = [];
        this.gameOver = false;
        this.paused = false;
        this.levelOver = false;
        this.bindGameKeys = this.bindGameKeys.bind(this);
        this.update = this.update.bind(this);
    }

    resetStats() {
        this.tanks.forEach(tank => {
            tank.vel = [0, 0, 0, 0];
        })
        this.playerTank.bodyPos = [Game.DIM_X * 0.10, Game.DIM_Y * 0.80];
        this.playerTank.barrelPos = [Game.DIM_X * 0.10, Game.DIM_Y * 0.80];
        this.bullets = [];
    }

    startLevel() {
        this.music[0].play();

        this.missionHeader.innerHTML = `Mission ${this.level.level}`;
        this.enemyTanksHeader.innerHTML = `Enemy Tanks: ${this.enemyTanks.length}`;
        this.gameMission.children[0].innerHTML = `Mission ${this.level.level}`;

        GameView.toggleScreen('start-screen', false);
        // GameView.toggleScreen('mission-screen', true);
        
        GameView.toggleScreen('game-canvas', true);
        this.bindGameKeys();
        window.requestAnimationFrame(this.update);

        // setTimeout(() => {
        //     GameView.toggleScreen('mission-screen', false);
        //     GameView.toggleScreen('game-canvas', true);
        //     this.draw(this.ctx);
        //     GameView.toggleScreen('game-mission', true);
        //     setTimeout(() => {
        //         GameView.toggleScreen('start', true);
        //         setTimeout(() => GameView.toggleScreen('start', false), 2000);
        //         this.bindGameKeys();
        //         this.levelOver = false;
        //         window.requestAnimationFrame(this.update);
        //     }, 3400);
        // }, 4000); // if increased any more, this set timeout will mess up the collision animation
    }

    endLevel() {
        this.music[0].pause();
        this.music[0].currentTime = 0;
        this.music[1].play();
        GameView.toggleScreen('game-mission', false);
        GameView.toggleScreen('mission-cleared', true);
        const currentLevel = this.level.level;
        this.level = new Level(this, currentLevel + 1);
        setTimeout(() => {
            GameView.toggleScreen('mission-cleared', false);
            this.resetStats();
            this.startLevel();
        }, 5000);
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

    draw() {
        this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        this.allObjects().forEach(object => {
            object.draw(this.ctx);
        });
    }

    moveObjects() {
        [].concat(this.playerTank, this.enemyTanks, this.bullets).forEach(object => {
            object.move();
        });
    }

    update() {
        if (this.gameOver === false && this.levelOver === false && this.paused === false) {
            this.step();
            this.draw();
        }
        this.frameID = window.requestAnimationFrame(this.update);
    }

    checkCollisions() {
        for (let i = 0; i < this.bullets.length; i++) {
            for (let j = 0; j < this.tanks.length; j++) {
                if (this.bullets[i].hasHit(this.tanks[j]) && !(this.bullets[i].tank instanceof EnemyTank && this.tanks[j] instanceof EnemyTank)) {
                    this.bullets[i].hits(this.tanks[j]);
                    return;
                }
            }
            for (let j = 0; j < this.bullets.length; j++) {
                if (this.bullets[i] !== this.bullets[j]) {
                    if (this.bullets[i].hasHit(this.bullets[j])) {
                        this.bullets[i].hits(this.bullets[j]);
                        return;
                    }
                }
            }
            for (let j = 0; j < this.mines.length; j++) {
                if (this.bullets[i].hasHit(this.mines[j])) {
                    this.bullets[i].hits(this.mines[j]);
                    return;
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
                this.gameView.gameLost();
            } else {
                this.enemyTanks.splice(this.enemyTanks.indexOf(object), 1);
            }
            this.tanks.splice(this.tanks.indexOf(object), 1);
            if (this.enemyTanks.length === 0) {
                this.levelOver = true;
                this.endLevel();
            }
        } else if (object instanceof Mine) {
            this.mines.splice(this.mines.indexOf(object), 1);
        }
    }

    allObjects() {
        return [].concat(this.tanks, this.bullets, this.walls, this.mines);
    }

    static get DIM_X() {
        const canvasContainer = document.getElementById('canvas-container');
        return window.innerWidth - 2 * parseInt(window.getComputedStyle(canvasContainer).marginLeft, 10);
    }

    static get DIM_Y() {
        const canvasContainer = document.getElementById('canvas-container');
        const header = document.getElementById('header-div');
        return window.innerHeight - (2 * parseInt(window.getComputedStyle(canvasContainer).marginTop, 10) + header.offsetHeight);
    }

    mouseOnPage(e) {
        this.cursorPos = [e.clientX - parseInt(window.getComputedStyle(this.canvasContainer).marginLeft, 10), e.clientY - (parseInt(window.getComputedStyle(this.canvasContainer).marginTop, 10) + this.header.offsetHeight)];
        // console.log(this.cursorPos)
        console.log(Game.DIM_X)
        console.log(Game.DIM_Y)
    }

    bindGameKeys() {
        document.addEventListener('mousemove', e => this.mouseOnPage(e));
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

    getDOMElements() {
        this.music = document.getElementsByClassName('music');
        this.canvasContainer = document.getElementById('canvas-container');
        this.header = document.getElementById('header-div');
        this.missionScreen = document.getElementById('mission-screen');
        this.missionHeader = document.getElementById('mission-header');
        this.enemyTanksHeader = document.getElementById('enemy-tanks');
        this.missionFailed = document.getElementsByClassName('mission-failed');
        this.gameMission = document.getElementById('game-mission');
    }

    removeGameKeys() {
        document.removeEventListener('keydown', e => {
            if (e.code === 'KeyA') this.playerTank.vel[0] = -1;
            if (e.code === 'KeyD') this.playerTank.vel[1] = 1;
            if (e.code === 'KeyW') this.playerTank.vel[2] = -1;
            if (e.code === 'KeyS') this.playerTank.vel[3] = 1;
        });
        document.removeEventListener('keyup', e => {
            if (e.code === 'KeyA') this.playerTank.vel[0] = 0;
            if (e.code === 'KeyD') this.playerTank.vel[1] = 0;
            if (e.code === 'KeyW') this.playerTank.vel[2] = 0;
            if (e.code === 'KeyS') this.playerTank.vel[3] = 0;
        });
        document.removeEventListener('click', this.playerTank.shoot.myThrottle(this.playerTank, 2000));
        document.removeEventListener('keydown', e => {
            if (e.code === 'Space') this.playerTank.placeMine();
        });
    }
}