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

/***/ "./src/modules/trainer/index.ts":
/*!**************************************!*\
  !*** ./src/modules/trainer/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TrainerModule)
/* harmony export */ });
class TrainerModule {
    constructor() {
        this.text = "";
        this.originalText = "";
        this.state = "waiting";
        this.onUpdate = () => { };
        this.boundKeydownHandler = () => { };
        this.setupVariables();
    }
    setOnUpdate(fn) {
        this.onUpdate = fn;
    }
    keydownHandler(event) {
        console.log(this.state);
        if (this.state === "started") {
            if (this.text[0] === event.key) {
                this.text = this.text.substring(1);
                if (this.text.length === 0) {
                    this.state = "waiting";
                }
                this.onUpdate();
            }
        }
    }
    start() {
        this.state = "started";
    }
    wait() {
        this.state = "waiting";
    }
    toggleState() {
        this.state === "started" ? this.wait() : this.start();
    }
    setupVariables() {
        const text = this.getText();
        this.text = text;
        this.originalText = text;
        this.onUpdate = () => { };
        this.boundKeydownHandler = this.keydownHandler.bind(this);
    }
    getText() {
        // fetch text then return
        return "i need to make text generator to gen text for tests";
    }
    getCurrentSymbol() {
        return this.text[0];
    }
    getOriginalText() {
        return this.originalText;
    }
    removeKeydownListener() {
        document.removeEventListener("keydown", this.boundKeydownHandler);
    }
    addKeydownListener() {
        document.addEventListener("keydown", this.boundKeydownHandler);
    }
}


/***/ }),

/***/ "./src/router.ts":
/*!***********************!*\
  !*** ./src/router.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   redirect: () => (/* binding */ redirect),
/* harmony export */   renderRouteHandler: () => (/* binding */ renderRouteHandler)
/* harmony export */ });
/* harmony import */ var _views__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views */ "./src/views/index.ts");

let currentView = null;
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
    var _a;
    if (currentView)
        currentView.unmount();
    const currentPath = window.location.pathname;
    const ViewClass = (_a = _views__WEBPACK_IMPORTED_MODULE_0__["default"][currentPath]) !== null && _a !== void 0 ? _a : _views__WEBPACK_IMPORTED_MODULE_0__["default"]["/"];
    currentView = new ViewClass();
    if (window.location.pathname === "/test" && qa === "test") {
        const container = document.querySelector("body");
        container === null || container === void 0 ? void 0 : container.replaceChildren();
        container === null || container === void 0 ? void 0 : container.insertAdjacentHTML("afterbegin", _views__WEBPACK_IMPORTED_MODULE_0__.Test);
        return;
    }
    currentView.mount();
}
function routerSetup() {
    // listereners for render content for current route
    window.addEventListener("popstate", renderRouteHandler);
    document.addEventListener("DOMContentLoaded", renderRouteHandler);
    // custom handler for links
    document.addEventListener("click", linkListenerHandler);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routerSetup);


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
class Home {
    mount() {
        console.log("mount home view");
        return `
	<h1>Home</h1>
	<a href='/'>Home</a>
	<a href='/trainer'>Trainer</a>
	<a href='/settings'>Settings</a>
	<a href='/stats'>Stats</a>
`;
    }
    unmount() {
        console.log("unmount home view");
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


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
class Settings {
    mount() {
        console.log("mount settings view");
        return "<h1>Settings</h1>";
    }
    unmount() {
        console.log("unmount settings view");
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);


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
class Stats {
    mount() {
        console.log("mount stats view");
        return "<h1>Stats</h1>";
    }
    unmount() {
        console.log("unmount stats view");
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stats);


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
/* harmony import */ var _modules_trainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/trainer */ "./src/modules/trainer/index.ts");

class Trainer {
    constructor() {
        this.handleStartButton = () => {
            this.trainer.toggleState();
        };
        this.trainer = new _modules_trainer__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    mount() {
        console.log("mount trainer view");
        this.trainer.addKeydownListener();
        this.trainer.setOnUpdate(() => {
            const currentSymbolEl = document.getElementById("currentSymbol");
            if (currentSymbolEl) {
                currentSymbolEl.textContent = this.trainer.getCurrentSymbol();
            }
        });
        const container = document.querySelector("body");
        container === null || container === void 0 ? void 0 : container.replaceChildren();
        container === null || container === void 0 ? void 0 : container.insertAdjacentHTML("afterbegin", `
			<h1>Trainer page</h1>
			<p>${this.trainer.getOriginalText()}</p>
			<p id='currentSymbol'>${this.trainer.getCurrentSymbol()}</p>
			<button id='startButton'>Start training</button>
		`);
        const startButtonEl = document.getElementById("startButton");
        if (startButtonEl) {
            startButtonEl.addEventListener("click", this.handleStartButton);
        }
    }
    unmount() {
        this.trainer.removeKeydownListener();
        console.log("unmount trainer view");
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Trainer);


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


// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker.register("./sw.js", { scope: "/" }).then(() => {
//       console.log("Service Worker Registered");
//     });
//   });
// }
(0,_router__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBZSxNQUFNLGFBQWE7SUFPaEM7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxXQUFXLENBQUMsRUFBYztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQW9CO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUM3QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO29CQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztnQkFDekIsQ0FBQztnQkFDRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEQsQ0FBQztJQUVELGNBQWM7UUFDWixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxPQUFPO1FBQ0wseUJBQXlCO1FBQ3pCLE9BQU8scURBQXFELENBQUM7SUFDL0QsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRUQscUJBQXFCO1FBQ25CLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVxQztBQUd0QyxJQUFJLFdBQVcsR0FBaUIsSUFBSSxDQUFDO0FBRXJDLFNBQVMsUUFBUSxDQUFDLEtBQWEsRUFBRSxLQUFhLEVBQUU7SUFDOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4QyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLEtBQVk7SUFDL0IsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQXlCLENBQUM7SUFDL0MsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDL0IsQ0FBQztBQUVELFNBQVMsbUJBQW1CLENBQUMsS0FBaUI7SUFDNUMsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUM1QixJQUFJLE1BQU0sWUFBWSxPQUFPLEVBQUUsQ0FBQztRQUM5QixNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksSUFBSSxFQUFFLENBQUM7WUFDVCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsa0JBQWtCLENBQUMsQ0FBZSxFQUFFLEtBQWEsRUFBRTs7SUFDMUQsSUFBSSxXQUFXO1FBQUUsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBRXZDLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO0lBQzdDLE1BQU0sU0FBUyxHQUFHLG9EQUFLLENBQUMsV0FBVyxDQUFDLG1DQUFJLDhDQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkQsV0FBVyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7SUFFOUIsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsS0FBSyxPQUFPLElBQUksRUFBRSxLQUFLLE1BQU0sRUFBRSxDQUFDO1FBQzFELE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLGVBQWUsRUFBRSxDQUFDO1FBQzdCLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsd0NBQUksQ0FBQyxDQUFDO1FBQ2xELE9BQU87SUFDVCxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3RCLENBQUM7QUFFRCxTQUFTLFdBQVc7SUFDbEIsbURBQW1EO0lBQ25ELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN4RCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUVsRSwyQkFBMkI7SUFDM0IsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFFdUM7QUFDeEMsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNyRDNCLE1BQU0sSUFBSTtJQUNSLEtBQUs7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0IsT0FBTzs7Ozs7O0NBTVYsQ0FBQztJQUNBLENBQUM7SUFFRCxPQUFPO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Q0FDRjtBQUVELGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJwQixNQUFNLFFBQVE7SUFDWixLQUFLO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ25DLE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUNELE9BQU87UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNGO0FBQ0QsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNUeEIsTUFBTSxLQUFLO0lBQ1QsS0FBSztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNoQyxPQUFPLGdCQUFnQixDQUFDO0lBQzFCLENBQUM7SUFDRCxPQUFPO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDRjtBQUNELGlFQUFlLEtBQUssRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDWHJCLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FtQjtBQUdsRCxNQUFNLE9BQU87SUFHWDtRQW1DQSxzQkFBaUIsR0FBRyxHQUFHLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUM7UUFwQ0EsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHdEQUFhLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsS0FBSztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFO1lBQzVCLE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDakUsSUFBSSxlQUFlLEVBQUUsQ0FBQztnQkFDcEIsZUFBZSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDaEUsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxTQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsZUFBZSxFQUFFLENBQUM7UUFFN0IsU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLGtCQUFrQixDQUMzQixZQUFZLEVBQ1o7O1FBRUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUU7MkJBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTs7R0FFdkQsQ0FDRSxDQUFDO1FBRUYsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUU3RCxJQUFJLGFBQWEsRUFBRSxDQUFDO1lBQ2xCLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbEUsQ0FBQztJQUNILENBQUM7SUFNRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0Y7QUFDRCxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xERztBQUNRO0FBQ047QUFDSTtBQUNOO0FBRzFCLE1BQU0sS0FBSyxHQUFXO0lBQ3BCLEdBQUcsRUFBRSw2Q0FBSTtJQUNULFdBQVcsRUFBRSxpREFBUTtJQUNyQixRQUFRLEVBQUUsOENBQUs7SUFDZixVQUFVLEVBQUUsZ0RBQU87Q0FDcEIsQ0FBQztBQUVGLGlFQUFlLEtBQUssRUFBQztBQUNMOzs7Ozs7O1VDZmhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ2M7QUFFbkMsc0NBQXNDO0FBQ3RDLDRDQUE0QztBQUM1QywrRUFBK0U7QUFDL0Usa0RBQWtEO0FBQ2xELFVBQVU7QUFDVixRQUFRO0FBQ1IsSUFBSTtBQUVKLG1EQUFXLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9tb2R1bGVzL3RyYWluZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcm91dGVyLnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3ZpZXdzL0hvbWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3MvU2V0dGluZ3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3MvU3RhdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3MvVGVzdC9pbmRleC50cyIsIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy92aWV3cy9UcmFpbmVyL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3ZpZXdzL2luZGV4LnRzIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zyb250ZW5kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhaW5lck1vZHVsZSB7XG4gIHByaXZhdGUgc3RhdGU6IFwic3RhcnRlZFwiIHwgXCJ3YWl0aW5nXCI7XG4gIHByaXZhdGUgdGV4dDogc3RyaW5nO1xuICBwcml2YXRlIG9yaWdpbmFsVGV4dDogc3RyaW5nO1xuICBwcml2YXRlIGJvdW5kS2V5ZG93bkhhbmRsZXI6IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBvblVwZGF0ZTogKCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRleHQgPSBcIlwiO1xuICAgIHRoaXMub3JpZ2luYWxUZXh0ID0gXCJcIjtcbiAgICB0aGlzLnN0YXRlID0gXCJ3YWl0aW5nXCI7XG4gICAgdGhpcy5vblVwZGF0ZSA9ICgpID0+IHt9O1xuICAgIHRoaXMuYm91bmRLZXlkb3duSGFuZGxlciA9ICgpID0+IHt9O1xuXG4gICAgdGhpcy5zZXR1cFZhcmlhYmxlcygpO1xuICB9XG5cbiAgc2V0T25VcGRhdGUoZm46ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLm9uVXBkYXRlID0gZm47XG4gIH1cblxuICBrZXlkb3duSGFuZGxlcihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgIGlmICh0aGlzLnN0YXRlID09PSBcInN0YXJ0ZWRcIikge1xuICAgICAgaWYgKHRoaXMudGV4dFswXSA9PT0gZXZlbnQua2V5KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRoaXMudGV4dC5zdWJzdHJpbmcoMSk7XG4gICAgICAgIGlmICh0aGlzLnRleHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IFwid2FpdGluZ1wiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25VcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLnN0YXRlID0gXCJzdGFydGVkXCI7XG4gIH1cblxuICB3YWl0KCkge1xuICAgIHRoaXMuc3RhdGUgPSBcIndhaXRpbmdcIjtcbiAgfVxuXG4gIHRvZ2dsZVN0YXRlKCkge1xuICAgIHRoaXMuc3RhdGUgPT09IFwic3RhcnRlZFwiID8gdGhpcy53YWl0KCkgOiB0aGlzLnN0YXJ0KCk7XG4gIH1cblxuICBzZXR1cFZhcmlhYmxlcygpIHtcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5nZXRUZXh0KCk7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLm9yaWdpbmFsVGV4dCA9IHRleHQ7XG4gICAgdGhpcy5vblVwZGF0ZSA9ICgpID0+IHt9O1xuICAgIHRoaXMuYm91bmRLZXlkb3duSGFuZGxlciA9IHRoaXMua2V5ZG93bkhhbmRsZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGdldFRleHQoKSB7XG4gICAgLy8gZmV0Y2ggdGV4dCB0aGVuIHJldHVyblxuICAgIHJldHVybiBcImkgbmVlZCB0byBtYWtlIHRleHQgZ2VuZXJhdG9yIHRvIGdlbiB0ZXh0IGZvciB0ZXN0c1wiO1xuICB9XG5cbiAgZ2V0Q3VycmVudFN5bWJvbCgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0WzBdO1xuICB9XG5cbiAgZ2V0T3JpZ2luYWxUZXh0KCkge1xuICAgIHJldHVybiB0aGlzLm9yaWdpbmFsVGV4dDtcbiAgfVxuXG4gIHJlbW92ZUtleWRvd25MaXN0ZW5lcigpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmJvdW5kS2V5ZG93bkhhbmRsZXIpO1xuICB9XG5cbiAgYWRkS2V5ZG93bkxpc3RlbmVyKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuYm91bmRLZXlkb3duSGFuZGxlcik7XG4gIH1cbn1cbiIsImltcG9ydCB2aWV3cywgeyBUZXN0IH0gZnJvbSBcIi4vdmlld3NcIjtcbmltcG9ydCB7IElWaWV3IH0gZnJvbSBcIi4vdmlld3MvdHlwZXNcIjtcblxubGV0IGN1cnJlbnRWaWV3OiBJVmlldyB8IG51bGwgPSBudWxsO1xuXG5mdW5jdGlvbiByZWRpcmVjdChyb3V0ZTogc3RyaW5nLCBxYTogc3RyaW5nID0gXCJcIikge1xuICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sIFwiXCIsIHJvdXRlKTtcbiAgcmVuZGVyUm91dGVIYW5kbGVyKG51bGwsIHFhKTtcbn1cblxuZnVuY3Rpb24gbGlua0hhbmRsZXIoZXZlbnQ6IEV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MTGlua0VsZW1lbnQ7XG4gIHJlZGlyZWN0KHRhcmdldC5ocmVmKTtcbiAgcmVuZGVyUm91dGVIYW5kbGVyKG51bGwsIFwiXCIpO1xufVxuXG5mdW5jdGlvbiBsaW5rTGlzdGVuZXJIYW5kbGVyKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICBjb25zdCBsaW5rID0gdGFyZ2V0LmNsb3Nlc3QoXCJhXCIpO1xuICAgIGlmIChsaW5rKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbGlua0hhbmRsZXIoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJSb3V0ZUhhbmRsZXIoXzogbnVsbCB8IEV2ZW50LCBxYTogc3RyaW5nID0gXCJcIikge1xuICBpZiAoY3VycmVudFZpZXcpIGN1cnJlbnRWaWV3LnVubW91bnQoKTtcblxuICBjb25zdCBjdXJyZW50UGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgY29uc3QgVmlld0NsYXNzID0gdmlld3NbY3VycmVudFBhdGhdID8/IHZpZXdzW1wiL1wiXTtcbiAgY3VycmVudFZpZXcgPSBuZXcgVmlld0NsYXNzKCk7XG5cbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvdGVzdFwiICYmIHFhID09PSBcInRlc3RcIikge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGNvbnRhaW5lcj8ucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgY29udGFpbmVyPy5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIFRlc3QpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGN1cnJlbnRWaWV3Lm1vdW50KCk7XG59XG5cbmZ1bmN0aW9uIHJvdXRlclNldHVwKCkge1xuICAvLyBsaXN0ZXJlbmVycyBmb3IgcmVuZGVyIGNvbnRlbnQgZm9yIGN1cnJlbnQgcm91dGVcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCByZW5kZXJSb3V0ZUhhbmRsZXIpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCByZW5kZXJSb3V0ZUhhbmRsZXIpO1xuXG4gIC8vIGN1c3RvbSBoYW5kbGVyIGZvciBsaW5rc1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbGlua0xpc3RlbmVySGFuZGxlcik7XG59XG5cbmV4cG9ydCB7IHJlZGlyZWN0LCByZW5kZXJSb3V0ZUhhbmRsZXIgfTtcbmV4cG9ydCBkZWZhdWx0IHJvdXRlclNldHVwO1xuIiwiaW1wb3J0IHsgSVZpZXcgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmNsYXNzIEhvbWUgaW1wbGVtZW50cyBJVmlldyB7XG4gIG1vdW50KCkge1xuICAgIGNvbnNvbGUubG9nKFwibW91bnQgaG9tZSB2aWV3XCIpO1xuICAgIHJldHVybiBgXG5cdDxoMT5Ib21lPC9oMT5cblx0PGEgaHJlZj0nLyc+SG9tZTwvYT5cblx0PGEgaHJlZj0nL3RyYWluZXInPlRyYWluZXI8L2E+XG5cdDxhIGhyZWY9Jy9zZXR0aW5ncyc+U2V0dGluZ3M8L2E+XG5cdDxhIGhyZWY9Jy9zdGF0cyc+U3RhdHM8L2E+XG5gO1xuICB9XG5cbiAgdW5tb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZyhcInVubW91bnQgaG9tZSB2aWV3XCIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgeyBJVmlldyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jbGFzcyBTZXR0aW5ncyBpbXBsZW1lbnRzIElWaWV3IHtcbiAgbW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coXCJtb3VudCBzZXR0aW5ncyB2aWV3XCIpO1xuICAgIHJldHVybiBcIjxoMT5TZXR0aW5nczwvaDE+XCI7XG4gIH1cbiAgdW5tb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZyhcInVubW91bnQgc2V0dGluZ3Mgdmlld1wiKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ3M7XG4iLCJpbXBvcnQgeyBJVmlldyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jbGFzcyBTdGF0cyBpbXBsZW1lbnRzIElWaWV3IHtcbiAgbW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coXCJtb3VudCBzdGF0cyB2aWV3XCIpO1xuICAgIHJldHVybiBcIjxoMT5TdGF0czwvaDE+XCI7XG4gIH1cbiAgdW5tb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZyhcInVubW91bnQgc3RhdHMgdmlld1wiKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU3RhdHM7XG4iLCJleHBvcnQgZGVmYXVsdCBcIjxoMT5UZXN0PC9oMT5cIjtcbiIsImltcG9ydCBUcmFpbmVyTW9kdWxlIGZyb20gXCIuLi8uLi9tb2R1bGVzL3RyYWluZXJcIjtcbmltcG9ydCB7IElWaWV3IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNsYXNzIFRyYWluZXIgaW1wbGVtZW50cyBJVmlldyB7XG4gIHByaXZhdGUgdHJhaW5lcjogVHJhaW5lck1vZHVsZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRyYWluZXIgPSBuZXcgVHJhaW5lck1vZHVsZSgpO1xuICB9XG5cbiAgbW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coXCJtb3VudCB0cmFpbmVyIHZpZXdcIik7XG4gICAgdGhpcy50cmFpbmVyLmFkZEtleWRvd25MaXN0ZW5lcigpO1xuXG4gICAgdGhpcy50cmFpbmVyLnNldE9uVXBkYXRlKCgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTeW1ib2xFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudFN5bWJvbFwiKTtcbiAgICAgIGlmIChjdXJyZW50U3ltYm9sRWwpIHtcbiAgICAgICAgY3VycmVudFN5bWJvbEVsLnRleHRDb250ZW50ID0gdGhpcy50cmFpbmVyLmdldEN1cnJlbnRTeW1ib2woKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGNvbnRhaW5lcj8ucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICBjb250YWluZXI/Lmluc2VydEFkamFjZW50SFRNTChcbiAgICAgIFwiYWZ0ZXJiZWdpblwiLFxuICAgICAgYFxuXHRcdFx0PGgxPlRyYWluZXIgcGFnZTwvaDE+XG5cdFx0XHQ8cD4ke3RoaXMudHJhaW5lci5nZXRPcmlnaW5hbFRleHQoKX08L3A+XG5cdFx0XHQ8cCBpZD0nY3VycmVudFN5bWJvbCc+JHt0aGlzLnRyYWluZXIuZ2V0Q3VycmVudFN5bWJvbCgpfTwvcD5cblx0XHRcdDxidXR0b24gaWQ9J3N0YXJ0QnV0dG9uJz5TdGFydCB0cmFpbmluZzwvYnV0dG9uPlxuXHRcdGAsXG4gICAgKTtcblxuICAgIGNvbnN0IHN0YXJ0QnV0dG9uRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0QnV0dG9uXCIpO1xuXG4gICAgaWYgKHN0YXJ0QnV0dG9uRWwpIHtcbiAgICAgIHN0YXJ0QnV0dG9uRWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlU3RhcnRCdXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVN0YXJ0QnV0dG9uID0gKCkgPT4ge1xuICAgIHRoaXMudHJhaW5lci50b2dnbGVTdGF0ZSgpO1xuICB9O1xuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy50cmFpbmVyLnJlbW92ZUtleWRvd25MaXN0ZW5lcigpO1xuICAgIGNvbnNvbGUubG9nKFwidW5tb3VudCB0cmFpbmVyIHZpZXdcIik7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRyYWluZXI7XG4iLCJpbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4vU2V0dGluZ3NcIjtcbmltcG9ydCBTdGF0cyBmcm9tIFwiLi9TdGF0c1wiO1xuaW1wb3J0IFRyYWluZXIgZnJvbSBcIi4vVHJhaW5lclwiO1xuaW1wb3J0IFRlc3QgZnJvbSBcIi4vVGVzdFwiO1xuaW1wb3J0IHsgSVZpZXdzIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuY29uc3Qgdmlld3M6IElWaWV3cyA9IHtcbiAgXCIvXCI6IEhvbWUsXG4gIFwiL3NldHRpbmdzXCI6IFNldHRpbmdzLFxuICBcIi9zdGF0c1wiOiBTdGF0cyxcbiAgXCIvdHJhaW5lclwiOiBUcmFpbmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdmlld3M7XG5leHBvcnQgeyBUZXN0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgcm91dGVyU2V0dXAgZnJvbSBcIi4vcm91dGVyXCI7XG5cbi8vIGlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcbi8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbi8vICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcihcIi4vc3cuanNcIiwgeyBzY29wZTogXCIvXCIgfSkudGhlbigoKSA9PiB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2UgV29ya2VyIFJlZ2lzdGVyZWRcIik7XG4vLyAgICAgfSk7XG4vLyAgIH0pO1xuLy8gfVxuXG5yb3V0ZXJTZXR1cCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9