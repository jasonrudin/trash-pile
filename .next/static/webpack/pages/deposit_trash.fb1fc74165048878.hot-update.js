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

/***/ "./components/NFTSelectionCard.js":
/*!****************************************!*\
  !*** ./components/NFTSelectionCard.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction NFTSelectionCard(props) {\n    var handleClick = function handleClick() {\n        if (isSelected === false) {\n            props.addNFTToTrash(nft);\n        } else {\n            props.removeNFTFromTrash(nft);\n        }\n        setSelected(!isSelected);\n    };\n    _s();\n    var nft = props.nft;\n    console.log(nft);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isSelected = ref[0], setSelected = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-44 p-2 text-sm border-2 rounded-sm hover:cursor-pointer \".concat(isSelected ? \"bg-cyan-50 border-cyan-400\" : \"border-transparent\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[156px]\",\n                onClick: handleClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: nft.uri,\n                    className: \"object-cover object-center\",\n                    width: 250,\n                    height: 250\n                }, void 0, false, {\n                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTSelectionCard.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTSelectionCard.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"pt-1 hover:cursor-pointer block truncate font-bold\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        id: nft.id,\n                        name: nft.name,\n                        value: nft.id,\n                        checked: isSelected,\n                        onChange: handleClick,\n                        className: \"mr-1 hover:cursor-pointer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTSelectionCard.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    nft.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTSelectionCard.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTSelectionCard.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(NFTSelectionCard, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = NFTSelectionCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NFTSelectionCard);\nvar _c;\n$RefreshReg$(_c, \"NFTSelectionCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05GVFNlbGVjdGlvbkNhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQStCO0FBQ0U7O0FBRWpDLFNBQVNFLGdCQUFnQixDQUFDQyxLQUFLLEVBQUU7UUFLcEJDLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxHQUFHO1FBQ25CLElBQUdDLFVBQVUsS0FBSyxLQUFLLEVBQUM7WUFDcEJGLEtBQUssQ0FBQ0csYUFBYSxDQUFDQyxHQUFHLENBQUMsQ0FBQztTQUM1QixNQUNHO1lBQ0FKLEtBQUssQ0FBQ0ssa0JBQWtCLENBQUNELEdBQUcsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0RFLFdBQVcsQ0FBQyxDQUFDSixVQUFVLENBQUMsQ0FBQztLQUM1Qjs7SUFaRCxJQUFJRSxHQUFHLEdBQUdKLEtBQUssQ0FBQ0ksR0FBRztJQUNuQkcsT0FBTyxDQUFDQyxHQUFHLENBQUNKLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLElBQWtDTixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBTnJELFVBTXFCLEdBQWlCQSxHQUFlLEdBQWhDLEVBTnJCLFdBTWtDLEdBQUlBLEdBQWUsR0FBbkI7SUFZOUIscUJBQ0ksOERBQUNXLEtBQUc7UUFBQ0MsU0FBUyxFQUFFLDBFQUF5RSxDQUFtRSxPQUFqRVIsVUFBVSxHQUFHLDRCQUE0QixHQUFHLG9CQUFvQixDQUFFOzswQkFFekosOERBQUNPLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxXQUFXO2dCQUFDQyxPQUFPLEVBQzlCVixXQUFXOzBCQUVYLDRFQUFDSixtREFBSztvQkFDRmUsR0FBRyxFQUFFUixHQUFHLENBQUNTLEdBQUc7b0JBQ1pILFNBQVMsRUFBQyw0QkFBNEI7b0JBQ3RDSSxLQUFLLEVBQUUsR0FBRztvQkFDVkMsTUFBTSxFQUFFLEdBQUc7Ozs7O3dCQUNiOzs7OztvQkFDQTswQkFDTiw4REFBQ0MsT0FBSztnQkFBQ04sU0FBUyxFQUFDLG9EQUFvRDs7a0NBQ2pFLDhEQUFDTyxPQUFLO3dCQUFDQyxJQUFJLEVBQUMsVUFBVTt3QkFBQ0MsRUFBRSxFQUFFZixHQUFHLENBQUNlLEVBQUU7d0JBQUVDLElBQUksRUFBRWhCLEdBQUcsQ0FBQ2dCLElBQUk7d0JBQUVDLEtBQUssRUFBRWpCLEdBQUcsQ0FBQ2UsRUFBRTt3QkFDNURHLE9BQU8sRUFBRXBCLFVBQVU7d0JBQ25CcUIsUUFBUSxFQUNKdEIsV0FBVzt3QkFFZlMsU0FBUyxFQUFDLDJCQUEyQjs7Ozs7NEJBQVM7b0JBQUNOLEdBQUcsQ0FBQ2dCLElBQUk7Ozs7OztvQkFDdkQ7Ozs7OztZQUVOLENBQ1I7Q0FDTDtHQXZDUXJCLGdCQUFnQjtBQUFoQkEsS0FBQUEsZ0JBQWdCO0FBeUN6QiwrREFBZUEsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ORlRTZWxlY3Rpb25DYXJkLmpzPzNhNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBORlRTZWxlY3Rpb25DYXJkKHByb3BzKSB7XG4gICAgbGV0IG5mdCA9IHByb3BzLm5mdDtcbiAgICBjb25zb2xlLmxvZyhuZnQpO1xuICAgIGNvbnN0IFtpc1NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgaWYoaXNTZWxlY3RlZCA9PT0gZmFsc2Upe1xuICAgICAgICAgICAgcHJvcHMuYWRkTkZUVG9UcmFzaChuZnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBwcm9wcy5yZW1vdmVORlRGcm9tVHJhc2gobmZ0KTtcbiAgICAgICAgfVxuICAgICAgICBzZXRTZWxlY3RlZCghaXNTZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIHctNDQgcC0yIHRleHQtc20gYm9yZGVyLTIgcm91bmRlZC1zbSBob3ZlcjpjdXJzb3ItcG9pbnRlciAke2lzU2VsZWN0ZWQgPyAnYmctY3lhbi01MCBib3JkZXItY3lhbi00MDAnIDogJ2JvcmRlci10cmFuc3BhcmVudCd9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bMTU2cHhdXCIgb25DbGljaz17XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2tcbiAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz17bmZ0LnVyaX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjUwfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI1MH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwicHQtMSBob3ZlcjpjdXJzb3ItcG9pbnRlciBibG9jayB0cnVuY2F0ZSBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9e25mdC5pZH0gbmFtZT17bmZ0Lm5hbWV9IHZhbHVlPXtuZnQuaWR9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMSBob3ZlcjpjdXJzb3ItcG9pbnRlclwiPjwvaW5wdXQ+e25mdC5uYW1lfVxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBORlRTZWxlY3Rpb25DYXJkOyJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwiTkZUU2VsZWN0aW9uQ2FyZCIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJpc1NlbGVjdGVkIiwiYWRkTkZUVG9UcmFzaCIsIm5mdCIsInJlbW92ZU5GVEZyb21UcmFzaCIsInNldFNlbGVjdGVkIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzcmMiLCJ1cmkiLCJ3aWR0aCIsImhlaWdodCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJuYW1lIiwidmFsdWUiLCJjaGVja2VkIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NFTSelectionCard.js\n");

/***/ })

});