import Tank from "./tank";

export default class EnemyTank extends Tank {
    constructor(options) {
        super(options);
        this.type = options.type;
        if (this.type === 'red') {
            this.body.src = 'images/tanks/tankBody_red_outline.png';
            this.barrel.src = 'images/tanks/tankRed_barrel2_outline.png';
            this.maxBullets = 1;
        }
    }

    draw(ctx) {
        ctx.drawImage(this.body, this.bodyPos[0], this.bodyPos[1]);
        ctx.drawImage(this.barrel, this.barrelPos[0] + 13, this.barrelPos[1] + 18);
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
    }
}