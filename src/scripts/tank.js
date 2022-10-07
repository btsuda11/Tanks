export default class Tank {
    constructor(options) {
        this.barrelPos = options.pos;
        this.bodyPos = options.pos;
        this.vel = [0, 0, 0, 0]; // [vx(left), vx(right), vy(up), vy(down)]
        this.color = options.color;
        // this.game = options.game;
        addEventListener('keydown', e => {
            if (e.code === 'KeyA') this.vel[0] = -1;
            if (e.code === 'KeyD') this.vel[1] = 1;
            if (e.code === 'KeyW') this.vel[2] = -1;
            if (e.code === 'KeyS') this.vel[3] = 1;
        })
        addEventListener('keyup', e => {
            if (e.code === 'KeyA') this.vel[0] = 0;
            if (e.code === 'KeyD') this.vel[1] = 0;
            if (e.code === 'KeyW') this.vel[2] = 0;
            if (e.code === 'KeyS') this.vel[3] = 0;
        })
    }

    draw(ctx) {
        let body = new Image();
        let barrel = new Image();
        body.src = 'images/tanks/tankBody_blue_outline.png'
        barrel.src = 'images/tanks/tankBlue_barrel2_outline.png';
        ctx.drawImage(body, this.bodyPos[0], this.bodyPos[1]);
        ctx.drawImage(barrel, this.barrelPos[0] + 15, this.barrelPos[1] + 15);
    }

    move() {
        this.barrelPos[0] += this.vel[0];
        this.barrelPos[0] += this.vel[1];
        this.barrelPos[1] += this.vel[2];
        this.barrelPos[1] += this.vel[3];
        this.bodyPos[0] += this.vel[0];
        this.bodyPos[0] += this.vel[1];
        this.bodyPos[1] += this.vel[2];
        this.bodyPos[1] += this.vel[3];
    }
}