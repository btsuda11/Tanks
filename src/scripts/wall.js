export default class Wall {
    constructor(height, width, pos) {
        this.height = height;
        this.width = width;
        this.pos = pos;
    }

    draw(ctx) {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    }
}