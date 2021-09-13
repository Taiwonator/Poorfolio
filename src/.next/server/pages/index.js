/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/sections/LandingPage.tsx":
/*!*********************************************!*\
  !*** ./components/sections/LandingPage.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LandingPage_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LandingPage.scss */ \"./components/sections/LandingPage.scss\");\n/* harmony import */ var _LandingPage_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LandingPage_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/michaeltaiwo/Me/Projects/Poorfolio/src/components/sections/LandingPage.tsx\";\n\n\n\n\nconst LandingPage = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: \"Landing page\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb25zL0xhbmRpbmdQYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLE1BQU1DLFdBQXFCLEdBQUcsTUFBTTtBQUNoQyxzQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBR0gsQ0FKRDs7QUFNQSxpRUFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VjdGlvbnMvTGFuZGluZ1BhZ2UudHN4PzUyZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICcuL0xhbmRpbmdQYWdlLnNjc3MnXG5cbmNvbnN0IExhbmRpbmdQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PkxhbmRpbmcgcGFnZTwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2UiXSwibmFtZXMiOlsiUmVhY3QiLCJMYW5kaW5nUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sections/LandingPage.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_sections_LandingPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/sections/LandingPage */ \"./components/sections/LandingPage.tsx\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/michaeltaiwo/Me/Projects/Poorfolio/src/pages/index.tsx\";\n\n\n\n\nconst Home = () => {\n  const fetcher = async url => {\n    const res = await fetch(url);\n    const data = await res.json();\n\n    if (res.status !== 200) {\n      throw new Error(data.message);\n    }\n\n    return data;\n  };\n\n  fetcher('/api/hello').then(data => console.log(data));\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n    children: [\"I am app\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_sections_LandingPage__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBO0FBQ0E7OztBQUVBLE1BQU1FLElBQWMsR0FBRyxNQUFNO0FBRTNCLFFBQU1DLE9BQU8sR0FBRyxNQUFPQyxHQUFQLElBQXVCO0FBQ3JDLFVBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNGLEdBQUQsQ0FBdkI7QUFDQSxVQUFNRyxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFKLEVBQW5COztBQUVBLFFBQUlILEdBQUcsQ0FBQ0ksTUFBSixLQUFlLEdBQW5CLEVBQXdCO0FBQ3RCLFlBQU0sSUFBSUMsS0FBSixDQUFVSCxJQUFJLENBQUNJLE9BQWYsQ0FBTjtBQUNEOztBQUNELFdBQU9KLElBQVA7QUFDRCxHQVJEOztBQVVBSixFQUFBQSxPQUFPLENBQUMsWUFBRCxDQUFQLENBQXNCUyxJQUF0QixDQUEyQkwsSUFBSSxJQUFJTSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsSUFBWixDQUFuQztBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFTiwwRUFBaEI7QUFBQSx3Q0FFRSw4REFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBTUQsQ0FwQkQ7O0FBc0JBLGlFQUFlQyxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMYW5kaW5nUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zL0xhbmRpbmdQYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcblxuICBjb25zdCBmZXRjaGVyID0gYXN5bmMgKHVybDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gIFxuICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihkYXRhLm1lc3NhZ2UpXG4gICAgfVxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICBmZXRjaGVyKCcvYXBpL2hlbGxvJykudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgSSBhbSBhcHBcbiAgICAgIDxMYW5kaW5nUGFnZSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJuYW1lcyI6WyJMYW5kaW5nUGFnZSIsInN0eWxlcyIsIkhvbWUiLCJmZXRjaGVyIiwidXJsIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInN0YXR1cyIsIkVycm9yIiwibWVzc2FnZSIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"description\": \"Home_description__17Z4F\",\n\t\"code\": \"Home_code__axx2Y\",\n\t\"grid\": \"Home_grid__2Ei2F\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"logo\": \"Home_logo__1YbrH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/ZTNkOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18xeDhnQ1wiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX18xV2RoRFwiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fM0RqUjdcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzE3WjRGXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fYXh4MllcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX18yRWkyRlwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfXzJTZHRCXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMVlickhcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./components/sections/LandingPage.scss":
/*!**********************************************!*\
  !*** ./components/sections/LandingPage.scss ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();