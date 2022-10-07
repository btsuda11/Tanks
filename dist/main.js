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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game_view */ \"./src/scripts/game_view.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('game-canvas');\n  canvas.height = 750;\n  canvas.width = 1000;\n  const ctx = canvas.getContext('2d');\n  let view = new _scripts_game_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n  view.start();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2hELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBQWY7RUFDQUQsTUFBTSxDQUFDRSxNQUFQLEdBQWdCLEdBQWhCO0VBQ0FGLE1BQU0sQ0FBQ0csS0FBUCxHQUFlLElBQWY7RUFDQSxNQUFNQyxHQUFHLEdBQUdKLE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQixJQUFsQixDQUFaO0VBQ0EsSUFBSUMsSUFBSSxHQUFHLElBQUlULDBEQUFKLENBQWFPLEdBQWIsQ0FBWDtFQUNBRSxJQUFJLENBQUNDLEtBQUw7QUFDSCxDQVBEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFua3MvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4vc2NyaXB0cy9nYW1lX3ZpZXdcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWNhbnZhcycpO1xuICAgIGNhbnZhcy5oZWlnaHQgPSA3NTA7XG4gICAgY2FudmFzLndpZHRoID0gMTAwMDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBsZXQgdmlldyA9IG5ldyBHYW1lVmlldyhjdHgpO1xuICAgIHZpZXcuc3RhcnQoKTtcbn0pIl0sIm5hbWVzIjpbIkdhbWVWaWV3IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJoZWlnaHQiLCJ3aWR0aCIsImN0eCIsImdldENvbnRleHQiLCJ2aWV3Iiwic3RhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _tank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tank */ \"./src/scripts/tank.js\");\n\nclass Game {\n  constructor() {\n    this.level = 1;\n    this.playerTank = new _tank__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      pos: [100, 100],\n      vel: [0, 0],\n      color: 'royalblue'\n    });\n    this.enemyTanks = [];\n  }\n\n  update(ctx) {\n    ctx.clearRect(0, 0, 1000, 750);\n    this.allObjects().forEach(object => {\n      object.move();\n      object.draw(ctx);\n    });\n    requestAnimationFrame(() => this.update(ctx));\n  }\n\n  allObjects() {\n    return this.enemyTanks.slice().concat(this.playerTank);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFZSxNQUFNQyxJQUFOLENBQVc7RUFDdEJDLFdBQVcsR0FBRztJQUNWLEtBQUtDLEtBQUwsR0FBYSxDQUFiO0lBQ0EsS0FBS0MsVUFBTCxHQUFrQixJQUFJSiw2Q0FBSixDQUFTO01BQUNLLEdBQUcsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQU47TUFBa0JDLEdBQUcsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQXZCO01BQStCQyxLQUFLLEVBQUU7SUFBdEMsQ0FBVCxDQUFsQjtJQUNBLEtBQUtDLFVBQUwsR0FBa0IsRUFBbEI7RUFDSDs7RUFFREMsTUFBTSxDQUFDQyxHQUFELEVBQU07SUFDUkEsR0FBRyxDQUFDQyxTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixJQUFwQixFQUEwQixHQUExQjtJQUNBLEtBQUtDLFVBQUwsR0FBa0JDLE9BQWxCLENBQTBCQyxNQUFNLElBQUk7TUFDaENBLE1BQU0sQ0FBQ0MsSUFBUDtNQUNBRCxNQUFNLENBQUNFLElBQVAsQ0FBWU4sR0FBWjtJQUNILENBSEQ7SUFJQU8scUJBQXFCLENBQUMsTUFBTSxLQUFLUixNQUFMLENBQVlDLEdBQVosQ0FBUCxDQUFyQjtFQUNIOztFQUVERSxVQUFVLEdBQUc7SUFDVCxPQUFPLEtBQUtKLFVBQUwsQ0FBZ0JVLEtBQWhCLEdBQXdCQyxNQUF4QixDQUErQixLQUFLZixVQUFwQyxDQUFQO0VBQ0g7O0FBbEJxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RhbmtzLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYW5rIGZyb20gXCIuL3RhbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAxO1xuICAgICAgICB0aGlzLnBsYXllclRhbmsgPSBuZXcgVGFuayh7cG9zOiBbMTAwLCAxMDBdLCB2ZWw6IFswLCAwXSwgY29sb3I6ICdyb3lhbGJsdWUnfSk7XG4gICAgICAgIHRoaXMuZW5lbXlUYW5rcyA9IFtdO1xuICAgIH1cblxuICAgIHVwZGF0ZShjdHgpIHtcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCAxMDAwLCA3NTApO1xuICAgICAgICB0aGlzLmFsbE9iamVjdHMoKS5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgICAgICBvYmplY3QubW92ZSgpO1xuICAgICAgICAgICAgb2JqZWN0LmRyYXcoY3R4KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLnVwZGF0ZShjdHgpKTtcbiAgICB9XG5cbiAgICBhbGxPYmplY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbmVteVRhbmtzLnNsaWNlKCkuY29uY2F0KHRoaXMucGxheWVyVGFuayk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJUYW5rIiwiR2FtZSIsImNvbnN0cnVjdG9yIiwibGV2ZWwiLCJwbGF5ZXJUYW5rIiwicG9zIiwidmVsIiwiY29sb3IiLCJlbmVteVRhbmtzIiwidXBkYXRlIiwiY3R4IiwiY2xlYXJSZWN0IiwiYWxsT2JqZWN0cyIsImZvckVhY2giLCJvYmplY3QiLCJtb3ZlIiwiZHJhdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNsaWNlIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tank; }\n/* harmony export */ });\nclass Tank {\n  constructor(options) {\n    this.barrelPos = options.pos;\n    this.bodyPos = options.pos;\n    this.vel = [0, 0, 0, 0]; // [vx(left), vx(right), vy(up), vy(down)]\n\n    this.color = options.color; // this.game = options.game;\n\n    addEventListener('keydown', e => {\n      if (e.code === 'KeyA') this.vel[0] = -1;\n      if (e.code === 'KeyD') this.vel[1] = 1;\n      if (e.code === 'KeyW') this.vel[2] = -1;\n      if (e.code === 'KeyS') this.vel[3] = 1;\n    });\n    addEventListener('keyup', e => {\n      if (e.code === 'KeyA') this.vel[0] = 0;\n      if (e.code === 'KeyD') this.vel[1] = 0;\n      if (e.code === 'KeyW') this.vel[2] = 0;\n      if (e.code === 'KeyS') this.vel[3] = 0;\n    });\n  }\n\n  draw(ctx) {\n    let body = new Image();\n    let barrel = new Image();\n    body.src = 'images/tanks/tankBody_blue_outline.png';\n    barrel.src = 'images/tanks/tankBlue_barrel2_outline.png';\n    ctx.drawImage(body, this.bodyPos[0], this.bodyPos[1]);\n    ctx.drawImage(barrel, this.barrelPos[0] + 15, this.barrelPos[1] + 15);\n  }\n\n  move() {\n    this.barrelPos[0] += this.vel[0];\n    this.barrelPos[0] += this.vel[1];\n    this.barrelPos[1] += this.vel[2];\n    this.barrelPos[1] += this.vel[3];\n    this.bodyPos[0] += this.vel[0];\n    this.bodyPos[0] += this.vel[1];\n    this.bodyPos[1] += this.vel[2];\n    this.bodyPos[1] += this.vel[3];\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW5CO0lBQ0EsS0FBS0QsT0FBTCxDQUFhLENBQWIsS0FBbUIsS0FBS0MsR0FBTCxDQUFTLENBQVQsQ0FBbkI7SUFDQSxLQUFLRCxPQUFMLENBQWEsQ0FBYixLQUFtQixLQUFLQyxHQUFMLENBQVMsQ0FBVCxDQUFuQjtFQUNIOztBQXZDcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YW5rcy8uL3NyYy9zY3JpcHRzL3RhbmsuanM/ZmM3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYW5rIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuYmFycmVsUG9zID0gb3B0aW9ucy5wb3M7XG4gICAgICAgIHRoaXMuYm9keVBvcyA9IG9wdGlvbnMucG9zO1xuICAgICAgICB0aGlzLnZlbCA9IFswLCAwLCAwLCAwXTsgLy8gW3Z4KGxlZnQpLCB2eChyaWdodCksIHZ5KHVwKSwgdnkoZG93bildXG4gICAgICAgIHRoaXMuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuICAgICAgICAvLyB0aGlzLmdhbWUgPSBvcHRpb25zLmdhbWU7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT09ICdLZXlBJykgdGhpcy52ZWxbMF0gPSAtMTtcbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT09ICdLZXlEJykgdGhpcy52ZWxbMV0gPSAxO1xuICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gJ0tleVcnKSB0aGlzLnZlbFsyXSA9IC0xO1xuICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gJ0tleVMnKSB0aGlzLnZlbFszXSA9IDE7XG4gICAgICAgIH0pXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSAnS2V5QScpIHRoaXMudmVsWzBdID0gMDtcbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT09ICdLZXlEJykgdGhpcy52ZWxbMV0gPSAwO1xuICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gJ0tleVcnKSB0aGlzLnZlbFsyXSA9IDA7XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSAnS2V5UycpIHRoaXMudmVsWzNdID0gMDtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBsZXQgYm9keSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBsZXQgYmFycmVsID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGJvZHkuc3JjID0gJ2ltYWdlcy90YW5rcy90YW5rQm9keV9ibHVlX291dGxpbmUucG5nJ1xuICAgICAgICBiYXJyZWwuc3JjID0gJ2ltYWdlcy90YW5rcy90YW5rQmx1ZV9iYXJyZWwyX291dGxpbmUucG5nJztcbiAgICAgICAgY3R4LmRyYXdJbWFnZShib2R5LCB0aGlzLmJvZHlQb3NbMF0sIHRoaXMuYm9keVBvc1sxXSk7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoYmFycmVsLCB0aGlzLmJhcnJlbFBvc1swXSArIDE1LCB0aGlzLmJhcnJlbFBvc1sxXSArIDE1KTtcbiAgICB9XG5cbiAgICBtb3ZlKCkge1xuICAgICAgICB0aGlzLmJhcnJlbFBvc1swXSArPSB0aGlzLnZlbFswXTtcbiAgICAgICAgdGhpcy5iYXJyZWxQb3NbMF0gKz0gdGhpcy52ZWxbMV07XG4gICAgICAgIHRoaXMuYmFycmVsUG9zWzFdICs9IHRoaXMudmVsWzJdO1xuICAgICAgICB0aGlzLmJhcnJlbFBvc1sxXSArPSB0aGlzLnZlbFszXTtcbiAgICAgICAgdGhpcy5ib2R5UG9zWzBdICs9IHRoaXMudmVsWzBdO1xuICAgICAgICB0aGlzLmJvZHlQb3NbMF0gKz0gdGhpcy52ZWxbMV07XG4gICAgICAgIHRoaXMuYm9keVBvc1sxXSArPSB0aGlzLnZlbFsyXTtcbiAgICAgICAgdGhpcy5ib2R5UG9zWzFdICs9IHRoaXMudmVsWzNdO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiVGFuayIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsImJhcnJlbFBvcyIsInBvcyIsImJvZHlQb3MiLCJ2ZWwiLCJjb2xvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29kZSIsImRyYXciLCJjdHgiLCJib2R5IiwiSW1hZ2UiLCJiYXJyZWwiLCJzcmMiLCJkcmF3SW1hZ2UiLCJtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/tank.js\n");

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