import EnemyTank from "./enemy_tank";
import Wall from "./wall";
import Game from "./game";

export default class Level {
    constructor(game, level) {
        this.game = game;
        this.level = level;
        this.populateLevel();
    }

    populateLevel() {
        if (this.level === 1) {
            this.game.enemyTanks = [new EnemyTank({ pos: [Game.DIM_X * 0.85, Game.DIM_Y * 0.15], game: this.game, type: 'red' })];
            this.game.tanks = [this.game.playerTank].concat(this.game.enemyTanks);
            this.game.walls = [new Wall(Game.DIM_X * 0.05, Game.DIM_Y * 0.75, [Game.DIM_X * 0.20, Game.DIM_Y * 0.25]), new Wall(Game.DIM_X * 0.05, Game.DIM_Y * 0.75, [Game.DIM_X * 0.30, Game.DIM_Y * 0.70])];
        } else if (this.level === 2) {
            this.game.enemyTanks = [new EnemyTank({ pos: [Game.DIM_X * 0.85, Game.DIM_Y * 0.20], game: this.game, type: 'green' }), new EnemyTank({ pos: [Game.DIM_X * 0.85, Game.DIM_Y * 0.15], game: this.game, type: 'green' })];
            this.game.tanks = [this.game.playerTank].concat(this.game.enemyTanks);
            this.walls = [new Wall(75, 150, [125, 500]), new Wall(75, 75, [200, 575]), new Wall(75, 150, [1150, 200]), new Wall(75, 75, [1150, 125])];
        }
    }
}