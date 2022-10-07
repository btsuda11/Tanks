export default class Tank {
    constructor(options) {
        this.pos = options.pos;
        this.color = options.color;
        // this.game = options.game;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos[0], this.pos[1], 40, 40);
    }

    move(vel) {
        this.pos[0] += vel[0];
        this.pos[1] += vel[1];
    }
}