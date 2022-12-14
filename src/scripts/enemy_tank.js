import Tank from "./tank";
import Bullet from "./bullet";
import Wall from "./wall";

export default class EnemyTank extends Tank {
    constructor(options) {
        super(options);
        this.type = options.type;
        this.body.onload = () => {
            this.height = this.body.height;
            this.width = this.body.width;
        }
        if (this.type === 'red') {
            this.body.src = 'assets/images/tanks/tankBody_red_outline.png';
            this.barrel.src = 'assets/images/tanks/tankRed_barrel2_outline.png';
            this.maxBullets = 1;
            this.maxMines = 0;
            this.allowedRicochets = 2;
            setInterval(() => {
                if (this.alive === true) {
                    this.shoot();
                }
            }, 1500);
        }
        if (this.type === 'green') {
            this.body.src = 'assets/images/tanks/tankBody_green_outline.png';
            this.barrel.src = 'assets/images/tanks/tankGreen_barrel2_outline.png';
            this.maxBullets = 1;
            this.maxMines = 0;
            this.allowedRicochets = 1;
            setInterval(() => {
                if (this.alive === true) {
                    this.shoot();
                }
            }, 3000);
        }
        
    }

    draw(ctx) {
        ctx.drawImage(this.body, this.bodyPos[0], this.bodyPos[1]);
        ctx.save();
        ctx.translate(this.barrelPos[0] + 18, this.barrelPos[1] + 22);
        ctx.rotate(this.angle);
        ctx.drawImage(this.barrel, -5, -5);
        ctx.restore();
    }

    move() {
        this.checkBounds();

        if (Math.abs(this.distToPlayer()[1]) < Math.abs(this.distToPlayer()[0]) && this.distToPlayer()[2] > 200 && Math.abs(this.distToPlayer()[1]) > 5) {
            if (this.distToPlayer()[1] > 0) {
                this.vel[3] = 0.75;
            } else if (this.distToPlayer()[1] < 0) {
                this.vel[2] = -0.75;
            }
        } else if (Math.abs(this.distToPlayer()[0]) < Math.abs(this.distToPlayer()[1]) && this.distToPlayer()[2] > 200 && Math.abs(this.distToPlayer()[0]) > 5) {
            if (this.distToPlayer()[0] > 0) {
                this.vel[1] = 0.75;
            } else if (this.distToPlayer()[0] < 0) {
                this.vel[0] = -0.75;
            }
        }
        
        this.barrelPos[0] += this.vel[0];
        this.barrelPos[0] += this.vel[1];
        this.barrelPos[1] += this.vel[2];
        this.barrelPos[1] += this.vel[3];

        this.bodyPos[0] += this.vel[0];
        this.bodyPos[0] += this.vel[1];
        this.bodyPos[1] += this.vel[2];
        this.bodyPos[1] += this.vel[3];
        let playerCenter = [this.game.playerTank.bodyPos[0] + (this.game.playerTank.width / 2), this.game.playerTank.bodyPos[1] + (this.game.playerTank.height / 2)];
        this.angle = Math.atan2(playerCenter[1] - this.barrelPos[1], playerCenter[0] - this.barrelPos[0]) - (Math.PI / 1.95);

        let wallsNTanks = this.game.walls.concat(this.game.tanks);

        wallsNTanks.forEach(object => {
            if (object !== this) {
                if (object instanceof Wall) {
                    if (this.hittingObject(object) && this.vel[0] < 0) {
                        this.barrelPos[0] -= (2 * this.vel[0]);
                        this.bodyPos[0] -= (2 * this.vel[0]);
                        this.vel[0] = 0;
                    } else if (this.hittingObject(object) && this.vel[1] > 0) {
                        this.barrelPos[0] -= (2 * this.vel[1]);
                        this.bodyPos[0] -= (2 * this.vel[1]);
                        this.vel[1] = 0;
                    } else if (this.hittingObject(object) && this.vel[2] < 0) {
                        this.barrelPos[1] -= (2 * this.vel[2]);
                        this.bodyPos[1] -= (2 * this.vel[2]);
                        this.vel[2] = 0;
                    } else if (this.hittingObject(object) && this.vel[3] > 0) {
                        this.barrelPos[1] -= (2 * this.vel[3]);
                        this.bodyPos[1] -= (2 * this.vel[3]);
                        this.vel[3] = 0;
                    }
                } else {
                    if (this.hittingObject(object) && this.vel[0] < 0) {
                        this.barrelPos[0] -= (2 * this.vel[0]);
                        this.bodyPos[0] -= (2 * this.vel[0]);
                        this.vel[0] = -0.75;
                        object.vel[0] = -0.75;
                    } else if (this.hittingObject(object) && this.vel[1] > 0) {
                        this.barrelPos[0] -= (2 * this.vel[1]);
                        this.bodyPos[0] -= (2 * this.vel[1]);
                        this.vel[1] = 0.75;
                        object.vel[1] = 0.75;
                    } else if (this.hittingObject(object) && this.vel[2] < 0) {
                        this.barrelPos[1] -= (2 * this.vel[2]);
                        this.bodyPos[1] -= (2 * this.vel[2]);
                        this.vel[2] = -0.75;
                        object.vel[2] = -0.75;
                    } else if (this.hittingObject(object) && this.vel[3] > 0) {
                        this.barrelPos[1] -= (2 * this.vel[3]);
                        this.bodyPos[1] -= (2 * this.vel[3]);
                        this.vel[3] = 0.75;
                        object.vel[3] = 0.75;
                    }
                }
            }
        });

        this.vel = [0, 0, 0, 0];
    
    }

    shoot() {
        let bullet;
        let x = 50 * Math.cos(this.angle + (Math.PI / 2));
        let y = 50 * Math.sin(this.angle + (Math.PI / 2));
        if (this.type === 'red') {
            bullet = new Bullet({ pos: [this.barrelPos[0] + 20 + x, this.barrelPos[1] + 20 + y], speed: 3.5, angle: this.angle + (Math.PI / 2), tank: this });
        } else if (this.type === 'green') {
            bullet = new Bullet({ pos: [this.barrelPos[0] + 20 + x, this.barrelPos[1] + 20 + y], speed: 6, angle: this.angle + (Math.PI / 2), tank: this });
        }
        this.game.add(bullet);
    }

    distToPlayer() {
        let x = (this.game.playerTank.bodyPos[0] - this.bodyPos[0]);
        let y = (this.game.playerTank.bodyPos[1] - this.bodyPos[1]);
        let h = Math.sqrt((x ** 2) + (y ** 2));
        return [x, y, h]; // [x(component), y(component), actual distance]
    }
}