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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ContentWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentWrapper */ \"./components/ContentWrapper.js\");\n/* harmony import */ var _NFTReviewScreenCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NFTReviewScreenCard */ \"./components/NFTReviewScreenCard.js\");\n/* harmony import */ var _ViewWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ViewWrapper */ \"./components/ViewWrapper.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Button */ \"./components/Button.js\");\n\n\n\n\n\n\nfunction DepositConfirmationView(props) {\n    if (props.nftsToTrash != null) {\n        var _this = this;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ViewWrapper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContentWrapper__WEBPACK_IMPORTED_MODULE_1__.ContentWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-sm hover:cursor-pointer\",\n                        onClick: function() {\n                            return props.changeConfirmationScreen();\n                        },\n                        children: \"< Back\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                        lineNumber: 12,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-white sticky top-0 z-10 mb-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: \"text-3xl font-bold pt-2\",\n                                                children: \"Review Your Deposit\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                                lineNumber: 18,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"\",\n                                                children: \"Confirm the NFTs you'd like to throw away. This step cannot be undone.\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                                lineNumber: 19,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                        lineNumber: 17,\n                                        columnNumber: 29\n                                    }, this),\n                                    props.nftsToTrash.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"You aren't adding NFTs to the trash! Add some here.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                        lineNumber: 23,\n                                        columnNumber: 37\n                                    }, this) : props.nftsToTrash.map(function(nft, index) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NFTReviewScreenCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            nft: nft,\n                                            removeNFTFromTrash: props.removeNFTFromTrash\n                                        }, nft.id, false, {\n                                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                            lineNumber: 27,\n                                            columnNumber: 41\n                                        }, _this);\n                                    })\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                lineNumber: 16,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-white sticky top-0 z-10 mb-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: \"text-3xl font-bold pt-2\",\n                                                children: \"What you'll get\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                                lineNumber: 38,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"\",\n                                                children: \"You get $TRASH for depositing your NFTs. Read more about $TRASH here.\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                                lineNumber: 39,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid grid-cols-3 grid-rows-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"col-span-2\",\n                                                children: \"NFTs you're depositing:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-right\",\n                                                children: props.nftsToTrash.length\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                                lineNumber: 43,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"col-span-2\",\n                                                children: \"$TRASH you receive:\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 33\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-right\",\n                                                children: \"5,000\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 33\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                                lineNumber: 36,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                        lineNumber: 15,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n                lineNumber: 11,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Error!\"\n        }, void 0, false, {\n            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositConfirmationView.js\",\n            lineNumber: 56,\n            columnNumber: 13\n        }, this);\n    }\n}\n_c = DepositConfirmationView;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DepositConfirmationView);\nvar _c;\n$RefreshReg$(_c, \"DepositConfirmationView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RlcG9zaXRDb25maXJtYXRpb25WaWV3LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQWtEO0FBQ007QUFDaEI7QUFDVztBQUNyQjtBQUU5QixTQUFTTyx1QkFBdUIsQ0FBQ0MsS0FBSyxFQUFFO0lBQ3BDLElBQUlBLEtBQUssQ0FBQ0MsV0FBVyxJQUFJLElBQUksRUFBRTs7UUFDM0IscUJBQ0ksOERBQUNQLG9EQUFXO3NCQUNSLDRFQUFDRiwyREFBYzs7a0NBQ1gsOERBQUNVLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyw4QkFBOEI7d0JBQUNDLE9BQU8sRUFBRTttQ0FBTUosS0FBSyxDQUFDSyx3QkFBd0IsRUFBRTt5QkFBQTtrQ0FDM0YsUUFBTTs7Ozs7NEJBQ0Y7a0NBQ04sOERBQUNILEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxNQUFNOzswQ0FDakIsOERBQUNELEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxFQUFFOztrREFDYiw4REFBQ0QsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLGlDQUFpQzs7MERBQzVDLDhEQUFDRyxJQUFFO2dEQUFDSCxTQUFTLEVBQUMseUJBQXlCOzBEQUFDLHFCQUFtQjs7Ozs7b0RBQUs7MERBQ2hFLDhEQUFDSSxJQUFFO2dEQUFDSixTQUFTLEVBQUMsRUFBRTswREFBQyx3RUFBc0U7Ozs7O29EQUFLOzs7Ozs7NENBQzFGO29DQUNMSCxLQUFLLENBQUNDLFdBQVcsQ0FBQ08sTUFBTSxLQUFLLENBQUMsaUJBRXZCLDhEQUFDQyxHQUFDO2tEQUFDLHFEQUFtRDs7Ozs7NENBQUksR0FHMURULEtBQUssQ0FBQ0MsV0FBVyxDQUFDUyxHQUFHLENBQUMsU0FBQ0MsR0FBRyxFQUFFQyxLQUFLOzZEQUM3Qiw4REFBQ25CLDREQUFtQjs0Q0FDaEJrQixHQUFHLEVBQUVBLEdBQUc7NENBRVJFLGtCQUFrQixFQUFFYixLQUFLLENBQUNhLGtCQUFrQjsyQ0FEdkNGLEdBQUcsQ0FBQ0csRUFBRTs7OztpREFFYjtxQ0FDTCxDQUFDOzs7Ozs7b0NBR1I7MENBQ04sOERBQUNaLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxFQUFFOztrREFDYiw4REFBQ0QsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLGlDQUFpQzs7MERBQzVDLDhEQUFDRyxJQUFFO2dEQUFDSCxTQUFTLEVBQUMseUJBQXlCOzBEQUFDLGlCQUFlOzs7OztvREFBSzswREFDNUQsOERBQUNJLElBQUU7Z0RBQUNKLFNBQVMsRUFBQyxFQUFFOzBEQUFDLHVFQUFxRTs7Ozs7b0RBQUs7Ozs7Ozs0Q0FDekY7a0RBQ04sOERBQUNELEtBQUc7d0NBQUNDLFNBQVMsRUFBQyw4QkFBOEI7OzBEQUN6Qyw4REFBQ1ksSUFBRTtnREFBQ1osU0FBUyxFQUFDLFlBQVk7MERBQUMseUJBQXVCOzs7OztvREFBSzswREFDdkQsOERBQUNZLElBQUU7Z0RBQUNaLFNBQVMsRUFBQyxZQUFZOzBEQUFFSCxLQUFLLENBQUNDLFdBQVcsQ0FBQ08sTUFBTTs7Ozs7b0RBQU07MERBQzFELDhEQUFDTyxJQUFFO2dEQUFDWixTQUFTLEVBQUMsWUFBWTswREFBQyxxQkFBbUI7Ozs7O29EQUFLOzBEQUNuRCw4REFBQ1ksSUFBRTtnREFBQ1osU0FBUyxFQUFDLFlBQVk7MERBQUMsT0FBSzs7Ozs7b0RBQUs7Ozs7Ozs0Q0FDbkM7a0RBQ04sOERBQUNMLCtDQUFNOzs7OzRDQUFVOzs7Ozs7b0NBQ2Y7Ozs7Ozs0QkFDSjs7Ozs7O29CQUNPOzs7OztnQkFDUCxDQUNoQjtLQUNMLE1BQ0k7UUFDRCxxQkFDSSw4REFBQ0ksS0FBRztzQkFBQyxRQUVMOzs7OztnQkFBTSxDQUNSO0tBQ0w7Q0FJSjtBQXpEUUgsS0FBQUEsdUJBQXVCO0FBMkRoQywrREFBZUEsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXBvc2l0Q29uZmlybWF0aW9uVmlldy5qcz8xNDdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRlbnRXcmFwcGVyIH0gZnJvbSBcIi4vQ29udGVudFdyYXBwZXJcIjtcbmltcG9ydCBORlRSZXZpZXdTY3JlZW5DYXJkIGZyb20gXCIuL05GVFJldmlld1NjcmVlbkNhcmRcIjtcbmltcG9ydCBWaWV3V3JhcHBlciBmcm9tIFwiLi9WaWV3V3JhcHBlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5cbmZ1bmN0aW9uIERlcG9zaXRDb25maXJtYXRpb25WaWV3KHByb3BzKSB7XG4gICAgaWYgKHByb3BzLm5mdHNUb1RyYXNoICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxWaWV3V3JhcHBlcj5cbiAgICAgICAgICAgICAgICA8Q29udGVudFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBob3ZlcjpjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHByb3BzLmNoYW5nZUNvbmZpcm1hdGlvblNjcmVlbigpfT5cbiAgICAgICAgICAgICAgICAgICAge2A8IEJhY2tgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc3RpY2t5IHRvcC0wIHotMTAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHB0LTJcIj5SZXZpZXcgWW91ciBEZXBvc2l0PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIlwiPkNvbmZpcm0gdGhlIE5GVHMgeW91J2QgbGlrZSB0byB0aHJvdyBhd2F5LiBUaGlzIHN0ZXAgY2Fubm90IGJlIHVuZG9uZS48L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5uZnRzVG9UcmFzaC5sZW5ndGggPT09IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Zb3UgYXJlbid0IGFkZGluZyBORlRzIHRvIHRoZSB0cmFzaCEgQWRkIHNvbWUgaGVyZS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5uZnRzVG9UcmFzaC5tYXAoKG5mdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TkZUUmV2aWV3U2NyZWVuQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZnQ9e25mdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtuZnQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZU5GVEZyb21UcmFzaD17cHJvcHMucmVtb3ZlTkZURnJvbVRyYXNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc3RpY2t5IHRvcC0wIHotMTAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHB0LTJcIj5XaGF0IHlvdSdsbCBnZXQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiXCI+WW91IGdldCAkVFJBU0ggZm9yIGRlcG9zaXRpbmcgeW91ciBORlRzLiBSZWFkIG1vcmUgYWJvdXQgJFRSQVNIIGhlcmUuPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ3JpZC1yb3dzLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIj5ORlRzIHlvdSdyZSBkZXBvc2l0aW5nOjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+e3Byb3BzLm5mdHNUb1RyYXNoLmxlbmd0aH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiPiRUUkFTSCB5b3UgcmVjZWl2ZTo8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPjUsMDAwPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ29udGVudFdyYXBwZXI+XG4gICAgICAgICAgICA8L1ZpZXdXcmFwcGVyPlxuICAgICAgICApO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgRXJyb3IhXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERlcG9zaXRDb25maXJtYXRpb25WaWV3OyJdLCJuYW1lcyI6WyJDb250ZW50V3JhcHBlciIsIk5GVFJldmlld1NjcmVlbkNhcmQiLCJWaWV3V3JhcHBlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJEZXBvc2l0Q29uZmlybWF0aW9uVmlldyIsInByb3BzIiwibmZ0c1RvVHJhc2giLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiY2hhbmdlQ29uZmlybWF0aW9uU2NyZWVuIiwiaDEiLCJoMiIsImxlbmd0aCIsInAiLCJtYXAiLCJuZnQiLCJpbmRleCIsInJlbW92ZU5GVEZyb21UcmFzaCIsImlkIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DepositConfirmationView.js\n");

/***/ })

});