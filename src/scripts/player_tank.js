import Tank from "./tank";
import Wall from "./wall";

export default class PlayerTank extends Tank {
    constructor(options) {
        super(options);
        this.body.src = 'assets/images/tanks/tankBody_blue_outline.png';
        this.barrel.src = 'assets/images/tanks/tankBlue_barrel2_outline.png';
        this.height = this.body.height;
        this.width = this.body.width;
        this.barrelHeight = this.barrel.height;
        this.barrelWidth = this.barrel.width;
        this.maxBullets = 5;
        this.maxMines = 1;
        this.allowedRicochets = 2;
    }

    draw(ctx) {
        // ctx.drawImage(this.body, this.bodyPos[0], this.bodyPos[1]);
        // ctx.save();
        // ctx.translate(this.barrelPos[0] + 20, this.barrelPos[1] + 20);
        // ctx.rotate(this.angle);
        // ctx.drawImage(this.barrel, -5, -5);
        // ctx.restore();
        ctx.fillStyle = "black";
        ctx.fillRect(this.bodyPos[0], this.bodyPos[1], 35, 35);
    }

    move() {
        this.checkBounds();
        
        this.barrelPos[0] += this.vel[0];
        this.barrelPos[0] += this.vel[1];
        this.barrelPos[1] += this.vel[2];
        this.barrelPos[1] += this.vel[3];
        
        this.bodyPos[0] += this.vel[0];
        this.bodyPos[0] += this.vel[1];
        this.bodyPos[1] += this.vel[2];
        this.bodyPos[1] += this.vel[3];
        this.angle = Math.atan2(this.game.cursorPos[1] - this.barrelPos[1], this.game.cursorPos[0] - this.barrelPos[0]) - (Math.PI / 2);

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
    }
}