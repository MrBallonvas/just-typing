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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxtREFBbUQ7QUFDbkQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSx1REFBeUIsQ0FBQyxDQUFDO0FBQy9ELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSx1REFBeUIsQ0FBQyxDQUFDO0FBRXpFLDJCQUEyQjtBQUMzQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLHdEQUEwQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcm91dGVyLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3ZpZXdzL0hvbWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3MvU2V0dGluZ3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3MvU3RhdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3MvVGVzdC9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy92aWV3cy9UcmFpbmVyL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3ZpZXdzL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHZpZXdzIGZyb20gXCIuL3ZpZXdzXCI7XG5cbmZ1bmN0aW9uIHJlZGlyZWN0KHJvdXRlOiBzdHJpbmcpOiB2b2lkIHtcbiAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBcIlwiLCByb3V0ZSk7XG4gIHJlbmRlclJvdXRlSGFuZGxlcigpO1xufVxuXG5mdW5jdGlvbiBsaW5rSGFuZGxlcihldmVudDogRXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxMaW5rRWxlbWVudDtcbiAgcmVkaXJlY3QodGFyZ2V0LmhyZWYpO1xuICByZW5kZXJSb3V0ZUhhbmRsZXIoKTtcbn1cblxuZnVuY3Rpb24gbGlua0xpc3RlbmVySGFuZGxlcihldmVudDogTW91c2VFdmVudCkge1xuICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgY29uc3QgbGluayA9IHRhcmdldC5jbG9zZXN0KFwiYVwiKTtcbiAgICBpZiAobGluaykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGxpbmtIYW5kbGVyKGV2ZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyUm91dGVIYW5kbGVyKCkge1xuICBjb25zdCBjdXJyZW50UGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IGNvbnRlbnQgPSB2aWV3c1tjdXJyZW50UGF0aF0gfHwgdmlld3NbXCIvXCJdO1xuXG4gIGNvbnRhaW5lcj8ucmVwbGFjZUNoaWxkcmVuKCk7XG4gIGNvbnRhaW5lcj8uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBjb250ZW50KTtcbn1cblxuZXhwb3J0IHsgcmVkaXJlY3QsIHJlbmRlclJvdXRlSGFuZGxlciwgbGlua0xpc3RlbmVySGFuZGxlciB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgYFxuXHQ8aDE+SG9tZTwvaDE+XG5cdDxhIGhyZWY9Jy8nPkhvbWU8L2E+XG5cdDxhIGhyZWY9Jy90cmFpbmVyJz5UcmFpbmVyPC9hPlxuXHQ8YSBocmVmPScvc2V0dGluZ3MnPlNldHRpbmdzPC9hPlxuXHQ8YSBocmVmPScvc3RhdHMnPlN0YXRzPC9hPlxuYDtcbiIsImV4cG9ydCBkZWZhdWx0IFwiPGgxPlNldHRpbmdzPC9oMT5cIjtcbiIsImV4cG9ydCBkZWZhdWx0IFwiPGgxPlN0YXRzPC9oMT5cIjtcbiIsImV4cG9ydCBkZWZhdWx0IFwiPGgxPlRlc3Q8L2gxPlwiO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCI8aDE+VHJhaW5lcjwvaDE+XCI7XG4iLCJpbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4vU2V0dGluZ3NcIjtcbmltcG9ydCBTdGF0cyBmcm9tIFwiLi9TdGF0c1wiO1xuaW1wb3J0IFRyYWluZXIgZnJvbSBcIi4vVHJhaW5lclwiO1xuaW1wb3J0IFRlc3QgZnJvbSBcIi4vVGVzdFwiO1xuXG5pbnRlcmZhY2UgSVZpZXdzIHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5jb25zdCB2aWV3czogSVZpZXdzID0ge1xuICBcIi9cIjogSG9tZSxcbiAgXCIvc2V0dGluZ3NcIjogU2V0dGluZ3MsXG4gIFwiL3N0YXRzXCI6IFN0YXRzLFxuICBcIi90cmFpbmVyXCI6IFRyYWluZXIsXG4gIFwiL3Rlc3RcIjogVGVzdCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHZpZXdzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0ICogYXMgcm91dGVyIGZyb20gXCIuL3JvdXRlclwiO1xuXG5pZiAoXCJzZXJ2aWNlV29ya2VyXCIgaW4gbmF2aWdhdG9yKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoXCIuL3N3LmpzXCIsIHsgc2NvcGU6IFwiL1wiIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIFdvcmtlciBSZWdpc3RlcmVkXCIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gbGlzdGVyZW5lcnMgZm9yIHJlbmRlciBjb250ZW50IGZvciBjdXJyZW50IHJvdXRlXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIHJvdXRlci5yZW5kZXJSb3V0ZUhhbmRsZXIpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgcm91dGVyLnJlbmRlclJvdXRlSGFuZGxlcik7XG5cbi8vIGN1c3RvbSBoYW5kbGVyIGZvciBsaW5rc1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJvdXRlci5saW5rTGlzdGVuZXJIYW5kbGVyKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==