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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/spl-token */ \"./node_modules/@solana/spl-token/lib/index.browser.esm.js\");\n/* harmony import */ var _ContentWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContentWrapper */ \"./components/ContentWrapper.js\");\n/* harmony import */ var _ViewWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ViewWrapper */ \"./components/ViewWrapper.js\");\n/* harmony import */ var _test_nft_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./test_nft_data */ \"./components/test_nft_data.js\");\n/* harmony import */ var _NFTSelectionCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NFTSelectionCard */ \"./components/NFTSelectionCard.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Button */ \"./components/Button.js\");\n/* harmony import */ var _DepositConfirmationView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DepositConfirmationView */ \"./components/DepositConfirmationView.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n// import { Connection } from '@metaplex/js';\n// import { Metadata } from '@metaplex-foundation/mpl-token-metadata';\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DepositTrashContainer() {\n    var addNFTToTrash = function addNFTToTrash(nft) {\n        if (nfts_to_trash.includes(nft)) {\n            return;\n        } else {\n            var placeholder = nfts_to_trash.concat(nft);\n            setNFTs_To_Trash(placeholder);\n        }\n    };\n    var removeNFTFromTrash = function removeNFTFromTrash(nft) {\n        var placeholder = nfts_to_trash.filter(function(element) {\n            return element != nft;\n        });\n        setNFTs_To_Trash(placeholder);\n    };\n    var changeConfirmationScreen = function changeConfirmationScreen() {\n        setIsConfirming(!isConfirming);\n    };\n    _s();\n    var ref = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet)(), wallet = ref.wallet, publicKey = ref.publicKey;\n    var connection = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection)().connection;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), nfts_to_trash = ref1[0], setNFTs_To_Trash = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isConfirming = ref2[0], setIsConfirming = ref2[1];\n    var realNFTs = [];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (publicKey) {\n            realNFTs = getNFTsInWallet(publicKey.toBase58());\n        }\n    });\n    if (!isConfirming) {\n        var _this = this;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ViewWrapper__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"max-h-[600px] overflow-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ContentWrapper__WEBPACK_IMPORTED_MODULE_6__.ContentWrapper, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"bg-white sticky top-0 z-10 mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                        className: \"text-3xl font-bold pt-2\",\n                                        children: \"Your NFTs\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        className: \"\",\n                                        children: \" Select the NFTs to add to the trash pile.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 29\n                                    }, this),\n                                    realNFTs\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-4 gap-y-4 gap-x-2 justify-items-center\",\n                                children: _test_nft_data__WEBPACK_IMPORTED_MODULE_8__.testData.map(function(nft, index) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_NFTSelectionCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        nft: nft,\n                                        addNFTToTrash: addNFTToTrash,\n                                        removeNFTFromTrash: removeNFTFromTrash\n                                    }, nft.id, false, {\n                                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 37\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                lineNumber: 58,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                        lineNumber: 52,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center py-6 bg-gradient-to-t from-white to-transparent sticky bottom-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            buttonName: \"Review Your Selection\",\n                            clickable: nfts_to_trash.length > 0 ? true : false,\n                            onClick: function() {\n                                return setIsConfirming(true);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                            lineNumber: 72,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                        lineNumber: 71,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                lineNumber: 51,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n            lineNumber: 50,\n            columnNumber: 13\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_DepositConfirmationView__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n            nftsToTrash: nfts_to_trash,\n            changeConfirmationScreen: changeConfirmationScreen,\n            removeNFTFromTrash: removeNFTFromTrash\n        }, void 0, false, {\n            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n            lineNumber: 85,\n            columnNumber: 13\n        }, this);\n    }\n}\n_s(DepositTrashContainer, \"l9TX/WEqoC09LhtdVvspAu6Nezg=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection\n    ];\n});\n_c = DepositTrashContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DepositTrashContainer);\nfunction getNFTsInWallet(publicKey) {\n    return _getNFTsInWallet.apply(this, arguments);\n}\nfunction _getNFTsInWallet() {\n    _getNFTsInWallet = _asyncToGenerator(_Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(publicKey) {\n        var requestOptions, response, data, dataJSON;\n        return _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    requestOptions = {\n                        method: \"GET\",\n                        redirect: \"follow\"\n                    };\n                    _ctx.next = 3;\n                    return fetch(\"https://api-mainnet.magiceden.dev/v2/wallets/\".concat(publicKey, \"/tokens\"), requestOptions);\n                case 3:\n                    response = _ctx.sent;\n                    _ctx.next = 6;\n                    return response.text();\n                case 6:\n                    data = _ctx.sent;\n                    dataJSON = JSON.parse(data);\n                    return _ctx.abrupt(\"return\", dataJSON);\n                case 9:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    } // async function getBalance() {\n     //     if (publicKey) {\n     //         try {\n     //             balance = await connection.getBalance(\n     //                 publicKey,\n     //                 'confirmed'\n     //             );\n     //             let response = await connection.getParsedTokenAccountsByOwner(publicKey, { programId: TOKEN_PROGRAM_ID });\n     //             response.value.forEach((accountInfo) => {\n     //                 console.log(`pubkey: ${accountInfo.pubkey.toBase58()}`)\n     //                 console.log(`mint: ${accountInfo.account.data[\"parsed\"][\"info\"][\"mint\"]}`);\n     //                 console.log(`owner: ${accountInfo.account.data[\"parsed\"][\"info\"][\"owner\"]}`);\n     //                 console.log(`decimals: ${accountInfo.account.data[\"parsed\"][\"info\"][\"tokenAmount\"][\"decimals\"]}`);\n     //                 console.log(`amount: ${accountInfo.account.data[\"parsed\"][\"info\"][\"tokenAmount\"][\"amount\"]}`);\n     //                 console.log(\"====================\")\n     //             });\n     //             balance = balance / LAMPORTS_PER_SOL;\n     //             console.log(balance);\n     //         } catch (e) {\n     //             console.log(`error getting balance: `, e);\n     //         }\n     //     }\n     // }\n    ));\n    return _getNFTsInWallet.apply(this, arguments);\n}\nvar _c;\n$RefreshReg$(_c, \"DepositTrashContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVE7Ozs7OztLQUNwQixDQUdELGdDQUFnQztLQUNoQyx1QkFBdUI7S0FDdkIsZ0JBQWdCO0tBQ2hCLHFEQUFxRDtLQUNyRCw2QkFBNkI7S0FDN0IsOEJBQThCO0tBQzlCLGlCQUFpQjtLQUNqQix5SEFBeUg7S0FDekgsd0RBQXdEO0tBQ3hELDBFQUEwRTtLQUMxRSw4RkFBOEY7S0FDOUYsZ0dBQWdHO0tBQ2hHLHFIQUFxSDtLQUNySCxpSEFBaUg7S0FDakgsc0RBQXNEO0tBQ3RELGtCQUFrQjtLQUNsQixvREFBb0Q7S0FDcEQsb0NBQW9DO0tBQ3BDLHdCQUF3QjtLQUN4Qix5REFBeUQ7S0FDekQsWUFBWTtLQUNaLFFBQVE7S0FDUixJQUFJO01BekJIO1dBVmNqQixnQkFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0RlcG9zaXRUcmFzaFZpZXcuanM/MDcxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VXYWxsZXQsIHVzZUNvbm5lY3Rpb24gfSBmcm9tIFwiQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICdAbWV0YXBsZXgvanMnO1xuLy8gaW1wb3J0IHsgTWV0YWRhdGEgfSBmcm9tICdAbWV0YXBsZXgtZm91bmRhdGlvbi9tcGwtdG9rZW4tbWV0YWRhdGEnO1xuaW1wb3J0IHsgY2x1c3RlckFwaVVybCwgQ29ubmVjdGlvbiwgUHVibGljS2V5LCBMQU1QT1JUU19QRVJfU09MIH0gZnJvbSBcIkBzb2xhbmEvd2ViMy5qc1wiO1xuaW1wb3J0IHsgVE9LRU5fUFJPR1JBTV9JRCB9IGZyb20gXCJAc29sYW5hL3NwbC10b2tlblwiO1xuaW1wb3J0IHsgQ29udGVudFdyYXBwZXIgfSBmcm9tIFwiLi9Db250ZW50V3JhcHBlclwiO1xuaW1wb3J0IFZpZXdXcmFwcGVyIGZyb20gXCIuL1ZpZXdXcmFwcGVyXCI7XG5pbXBvcnQgeyB0ZXN0RGF0YSB9IGZyb20gXCIuL3Rlc3RfbmZ0X2RhdGFcIjtcbmltcG9ydCBORlRTZWxlY3Rpb25DYXJkIGZyb20gXCIuL05GVFNlbGVjdGlvbkNhcmRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgRGVwb3NpdENvbmZpcm1hdGlvblZpZXcgZnJvbSBcIi4vRGVwb3NpdENvbmZpcm1hdGlvblZpZXdcIjtcblxuXG5mdW5jdGlvbiBEZXBvc2l0VHJhc2hDb250YWluZXIoKSB7XG4gICAgY29uc3QgeyB3YWxsZXQsIHB1YmxpY0tleSB9ID0gdXNlV2FsbGV0KCk7XG4gICAgY29uc3QgeyBjb25uZWN0aW9uIH0gPSB1c2VDb25uZWN0aW9uKCk7XG4gICAgY29uc3QgW25mdHNfdG9fdHJhc2gsIHNldE5GVHNfVG9fVHJhc2hdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtpc0NvbmZpcm1pbmcsIHNldElzQ29uZmlybWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBsZXQgcmVhbE5GVHMgPSBbXTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKHB1YmxpY0tleSl7XG4gICAgICAgICAgICByZWFsTkZUcyA9IGdldE5GVHNJbldhbGxldChwdWJsaWNLZXkudG9CYXNlNTgoKSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGFkZE5GVFRvVHJhc2gobmZ0KSB7XG4gICAgICAgIGlmKG5mdHNfdG9fdHJhc2guaW5jbHVkZXMobmZ0KSl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gbmZ0c190b190cmFzaC5jb25jYXQobmZ0KTtcbiAgICAgICAgICAgIHNldE5GVHNfVG9fVHJhc2gocGxhY2Vob2xkZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlTkZURnJvbVRyYXNoKG5mdCkge1xuICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSBuZnRzX3RvX3RyYXNoLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudCAhPSBuZnQpO1xuICAgICAgICBzZXRORlRzX1RvX1RyYXNoKHBsYWNlaG9sZGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VDb25maXJtYXRpb25TY3JlZW4oKXtcbiAgICAgICAgc2V0SXNDb25maXJtaW5nKCFpc0NvbmZpcm1pbmcpO1xuICAgIH1cblxuICAgIGlmICghaXNDb25maXJtaW5nKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Vmlld1dyYXBwZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtaC1bNjAwcHhdIG92ZXJmbG93LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzdGlja3kgdG9wLTAgei0xMCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBwdC0yXCI+WW91ciBORlRzPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiXCI+IFNlbGVjdCB0aGUgTkZUcyB0byBhZGQgdG8gdGhlIHRyYXNoIHBpbGUuPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVhbE5GVHN9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAteS00IGdhcC14LTIganVzdGlmeS1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3REYXRhLm1hcCgobmZ0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5GVFNlbGVjdGlvbkNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZnQ9e25mdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e25mdC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRORlRUb1RyYXNoPXthZGRORlRUb1RyYXNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZU5GVEZyb21UcmFzaD17cmVtb3ZlTkZURnJvbVRyYXNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50V3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB5LTYgYmctZ3JhZGllbnQtdG8tdCBmcm9tLXdoaXRlIHRvLXRyYW5zcGFyZW50IHN0aWNreSBib3R0b20tMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbk5hbWU9XCJSZXZpZXcgWW91ciBTZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZT17KG5mdHNfdG9fdHJhc2gubGVuZ3RoID4gMCkgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNDb25maXJtaW5nKHRydWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1ZpZXdXcmFwcGVyPlxuXG4gICAgICAgICk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8RGVwb3NpdENvbmZpcm1hdGlvblZpZXcgbmZ0c1RvVHJhc2g9e25mdHNfdG9fdHJhc2h9IGNoYW5nZUNvbmZpcm1hdGlvblNjcmVlbiA9IHtjaGFuZ2VDb25maXJtYXRpb25TY3JlZW59IHJlbW92ZU5GVEZyb21UcmFzaCA9IHtyZW1vdmVORlRGcm9tVHJhc2h9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXBvc2l0VHJhc2hDb250YWluZXI7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldE5GVHNJbldhbGxldChwdWJsaWNLZXkpe1xuICAgIHZhciByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnXG4gICAgICB9O1xuICAgIFxuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLW1haW5uZXQubWFnaWNlZGVuLmRldi92Mi93YWxsZXRzLyR7cHVibGljS2V5fS90b2tlbnNgLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgIGxldCBkYXRhSlNPTiA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICByZXR1cm4gZGF0YUpTT047XG59XG5cblxuLy8gYXN5bmMgZnVuY3Rpb24gZ2V0QmFsYW5jZSgpIHtcbi8vICAgICBpZiAocHVibGljS2V5KSB7XG4vLyAgICAgICAgIHRyeSB7XG4vLyAgICAgICAgICAgICBiYWxhbmNlID0gYXdhaXQgY29ubmVjdGlvbi5nZXRCYWxhbmNlKFxuLy8gICAgICAgICAgICAgICAgIHB1YmxpY0tleSxcbi8vICAgICAgICAgICAgICAgICAnY29uZmlybWVkJ1xuLy8gICAgICAgICAgICAgKTtcbi8vICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGNvbm5lY3Rpb24uZ2V0UGFyc2VkVG9rZW5BY2NvdW50c0J5T3duZXIocHVibGljS2V5LCB7IHByb2dyYW1JZDogVE9LRU5fUFJPR1JBTV9JRCB9KTtcbi8vICAgICAgICAgICAgIHJlc3BvbnNlLnZhbHVlLmZvckVhY2goKGFjY291bnRJbmZvKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHB1YmtleTogJHthY2NvdW50SW5mby5wdWJrZXkudG9CYXNlNTgoKX1gKVxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBtaW50OiAke2FjY291bnRJbmZvLmFjY291bnQuZGF0YVtcInBhcnNlZFwiXVtcImluZm9cIl1bXCJtaW50XCJdfWApO1xuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBvd25lcjogJHthY2NvdW50SW5mby5hY2NvdW50LmRhdGFbXCJwYXJzZWRcIl1bXCJpbmZvXCJdW1wib3duZXJcIl19YCk7XG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGRlY2ltYWxzOiAke2FjY291bnRJbmZvLmFjY291bnQuZGF0YVtcInBhcnNlZFwiXVtcImluZm9cIl1bXCJ0b2tlbkFtb3VudFwiXVtcImRlY2ltYWxzXCJdfWApO1xuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBhbW91bnQ6ICR7YWNjb3VudEluZm8uYWNjb3VudC5kYXRhW1wicGFyc2VkXCJdW1wiaW5mb1wiXVtcInRva2VuQW1vdW50XCJdW1wiYW1vdW50XCJdfWApO1xuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT1cIilcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgYmFsYW5jZSA9IGJhbGFuY2UgLyBMQU1QT1JUU19QRVJfU09MO1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coYmFsYW5jZSk7XG4vLyAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBlcnJvciBnZXR0aW5nIGJhbGFuY2U6IGAsIGUpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfSJdLCJuYW1lcyI6WyJ1c2VXYWxsZXQiLCJ1c2VDb25uZWN0aW9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJjbHVzdGVyQXBpVXJsIiwiQ29ubmVjdGlvbiIsIlB1YmxpY0tleSIsIkxBTVBPUlRTX1BFUl9TT0wiLCJUT0tFTl9QUk9HUkFNX0lEIiwiQ29udGVudFdyYXBwZXIiLCJWaWV3V3JhcHBlciIsInRlc3REYXRhIiwiTkZUU2VsZWN0aW9uQ2FyZCIsIkJ1dHRvbiIsIkRlcG9zaXRDb25maXJtYXRpb25WaWV3IiwiRGVwb3NpdFRyYXNoQ29udGFpbmVyIiwiYWRkTkZUVG9UcmFzaCIsIm5mdCIsIm5mdHNfdG9fdHJhc2giLCJpbmNsdWRlcyIsInBsYWNlaG9sZGVyIiwiY29uY2F0Iiwic2V0TkZUc19Ub19UcmFzaCIsInJlbW92ZU5GVEZyb21UcmFzaCIsImZpbHRlciIsImVsZW1lbnQiLCJjaGFuZ2VDb25maXJtYXRpb25TY3JlZW4iLCJzZXRJc0NvbmZpcm1pbmciLCJpc0NvbmZpcm1pbmciLCJ3YWxsZXQiLCJwdWJsaWNLZXkiLCJjb25uZWN0aW9uIiwicmVhbE5GVHMiLCJnZXRORlRzSW5XYWxsZXQiLCJ0b0Jhc2U1OCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDIiLCJtYXAiLCJpbmRleCIsImlkIiwiYnV0dG9uTmFtZSIsImNsaWNrYWJsZSIsImxlbmd0aCIsIm9uQ2xpY2siLCJuZnRzVG9UcmFzaCIsInJlcXVlc3RPcHRpb25zIiwicmVzcG9uc2UiLCJkYXRhIiwiZGF0YUpTT04iLCJtZXRob2QiLCJyZWRpcmVjdCIsImZldGNoIiwidGV4dCIsIkpTT04iLCJwYXJzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DepositTrashView.js\n");

/***/ })

});