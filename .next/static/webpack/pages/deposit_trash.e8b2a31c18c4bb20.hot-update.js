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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/spl-token */ \"./node_modules/@solana/spl-token/lib/index.browser.esm.js\");\n/* harmony import */ var _ContentWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContentWrapper */ \"./components/ContentWrapper.js\");\n/* harmony import */ var _ViewWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ViewWrapper */ \"./components/ViewWrapper.js\");\n/* harmony import */ var _test_nft_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./test_nft_data */ \"./components/test_nft_data.js\");\n/* harmony import */ var _NFTCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NFTCard */ \"./components/NFTCard.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Button */ \"./components/Button.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n// import { Connection } from '@metaplex/js';\n// import { Metadata } from '@metaplex-foundation/mpl-token-metadata';\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DepositTrashContainer() {\n    var _this = this;\n    var addNFTToTrash = function addNFTToTrash(nft) {\n        var placeholder1 = nfts_to_trash;\n        setNFTs_To_Trash(function(placeholder) {\n            return placeholder.concat(nft);\n        });\n    };\n    var removeNFTFromTrash = function removeNFTFromTrash(nft) {\n        var placeholder2 = nfts_to_trash;\n        var index = placeholder2.indexOf(nft);\n        if (index > -1) {\n            setNFTs_To_Trash(function(placeholder) {\n                return placeholder.splice(index, 1);\n            });\n        }\n    };\n    _s();\n    var ref = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet)(), wallet = ref.wallet, publicKey = ref.publicKey;\n    var connection = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection)().connection;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), nfts_to_trash = ref1[0], setNFTs_To_Trash = ref1[1];\n    var balance = 0;\n    function getBalance() {\n        return _getBalance.apply(this, arguments);\n    }\n    function _getBalance() {\n        _getBalance = _asyncToGenerator(_Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!publicKey) {\n                            _ctx.next = 16;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return connection.getBalance(publicKey, \"confirmed\");\n                    case 4:\n                        balance = _ctx.sent;\n                        _ctx.next = 7;\n                        return connection.getParsedTokenAccountsByOwner(publicKey, {\n                            programId: _solana_spl_token__WEBPACK_IMPORTED_MODULE_5__.TOKEN_PROGRAM_ID\n                        });\n                    case 7:\n                        response = _ctx.sent;\n                        response.value.forEach(function(accountInfo) {\n                            console.log(\"pubkey: \".concat(accountInfo.pubkey.toBase58()));\n                            console.log(\"mint: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"mint\"]));\n                            console.log(\"owner: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"owner\"]));\n                            console.log(\"decimals: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"tokenAmount\"][\"decimals\"]));\n                            console.log(\"amount: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"tokenAmount\"][\"amount\"]));\n                            console.log(\"====================\");\n                        });\n                        balance = balance / _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__.LAMPORTS_PER_SOL;\n                        console.log(balance);\n                        _ctx.next = 16;\n                        break;\n                    case 13:\n                        _ctx.prev = 13;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(\"error getting balance: \", _ctx.t0);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    13\n                ]\n            ]);\n        }));\n        return _getBalance.apply(this, arguments);\n    }\n    // getBalance();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ViewWrapper__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"max-h-[600px] overflow-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ContentWrapper__WEBPACK_IMPORTED_MODULE_6__.ContentWrapper, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"bg-white sticky top-0 z-10 mb-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                    className: \"text-3xl font-bold pt-2\",\n                                    children: \"Your NFTs\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                    className: \"\",\n                                    children: \" Select the NFTs to add to the trash pile.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-4 gap-y-4 gap-x-2 justify-items-center\",\n                            children: _test_nft_data__WEBPACK_IMPORTED_MODULE_8__.testData.map(function(nft, index) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_NFTCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    nft: nft,\n                                    addNFTToTrash: addNFTToTrash,\n                                    removeNFTFromTrash: removeNFTFromTrash\n                                }, nft.id, false, {\n                                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 33\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                    lineNumber: 63,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center py-6 bg-gradient-to-t from-white to-transparent sticky bottom-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        buttonName: \"Review Your Selection\",\n                        clickable: nfts_to_trash.length > 0 ? true : false\n                    }, void 0, false, {\n                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                        lineNumber: 82,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                    lineNumber: 81,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n            lineNumber: 62,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, this);\n}\n_s(DepositTrashContainer, \"CO+SVPevZ9oJjRsBdl4rN3hbVfU=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection\n    ];\n});\n_c = DepositTrashContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DepositTrashContainer);\nvar _c;\n$RefreshReg$(_c, \"DepositTrashContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RlcG9zaXRUcmFzaFZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0U7QUFDWjtBQUM1RCw2Q0FBNkM7QUFDN0Msc0VBQXNFO0FBQ21CO0FBQ3BDO0FBQ0g7QUFDVjtBQUNHO0FBQ1g7QUFDRjs7QUFHOUIsU0FBU2dCLHFCQUFxQixHQUFHOztRQStCcEJDLGFBQWEsR0FBdEIsU0FBU0EsYUFBYSxDQUFDQyxHQUFHLEVBQUU7UUFDeEIsSUFBSUMsWUFBVyxHQUFHQyxhQUFhO1FBQy9CQyxnQkFBZ0IsQ0FBQ0YsU0FBQUEsV0FBVzttQkFBSUEsV0FBVyxDQUFDRyxNQUFNLENBQUNKLEdBQUcsQ0FBQztTQUFBLENBQUMsQ0FBQztLQUM1RDtRQUVRSyxrQkFBa0IsR0FBM0IsU0FBU0Esa0JBQWtCLENBQUNMLEdBQUcsRUFBRTtRQUM3QixJQUFJQyxZQUFXLEdBQUdDLGFBQWE7UUFDL0IsSUFBTUksS0FBSyxHQUFHTCxZQUFXLENBQUNNLE9BQU8sQ0FBQ1AsR0FBRyxDQUFDO1FBQ3RDLElBQUlNLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNaSCxnQkFBZ0IsQ0FBQ0YsU0FBQUEsV0FBVzt1QkFBSUEsV0FBVyxDQUFDTyxNQUFNLENBQUNGLEtBQUssRUFBRSxDQUFDLENBQUM7YUFBQSxDQUFDLENBQUM7U0FDakU7S0FDSjs7SUF6Q0QsSUFBOEJ4QixHQUFXLEdBQVhBLHVFQUFTLEVBQUUsRUFBakMyQixNQUFNLEdBQWdCM0IsR0FBVyxDQUFqQzJCLE1BQU0sRUFBRUMsU0FBUyxHQUFLNUIsR0FBVyxDQUF6QjRCLFNBQVM7SUFDekIsSUFBTSxVQUFZLEdBQUszQiwyRUFBYSxFQUFFLENBQTlCNEIsVUFBVTtJQUNsQixJQUEwQzFCLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFoQjFELGFBZ0J3QixHQUFzQkEsSUFBWSxHQUFsQyxFQWhC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REFBQ0wsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLHFGQUFxRjs4QkFDaEcsNEVBQUM5QixnREFBTTt3QkFBQ21DLFVBQVUsRUFBQyx1QkFBdUI7d0JBQUNDLFNBQVMsRUFBSSxhQUFjLENBQUNDLE1BQU0sR0FBRyxDQUFDLEdBQUksSUFBSSxHQUFHLEtBQUs7Ozs7OzRCQUFXOzs7Ozt3QkFDMUc7Ozs7OztnQkFDSjs7Ozs7WUFDSSxDQUNoQjtDQUNMO0dBekVRcEMscUJBQXFCOztRQUNJaEIsbUVBQVM7UUFDaEJDLHVFQUFhOzs7QUFGL0JlLEtBQUFBLHFCQUFxQjtBQTJFOUIsK0RBQWVBLHFCQUFxQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGVwb3NpdFRyYXNoVmlldy5qcz8wNzFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVdhbGxldCwgdXNlQ29ubmVjdGlvbiB9IGZyb20gXCJAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ0BtZXRhcGxleC9qcyc7XG4vLyBpbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gJ0BtZXRhcGxleC1mb3VuZGF0aW9uL21wbC10b2tlbi1tZXRhZGF0YSc7XG5pbXBvcnQgeyBjbHVzdGVyQXBpVXJsLCBDb25uZWN0aW9uLCBQdWJsaWNLZXksIExBTVBPUlRTX1BFUl9TT0wgfSBmcm9tIFwiQHNvbGFuYS93ZWIzLmpzXCI7XG5pbXBvcnQgeyBUT0tFTl9QUk9HUkFNX0lEIH0gZnJvbSBcIkBzb2xhbmEvc3BsLXRva2VuXCI7XG5pbXBvcnQgeyBDb250ZW50V3JhcHBlciB9IGZyb20gXCIuL0NvbnRlbnRXcmFwcGVyXCI7XG5pbXBvcnQgVmlld1dyYXBwZXIgZnJvbSBcIi4vVmlld1dyYXBwZXJcIjtcbmltcG9ydCB7IHRlc3REYXRhIH0gZnJvbSBcIi4vdGVzdF9uZnRfZGF0YVwiO1xuaW1wb3J0IE5GVENhcmQgZnJvbSBcIi4vTkZUQ2FyZFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcblxuXG5mdW5jdGlvbiBEZXBvc2l0VHJhc2hDb250YWluZXIoKSB7XG4gICAgY29uc3QgeyB3YWxsZXQsIHB1YmxpY0tleSB9ID0gdXNlV2FsbGV0KCk7XG4gICAgY29uc3QgeyBjb25uZWN0aW9uIH0gPSB1c2VDb25uZWN0aW9uKCk7XG4gICAgY29uc3QgW25mdHNfdG9fdHJhc2gsIHNldE5GVHNfVG9fVHJhc2hdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgbGV0IGJhbGFuY2UgPSAwO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0QmFsYW5jZSgpIHtcbiAgICAgICAgaWYgKHB1YmxpY0tleSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBiYWxhbmNlID0gYXdhaXQgY29ubmVjdGlvbi5nZXRCYWxhbmNlKFxuICAgICAgICAgICAgICAgICAgICBwdWJsaWNLZXksXG4gICAgICAgICAgICAgICAgICAgICdjb25maXJtZWQnXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBjb25uZWN0aW9uLmdldFBhcnNlZFRva2VuQWNjb3VudHNCeU93bmVyKHB1YmxpY0tleSwgeyBwcm9ncmFtSWQ6IFRPS0VOX1BST0dSQU1fSUQgfSk7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UudmFsdWUuZm9yRWFjaCgoYWNjb3VudEluZm8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHB1YmtleTogJHthY2NvdW50SW5mby5wdWJrZXkudG9CYXNlNTgoKX1gKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgbWludDogJHthY2NvdW50SW5mby5hY2NvdW50LmRhdGFbXCJwYXJzZWRcIl1bXCJpbmZvXCJdW1wibWludFwiXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYG93bmVyOiAke2FjY291bnRJbmZvLmFjY291bnQuZGF0YVtcInBhcnNlZFwiXVtcImluZm9cIl1bXCJvd25lclwiXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGRlY2ltYWxzOiAke2FjY291bnRJbmZvLmFjY291bnQuZGF0YVtcInBhcnNlZFwiXVtcImluZm9cIl1bXCJ0b2tlbkFtb3VudFwiXVtcImRlY2ltYWxzXCJdfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgYW1vdW50OiAke2FjY291bnRJbmZvLmFjY291bnQuZGF0YVtcInBhcnNlZFwiXVtcImluZm9cIl1bXCJ0b2tlbkFtb3VudFwiXVtcImFtb3VudFwiXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PVwiKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSBiYWxhbmNlIC8gTEFNUE9SVFNfUEVSX1NPTDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhiYWxhbmNlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3IgZ2V0dGluZyBiYWxhbmNlOiBgLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZE5GVFRvVHJhc2gobmZ0KSB7XG4gICAgICAgIGxldCBwbGFjZWhvbGRlciA9IG5mdHNfdG9fdHJhc2g7XG4gICAgICAgIHNldE5GVHNfVG9fVHJhc2gocGxhY2Vob2xkZXIgPT4gcGxhY2Vob2xkZXIuY29uY2F0KG5mdCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZU5GVEZyb21UcmFzaChuZnQpIHtcbiAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gbmZ0c190b190cmFzaDtcbiAgICAgICAgY29uc3QgaW5kZXggPSBwbGFjZWhvbGRlci5pbmRleE9mKG5mdCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBzZXRORlRzX1RvX1RyYXNoKHBsYWNlaG9sZGVyID0+IHBsYWNlaG9sZGVyLnNwbGljZShpbmRleCwgMSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZ2V0QmFsYW5jZSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFZpZXdXcmFwcGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtaC1bNjAwcHhdIG92ZXJmbG93LWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8Q29udGVudFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImJnLXdoaXRlIHN0aWNreSB0b3AtMCB6LTEwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgcHQtMlwiPllvdXIgTkZUczwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiXCI+IFNlbGVjdCB0aGUgTkZUcyB0byBhZGQgdG8gdGhlIHRyYXNoIHBpbGUuPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAteS00IGdhcC14LTIganVzdGlmeS1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXN0RGF0YS5tYXAoKG5mdCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5GVENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5mdD17bmZ0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtuZnQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRORlRUb1RyYXNoPXthZGRORlRUb1RyYXNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTkZURnJvbVRyYXNoPXtyZW1vdmVORlRGcm9tVHJhc2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Db250ZW50V3JhcHBlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcHktNiBiZy1ncmFkaWVudC10by10IGZyb20td2hpdGUgdG8tdHJhbnNwYXJlbnQgc3RpY2t5IGJvdHRvbS0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYnV0dG9uTmFtZT1cIlJldmlldyBZb3VyIFNlbGVjdGlvblwiIGNsaWNrYWJsZSA9IHsobmZ0c190b190cmFzaC5sZW5ndGggPiAwKSA/IHRydWUgOiBmYWxzZX0+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9WaWV3V3JhcHBlcj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEZXBvc2l0VHJhc2hDb250YWluZXI7Il0sIm5hbWVzIjpbInVzZVdhbGxldCIsInVzZUNvbm5lY3Rpb24iLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsImNsdXN0ZXJBcGlVcmwiLCJDb25uZWN0aW9uIiwiUHVibGljS2V5IiwiTEFNUE9SVFNfUEVSX1NPTCIsIlRPS0VOX1BST0dSQU1fSUQiLCJDb250ZW50V3JhcHBlciIsIlZpZXdXcmFwcGVyIiwidGVzdERhdGEiLCJORlRDYXJkIiwiQnV0dG9uIiwiRGVwb3NpdFRyYXNoQ29udGFpbmVyIiwiYWRkTkZUVG9UcmFzaCIsIm5mdCIsInBsYWNlaG9sZGVyIiwibmZ0c190b190cmFzaCIsInNldE5GVHNfVG9fVHJhc2giLCJjb25jYXQiLCJyZW1vdmVORlRGcm9tVHJhc2giLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJ3YWxsZXQiLCJwdWJsaWNLZXkiLCJjb25uZWN0aW9uIiwiYmFsYW5jZSIsImdldEJhbGFuY2UiLCJyZXNwb25zZSIsImdldFBhcnNlZFRva2VuQWNjb3VudHNCeU93bmVyIiwicHJvZ3JhbUlkIiwidmFsdWUiLCJmb3JFYWNoIiwiYWNjb3VudEluZm8iLCJjb25zb2xlIiwibG9nIiwicHVia2V5IiwidG9CYXNlNTgiLCJhY2NvdW50IiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDIiLCJtYXAiLCJpZCIsImJ1dHRvbk5hbWUiLCJjbGlja2FibGUiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DepositTrashView.js\n");

/***/ })

});