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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/spl-token */ \"./node_modules/@solana/spl-token/lib/index.browser.esm.js\");\n/* harmony import */ var _ContentWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContentWrapper */ \"./components/ContentWrapper.js\");\n/* harmony import */ var _ViewWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ViewWrapper */ \"./components/ViewWrapper.js\");\n/* harmony import */ var _test_nft_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./test_nft_data */ \"./components/test_nft_data.js\");\n/* harmony import */ var _NFTCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NFTCard */ \"./components/NFTCard.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Button */ \"./components/Button.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n// import { Connection } from '@metaplex/js';\n// import { Metadata } from '@metaplex-foundation/mpl-token-metadata';\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DepositTrashContainer() {\n    var _this = this;\n    var addNFTToTrash = function addNFTToTrash(nft) {\n        setNFTs_To_Trash(nfts_to_trash.push(nft));\n    //return nfts_to_trash;\n    };\n    var removeNFTFromTrash = function removeNFTFromTrash(nft) {\n        var index = nfts_to_trash.indexOf(nft);\n        if (index > -1) {\n            nfts_to_trash.splice(index, 1);\n        }\n    //return nfts_to_trash;\n    };\n    _s();\n    var ref = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet)(), wallet = ref.wallet, publicKey = ref.publicKey;\n    var connection = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection)().connection;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), nfts_to_trash = ref1[0], setNFTs_To_Trash = ref1[1];\n    var balance = 0;\n    function getBalance() {\n        return _getBalance.apply(this, arguments);\n    }\n    function _getBalance() {\n        _getBalance = _asyncToGenerator(_Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!publicKey) {\n                            _ctx.next = 16;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return connection.getBalance(publicKey, \"confirmed\");\n                    case 4:\n                        balance = _ctx.sent;\n                        _ctx.next = 7;\n                        return connection.getParsedTokenAccountsByOwner(publicKey, {\n                            programId: _solana_spl_token__WEBPACK_IMPORTED_MODULE_5__.TOKEN_PROGRAM_ID\n                        });\n                    case 7:\n                        response = _ctx.sent;\n                        response.value.forEach(function(accountInfo) {\n                            console.log(\"pubkey: \".concat(accountInfo.pubkey.toBase58()));\n                            console.log(\"mint: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"mint\"]));\n                            console.log(\"owner: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"owner\"]));\n                            console.log(\"decimals: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"tokenAmount\"][\"decimals\"]));\n                            console.log(\"amount: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"tokenAmount\"][\"amount\"]));\n                            console.log(\"====================\");\n                        });\n                        balance = balance / _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__.LAMPORTS_PER_SOL;\n                        console.log(balance);\n                        _ctx.next = 16;\n                        break;\n                    case 13:\n                        _ctx.prev = 13;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(\"error getting balance: \", _ctx.t0);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    13\n                ]\n            ]);\n        }));\n        return _getBalance.apply(this, arguments);\n    }\n    // getBalance();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ViewWrapper__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"max-h-[600px] overflow-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ContentWrapper__WEBPACK_IMPORTED_MODULE_6__.ContentWrapper, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"bg-white sticky top-0 z-10 mb-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                    className: \"text-3xl font-bold pt-2\",\n                                    children: \"Your NFTs\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                    className: \"\",\n                                    children: \" Select the NFTs to add to the trash pile.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-4 gap-y-4 gap-x-2 justify-items-center\",\n                            children: _test_nft_data__WEBPACK_IMPORTED_MODULE_8__.testData.map(function(nft, index) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_NFTCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    nft: nft,\n                                    addNFTToTrash: addNFTToTrash,\n                                    removeNFTFromTrash: removeNFTFromTrash\n                                }, nft.id, false, {\n                                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 33\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                    lineNumber: 63,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center py-6 bg-gradient-to-t from-white to-transparent sticky bottom-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        buttonName: \"Review Your Selection\",\n                        clickable: nfts_to_trash.length > 0 ? nfts_to_trash.length : nfts_to_trash.length\n                    }, void 0, false, {\n                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                        lineNumber: 82,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                    lineNumber: 81,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n            lineNumber: 62,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, this);\n}\n_s(DepositTrashContainer, \"CO+SVPevZ9oJjRsBdl4rN3hbVfU=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection\n    ];\n});\n_c = DepositTrashContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DepositTrashContainer);\nvar _c;\n$RefreshReg$(_c, \"DepositTrashContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLGFBQWMsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsR0FBSS9CLGFBQWEsQ0FBQytCLE1BQU0sR0FBRy9CLGFBQWEsQ0FBQytCLE1BQU07Ozs7OzRCQUFXOzs7Ozt3QkFDekk7Ozs7OztnQkFDSjs7Ozs7WUFDSSxDQUNoQjtDQUNMO0dBekVRbkMscUJBQXFCOztRQUNJaEIsbUVBQVM7UUFDaEJDLHVFQUFhOzs7QUFGL0JlLEtBQUFBLHFCQUFxQjtBQTJFOUIsK0RBQWVBLHFCQUFxQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGVwb3NpdFRyYXNoVmlldy5qcz8wNzFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVdhbGxldCwgdXNlQ29ubmVjdGlvbiB9IGZyb20gXCJAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ0BtZXRhcGxleC9qcyc7XG4vLyBpbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gJ0BtZXRhcGxleC1mb3VuZGF0aW9uL21wbC10b2tlbi1tZXRhZGF0YSc7XG5pbXBvcnQgeyBjbHVzdGVyQXBpVXJsLCBDb25uZWN0aW9uLCBQdWJsaWNLZXksIExBTVBPUlRTX1BFUl9TT0wgfSBmcm9tIFwiQHNvbGFuYS93ZWIzLmpzXCI7XG5pbXBvcnQgeyBUT0tFTl9QUk9HUkFNX0lEIH0gZnJvbSBcIkBzb2xhbmEvc3BsLXRva2VuXCI7XG5pbXBvcnQgeyBDb250ZW50V3JhcHBlciB9IGZyb20gXCIuL0NvbnRlbnRXcmFwcGVyXCI7XG5pbXBvcnQgVmlld1dyYXBwZXIgZnJvbSBcIi4vVmlld1dyYXBwZXJcIjtcbmltcG9ydCB7IHRlc3REYXRhIH0gZnJvbSBcIi4vdGVzdF9uZnRfZGF0YVwiO1xuaW1wb3J0IE5GVENhcmQgZnJvbSBcIi4vTkZUQ2FyZFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcblxuXG5mdW5jdGlvbiBEZXBvc2l0VHJhc2hDb250YWluZXIoKSB7XG4gICAgY29uc3QgeyB3YWxsZXQsIHB1YmxpY0tleSB9ID0gdXNlV2FsbGV0KCk7XG4gICAgY29uc3QgeyBjb25uZWN0aW9uIH0gPSB1c2VDb25uZWN0aW9uKCk7XG4gICAgY29uc3QgW25mdHNfdG9fdHJhc2gsIHNldE5GVHNfVG9fVHJhc2hdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgbGV0IGJhbGFuY2UgPSAwO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0QmFsYW5jZSgpIHtcbiAgICAgICAgaWYgKHB1YmxpY0tleSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBiYWxhbmNlID0gYXdhaXQgY29ubmVjdGlvbi5nZXRCYWxhbmNlKFxuICAgICAgICAgICAgICAgICAgICBwdWJsaWNLZXksXG4gICAgICAgICAgICAgICAgICAgICdjb25maXJtZWQnXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBjb25uZWN0aW9uLmdldFBhcnNlZFRva2VuQWNjb3VudHNCeU93bmVyKHB1YmxpY0tleSwgeyBwcm9ncmFtSWQ6IFRPS0VOX1BST0dSQU1fSUQgfSk7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UudmFsdWUuZm9yRWFjaCgoYWNjb3VudEluZm8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHB1YmtleTogJHthY2NvdW50SW5mby5wdWJrZXkudG9CYXNlNTgoKX1gKVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgbWludDogJHthY2NvdW50SW5mby5hY2NvdW50LmRhdGFbXCJwYXJzZWRcIl1bXCJpbmZvXCJdW1wibWludFwiXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYG93bmVyOiAke2FjY291bnRJbmZvLmFjY291bnQuZGF0YVtcInBhcnNlZFwiXVtcImluZm9cIl1bXCJvd25lclwiXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGRlY2ltYWxzOiAke2FjY291bnRJbmZvLmFjY291bnQuZGF0YVtcInBhcnNlZFwiXVtcImluZm9cIl1bXCJ0b2tlbkFtb3VudFwiXVtcImRlY2ltYWxzXCJdfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgYW1vdW50OiAke2FjY291bnRJbmZvLmFjY291bnQuZGF0YVtcInBhcnNlZFwiXVtcImluZm9cIl1bXCJ0b2tlbkFtb3VudFwiXVtcImFtb3VudFwiXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PVwiKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSBiYWxhbmNlIC8gTEFNUE9SVFNfUEVSX1NPTDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhiYWxhbmNlKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZXJyb3IgZ2V0dGluZyBiYWxhbmNlOiBgLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZE5GVFRvVHJhc2gobmZ0KSB7XG4gICAgICAgIHNldE5GVHNfVG9fVHJhc2gobmZ0c190b190cmFzaC5wdXNoKG5mdCkpO1xuICAgICAgICAvL3JldHVybiBuZnRzX3RvX3RyYXNoO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZU5GVEZyb21UcmFzaChuZnQpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBuZnRzX3RvX3RyYXNoLmluZGV4T2YobmZ0KTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIG5mdHNfdG9fdHJhc2guc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICAvL3JldHVybiBuZnRzX3RvX3RyYXNoO1xuICAgIH1cblxuICAgIC8vIGdldEJhbGFuY2UoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3V3JhcHBlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LWgtWzYwMHB4XSBvdmVyZmxvdy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPENvbnRlbnRXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJiZy13aGl0ZSBzdGlja3kgdG9wLTAgei0xMCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHB0LTJcIj5Zb3VyIE5GVHM8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIlwiPiBTZWxlY3QgdGhlIE5GVHMgdG8gYWRkIHRvIHRoZSB0cmFzaCBwaWxlLjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgZ2FwLXktNCBnYXAteC0yIGp1c3RpZnktaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdERhdGEubWFwKChuZnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxORlRDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZnQ9e25mdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bmZ0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkTkZUVG9UcmFzaD17YWRkTkZUVG9UcmFzaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZU5GVEZyb21UcmFzaD17cmVtb3ZlTkZURnJvbVRyYXNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ29udGVudFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB5LTYgYmctZ3JhZGllbnQtdG8tdCBmcm9tLXdoaXRlIHRvLXRyYW5zcGFyZW50IHN0aWNreSBib3R0b20tMFwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJ1dHRvbk5hbWU9XCJSZXZpZXcgWW91ciBTZWxlY3Rpb25cIiBjbGlja2FibGUgPSB7KG5mdHNfdG9fdHJhc2gubGVuZ3RoID4gMCkgPyBuZnRzX3RvX3RyYXNoLmxlbmd0aCA6IG5mdHNfdG9fdHJhc2gubGVuZ3RofT48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1ZpZXdXcmFwcGVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlcG9zaXRUcmFzaENvbnRhaW5lcjsiXSwibmFtZXMiOlsidXNlV2FsbGV0IiwidXNlQ29ubmVjdGlvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwiY2x1c3RlckFwaVVybCIsIkNvbm5lY3Rpb24iLCJQdWJsaWNLZXkiLCJMQU1QT1JUU19QRVJfU09MIiwiVE9LRU5fUFJPR1JBTV9JRCIsIkNvbnRlbnRXcmFwcGVyIiwiVmlld1dyYXBwZXIiLCJ0ZXN0RGF0YSIsIk5GVENhcmQiLCJCdXR0b24iLCJEZXBvc2l0VHJhc2hDb250YWluZXIiLCJhZGRORlRUb1RyYXNoIiwibmZ0Iiwic2V0TkZUc19Ub19UcmFzaCIsIm5mdHNfdG9fdHJhc2giLCJwdXNoIiwicmVtb3ZlTkZURnJvbVRyYXNoIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwid2FsbGV0IiwicHVibGljS2V5IiwiY29ubmVjdGlvbiIsImJhbGFuY2UiLCJnZXRCYWxhbmNlIiwicmVzcG9uc2UiLCJnZXRQYXJzZWRUb2tlbkFjY291bnRzQnlPd25lciIsInByb2dyYW1JZCIsInZhbHVlIiwiZm9yRWFjaCIsImFjY291bnRJbmZvIiwiY29uc29sZSIsImxvZyIsInB1YmtleSIsInRvQmFzZTU4IiwiYWNjb3VudCIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwibWFwIiwiaWQiLCJidXR0b25OYW1lIiwiY2xpY2thYmxlIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DepositTrashView.js\n");

/***/ })

});