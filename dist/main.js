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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_tank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/tank */ \"./src/scripts/tank.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('game-canvas');\n  canvas.height = 750;\n  canvas.width = 1000;\n  const ctx = canvas.getContext('2d');\n  let tank = new _scripts_tank__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    pos: [100, 100],\n    vel: [30, 0],\n    color: 'royalblue'\n  });\n  tank.draw(ctx);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2hELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBQWY7RUFDQUQsTUFBTSxDQUFDRSxNQUFQLEdBQWdCLEdBQWhCO0VBQ0FGLE1BQU0sQ0FBQ0csS0FBUCxHQUFlLElBQWY7RUFDQSxNQUFNQyxHQUFHLEdBQUdKLE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQixJQUFsQixDQUFaO0VBQ0EsSUFBSUMsSUFBSSxHQUFHLElBQUlULHFEQUFKLENBQVM7SUFBQ1UsR0FBRyxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FBTjtJQUFrQkMsR0FBRyxFQUFFLENBQUMsRUFBRCxFQUFLLENBQUwsQ0FBdkI7SUFBZ0NDLEtBQUssRUFBRTtFQUF2QyxDQUFULENBQVg7RUFDQUgsSUFBSSxDQUFDSSxJQUFMLENBQVVOLEdBQVY7QUFDSCxDQVBEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFua3MvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFuayBmcm9tIFwiLi9zY3JpcHRzL3RhbmtcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWNhbnZhcycpO1xuICAgIGNhbnZhcy5oZWlnaHQgPSA3NTA7XG4gICAgY2FudmFzLndpZHRoID0gMTAwMDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBsZXQgdGFuayA9IG5ldyBUYW5rKHtwb3M6IFsxMDAsIDEwMF0sIHZlbDogWzMwLCAwXSwgY29sb3I6ICdyb3lhbGJsdWUnfSk7XG4gICAgdGFuay5kcmF3KGN0eCk7XG59KSJdLCJuYW1lcyI6WyJUYW5rIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJoZWlnaHQiLCJ3aWR0aCIsImN0eCIsImdldENvbnRleHQiLCJ0YW5rIiwicG9zIiwidmVsIiwiY29sb3IiLCJkcmF3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/tank.js":
/*!*****************************!*\
  !*** ./src/scripts/tank.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tank; }\n/* harmony export */ });\nclass Tank {\n  constructor(options) {\n    this.pos = options.pos;\n    this.color = options.color; // this.game = options.game;\n  }\n\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.fillRect(this.pos[0], this.pos[1], 40, 40);\n  }\n\n  move(vel) {\n    this.pos[0] += vel[0];\n    this.pos[1] += vel[1];\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90YW5rLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxNQUFNQSxJQUFOLENBQVc7RUFDdEJDLFdBQVcsQ0FBQ0MsT0FBRCxFQUFVO0lBQ2pCLEtBQUtDLEdBQUwsR0FBV0QsT0FBTyxDQUFDQyxHQUFuQjtJQUNBLEtBQUtDLEtBQUwsR0FBYUYsT0FBTyxDQUFDRSxLQUFyQixDQUZpQixDQUdqQjtFQUNIOztFQUVEQyxJQUFJLENBQUNDLEdBQUQsRUFBTTtJQUNOQSxHQUFHLENBQUNDLFNBQUosR0FBZ0IsS0FBS0gsS0FBckI7SUFDQUUsR0FBRyxDQUFDRSxRQUFKLENBQWEsS0FBS0wsR0FBTCxDQUFTLENBQVQsQ0FBYixFQUEwQixLQUFLQSxHQUFMLENBQVMsQ0FBVCxDQUExQixFQUF1QyxFQUF2QyxFQUEyQyxFQUEzQztFQUNIOztFQUVETSxJQUFJLENBQUNDLEdBQUQsRUFBTTtJQUNOLEtBQUtQLEdBQUwsQ0FBUyxDQUFULEtBQWVPLEdBQUcsQ0FBQyxDQUFELENBQWxCO0lBQ0EsS0FBS1AsR0FBTCxDQUFTLENBQVQsS0FBZU8sR0FBRyxDQUFDLENBQUQsQ0FBbEI7RUFDSDs7QUFmcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YW5rcy8uL3NyYy9zY3JpcHRzL3RhbmsuanM/ZmM3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYW5rIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMucG9zID0gb3B0aW9ucy5wb3M7XG4gICAgICAgIHRoaXMuY29sb3IgPSBvcHRpb25zLmNvbG9yO1xuICAgICAgICAvLyB0aGlzLmdhbWUgPSBvcHRpb25zLmdhbWU7XG4gICAgfVxuXG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIDQwLCA0MCk7XG4gICAgfVxuXG4gICAgbW92ZSh2ZWwpIHtcbiAgICAgICAgdGhpcy5wb3NbMF0gKz0gdmVsWzBdO1xuICAgICAgICB0aGlzLnBvc1sxXSArPSB2ZWxbMV07XG4gICAgfVxufSJdLCJuYW1lcyI6WyJUYW5rIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwicG9zIiwiY29sb3IiLCJkcmF3IiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJtb3ZlIiwidmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/tank.js\n");

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