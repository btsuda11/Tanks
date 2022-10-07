import Tank from "./tank";

export default class Game {
    constructor() {
        this.level = 1;
        this.playerTank = new Tank({pos: [100, 100], color: 'royalblue'});
        this.enemyTanks = [];
    }

    draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.allObjects.forEach(object => {
            object.draw();
        });
    }

    allObjects() {
        this.enemyTanks.slice().concat(this.playerTank);
    }
}