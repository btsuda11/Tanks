export default class Wall {
    constructor(height, width, pos) {
        this.height = height;
        this.width = width;
        this.pos = pos;
    }

    draw(ctx) {
        let wall = new Image();
        wall.src = 'assets/images/wooden_wall.png';
        ctx.drawImage(wall, this.pos[0], this.pos[1], this.width, this.height);
        // ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    }
}