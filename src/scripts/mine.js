import Tank from "./tank";
import Bullet from "./bullet";

export default class Mine {
    constructor(pos, tank, ctx) {
        this.pos = pos;
        this.tank = tank;
        this.ctx = ctx;
        this.radius = 60;
        // this.loadExplosion();
        this.timeoutID = setTimeout(() => {
            this.explode();
            console.log('boom');
        }, 10000);
    }

    draw(ctx) {
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }

    explode() {
        // let index = (this.tank.game.frame / 5) % 5;
        // for (let i = 0; i < this.explosion.length; i++) {
        //     this.ctx.drawImage(this.explosion[index], this.pos[0], this.pos[1]);
        // }
        for (let i = 0; i < this.tank.game.tanks.length; i++) {
            console.log(this.tank.game.tanks[i])
            if (this.inRadius(this.tank.game.tanks[i])) {
                this.tank.game.remove(this);
                this.tank.game.remove(this.tank.game.tanks[i]);
                return;
            } else {
                this.tank.game.remove(this);
                return;
            }
        }
    }

    inRadius(object) {
        let distX, distY;
        if (object instanceof Tank) {
            distX = this.pos[0] - object.bodyPos[0] - (object.width / 2);
            distY = this.pos[1] - object.bodyPos[1] - (object.height / 2);
        } else if (object instanceof Bullet) {
            distX = this.pos[0] - object.pos[0] - (object.width / 2);
            distY = this.pos[1] - object.pos[1] - (object.height / 2);
        }

        if (distX > (object.width / 2) + this.radius) return false;
        if (distY > (object.height / 2) + this.radius) return false;
        if (distX <= (object.width / 2)) {
            return true;
        }
        if (distY <= (object.height / 2)) {
            return true;
        }
        return (((distX - (object.width / 2)) ** 2) + ((distY - (object.height / 2)) ** 2) <= this.radius ** 2);
    }

    // loadExplosion() {
    //     let frame1 = new Image();
    //     let frame2 = new Image();
    //     let frame3 = new Image();
    //     let frame4 = new Image();
    //     let frame5 = new Image();
    //     frame1.src = '/images/explosion/explosion1.png';
    //     frame2.src = '/images/explosion/explosion2.png';
    //     frame3.src = '/images/explosion/explosion3.png';
    //     frame4.src = '/images/explosion/explosion4.png';
    //     frame5.src = '/images/explosion/explosion5.png';
    //     this.explosion = [frame1, frame2, frame3, frame4, frame5];
    // }
}