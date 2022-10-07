import GameView from "./scripts/game_view";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game-canvas');
    canvas.height = 750;
    canvas.width = 1000;
    const ctx = canvas.getContext('2d');
    let view = new GameView(ctx);
    view.start();
})