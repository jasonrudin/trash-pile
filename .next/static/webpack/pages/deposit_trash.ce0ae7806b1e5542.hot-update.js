"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/deposit_trash",{

/***/ "./pages/deposit_trash.js":
/*!********************************!*\
  !*** ./pages/deposit_trash.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_DepositTrashView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/DepositTrashView */ \"./components/DepositTrashView.js\");\n/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header/Header */ \"./components/header/Header.js\");\n\n\n\n\nfunction DepositTrashPage(props) {\n    var requestOptions = {\n        method: \"GET\",\n        redirect: \"follow\"\n    };\n    var results = \"\";\n    fetch(\"https://api-mainnet.magiceden.dev/v2/wallets/4wejSnr97csngztZ5SU7A6iZRXJD7B3Y1R1koCQ5NjmD/tokens?offset=0&limit=100&listedOnly=true\", requestOptions).then(function(response) {\n        return response.text();\n    }).then(function(result) {\n        console.log(\"result\");\n    });\n    console.log(results);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Department of Sanitation\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jasonrudin/Documents/trash-pile/pages/deposit_trash.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jasonrudin/Documents/trash-pile/pages/deposit_trash.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jasonrudin/Documents/trash-pile/pages/deposit_trash.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {}, void 0, false, {\n                fileName: \"/Users/jasonrudin/Documents/trash-pile/pages/deposit_trash.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DepositTrashView__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/jasonrudin/Documents/trash-pile/pages/deposit_trash.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"h-48 bg-gradient-to-t from-black to-gray-700\"\n            }, void 0, false, {\n                fileName: \"/Users/jasonrudin/Documents/trash-pile/pages/deposit_trash.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jasonrudin/Documents/trash-pile/pages/deposit_trash.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_c = DepositTrashPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DepositTrashPage);\nvar _c;\n$RefreshReg$(_c, \"DepositTrashPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kZXBvc2l0X3RyYXNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNpQztBQUNUO0FBRXJELFNBQVNHLGdCQUFnQixDQUFDQyxLQUFLLEVBQUU7SUFFL0IsSUFBSUMsY0FBYyxHQUFHO1FBQ25CQyxNQUFNLEVBQUUsS0FBSztRQUNiQyxRQUFRLEVBQUUsUUFBUTtLQUNuQjtJQUVELElBQUlDLE9BQU8sR0FBRyxFQUFFO0lBRWhCQyxLQUFLLENBQUMscUlBQXFJLEVBQUVKLGNBQWMsQ0FBQyxDQUN6SkssSUFBSSxDQUFDQyxTQUFBQSxRQUFRO2VBQUlBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO0tBQUEsQ0FBQyxDQUNqQ0YsSUFBSSxDQUFDLFNBQVVHLE1BQU0sRUFBRTtRQUNwQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDdkIsQ0FBQyxDQUFDO0lBRVBELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxPQUFPLENBQUMsQ0FBQztJQUVyQixxQkFDRSw4REFBQ1EsS0FBRztRQUFDQyxTQUFTLEVBQUMsYUFBYTs7MEJBQzFCLDhEQUFDakIsa0RBQUk7O2tDQUNILDhEQUFDa0IsT0FBSztrQ0FBQywwQkFBd0I7Ozs7OzRCQUFRO2tDQUN2Qyw4REFBQ0MsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxjQUFjOzs7Ozs0QkFBRzs7Ozs7O29CQUNsQzswQkFDUCw4REFBQ25CLDZEQUFNOzs7O29CQUFHOzBCQUNWLDhEQUFDRCxvRUFBZ0I7Ozs7b0JBQUc7MEJBQ3BCLDhEQUFDcUIsUUFBTTtnQkFBQ0wsU0FBUyxFQUFDLDhDQUE4Qzs7Ozs7b0JBQVU7Ozs7OztZQUN0RSxDQUNOO0NBQ0g7QUE1QlFkLEtBQUFBLGdCQUFnQjs7QUE4QnpCLCtEQUFlQSxnQkFBZ0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kZXBvc2l0X3RyYXNoLmpzP2FjZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IERlcG9zaXRUcmFzaFZpZXcgZnJvbSBcIi4uL2NvbXBvbmVudHMvRGVwb3NpdFRyYXNoVmlld1wiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyJztcblxuZnVuY3Rpb24gRGVwb3NpdFRyYXNoUGFnZShwcm9wcykge1xuXG4gIHZhciByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIHJlZGlyZWN0OiAnZm9sbG93J1xuICB9O1xuXG4gIGxldCByZXN1bHRzID0gXCJcIjtcblxuICBmZXRjaChcImh0dHBzOi8vYXBpLW1haW5uZXQubWFnaWNlZGVuLmRldi92Mi93YWxsZXRzLzR3ZWpTbnI5N2Nzbmd6dFo1U1U3QTZpWlJYSkQ3QjNZMVIxa29DUTVOam1EL3Rva2Vucz9vZmZzZXQ9MCZsaW1pdD0xMDAmbGlzdGVkT25seT10cnVlXCIsIHJlcXVlc3RPcHRpb25zKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQnKTtcbiAgICAgIH0pO1xuXG4gIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMFwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5EZXBhcnRtZW50IG9mIFNhbml0YXRpb248L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8RGVwb3NpdFRyYXNoVmlldyAvPlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJoLTQ4IGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ibGFjayB0by1ncmF5LTcwMFwiPjwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEZXBvc2l0VHJhc2hQYWdlO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICAvL25mdHM6IGRhdGFcbiAgICB9LFxuICB9XG59Il0sIm5hbWVzIjpbIkhlYWQiLCJEZXBvc2l0VHJhc2hWaWV3IiwiSGVhZGVyIiwiRGVwb3NpdFRyYXNoUGFnZSIsInByb3BzIiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJyZWRpcmVjdCIsInJlc3VsdHMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInRleHQiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/deposit_trash.js\n");

/***/ })

});