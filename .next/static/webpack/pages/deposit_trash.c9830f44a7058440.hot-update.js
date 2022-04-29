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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ContentWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentWrapper */ \"./components/ContentWrapper.js\");\n/* harmony import */ var _NFTReviewScreenCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NFTReviewScreenCard */ \"./components/NFTReviewScreenCard.js\");\n/* harmony import */ var _ViewWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ViewWrapper */ \"./components/ViewWrapper.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction DepositConfirmationView(props) {\n    if (props.nftsToTrash != null) {\n        var _this = this;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ViewWrapper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContentWrapper__WEBPACK_IMPORTED_MODULE_1__.ContentWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-sm hover:cursor-pointer\",\n                        onClick: function() {\n                            return props.changeConfirmationScreen();\n                        },\n                        children: \"< Back\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                        lineNumber: 11,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-white sticky top-0 z-10 mb-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: \"text-3xl font-bold pt-2\",\n                                                children: \"Review Your Deposit\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                                lineNumber: 17,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"\",\n                                                children: \"Confirm the NFTs you'd like to throw away. This step cannot be undone.\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                                lineNumber: 18,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                        lineNumber: 16,\n                                        columnNumber: 29\n                                    }, this),\n                                    props.nftsToTrash.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"You aren't adding NFTs to the trash! Add some here.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                        lineNumber: 22,\n                                        columnNumber: 37\n                                    }, this) : props.nftsToTrash.map(function(nft, index) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NFTReviewScreenCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            nft: nft,\n                                            removeNFTFromTrash: props.removeNFTFromTrash\n                                        }, nft.id, false, {\n                                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                            lineNumber: 26,\n                                            columnNumber: 41\n                                        }, _this);\n                                    })\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                lineNumber: 15,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-white sticky top-0 z-10 mb-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: \"text-3xl font-bold pt-2\",\n                                                children: \"What you'll get\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                                lineNumber: 37,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"\",\n                                                children: \"You get $TRASH for depositing your NFTs. Read more about $TRASH here.\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                                lineNumber: 38,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid grid-cols-3 grid-rows-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"col-span-2\",\n                                                children: \"NFTs you're depositing:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-right\",\n                                                children: nfts_to_trash.length\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"col-span-2\",\n                                                children: \"$TRASH you receive:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                                lineNumber: 43,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-right\",\n                                                children: \"5,000\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                lineNumber: 35,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                        lineNumber: 14,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                lineNumber: 10,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Error!\"\n        }, void 0, false, {\n            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n            lineNumber: 54,\n            columnNumber: 13\n        }, this);\n    }\n}\n_c = DepositConfirmationView;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DepositConfirmationView);\nvar _c;\n$RefreshReg$(_c, \"DepositConfirmationView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RlcG9zaXRDb25maXJtYXRpb25WaWV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBa0Q7QUFDTTtBQUNoQjtBQUNXO0FBRW5ELFNBQVNNLHVCQUF1QixDQUFDQyxLQUFLLEVBQUU7SUFDcEMsSUFBSUEsS0FBSyxDQUFDQyxXQUFXLElBQUksSUFBSSxFQUFFOztRQUMzQixxQkFDSSw4REFBQ04sb0RBQVc7c0JBQ1IsNEVBQUNGLDJEQUFjOztrQ0FDWCw4REFBQ1MsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLDhCQUE4Qjt3QkFBQ0MsT0FBTyxFQUFFO21DQUFNSixLQUFLLENBQUNLLHdCQUF3QixFQUFFO3lCQUFBO2tDQUMzRixRQUFNOzs7Ozs0QkFDRjtrQ0FDTiw4REFBQ0gsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLE1BQU07OzBDQUNqQiw4REFBQ0QsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLEVBQUU7O2tEQUNiLDhEQUFDRCxLQUFHO3dDQUFDQyxTQUFTLEVBQUMsaUNBQWlDOzswREFDNUMsOERBQUNHLElBQUU7Z0RBQUNILFNBQVMsRUFBQyx5QkFBeUI7MERBQUMscUJBQW1COzs7OztvREFBSzswREFDaEUsOERBQUNJLElBQUU7Z0RBQUNKLFNBQVMsRUFBQyxFQUFFOzBEQUFDLHdFQUFzRTs7Ozs7b0RBQUs7Ozs7Ozs0Q0FDMUY7b0NBQ0xILEtBQUssQ0FBQ0MsV0FBVyxDQUFDTyxNQUFNLEtBQUssQ0FBQyxpQkFFdkIsOERBQUNDLEdBQUM7a0RBQUMscURBQW1EOzs7Ozs0Q0FBSSxHQUcxRFQsS0FBSyxDQUFDQyxXQUFXLENBQUNTLEdBQUcsQ0FBQyxTQUFDQyxHQUFHLEVBQUVDLEtBQUs7NkRBQzdCLDhEQUFDbEIsNERBQW1COzRDQUNoQmlCLEdBQUcsRUFBRUEsR0FBRzs0Q0FFUkUsa0JBQWtCLEVBQUViLEtBQUssQ0FBQ2Esa0JBQWtCOzJDQUR2Q0YsR0FBRyxDQUFDRyxFQUFFOzs7O2lEQUViO3FDQUNMLENBQUM7Ozs7OztvQ0FHUjswQ0FDTiw4REFBQ1osS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLEVBQUU7O2tEQUNiLDhEQUFDRCxLQUFHO3dDQUFDQyxTQUFTLEVBQUMsaUNBQWlDOzswREFDNUMsOERBQUNHLElBQUU7Z0RBQUNILFNBQVMsRUFBQyx5QkFBeUI7MERBQUMsaUJBQWU7Ozs7O29EQUFLOzBEQUM1RCw4REFBQ0ksSUFBRTtnREFBQ0osU0FBUyxFQUFDLEVBQUU7MERBQUMsdUVBQXFFOzs7OztvREFBSzs7Ozs7OzRDQUN6RjtrREFDTiw4REFBQ0QsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLDhCQUE4Qjs7MERBQ3pDLDhEQUFDWSxJQUFFO2dEQUFDWixTQUFTLEVBQUMsWUFBWTswREFBQyx5QkFBdUI7Ozs7O29EQUFLOzBEQUN2RCw4REFBQ1ksSUFBRTtnREFBQ1osU0FBUyxFQUFDLFlBQVk7MERBQUVhLGFBQWEsQ0FBQ1IsTUFBTTs7Ozs7b0RBQU07MERBQ3RELDhEQUFDTyxJQUFFO2dEQUFDWixTQUFTLEVBQUMsWUFBWTswREFBQyxxQkFBbUI7Ozs7O29EQUFLOzBEQUNuRCw4REFBQ1ksSUFBRTtnREFBQ1osU0FBUyxFQUFDLFlBQVk7MERBQUMsT0FBSzs7Ozs7b0RBQUs7Ozs7Ozs0Q0FDbkM7Ozs7OztvQ0FDSjs7Ozs7OzRCQUNKOzs7Ozs7b0JBQ087Ozs7O2dCQUNQLENBQ2hCO0tBQ0wsTUFDSTtRQUNELHFCQUNJLDhEQUFDRCxLQUFHO3NCQUFDLFFBRUw7Ozs7O2dCQUFNLENBQ1I7S0FDTDtDQUlKO0FBeERRSCxLQUFBQSx1QkFBdUI7QUEwRGhDLCtEQUFlQSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0RlcG9zaXRDb25maXJtYXRpb25WaWV3LmpzPzE0N2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGVudFdyYXBwZXIgfSBmcm9tIFwiLi9Db250ZW50V3JhcHBlclwiO1xuaW1wb3J0IE5GVFJldmlld1NjcmVlbkNhcmQgZnJvbSBcIi4vTkZUUmV2aWV3U2NyZWVuQ2FyZFwiO1xuaW1wb3J0IFZpZXdXcmFwcGVyIGZyb20gXCIuL1ZpZXdXcmFwcGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBEZXBvc2l0Q29uZmlybWF0aW9uVmlldyhwcm9wcykge1xuICAgIGlmIChwcm9wcy5uZnRzVG9UcmFzaCAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Vmlld1dyYXBwZXI+XG4gICAgICAgICAgICAgICAgPENvbnRlbnRXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gaG92ZXI6Y3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5jaGFuZ2VDb25maXJtYXRpb25TY3JlZW4oKX0+XG4gICAgICAgICAgICAgICAgICAgIHtgPCBCYWNrYH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHN0aWNreSB0b3AtMCB6LTEwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBwdC0yXCI+UmV2aWV3IFlvdXIgRGVwb3NpdDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJcIj5Db25maXJtIHRoZSBORlRzIHlvdSdkIGxpa2UgdG8gdGhyb3cgYXdheS4gVGhpcyBzdGVwIGNhbm5vdCBiZSB1bmRvbmUuPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMubmZ0c1RvVHJhc2gubGVuZ3RoID09PSAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WW91IGFyZW4ndCBhZGRpbmcgTkZUcyB0byB0aGUgdHJhc2ghIEFkZCBzb21lIGhlcmUuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMubmZ0c1RvVHJhc2gubWFwKChuZnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5GVFJldmlld1NjcmVlbkNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmZ0PXtuZnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bmZ0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVORlRGcm9tVHJhc2g9e3Byb3BzLnJlbW92ZU5GVEZyb21UcmFzaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHN0aWNreSB0b3AtMCB6LTEwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBwdC0yXCI+V2hhdCB5b3UnbGwgZ2V0PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIlwiPllvdSBnZXQgJFRSQVNIIGZvciBkZXBvc2l0aW5nIHlvdXIgTkZUcy4gUmVhZCBtb3JlIGFib3V0ICRUUkFTSCBoZXJlLjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdyaWQtcm93cy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+TkZUcyB5b3UncmUgZGVwb3NpdGluZzo8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPntuZnRzX3RvX3RyYXNoLmxlbmd0aH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiPiRUUkFTSCB5b3UgcmVjZWl2ZTo8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPjUsMDAwPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NvbnRlbnRXcmFwcGVyPlxuICAgICAgICAgICAgPC9WaWV3V3JhcHBlcj5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIEVycm9yIVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXBvc2l0Q29uZmlybWF0aW9uVmlldzsiXSwibmFtZXMiOlsiQ29udGVudFdyYXBwZXIiLCJORlRSZXZpZXdTY3JlZW5DYXJkIiwiVmlld1dyYXBwZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRGVwb3NpdENvbmZpcm1hdGlvblZpZXciLCJwcm9wcyIsIm5mdHNUb1RyYXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImNoYW5nZUNvbmZpcm1hdGlvblNjcmVlbiIsImgxIiwiaDIiLCJsZW5ndGgiLCJwIiwibWFwIiwibmZ0IiwiaW5kZXgiLCJyZW1vdmVORlRGcm9tVHJhc2giLCJpZCIsImgzIiwibmZ0c190b190cmFzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DepositConfirmationView.js\n");

/***/ })

});