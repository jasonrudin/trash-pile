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

/***/ "./components/NFTCard.js":
/*!*******************************!*\
  !*** ./components/NFTCard.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction NFTCard(props) {\n    var handleClick = function handleClick() {\n        setSelected(!isSelected);\n    };\n    _s();\n    var nft = props.nft;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isSelected = ref[0], setSelected = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-40 m-2 text-sm p-2 hover:cursor-pointer \".concat(isSelected ? \"bg-sky-100 border-2 border-sky-600 rounded-sm\" : \"\"),\n        onClick: handleClick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-40\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: nft.uri,\n                    className: \"object-cover object-center\",\n                    width: 176,\n                    height: 176\n                }, void 0, false, {\n                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTCard.js\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTCard.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"truncate py-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"hover:cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"checkbox\",\n                            id: nft.id,\n                            name: nft.name,\n                            value: nft.id,\n                            checked: isSelected,\n                            onClick: handleClick,\n                            className: \"mr-1 hover:cursor-pointer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTCard.js\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, this),\n                        nft.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTCard.js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTCard.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTCard.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_s(NFTCard, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = NFTCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NFTCard);\nvar _c;\n$RefreshReg$(_c, \"NFTCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05GVENhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQStCO0FBQ0U7O0FBRWpDLFNBQVNFLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFO1FBSVhDLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxHQUFHO1FBQ25CQyxXQUFXLENBQUMsQ0FBQ0MsVUFBVSxDQUFDLENBQUM7S0FDNUI7O0lBTEQsSUFBSUMsR0FBRyxHQUFHSixLQUFLLENBQUNJLEdBQUc7SUFDbkIsSUFBa0NOLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFMckQsVUFLcUIsR0FBaUJBLEdBQWUsR0FBaEMsRUFMckIsV0FLa0MsR0FBSUEsR0FBZSxHQUFuQjtJQU05QixxQkFDSSw4REFBQ08sS0FBRztRQUFDQyxTQUFTLEVBQUksMERBQXlELENBQW9FLE9BQWxFSCxVQUFVLEdBQUcsK0NBQStDLEdBQUcsRUFBRSxDQUFFO1FBQzVJSSxPQUFPLEVBQ0hOLFdBQVc7OzBCQUVmLDhEQUFDSSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsTUFBTTswQkFDakIsNEVBQUNULG1EQUFLO29CQUNGVyxHQUFHLEVBQUVKLEdBQUcsQ0FBQ0ssR0FBRztvQkFDWkgsU0FBUyxFQUFDLDRCQUE0QjtvQkFDdENJLEtBQUssRUFBRSxHQUFHO29CQUNWQyxNQUFNLEVBQUUsR0FBRzs7Ozs7d0JBQ2I7Ozs7O29CQUNBOzBCQUNOLDhEQUFDTixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsZUFBZTswQkFDMUIsNEVBQUNNLE9BQUs7b0JBQUNOLFNBQVMsRUFBQyxzQkFBc0I7O3NDQUNuQyw4REFBQ08sT0FBSzs0QkFBQ0MsSUFBSSxFQUFDLFVBQVU7NEJBQUNDLEVBQUUsRUFBRVgsR0FBRyxDQUFDVyxFQUFFOzRCQUFFQyxJQUFJLEVBQUVaLEdBQUcsQ0FBQ1ksSUFBSTs0QkFBRUMsS0FBSyxFQUFFYixHQUFHLENBQUNXLEVBQUU7NEJBQzVERyxPQUFPLEVBQUVmLFVBQVU7NEJBQ25CSSxPQUFPLEVBQ0hOLFdBQVc7NEJBRWZLLFNBQVMsRUFBQywyQkFBMkI7Ozs7O2dDQUFTO3dCQUFDRixHQUFHLENBQUNZLElBQUk7Ozs7Ozt3QkFDdkQ7Ozs7O29CQUNOOzs7Ozs7WUFDSixDQUNSO0NBQ0w7R0FqQ1FqQixPQUFPO0FBQVBBLEtBQUFBLE9BQU87QUFtQ2hCLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ORlRDYXJkLmpzPzZkZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBORlRDYXJkKHByb3BzKSB7XG4gICAgbGV0IG5mdCA9IHByb3BzLm5mdDtcbiAgICBjb25zdCBbaXNTZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgICAgIHNldFNlbGVjdGVkKCFpc1NlbGVjdGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtgZmxleCBmbGV4LWNvbCB3LTQwIG0tMiB0ZXh0LXNtIHAtMiBob3ZlcjpjdXJzb3ItcG9pbnRlciAke2lzU2VsZWN0ZWQgPyAnYmctc2t5LTEwMCBib3JkZXItMiBib3JkZXItc2t5LTYwMCByb3VuZGVkLXNtJyA6ICcnfWB9IFxuICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2tcbiAgICAgICAgICAgIH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNDBcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtuZnQudXJpfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNzZ9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTc2fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJ1bmNhdGUgcHktMVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJob3ZlcjpjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9e25mdC5pZH0gbmFtZT17bmZ0Lm5hbWV9IHZhbHVlPXtuZnQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtpc1NlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTEgaG92ZXI6Y3Vyc29yLXBvaW50ZXJcIj48L2lucHV0PntuZnQubmFtZX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5GVENhcmQ7Il0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJORlRDYXJkIiwicHJvcHMiLCJoYW5kbGVDbGljayIsInNldFNlbGVjdGVkIiwiaXNTZWxlY3RlZCIsIm5mdCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzcmMiLCJ1cmkiLCJ3aWR0aCIsImhlaWdodCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJuYW1lIiwidmFsdWUiLCJjaGVja2VkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NFTCard.js\n");

/***/ })

});