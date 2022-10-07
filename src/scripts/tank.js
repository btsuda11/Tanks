export default class Tank {
    constructor(options) {
        this.pos = options.pos;
        this.vel = [0, 0, 0, 0]; // [vx(left), vx(right), vy(up), vy(down)]
        this.color = options.color;
        // this.game = options.game;
        addEventListener('keydown', e => {
            if (e.code === 'KeyA') this.vel[0] = -2;
            if (e.code === 'KeyD') this.vel[1] = 2;
            if (e.code === 'KeyW') this.vel[2] = -2;
            if (e.code === 'KeyS') this.vel[3] = 2;
        })
        addEventListener('keyup', e => {
            if (e.code === 'KeyA') this.vel[0] = 0;
            if (e.code === 'KeyD') this.vel[1] = 0;
            if (e.code === 'KeyW') this.vel[2] = 0;
            if (e.code === 'KeyS') this.vel[3] = 0;
        })
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.pos[0], this.pos[1], 40, 40);
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[0] += this.vel[1];
        this.pos[1] += this.vel[2];
        this.pos[1] += this.vel[3];
    }
}