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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/spl-token */ \"./node_modules/@solana/spl-token/lib/index.browser.esm.js\");\n/* harmony import */ var _ContentWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContentWrapper */ \"./components/ContentWrapper.js\");\n/* harmony import */ var _ViewWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ViewWrapper */ \"./components/ViewWrapper.js\");\n/* harmony import */ var _test_nft_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./test_nft_data */ \"./components/test_nft_data.js\");\n/* harmony import */ var _NFTCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NFTCard */ \"./components/NFTCard.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Button */ \"./components/Button.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n// import { Connection } from '@metaplex/js';\n// import { Metadata } from '@metaplex-foundation/mpl-token-metadata';\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DepositTrashContainer() {\n    var _this = this;\n    var addNFTToTrash = function addNFTToTrash(nft) {\n        console.log(nfts_to_trash);\n        var placeholder = nfts_to_trash.concat(nft);\n        setNFTs_To_Trash(placeholder);\n        console.log(placeholder);\n    };\n    var removeNFTFromTrash = //TO DO: NEED TO FIX THIS, RIGHT NOW I'M NOT FINDING THE NFT OBJECT BECAUSE I ADDED A UNIQUE ID WHEN PUSHING TO THIS ARRAY. SO I NEED TO LOOK IN EACH OBJECT TO SEE IF THERE'S THE RIGHT NFT OBJECT; TO BE DONE VIA FILTERING IMO.\n    function removeNFTFromTrash(nft) {\n        var placeholder = nfts_to_trash;\n        for(var i = 0; i < nfts_to_trash.length; i++){\n            console.log(\"iterate\");\n        }\n        var index = placeholder.indexOf(nft);\n        console.log(index);\n        if (index > -1) {\n            setNFTs_To_Trash(nfts_to_trash.splice(index, 1));\n        }\n    //console.log(nfts_to_trash);\n    };\n    _s();\n    var ref = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet)(), wallet = ref.wallet, publicKey = ref.publicKey;\n    var connection = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection)().connection;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), nfts_to_trash = ref1[0], setNFTs_To_Trash = ref1[1];\n    var balance = 0;\n    function getBalance() {\n        return _getBalance.apply(this, arguments);\n    }\n    function _getBalance() {\n        _getBalance = _asyncToGenerator(_Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!publicKey) {\n                            _ctx.next = 16;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return connection.getBalance(publicKey, \"confirmed\");\n                    case 4:\n                        balance = _ctx.sent;\n                        _ctx.next = 7;\n                        return connection.getParsedTokenAccountsByOwner(publicKey, {\n                            programId: _solana_spl_token__WEBPACK_IMPORTED_MODULE_5__.TOKEN_PROGRAM_ID\n                        });\n                    case 7:\n                        response = _ctx.sent;\n                        response.value.forEach(function(accountInfo) {\n                            console.log(\"pubkey: \".concat(accountInfo.pubkey.toBase58()));\n                            console.log(\"mint: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"mint\"]));\n                            console.log(\"owner: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"owner\"]));\n                            console.log(\"decimals: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"tokenAmount\"][\"decimals\"]));\n                            console.log(\"amount: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"tokenAmount\"][\"amount\"]));\n                            console.log(\"====================\");\n                        });\n                        balance = balance / _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__.LAMPORTS_PER_SOL;\n                        console.log(balance);\n                        _ctx.next = 16;\n                        break;\n                    case 13:\n                        _ctx.prev = 13;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(\"error getting balance: \", _ctx.t0);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    13\n                ]\n            ]);\n        }));\n        return _getBalance.apply(this, arguments);\n    }\n    // getBalance();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ViewWrapper__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"max-h-[600px] overflow-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ContentWrapper__WEBPACK_IMPORTED_MODULE_6__.ContentWrapper, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"bg-white sticky top-0 z-10 mb-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                    className: \"text-3xl font-bold pt-2\",\n                                    children: \"Your NFTs\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                    className: \"\",\n                                    children: \" Select the NFTs to add to the trash pile.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-4 gap-y-4 gap-x-2 justify-items-center\",\n                            children: _test_nft_data__WEBPACK_IMPORTED_MODULE_8__.testData.map(function(nft, index) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_NFTCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    nft: nft,\n                                    addNFTToTrash: addNFTToTrash,\n                                    removeNFTFromTrash: removeNFTFromTrash\n                                }, nft.id, false, {\n                                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 33\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                            lineNumber: 79,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                    lineNumber: 74,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center py-6 bg-gradient-to-t from-white to-transparent sticky bottom-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        buttonName: \"Review Your Selection\",\n                        clickable: nfts_to_trash.length > 0 ? true : false\n                    }, void 0, false, {\n                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                        lineNumber: 93,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                    lineNumber: 92,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n            lineNumber: 73,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n        lineNumber: 72,\n        columnNumber: 9\n    }, this);\n}\n_s(DepositTrashContainer, \"CO+SVPevZ9oJjRsBdl4rN3hbVfU=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection\n    ];\n});\n_c = DepositTrashContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DepositTrashContainer);\nvar _c;\n$RefreshReg$(_c, \"DepositTrashContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztnQ0FDOUQ7c0NBQ04sOERBQUNELEtBQUc7NEJBQUNDLFNBQVMsRUFBQyx1REFBdUQ7c0NBRTlEcEMsd0RBQVksQ0FBQyxTQUFDTyxHQUFHLEVBQUVVLEtBQUs7cURBQ3BCLDhEQUFDaEIsZ0RBQU87b0NBQ0pNLEdBQUcsRUFBRUEsR0FBRztvQ0FFUkQsYUFBYSxFQUFFQSxhQUFhO29DQUM1QlEsa0JBQWtCLEVBQUVBLGtCQUFrQjttQ0FGakNQLEdBQUcsQ0FBQ2lDLEVBQUU7Ozs7eUNBR2I7NkJBQ0wsQ0FBQzs7Ozs7Z0NBRUo7Ozs7Ozt3QkFDTzs4QkFDakIsOERBQUNMLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxxRkFBcUY7OEJBQ2hHLDRFQUFDbEMsZ0RBQU07d0JBQUN1QyxVQUFVLEVBQUMsdUJBQXVCO3dCQUFDQyxTQUFTLEVBQUksYUFBYyxDQUFDMUIsTUFBTSxHQUFHLENBQUMsR0FBSSxJQUFJLEdBQUcsS0FBSzs7Ozs7NEJBQVc7Ozs7O3dCQUMxRzs7Ozs7O2dCQUNKOzs7OztZQUNJLENBQ2hCO0NBQ0w7R0FuRlFYLHFCQUFxQjs7UUFDSWxCLG1FQUFTO1FBQ2hCQyx1RUFBYTs7O0FBRi9CaUIsS0FBQUEscUJBQXFCO0FBcUY5QiwrREFBZUEscUJBQXFCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXBvc2l0VHJhc2hWaWV3LmpzPzA3MWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlV2FsbGV0LCB1c2VDb25uZWN0aW9uIH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnQG1ldGFwbGV4L2pzJztcbi8vIGltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnQG1ldGFwbGV4LWZvdW5kYXRpb24vbXBsLXRva2VuLW1ldGFkYXRhJztcbmltcG9ydCB7IGNsdXN0ZXJBcGlVcmwsIENvbm5lY3Rpb24sIFB1YmxpY0tleSwgTEFNUE9SVFNfUEVSX1NPTCB9IGZyb20gXCJAc29sYW5hL3dlYjMuanNcIjtcbmltcG9ydCB7IFRPS0VOX1BST0dSQU1fSUQgfSBmcm9tIFwiQHNvbGFuYS9zcGwtdG9rZW5cIjtcbmltcG9ydCB7IENvbnRlbnRXcmFwcGVyIH0gZnJvbSBcIi4vQ29udGVudFdyYXBwZXJcIjtcbmltcG9ydCBWaWV3V3JhcHBlciBmcm9tIFwiLi9WaWV3V3JhcHBlclwiO1xuaW1wb3J0IHsgdGVzdERhdGEgfSBmcm9tIFwiLi90ZXN0X25mdF9kYXRhXCI7XG5pbXBvcnQgTkZUQ2FyZCBmcm9tIFwiLi9ORlRDYXJkXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IHt2NCBhcyB1dWlkdjR9IGZyb20gJ3V1aWQnO1xuXG5cbmZ1bmN0aW9uIERlcG9zaXRUcmFzaENvbnRhaW5lcigpIHtcbiAgICBjb25zdCB7IHdhbGxldCwgcHVibGljS2V5IH0gPSB1c2VXYWxsZXQoKTtcbiAgICBjb25zdCB7IGNvbm5lY3Rpb24gfSA9IHVzZUNvbm5lY3Rpb24oKTtcbiAgICBjb25zdCBbbmZ0c190b190cmFzaCwgc2V0TkZUc19Ub19UcmFzaF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBsZXQgYmFsYW5jZSA9IDA7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRCYWxhbmNlKCkge1xuICAgICAgICBpZiAocHVibGljS2V5KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSBhd2FpdCBjb25uZWN0aW9uLmdldEJhbGFuY2UoXG4gICAgICAgICAgICAgICAgICAgIHB1YmxpY0tleSxcbiAgICAgICAgICAgICAgICAgICAgJ2NvbmZpcm1lZCdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGNvbm5lY3Rpb24uZ2V0UGFyc2VkVG9rZW5BY2NvdW50c0J5T3duZXIocHVibGljS2V5LCB7IHByb2dyYW1JZDogVE9LRU5fUFJPR1JBTV9JRCB9KTtcbiAgICAgICAgICAgICAgICByZXNwb25zZS52YWx1ZS5mb3JFYWNoKChhY2NvdW50SW5mbykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcHVia2V5OiAke2FjY291bnRJbmZvLnB1YmtleS50b0Jhc2U1OCgpfWApXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBtaW50OiAke2FjY291bnRJbmZvLmFjY291bnQuZGF0YVtcInBhcnNlZFwiXVtcImluZm9cIl1bXCJtaW50XCJdfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgb3duZXI6ICR7YWNjb3VudEluZm8uYWNjb3VudC5kYXRhW1wicGFyc2VkXCJdW1wiaW5mb1wiXVtcIm93bmVyXCJdfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZGVjaW1hbHM6ICR7YWNjb3VudEluZm8uYWNjb3VudC5kYXRhW1wicGFyc2VkXCJdW1wiaW5mb1wiXVtcInRva2VuQW1vdW50XCJdW1wiZGVjaW1hbHNcIl19YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBhbW91bnQ6ICR7YWNjb3VudEluZm8uYWNjb3VudC5kYXRhW1wicGFyc2VkXCJdW1wiaW5mb1wiXVtcInRva2VuQW1vdW50XCJdW1wiYW1vdW50XCJdfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09XCIpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYmFsYW5jZSA9IGJhbGFuY2UgLyBMQU1QT1JUU19QRVJfU09MO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJhbGFuY2UpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBlcnJvciBnZXR0aW5nIGJhbGFuY2U6IGAsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTkZUVG9UcmFzaChuZnQpIHtcbiAgICAgICAgY29uc29sZS5sb2cobmZ0c190b190cmFzaCk7XG4gICAgICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gbmZ0c190b190cmFzaC5jb25jYXQobmZ0KTtcbiAgICAgICAgc2V0TkZUc19Ub19UcmFzaChwbGFjZWhvbGRlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYWNlaG9sZGVyKTtcbiAgICB9XG5cbiAgICAvL1RPIERPOiBORUVEIFRPIEZJWCBUSElTLCBSSUdIVCBOT1cgSSdNIE5PVCBGSU5ESU5HIFRIRSBORlQgT0JKRUNUIEJFQ0FVU0UgSSBBRERFRCBBIFVOSVFVRSBJRCBXSEVOIFBVU0hJTkcgVE8gVEhJUyBBUlJBWS4gU08gSSBORUVEIFRPIExPT0sgSU4gRUFDSCBPQkpFQ1QgVE8gU0VFIElGIFRIRVJFJ1MgVEhFIFJJR0hUIE5GVCBPQkpFQ1Q7IFRPIEJFIERPTkUgVklBIEZJTFRFUklORyBJTU8uXG4gICAgZnVuY3Rpb24gcmVtb3ZlTkZURnJvbVRyYXNoKG5mdCkgeyBcbiAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gbmZ0c190b190cmFzaDtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG5mdHNfdG9fdHJhc2gubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2l0ZXJhdGUnKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29uc3QgaW5kZXggPSBwbGFjZWhvbGRlci5pbmRleE9mKG5mdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHNldE5GVHNfVG9fVHJhc2gobmZ0c190b190cmFzaC5zcGxpY2UoaW5kZXgsIDEpKTtcbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKG5mdHNfdG9fdHJhc2gpO1xuICAgIH1cblxuICAgIC8vIGdldEJhbGFuY2UoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxWaWV3V3JhcHBlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LWgtWzYwMHB4XSBvdmVyZmxvdy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPENvbnRlbnRXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0gXCJiZy13aGl0ZSBzdGlja3kgdG9wLTAgei0xMCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHB0LTJcIj5Zb3VyIE5GVHM8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIlwiPiBTZWxlY3QgdGhlIE5GVHMgdG8gYWRkIHRvIHRoZSB0cmFzaCBwaWxlLjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgZ2FwLXktNCBnYXAteC0yIGp1c3RpZnktaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVzdERhdGEubWFwKChuZnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxORlRDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZnQ9e25mdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bmZ0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkTkZUVG9UcmFzaD17YWRkTkZUVG9UcmFzaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZU5GVEZyb21UcmFzaD17cmVtb3ZlTkZURnJvbVRyYXNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ29udGVudFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB5LTYgYmctZ3JhZGllbnQtdG8tdCBmcm9tLXdoaXRlIHRvLXRyYW5zcGFyZW50IHN0aWNreSBib3R0b20tMFwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJ1dHRvbk5hbWU9XCJSZXZpZXcgWW91ciBTZWxlY3Rpb25cIiBjbGlja2FibGUgPSB7KG5mdHNfdG9fdHJhc2gubGVuZ3RoID4gMCkgPyB0cnVlIDogZmFsc2V9PjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvVmlld1dyYXBwZXI+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVwb3NpdFRyYXNoQ29udGFpbmVyOyJdLCJuYW1lcyI6WyJ1c2VXYWxsZXQiLCJ1c2VDb25uZWN0aW9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJjbHVzdGVyQXBpVXJsIiwiQ29ubmVjdGlvbiIsIlB1YmxpY0tleSIsIkxBTVBPUlRTX1BFUl9TT0wiLCJUT0tFTl9QUk9HUkFNX0lEIiwiQ29udGVudFdyYXBwZXIiLCJWaWV3V3JhcHBlciIsInRlc3REYXRhIiwiTkZUQ2FyZCIsIkJ1dHRvbiIsInY0IiwidXVpZHY0IiwiRGVwb3NpdFRyYXNoQ29udGFpbmVyIiwiYWRkTkZUVG9UcmFzaCIsIm5mdCIsImNvbnNvbGUiLCJsb2ciLCJuZnRzX3RvX3RyYXNoIiwicGxhY2Vob2xkZXIiLCJjb25jYXQiLCJzZXRORlRzX1RvX1RyYXNoIiwicmVtb3ZlTkZURnJvbVRyYXNoIiwiaSIsImxlbmd0aCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsIndhbGxldCIsInB1YmxpY0tleSIsImNvbm5lY3Rpb24iLCJiYWxhbmNlIiwiZ2V0QmFsYW5jZSIsInJlc3BvbnNlIiwiZ2V0UGFyc2VkVG9rZW5BY2NvdW50c0J5T3duZXIiLCJwcm9ncmFtSWQiLCJ2YWx1ZSIsImZvckVhY2giLCJhY2NvdW50SW5mbyIsInB1YmtleSIsInRvQmFzZTU4IiwiYWNjb3VudCIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwibWFwIiwiaWQiLCJidXR0b25OYW1lIiwiY2xpY2thYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/DepositTrashView.js\n");

/***/ })

});