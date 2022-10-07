export default class Bullet {
    constructor(options) {
        // this.speed = options.speed;
        this.vel = options.vel
        this.tank = options.tank;
        this.pos = [this.tank.barrelPos[0] + 19, this.tank.barrelPos[1] + 35];
    }

    draw(ctx) {
        let bullet = new Image();
        bullet.src = 'images/bullets/bulletBlue3.png';
        ctx.drawImage(bullet, this.pos[0], this.pos[1]);
    }

    move() {
        // this.pos[0] += this.speed * Math.cos(this.tank.angle);
        // this.pos[1] += this.speed * Math.sin(this.tank.angle);
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }
}