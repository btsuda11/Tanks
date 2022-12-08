import Tank from "./tank";
import Bullet from "./bullet";

export default class Mine {
    constructor(pos, tank, ctx) {
        this.pos = pos;
        this.tank = tank;
        this.ctx = ctx;
        this.radius = 60;
        // this.exploded = false;
        // this.explosion = document.getElementsByClassName('explosion');
        this.timeoutID = setTimeout(() => {
            this.explode();
        }, 10000);
    }

    draw(ctx) {
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.stroke();
        // if (this.exploded) {
        //     this.ctx.drawImage(this.explosion[0], 0, 0, 60, 60, this.pos[0], this.pos[1], 60, 60);
        // }
    }

    explode() {

        // this.drawExplosion();
        // let index = Math.floor(this.tank.game.frame / 5) % 4;
        // setInterval(() => {
        //     this.ctx.drawImage(this.explosion[index], this.pos[0], this.pos[1]);
        // })

        
        this.exploded = true;
        
        for (let i = 0; i < this.tank.game.tanks.length; i++) {
            if (this.inRadius(this.tank.game.tanks[i])) {
                this.tank.game.remove(this);
                this.tank.game.remove(this.tank.game.tanks[i]);
                return;
            } 
        }
        this.tank.game.remove(this);
    }

    inRadius(object) {
        let distX, distY;
        if (object instanceof Tank) {
            distX = Math.abs(this.pos[0] - object.bodyPos[0] - (object.width / 2));
            distY = Math.abs(this.pos[1] - object.bodyPos[1] - (object.height / 2));
        } else if (object instanceof Bullet) {
            distX = Math.abs(this.pos[0] - object.pos[0] - (object.width / 2));
            distY = Math.abs(this.pos[1] - object.pos[1] - (object.height / 2));
        }
        if (distX > (object.width / 2) + this.radius) {
            return false;
        }
        if (distY > (object.height / 2) + this.radius) {
            return false;
        }

        if (distX <= (object.width / 2)) {
            return true;
        }
        if (distY <= (object.height / 2)) {
            return true;
        }
        return (((distX - (object.width / 2)) ** 2) + ((distY - (object.height / 2)) ** 2) <= this.radius ** 2);
    }

    async drawExplosion() {
        for (let i = 0; i < this.explosion.length; i++) {
            // this.explosion[i].style.display = 'block';
            await this.timeout(1000);
            this.ctx.drawImage(this.explosion[i], 0, 0, 60, 60, this.pos[0], this.pos[1], 60, 60);
        }
    }

    timeout = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}