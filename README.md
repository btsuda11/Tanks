# Table of Contents
* [Introduction](#background)
* [How To Play](#how-to-play)
* [Features](#features)
    * [Smooth Movement and Barrel Rotation](#smooth-movement-and-barrel-rotation)
    * [Mine Placement and Detonation](#mine-placement-and-detonation)
    * [Enemy Tank Movement](#enemy-tank-movement)
* [Technologies, Libraries, APIs](#technologies-libraries-apis)
* [Bonus Features](#bonus-features)
<br>
<br>

# Introduction
A tank shooting game built with JavaScript, HTML, and CSS based off of Wii Play's minigame, Tanks! Each level of Tanks! plays out on a rectangular map that is sectioned off by walls and houses the player's tank and a certain number of enemy tanks. The player completes the level by destroying all enemy tanks without losing all of its lives. 
<br>
<br>

# How To Play
[Click Here To Play](https://btsuda11.github.io/Tanks/)
| **Key**           | **Control** |
| ----------------- | ----------- |
| WASD              | Move Tank   |
| Space Bar         | Place Mine  |
| Cursor Movement   | Rotate barrel to fire in direction |
| Mouse Click       | Fire Bullet |
<br>

# Features
## **Smooth Movement and Barrel Rotation**
* Created smooth tank movement using different velocity components and specific key bindings.
* Barrel of tank rotates to cursor location by using a separate tank barrel and body image and trigonometric angles.
<br>
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
<br>

## **Mine Placement and Detonation**
* Mines detonate after 10 seconds if not prematurely hit.
* Detonated mines prematurely upon being hit by oncoming bullets.
* Expanded the radius of the mine so that will destroy all tanks in a given radius.
<br>
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

<br>

## **Enemy Tank Movement**
* Will move according to player tank location in the direction that will reach the player tank quicker.
<br>
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
<br>

# Technologies, Libraries, APIs
This project implemented the following technologies:

* the `Canvas API` to render the game board
* `Webpack` to bundle the source JavaScript code
* `npm` to manage project dependencies
* sprites to render the tanks and bullets
<br>
<br>

# Bonus Features

Some anticipated updates are:

* adding more difficult levels and different types of tanks
* keeping track of how many tanks a player has destroyed
* a results screen once the game is over for how many tanks the player has destroyed
* adding a shop for the player to spend their coins on upgrading their tank




<!-- # Background
Bombs Away is based off of Wii Play's minigame, Tanks! Each level of Tanks! plays out on a rectangular map that is sectioned off by walls and houses the player's tank and a certain number of enemy tanks. The player completes the level by destroying all enemy tanks without losing all of its lives. This simulation will introduce different variations of tanks and reward the player with coins for destroying enemy tanks.
<br></br>

# Functionality & MVPs
With Bombs Away, players will be able to:

* control their tank with the 'w', 'a', 's', 'd' keys
* shoot bullets in the direction of the cursor with a click
* place mines that explode after a few seconds with the spacebar
* gain more lives upon completion of levels
<br></br>

In addition, this project will include:

* an About modal describing the background and rules of the game
* a production README
<br></br>

# Wireframe
![Alt text](./images/wireframe.png?raw=true "Optional Title")
<br></br>

* Nav Links will include links to the About modal, this project's GitHub repository, and my LinkedIn.
* The shop button will be a clickable button that makes the shop appear on the game board.
* Controls will include an image reminder of the game controls ('wasd' to move, click to shoot bullet, spacebar to place mine) and a restart game button, which returns the player to the home page.
<br></br>



# Implementation Timeline

* **Friday & Weekend:** Setup project, get webpack running. Familiarize with Canvas API and get map to show up on the screen. Create `Game`, `Tank`, `Bullet` classes. Get tank to move using the keyboard.
* **Monday:** Get tank to shoot bullets in the direction of cursor. Ensure that bullets can destroy other bullets and tanks upon collision and also ricochet off walls. Create `Mine` class. Get tank to place mines that can explode within a few seconds.
* **Tuesday:** Start working on enemy tank logic and how they fire and move.
* **Wednesday:** Finish up enemy tank logic and how they fire and move. Start working on sprites and making styling for page (nav links, controls). If time, implement shop.
* **Thursday Morning:** Deploy to GitHub pages. If time, rewrite this proposal as a production README. -->