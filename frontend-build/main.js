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

function redirect(route) {
    window.history.pushState({}, "", route);
}
function linkHandler(event) {
    const target = event.target;
    redirect(target.href);
    renderRouteHandler();
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
function renderRouteHandler() {
    const currentPath = window.location.pathname;
    const container = document.querySelector("body");
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./src/views/Home/index.ts");
/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings */ "./src/views/Settings/index.ts");
/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stats */ "./src/views/Stats/index.ts");
/* harmony import */ var _Trainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Trainer */ "./src/views/Trainer/index.ts");




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


// listereners for render content for current route
window.addEventListener("popstate", _router__WEBPACK_IMPORTED_MODULE_1__.renderRouteHandler);
document.addEventListener("DOMContentLoaded", _router__WEBPACK_IMPORTED_MODULE_1__.renderRouteHandler);
// custom handler for links
document.addEventListener("click", _router__WEBPACK_IMPORTED_MODULE_1__.linkListenerHandler);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9mcm9udGVuZC8uL3NyYy9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3MvSG9tZS9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy92aWV3cy9TZXR0aW5ncy9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy92aWV3cy9TdGF0cy9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy92aWV3cy9UcmFpbmVyL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3ZpZXdzL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHZpZXdzIGZyb20gXCIuL3ZpZXdzXCI7XG5cbmZ1bmN0aW9uIHJlZGlyZWN0KHJvdXRlOiBzdHJpbmcpOiB2b2lkIHtcblx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBcIlwiLCByb3V0ZSk7XG59XG5cbmZ1bmN0aW9uIGxpbmtIYW5kbGVyKGV2ZW50OiBFdmVudCkge1xuXHRjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTExpbmtFbGVtZW50O1xuXHRyZWRpcmVjdCh0YXJnZXQuaHJlZik7XG5cdHJlbmRlclJvdXRlSGFuZGxlcigpO1xufVxuXG5mdW5jdGlvbiBsaW5rTGlzdGVuZXJIYW5kbGVyKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG5cdGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblx0aWYgKHRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcblx0XHRjb25zdCBsaW5rID0gdGFyZ2V0LmNsb3Nlc3QoXCJhXCIpO1xuXHRcdGlmIChsaW5rKSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0bGlua0hhbmRsZXIoZXZlbnQpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiByZW5kZXJSb3V0ZUhhbmRsZXIoKSB7XG5cdGNvbnN0IGN1cnJlbnRQYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuXHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblx0Y29uc3QgY29udGVudCA9IHZpZXdzW2N1cnJlbnRQYXRoXSB8fCB2aWV3c1tcIi9cIl07XG5cblx0Y29udGFpbmVyPy5yZXBsYWNlQ2hpbGRyZW4oKTtcblx0Y29udGFpbmVyPy5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGNvbnRlbnQpO1xufVxuXG5leHBvcnQge3JlZGlyZWN0LCByZW5kZXJSb3V0ZUhhbmRsZXIsIGxpbmtMaXN0ZW5lckhhbmRsZXJ9O1xuIiwiZXhwb3J0IGRlZmF1bHQgYFxuXHQ8aDE+SG9tZTwvaDE+XG5cdDxhIGhyZWY9Jy8nPkhvbWU8L2E+XG5cdDxhIGhyZWY9Jy90cmFpbmVyJz5UcmFpbmVyPC9hPlxuXHQ8YSBocmVmPScvc2V0dGluZ3MnPlNldHRpbmdzPC9hPlxuXHQ8YSBocmVmPScvc3RhdHMnPlN0YXRzPC9hPlxuYDtcbiIsImV4cG9ydCBkZWZhdWx0IFwiPGgxPlNldHRpbmdzPC9oMT5cIjtcbiIsImV4cG9ydCBkZWZhdWx0IFwiPGgxPlN0YXRzPC9oMT5cIjtcbiIsImV4cG9ydCBkZWZhdWx0IFwiPGgxPlRyYWluZXI8L2gxPlwiO1xuIiwiaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL1NldHRpbmdzXCI7XG5pbXBvcnQgU3RhdHMgZnJvbSBcIi4vU3RhdHNcIjtcbmltcG9ydCBUcmFpbmVyIGZyb20gXCIuL1RyYWluZXJcIjtcblxuaW50ZXJmYWNlIElWaWV3cyB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZztcbn1cblxuY29uc3Qgdmlld3M6IElWaWV3cyA9IHtcbiAgXCIvXCI6IEhvbWUsXG4gIFwiL3NldHRpbmdzXCI6IFNldHRpbmdzLFxuICBcIi9zdGF0c1wiOiBTdGF0cyxcbiAgXCIvdHJhaW5lclwiOiBUcmFpbmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdmlld3M7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZXIgZnJvbSBcIi4vcm91dGVyXCI7XG5cbi8vIGxpc3RlcmVuZXJzIGZvciByZW5kZXIgY29udGVudCBmb3IgY3VycmVudCByb3V0ZVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCByb3V0ZXIucmVuZGVyUm91dGVIYW5kbGVyKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHJvdXRlci5yZW5kZXJSb3V0ZUhhbmRsZXIpO1xuXG4vLyBjdXN0b20gaGFuZGxlciBmb3IgbGlua3NcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByb3V0ZXIubGlua0xpc3RlbmVySGFuZGxlcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=