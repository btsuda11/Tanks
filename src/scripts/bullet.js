import Tank from "./tank";
import Game from "./game";

export default class Bullet {
    constructor(options) {
        this.pos = options.pos;
        this.speed = options.speed;
        this.angle = options.angle;
        this.vel = [this.speed * Math.cos(this.angle), this.speed * Math.sin(this.angle)];
        this.tank = options.tank;
        this.height = 12;
        this.width = 8;
    }

    draw(ctx) {
        let bullet = new Image();
        bullet.src = 'images/bullets/bulletDark2.png';
        ctx.save();
        ctx.translate(this.pos[0], this.pos[1]);
        ctx.rotate(this.angle - ((3 * Math.PI) / 2));
        ctx.drawImage(bullet, 0, 0);
        ctx.restore();
    }

    move() {
        if (this.pos[0] < 0) {
            this.vel[0] = -(this.vel[0]);
        }
        if (this.pos[1] < 0) {
            this.vel[1] = -(this.vel[1]);
        }
        if (this.pos[0] + this.width > Game.DIM_X) {
            this.vel[0] = -(this.vel[0]);
        }
        if (this.pos[1] + this.height > Game.DIM_Y) {
            this.vel[1] = -(this.vel[1]);
        }

        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }

    hasHit(otherObject) {
        if (otherObject instanceof Tank) {
            if ((this.pos[0] <= otherObject.bodyPos[0] + otherObject.width && this.pos[0] + this.width >= otherObject.bodyPos[0]) && (this.pos[1] + this.height >= otherObject.bodyPos[1] && this.pos[1] <= otherObject.bodyPos[1] + otherObject.height)) {
                return true;
            }
            else if ((this.pos[1] <= otherObject.bodyPos[1] + otherObject.height && this.pos[1] + this.height >= otherObject.bodyPos[1]) && (this.pos[0] + this.width >= otherObject.bodyPos[0] && this.pos[0] <= otherObject.bodyPos[0] + otherObject.width)) {
                return true;
            } else {
                return false;
            }
        } else if (otherObject instanceof Bullet) {
            if ((this.pos[0] <= otherObject.pos[0] + otherObject.width && this.pos[0] + this.width >= otherObject.pos[0]) && (this.pos[1] + this.height >= otherObject.pos[1] && this.pos[1] <= otherObject.pos[1] + otherObject.height)) {
                return true;
            }
            else if ((this.pos[1] <= otherObject.pos[1] + otherObject.height && this.pos[1] + this.height >= otherObject.pos[1]) && (this.pos[0] + this.width >= otherObject.pos[0] && this.pos[0] <= otherObject.pos[0] + otherObject.width)) {
                return true;
            } else {
                return false;
            }
        }
    }

    hits(otherObject) {
        this.tank.game.remove(this);
        this.tank.game.remove(otherObject);
    }
}