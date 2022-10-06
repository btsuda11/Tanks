# Background
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
![Alt text](/wireframe.png?raw=true "Optional Title")
<br></br>

* Nav Links will include links to the About modal, this project's GitHub repository, and my LinkedIn.
* The shop button will be a clickable button that makes the shop appear on the game board.
* Controls will include an image reminder of the game controls ('wasd' to move, click to shoot bullet, spacebar to place mine) and a restart game button, which returns the player to the home page.
<br></br>

# Technologies, Libraries, APIs
This project will be implemented with the following technologies:

* the `Canvas API` to render the game board
* `Webpack` to bundle the source JavaScript code
* `npm` to manage project dependencies
* `keymaster` library to bind keyboard shortcuts
* sprites to render the tanks, bullets, and animations
<br></br>

# Implementation Timeline

* **Friday & Weekend:** Setup project, get webpack running. Familiarize with Canvas API and get map to show up on the screen. Create `Game`, `Tank`, `Bullet` classes. Get tank to move using the keyboard.
* **Monday:** Get tank to shoot bullets in the direction of cursor. Ensure that bullets can destroy other bullets and tanks upon collision and also ricochet off walls. Create `Mine` class. Get tank to place mines that can explode within a few seconds.
* **Tuesday:** Start working on enemy tank logic and how they fire and move.
* **Wednesday:** Finish up enemy tank logic and how they fire and move. Start working on sprites and making styling for page (nav links, controls). If time, implement shop.
* **Thursday Morning:** Deploy to GitHub pages. If time, rewrite this proposal as a production README.

# Bonus Features

Some anticipated updates are:

* adding a shop for the player to spend their coins on upgrading their tank
* adding more difficult levels
* adding slo-mo to certain levels