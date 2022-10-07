import Tank from "./scripts/tank";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('game-canvas');
    canvas.height = 750;
    canvas.width = 1000;
    const ctx = canvas.getContext('2d');
    let tank = new Tank({pos: [100, 100], vel: [30, 0], color: 'royalblue'});
    tank.draw(ctx);
})