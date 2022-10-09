import Tank from "./tank";

export default class PlayerTank extends Tank {
    constructor(options) {
        super(options);
        this.body.src = 'images/tanks/tankBody_blue_outline.png';
        this.barrel.src = 'images/tanks/tankBlue_barrel2_outline.png';
        this.maxBullets = 5;
    }

    draw(ctx) {
        ctx.drawImage(this.body, this.bodyPos[0], this.bodyPos[1]);
        ctx.save();
        ctx.translate(this.barrelPos[0] + 20, this.barrelPos[1] + 20);
        ctx.rotate(this.angle);
        ctx.drawImage(this.barrel, -5, -5);
        ctx.restore();
    }

    move() {
        this.checkBounds();
        // this.game.walls.forEach(wall => this.checkWall(wall));
        // this.checkWall(this.game.walls[0]);
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
}