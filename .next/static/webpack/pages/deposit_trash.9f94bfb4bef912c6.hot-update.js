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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/spl-token */ \"./node_modules/@solana/spl-token/lib/index.browser.esm.js\");\n/* harmony import */ var _ContentWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContentWrapper */ \"./components/ContentWrapper.js\");\n/* harmony import */ var _ViewWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ViewWrapper */ \"./components/ViewWrapper.js\");\n/* harmony import */ var _test_nft_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./test_nft_data */ \"./components/test_nft_data.js\");\n/* harmony import */ var _NFTCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NFTCard */ \"./components/NFTCard.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Button */ \"./components/Button.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n// import { Connection } from '@metaplex/js';\n// import { Metadata } from '@metaplex-foundation/mpl-token-metadata';\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DepositTrashContainer() {\n    var _this = this;\n    var addNFTToTrash = function addNFTToTrash(nft) {\n        var placeholder = nfts_to_trash;\n        setNFTs_To_Trash(placeholder.push(nft));\n        console.log(nfts_to_trash);\n    //return nfts_to_trash;\n    };\n    var removeNFTFromTrash = function removeNFTFromTrash(nft) {\n        var index = nfts_to_trash.indexOf(nft);\n        if (index > -1) {\n            setNFTs_To_Trash(nfts_to_trash.splice(index, 1));\n        }\n    //return nfts_to_trash;\n    };\n    _s();\n    var ref = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet)(), wallet = ref.wallet, publicKey = ref.publicKey;\n    var connection = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection)().connection;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), nfts_to_trash = ref1[0], setNFTs_To_Trash = ref1[1];\n    var balance = 0;\n    function getBalance() {\n        return _getBalance.apply(this, arguments);\n    }\n    function _getBalance() {\n        _getBalance = _asyncToGenerator(_Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!publicKey) {\n                            _ctx.next = 16;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return connection.getBalance(publicKey, \"confirmed\");\n                    case 4:\n                        balance = _ctx.sent;\n                        _ctx.next = 7;\n                        return connection.getParsedTokenAccountsByOwner(publicKey, {\n                            programId: _solana_spl_token__WEBPACK_IMPORTED_MODULE_5__.TOKEN_PROGRAM_ID\n                        });\n                    case 7:\n                        response = _ctx.sent;\n                        response.value.forEach(function(accountInfo) {\n                            console.log(\"pubkey: \".concat(accountInfo.pubkey.toBase58()));\n                            console.log(\"mint: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"mint\"]));\n                            console.log(\"owner: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"owner\"]));\n                            console.log(\"decimals: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"tokenAmount\"][\"decimals\"]));\n                            console.log(\"amount: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"tokenAmount\"][\"amount\"]));\n                            console.log(\"====================\");\n                        });\n                        balance = balance / _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__.LAMPORTS_PER_SOL;\n                        console.log(balance);\n                        _ctx.next = 16;\n                        break;\n                    case 13:\n                        _ctx.prev = 13;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(\"error getting balance: \", _ctx.t0);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    13\n                ]\n            ]);\n        }));\n        return _getBalance.apply(this, arguments);\n    }\n    // getBalance();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ViewWrapper__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"max-h-[600px] overflow-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ContentWrapper__WEBPACK_IMPORTED_MODULE_6__.ContentWrapper, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"bg-white sticky top-0 z-10 mb-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                    className: \"text-3xl font-bold pt-2\",\n                                    children: \"Your NFTs\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                    className: \"\",\n                                    children: \" Select the NFTs to add to the trash pile.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-4 gap-y-4 gap-x-2 justify-items-center\",\n                            children: _test_nft_data__WEBPACK_IMPORTED_MODULE_8__.testData.map(function(nft, index) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_NFTCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    nft: nft,\n                                    addNFTToTrash: addNFTToTrash,\n                                    removeNFTFromTrash: removeNFTFromTrash\n                                }, nft.id, false, {\n                                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 33\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center py-6 bg-gradient-to-t from-white to-transparent sticky bottom-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        buttonName: \"Review Your Selection\",\n                        clickable: nfts_to_trash.length > 0 ? nfts_to_trash.length : nfts_to_trash.length\n                    }, void 0, false, {\n                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                        lineNumber: 84,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                    lineNumber: 83,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n            lineNumber: 64,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, this);\n}\n_s(DepositTrashContainer, \"CO+SVPevZ9oJjRsBdl4rN3hbVfU=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection\n    ];\n});\n_c = DepositTrashContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DepositTrashContainer);\nvar _c;\n$RefreshReg$(_c, \"DepositTrashContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RlcG9zaXRUcmFzaFZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0U7QUFDWjtBQUM1RCw2Q0FBNkM7QUFDN0Msc0VBQXNFO0FBQ21CO0FBQ3BDO0FBQ0g7QUFDVjtBQUNHO0FBQ1g7QUFDRjs7QUFHOUIsU0FBU2dCLHFCQUFxQixHQUFHOztRQStCcEJDLGFBQWEsR0FBdEIsU0FBU0EsYUFBYSxDQUFDQyxHQUFHLEVBQUU7UUFDeEIsSUFBSUMsV0FBVyxHQUFHQyxhQUFhO1FBQy9CQyxnQkFBZ0IsQ0FBQ0YsV0FBVyxDQUFDRyxJQUFJLENBQUNKLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeENLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixhQUFhLENBQUMsQ0FBQztJQUMzQix1QkFBdUI7S0FDMUI7UUFFUUssa0JBQWtCLEdBQTNCLFNBQVNBLGtCQUFrQixDQUFDUCxHQUFHLEVBQUU7UUFDN0IsSUFBTVEsS0FBSyxHQUFHTixhQUFhLENBQUNPLE9BQU8sQ0FBQ1QsR0FBRyxDQUFDO1FBQ3hDLElBQUlRLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNaTCxnQkFBZ0IsQ0FBQ0QsYUFBYSxDQUFDUSxNQUFNLENBQUNGLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0QsdUJBQXVCO0tBQzFCOztJQTNDRCxJQUE4QjFCLEdBQVcsR0FBWEEsdUVBQVMsRUFBRSxFQUFqQzZCLE1BQU0sR0FBZ0I3QixHQUFXLENBQWpDNkIsTUFBTSxFQUFFQyxTQUFTLEdBQUs5QixHQUFXLENBQXpCOEIsU0FBUztJQUN6QixJQUFNLFVBQVksR0FBSzdCLDJFQUFhLEVBQUUsQ0FBOUI4QixVQUFVO0lBQ2xCLElBQTBDNUIsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQWhCMUQsYUFnQndCLEdBQXNCQSxJQUFZLEdBQWxDLEVBaEJ4QixnQkFnQjBDLEdBQUlBLElBQVksR0FBaEI7SUFFdEMsSUFBSTZCLE9BQU8sR0FBRyxDQUFDO2FBRUFDLFVBQVU7ZUFBVkEsV0FBVTs7YUFBVkEsV0FBVTtRQUFWQSxXQUFVLEdBQXpCLHVMQUE0QjtnQkFPWkMsUUFBUTs7Ozs0QkFOaEJKLENBQUFBLFNBQVM7Ozs7OzsrQkFFV0MsVUFBVSxDQUFDRSxVQUFVLENBQ2pDSCxTQUFTLEVBQ1QsV0FBVyxDQUNkOzt3QkFIREUsT0FBTyxZQUdOOzsrQkFDb0JELFVBQVUsQ0FBQ0ksNkJBQTZCLENBQUNMLFNBQVMsRUFBRTs0QkFBRU0sU0FBUyxFQUFFMUIsK0RBQWdCO3lCQUFFLENBQUM7O3dCQUFyR3dCLFFBQVEsWUFBNkY7d0JBQ3pHQSxRQUFRLENBQUNHLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLFNBQUNDLFdBQVcsRUFBSzs0QkFDcENoQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFTLENBQWdDLE9BQTlCZSxXQUFXLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFLENBQUUsQ0FBQzs0QkFDdkRsQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFPLENBQXFELE9BQW5EZSxXQUFXLENBQUNHLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFFLENBQUMsQ0FBQzs0QkFDM0VwQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFRLENBQXNELE9BQXBEZSxXQUFXLENBQUNHLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFFLENBQUMsQ0FBQzs0QkFDN0VwQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFXLENBQXdFLE9BQXRFZSxXQUFXLENBQUNHLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFFLENBQUMsQ0FBQzs0QkFDbEdwQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxVQUFTLENBQXNFLE9BQXBFZSxXQUFXLENBQUNHLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFFLENBQUMsQ0FBQzs0QkFDOUZwQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQzt5QkFDdEMsQ0FBQyxDQUFDO3dCQUNIUSxPQUFPLEdBQUdBLE9BQU8sR0FBR3ZCLDZEQUFnQixDQUFDO3dCQUNyQ2MsT0FBTyxDQUFDQyxHQUFHLENBQUNRLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7d0JBRXJCVCxPQUFPLENBQUNDLEdBQUcsQ0FBRSx5QkFBdUIsVUFBSyxDQUFDOzs7Ozs7Ozs7OztTQUdyRDtlQXRCY1MsV0FBVTs7SUF1Q3pCLGdCQUFnQjtJQUVoQixxQkFDSSw4REFBQ3JCLG9EQUFXO2tCQUNSLDRFQUFDZ0MsS0FBRztZQUFDQyxTQUFTLEVBQUMsNkJBQTZCOzs4QkFDeEMsOERBQUNsQywyREFBYzs7c0NBQ1gsOERBQUNpQyxLQUFHOzRCQUFDQyxTQUFTLEVBQUUsaUNBQWlDOzs4Q0FDN0MsOERBQUNDLElBQUU7b0NBQUNELFNBQVMsRUFBQyx5QkFBeUI7OENBQUMsV0FBUzs7Ozs7d0NBQUs7OENBQ3RELDhEQUFDRSxJQUFFO29DQUFDRixTQUFTLEVBQUMsRUFBRTs4Q0FBQyw0Q0FBMEM7Ozs7O3dDQUFLOzs7Ozs7Z0NBQzlEO3NDQUNOLDhEQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsdURBQXVEO3NDQUU5RGhDLHdEQUFZLENBQUMsU0FBQ0ssR0FBRyxFQUFFUSxLQUFLO3FEQUNwQiw4REFBQ1osZ0RBQU87b0NBQ0pJLEdBQUcsRUFBRUEsR0FBRztvQ0FFUkQsYUFBYSxFQUFFQSxhQUFhO29DQUM1QlEsa0JBQWtCLEVBQUVBLGtCQUFrQjttQ0FGakNQLEdBQUcsQ0FBQytCLEVBQUU7Ozs7eUNBR2I7NkJBQ0wsQ0FBQzs7Ozs7Z0NBRUo7Ozs7Ozt3QkFDTzs4QkFDakIsOERBQUNMLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxxRkFBcUY7OEJBQ2hHLDRFQUFDOUIsZ0RBQU07d0JBQUNtQyxVQUFVLEVBQUMsdUJBQXVCO3dCQUFDQyxTQUFTLEVBQUksYUFBYyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxHQUFJaEMsYUFBYSxDQUFDZ0MsTUFBTSxHQUFHaEMsYUFBYSxDQUFDZ0MsTUFBTTs7Ozs7NEJBQVc7Ozs7O3dCQUN6STs7Ozs7O2dCQUNKOzs7OztZQUNJLENBQ2hCO0NBQ0w7R0EzRVFwQyxxQkFBcUI7O1FBQ0loQixtRUFBUztRQUNoQkMsdUVBQWE7OztBQUYvQmUsS0FBQUEscUJBQXFCO0FBNkU5QiwrREFBZUEscUJBQXFCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXBvc2l0VHJhc2hWaWV3LmpzPzA3MWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlV2FsbGV0LCB1c2VDb25uZWN0aW9uIH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnQG1ldGFwbGV4L2pzJztcbi8vIGltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnQG1ldGFwbGV4LWZvdW5kYXRpb24vbXBsLXRva2VuLW1ldGFkYXRhJztcbmltcG9ydCB7IGNsdXN0ZXJBcGlVcmwsIENvbm5lY3Rpb24sIFB1YmxpY0tleSwgTEFNUE9SVFNfUEVSX1NPTCB9IGZyb20gXCJAc29sYW5hL3dlYjMuanNcIjtcbmltcG9ydCB7IFRPS0VOX1BST0dSQU1fSUQgfSBmcm9tIFwiQHNvbGFuYS9zcGwtdG9rZW5cIjtcbmltcG9ydCB7IENvbnRlbnRXcmFwcGVyIH0gZnJvbSBcIi4vQ29udGVudFdyYXBwZXJcIjtcbmltcG9ydCBWaWV3V3JhcHBlciBmcm9tIFwiLi9WaWV3V3JhcHBlclwiO1xuaW1wb3J0IHsgdGVzdERhdGEgfSBmcm9tIFwiLi90ZXN0X25mdF9kYXRhXCI7XG5pbXBvcnQgTkZUQ2FyZCBmcm9tIFwiLi9ORlRDYXJkXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuXG5cbmZ1bmN0aW9uIERlcG9zaXRUcmFzaENvbnRhaW5lcigpIHtcbiAgICBjb25zdCB7IHdhbGxldCwgcHVibGljS2V5IH0gPSB1c2VXYWxsZXQoKTtcbiAgICBjb25zdCB7IGNvbm5lY3Rpb24gfSA9IHVzZUNvbm5lY3Rpb24oKTtcbiAgICBjb25zdCBbbmZ0c190b190cmFzaCwgc2V0TkZUc19Ub19UcmFzaF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBsZXQgYmFsYW5jZSA9IDA7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRCYWxhbmNlKCkge1xuICAgICAgICBpZiAocHVibGljS2V5KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSBhd2FpdCBjb25uZWN0aW9uLmdldEJhbGFuY2UoXG4gICAgICAgICAgICAgICAgICAgIHB1YmxpY0tleSxcbiAgICAgICAgICAgICAgICAgICAgJ2NvbmZpcm1lZCdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGNvbm5lY3Rpb24uZ2V0UGFyc2VkVG9rZW5BY2NvdW50c0J5T3duZXIocHVibGljS2V5LCB7IHByb2dyYW1JZDogVE9LRU5fUFJPR1JBTV9JRCB9KTtcbiAgICAgICAgICAgICAgICByZXNwb25zZS52YWx1ZS5mb3JFYWNoKChhY2NvdW50SW5mbykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcHVia2V5OiAke2FjY291bnRJbmZvLnB1YmtleS50b0Jhc2U1OCgpfWApXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBtaW50OiAke2FjY291bnRJbmZvLmFjY291bnQuZGF0YVtcInBhcnNlZFwiXVtcImluZm9cIl1bXCJtaW50XCJdfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgb3duZXI6ICR7YWNjb3VudEluZm8uYWNjb3VudC5kYXRhW1wicGFyc2VkXCJdW1wiaW5mb1wiXVtcIm93bmVyXCJdfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZGVjaW1hbHM6ICR7YWNjb3VudEluZm8uYWNjb3VudC5kYXRhW1wicGFyc2VkXCJdW1wiaW5mb1wiXVtcInRva2VuQW1vdW50XCJdW1wiZGVjaW1hbHNcIl19YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBhbW91bnQ6ICR7YWNjb3VudEluZm8uYWNjb3VudC5kYXRhW1wicGFyc2VkXCJdW1wiaW5mb1wiXVtcInRva2VuQW1vdW50XCJdW1wiYW1vdW50XCJdfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09XCIpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYmFsYW5jZSA9IGJhbGFuY2UgLyBMQU1QT1JUU19QRVJfU09MO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJhbGFuY2UpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBlcnJvciBnZXR0aW5nIGJhbGFuY2U6IGAsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTkZUVG9UcmFzaChuZnQpIHtcbiAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gbmZ0c190b190cmFzaDtcbiAgICAgICAgc2V0TkZUc19Ub19UcmFzaChwbGFjZWhvbGRlci5wdXNoKG5mdCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZnRzX3RvX3RyYXNoKTtcbiAgICAgICAgLy9yZXR1cm4gbmZ0c190b190cmFzaDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVORlRGcm9tVHJhc2gobmZ0KSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gbmZ0c190b190cmFzaC5pbmRleE9mKG5mdCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBzZXRORlRzX1RvX1RyYXNoKG5mdHNfdG9fdHJhc2guc3BsaWNlKGluZGV4LCAxKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9yZXR1cm4gbmZ0c190b190cmFzaDtcbiAgICB9XG5cbiAgICAvLyBnZXRCYWxhbmNlKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1dyYXBwZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC1oLVs2MDBweF0gb3ZlcmZsb3ctYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxDb250ZW50V3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiYmctd2hpdGUgc3RpY2t5IHRvcC0wIHotMTAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBwdC0yXCI+WW91ciBORlRzPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJcIj4gU2VsZWN0IHRoZSBORlRzIHRvIGFkZCB0byB0aGUgdHJhc2ggcGlsZS48L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGdhcC15LTQgZ2FwLXgtMiBqdXN0aWZ5LWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3REYXRhLm1hcCgobmZ0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TkZUQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmZ0PXtuZnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e25mdC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZE5GVFRvVHJhc2g9e2FkZE5GVFRvVHJhc2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVORlRGcm9tVHJhc2g9e3JlbW92ZU5GVEZyb21UcmFzaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NvbnRlbnRXcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBweS02IGJnLWdyYWRpZW50LXRvLXQgZnJvbS13aGl0ZSB0by10cmFuc3BhcmVudCBzdGlja3kgYm90dG9tLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBidXR0b25OYW1lPVwiUmV2aWV3IFlvdXIgU2VsZWN0aW9uXCIgY2xpY2thYmxlID0geyhuZnRzX3RvX3RyYXNoLmxlbmd0aCA+IDApID8gbmZ0c190b190cmFzaC5sZW5ndGggOiBuZnRzX3RvX3RyYXNoLmxlbmd0aH0+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9WaWV3V3JhcHBlcj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEZXBvc2l0VHJhc2hDb250YWluZXI7Il0sIm5hbWVzIjpbInVzZVdhbGxldCIsInVzZUNvbm5lY3Rpb24iLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlTWVtbyIsImNsdXN0ZXJBcGlVcmwiLCJDb25uZWN0aW9uIiwiUHVibGljS2V5IiwiTEFNUE9SVFNfUEVSX1NPTCIsIlRPS0VOX1BST0dSQU1fSUQiLCJDb250ZW50V3JhcHBlciIsIlZpZXdXcmFwcGVyIiwidGVzdERhdGEiLCJORlRDYXJkIiwiQnV0dG9uIiwiRGVwb3NpdFRyYXNoQ29udGFpbmVyIiwiYWRkTkZUVG9UcmFzaCIsIm5mdCIsInBsYWNlaG9sZGVyIiwibmZ0c190b190cmFzaCIsInNldE5GVHNfVG9fVHJhc2giLCJwdXNoIiwiY29uc29sZSIsImxvZyIsInJlbW92ZU5GVEZyb21UcmFzaCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsIndhbGxldCIsInB1YmxpY0tleSIsImNvbm5lY3Rpb24iLCJiYWxhbmNlIiwiZ2V0QmFsYW5jZSIsInJlc3BvbnNlIiwiZ2V0UGFyc2VkVG9rZW5BY2NvdW50c0J5T3duZXIiLCJwcm9ncmFtSWQiLCJ2YWx1ZSIsImZvckVhY2giLCJhY2NvdW50SW5mbyIsInB1YmtleSIsInRvQmFzZTU4IiwiYWNjb3VudCIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwibWFwIiwiaWQiLCJidXR0b25OYW1lIiwiY2xpY2thYmxlIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DepositTrashView.js\n");

/***/ })

});