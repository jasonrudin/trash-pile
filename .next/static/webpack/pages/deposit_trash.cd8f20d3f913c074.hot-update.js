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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction NFTCard(props) {\n    _s();\n    var nft = props.nft;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isSelected = ref[0], setSelected = ref[1];\n    var handleChange = function handleChange() {\n        setSelected(!isSelected);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-40 m-2 text-sm\",\n        onClick: handleChange(),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-40\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: nft.uri,\n                    className: \"object-cover object-center\",\n                    width: 176,\n                    height: 176\n                }, void 0, false, {\n                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTCard.js\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTCard.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"truncate py-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        id: nft.id,\n                        name: nft.name,\n                        value: nft.id,\n                        onClick: function() {\n                            return setSelected(!isSelected);\n                        },\n                        className: \"mr-1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTCard.js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        for: nft.id,\n                        className: \"\",\n                        children: nft.name\n                    }, void 0, false, {\n                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTCard.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this),\n                    isSelected.toString()\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTCard.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTCard.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_s(NFTCard, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = NFTCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NFTCard);\nvar _c;\n$RefreshReg$(_c, \"NFTCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05GVENhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQStCO0FBQ0U7O0FBRWpDLFNBQVNFLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFOztJQUNwQixJQUFJQyxHQUFHLEdBQUdELEtBQUssQ0FBQ0MsR0FBRztJQUNuQixJQUFrQ0gsR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUxyRCxVQUtxQixHQUFpQkEsR0FBZSxHQUFoQyxFQUxyQixXQUtrQyxHQUFJQSxHQUFlLEdBQW5CO0lBRTlCLElBQU1NLFlBQVksR0FBRyxTQUFmQSxZQUFZLEdBQWE7UUFDM0JELFdBQVcsQ0FBQyxDQUFDRCxVQUFVLENBQUMsQ0FBQztLQUM1QjtJQUVELHFCQUNJLDhEQUFDRyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxnQ0FBZ0M7UUFDM0NDLE9BQU8sRUFDSEgsWUFBWSxFQUFFOzswQkFFbEIsOERBQUNDLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxNQUFNOzBCQUNqQiw0RUFBQ1QsbURBQUs7b0JBQ0ZXLEdBQUcsRUFBRVAsR0FBRyxDQUFDUSxHQUFHO29CQUNaSCxTQUFTLEVBQUMsNEJBQTRCO29CQUN0Q0ksS0FBSyxFQUFFLEdBQUc7b0JBQ1ZDLE1BQU0sRUFBRSxHQUFHOzs7Ozt3QkFDYjs7Ozs7b0JBQ0E7MEJBQ04sOERBQUNOLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxlQUFlOztrQ0FDMUIsOERBQUNNLE9BQUs7d0JBQUNDLElBQUksRUFBQyxVQUFVO3dCQUFDQyxFQUFFLEVBQUViLEdBQUcsQ0FBQ2EsRUFBRTt3QkFBRUMsSUFBSSxFQUFFZCxHQUFHLENBQUNjLElBQUk7d0JBQUVDLEtBQUssRUFBRWYsR0FBRyxDQUFDYSxFQUFFO3dCQUM1RFAsT0FBTyxFQUNIO21DQUFNSixXQUFXLENBQUMsQ0FBQ0QsVUFBVSxDQUFDO3lCQUFBO3dCQUVsQ0ksU0FBUyxFQUFDLE1BQU07Ozs7OzRCQUFTO2tDQUM3Qiw4REFBQ1csT0FBSzt3QkFBQ0MsR0FBRyxFQUFFakIsR0FBRyxDQUFDYSxFQUFFO3dCQUFFUixTQUFTLEVBQUMsRUFBRTtrQ0FBRUwsR0FBRyxDQUFDYyxJQUFJOzs7Ozs0QkFBUztvQkFDbERiLFVBQVUsQ0FBQ2lCLFFBQVEsRUFBRTs7Ozs7O29CQUNwQjs7Ozs7O1lBQ0osQ0FDUjtDQUNMO0dBaENRcEIsT0FBTztBQUFQQSxLQUFBQSxPQUFPO0FBa0NoQiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTkZUQ2FyZC5qcz82ZGQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gTkZUQ2FyZChwcm9wcykge1xuICAgIGxldCBuZnQgPSBwcm9wcy5uZnQ7XG4gICAgY29uc3QgW2lzU2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIHNldFNlbGVjdGVkKCFpc1NlbGVjdGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy00MCBtLTIgdGV4dC1zbVwiXG4gICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2UoKVxuICAgICAgICAgICAgfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC00MFwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9e25mdC51cml9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE3Nn1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxNzZ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cnVuY2F0ZSBweS0xXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPXtuZnQuaWR9IG5hbWU9e25mdC5uYW1lfSB2YWx1ZT17bmZ0LmlkfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHNldFNlbGVjdGVkKCFpc1NlbGVjdGVkKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTFcIj48L2lucHV0PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9e25mdC5pZH0gY2xhc3NOYW1lPVwiXCI+e25mdC5uYW1lfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAge2lzU2VsZWN0ZWQudG9TdHJpbmcoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBORlRDYXJkOyJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwiTkZUQ2FyZCIsInByb3BzIiwibmZ0IiwiaXNTZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiaGFuZGxlQ2hhbmdlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsInNyYyIsInVyaSIsIndpZHRoIiwiaGVpZ2h0IiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJuYW1lIiwidmFsdWUiLCJsYWJlbCIsImZvciIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NFTCard.js\n");

/***/ })

});