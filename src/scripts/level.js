import EnemyTank from "./enemy_tank";
import PlayerTank from "./player_tank";
import Wall from "./wall";
import Game from "./game";

export default class Level {
    constructor(game, level) {
        this.game = game;
        this.level = level;
        this.populateLevel();
    }

    populateLevel() {
        this.game.playerTank = new PlayerTank({ pos: [Game.DIM_X * 0.10, Game.DIM_Y * 0.80], game: this.game });
        this.game.bullets = [];
        if (this.level === 1) {
            this.game.enemyTanks = [new EnemyTank({ pos: [Game.DIM_X * 0.85, Game.DIM_Y * 0.15], game: this.game, type: 'red' })];
            this.game.walls = [new Wall(Game.DIM_Y * 0.075, Game.DIM_X * 0.55, [Game.DIM_X * 0.20, Game.DIM_Y * 0.25]), new Wall(Game.DIM_Y * 0.075, Game.DIM_X * 0.55, [Game.DIM_X * 0.30, Game.DIM_Y * 0.70])];
        } else if (this.level === 2) {
            this.game.enemyTanks = [new EnemyTank({ pos: [Game.DIM_X * 0.70, Game.DIM_Y * 0.10], game: this.game, type: 'green' }), new EnemyTank({ pos: [Game.DIM_X * 0.90, Game.DIM_Y * 0.40], game: this.game, type: 'green' })];
            this.game.walls = [new Wall(Game.DIM_Y * 0.10, Game.DIM_X * 0.15, [Game.DIM_X * 0.10, Game.DIM_Y * 0.625]), new Wall(Game.DIM_Y * 0.10, Game.DIM_X * 0.075, [Game.DIM_X * 0.175, Game.DIM_Y * 0.725]), new Wall(Game.DIM_Y * 0.10, Game.DIM_X * 0.15, [Game.DIM_X * 0.75, Game.DIM_Y * 0.25]), new Wall(Game.DIM_Y * 0.10, Game.DIM_X * 0.075, [Game.DIM_X * 0.75, Game.DIM_Y * 0.15])];
        } else if (this.level === 3) {
            this.game.enemyTanks = [new EnemyTank({ pos: [Game.DIM_X * 0.90, Game.DIM_Y * 0.85], game: this.game, type: 'green' }), new EnemyTank({ pos: [Game.DIM_X * 0.90, Game.DIM_Y * 0.175], game: this.game, type: 'green' }), new EnemyTank({ pos: [Game.DIM_X * 0.10, Game.DIM_Y * 0.40], game: this.game, type: 'green' }), new EnemyTank({ pos: [Game.DIM_X * 0.10, Game.DIM_Y * 0.10], game: this.game, type: 'green' })];
            this.game.walls = [new Wall(Game.DIM_Y * 0.10, Game.DIM_X * 0.4, [0, Game.DIM_Y * 0.20]), new Wall(Game.DIM_Y * 0.10, Game.DIM_X * 0.4, [0, Game.DIM_Y * 0.55]), new Wall(Game.DIM_Y * 0.10, Game.DIM_X * 0.4, [Game.DIM_X * 0.6, Game.DIM_Y * 0.35]), new Wall(Game.DIM_Y * 0.10, Game.DIM_X * 0.4, [Game.DIM_X * 0.6, Game.DIM_Y * 0.7])];
        }
        this.game.tanks = [this.game.playerTank].concat(this.game.enemyTanks);
    }
}