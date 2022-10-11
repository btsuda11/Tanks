export default class Mine {
    constructor(pos, tank) {
        this.pos = pos;
        this.tank = tank;
        this.radius = 50;
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

    inRadius(tank) {
        let distX = this.pos[0] - tank.bodyPos[0] - (tank.width / 2);
        let distY = this.pos[1] - tank.bodyPos[1] - (tank.height / 2);
        if (distX > (tank.width / 2) + this.radius) return false;
        if (distY > (tank.height / 2) + this.radius) return false;
        if (distX <= (tank.width / 2)) {
            return true;
        }
        if (distY <= (tank.height / 2)) {
            return true;
        }
        return (((distX - (tank.width / 2)) ** 2) + ((distY - (tank.height / 2)) ** 2) <= this.radius ** 2);
    }
}