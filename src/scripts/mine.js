export default class Mine {
    constructor(pos, tank) {
        this.pos = pos;
        this.tank = tank;
        setTimeout(() => this.tank.game.remove(this), 10000);
    }

    draw(ctx) {
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }
}