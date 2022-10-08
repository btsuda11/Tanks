import Bullet from "./bullet";
import Game from "./game";
import Function from "./util";

export default class Tank {
    constructor(options) {
        this.barrelPos = options.pos;
        this.bodyPos = options.pos;
        this.angle = 0;
        this.vel = [0, 0, 0, 0]; // [vx(left), vx(right), vy(up), vy(down)]
        this.game = options.game;
        this.type = options.type;

        if (this.type === 'player') {
            this.maxBullets = 5;
        } else if (this.type === 'sand') {
            this.maxBullets = 1;
        }
    }

    draw(ctx) {
        let body = new Image();
        let barrel = new Image();
        body.src = 'images/tanks/tankBody_blue_outline.png'
        barrel.src = 'images/tanks/tankBlue_barrel2_outline.png';
        ctx.drawImage(body, this.bodyPos[0], this.bodyPos[1]);
        ctx.save();
        ctx.translate(this.barrelPos[0] + 20, this.barrelPos[1] + 20);
        ctx.rotate(this.angle);
        ctx.drawImage(barrel, -5, -5);
        ctx.restore();
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
    }

    checkBounds() {
        if (this.bodyPos[0] < 0) {
            this.vel[0] = 0;
        } else if (this.bodyPos[1] < 0) {
            this.vel[2] = 0;
        } else if (this.bodyPos[0] + 42.5 > Game.DIM_X) {
            this.vel[1] = 0;
        } else if (this.bodyPos[1] + 44 > Game.DIM_Y) {
            this.vel[3] = 0;
        }
    }

    shoot() {
        // console.log(this);
        const bullet = new Bullet({pos: [this.barrelPos[0] + 20, this.barrelPos[1] + 20], speed: 3, angle: this.angle + (Math.PI / 2), tank: this});
        this.game.add(bullet);
    }
}