export default class Bullet {
    constructor(options) {
        this.pos = options.pos;
        this.speed = options.speed;
        this.angle = options.angle;
        this.tank = options.tank;
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
        this.pos[0] += this.speed * Math.cos(this.angle);
        this.pos[1] += this.speed * Math.sin(this.angle);
    }

    hasHit(otherObject) {
        if (this.pos[0] + 12 >= otherObject.pos[0] || this.pos[0] - 12 <= otherObject[0] + otherObject.width) { return true; }
        else if (this.pos[1] + 12 >= otherObject.pos[1] || this.pos[1] - 12 <= otherObject[1] + otherObject.height) { return true; }
        else { return false };
    }
}