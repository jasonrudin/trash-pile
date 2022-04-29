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

/***/ "./components/DepositConfirmationView.js":
/*!***********************************************!*\
  !*** ./components/DepositConfirmationView.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ContentWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentWrapper */ \"./components/ContentWrapper.js\");\n/* harmony import */ var _NFTReviewScreenCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NFTReviewScreenCard */ \"./components/NFTReviewScreenCard.js\");\n/* harmony import */ var _ViewWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ViewWrapper */ \"./components/ViewWrapper.js\");\n\n\n\n\nfunction DepositConfirmationView(props) {\n    var nftsToTrash = props.nftsToTrash;\n    if (nftsToTrash != null) {\n        var _this = this;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ViewWrapper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContentWrapper__WEBPACK_IMPORTED_MODULE_1__.ContentWrapper, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-white sticky top-0 z-10 mb-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-3xl font-bold pt-2\",\n                                            children: \"Review Your Deposit\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                            lineNumber: 14,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"\",\n                                            children: \"Confirm the NFTs you'd like to throw away. This step cannot be undone.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                            lineNumber: 15,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                    lineNumber: 13,\n                                    columnNumber: 29\n                                }, this),\n                                nftsToTrash.map(function(nft, index) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NFTReviewScreenCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        nft: nft\n                                    }, nft.id, false, {\n                                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                        lineNumber: 19,\n                                        columnNumber: 37\n                                    }, _this);\n                                })\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                            lineNumber: 12,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-white sticky top-0 z-10 mb-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-3xl font-bold pt-2\",\n                                            children: \"What you'll get\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                            lineNumber: 28,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"\",\n                                            children: \"You get $TRASH for depositing your NFTs. Read more about $TRASH here.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                            lineNumber: 29,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"grid grid-cols-3 grid-rows-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"col-span-2\",\n                                            children: \"NFTs you're depositing:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-right\",\n                                            children: \"5\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                            lineNumber: 33,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"col-span-2\",\n                                            children: \"$TRASH you receive:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                            lineNumber: 34,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-right\",\n                                            children: \"5,000\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                            lineNumber: 26,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                    lineNumber: 11,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                lineNumber: 10,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Error!\"\n        }, void 0, false, {\n            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n            lineNumber: 45,\n            columnNumber: 13\n        }, this);\n    }\n}\n_c = DepositConfirmationView;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DepositConfirmationView);\nvar _c;\n$RefreshReg$(_c, \"DepositConfirmationView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RlcG9zaXRDb25maXJtYXRpb25WaWV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQWtEO0FBQ007QUFDaEI7QUFFeEMsU0FBU0csdUJBQXVCLENBQUNDLEtBQUssRUFBRTtJQUNwQyxJQUFJQyxXQUFXLEdBQUdELEtBQUssQ0FBQ0MsV0FBVztJQUNuQyxJQUFHQSxXQUFXLElBQUksSUFBSSxFQUFDOztRQUNuQixxQkFDSSw4REFBQ0gsb0RBQVc7c0JBQ1IsNEVBQUNGLDJEQUFjOzBCQUNYLDRFQUFDTSxLQUFHO29CQUFDQyxTQUFTLEVBQUMsTUFBTTs7c0NBQ2pCLDhEQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsRUFBRTs7OENBQ2IsOERBQUNELEtBQUc7b0NBQUNDLFNBQVMsRUFBQyxpQ0FBaUM7O3NEQUM1Qyw4REFBQ0MsSUFBRTs0Q0FBQ0QsU0FBUyxFQUFDLHlCQUF5QjtzREFBQyxxQkFBbUI7Ozs7O2dEQUFLO3NEQUNoRSw4REFBQ0UsSUFBRTs0Q0FBQ0YsU0FBUyxFQUFDLEVBQUU7c0RBQUMsd0VBQXNFOzs7OztnREFBSzs7Ozs7O3dDQUMxRjtnQ0FFRkYsV0FBVyxDQUFDSyxHQUFHLENBQUMsU0FBQ0MsR0FBRyxFQUFFQyxLQUFLO3lEQUN2Qiw4REFBQ1gsNERBQW1CO3dDQUNoQlUsR0FBRyxFQUFFQSxHQUFHO3VDQUNIQSxHQUFHLENBQUNFLEVBQUU7Ozs7NkNBQ2I7aUNBQ0wsQ0FBQzs7Ozs7O2dDQUVKO3NDQUNOLDhEQUFDUCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsRUFBRTs7OENBQ2IsOERBQUNELEtBQUc7b0NBQUNDLFNBQVMsRUFBQyxpQ0FBaUM7O3NEQUM1Qyw4REFBQ0MsSUFBRTs0Q0FBQ0QsU0FBUyxFQUFDLHlCQUF5QjtzREFBQyxpQkFBZTs7Ozs7Z0RBQUs7c0RBQzVELDhEQUFDRSxJQUFFOzRDQUFDRixTQUFTLEVBQUMsRUFBRTtzREFBQyx1RUFBcUU7Ozs7O2dEQUFLOzs7Ozs7d0NBQ3pGOzhDQUNOLDhEQUFDRCxLQUFHO29DQUFDQyxTQUFTLEVBQUMsOEJBQThCOztzREFDekMsOERBQUNPLElBQUU7NENBQUNQLFNBQVMsRUFBQyxZQUFZO3NEQUFDLHlCQUF1Qjs7Ozs7Z0RBQUs7c0RBQ3ZELDhEQUFDTyxJQUFFOzRDQUFDUCxTQUFTLEVBQUMsWUFBWTtzREFBQyxHQUFDOzs7OztnREFBSztzREFDakMsOERBQUNPLElBQUU7NENBQUNQLFNBQVMsRUFBQyxZQUFZO3NEQUFDLHFCQUFtQjs7Ozs7Z0RBQUs7c0RBQ25ELDhEQUFDTyxJQUFFOzRDQUFDUCxTQUFTLEVBQUMsWUFBWTtzREFBQyxPQUFLOzs7OztnREFBSzs7Ozs7O3dDQUNuQzs7Ozs7O2dDQUNKOzs7Ozs7d0JBQ0o7Ozs7O29CQUNPOzs7OztnQkFDUCxDQUNoQjtLQUNMLE1BQ0c7UUFDQSxxQkFDSSw4REFBQ0QsS0FBRztzQkFBQyxRQUVMOzs7OztnQkFBTSxDQUNSO0tBQ0w7Q0FJSjtBQWhEUUgsS0FBQUEsdUJBQXVCO0FBa0RoQywrREFBZUEsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXBvc2l0Q29uZmlybWF0aW9uVmlldy5qcz8xNDdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRlbnRXcmFwcGVyIH0gZnJvbSBcIi4vQ29udGVudFdyYXBwZXJcIjtcbmltcG9ydCBORlRSZXZpZXdTY3JlZW5DYXJkIGZyb20gXCIuL05GVFJldmlld1NjcmVlbkNhcmRcIjtcbmltcG9ydCBWaWV3V3JhcHBlciBmcm9tIFwiLi9WaWV3V3JhcHBlclwiO1xuXG5mdW5jdGlvbiBEZXBvc2l0Q29uZmlybWF0aW9uVmlldyhwcm9wcykge1xuICAgIGxldCBuZnRzVG9UcmFzaCA9IHByb3BzLm5mdHNUb1RyYXNoO1xuICAgIGlmKG5mdHNUb1RyYXNoICE9IG51bGwpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFZpZXdXcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxDb250ZW50V3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc3RpY2t5IHRvcC0wIHotMTAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHB0LTJcIj5SZXZpZXcgWW91ciBEZXBvc2l0PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIlwiPkNvbmZpcm0gdGhlIE5GVHMgeW91J2QgbGlrZSB0byB0aHJvdyBhd2F5LiBUaGlzIHN0ZXAgY2Fubm90IGJlIHVuZG9uZS48L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmZ0c1RvVHJhc2gubWFwKChuZnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TkZUUmV2aWV3U2NyZWVuQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5mdD17bmZ0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bmZ0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzdGlja3kgdG9wLTAgei0xMCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgcHQtMlwiPldoYXQgeW91J2xsIGdldDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJcIj5Zb3UgZ2V0ICRUUkFTSCBmb3IgZGVwb3NpdGluZyB5b3VyIE5GVHMuIFJlYWQgbW9yZSBhYm91dCAkVFJBU0ggaGVyZS48L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBncmlkLXJvd3MtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiPk5GVHMgeW91J3JlIGRlcG9zaXRpbmc6PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj41PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIj4kVFJBU0ggeW91IHJlY2VpdmU6PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj41LDAwMDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Db250ZW50V3JhcHBlcj5cbiAgICAgICAgICAgIDwvVmlld1dyYXBwZXI+XG4gICAgICAgICk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgRXJyb3IhXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cblxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXBvc2l0Q29uZmlybWF0aW9uVmlldzsiXSwibmFtZXMiOlsiQ29udGVudFdyYXBwZXIiLCJORlRSZXZpZXdTY3JlZW5DYXJkIiwiVmlld1dyYXBwZXIiLCJEZXBvc2l0Q29uZmlybWF0aW9uVmlldyIsInByb3BzIiwibmZ0c1RvVHJhc2giLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwibWFwIiwibmZ0IiwiaW5kZXgiLCJpZCIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DepositConfirmationView.js\n");

/***/ })

});