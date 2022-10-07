/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game_view */ \"./src/scripts/game_view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('game-canvas');\n  canvas.height = _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DIM_Y;\n  canvas.width = _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DIM_X;\n  const ctx = canvas.getContext('2d');\n  let view = new _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](ctx);\n  view.start();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBRSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2hELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBQWY7RUFDQUQsTUFBTSxDQUFDRSxNQUFQLEdBQWdCTiwyREFBaEI7RUFDQUksTUFBTSxDQUFDSSxLQUFQLEdBQWVSLDJEQUFmO0VBQ0EsTUFBTVUsR0FBRyxHQUFHTixNQUFNLENBQUNPLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtFQUNBLElBQUlDLElBQUksR0FBRyxJQUFJWCwwREFBSixDQUFhUyxHQUFiLENBQVg7RUFDQUUsSUFBSSxDQUFDQyxLQUFMO0FBQ0gsQ0FQRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RhbmtzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCJcbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9zY3JpcHRzL2dhbWVfdmlld1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtY2FudmFzJyk7XG4gICAgY2FudmFzLmhlaWdodCA9IEdhbWUuRElNX1k7XG4gICAgY2FudmFzLndpZHRoID0gR2FtZS5ESU1fWDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBsZXQgdmlldyA9IG5ldyBHYW1lVmlldyhjdHgpO1xuICAgIHZpZXcuc3RhcnQoKTtcbn0pIl0sIm5hbWVzIjpbIkdhbWUiLCJHYW1lVmlldyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiaGVpZ2h0IiwiRElNX1kiLCJ3aWR0aCIsIkRJTV9YIiwiY3R4IiwiZ2V0Q29udGV4dCIsInZpZXciLCJzdGFydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/bullet.js":
/*!*******************************!*\
  !*** ./src/scripts/bullet.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Bullet; }\n/* harmony export */ });\nclass Bullet {\n  constructor(options) {\n    // this.speed = options.speed;\n    this.vel = options.vel;\n    this.tank = options.tank;\n    this.pos = [this.tank.barrelPos[0] + 19, this.tank.barrelPos[1] + 35];\n  }\n\n  draw(ctx) {\n    let bullet = new Image();\n    bullet.src = 'images/bullets/bulletBlue3.png';\n    ctx.drawImage(bullet, this.pos[0], this.pos[1]);\n  }\n\n  move() {\n    // this.pos[0] += this.speed * Math.cos(this.tank.angle);\n    // this.pos[1] += this.speed * Math.sin(this.tank.angle);\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9idWxsZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLE1BQU4sQ0FBYTtFQUN4QkMsV0FBVyxDQUFDQyxPQUFELEVBQVU7SUFDakI7SUFDQSxLQUFLQyxHQUFMLEdBQVdELE9BQU8sQ0FBQ0MsR0FBbkI7SUFDQSxLQUFLQyxJQUFMLEdBQVlGLE9BQU8sQ0FBQ0UsSUFBcEI7SUFDQSxLQUFLQyxHQUFMLEdBQVcsQ0FBQyxLQUFLRCxJQUFMLENBQVVFLFNBQVYsQ0FBb0IsQ0FBcEIsSUFBeUIsRUFBMUIsRUFBOEIsS0FBS0YsSUFBTCxDQUFVRSxTQUFWLENBQW9CLENBQXBCLElBQXlCLEVBQXZELENBQVg7RUFDSDs7RUFFREMsSUFBSSxDQUFDQyxHQUFELEVBQU07SUFDTixJQUFJQyxNQUFNLEdBQUcsSUFBSUMsS0FBSixFQUFiO0lBQ0FELE1BQU0sQ0FBQ0UsR0FBUCxHQUFhLGdDQUFiO0lBQ0FILEdBQUcsQ0FBQ0ksU0FBSixDQUFjSCxNQUFkLEVBQXNCLEtBQUtKLEdBQUwsQ0FBUyxDQUFULENBQXRCLEVBQW1DLEtBQUtBLEdBQUwsQ0FBUyxDQUFULENBQW5DO0VBQ0g7O0VBRURRLElBQUksR0FBRztJQUNIO0lBQ0E7SUFDQSxLQUFLUixHQUFMLENBQVMsQ0FBVCxLQUFlLEtBQUtGLEdBQUwsQ0FBUyxDQUFULENBQWY7SUFDQSxLQUFLRSxHQUFMLENBQVMsQ0FBVCxLQUFlLEtBQUtGLEdBQUwsQ0FBUyxDQUFULENBQWY7RUFDSDs7QUFuQnVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFua3MvLi9zcmMvc2NyaXB0cy9idWxsZXQuanM/MzZiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgLy8gdGhpcy5zcGVlZCA9IG9wdGlvbnMuc3BlZWQ7XG4gICAgICAgIHRoaXMudmVsID0gb3B0aW9ucy52ZWxcbiAgICAgICAgdGhpcy50YW5rID0gb3B0aW9ucy50YW5rO1xuICAgICAgICB0aGlzLnBvcyA9IFt0aGlzLnRhbmsuYmFycmVsUG9zWzBdICsgMTksIHRoaXMudGFuay5iYXJyZWxQb3NbMV0gKyAzNV07XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgbGV0IGJ1bGxldCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBidWxsZXQuc3JjID0gJ2ltYWdlcy9idWxsZXRzL2J1bGxldEJsdWUzLnBuZyc7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoYnVsbGV0LCB0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0pO1xuICAgIH1cblxuICAgIG1vdmUoKSB7XG4gICAgICAgIC8vIHRoaXMucG9zWzBdICs9IHRoaXMuc3BlZWQgKiBNYXRoLmNvcyh0aGlzLnRhbmsuYW5nbGUpO1xuICAgICAgICAvLyB0aGlzLnBvc1sxXSArPSB0aGlzLnNwZWVkICogTWF0aC5zaW4odGhpcy50YW5rLmFuZ2xlKTtcbiAgICAgICAgdGhpcy5wb3NbMF0gKz0gdGhpcy52ZWxbMF07XG4gICAgICAgIHRoaXMucG9zWzFdICs9IHRoaXMudmVsWzFdO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiQnVsbGV0IiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwidmVsIiwidGFuayIsInBvcyIsImJhcnJlbFBvcyIsImRyYXciLCJjdHgiLCJidWxsZXQiLCJJbWFnZSIsInNyYyIsImRyYXdJbWFnZSIsIm1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/bullet.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullet */ \"./src/scripts/bullet.js\");\n/* harmony import */ var _tank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tank */ \"./src/scripts/tank.js\");\n\n\nclass Game {\n  constructor() {\n    this.level = 1;\n    this.playerTank = new _tank__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      pos: [100, 100],\n      game: this\n    });\n    this.enemyTanks = [];\n    this.bullets = new _bullet__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      vel: [0, 0],\n      tank: this.playerTank\n    });\n    this.cursorPos = [];\n    this.bindEventListeners();\n  }\n\n  add(object) {\n    if (object instanceof _tank__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      this.enemyTanks.push(object);\n    } else if (object instanceof _bullet__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      this.bullets.push(object);\n    }\n  }\n\n  update(ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    this.allObjects().forEach(object => {\n      object.move();\n      object.draw(ctx);\n    });\n    requestAnimationFrame(() => this.update(ctx));\n  }\n\n  allObjects() {\n    return [].concat(this.playerTank, this.enemyTanks, this.bullets);\n  }\n\n  static get DIM_X() {\n    return window.innerWidth;\n  }\n\n  static get DIM_Y() {\n    return window.innerHeight;\n  }\n\n  mouseOnPage(e) {\n    // console.log(e)\n    this.cursorPos = [e.clientX, e.clientY]; // console.log(this.cursorPos);\n  }\n\n  bindEventListeners() {\n    document.addEventListener('mousemove', e => this.mouseOnPage(e));\n    [].concat(this.playerTank, this.enemyTanks).forEach(tank => {\n      document.addEventListener('keydown', e => {\n        if (e.code === 'KeyA') tank.vel[0] = -1;\n        if (e.code === 'KeyD') tank.vel[1] = 1;\n        if (e.code === 'KeyW') tank.vel[2] = -1;\n        if (e.code === 'KeyS') tank.vel[3] = 1;\n      });\n      document.addEventListener('keyup', e => {\n        if (e.code === 'KeyA') tank.vel[0] = 0;\n        if (e.code === 'KeyD') tank.vel[1] = 0;\n        if (e.code === 'KeyW') tank.vel[2] = 0;\n        if (e.code === 'KeyS') tank.vel[3] = 0;\n      });\n      document.addEventListener('click', tank.shoot);\n    });\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFGLEtBQVcsTUFBZixFQUF1QjFCLElBQUksQ0FBQ0QsR0FBTCxDQUFTLENBQVQsSUFBYyxDQUFkO01BQzFCLENBTEQ7TUFNQXlCLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUNKLENBQUMsSUFBSTtRQUNwQyxJQUFJQSxDQUFDLENBQUNLLElBQUYsS0FBVyxNQUFmLEVBQXVCMUIsSUFBSSxDQUFDRCxHQUFMLENBQVMsQ0FBVCxJQUFjLENBQWQ7UUFDdkIsSUFBSXNCLENBQUMsQ0FBQ0ssSUFBRixLQUFXLE1BQWYsRUFBdUIxQixJQUFJLENBQUNELEdBQUwsQ0FBUyxDQUFULElBQWMsQ0FBZDtRQUN2QixJQUFJc0IsQ0FBQyxDQUFDSyxJQUFGLEtBQVcsTUFBZixFQUF1QjFCLElBQUksQ0FBQ0QsR0FBTCxDQUFTLENBQVQsSUFBYyxDQUFkO1FBQ3ZCLElBQUlzQixDQUFDLENBQUNLLElBQUYsS0FBVyxNQUFmLEVBQXVCMUIsSUFBSSxDQUFDRCxHQUFMLENBQVMsQ0FBVCxJQUFjLENBQWQ7TUFDMUIsQ0FMRDtNQU1BeUIsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQ3pCLElBQUksQ0FBQzJCLEtBQXhDO0lBQ0gsQ0FkRDtFQWVIOztBQTlEcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YW5rcy8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnVsbGV0IGZyb20gXCIuL2J1bGxldFwiO1xuaW1wb3J0IFRhbmsgZnJvbSBcIi4vdGFua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9IDE7XG4gICAgICAgIHRoaXMucGxheWVyVGFuayA9IG5ldyBUYW5rKHtwb3M6IFsxMDAsIDEwMF0sIGdhbWU6IHRoaXN9KTtcbiAgICAgICAgdGhpcy5lbmVteVRhbmtzID0gW107XG4gICAgICAgIHRoaXMuYnVsbGV0cyA9IG5ldyBCdWxsZXQoe3ZlbDogWzAsIDBdLCB0YW5rOiB0aGlzLnBsYXllclRhbmt9KTtcbiAgICAgICAgdGhpcy5jdXJzb3JQb3MgPSBbXTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBhZGQob2JqZWN0KSB7XG4gICAgICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBUYW5rKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15VGFua3MucHVzaChvYmplY3QpO1xuICAgICAgICB9IGVsc2UgaWYgKG9iamVjdCBpbnN0YW5jZW9mIEJ1bGxldCkge1xuICAgICAgICAgICAgdGhpcy5idWxsZXRzLnB1c2gob2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZShjdHgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBHYW1lLkRJTV9YLCBHYW1lLkRJTV9ZKTtcbiAgICAgICAgdGhpcy5hbGxPYmplY3RzKCkuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgICAgICAgb2JqZWN0Lm1vdmUoKTtcbiAgICAgICAgICAgIG9iamVjdC5kcmF3KGN0eCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy51cGRhdGUoY3R4KSk7XG4gICAgfVxuXG4gICAgYWxsT2JqZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIFtdLmNvbmNhdCh0aGlzLnBsYXllclRhbmssIHRoaXMuZW5lbXlUYW5rcywgdGhpcy5idWxsZXRzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IERJTV9YKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LmlubmVyV2lkdGg7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBESU1fWSgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB9XG5cbiAgICBtb3VzZU9uUGFnZShlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIHRoaXMuY3Vyc29yUG9zID0gW2UuY2xpZW50WCwgZS5jbGllbnRZXTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jdXJzb3JQb3MpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHRoaXMubW91c2VPblBhZ2UoZSkpO1xuICAgICAgICBbXS5jb25jYXQodGhpcy5wbGF5ZXJUYW5rLCB0aGlzLmVuZW15VGFua3MpLmZvckVhY2godGFuayA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gJ0tleUEnKSB0YW5rLnZlbFswXSA9IC0xO1xuICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT09ICdLZXlEJykgdGFuay52ZWxbMV0gPSAxO1xuICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT09ICdLZXlXJykgdGFuay52ZWxbMl0gPSAtMTtcbiAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09PSAnS2V5UycpIHRhbmsudmVsWzNdID0gMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09PSAnS2V5QScpIHRhbmsudmVsWzBdID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09PSAnS2V5RCcpIHRhbmsudmVsWzFdID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09PSAnS2V5VycpIHRhbmsudmVsWzJdID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09PSAnS2V5UycpIHRhbmsudmVsWzNdID0gMDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YW5rLnNob290KTtcbiAgICAgICAgfSlcbiAgICB9XG59Il0sIm5hbWVzIjpbIkJ1bGxldCIsIlRhbmsiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJsZXZlbCIsInBsYXllclRhbmsiLCJwb3MiLCJnYW1lIiwiZW5lbXlUYW5rcyIsImJ1bGxldHMiLCJ2ZWwiLCJ0YW5rIiwiY3Vyc29yUG9zIiwiYmluZEV2ZW50TGlzdGVuZXJzIiwiYWRkIiwib2JqZWN0IiwicHVzaCIsInVwZGF0ZSIsImN0eCIsImNsZWFyUmVjdCIsIkRJTV9YIiwiRElNX1kiLCJhbGxPYmplY3RzIiwiZm9yRWFjaCIsIm1vdmUiLCJkcmF3IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY29uY2F0Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwibW91c2VPblBhZ2UiLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb2RlIiwic2hvb3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameView; }\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/scripts/game.js\");\n\nclass GameView {\n  constructor(ctx) {\n    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.ctx = ctx;\n    this.cursorPos = [];\n  }\n\n  start() {\n    this.game.update(this.ctx);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVlLE1BQU1DLFFBQU4sQ0FBZTtFQUMxQkMsV0FBVyxDQUFDQyxHQUFELEVBQU07SUFDYixLQUFLQyxJQUFMLEdBQVksSUFBSUosNkNBQUosRUFBWjtJQUNBLEtBQUtHLEdBQUwsR0FBV0EsR0FBWDtJQUNBLEtBQUtFLFNBQUwsR0FBaUIsRUFBakI7RUFDSDs7RUFFREMsS0FBSyxHQUFHO0lBQ0osS0FBS0YsSUFBTCxDQUFVRyxNQUFWLENBQWlCLEtBQUtKLEdBQXRCO0VBQ0g7O0FBVHlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFua3MvLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanM/ODBlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoKTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY3Vyc29yUG9zID0gW107XG4gICAgfVxuICAgIFxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmdhbWUudXBkYXRlKHRoaXMuY3R4KTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIkdhbWUiLCJHYW1lVmlldyIsImNvbnN0cnVjdG9yIiwiY3R4IiwiZ2FtZSIsImN1cnNvclBvcyIsInN0YXJ0IiwidXBkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ }),

/***/ "./src/scripts/tank.js":
/*!*****************************!*\
  !*** ./src/scripts/tank.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tank; }\n/* harmony export */ });\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullet */ \"./src/scripts/bullet.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/scripts/game.js\");\n\n\nclass Tank {\n  constructor(options) {\n    this.barrelPos = options.pos;\n    this.bodyPos = options.pos; // this.angle = 0;\n\n    this.vel = [0, 0, 0, 0]; // [vx(left), vx(right), vy(up), vy(down)]\n\n    this.game = options.game;\n  }\n\n  draw(ctx) {\n    let body = new Image();\n    let barrel = new Image();\n    body.src = 'images/tanks/tankBody_blue_outline.png';\n    barrel.src = 'images/tanks/tankBlue_barrel2_outline.png';\n    ctx.drawImage(body, this.bodyPos[0], this.bodyPos[1]);\n    ctx.drawImage(barrel, this.barrelPos[0] + 15, this.barrelPos[1] + 15);\n  }\n\n  move() {\n    this.barrelPos[0] += this.vel[0];\n    this.barrelPos[0] += this.vel[1];\n    this.barrelPos[1] += this.vel[2];\n    this.barrelPos[1] += this.vel[3];\n    this.bodyPos[0] += this.vel[0];\n    this.bodyPos[0] += this.vel[1];\n    this.bodyPos[1] += this.vel[2];\n    this.bodyPos[1] += this.vel[3]; // this.angle = atan2(mouseY - this.barrelPos[0], mouseX - this.barrelPos[1]);\n  }\n\n  shoot() {\n    const bullet = new _bullet__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      speed: 3,\n      tank: this\n    });\n    this.game.add(bullet);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90YW5rLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFFZSxNQUFNRSxJQUFOLENBQVc7RUFDdEJDLFdBQVcsQ0FBQ0MsT0FBRCxFQUFVO0lBQ2pCLEtBQUtDLFNBQUwsR0FBaUJELE9BQU8sQ0FBQ0UsR0FBekI7SUFDQSxLQUFLQyxPQUFMLEdBQWVILE9BQU8sQ0FBQ0UsR0FBdkIsQ0FGaUIsQ0FHakI7O0lBQ0EsS0FBS0UsR0FBTCxHQUFXLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUFYLENBSmlCLENBSVE7O0lBQ3pCLEtBQUtDLElBQUwsR0FBWUwsT0FBTyxDQUFDSyxJQUFwQjtFQUNIOztFQUVEQyxJQUFJLENBQUNDLEdBQUQsRUFBTTtJQUNOLElBQUlDLElBQUksR0FBRyxJQUFJQyxLQUFKLEVBQVg7SUFDQSxJQUFJQyxNQUFNLEdBQUcsSUFBSUQsS0FBSixFQUFiO0lBQ0FELElBQUksQ0FBQ0csR0FBTCxHQUFXLHdDQUFYO0lBQ0FELE1BQU0sQ0FBQ0MsR0FBUCxHQUFhLDJDQUFiO0lBQ0FKLEdBQUcsQ0FBQ0ssU0FBSixDQUFjSixJQUFkLEVBQW9CLEtBQUtMLE9BQUwsQ0FBYSxDQUFiLENBQXBCLEVBQXFDLEtBQUtBLE9BQUwsQ0FBYSxDQUFiLENBQXJDO0lBQ0FJLEdBQUcsQ0FBQ0ssU0FBSixDQUFjRixNQUFkLEVBQXNCLEtBQUtULFNBQUwsQ0FBZSxDQUFmLElBQW9CLEVBQTFDLEVBQThDLEtBQUtBLFNBQUwsQ0FBZSxDQUFmLElBQW9CLEVBQWxFO0VBQ0g7O0VBRURZLElBQUksR0FBRztJQUNILEtBQUtaLFNBQUwsQ0FBZSxDQUFmLEtBQXFCLEtBQUtHLEdBQUwsQ0FBUyxDQUFULENBQXJCO0lBQ0EsS0FBS0gsU0FBTCxDQUFlLENBQWYsS0FBcUIsS0FBS0csR0FBTCxDQUFTLENBQVQsQ0FBckI7SUFDQSxLQUFLSCxTQUFMLENBQWUsQ0FBZixLQUFxQixLQUFLRyxHQUFMLENBQVMsQ0FBVCxDQUFyQjtJQUNBLEtBQUtILFNBQUwsQ0FBZSxDQUFmLEtBQXFCLEtBQUtHLEdBQUwsQ0FBUyxDQUFULENBQXJCO0lBQ0EsS0FBS0QsT0FBTCxDQUFhLENBQWIsS0FBbUIsS0FBS0MsR0FBTCxDQUFTLENBQVQsQ0FBbkI7SUFDQSxLQUFLRCxPQUFMLENBQWEsQ0FBYixLQUFtQixLQUFLQyxHQUFMLENBQVMsQ0FBVCxDQUFuQjtJQUNBLEtBQUtELE9BQUwsQ0FBYSxDQUFiLEtBQW1CLEtBQUtDLEdBQUwsQ0FBUyxDQUFULENBQW5CO0lBQ0EsS0FBS0QsT0FBTCxDQUFhLENBQWIsS0FBbUIsS0FBS0MsR0FBTCxDQUFTLENBQVQsQ0FBbkIsQ0FSRyxDQVNIO0VBQ0g7O0VBRURVLEtBQUssR0FBRztJQUNKLE1BQU1DLE1BQU0sR0FBRyxJQUFJbkIsK0NBQUosQ0FBVztNQUFDb0IsS0FBSyxFQUFFLENBQVI7TUFBV0MsSUFBSSxFQUFFO0lBQWpCLENBQVgsQ0FBZjtJQUNBLEtBQUtaLElBQUwsQ0FBVWEsR0FBVixDQUFjSCxNQUFkO0VBQ0g7O0FBakNxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RhbmtzLy4vc3JjL3NjcmlwdHMvdGFuay5qcz9mYzc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdWxsZXQgZnJvbSBcIi4vYnVsbGV0XCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhbmsge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5iYXJyZWxQb3MgPSBvcHRpb25zLnBvcztcbiAgICAgICAgdGhpcy5ib2R5UG9zID0gb3B0aW9ucy5wb3M7XG4gICAgICAgIC8vIHRoaXMuYW5nbGUgPSAwO1xuICAgICAgICB0aGlzLnZlbCA9IFswLCAwLCAwLCAwXTsgLy8gW3Z4KGxlZnQpLCB2eChyaWdodCksIHZ5KHVwKSwgdnkoZG93bildXG4gICAgICAgIHRoaXMuZ2FtZSA9IG9wdGlvbnMuZ2FtZTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBsZXQgYm9keSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBsZXQgYmFycmVsID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGJvZHkuc3JjID0gJ2ltYWdlcy90YW5rcy90YW5rQm9keV9ibHVlX291dGxpbmUucG5nJ1xuICAgICAgICBiYXJyZWwuc3JjID0gJ2ltYWdlcy90YW5rcy90YW5rQmx1ZV9iYXJyZWwyX291dGxpbmUucG5nJztcbiAgICAgICAgY3R4LmRyYXdJbWFnZShib2R5LCB0aGlzLmJvZHlQb3NbMF0sIHRoaXMuYm9keVBvc1sxXSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoYmFycmVsLCB0aGlzLmJhcnJlbFBvc1swXSArIDE1LCB0aGlzLmJhcnJlbFBvc1sxXSArIDE1KTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLmJhcnJlbFBvc1swXSArPSB0aGlzLnZlbFswXTtcbiAgICAgICAgdGhpcy5iYXJyZWxQb3NbMF0gKz0gdGhpcy52ZWxbMV07XG4gICAgICAgIHRoaXMuYmFycmVsUG9zWzFdICs9IHRoaXMudmVsWzJdO1xuICAgICAgICB0aGlzLmJhcnJlbFBvc1sxXSArPSB0aGlzLnZlbFszXTtcbiAgICAgICAgdGhpcy5ib2R5UG9zWzBdICs9IHRoaXMudmVsWzBdO1xuICAgICAgICB0aGlzLmJvZHlQb3NbMF0gKz0gdGhpcy52ZWxbMV07XG4gICAgICAgIHRoaXMuYm9keVBvc1sxXSArPSB0aGlzLnZlbFsyXTtcbiAgICAgICAgdGhpcy5ib2R5UG9zWzFdICs9IHRoaXMudmVsWzNdO1xuICAgICAgICAvLyB0aGlzLmFuZ2xlID0gYXRhbjIobW91c2VZIC0gdGhpcy5iYXJyZWxQb3NbMF0sIG1vdXNlWCAtIHRoaXMuYmFycmVsUG9zWzFdKTtcbiAgICB9XG5cbiAgICBzaG9vdCgpIHtcbiAgICAgICAgY29uc3QgYnVsbGV0ID0gbmV3IEJ1bGxldCh7c3BlZWQ6IDMsIHRhbms6IHRoaXN9KTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZChidWxsZXQpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiQnVsbGV0IiwiR2FtZSIsIlRhbmsiLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJiYXJyZWxQb3MiLCJwb3MiLCJib2R5UG9zIiwidmVsIiwiZ2FtZSIsImRyYXciLCJjdHgiLCJib2R5IiwiSW1hZ2UiLCJiYXJyZWwiLCJzcmMiLCJkcmF3SW1hZ2UiLCJtb3ZlIiwic2hvb3QiLCJidWxsZXQiLCJzcGVlZCIsInRhbmsiLCJhZGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/tank.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YW5rcy8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;