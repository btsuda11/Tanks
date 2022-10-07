export default class Bullet {
    constructor(options) {
        this.pos = options.pos;
        this.speed = options.speed;
        this.angle = options.angle;
        this.tank = options.tank;
    }

    draw(ctx) {
        let bullet = new Image();
        bullet.src = 'images/bullets/bulletBlue2.png';
        ctx.save();
        ctx.translate(this.pos[0], this.pos[1]);
        ctx.rotate(this.angle - ((3 * Math.PI )/ 2));
        ctx.drawImage(bullet, 0, 0);
        ctx.restore();
    }

    move() {
        this.pos[0] += this.speed * Math.cos(this.angle);
        this.pos[1] += this.speed * Math.sin(this.angle);
    }
}