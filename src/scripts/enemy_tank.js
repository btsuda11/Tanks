import Tank from "./tank";

export default class EnemyTank extends Tank {
    constructor(options) {
        super(options);
        this.type = options.type;
        if (this.type === 'red') {
            this.body.src = 'images/tanks/tankBody_red_outline.png';
            this.barrel.src = 'images/tanks/tankRed_barrel2_outline.png';
            this.maxBullets = 1;
            this.maxMines = 0;
        }
        this.height = this.body.height;
        this.width = this.body.width;
        setInterval(() => {
            if (this.state === 'alive' || this.game.state === 'game over') this.shoot();
        }, 1000);
    }

    draw(ctx) {
        ctx.drawImage(this.body, this.bodyPos[0], this.bodyPos[1]);
        ctx.save();
        ctx.translate(this.barrelPos[0] + 18, this.barrelPos[1] + 22);
        ctx.rotate(this.angle);
        ctx.drawImage(this.barrel, -5, -5);
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
        let playerCenter = [this.game.playerTank.bodyPos[0] + (this.game.playerTank.width / 2), this.game.playerTank.bodyPos[1] + (this.game.playerTank.height / 2)];
        this.angle = Math.atan2(playerCenter[1] - this.barrelPos[1], playerCenter[0] - this.barrelPos[0]) - (Math.PI / 1.95);

        this.game.walls.forEach(wall => {
            if (this.hittingWall(wall) && this.vel[0] < 0) {
                this.barrelPos[0] -= (2 * this.vel[0]);
                this.bodyPos[0] -= (2 * this.vel[0]);
                this.vel[0] = 0;
            } else if (this.hittingWall(wall) && this.vel[1] > 0) {
                this.barrelPos[0] -= (2 * this.vel[1]);
                this.bodyPos[0] -= (2 * this.vel[1]);
                this.vel[1] = 0;
            } else if (this.hittingWall(wall) && this.vel[2] < 0) {
                this.barrelPos[1] -= (2 * this.vel[2]);
                this.bodyPos[1] -= (2 * this.vel[2]);
                this.vel[2] = 0;
            } else if (this.hittingWall(wall) && this.vel[3] > 0) {
                this.barrelPos[1] -= (2 * this.vel[3]);
                this.bodyPos[1] -= (2 * this.vel[3]);
                this.vel[3] = 0;
            }
        });
    }
}