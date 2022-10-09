import Bullet from "./bullet";
import Game from "./game";
import Wall from "./wall"
import Function from "./util";

export default class Tank {
    constructor(options) {
        this.barrelPos = options.pos;
        this.bodyPos = options.pos;
        this.angle = 0;
        this.vel = [0, 0, 0, 0]; // [vx(left), vx(right), vy(up), vy(down)]
        this.body = new Image();
        this.barrel = new Image();
        this.game = options.game;
        this.height = this.body.height;
        this.width = this.body.width;
    }

    draw(ctx) {

    }

    move() {

    }

    checkBounds() {
        if (this.bodyPos[0] < 0) {
            this.vel[0] = 0;
        }
        if (this.bodyPos[1] < 0) {
            this.vel[2] = 0;
        }
        if (this.bodyPos[0] + 42.5 > Game.DIM_X) {
            this.vel[1] = 0;
        }
        if (this.bodyPos[1] + 44 > Game.DIM_Y) {
            this.vel[3] = 0;
        }
    }

    checkWall(wall) {
        // if (this.bodyPos[0] <= wall.pos[0] + wall.width && (this.bodyPos[1] + this.height > wall.pos[1] && this.bodyPos[1] < wall.pos[1] + wall.height)) {
        //     this.vel[0] = 0;
        // }
        // if (this.bodyPos[1] < wall.pos[1] + wall.height && (this.bodyPos[0] + this.width > wall.pos[0] && this.bodyPos[0] < wall.pos[0] + wall.width)) {
        //     this.vel[2] = 0;
        // }
        // if (this.bodyPos[0] + this.width > wall.pos[0] && (this.bodyPos[1] + this.height > wall.pos[1] && this.bodyPos[1] < wall.pos[1] + wall.height)) {
        //     this.vel[1] = 0;
        // }
        // if (this.bodyPos[1] + this.height > wall.pos[1] && (this.bodyPos[0] + this.width > wall.pos[0] && this.bodyPos[0] < wall.pos[0] + wall.width)) {
        //     this.vel[3] = 0;
        // }
        if (wall.pos[0] <= this.bodyPos[0] + this.width) {
            this.vel[1] = 0;
        }
        if (this.bodyPos[0] <= wall.width + wall.pos[0]) {
            this.vel[0] = 0;
        }
        if (wall.pos[1] <= this.bodyPos[1] + this.height) {
            this.vel[3] = 0;
        }
        if (this.bodyPos[1] <= wall.height + wall.pos[1]) {
            this.vel[2] = 0;
        }
    }

    shoot() {
        const bullet = new Bullet({pos: [this.barrelPos[0] + 20, this.barrelPos[1] + 20], speed: 3, angle: this.angle + (Math.PI / 2), tank: this});
        this.game.add(bullet);
    }
}