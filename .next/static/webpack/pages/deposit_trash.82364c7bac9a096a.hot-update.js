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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction NFTCard(props) {\n    var handleClick = function handleClick() {\n        setSelected(!isSelected);\n    };\n    _s();\n    var nft = props.nft;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isSelected = ref[0], setSelected = ref[1];\n    {\n        \"flex flex-col w-40 m-2 text-sm hover:cursor-pointer &{isSelected ? 'bg-black' : ''}\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"&{isSelected}\",\n        onClick: handleClick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-40\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: nft.uri,\n                    className: \"object-cover object-center\",\n                    width: 176,\n                    height: 176\n                }, void 0, false, {\n                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTCard.js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTCard.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"truncate py-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"hover:cursor-pointer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"checkbox\",\n                            id: nft.id,\n                            name: nft.name,\n                            value: nft.id,\n                            checked: isSelected,\n                            onClick: handleClick,\n                            className: \"mr-1 hover:cursor-pointer\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTCard.js\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, this),\n                        nft.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTCard.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTCard.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTCard.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n}\n_s(NFTCard, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = NFTCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NFTCard);\nvar _c;\n$RefreshReg$(_c, \"NFTCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05GVENhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQStCO0FBQ0U7O0FBRWpDLFNBQVNFLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFO1FBSVhDLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxHQUFHO1FBQ25CQyxXQUFXLENBQUMsQ0FBQ0MsVUFBVSxDQUFDLENBQUM7S0FDNUI7O0lBTEQsSUFBSUMsR0FBRyxHQUFHSixLQUFLLENBQUNJLEdBQUc7SUFDbkIsSUFBa0NOLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFMckQsVUFLcUIsR0FBaUJBLEdBQWUsR0FBaEMsRUFMckIsV0FLa0MsR0FBSUEsR0FBZSxHQUFuQjtJQUs5QjtRQUFFLHFGQUFtRixDQUFDO0tBQUM7SUFFdkYscUJBQ0ksOERBQUNPLEtBQUc7UUFBQ0MsU0FBUyxFQUFLLGVBQWE7UUFDNUJDLE9BQU8sRUFDSE4sV0FBVzs7MEJBRWYsOERBQUNJLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxNQUFNOzBCQUNqQiw0RUFBQ1QsbURBQUs7b0JBQ0ZXLEdBQUcsRUFBRUosR0FBRyxDQUFDSyxHQUFHO29CQUNaSCxTQUFTLEVBQUMsNEJBQTRCO29CQUN0Q0ksS0FBSyxFQUFFLEdBQUc7b0JBQ1ZDLE1BQU0sRUFBRSxHQUFHOzs7Ozt3QkFDYjs7Ozs7b0JBQ0E7MEJBQ04sOERBQUNOLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxlQUFlOzBCQUMxQiw0RUFBQ00sT0FBSztvQkFBQ04sU0FBUyxFQUFDLHNCQUFzQjs7c0NBQ25DLDhEQUFDTyxPQUFLOzRCQUFDQyxJQUFJLEVBQUMsVUFBVTs0QkFBQ0MsRUFBRSxFQUFFWCxHQUFHLENBQUNXLEVBQUU7NEJBQUVDLElBQUksRUFBRVosR0FBRyxDQUFDWSxJQUFJOzRCQUFFQyxLQUFLLEVBQUViLEdBQUcsQ0FBQ1csRUFBRTs0QkFDNURHLE9BQU8sRUFBRWYsVUFBVTs0QkFDbkJJLE9BQU8sRUFDSE4sV0FBVzs0QkFFZkssU0FBUyxFQUFDLDJCQUEyQjs7Ozs7Z0NBQVM7d0JBQUNGLEdBQUcsQ0FBQ1ksSUFBSTs7Ozs7O3dCQUN2RDs7Ozs7b0JBQ047Ozs7OztZQUNKLENBQ1I7Q0FDTDtHQWxDUWpCLE9BQU87QUFBUEEsS0FBQUEsT0FBTztBQW9DaEIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05GVENhcmQuanM/NmRkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIE5GVENhcmQocHJvcHMpIHtcbiAgICBsZXQgbmZ0ID0gcHJvcHMubmZ0O1xuICAgIGNvbnN0IFtpc1NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgc2V0U2VsZWN0ZWQoIWlzU2VsZWN0ZWQpO1xuICAgIH1cbiAgICB7YGZsZXggZmxleC1jb2wgdy00MCBtLTIgdGV4dC1zbSBob3ZlcjpjdXJzb3ItcG9pbnRlciAme2lzU2VsZWN0ZWQgPyAnYmctYmxhY2snIDogJyd9YH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge2Ame2lzU2VsZWN0ZWR9YH0gXG4gICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICBoYW5kbGVDbGlja1xuICAgICAgICAgICAgfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00MFwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9e25mdC51cml9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE3Nn1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxNzZ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cnVuY2F0ZSBweS0xXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImhvdmVyOmN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD17bmZ0LmlkfSBuYW1lPXtuZnQubmFtZX0gdmFsdWU9e25mdC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbGlja1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMSBob3ZlcjpjdXJzb3ItcG9pbnRlclwiPjwvaW5wdXQ+e25mdC5uYW1lfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTkZUQ2FyZDsiXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VTdGF0ZSIsIk5GVENhcmQiLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwic2V0U2VsZWN0ZWQiLCJpc1NlbGVjdGVkIiwibmZ0IiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInNyYyIsInVyaSIsIndpZHRoIiwiaGVpZ2h0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJ2YWx1ZSIsImNoZWNrZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NFTCard.js\n");

/***/ })

});