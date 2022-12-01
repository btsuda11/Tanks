import Tank from "./tank";
import Mine from "./mine";
import Game from "./game";
import Wall from "./wall";

export default class Bullet {
    constructor(options) {
        this.pos = options.pos;
        this.speed = options.speed;
        this.angle = options.angle;
        this.vel = [this.speed * Math.cos(this.angle), this.speed * Math.sin(this.angle)];
        this.tank = options.tank;
        this.height = 12;
        this.width = 8;
        this.numRicochets = 0;
    }

    draw(ctx) {
        let bullet = new Image();
        bullet.src = 'assets/images/bullets/bulletDark2.png';
        ctx.save();
        ctx.translate(this.pos[0], this.pos[1]);
        ctx.rotate(this.angle - ((3 * Math.PI) / 2));
        ctx.drawImage(bullet, 0, 0);
        ctx.restore();
    }

    move() {
        // console.log(this.vel);
        this.checkRicochet();

        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }

    checkRicochet() {
        // let allowedRicochets;
        // if (this.tank.type === 'player') {allowedRicochets = 2}
        // else if (this.tank.type === 'red') {allowedRicochets = 2}
        // else if (this.tank.type === 'green') {allowedRicochets = 1};

        if (this.numRicochets >= 2) {
            this.tank.game.remove(this);
        }
        this.tank.game.walls.forEach(wall => {
            if ((this.pos[0] <= wall.pos[0] + wall.width + 5 && this.pos[0] >= wall.pos[0] + wall.width) && (this.pos[1] + this.height >= wall.pos[1] && this.pos[1] <= wall.pos[1] + wall.height)) {
                this.vel[0] = -(this.vel[0]);
                this.angle = -(this.angle);
                this.numRicochets++;
            } else if ((this.pos[0] + this.width >= wall.pos[0] - 5 && this.pos[0] + this.width <= wall.pos[0]) && (this.pos[1] + this.height >= wall.pos[1] && this.pos[1] <= wall.pos[1] + wall.height)) {
                this.vel[0] = -(this.vel[0]);
                this.angle = -(this.angle);
                this.numRicochets++;
            } else if ((this.pos[0] + this.width >= wall.pos[0] && this.pos[0] <= wall.pos[0] + wall.width) && (this.pos[1] + this.height >= wall.pos[1] - 5 && this.pos[1] + this.height <= wall.pos[1])) {
                this.vel[1] = -(this.vel[1]);
                this.angle = -(this.angle);
                this.numRicochets++;
            } else if ((this.pos[0] + this.width >= wall.pos[0] && this.pos[0] <= wall.pos[0] + wall.width) && (this.pos[1] <= wall.pos[1] + wall.height + 5 && this.pos[1] >= wall.pos[1] + wall.height)) {
                this.vel[1] = -(this.vel[1]);
                this.angle = -(this.angle);
                this.numRicochets++;
            }
        });
        if (this.pos[0] < 0) {
            this.vel[0] = -(this.vel[0]);
            this.angle = -(this.angle);
            this.numRicochets++;
        }
        if (this.pos[1] < 0) {
            this.vel[1] = -(this.vel[1]);
            this.angle = -(this.angle);
            this.numRicochets++;
        }
        if (this.pos[0] + this.width > Game.DIM_X) {
            this.vel[0] = -(this.vel[0]);
            this.angle = -(this.angle);
            this.numRicochets++;
        }
        if (this.pos[1] + this.height > Game.DIM_Y) {
            this.vel[1] = -(this.vel[1]);
            this.angle = -(this.angle);
            this.numRicochets++;
        }
    }

    hasHit(otherObject) {
        if (otherObject instanceof Tank) {
            if ((this.pos[0] <= otherObject.bodyPos[0] + otherObject.width + 10 
                && this.pos[0] >= otherObject.bodyPos[0] + otherObject.width) 
                    && (this.pos[1] + this.height >= otherObject.bodyPos[1] 
                && this.pos[1] <= otherObject.bodyPos[1] + otherObject.height)) {
                    return true;
            } else if ((this.pos[0] + this.width >= otherObject.bodyPos[0] - 10 
                && this.pos[0] + this.width <= otherObject.bodyPos[0]) 
                    && (this.pos[1] + this.height >= otherObject.bodyPos[1] 
                && this.pos[1] <= otherObject.bodyPos[1] + otherObject.height)) {
                    return true;
            } else if ((this.pos[0] + this.width >= otherObject.bodyPos[0] 
                && this.pos[0] <= otherObject.bodyPos[0] + otherObject.width) 
                    && (this.pos[1] + this.height >= otherObject.bodyPos[1] - 10 
                && this.pos[1] + this.height <= otherObject.bodyPos[1])) {
                    return true;
            } else if ((this.pos[0] + this.width >= otherObject.bodyPos[0] 
                && this.pos[0] <= otherObject.bodyPos[0] + otherObject.width) 
                    && (this.pos[1] <= otherObject.bodyPos[1] + otherObject.height + 10 
                && this.pos[1] >= otherObject.bodyPos[1] + otherObject.height)) {
                    return true;
            } else {
                return false;
            }
            // if ((this.pos[0] <= otherObject.bodyPos[0] + otherObject.width + 10
            //     && this.pos[0] >= otherObject.bodyPos[0] + otherObject.width)
            //     && (this.pos[1] >= otherObject.bodyPos[1]
            //         && this.pos[1] - this.width <= otherObject.bodyPos[1] + otherObject.height)) {
            //     return true;
            // } else if ((this.pos[0] >= otherObject.bodyPos[0] - 10
            //     && this.pos[0] <= otherObject.bodyPos[0])
            //     && (this.pos[1] + this.width >= otherObject.bodyPos[1]
            //         && this.pos[1] <= otherObject.bodyPos[1] + otherObject.height)) {
            //     return true;
            // } else if ((this.pos[0] >= otherObject.bodyPos[0]
            //     && this.pos[0] - this.width <= otherObject.bodyPos[0] + otherObject.width)
            //     && (this.pos[1] >= otherObject.bodyPos[1] - 10
            //         && this.pos[1] <= otherObject.bodyPos[1])) {
            //     return true;
            // } else if ((this.pos[0] + this.width >= otherObject.bodyPos[0]
            //     && this.pos[0] <= otherObject.bodyPos[0] + otherObject.width)
            //     && (this.pos[1] <= otherObject.bodyPos[1] + otherObject.height + 10
            //         && this.pos[1] >= otherObject.bodyPos[1] + otherObject.height)) {
            //     return true;
            // } else {
            //     return false;
            // }
        } else if (otherObject instanceof Bullet) {
            if ((this.pos[0] <= otherObject.pos[0] + otherObject.width && this.pos[0] + this.width >= otherObject.pos[0]) && (this.pos[1] + this.height >= otherObject.pos[1] && this.pos[1] <= otherObject.pos[1] + otherObject.height)) {
                return true;
            }
            else if ((this.pos[1] <= otherObject.pos[1] + otherObject.height && this.pos[1] + this.height >= otherObject.pos[1]) && (this.pos[0] + this.width >= otherObject.pos[0] && this.pos[0] <= otherObject.pos[0] + otherObject.width)) {
                return true;
            } else {
                return false;
            }
        } else if (otherObject instanceof Mine) {
            let distX = Math.abs(otherObject.pos[0] - this.pos[0] - (this.width / 2));
            let distY = Math.abs(otherObject.pos[1] - this.pos[1] - (this.height / 2));

            if (distX > (this.width / 2) + 8) return false;
            if (distY > (this.height / 2) + 8) return false;
            if (distX <= (this.width / 2)) {
                return true;
            }
            if (distY <= (this.height / 2)) {
                return true;
            }
            return (((distX - (this.width / 2)) ** 2) + ((distY - (this.height / 2)) ** 2) <= 8 ** 2);
        } 
    }

    hits(otherObject) {
        if (otherObject instanceof Mine) {
            clearTimeout(otherObject.timeoutID);
            otherObject.explode();
            this.tank.game.remove(this);
            return;
        } else if (otherObject instanceof Tank) {
            otherObject.state = 'dead';
        }
        this.tank.game.remove(this);
        this.tank.game.remove(otherObject);
    }
}