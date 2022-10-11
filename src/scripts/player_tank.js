import Game from "./game";
import Tank from "./tank";

export default class PlayerTank extends Tank {
    constructor(options) {
        super(options);
        this.body.src = 'images/tanks/tankBody_blue_outline.png';
        this.barrel.src = 'images/tanks/tankBlue_barrel2_outline.png';
        this.height = this.body.height;
        this.width = this.body.width;
        this.barrelHeight = this.barrel.height;
        this.barrelWidth = this.barrel.width;
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

        let oldBodyPos = this.bodyPos;
        let oldBarrelPos = this.barrelPos;
        
        this.barrelPos[0] += this.vel[0];
        this.barrelPos[0] += this.vel[1];
        this.barrelPos[1] += this.vel[2];
        this.barrelPos[1] += this.vel[3];
        
        this.bodyPos[0] += this.vel[0];
        this.bodyPos[0] += this.vel[1];
        this.bodyPos[1] += this.vel[2];
        this.bodyPos[1] += this.vel[3];
        this.angle = Math.atan2(this.game.cursorPos[1] - this.barrelPos[1], this.game.cursorPos[0] - this.barrelPos[0]) - (Math.PI / 1.95);
        
        // this.game.walls.forEach(wall => {
        //     if (this.hittingWall(wall) && this.vel[0] < 0) {
        //         this.barrelPos = [wall.pos[0] + wall.width, oldBarrelPos[1]];
        //         this.bodyPos = [wall.pos[0] + wall.width, oldBodyPos[1]];
        //     } else if (this.hittingWall(wall) && this.vel[1] > 0) {
        //         this.barrelPos = [wall.pos[0] - this.width, oldBarrelPos[1]];
        //         this.bodyPos = [wall.pos[0] - this.width, oldBodyPos[1]];
        //     } else if (this.hittingWall(wall) && this.vel[2] < 0) {
        //         this.barrelPos = [oldBarrelPos[0], wall.pos[1] + wall.height];
        //         this.bodyPos = [oldBodyPos[0], wall.pos[1] + wall.height];
        //     } else if (this.hittingWall(wall) && this.vel[3] > 0) {
        //         this.barrelPos = [oldBarrelPos[0], wall.pos[1] - this.height];
        //         this.bodyPos = [oldBodyPos[0], wall.pos[1] - this.height];
        //     }
        // });

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