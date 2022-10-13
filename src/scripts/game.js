import Bullet from "./bullet";
import PlayerTank from "./player_tank";
import EnemyTank from "./enemy_tank";
import Tank from "./tank";
import Wall from "./wall";
import Mine from "./mine";
import Function from "./util";
import GameView from "./game_view";

export default class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.level = 1;
        this.playerTank = new PlayerTank({pos: [150, 650], game: this});
        this.bullets = [];
        this.mines = [];
        this.cursorPos = [];
        this.getDOMElements();
        this.bindClickListeners();
        this.gameOff = false;
        // this.levelOver = false;
        this.bindGameKeys = this.bindGameKeys.bind(this);
        this.update = this.update.bind(this);
    }

    showInstructions() {
        this.startScreen.style.display = 'none';
        this.instructions.style.display = 'block';
    }

    resetStats() {
        this.tanks.forEach(tank => {
            tank.vel = [0, 0, 0, 0];
        })
        this.playerTank.bodyPos = [150, 650];
        this.playerTank.barrelPos = [150, 650];
        this.bullets = [];
    }

    populateLevel() {
        if (this.level === 1) {
            this.enemyTanks = [new EnemyTank({pos: [1250, 125], game: this, type: 'red'})];
            this.tanks = [this.playerTank].concat(this.enemyTanks);
            this.walls = [new Wall(75, 750, [250, 200]), new Wall(75, 750, [400, 550])];
        } else if (this.level === 2) {
            this.enemyTanks = [new EnemyTank({pos: [700, 125], game: this, type: 'green'}), new EnemyTank({pos: [1250, 500], game: this, type: 'green'})];
            this.tanks = [this.playerTank].concat(this.enemyTanks);
            this.walls = [new Wall(75, 150, [125, 500]), new Wall(75, 75, [200, 575]), new Wall(75, 150, [1150, 200]), new Wall(75, 75, [1150, 125])];
        }
    }

    startLevel() {
        // this.levelOver = false;
        this.populateLevel();
        this.missionHeader.innerHTML = `Mission ${this.level}`;
        this.enemyTanksHeader.innerHTML = `Enemy Tanks: ${this.enemyTanks.length}`;
        this.gameMission.children[0].innerHTML = `Mission ${this.level}`;
        this.music[0].play();
        this.canvas.style.display = 'block';
        this.startScreen.style.display = 'none';
        this.missionScreen.style.display = 'block';
        setTimeout(() => {
            this.missionScreen.style.display = 'none';
            this.draw(this.ctx);
            this.gameMission.style.display = 'block';
            setTimeout(() => {
                this.start.style.display = 'block';
                setTimeout(() => this.start.style.display = 'none', 2000);
                this.bindGameKeys();
                this.update(this.ctx);
            }, 1000);
        }, 4000);
    }

    returnHome() {
        this.music[2].pause();
        this.music[2].currentTime = 0;
        this.endScreen[0].style.display = 'none';
        this.canvas.style.display = 'none';
        this.startScreen.style.display = 'flex';
    }

    endLevel() {
        this.music[0].pause();
        this.music[0].currentTime = 0;
        this.music[1].play();
        // this.levelOver = true;
        this.gameMission.style.display = 'none';
        let missionCleared = document.getElementsByClassName('mission-cleared')[0];
        missionCleared.style.display = 'block';
        this.level++;
        setTimeout(() => {
            missionCleared.style.display = 'none';
            this.resetStats();
            this.startLevel();
        }, 5000);
    }

    

    gameOver() {
        this.music[0].pause();
        this.music[2].play();
        this.music[0].currentTime = 0;
        this.gameOff = true;
        this.gameMission.style.display = 'none';
        this.missionFailed[0].style.display = 'block';
        setTimeout(() => {
            this.missionFailed[0].style.display = 'none';
            this.endScreen[0].style.display = 'flex';
        }, 5000);
    }

    newGame() {
        let newGame = new Game(this.ctx);
        newGame.startLevel();
    }

    playAgain() {
        this.music[0].currentTime = 0;
        this.music[2].pause();
        this.music[2].currentTime = 0;
        this.endScreen[0].style.display = 'none';
        this.canvas.style.display = 'none';
        this.newGame();
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
        if (this.gameOff !== true) {
            this.step();
            this.draw(ctx);
        }
        this.frameID = requestAnimationFrame(() => this.update(ctx));
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
                this.gameOver();
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

    bindClickListeners() {
        this.startButton.addEventListener('click', () => this.newGame());
        this.returnHomeButton.addEventListener('click', () => this.returnHome());
        this.playAgainButton.addEventListener('click', () => this.playAgain());
        this.howToButton.addEventListener('click', () => this.showInstructions());
        this.instructions.addEventListener('click', () => {
            this.instructions.style.display = 'none';
            this.startScreen.style.display = 'flex';
        });
    }

    bindGameKeys() {
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

    getDOMElements() {
        this.canvas = document.querySelector('#game-canvas');
        this.missionScreen = document.querySelector('.mission-screen');
        this.missionHeader = document.querySelector('.mission');
        this.enemyTanksHeader = document.querySelector('.enemy-tanks');
        this.startScreen = document.querySelector('#start-screen');
        this.startButton = document.querySelector('#start-button');
        this.start = document.querySelector('#start');
        this.howToButton = document.querySelector('#how-to-button');
        this.missionFailed = document.getElementsByClassName('mission-failed');
        this.endScreen = document.getElementsByClassName('end-screen');
        this.playAgainButton = this.endScreen[0].children[0];
        this.returnHomeButton = this.endScreen[0].children[1];
        this.instructions = document.querySelector('#how-to');
        this.gameMission = document.querySelector('#game-mission');
        this.music = document.getElementsByClassName('music');
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