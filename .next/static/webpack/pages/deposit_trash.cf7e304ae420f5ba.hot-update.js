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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nfunction NFTSelectionCard(props) {\n    var handleClick = function handleClick() {\n        if (isSelected === false) {\n            props.addNFTToTrash(nft);\n        } else {\n            props.removeNFTFromTrash(nft);\n        }\n        setSelected(!isSelected);\n    };\n    _s();\n    var nft = props.nft;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isSelected = ref[0], setSelected = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-44 p-2 text-sm border-2 rounded-sm hover:cursor-pointer \".concat(isSelected ? \"bg-cyan-50 border-cyan-400\" : \"border-transparent\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[156px]\",\n                onClick: handleClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: nft.image,\n                    className: \"object-cover object-center\"\n                }, void 0, false, {\n                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTSelectionCard.js\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTSelectionCard.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"pt-1 hover:cursor-pointer block truncate font-bold\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        id: nft.id,\n                        name: nft.name,\n                        value: nft.id,\n                        checked: isSelected,\n                        onChange: handleClick,\n                        className: \"mr-1 hover:cursor-pointer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTSelectionCard.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this),\n                    nft.name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTSelectionCard.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/NFTSelectionCard.js\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n_s(NFTSelectionCard, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = NFTSelectionCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NFTSelectionCard);\nvar _c;\n$RefreshReg$(_c, \"NFTSelectionCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05GVFNlbGVjdGlvbkNhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQStCO0FBQ0U7O0FBRWpDLFNBQVNFLGdCQUFnQixDQUFDQyxLQUFLLEVBQUU7UUFJcEJDLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxHQUFHO1FBQ25CLElBQUdDLFVBQVUsS0FBSyxLQUFLLEVBQUM7WUFDcEJGLEtBQUssQ0FBQ0csYUFBYSxDQUFDQyxHQUFHLENBQUMsQ0FBQztTQUM1QixNQUNHO1lBQ0FKLEtBQUssQ0FBQ0ssa0JBQWtCLENBQUNELEdBQUcsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0RFLFdBQVcsQ0FBQyxDQUFDSixVQUFVLENBQUMsQ0FBQztLQUM1Qjs7SUFYRCxJQUFJRSxHQUFHLEdBQUdKLEtBQUssQ0FBQ0ksR0FBRztJQUNuQixJQUFrQ04sR0FBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUxyRCxVQUtxQixHQUFpQkEsR0FBZSxHQUFoQyxFQUxyQixXQUtrQyxHQUFJQSxHQUFlLEdBQW5CO0lBWTlCLHFCQUNJLDhEQUFDUyxLQUFHO1FBQUNDLFNBQVMsRUFBRSwwRUFBeUUsQ0FBbUUsT0FBakVOLFVBQVUsR0FBRyw0QkFBNEIsR0FBRyxvQkFBb0IsQ0FBRTs7MEJBRXpKLDhEQUFDSyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsV0FBVztnQkFBQ0MsT0FBTyxFQUM5QlIsV0FBVzswQkFFZiw0RUFBQ1MsS0FBRztvQkFDQUMsR0FBRyxFQUFJUCxHQUFHLENBQUNRLEtBQUs7b0JBQ2hCSixTQUFTLEVBQUMsNEJBQTRCOzs7Ozt3QkFDeEM7Ozs7O29CQU9JOzBCQUNOLDhEQUFDSyxPQUFLO2dCQUFDTCxTQUFTLEVBQUMsb0RBQW9EOztrQ0FDakUsOERBQUNNLE9BQUs7d0JBQUNDLElBQUksRUFBQyxVQUFVO3dCQUFDQyxFQUFFLEVBQUVaLEdBQUcsQ0FBQ1ksRUFBRTt3QkFBRUMsSUFBSSxFQUFFYixHQUFHLENBQUNhLElBQUk7d0JBQUVDLEtBQUssRUFBRWQsR0FBRyxDQUFDWSxFQUFFO3dCQUM1REcsT0FBTyxFQUFFakIsVUFBVTt3QkFDbkJrQixRQUFRLEVBQ0puQixXQUFXO3dCQUVmTyxTQUFTLEVBQUMsMkJBQTJCOzs7Ozs0QkFBUztvQkFBQ0osR0FBRyxDQUFDYSxJQUFJOzs7Ozs7b0JBQ3ZEOzs7Ozs7WUFFTixDQUNSO0NBQ0w7R0ExQ1FsQixnQkFBZ0I7QUFBaEJBLEtBQUFBLGdCQUFnQjtBQTRDekIsK0RBQWVBLGdCQUFnQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTkZUU2VsZWN0aW9uQ2FyZC5qcz8zYTVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gTkZUU2VsZWN0aW9uQ2FyZChwcm9wcykge1xuICAgIGxldCBuZnQgPSBwcm9wcy5uZnQ7XG4gICAgY29uc3QgW2lzU2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgICAgICBpZihpc1NlbGVjdGVkID09PSBmYWxzZSl7XG4gICAgICAgICAgICBwcm9wcy5hZGRORlRUb1RyYXNoKG5mdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHByb3BzLnJlbW92ZU5GVEZyb21UcmFzaChuZnQpO1xuICAgICAgICB9XG4gICAgICAgIHNldFNlbGVjdGVkKCFpc1NlbGVjdGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgdy00NCBwLTIgdGV4dC1zbSBib3JkZXItMiByb3VuZGVkLXNtIGhvdmVyOmN1cnNvci1wb2ludGVyICR7aXNTZWxlY3RlZCA/ICdiZy1jeWFuLTUwIGJvcmRlci1jeWFuLTQwMCcgOiAnYm9yZGVyLXRyYW5zcGFyZW50J31gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVsxNTZweF1cIiBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICBoYW5kbGVDbGlja1xuICAgICAgICAgICAgfT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmMgPSB7bmZ0LmltYWdlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgey8qIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9e25mdC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjUwfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI1MH1cbiAgICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInB0LTEgaG92ZXI6Y3Vyc29yLXBvaW50ZXIgYmxvY2sgdHJ1bmNhdGUgZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPXtuZnQuaWR9IG5hbWU9e25mdC5uYW1lfSB2YWx1ZT17bmZ0LmlkfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtpc1NlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbGlja1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTEgaG92ZXI6Y3Vyc29yLXBvaW50ZXJcIj48L2lucHV0PntuZnQubmFtZX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTkZUU2VsZWN0aW9uQ2FyZDsiXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VTdGF0ZSIsIk5GVFNlbGVjdGlvbkNhcmQiLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiaXNTZWxlY3RlZCIsImFkZE5GVFRvVHJhc2giLCJuZnQiLCJyZW1vdmVORlRGcm9tVHJhc2giLCJzZXRTZWxlY3RlZCIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJpbWFnZSIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJuYW1lIiwidmFsdWUiLCJjaGVja2VkIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NFTSelectionCard.js\n");

/***/ })

});