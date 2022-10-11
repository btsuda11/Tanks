import Tank from "./tank";
import Bullet from "./bullet";

export default class Mine {
    constructor(pos, tank) {
        this.pos = pos;
        this.tank = tank;
        this.radius = 60;
        setTimeout(() => this.explode(), 10000);
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
        this.tank.game.tanks.forEach(tank => {
            if (this.inRadius(tank)) {
                tank.game.remove(this);
                tank.game.remove(tank);
            } else {
                tank.game.remove(this);
            }
        });
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
}