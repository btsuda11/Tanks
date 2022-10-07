import Bullet from "./bullet";
import Game from "./game";

export default class Tank {
    constructor(options) {
        this.barrelPos = options.pos;
        this.bodyPos = options.pos;
        // this.angle = 0;
        this.vel = [0, 0, 0, 0]; // [vx(left), vx(right), vy(up), vy(down)]
        this.game = options.game;
    }

    draw(ctx) {
        let body = new Image();
        let barrel = new Image();
        body.src = 'images/tanks/tankBody_blue_outline.png'
        barrel.src = 'images/tanks/tankBlue_barrel2_outline.png';
        ctx.drawImage(body, this.bodyPos[0], this.bodyPos[1]);
        ctx.drawImage(barrel, this.barrelPos[0] + 15, this.barrelPos[1] + 15);
    }

    move() {
        this.barrelPos[0] += this.vel[0];
        this.barrelPos[0] += this.vel[1];
        this.barrelPos[1] += this.vel[2];
        this.barrelPos[1] += this.vel[3];
        this.bodyPos[0] += this.vel[0];
        this.bodyPos[0] += this.vel[1];
        this.bodyPos[1] += this.vel[2];
        this.bodyPos[1] += this.vel[3];
        // this.angle = atan2(mouseY - this.barrelPos[0], mouseX - this.barrelPos[1]);
    }

    shoot() {
        const bullet = new Bullet({speed: 3, tank: this});
        this.game.add(bullet);
    }
}