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

/***/ "./components/DepositTrashView.js":
/*!****************************************!*\
  !*** ./components/DepositTrashView.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/spl-token */ \"./node_modules/@solana/spl-token/lib/index.browser.esm.js\");\n/* harmony import */ var _ContentWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContentWrapper */ \"./components/ContentWrapper.js\");\n/* harmony import */ var _ViewWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ViewWrapper */ \"./components/ViewWrapper.js\");\n/* harmony import */ var _test_nft_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./test_nft_data */ \"./components/test_nft_data.js\");\n/* harmony import */ var _NFTCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NFTCard */ \"./components/NFTCard.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n// import { Connection } from '@metaplex/js';\n// import { Metadata } from '@metaplex-foundation/mpl-token-metadata';\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DepositTrashContainer() {\n    var _this = this;\n    _s();\n    var ref = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet)(), wallet = ref.wallet, publicKey = ref.publicKey;\n    var connection = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection)().connection;\n    var balance = 0;\n    function getBalance() {\n        return _getBalance.apply(this, arguments);\n    }\n    function _getBalance() {\n        _getBalance = _asyncToGenerator(_Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!publicKey) {\n                            _ctx.next = 16;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return connection.getBalance(publicKey, \"confirmed\");\n                    case 4:\n                        balance = _ctx.sent;\n                        _ctx.next = 7;\n                        return connection.getParsedTokenAccountsByOwner(publicKey, {\n                            programId: _solana_spl_token__WEBPACK_IMPORTED_MODULE_5__.TOKEN_PROGRAM_ID\n                        });\n                    case 7:\n                        response = _ctx.sent;\n                        response.value.forEach(function(accountInfo) {\n                            console.log(\"pubkey: \".concat(accountInfo.pubkey.toBase58()));\n                            console.log(\"mint: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"mint\"]));\n                            console.log(\"owner: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"owner\"]));\n                            console.log(\"decimals: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"tokenAmount\"][\"decimals\"]));\n                            console.log(\"amount: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"tokenAmount\"][\"amount\"]));\n                            console.log(\"====================\");\n                        });\n                        balance = balance / _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__.LAMPORTS_PER_SOL;\n                        console.log(balance);\n                        _ctx.next = 16;\n                        break;\n                    case 13:\n                        _ctx.prev = 13;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(\"error getting balance: \", _ctx.t0);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    13\n                ]\n            ]);\n        }));\n        return _getBalance.apply(this, arguments);\n    }\n    // getBalance();\n    console.log(_test_nft_data__WEBPACK_IMPORTED_MODULE_8__.testData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ViewWrapper__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ContentWrapper__WEBPACK_IMPORTED_MODULE_6__.ContentWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl font-bold pt-2\",\n                            children: \"Your NFTs\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                            className: \"\",\n                            children: \" Select the NFTs that you want to add to the trash pile.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap w-fit mx-auto\",\n                            children: _test_nft_data__WEBPACK_IMPORTED_MODULE_8__.testData.map(function(nft, index) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_NFTCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    nft: nft\n                                }, void 0, false, {\n                                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 33\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                            lineNumber: 52,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                    lineNumber: 60,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n            lineNumber: 48,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, this);\n}\n_s(DepositTrashContainer, \"ODp5U7iB7RlLKHrHxrUTS4V9an8=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection\n    ];\n});\n_c = DepositTrashContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DepositTrashContainer);\nvar _c;\n$RefreshReg$(_c, \"DepositTrashContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RlcG9zaXRUcmFzaFZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RTtBQUNaO0FBQzVELDZDQUE2QztBQUM3QyxzRUFBc0U7QUFDbUI7QUFDcEM7QUFDSDtBQUNWO0FBQ0c7QUFDWDs7QUFHaEMsU0FBU2UscUJBQXFCLEdBQUc7OztJQUM3QixJQUE4QmYsR0FBVyxHQUFYQSx1RUFBUyxFQUFFLEVBQWpDZ0IsTUFBTSxHQUFnQmhCLEdBQVcsQ0FBakNnQixNQUFNLEVBQUVDLFNBQVMsR0FBS2pCLEdBQVcsQ0FBekJpQixTQUFTO0lBQ3pCLElBQU0sVUFBWSxHQUFLaEIsMkVBQWEsRUFBRSxDQUE5QmlCLFVBQVU7SUFDbEIsSUFBSUMsT0FBTyxHQUFHLENBQUM7YUFFQUMsVUFBVTtlQUFWQSxXQUFVOzthQUFWQSxXQUFVO1FBQVZBLFdBQVUsR0FBekIsdUxBQTRCO2dCQU9aQyxRQUFROzs7OzRCQU5oQkosQ0FBQUEsU0FBUzs7Ozs7OytCQUVXQyxVQUFVLENBQUNFLFVBQVUsQ0FDakNILFNBQVMsRUFDVCxXQUFXLENBQ2Q7O3dCQUhERSxPQUFPLFlBR047OytCQUNvQkQsVUFBVSxDQUFDSSw2QkFBNkIsQ0FBQ0wsU0FBUyxFQUFFOzRCQUFFTSxTQUFTLEVBQUViLCtEQUFnQjt5QkFBRSxDQUFDOzt3QkFBckdXLFFBQVEsWUFBNkY7d0JBQ3pHQSxRQUFRLENBQUNHLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLFNBQUNDLFdBQVcsRUFBSzs0QkFDcENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVMsQ0FBZ0MsT0FBOUJGLFdBQVcsQ0FBQ0csTUFBTSxDQUFDQyxRQUFRLEVBQUUsQ0FBRSxDQUFDOzRCQUN2REgsT0FBTyxDQUFDQyxHQUFHLENBQUMsUUFBTyxDQUFxRCxPQUFuREYsV0FBVyxDQUFDSyxPQUFPLENBQUNDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBRSxDQUFDLENBQUM7NEJBQzNFTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFRLENBQXNELE9BQXBERixXQUFXLENBQUNLLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFFLENBQUMsQ0FBQzs0QkFDN0VMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVcsQ0FBd0UsT0FBdEVGLFdBQVcsQ0FBQ0ssT0FBTyxDQUFDQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUUsQ0FBQyxDQUFDOzRCQUNsR0wsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBUyxDQUFzRSxPQUFwRUYsV0FBVyxDQUFDSyxPQUFPLENBQUNDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBRSxDQUFDLENBQUM7NEJBQzlGTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQzt5QkFDdEMsQ0FBQyxDQUFDO3dCQUNIVCxPQUFPLEdBQUdBLE9BQU8sR0FBR1YsNkRBQWdCLENBQUM7d0JBQ3JDa0IsT0FBTyxDQUFDQyxHQUFHLENBQUNULE9BQU8sQ0FBQyxDQUFDOzs7Ozs7d0JBRXJCUSxPQUFPLENBQUNDLEdBQUcsQ0FBRSx5QkFBdUIsVUFBSyxDQUFDOzs7Ozs7Ozs7OztTQUdyRDtlQXRCY1IsV0FBVTs7SUF3QnpCLGdCQUFnQjtJQUVoQk8sT0FBTyxDQUFDQyxHQUFHLENBQUNmLG9EQUFRLENBQUMsQ0FBQztJQUV0QixxQkFDSSw4REFBQ0Qsb0RBQVc7a0JBQ1IsNEVBQUNELDJEQUFjOzs4QkFDWCw4REFBQ3NCLEtBQUc7O3NDQUNBLDhEQUFDQyxJQUFFOzRCQUFDQyxTQUFTLEVBQUcseUJBQXlCO3NDQUFDLFdBQVM7Ozs7O2dDQUFLO3NDQUN4RCw4REFBQ0MsSUFBRTs0QkFBQ0QsU0FBUyxFQUFHLEVBQUU7c0NBQUMsMERBQXdEOzs7OztnQ0FBSztzQ0FDaEYsOERBQUNGLEtBQUc7NEJBQUNFLFNBQVMsRUFBQyw4QkFBOEI7c0NBRXJDdEIsd0RBQVksQ0FBQyxTQUFDeUIsR0FBRyxFQUFFQyxLQUFLO3FEQUNwQiw4REFBQ3pCLGdEQUFPO29DQUFDd0IsR0FBRyxFQUFFQSxHQUFHOzs7Ozt5Q0FBSTs2QkFDeEIsQ0FBQzs7Ozs7Z0NBRUo7Ozs7Ozt3QkFDSjs4QkFDTiw4REFBQ0wsS0FBRzs7Ozt3QkFFRTs7Ozs7O2dCQUNPOzs7OztZQUNQLENBQ2hCO0NBQ0w7R0FyRFFsQixxQkFBcUI7O1FBQ0lmLG1FQUFTO1FBQ2hCQyx1RUFBYTs7O0FBRi9CYyxLQUFBQSxxQkFBcUI7QUF1RDlCLCtEQUFlQSxxQkFBcUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0RlcG9zaXRUcmFzaFZpZXcuanM/MDcxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VXYWxsZXQsIHVzZUNvbm5lY3Rpb24gfSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICdAbWV0YXBsZXgvanMnO1xuLy8gaW1wb3J0IHsgTWV0YWRhdGEgfSBmcm9tICdAbWV0YXBsZXgtZm91bmRhdGlvbi9tcGwtdG9rZW4tbWV0YWRhdGEnO1xuaW1wb3J0IHsgY2x1c3RlckFwaVVybCwgQ29ubmVjdGlvbiwgUHVibGljS2V5LCBMQU1QT1JUU19QRVJfU09MIH0gZnJvbSBcIkBzb2xhbmEvd2ViMy5qc1wiO1xuaW1wb3J0IHsgVE9LRU5fUFJPR1JBTV9JRCB9IGZyb20gXCJAc29sYW5hL3NwbC10b2tlblwiO1xuaW1wb3J0IHsgQ29udGVudFdyYXBwZXIgfSBmcm9tIFwiLi9Db250ZW50V3JhcHBlclwiO1xuaW1wb3J0IFZpZXdXcmFwcGVyIGZyb20gXCIuL1ZpZXdXcmFwcGVyXCI7XG5pbXBvcnQgeyB0ZXN0RGF0YSB9IGZyb20gXCIuL3Rlc3RfbmZ0X2RhdGFcIjtcbmltcG9ydCBORlRDYXJkIGZyb20gXCIuL05GVENhcmRcIjtcblxuXG5mdW5jdGlvbiBEZXBvc2l0VHJhc2hDb250YWluZXIoKSB7XG4gICAgY29uc3QgeyB3YWxsZXQsIHB1YmxpY0tleSB9ID0gdXNlV2FsbGV0KCk7XG4gICAgY29uc3QgeyBjb25uZWN0aW9uIH0gPSB1c2VDb25uZWN0aW9uKCk7XG4gICAgbGV0IGJhbGFuY2UgPSAwO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0QmFsYW5jZSgpIHtcbiAgICAgICAgaWYgKHB1YmxpY0tleSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBiYWxhbmNlID0gYXdhaXQgY29ubmVjdGlvbi5nZXRCYWxhbmNlKFxuICAgICAgICAgICAgICAgICAgICBwdWJsaWNLZXksXG4gICAgICAgICAgICAgICAgICAgICdjb25maXJtZWQnXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBjb25uZWN0aW9uLmdldFBhcnNlZFRva2VuQWNjb3VudHNCeU93bmVyKHB1YmxpY0tleSwgeyBwcm9ncmFtSWQ6IFRPS0VOX1BST0dSQU1fSUQgfSk7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UudmFsdWUuZm9yRWFjaCgoYWNjb3VudEluZm8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHB1YmtleTogJHthY2NvdW50SW5mby5wdWJrZXkudG9CYXNlNTgoKX1gKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgbWludDogJHthY2NvdW50SW5mby5hY2NvdW50LmRhdGFbXCJwYXJzZWRcIl1bXCJpbmZvXCJdW1wibWludFwiXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYG93bmVyOiAke2FjY291bnRJbmZvLmFjY291bnQuZGF0YVtcInBhcnNlZFwiXVtcImluZm9cIl1bXCJvd25lclwiXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGRlY2ltYWxzOiAke2FjY291bnRJbmZvLmFjY291bnQuZGF0YVtcInBhcnNlZFwiXVtcImluZm9cIl1bXCJ0b2tlbkFtb3VudFwiXVtcImRlY2ltYWxzXCJdfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgYW1vdW50OiAke2FjY291bnRJbmZvLmFjY291bnQuZGF0YVtcInBhcnNlZFwiXVtcImluZm9cIl1bXCJ0b2tlbkFtb3VudFwiXVtcImFtb3VudFwiXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PVwiKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSBiYWxhbmNlIC8gTEFNUE9SVFNfUEVSX1NPTDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhiYWxhbmNlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3IgZ2V0dGluZyBiYWxhbmNlOiBgLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGdldEJhbGFuY2UoKTtcblxuICAgIGNvbnNvbGUubG9nKHRlc3REYXRhKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3V3JhcHBlcj5cbiAgICAgICAgICAgIDxDb250ZW50V3JhcHBlcj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0gXCJ0ZXh0LTN4bCBmb250LWJvbGQgcHQtMlwiPllvdXIgTkZUczwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWUgPSBcIlwiPiBTZWxlY3QgdGhlIE5GVHMgdGhhdCB5b3Ugd2FudCB0byBhZGQgdG8gdGhlIHRyYXNoIHBpbGUuPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCB3LWZpdCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdERhdGEubWFwKChuZnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxORlRDYXJkIG5mdD17bmZ0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudFdyYXBwZXI+XG4gICAgICAgIDwvVmlld1dyYXBwZXI+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVwb3NpdFRyYXNoQ29udGFpbmVyOyJdLCJuYW1lcyI6WyJ1c2VXYWxsZXQiLCJ1c2VDb25uZWN0aW9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJjbHVzdGVyQXBpVXJsIiwiQ29ubmVjdGlvbiIsIlB1YmxpY0tleSIsIkxBTVBPUlRTX1BFUl9TT0wiLCJUT0tFTl9QUk9HUkFNX0lEIiwiQ29udGVudFdyYXBwZXIiLCJWaWV3V3JhcHBlciIsInRlc3REYXRhIiwiTkZUQ2FyZCIsIkRlcG9zaXRUcmFzaENvbnRhaW5lciIsIndhbGxldCIsInB1YmxpY0tleSIsImNvbm5lY3Rpb24iLCJiYWxhbmNlIiwiZ2V0QmFsYW5jZSIsInJlc3BvbnNlIiwiZ2V0UGFyc2VkVG9rZW5BY2NvdW50c0J5T3duZXIiLCJwcm9ncmFtSWQiLCJ2YWx1ZSIsImZvckVhY2giLCJhY2NvdW50SW5mbyIsImNvbnNvbGUiLCJsb2ciLCJwdWJrZXkiLCJ0b0Jhc2U1OCIsImFjY291bnQiLCJkYXRhIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJoMiIsIm1hcCIsIm5mdCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DepositTrashView.js\n");

/***/ })

});