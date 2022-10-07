export default class Bullet {
    constructor(options) {
        // this.speed = options.speed;
        this.vel = options.vel
        this.tank = options.tank;
        this.pos = [this.tank.barrelPos[0] + 21, this.tank.barrelPos[1] + 45];
    }

    draw(ctx) {
        ctx.arc(this.pos[0], this.pos[1], 3, 0, Math.PI * 2);
        ctx.fill();
    }

    move() {
        // this.pos[0] += this.speed * Math.cos(this.tank.angle);
        // this.pos[1] += this.speed * Math.sin(this.tank.angle);
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }
}