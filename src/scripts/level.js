import EnemyTank from "./enemy_tank";
import Wall from "./wall";


export default class Level {
    constructor(game, level) {
        this.game = game;
        this.level = level;
    }

    populateLevel() {
        if (this.level === 1) {
            this.game.enemyTanks = [new EnemyTank({ pos: [1250, 125], game: this.game, type: 'red' })];
            this.game.tanks = [this.game.playerTank].concat(this.game.enemyTanks);
            this.game.walls = [new Wall(75, 750, [250, 200]), new Wall(75, 750, [400, 550])];
        } else if (this.level === 2) {
            this.game.enemyTanks = [new EnemyTank({ pos: [700, 125], game: this.game, type: 'green' }), new EnemyTank({ pos: [1250, 500], game: this.game, type: 'green' })];
            this.game.tanks = [this.game.playerTank].concat(this.game.enemyTanks);
            this.walls = [new Wall(75, 150, [125, 500]), new Wall(75, 75, [200, 575]), new Wall(75, 150, [1150, 200]), new Wall(75, 75, [1150, 125])];
        }
    }
}