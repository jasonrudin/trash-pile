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

/***/ "./components/NFTReviewScreenCard.js":
/*!*******************************************!*\
  !*** ./components/NFTReviewScreenCard.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction NFTReviewScreenCard(props) {\n    var nft = props.nft;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-44 text-sm hover:cursor-pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[156px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: nft.uri,\n                    className: \"object-cover object-center\",\n                    width: 250,\n                    height: 250\n                }, void 0, false, {\n                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTReviewScreenCard.js\",\n                    lineNumber: 11,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTReviewScreenCard.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: nft.name\n                    }, void 0, false, {\n                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTReviewScreenCard.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"\",\n                        onClick: function() {\n                            return true;\n                        },\n                        children: \"Remove\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTReviewScreenCard.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTReviewScreenCard.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTReviewScreenCard.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\n_c = NFTReviewScreenCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NFTReviewScreenCard);\nvar _c;\n$RefreshReg$(_c, \"NFTReviewScreenCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05GVFJldmlld1NjcmVlbkNhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQStCO0FBQ0U7QUFFakMsU0FBU0UsbUJBQW1CLENBQUNDLEtBQUssRUFBRTtJQUNoQyxJQUFJQyxHQUFHLEdBQUdELEtBQUssQ0FBQ0MsR0FBRztJQUVuQixxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUcsaURBQStDOzswQkFFNUQsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxXQUFXOzBCQUN0Qiw0RUFBQ04sbURBQUs7b0JBQ0ZPLEdBQUcsRUFBRUgsR0FBRyxDQUFDSSxHQUFHO29CQUNaRixTQUFTLEVBQUMsNEJBQTRCO29CQUN0Q0csS0FBSyxFQUFFLEdBQUc7b0JBQ1ZDLE1BQU0sRUFBRSxHQUFHOzs7Ozt3QkFDYjs7Ozs7b0JBQ0E7MEJBQ04sOERBQUNMLEtBQUc7O2tDQUNBLDhEQUFDTSxJQUFFO2tDQUFFUCxHQUFHLENBQUNRLElBQUk7Ozs7OzRCQUFNO2tDQUNuQiw4REFBQ0MsTUFBSTt3QkFBQ1AsU0FBUyxFQUFDLEVBQUU7d0JBQ2RRLE9BQU8sRUFBRTttQ0FBTSxJQUFJO3lCQUFBO2tDQUFFLFFBRXpCOzs7Ozs0QkFBTzs7Ozs7O29CQUNMOzs7Ozs7WUFDSixDQUNSO0NBQ0w7QUF2QlFaLEtBQUFBLG1CQUFtQjtBQXlCNUIsK0RBQWVBLG1CQUFtQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTkZUUmV2aWV3U2NyZWVuQ2FyZC5qcz9iYWIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gTkZUUmV2aWV3U2NyZWVuQ2FyZChwcm9wcykge1xuICAgIGxldCBuZnQgPSBwcm9wcy5uZnQ7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgdy00NCB0ZXh0LXNtIGhvdmVyOmN1cnNvci1wb2ludGVyYH1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVsxNTZweF1cIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtuZnQudXJpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNTB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjUwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgzPntuZnQubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRydWV9PlxuICAgICAgICAgICAgICAgICAgICBSZW1vdmVcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTkZUUmV2aWV3U2NyZWVuQ2FyZDsiXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VTdGF0ZSIsIk5GVFJldmlld1NjcmVlbkNhcmQiLCJwcm9wcyIsIm5mdCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsInVyaSIsIndpZHRoIiwiaGVpZ2h0IiwiaDMiLCJuYW1lIiwic3BhbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NFTReviewScreenCard.js\n");

/***/ })

});