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
    renderRouteHandler();
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

/***/ "./src/views/Test/index.ts":
/*!*********************************!*\
  !*** ./src/views/Test/index.ts ***!
  \*********************************/
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
/* harmony import */ var _Test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Test */ "./src/views/Test/index.ts");





const views = {
    "/": _Home__WEBPACK_IMPORTED_MODULE_0__["default"],
    "/settings": _Settings__WEBPACK_IMPORTED_MODULE_1__["default"],
    "/stats": _Stats__WEBPACK_IMPORTED_MODULE_2__["default"],
    "/trainer": _Trainer__WEBPACK_IMPORTED_MODULE_3__["default"],
    "/test": _Test__WEBPACK_IMPORTED_MODULE_4__["default"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsT0FBTyxFQUFFLHdEQUEwQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcm91dGVyLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3ZpZXdzL0hvbWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3MvU2V0dGluZ3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3MvU3RhdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3MvVGVzdC9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy92aWV3cy9UcmFpbmVyL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3ZpZXdzL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHZpZXdzIGZyb20gXCIuL3ZpZXdzXCI7XG5cbmZ1bmN0aW9uIHJlZGlyZWN0KHJvdXRlOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBcIlwiLCByb3V0ZSk7XG4gIHJlbmRlclJvdXRlSGFuZGxlcigpO1xufVxuXG5mdW5jdGlvbiBsaW5rSGFuZGxlcihldmVudDogRXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxMaW5rRWxlbWVudDtcbiAgcmVkaXJlY3QodGFyZ2V0LmhyZWYpO1xuICByZW5kZXJSb3V0ZUhhbmRsZXIoKTtcbn1cblxuZnVuY3Rpb24gbGlua0xpc3RlbmVySGFuZGxlcihldmVudDogTW91c2VFdmVudCkge1xuICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgY29uc3QgbGluayA9IHRhcmdldC5jbG9zZXN0KFwiYVwiKTtcbiAgICBpZiAobGluaykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxpbmtIYW5kbGVyKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyUm91dGVIYW5kbGVyKCkge1xuICBjb25zdCBjdXJyZW50UGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IGNvbnRlbnQgPSB2aWV3c1tjdXJyZW50UGF0aF0gfHwgdmlld3NbXCIvXCJdO1xuXG4gIGNvbnRhaW5lcj8ucmVwbGFjZUNoaWxkcmVuKCk7XG4gIGNvbnRhaW5lcj8uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBjb250ZW50KTtcbn1cblxuZXhwb3J0IHsgcmVkaXJlY3QsIHJlbmRlclJvdXRlSGFuZGxlciwgbGlua0xpc3RlbmVySGFuZGxlciB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgYFxuXHQ8aDE+SG9tZTwvaDE+XG5cdDxhIGhyZWY9Jy8nPkhvbWU8L2E+XG5cdDxhIGhyZWY9Jy90cmFpbmVyJz5UcmFpbmVyPC9hPlxuXHQ8YSBocmVmPScvc2V0dGluZ3MnPlNldHRpbmdzPC9hPlxuXHQ8YSBocmVmPScvc3RhdHMnPlN0YXRzPC9hPlxuYDtcbiIsImV4cG9ydCBkZWZhdWx0IFwiPGgxPlNldHRpbmdzPC9oMT5cIjtcbiIsImV4cG9ydCBkZWZhdWx0IFwiPGgxPlN0YXRzPC9oMT5cIjtcbiIsImV4cG9ydCBkZWZhdWx0IFwiPGgxPlN0YXRzPC9oMT5cIjtcbiIsImV4cG9ydCBkZWZhdWx0IFwiPGgxPlRyYWluZXI8L2gxPlwiO1xuIiwiaW1wb3J0IEhvbWUgZnJvbSBcIi4vSG9tZVwiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuL1NldHRpbmdzXCI7XG5pbXBvcnQgU3RhdHMgZnJvbSBcIi4vU3RhdHNcIjtcbmltcG9ydCBUcmFpbmVyIGZyb20gXCIuL1RyYWluZXJcIjtcbmltcG9ydCBUZXN0IGZyb20gXCIuL1Rlc3RcIjtcblxuaW50ZXJmYWNlIElWaWV3cyB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZztcbn1cblxuY29uc3Qgdmlld3M6IElWaWV3cyA9IHtcbiAgXCIvXCI6IEhvbWUsXG4gIFwiL3NldHRpbmdzXCI6IFNldHRpbmdzLFxuICBcIi9zdGF0c1wiOiBTdGF0cyxcbiAgXCIvdHJhaW5lclwiOiBUcmFpbmVyLFxuICBcIi90ZXN0XCI6IFRlc3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB2aWV3cztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcbmltcG9ydCAqIGFzIHJvdXRlciBmcm9tIFwiLi9yb3V0ZXJcIjtcblxuLy8gbGlzdGVyZW5lcnMgZm9yIHJlbmRlciBjb250ZW50IGZvciBjdXJyZW50IHJvdXRlXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIHJvdXRlci5yZW5kZXJSb3V0ZUhhbmRsZXIpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgcm91dGVyLnJlbmRlclJvdXRlSGFuZGxlcik7XG5cbi8vIGN1c3RvbSBoYW5kbGVyIGZvciBsaW5rc1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJvdXRlci5saW5rTGlzdGVuZXJIYW5kbGVyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==