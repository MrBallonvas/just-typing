/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/router.ts":
/*!***********************!*\
  !*** ./src/router.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   linkListenerHandler: () => (/* binding */ linkListenerHandler),
/* harmony export */   redirect: () => (/* binding */ redirect),
/* harmony export */   renderRouteHandler: () => (/* binding */ renderRouteHandler)
/* harmony export */ });
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views */ "./src/views/index.ts");

function redirect(route, qa = "") {
    window.history.pushState({}, "", route);
    renderRouteHandler(null, qa);
}
function linkHandler(event) {
    const target = event.target;
    redirect(target.href);
    renderRouteHandler(null, "");
}
function linkListenerHandler(event) {
    const target = event.target;
    if (target instanceof Element) {
        const link = target.closest("a");
        if (link) {
            event.preventDefault();
            linkHandler(event);
        }
    }
}
function renderRouteHandler(_, qa = "") {
    const currentPath = window.location.pathname;
    const container = document.querySelector("body");
    if (window.location.pathname === "/test" && qa === "test") {
        container === null || container === void 0 ? void 0 : container.replaceChildren();
        container === null || container === void 0 ? void 0 : container.insertAdjacentHTML("afterbegin", _views__WEBPACK_IMPORTED_MODULE_0__.Test);
        return;
    }
    const content = _views__WEBPACK_IMPORTED_MODULE_0__["default"][currentPath] || _views__WEBPACK_IMPORTED_MODULE_0__["default"]["/"];
    container === null || container === void 0 ? void 0 : container.replaceChildren();
    container === null || container === void 0 ? void 0 : container.insertAdjacentHTML("afterbegin", content);
}



/***/ }),

/***/ "./src/views/Home/index.ts":
/*!*********************************!*\
  !*** ./src/views/Home/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (`
	<h1>Home</h1>
	<a href='/'>Home</a>
	<a href='/trainer'>Trainer</a>
	<a href='/settings'>Settings</a>
	<a href='/stats'>Stats</a>
`);


/***/ }),

/***/ "./src/views/Settings/index.ts":
/*!*************************************!*\
  !*** ./src/views/Settings/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<h1>Settings</h1>");


/***/ }),

/***/ "./src/views/Stats/index.ts":
/*!**********************************!*\
  !*** ./src/views/Stats/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<h1>Stats</h1>");


/***/ }),

/***/ "./src/views/Test/index.ts":
/*!*********************************!*\
  !*** ./src/views/Test/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<h1>Test</h1>");


/***/ }),

/***/ "./src/views/Trainer/index.ts":
/*!************************************!*\
  !*** ./src/views/Trainer/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<h1>Trainer</h1>");


/***/ }),

/***/ "./src/views/index.ts":
/*!****************************!*\
  !*** ./src/views/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Test: () => (/* reexport safe */ _Test__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./src/views/Home/index.ts");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings */ "./src/views/Settings/index.ts");
/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stats */ "./src/views/Stats/index.ts");
/* harmony import */ var _Trainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Trainer */ "./src/views/Trainer/index.ts");
/* harmony import */ var _Test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Test */ "./src/views/Test/index.ts");





const views = {
    "/": _Home__WEBPACK_IMPORTED_MODULE_0__["default"],
    "/settings": _Settings__WEBPACK_IMPORTED_MODULE_1__["default"],
    "/stats": _Stats__WEBPACK_IMPORTED_MODULE_2__["default"],
    "/trainer": _Trainer__WEBPACK_IMPORTED_MODULE_3__["default"],
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (views);



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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "./src/router.ts");


if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./sw.js", { scope: "/" }).then(() => {
            console.log("Service Worker Registered");
        });
    });
}
// listereners for render content for current route
window.addEventListener("popstate", _router__WEBPACK_IMPORTED_MODULE_1__.renderRouteHandler);
document.addEventListener("DOMContentLoaded", _router__WEBPACK_IMPORTED_MODULE_1__.renderRouteHandler);
// custom handler for links
document.addEventListener("click", _router__WEBPACK_IMPORTED_MODULE_1__.linkListenerHandler);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ2M7QUFFbkMsSUFBSSxlQUFlLElBQUksU0FBUyxFQUFFLENBQUM7SUFDakMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7UUFDbkMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxtREFBbUQ7QUFDbkQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSx1REFBeUIsQ0FBQyxDQUFDO0FBQy9ELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSx1REFBeUIsQ0FBQyxDQUFDO0FBRXpFLDJCQUEyQjtBQUMzQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLHdEQUEwQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcm91dGVyLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3ZpZXdzL0hvbWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3MvU2V0dGluZ3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3MvU3RhdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3MvVGVzdC9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy92aWV3cy9UcmFpbmVyL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3ZpZXdzL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHZpZXdzLCB7IFRlc3QgfSBmcm9tIFwiLi92aWV3c1wiO1xuXG5mdW5jdGlvbiByZWRpcmVjdChyb3V0ZTogc3RyaW5nLCBxYTogc3RyaW5nID0gXCJcIik6IHZvaWQge1xuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sIFwiXCIsIHJvdXRlKTtcbiAgcmVuZGVyUm91dGVIYW5kbGVyKG51bGwsIHFhKTtcbn1cblxuZnVuY3Rpb24gbGlua0hhbmRsZXIoZXZlbnQ6IEV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MTGlua0VsZW1lbnQ7XG4gIHJlZGlyZWN0KHRhcmdldC5ocmVmKTtcbiAgcmVuZGVyUm91dGVIYW5kbGVyKG51bGwsIFwiXCIpO1xufVxuXG5mdW5jdGlvbiBsaW5rTGlzdGVuZXJIYW5kbGVyKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICBjb25zdCBsaW5rID0gdGFyZ2V0LmNsb3Nlc3QoXCJhXCIpO1xuICAgIGlmIChsaW5rKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGlua0hhbmRsZXIoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJSb3V0ZUhhbmRsZXIoXzogbnVsbCB8IEV2ZW50LCBxYTogc3RyaW5nID0gXCJcIikge1xuICBjb25zdCBjdXJyZW50UGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvdGVzdFwiICYmIHFhID09PSBcInRlc3RcIikge1xuICAgIGNvbnRhaW5lcj8ucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgY29udGFpbmVyPy5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIFRlc3QpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGNvbnRlbnQgPSB2aWV3c1tjdXJyZW50UGF0aF0gfHwgdmlld3NbXCIvXCJdO1xuICBjb250YWluZXI/LnJlcGxhY2VDaGlsZHJlbigpO1xuICBjb250YWluZXI/Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgY29udGVudCk7XG59XG5cbmV4cG9ydCB7IHJlZGlyZWN0LCByZW5kZXJSb3V0ZUhhbmRsZXIsIGxpbmtMaXN0ZW5lckhhbmRsZXIgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGBcblx0PGgxPkhvbWU8L2gxPlxuXHQ8YSBocmVmPScvJz5Ib21lPC9hPlxuXHQ8YSBocmVmPScvdHJhaW5lcic+VHJhaW5lcjwvYT5cblx0PGEgaHJlZj0nL3NldHRpbmdzJz5TZXR0aW5nczwvYT5cblx0PGEgaHJlZj0nL3N0YXRzJz5TdGF0czwvYT5cbmA7XG4iLCJleHBvcnQgZGVmYXVsdCBcIjxoMT5TZXR0aW5nczwvaDE+XCI7XG4iLCJleHBvcnQgZGVmYXVsdCBcIjxoMT5TdGF0czwvaDE+XCI7XG4iLCJleHBvcnQgZGVmYXVsdCBcIjxoMT5UZXN0PC9oMT5cIjtcbiIsImV4cG9ydCBkZWZhdWx0IFwiPGgxPlRyYWluZXI8L2gxPlwiO1xuIiwiaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL1NldHRpbmdzXCI7XG5pbXBvcnQgU3RhdHMgZnJvbSBcIi4vU3RhdHNcIjtcbmltcG9ydCBUcmFpbmVyIGZyb20gXCIuL1RyYWluZXJcIjtcbmltcG9ydCBUZXN0IGZyb20gXCIuL1Rlc3RcIjtcblxuaW50ZXJmYWNlIElWaWV3cyB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZztcbn1cblxuY29uc3Qgdmlld3M6IElWaWV3cyA9IHtcbiAgXCIvXCI6IEhvbWUsXG4gIFwiL3NldHRpbmdzXCI6IFNldHRpbmdzLFxuICBcIi9zdGF0c1wiOiBTdGF0cyxcbiAgXCIvdHJhaW5lclwiOiBUcmFpbmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdmlld3M7XG5leHBvcnQgeyBUZXN0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZXIgZnJvbSBcIi4vcm91dGVyXCI7XG5cbmlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihcIi4vc3cuanNcIiwgeyBzY29wZTogXCIvXCIgfSkudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2UgV29ya2VyIFJlZ2lzdGVyZWRcIik7XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBsaXN0ZXJlbmVycyBmb3IgcmVuZGVyIGNvbnRlbnQgZm9yIGN1cnJlbnQgcm91dGVcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIiwgcm91dGVyLnJlbmRlclJvdXRlSGFuZGxlcik7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCByb3V0ZXIucmVuZGVyUm91dGVIYW5kbGVyKTtcblxuLy8gY3VzdG9tIGhhbmRsZXIgZm9yIGxpbmtzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcm91dGVyLmxpbmtMaXN0ZW5lckhhbmRsZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9