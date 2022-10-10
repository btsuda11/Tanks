import Game from "./scripts/game"
import GameView from "./scripts/game_view";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game-canvas');
    canvas.height = Game.DIM_Y;
    canvas.width = Game.DIM_X;
    const ctx = canvas.getContext('2d');
    let view = new GameView(ctx);
})