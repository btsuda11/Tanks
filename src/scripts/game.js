import Bullet from "./bullet";
import PlayerTank from "./player_tank";
import EnemyTank from "./enemy_tank";
import Tank from "./tank";
import Mine from "./mine";
import Level from "./level";
import GameView from "./game_view";
import Function from "./util";

export default class Game {
    constructor(ctx, gameView) {
        this.ctx = ctx;
        this.gameView = gameView;
        this.level = new Level(this, 3);
        this.bullets = [];
        this.mines = [];
        this.getDOMElements();
        this.cursorPos = [];
        this.gameOver = false;
        this.paused = false;
        this.boundMouseOnPage = this.mouseOnPage.bind(this);
        this.boundHandleKeyDown = this.handleKeyDown.bind(this);
        this.boundHandleKeyUp = this.handleKeyUp.bind(this);
        this.update = this.update.bind(this);
        window.requestAnimationFrame(this.update);
        // this.explosion = [new Image(), new Image(), new Image(), new Image(), new Image()];
        // for (let i = 0; i < this.explosion.length; i++) {
        //     this.explosion[i].src = `../../assets/images/explosion/explosion${i + 1}.png`
        // }
        // this.explosion = [...this.explosion, ...this.explosion.reverse()];
        // this.drawExplosion = this.drawExplosion.bind(this);
        // this.frameDuration = 1000 / 60;
    }

    startLevel() {
        this.music[0].play();

        this.missionHeader.innerHTML = `Mission ${this.level.level}`;
        this.enemyTanksHeader.innerHTML = `Enemy Tanks: ${this.enemyTanks.length}`;
        this.gameMission.children[0].innerHTML = `Mission ${this.level.level}`;

        GameView.toggleScreen('start-screen', false);
        GameView.toggleScreen('mission-screen', true);
        
        // GameView.toggleScreen('game-canvas', true);
        // this.canvasContainer.addEventListener('mousemove', this.boundMouseOnPage);
        // document.addEventListener('keydown', this.boundHandleKeyDown);
        // document.addEventListener('keyup', this.boundHandleKeyUp);
        // this.boundHandleClick = this.playerTank.shoot.myThrottle(this.playerTank, 2000);
        // this.canvasContainer.addEventListener('click', this.boundHandleClick);

        setTimeout(() => {
            GameView.toggleScreen('mission-screen', false);
            GameView.toggleScreen('game-canvas', true);
            this.draw();
            GameView.toggleScreen('game-mission', true);
            setTimeout(() => {
                GameView.toggleScreen('start', true);
                setTimeout(() => GameView.toggleScreen('start', false), 1900);
                this.levelOver = false;

                this.canvasContainer.addEventListener('mousemove', this.boundMouseOnPage);
                document.addEventListener('keydown', this.boundHandleKeyDown);
                document.addEventListener('keyup', this.boundHandleKeyUp);
                this.boundHandleClick = this.playerTank.shoot.myThrottle(this.playerTank, 2000);
                this.canvasContainer.addEventListener('click', this.boundHandleClick);
            }, 3300);
        }, 4000);
    }

    endLevel() {
        this.levelOver = true;
        this.music[0].pause();
        this.music[0].currentTime = 0;
        this.music[1].play();

        GameView.toggleScreen('game-mission', false);
        GameView.toggleScreen('mission-cleared', true);

        this.canvasContainer.removeEventListener('mousemove', this.boundMouseOnPage);
        document.removeEventListener('keydown', this.boundHandleKeyDown);
        document.removeEventListener('keyup', this.boundHandleKeyUp);
        this.canvasContainer.removeEventListener('click', this.boundHandleClick);

        setTimeout(() => {
            GameView.toggleScreen('mission-cleared', false);
            const currentLevel = this.level.level;
            if (currentLevel < 3) {
                GameView.toggleScreen('game-canvas', false);
                this.level = new Level(this, currentLevel + 1);
                this.startLevel();
            } else {
                GameView.toggleScreen('end-screen', true);
            }
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
        if (this.gameOver === false && this.paused === false && this.levelOver === false) {
            this.step();
            this.draw();
        }
        window.requestAnimationFrame(this.update);
    }

    checkTankCollisions() {
        for (let i = 0; i < this.bullets.length; i++) {
            for (let j = 0; j < this.tanks.length; j++) {
                if (this.bullets[i].hasHit(this.tanks[j]) && !(this.bullets[i].tank instanceof EnemyTank && this.tanks[j] instanceof EnemyTank)) {
                    // this.drawExplosion(this.tanks[j].barrelPos);
                    this.bullets[i].hits(this.tanks[j]);
                    return;
                }
            }
        }
    }

    checkMineCollisions() {
        for (let i = 0; i < this.bullets.length; i++) {
            for (let j = 0; j < this.mines.length; j++) {
                if (this.bullets[i].hasHit(this.mines[j])) {
                    this.bullets[i].hits(this.mines[j]);
                    return;
                }
            }
        }
    }

    checkBulletCollisions() {
        for (let i = 0; i < this.bullets.length; i++) {
            for (let j = 0; j < this.bullets.length; j++) {
                if (this.bullets[i] !== this.bullets[j]) {
                    if (this.bullets[i].hasHit(this.bullets[j])) {
                        this.bullets[i].hits(this.bullets[j]);
                        return;
                    }
                }
            }
        }
    }
    
    // async drawExplosion(pos) {
    //     this.ctx.clearRect(pos[0], pos[1], this.explosion[0].width, this.explosion[0].height);
    //     for (const image of this.explosion) {
    //         // Draw the current image onto the canvas
    //         this.ctx.drawImage(image, pos[0], pos[1]);

    //         // Use await to pause the execution of the code for the calculated frame duration
    //         await new Promise(resolve => setTimeout(resolve, this.frameDuration));
    //     }
    //     requestAnimationFrame(this.drawExplosion);
    // }

    step() {
        this.moveObjects();
        this.checkTankCollisions();
        this.checkBulletCollisions();
        this.checkMineCollisions();
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
    }

    handleKeyDown(e) {
        if (e.code === 'KeyA') this.playerTank.vel[0] = -1;
        if (e.code === 'KeyD') this.playerTank.vel[1] = 1;
        if (e.code === 'KeyW') this.playerTank.vel[2] = -1;
        if (e.code === 'KeyS') this.playerTank.vel[3] = 1;
        if (e.code === 'Space') this.playerTank.placeMine();
    }

    handleKeyUp(e) {
        if (e.code === 'KeyA') this.playerTank.vel[0] = 0;
        if (e.code === 'KeyD') this.playerTank.vel[1] = 0;
        if (e.code === 'KeyW') this.playerTank.vel[2] = 0;
        if (e.code === 'KeyS') this.playerTank.vel[3] = 0;
    }

    handleClick() {
        return this.playerTank.shoot.myThrottle(this.playerTank, 2000)();
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
}