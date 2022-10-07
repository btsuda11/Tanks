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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Bullet; }\n/* harmony export */ });\nclass Bullet {\n  constructor(options) {\n    // this.speed = options.speed;\n    this.vel = options.vel;\n    this.tank = options.tank;\n    this.pos = [this.tank.barrelPos[0] + 21, this.tank.barrelPos[1] + 45];\n  }\n\n  draw(ctx) {\n    ctx.arc(this.pos[0], this.pos[1], 3, 0, Math.PI * 2);\n    ctx.fill();\n  }\n\n  move() {\n    // this.pos[0] += this.speed * Math.cos(this.tank.angle);\n    // this.pos[1] += this.speed * Math.sin(this.tank.angle);\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9idWxsZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLE1BQU4sQ0FBYTtFQUN4QkMsV0FBVyxDQUFDQyxPQUFELEVBQVU7SUFDakI7SUFDQSxLQUFLQyxHQUFMLEdBQVdELE9BQU8sQ0FBQ0MsR0FBbkI7SUFDQSxLQUFLQyxJQUFMLEdBQVlGLE9BQU8sQ0FBQ0UsSUFBcEI7SUFDQSxLQUFLQyxHQUFMLEdBQVcsQ0FBQyxLQUFLRCxJQUFMLENBQVVFLFNBQVYsQ0FBb0IsQ0FBcEIsSUFBeUIsRUFBMUIsRUFBOEIsS0FBS0YsSUFBTCxDQUFVRSxTQUFWLENBQW9CLENBQXBCLElBQXlCLEVBQXZELENBQVg7RUFDSDs7RUFFREMsSUFBSSxDQUFDQyxHQUFELEVBQU07SUFDTkEsR0FBRyxDQUFDQyxHQUFKLENBQVEsS0FBS0osR0FBTCxDQUFTLENBQVQsQ0FBUixFQUFxQixLQUFLQSxHQUFMLENBQVMsQ0FBVCxDQUFyQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxFQUF3Q0ssSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FBbEQ7SUFDQUgsR0FBRyxDQUFDSSxJQUFKO0VBQ0g7O0VBRURDLElBQUksR0FBRztJQUNIO0lBQ0E7SUFDQSxLQUFLUixHQUFMLENBQVMsQ0FBVCxLQUFlLEtBQUtGLEdBQUwsQ0FBUyxDQUFULENBQWY7SUFDQSxLQUFLRSxHQUFMLENBQVMsQ0FBVCxLQUFlLEtBQUtGLEdBQUwsQ0FBUyxDQUFULENBQWY7RUFDSDs7QUFsQnVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFua3MvLi9zcmMvc2NyaXB0cy9idWxsZXQuanM/MzZiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXQge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgLy8gdGhpcy5zcGVlZCA9IG9wdGlvbnMuc3BlZWQ7XG4gICAgICAgIHRoaXMudmVsID0gb3B0aW9ucy52ZWxcbiAgICAgICAgdGhpcy50YW5rID0gb3B0aW9ucy50YW5rO1xuICAgICAgICB0aGlzLnBvcyA9IFt0aGlzLnRhbmsuYmFycmVsUG9zWzBdICsgMjEsIHRoaXMudGFuay5iYXJyZWxQb3NbMV0gKyA0NV07XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmFyYyh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICAvLyB0aGlzLnBvc1swXSArPSB0aGlzLnNwZWVkICogTWF0aC5jb3ModGhpcy50YW5rLmFuZ2xlKTtcbiAgICAgICAgLy8gdGhpcy5wb3NbMV0gKz0gdGhpcy5zcGVlZCAqIE1hdGguc2luKHRoaXMudGFuay5hbmdsZSk7XG4gICAgICAgIHRoaXMucG9zWzBdICs9IHRoaXMudmVsWzBdO1xuICAgICAgICB0aGlzLnBvc1sxXSArPSB0aGlzLnZlbFsxXTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIkJ1bGxldCIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsInZlbCIsInRhbmsiLCJwb3MiLCJiYXJyZWxQb3MiLCJkcmF3IiwiY3R4IiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCIsIm1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/bullet.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullet */ \"./src/scripts/bullet.js\");\n/* harmony import */ var _tank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tank */ \"./src/scripts/tank.js\");\n\n\nclass Game {\n  constructor() {\n    this.level = 1;\n    this.playerTank = new _tank__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      pos: [100, 100],\n      vel: [0, 0],\n      game: this\n    });\n    this.enemyTanks = [];\n    this.bullets = new _bullet__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      vel: [0, 0],\n      tank: this.playerTank\n    });\n  }\n\n  add(object) {\n    if (object instanceof _tank__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      this.enemyTanks.push(object);\n    } else if (object instanceof _bullet__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      this.bullets.push(object);\n    }\n  }\n\n  update(ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    this.allObjects().forEach(object => {\n      object.move();\n      object.draw(ctx);\n    });\n    requestAnimationFrame(() => this.update(ctx));\n  }\n\n  allObjects() {\n    return [].concat(this.playerTank, this.enemyTanks, this.bullets);\n  }\n\n  static get DIM_X() {\n    return 1000;\n  }\n\n  static get DIM_Y() {\n    return 750;\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFFZSxNQUFNRSxJQUFOLENBQVc7RUFDdEJDLFdBQVcsR0FBRztJQUNWLEtBQUtDLEtBQUwsR0FBYSxDQUFiO0lBQ0EsS0FBS0MsVUFBTCxHQUFrQixJQUFJSiw2Q0FBSixDQUFTO01BQUNLLEdBQUcsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQU47TUFBa0JDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQXZCO01BQStCQyxJQUFJLEVBQUU7SUFBckMsQ0FBVCxDQUFsQjtJQUNBLEtBQUtDLFVBQUwsR0FBa0IsRUFBbEI7SUFDQSxLQUFLQyxPQUFMLEdBQWUsSUFBSVYsK0NBQUosQ0FBVztNQUFDTyxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFOO01BQWNJLElBQUksRUFBRSxLQUFLTjtJQUF6QixDQUFYLENBQWY7RUFDSDs7RUFFRE8sR0FBRyxDQUFDQyxNQUFELEVBQVM7SUFDUixJQUFJQSxNQUFNLFlBQVlaLDZDQUF0QixFQUE0QjtNQUN4QixLQUFLUSxVQUFMLENBQWdCSyxJQUFoQixDQUFxQkQsTUFBckI7SUFDSCxDQUZELE1BRU8sSUFBSUEsTUFBTSxZQUFZYiwrQ0FBdEIsRUFBOEI7TUFDakMsS0FBS1UsT0FBTCxDQUFhSSxJQUFiLENBQWtCRCxNQUFsQjtJQUNIO0VBQ0o7O0VBRURFLE1BQU0sQ0FBQ0MsR0FBRCxFQUFNO0lBQ1JBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0JmLElBQUksQ0FBQ2dCLEtBQXpCLEVBQWdDaEIsSUFBSSxDQUFDaUIsS0FBckM7SUFDQSxLQUFLQyxVQUFMLEdBQWtCQyxPQUFsQixDQUEwQlIsTUFBTSxJQUFJO01BQ2hDQSxNQUFNLENBQUNTLElBQVA7TUFDQVQsTUFBTSxDQUFDVSxJQUFQLENBQVlQLEdBQVo7SUFDSCxDQUhEO0lBSUFRLHFCQUFxQixDQUFDLE1BQU0sS0FBS1QsTUFBTCxDQUFZQyxHQUFaLENBQVAsQ0FBckI7RUFDSDs7RUFFREksVUFBVSxHQUFHO0lBQ1QsT0FBTyxHQUFHSyxNQUFILENBQVUsS0FBS3BCLFVBQWYsRUFBMkIsS0FBS0ksVUFBaEMsRUFBNEMsS0FBS0MsT0FBakQsQ0FBUDtFQUNIOztFQUVlLFdBQUxRLEtBQUssR0FBRztJQUNmLE9BQU8sSUFBUDtFQUNIOztFQUVlLFdBQUxDLEtBQUssR0FBRztJQUNmLE9BQU8sR0FBUDtFQUNIOztBQW5DcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YW5rcy8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnVsbGV0IGZyb20gXCIuL2J1bGxldFwiO1xuaW1wb3J0IFRhbmsgZnJvbSBcIi4vdGFua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9IDE7XG4gICAgICAgIHRoaXMucGxheWVyVGFuayA9IG5ldyBUYW5rKHtwb3M6IFsxMDAsIDEwMF0sIHZlbDogWzAsIDBdLCBnYW1lOiB0aGlzfSk7XG4gICAgICAgIHRoaXMuZW5lbXlUYW5rcyA9IFtdO1xuICAgICAgICB0aGlzLmJ1bGxldHMgPSBuZXcgQnVsbGV0KHt2ZWw6IFswLCAwXSwgdGFuazogdGhpcy5wbGF5ZXJUYW5rfSk7XG4gICAgfVxuXG4gICAgYWRkKG9iamVjdCkge1xuICAgICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgVGFuaykge1xuICAgICAgICAgICAgdGhpcy5lbmVteVRhbmtzLnB1c2gob2JqZWN0KTtcbiAgICAgICAgfSBlbHNlIGlmIChvYmplY3QgaW5zdGFuY2VvZiBCdWxsZXQpIHtcbiAgICAgICAgICAgIHRoaXMuYnVsbGV0cy5wdXNoKG9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoY3R4KSB7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgR2FtZS5ESU1fWCwgR2FtZS5ESU1fWSk7XG4gICAgICAgIHRoaXMuYWxsT2JqZWN0cygpLmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgICAgIG9iamVjdC5tb3ZlKCk7XG4gICAgICAgICAgICBvYmplY3QuZHJhdyhjdHgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMudXBkYXRlKGN0eCkpO1xuICAgIH1cblxuICAgIGFsbE9iamVjdHMoKSB7XG4gICAgICAgIHJldHVybiBbXS5jb25jYXQodGhpcy5wbGF5ZXJUYW5rLCB0aGlzLmVuZW15VGFua3MsIHRoaXMuYnVsbGV0cyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBESU1fWCgpIHtcbiAgICAgICAgcmV0dXJuIDEwMDA7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBESU1fWSgpIHtcbiAgICAgICAgcmV0dXJuIDc1MDtcbiAgICB9XG59Il0sIm5hbWVzIjpbIkJ1bGxldCIsIlRhbmsiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJsZXZlbCIsInBsYXllclRhbmsiLCJwb3MiLCJ2ZWwiLCJnYW1lIiwiZW5lbXlUYW5rcyIsImJ1bGxldHMiLCJ0YW5rIiwiYWRkIiwib2JqZWN0IiwicHVzaCIsInVwZGF0ZSIsImN0eCIsImNsZWFyUmVjdCIsIkRJTV9YIiwiRElNX1kiLCJhbGxPYmplY3RzIiwiZm9yRWFjaCIsIm1vdmUiLCJkcmF3IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameView; }\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/scripts/game.js\");\n\nclass GameView {\n  constructor(ctx) {\n    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.ctx = ctx;\n  }\n\n  start() {\n    this.game.update(this.ctx);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVlLE1BQU1DLFFBQU4sQ0FBZTtFQUMxQkMsV0FBVyxDQUFDQyxHQUFELEVBQU07SUFDYixLQUFLQyxJQUFMLEdBQVksSUFBSUosNkNBQUosRUFBWjtJQUNBLEtBQUtHLEdBQUwsR0FBV0EsR0FBWDtFQUNIOztFQUVERSxLQUFLLEdBQUc7SUFDSixLQUFLRCxJQUFMLENBQVVFLE1BQVYsQ0FBaUIsS0FBS0gsR0FBdEI7RUFDSDs7QUFSeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YW5rcy8uL3NyYy9zY3JpcHRzL2dhbWVfdmlldy5qcz84MGVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSgpO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB9XG4gICAgXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS51cGRhdGUodGhpcy5jdHgpO1xuICAgIH1cblxuICAgIFxufSJdLCJuYW1lcyI6WyJHYW1lIiwiR2FtZVZpZXciLCJjb25zdHJ1Y3RvciIsImN0eCIsImdhbWUiLCJzdGFydCIsInVwZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ }),

/***/ "./src/scripts/tank.js":
/*!*****************************!*\
  !*** ./src/scripts/tank.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tank; }\n/* harmony export */ });\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullet */ \"./src/scripts/bullet.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/scripts/game.js\");\n\n\nclass Tank {\n  constructor(options) {\n    this.barrelPos = options.pos;\n    this.bodyPos = options.pos;\n    this.angle = options.angle;\n    this.vel = [0, 0, 0, 0]; // [vx(left), vx(right), vy(up), vy(down)]\n\n    this.game = options.game;\n    addEventListener('keydown', e => {\n      if (e.code === 'KeyA') this.vel[0] = -1;\n      if (e.code === 'KeyD') this.vel[1] = 1;\n      if (e.code === 'KeyW') this.vel[2] = -1;\n      if (e.code === 'KeyS') this.vel[3] = 1;\n    });\n    addEventListener('keyup', e => {\n      if (e.code === 'KeyA') this.vel[0] = 0;\n      if (e.code === 'KeyD') this.vel[1] = 0;\n      if (e.code === 'KeyW') this.vel[2] = 0;\n      if (e.code === 'KeyS') this.vel[3] = 0;\n    });\n    addEventListener('click', this.shoot);\n  }\n\n  draw(ctx) {\n    let body = new Image();\n    let barrel = new Image();\n    body.src = 'images/tanks/tankBody_blue_outline.png';\n    barrel.src = 'images/tanks/tankBlue_barrel2_outline.png';\n    ctx.drawImage(body, this.bodyPos[0], this.bodyPos[1]);\n    ctx.drawImage(barrel, this.barrelPos[0] + 15, this.barrelPos[1] + 15);\n  }\n\n  move() {\n    this.barrelPos[0] += this.vel[0];\n    this.barrelPos[0] += this.vel[1];\n    this.barrelPos[1] += this.vel[2];\n    this.barrelPos[1] += this.vel[3];\n    this.bodyPos[0] += this.vel[0];\n    this.bodyPos[0] += this.vel[1];\n    this.bodyPos[1] += this.vel[2];\n    this.bodyPos[1] += this.vel[3];\n  }\n\n  shoot() {\n    const bullet = new _bullet__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      speed: 3,\n      tank: this\n    });\n    this.game.add(bullet);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUIsS0FBS0UsR0FBTCxDQUFTLENBQVQsQ0FBbkI7SUFDQSxLQUFLRixPQUFMLENBQWEsQ0FBYixLQUFtQixLQUFLRSxHQUFMLENBQVMsQ0FBVCxDQUFuQjtJQUNBLEtBQUtGLE9BQUwsQ0FBYSxDQUFiLEtBQW1CLEtBQUtFLEdBQUwsQ0FBUyxDQUFULENBQW5CO0lBQ0EsS0FBS0YsT0FBTCxDQUFhLENBQWIsS0FBbUIsS0FBS0UsR0FBTCxDQUFTLENBQVQsQ0FBbkI7RUFDSDs7RUFFREssS0FBSyxHQUFHO0lBQ0osTUFBTVMsTUFBTSxHQUFHLElBQUl2QiwrQ0FBSixDQUFXO01BQUN3QixLQUFLLEVBQUUsQ0FBUjtNQUFXQyxJQUFJLEVBQUU7SUFBakIsQ0FBWCxDQUFmO0lBQ0EsS0FBS2YsSUFBTCxDQUFVZ0IsR0FBVixDQUFjSCxNQUFkO0VBQ0g7O0FBOUNxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RhbmtzLy4vc3JjL3NjcmlwdHMvdGFuay5qcz9mYzc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdWxsZXQgZnJvbSBcIi4vYnVsbGV0XCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhbmsge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5iYXJyZWxQb3MgPSBvcHRpb25zLnBvcztcbiAgICAgICAgdGhpcy5ib2R5UG9zID0gb3B0aW9ucy5wb3M7XG4gICAgICAgIHRoaXMuYW5nbGUgPSBvcHRpb25zLmFuZ2xlO1xuICAgICAgICB0aGlzLnZlbCA9IFswLCAwLCAwLCAwXTsgLy8gW3Z4KGxlZnQpLCB2eChyaWdodCksIHZ5KHVwKSwgdnkoZG93bildXG4gICAgICAgIHRoaXMuZ2FtZSA9IG9wdGlvbnMuZ2FtZTtcblxuICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSAnS2V5QScpIHRoaXMudmVsWzBdID0gLTE7XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSAnS2V5RCcpIHRoaXMudmVsWzFdID0gMTtcbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT09ICdLZXlXJykgdGhpcy52ZWxbMl0gPSAtMTtcbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT09ICdLZXlTJykgdGhpcy52ZWxbM10gPSAxO1xuICAgICAgICB9KTtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT09ICdLZXlBJykgdGhpcy52ZWxbMF0gPSAwO1xuICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gJ0tleUQnKSB0aGlzLnZlbFsxXSA9IDA7XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSAnS2V5VycpIHRoaXMudmVsWzJdID0gMDtcbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT09ICdLZXlTJykgdGhpcy52ZWxbM10gPSAwO1xuICAgICAgICB9KTtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNob290KTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBsZXQgYm9keSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBsZXQgYmFycmVsID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGJvZHkuc3JjID0gJ2ltYWdlcy90YW5rcy90YW5rQm9keV9ibHVlX291dGxpbmUucG5nJ1xuICAgICAgICBiYXJyZWwuc3JjID0gJ2ltYWdlcy90YW5rcy90YW5rQmx1ZV9iYXJyZWwyX291dGxpbmUucG5nJztcbiAgICAgICAgY3R4LmRyYXdJbWFnZShib2R5LCB0aGlzLmJvZHlQb3NbMF0sIHRoaXMuYm9keVBvc1sxXSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoYmFycmVsLCB0aGlzLmJhcnJlbFBvc1swXSArIDE1LCB0aGlzLmJhcnJlbFBvc1sxXSArIDE1KTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLmJhcnJlbFBvc1swXSArPSB0aGlzLnZlbFswXTtcbiAgICAgICAgdGhpcy5iYXJyZWxQb3NbMF0gKz0gdGhpcy52ZWxbMV07XG4gICAgICAgIHRoaXMuYmFycmVsUG9zWzFdICs9IHRoaXMudmVsWzJdO1xuICAgICAgICB0aGlzLmJhcnJlbFBvc1sxXSArPSB0aGlzLnZlbFszXTtcbiAgICAgICAgdGhpcy5ib2R5UG9zWzBdICs9IHRoaXMudmVsWzBdO1xuICAgICAgICB0aGlzLmJvZHlQb3NbMF0gKz0gdGhpcy52ZWxbMV07XG4gICAgICAgIHRoaXMuYm9keVBvc1sxXSArPSB0aGlzLnZlbFsyXTtcbiAgICAgICAgdGhpcy5ib2R5UG9zWzFdICs9IHRoaXMudmVsWzNdO1xuICAgIH1cblxuICAgIHNob290KCkge1xuICAgICAgICBjb25zdCBidWxsZXQgPSBuZXcgQnVsbGV0KHtzcGVlZDogMywgdGFuazogdGhpc30pO1xuICAgICAgICB0aGlzLmdhbWUuYWRkKGJ1bGxldCk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJCdWxsZXQiLCJHYW1lIiwiVGFuayIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsImJhcnJlbFBvcyIsInBvcyIsImJvZHlQb3MiLCJhbmdsZSIsInZlbCIsImdhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvZGUiLCJzaG9vdCIsImRyYXciLCJjdHgiLCJib2R5IiwiSW1hZ2UiLCJiYXJyZWwiLCJzcmMiLCJkcmF3SW1hZ2UiLCJtb3ZlIiwiYnVsbGV0Iiwic3BlZWQiLCJ0YW5rIiwiYWRkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/tank.js\n");

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