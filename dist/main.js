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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _tank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tank */ \"./src/scripts/tank.js\");\n\nclass Game {\n  constructor() {\n    this.level = 1;\n    this.playerTank = new _tank__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      pos: [100, 100],\n      color: 'royalblue'\n    });\n    this.enemyTanks = [];\n  }\n\n  draw(ctx) {\n    ctx.clearRect(0, 0, 1000, 750);\n    this.allObjects().forEach(object => {\n      object.draw(ctx);\n    });\n  }\n\n  allObjects() {\n    return this.enemyTanks.slice().concat(this.playerTank);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFZSxNQUFNQyxJQUFOLENBQVc7RUFDdEJDLFdBQVcsR0FBRztJQUNWLEtBQUtDLEtBQUwsR0FBYSxDQUFiO0lBQ0EsS0FBS0MsVUFBTCxHQUFrQixJQUFJSiw2Q0FBSixDQUFTO01BQUNLLEdBQUcsRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLENBQU47TUFBa0JDLEtBQUssRUFBRTtJQUF6QixDQUFULENBQWxCO0lBQ0EsS0FBS0MsVUFBTCxHQUFrQixFQUFsQjtFQUNIOztFQUVEQyxJQUFJLENBQUNDLEdBQUQsRUFBTTtJQUNOQSxHQUFHLENBQUNDLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLElBQXBCLEVBQTBCLEdBQTFCO0lBQ0EsS0FBS0MsVUFBTCxHQUFrQkMsT0FBbEIsQ0FBMEJDLE1BQU0sSUFBSTtNQUNoQ0EsTUFBTSxDQUFDTCxJQUFQLENBQVlDLEdBQVo7SUFDSCxDQUZEO0VBR0g7O0VBRURFLFVBQVUsR0FBRztJQUNULE9BQU8sS0FBS0osVUFBTCxDQUFnQk8sS0FBaEIsR0FBd0JDLE1BQXhCLENBQStCLEtBQUtYLFVBQXBDLENBQVA7RUFDSDs7QUFoQnFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFua3MvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhbmsgZnJvbSBcIi4vdGFua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9IDE7XG4gICAgICAgIHRoaXMucGxheWVyVGFuayA9IG5ldyBUYW5rKHtwb3M6IFsxMDAsIDEwMF0sIGNvbG9yOiAncm95YWxibHVlJ30pO1xuICAgICAgICB0aGlzLmVuZW15VGFua3MgPSBbXTtcbiAgICB9XG5cbiAgICBkcmF3KGN0eCkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDEwMDAsIDc1MCk7XG4gICAgICAgIHRoaXMuYWxsT2JqZWN0cygpLmZvckVhY2gob2JqZWN0ID0+IHtcbiAgICAgICAgICAgIG9iamVjdC5kcmF3KGN0eCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFsbE9iamVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVuZW15VGFua3Muc2xpY2UoKS5jb25jYXQodGhpcy5wbGF5ZXJUYW5rKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIlRhbmsiLCJHYW1lIiwiY29uc3RydWN0b3IiLCJsZXZlbCIsInBsYXllclRhbmsiLCJwb3MiLCJjb2xvciIsImVuZW15VGFua3MiLCJkcmF3IiwiY3R4IiwiY2xlYXJSZWN0IiwiYWxsT2JqZWN0cyIsImZvckVhY2giLCJvYmplY3QiLCJzbGljZSIsImNvbmNhdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameView; }\n/* harmony export */ });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/scripts/game.js\");\n\nclass GameView {\n  constructor(ctx) {\n    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.ctx = ctx;\n  }\n\n  start() {\n    this.bindKeyHandlers();\n    setInterval(() => {\n      this.game.draw(this.ctx);\n    }, 20);\n  }\n\n  bindKeyHandlers() {\n    key('w', () => this.game.playerTank.move([0, -4]));\n    key('a', () => this.game.playerTank.move([-4, 0]));\n    key('s', () => this.game.playerTank.move([0, 4]));\n    key('d', () => this.game.playerTank.move([4, 0]));\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUVlLE1BQU1DLFFBQU4sQ0FBZTtFQUMxQkMsV0FBVyxDQUFDQyxHQUFELEVBQU07SUFDYixLQUFLQyxJQUFMLEdBQVksSUFBSUosNkNBQUosRUFBWjtJQUNBLEtBQUtHLEdBQUwsR0FBV0EsR0FBWDtFQUNIOztFQUVERSxLQUFLLEdBQUc7SUFDSixLQUFLQyxlQUFMO0lBQ0FDLFdBQVcsQ0FBQyxNQUFNO01BQ2QsS0FBS0gsSUFBTCxDQUFVSSxJQUFWLENBQWUsS0FBS0wsR0FBcEI7SUFDSCxDQUZVLEVBRVIsRUFGUSxDQUFYO0VBR0g7O0VBRURHLGVBQWUsR0FBRztJQUNkRyxHQUFHLENBQUMsR0FBRCxFQUFNLE1BQU0sS0FBS0wsSUFBTCxDQUFVTSxVQUFWLENBQXFCQyxJQUFyQixDQUEwQixDQUFDLENBQUQsRUFBSSxDQUFDLENBQUwsQ0FBMUIsQ0FBWixDQUFIO0lBQ0FGLEdBQUcsQ0FBQyxHQUFELEVBQU0sTUFBTSxLQUFLTCxJQUFMLENBQVVNLFVBQVYsQ0FBcUJDLElBQXJCLENBQTBCLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBTCxDQUExQixDQUFaLENBQUg7SUFDQUYsR0FBRyxDQUFDLEdBQUQsRUFBTSxNQUFNLEtBQUtMLElBQUwsQ0FBVU0sVUFBVixDQUFxQkMsSUFBckIsQ0FBMEIsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUExQixDQUFaLENBQUg7SUFDQUYsR0FBRyxDQUFDLEdBQUQsRUFBTSxNQUFNLEtBQUtMLElBQUwsQ0FBVU0sVUFBVixDQUFxQkMsSUFBckIsQ0FBMEIsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUExQixDQUFaLENBQUg7RUFDSDs7QUFsQnlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFua3MvLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanM/ODBlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoKTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuYmluZEtleUhhbmRsZXJzKCk7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5kcmF3KHRoaXMuY3R4KTtcbiAgICAgICAgfSwgMjApO1xuICAgIH1cblxuICAgIGJpbmRLZXlIYW5kbGVycygpIHtcbiAgICAgICAga2V5KCd3JywgKCkgPT4gdGhpcy5nYW1lLnBsYXllclRhbmsubW92ZShbMCwgLTRdKSk7XG4gICAgICAgIGtleSgnYScsICgpID0+IHRoaXMuZ2FtZS5wbGF5ZXJUYW5rLm1vdmUoWy00LCAwXSkpO1xuICAgICAgICBrZXkoJ3MnLCAoKSA9PiB0aGlzLmdhbWUucGxheWVyVGFuay5tb3ZlKFswLCA0XSkpO1xuICAgICAgICBrZXkoJ2QnLCAoKSA9PiB0aGlzLmdhbWUucGxheWVyVGFuay5tb3ZlKFs0LCAwXSkpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiR2FtZSIsIkdhbWVWaWV3IiwiY29uc3RydWN0b3IiLCJjdHgiLCJnYW1lIiwic3RhcnQiLCJiaW5kS2V5SGFuZGxlcnMiLCJzZXRJbnRlcnZhbCIsImRyYXciLCJrZXkiLCJwbGF5ZXJUYW5rIiwibW92ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ }),

/***/ "./src/scripts/tank.js":
/*!*****************************!*\
  !*** ./src/scripts/tank.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tank; }\n/* harmony export */ });\nclass Tank {\n  constructor(options) {\n    this.pos = options.pos;\n    this.color = options.color; // this.game = options.game;\n  }\n\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.fillRect(this.pos[0], this.pos[1], 40, 40);\n  }\n\n  move() {\n    let vel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 0];\n    this.pos[0] += vel[0];\n    this.pos[1] += vel[1];\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90YW5rLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxNQUFNQSxJQUFOLENBQVc7RUFDdEJDLFdBQVcsQ0FBQ0MsT0FBRCxFQUFVO0lBQ2pCLEtBQUtDLEdBQUwsR0FBV0QsT0FBTyxDQUFDQyxHQUFuQjtJQUNBLEtBQUtDLEtBQUwsR0FBYUYsT0FBTyxDQUFDRSxLQUFyQixDQUZpQixDQUdqQjtFQUNIOztFQUVEQyxJQUFJLENBQUNDLEdBQUQsRUFBTTtJQUNOQSxHQUFHLENBQUNDLFNBQUosR0FBZ0IsS0FBS0gsS0FBckI7SUFDQUUsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBS0wsR0FBTCxDQUFTLENBQVQsQ0FBYixFQUEwQixLQUFLQSxHQUFMLENBQVMsQ0FBVCxDQUExQixFQUF1QyxFQUF2QyxFQUEyQyxFQUEzQztFQUNIOztFQUVETSxJQUFJLEdBQWU7SUFBQSxJQUFkQyxHQUFjLHVFQUFSLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBUTtJQUNmLEtBQUtQLEdBQUwsQ0FBUyxDQUFULEtBQWVPLEdBQUcsQ0FBQyxDQUFELENBQWxCO0lBQ0EsS0FBS1AsR0FBTCxDQUFTLENBQVQsS0FBZU8sR0FBRyxDQUFDLENBQUQsQ0FBbEI7RUFDSDs7QUFmcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YW5rcy8uL3NyYy9zY3JpcHRzL3RhbmsuanM/ZmM3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYW5rIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMucG9zID0gb3B0aW9ucy5wb3M7XG4gICAgICAgIHRoaXMuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuICAgICAgICAvLyB0aGlzLmdhbWUgPSBvcHRpb25zLmdhbWU7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDQwLCA0MCk7XG4gICAgfVxuXG4gICAgbW92ZSh2ZWwgPSBbMCwgMF0pIHtcbiAgICAgICAgdGhpcy5wb3NbMF0gKz0gdmVsWzBdO1xuICAgICAgICB0aGlzLnBvc1sxXSArPSB2ZWxbMV07XG4gICAgfVxufSJdLCJuYW1lcyI6WyJUYW5rIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwicG9zIiwiY29sb3IiLCJkcmF3IiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJtb3ZlIiwidmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/tank.js\n");

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