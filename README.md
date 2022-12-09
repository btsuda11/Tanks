# Tanks

[Click to view!](https://btsuda11.github.io/Tanks/)

## Technologies Implemented
This project implemented the following technologies:

* the `Canvas API` to render the game board
* `Webpack` to bundle the source JavaScript code
* `npm` to manage project dependencies
* sprites to render the tanks and bullets

## Background
A tank shooting game built with JavaScript, HTML, and CSS based off of Wii Play's minigame, Tanks! Each level of Tanks! plays out on a rectangular map that is sectioned off by walls and houses the player's tank and a certain number of enemy tanks. The player completes the level by destroying all enemy tanks without losing all of its lives. 
<br>

## Features
### **Smooth Movement and Barrel Rotation**
* Created smooth tank movement using different velocity components and specific key bindings.
* Barrel of tank rotates to cursor location by using a separate tank barrel and body image and trigonometric angles.
<br>

```javascript
// src/scripts/game.js
bindGameKeys() {
    ...
    document.addEventListener('keydown', e => {
        if (e.code === 'KeyA') this.playerTank.vel[0] = -1;
        if (e.code === 'KeyD') this.playerTank.vel[1] = 1;
        if (e.code === 'KeyW') this.playerTank.vel[2] = -1;
        if (e.code === 'KeyS') this.playerTank.vel[3] = 1;
    });
    document.addEventListener('keyup', e => {
        if (e.code === 'KeyA') this.playerTank.vel[0] = 0;
        if (e.code === 'KeyD') this.playerTank.vel[1] = 0;
        if (e.code === 'KeyW') this.playerTank.vel[2] = 0;
        if (e.code === 'KeyS') this.playerTank.vel[3] = 0;
    });
    ...
};
```

### **Mine Placement and Detonation**
* Mines detonate after 10 seconds if not prematurely hit.
* Detonated mines prematurely upon being hit by oncoming bullets.
* Expanded the radius of the mine so that will destroy all tanks in a given radius.
<br>

```javascript
// src/scripts/mine.js
constructor() {
    ...
    this.timeoutID = setTimeout(() => {
        this.explode();
    }, 10000);
}

explode() {
    ...
    for (let i = 0; i < this.tank.game.tanks.length; i++) {
        if (this.inRadius(this.tank.game.tanks[i])) {
            this.tank.game.remove(this);
            this.tank.game.remove(this.tank.game.tanks[i]);
            return;
        } 
    }
    this.tank.game.remove(this);
};
```

### **Enemy Tank Movement**
* Will move according to player tank location in the direction that will reach the player tank quicker.
<br>

```javascript
// src/scripts.enemy_tank.js
move() {
    ...
    if (Math.abs(this.distToPlayer()[1]) < Math.abs(this.distToPlayer()[0]) && this.distToPlayer()[2] > 200 && Math.abs(this.distToPlayer()[1]) > 5) {
        if (this.distToPlayer()[1] > 0) {
            this.vel[3] = 0.75;
        } else if (this.distToPlayer()[1] < 0) {
            this.vel[2] = -0.75;
        }
    } else if (Math.abs(this.distToPlayer()[0]) < Math.abs(this.distToPlayer()[1]) && this.distToPlayer()[2] > 200 && Math.abs(this.distToPlayer()[0]) > 5) {
        if (this.distToPlayer()[0] > 0) {
            this.vel[1] = 0.75;
        } else if (this.distToPlayer()[0] < 0) {
            this.vel[0] = -0.75;
        }
    }
    ...
};
```

## Bonus Features

Some anticipated updates are:

* adding more difficult levels and different types of tanks
* keeping track of how many tanks a player has destroyed
* a results screen once the game is over for how many tanks the player has destroyed
* adding a shop for the player to spend their coins on upgrading their tank
