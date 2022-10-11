import Bullet from "./bullet";
import Game from "./game";
import Wall from "./wall"
import Function from "./util";
import Mine from "./mine";

export default class Tank {
    constructor(options) {
        this.barrelPos = options.pos;
        this.bodyPos = options.pos;
        this.angle = 0;
        this.vel = [0, 0, 0, 0]; // [vx(left), vx(right), vy(up), vy(down)]
        this.body = new Image();
        this.barrel = new Image();
        this.game = options.game;
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

    hittingWall(wall) {
        if ((this.bodyPos[0] + 2 < wall.pos[0] + wall.width && this.bodyPos[0] + this.width - 2 > wall.pos[0]) && (this.bodyPos[1] + this.height - 2 > wall.pos[1] && this.bodyPos[1] + 2 < wall.pos[1] + wall.height)) {
            return true;
        }
        else if ((this.bodyPos[1] + 2 < wall.pos[1] + wall.height && this.bodyPos[1] + this.height - 2 > wall.pos[1]) && (this.bodyPos[0] + this.width - 2 > wall.pos[0] && this.bodyPos[0] + 2 < wall.pos[0] + wall.width)) {
            return true;
        } else {
            return false;
        }
    }

    shoot() {
        const bullet = new Bullet({pos: [this.barrelPos[0] + 20, this.barrelPos[1] + 20], speed: 3, angle: this.angle + (Math.PI / 2), tank: this});
        this.game.add(bullet);
    }

    placeMine() {
        const mine = new Mine([this.bodyPos[0] + 20, this.bodyPos[1] + 20], this);
        this.game.add(mine);
    }
}