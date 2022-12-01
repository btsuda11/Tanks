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
            this.game.enemyTanks = [new EnemyTank({ pos: [Game.DIM_X * 0.70, Game.DIM_Y * 0.10], game: this.game, type: 'green' }), new EnemyTank({ pos: [Game.DIM_X * 0.90, Game.DIM_Y * 0.40], game: this.game, type: 'green' })];
            this.game.tanks = [this.game.playerTank].concat(this.game.enemyTanks);
            this.game.walls = [new Wall(Game.DIM_Y * 0.10, Game.DIM_X * 0.10, [Game.DIM_X * 0.10, Game.DIM_Y * 0.625]), new Wall(Game.DIM_Y * 0.10, Game.DIM_X * 0.05, [Game.DIM_X * 0.15, Game.DIM_Y * 0.725]), new Wall(Game.DIM_Y * 0.10, Game.DIM_X * 0.10, [Game.DIM_X * 0.775, Game.DIM_Y * 0.25]), new Wall(Game.DIM_Y * 0.10, Game.DIM_X * 0.05, [Game.DIM_X * 0.775, Game.DIM_Y * 0.15])];
        }
    }
}