"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./src/util/realm.js":
/*!***************************!*\
  !*** ./src/util/realm.js ***!
  \***************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": function() { return /* binding */ app; },\n/* harmony export */   \"login\": function() { return /* binding */ login; }\n/* harmony export */ });\n/* harmony import */ var realm_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! realm-web */ \"(app-client)/./node_modules/realm-web/dist/bundle.dom.es.js\");\n\nconst app = new realm_web__WEBPACK_IMPORTED_MODULE_0__.App({\n    id: \"whatever-note-1-wjxit\"\n});\nconst login = async (email, password)=>{\n    const credentials = realm_web__WEBPACK_IMPORTED_MODULE_0__.Credentials.emailPassword(email, password);\n    const logged = await app.logIn(credentials);\n    return logged;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3V0aWwvcmVhbG0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBRTVCLE1BQU1DLE1BQU0sSUFBSUQsMENBQVMsQ0FBQztJQUFFRyxJQUFJQyx1QkFBb0M7QUFBQyxHQUFHO0FBRXhFLE1BQU1HLFFBQVEsT0FBT0MsT0FBT0MsV0FBYTtJQUM5QyxNQUFNQyxjQUFjVixnRUFBK0IsQ0FBQ1EsT0FBT0M7SUFDM0QsTUFBTUksU0FBUyxNQUFNWixJQUFJYSxLQUFLLENBQUNKO0lBRS9CLE9BQU9HO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdXRpbC9yZWFsbS5qcz8yNDliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWxtIGZyb20gXCJyZWFsbS13ZWJcIjtcblxuZXhwb3J0IGNvbnN0IGFwcCA9IG5ldyBSZWFsbS5BcHAoeyBpZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkVBTE1fQVBQX0lEIH0pO1xuXG5leHBvcnQgY29uc3QgbG9naW4gPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gIGNvbnN0IGNyZWRlbnRpYWxzID0gUmVhbG0uQ3JlZGVudGlhbHMuZW1haWxQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xuICBjb25zdCBsb2dnZWQgPSBhd2FpdCBhcHAubG9nSW4oY3JlZGVudGlhbHMpO1xuXG4gIHJldHVybiBsb2dnZWQ7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWxtIiwiYXBwIiwiQXBwIiwiaWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfUkVBTE1fQVBQX0lEIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiY3JlZGVudGlhbHMiLCJDcmVkZW50aWFscyIsImVtYWlsUGFzc3dvcmQiLCJsb2dnZWQiLCJsb2dJbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/util/realm.js\n"));

/***/ })

});