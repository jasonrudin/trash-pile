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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/spl-token */ \"./node_modules/@solana/spl-token/lib/index.browser.esm.js\");\n/* harmony import */ var _ContentWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContentWrapper */ \"./components/ContentWrapper.js\");\n/* harmony import */ var _ViewWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ViewWrapper */ \"./components/ViewWrapper.js\");\n/* harmony import */ var _test_nft_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./test_nft_data */ \"./components/test_nft_data.js\");\n/* harmony import */ var _NFTCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NFTCard */ \"./components/NFTCard.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Button */ \"./components/Button.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n// import { Connection } from '@metaplex/js';\n// import { Metadata } from '@metaplex-foundation/mpl-token-metadata';\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DepositTrashContainer() {\n    var _this = this;\n    var addNFTToTrash = function addNFTToTrash(nft) {\n        var placeholder = nfts_to_trash.concat({\n            nft: nft,\n            id: (0,uuid__WEBPACK_IMPORTED_MODULE_11__.v4)()\n        });\n        setNFTs_To_Trash(placeholder);\n    };\n    var removeNFTFromTrash = //TO DO: NEED TO FIX THIS, RIGHT NOW I'M NOT FINDING THE NFT OBJECT BECAUSE I ADDED A UNIQUE ID WHEN PUSHING TO THIS ARRAY. SO I NEED TO LOOK IN EACH OBJECT TO SEE IF THERE'S THE RIGHT NFT OBJECT; TO BE DONE VIA FILTERING IMO.\n    function removeNFTFromTrash(nft) {\n        var placeholder = nfts_to_trash;\n        var index = placeholder.indexOf(nft);\n        if (index > -1) {\n            setNFTs_To_Trash(nfts_to_trashsplice(index, 1));\n        }\n        console.log(nfts_to_trash);\n    };\n    _s();\n    var ref = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet)(), wallet = ref.wallet, publicKey = ref.publicKey;\n    var connection = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection)().connection;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), nfts_to_trash = ref1[0], setNFTs_To_Trash = ref1[1];\n    var balance = 0;\n    function getBalance() {\n        return _getBalance.apply(this, arguments);\n    }\n    function _getBalance() {\n        _getBalance = _asyncToGenerator(_Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var response;\n            return _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!publicKey) {\n                            _ctx.next = 16;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return connection.getBalance(publicKey, \"confirmed\");\n                    case 4:\n                        balance = _ctx.sent;\n                        _ctx.next = 7;\n                        return connection.getParsedTokenAccountsByOwner(publicKey, {\n                            programId: _solana_spl_token__WEBPACK_IMPORTED_MODULE_5__.TOKEN_PROGRAM_ID\n                        });\n                    case 7:\n                        response = _ctx.sent;\n                        response.value.forEach(function(accountInfo) {\n                            console.log(\"pubkey: \".concat(accountInfo.pubkey.toBase58()));\n                            console.log(\"mint: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"mint\"]));\n                            console.log(\"owner: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"owner\"]));\n                            console.log(\"decimals: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"tokenAmount\"][\"decimals\"]));\n                            console.log(\"amount: \".concat(accountInfo.account.data[\"parsed\"][\"info\"][\"tokenAmount\"][\"amount\"]));\n                            console.log(\"====================\");\n                        });\n                        balance = balance / _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__.LAMPORTS_PER_SOL;\n                        console.log(balance);\n                        _ctx.next = 16;\n                        break;\n                    case 13:\n                        _ctx.prev = 13;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(\"error getting balance: \", _ctx.t0);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    13\n                ]\n            ]);\n        }));\n        return _getBalance.apply(this, arguments);\n    }\n    // getBalance();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ViewWrapper__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"max-h-[600px] overflow-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ContentWrapper__WEBPACK_IMPORTED_MODULE_6__.ContentWrapper, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"bg-white sticky top-0 z-10 mb-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                    className: \"text-3xl font-bold pt-2\",\n                                    children: \"Your NFTs\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                    className: \"\",\n                                    children: \" Select the NFTs to add to the trash pile.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                            lineNumber: 67,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-4 gap-y-4 gap-x-2 justify-items-center\",\n                            children: _test_nft_data__WEBPACK_IMPORTED_MODULE_8__.testData.map(function(nft, index) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_NFTCard__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    nft: nft,\n                                    addNFTToTrash: addNFTToTrash,\n                                    removeNFTFromTrash: removeNFTFromTrash\n                                }, nft.id, false, {\n                                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 33\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                    lineNumber: 66,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center py-6 bg-gradient-to-t from-white to-transparent sticky bottom-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        buttonName: \"Review Your Selection\",\n                        clickable: nfts_to_trash.length > 0 ? true : false\n                    }, void 0, false, {\n                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                        lineNumber: 85,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                    lineNumber: 84,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n            lineNumber: 65,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, this);\n}\n_s(DepositTrashContainer, \"CO+SVPevZ9oJjRsBdl4rN3hbVfU=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection\n    ];\n});\n_c = DepositTrashContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DepositTrashContainer);\nvar _c;\n$RefreshReg$(_c, \"DepositTrashContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0ksRUFBRTs7Ozt5Q0FHYjs2QkFDTCxDQUFDOzs7OztnQ0FFSjs7Ozs7O3dCQUNPOzhCQUNqQiw4REFBQ3VCLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxxRkFBcUY7OEJBQ2hHLDRFQUFDakMsZ0RBQU07d0JBQUNxQyxVQUFVLEVBQUMsdUJBQXVCO3dCQUFDQyxTQUFTLEVBQUksYUFBYyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxHQUFJLElBQUksR0FBRyxLQUFLOzs7Ozs0QkFBVzs7Ozs7d0JBQzFHOzs7Ozs7Z0JBQ0o7Ozs7O1lBQ0ksQ0FDaEI7Q0FDTDtHQTNFUXBDLHFCQUFxQjs7UUFDSWxCLG1FQUFTO1FBQ2hCQyx1RUFBYTs7O0FBRi9CaUIsS0FBQUEscUJBQXFCO0FBNkU5QiwrREFBZUEscUJBQXFCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXBvc2l0VHJhc2hWaWV3LmpzPzA3MWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlV2FsbGV0LCB1c2VDb25uZWN0aW9uIH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSAnQG1ldGFwbGV4L2pzJztcbi8vIGltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnQG1ldGFwbGV4LWZvdW5kYXRpb24vbXBsLXRva2VuLW1ldGFkYXRhJztcbmltcG9ydCB7IGNsdXN0ZXJBcGlVcmwsIENvbm5lY3Rpb24sIFB1YmxpY0tleSwgTEFNUE9SVFNfUEVSX1NPTCB9IGZyb20gXCJAc29sYW5hL3dlYjMuanNcIjtcbmltcG9ydCB7IFRPS0VOX1BST0dSQU1fSUQgfSBmcm9tIFwiQHNvbGFuYS9zcGwtdG9rZW5cIjtcbmltcG9ydCB7IENvbnRlbnRXcmFwcGVyIH0gZnJvbSBcIi4vQ29udGVudFdyYXBwZXJcIjtcbmltcG9ydCBWaWV3V3JhcHBlciBmcm9tIFwiLi9WaWV3V3JhcHBlclwiO1xuaW1wb3J0IHsgdGVzdERhdGEgfSBmcm9tIFwiLi90ZXN0X25mdF9kYXRhXCI7XG5pbXBvcnQgTkZUQ2FyZCBmcm9tIFwiLi9ORlRDYXJkXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IHt2NCBhcyB1dWlkdjR9IGZyb20gJ3V1aWQnO1xuXG5cbmZ1bmN0aW9uIERlcG9zaXRUcmFzaENvbnRhaW5lcigpIHtcbiAgICBjb25zdCB7IHdhbGxldCwgcHVibGljS2V5IH0gPSB1c2VXYWxsZXQoKTtcbiAgICBjb25zdCB7IGNvbm5lY3Rpb24gfSA9IHVzZUNvbm5lY3Rpb24oKTtcbiAgICBjb25zdCBbbmZ0c190b190cmFzaCwgc2V0TkZUc19Ub19UcmFzaF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBsZXQgYmFsYW5jZSA9IDA7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBnZXRCYWxhbmNlKCkge1xuICAgICAgICBpZiAocHVibGljS2V5KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGJhbGFuY2UgPSBhd2FpdCBjb25uZWN0aW9uLmdldEJhbGFuY2UoXG4gICAgICAgICAgICAgICAgICAgIHB1YmxpY0tleSxcbiAgICAgICAgICAgICAgICAgICAgJ2NvbmZpcm1lZCdcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGNvbm5lY3Rpb24uZ2V0UGFyc2VkVG9rZW5BY2NvdW50c0J5T3duZXIocHVibGljS2V5LCB7IHByb2dyYW1JZDogVE9LRU5fUFJPR1JBTV9JRCB9KTtcbiAgICAgICAgICAgICAgICByZXNwb25zZS52YWx1ZS5mb3JFYWNoKChhY2NvdW50SW5mbykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgcHVia2V5OiAke2FjY291bnRJbmZvLnB1YmtleS50b0Jhc2U1OCgpfWApXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBtaW50OiAke2FjY291bnRJbmZvLmFjY291bnQuZGF0YVtcInBhcnNlZFwiXVtcImluZm9cIl1bXCJtaW50XCJdfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgb3duZXI6ICR7YWNjb3VudEluZm8uYWNjb3VudC5kYXRhW1wicGFyc2VkXCJdW1wiaW5mb1wiXVtcIm93bmVyXCJdfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZGVjaW1hbHM6ICR7YWNjb3VudEluZm8uYWNjb3VudC5kYXRhW1wicGFyc2VkXCJdW1wiaW5mb1wiXVtcInRva2VuQW1vdW50XCJdW1wiZGVjaW1hbHNcIl19YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBhbW91bnQ6ICR7YWNjb3VudEluZm8uYWNjb3VudC5kYXRhW1wicGFyc2VkXCJdW1wiaW5mb1wiXVtcInRva2VuQW1vdW50XCJdW1wiYW1vdW50XCJdfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09XCIpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYmFsYW5jZSA9IGJhbGFuY2UgLyBMQU1QT1JUU19QRVJfU09MO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJhbGFuY2UpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBlcnJvciBnZXR0aW5nIGJhbGFuY2U6IGAsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTkZUVG9UcmFzaChuZnQpIHtcbiAgICAgICAgY29uc3QgcGxhY2Vob2xkZXIgPSBuZnRzX3RvX3RyYXNoLmNvbmNhdCh7bmZ0LCBpZDogdXVpZHY0KCl9KTtcbiAgICAgICAgc2V0TkZUc19Ub19UcmFzaChwbGFjZWhvbGRlcik7XG4gICAgfVxuXG4gICAgLy9UTyBETzogTkVFRCBUTyBGSVggVEhJUywgUklHSFQgTk9XIEknTSBOT1QgRklORElORyBUSEUgTkZUIE9CSkVDVCBCRUNBVVNFIEkgQURERUQgQSBVTklRVUUgSUQgV0hFTiBQVVNISU5HIFRPIFRISVMgQVJSQVkuIFNPIEkgTkVFRCBUTyBMT09LIElOIEVBQ0ggT0JKRUNUIFRPIFNFRSBJRiBUSEVSRSdTIFRIRSBSSUdIVCBORlQgT0JKRUNUOyBUTyBCRSBET05FIFZJQSBGSUxURVJJTkcgSU1PLlxuICAgIGZ1bmN0aW9uIHJlbW92ZU5GVEZyb21UcmFzaChuZnQpIHtcbiAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gbmZ0c190b190cmFzaDtcbiAgICAgICAgY29uc3QgaW5kZXggPSBwbGFjZWhvbGRlci5pbmRleE9mKG5mdCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBzZXRORlRzX1RvX1RyYXNoKG5mdHNfdG9fdHJhc2hzcGxpY2UoaW5kZXgsIDEpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhuZnRzX3RvX3RyYXNoKTtcbiAgICB9XG5cbiAgICAvLyBnZXRCYWxhbmNlKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Vmlld1dyYXBwZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC1oLVs2MDBweF0gb3ZlcmZsb3ctYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxDb250ZW50V3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IFwiYmctd2hpdGUgc3RpY2t5IHRvcC0wIHotMTAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCBwdC0yXCI+WW91ciBORlRzPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJcIj4gU2VsZWN0IHRoZSBORlRzIHRvIGFkZCB0byB0aGUgdHJhc2ggcGlsZS48L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGdhcC15LTQgZ2FwLXgtMiBqdXN0aWZ5LWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlc3REYXRhLm1hcCgobmZ0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TkZUQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmZ0PXtuZnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e25mdC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZE5GVFRvVHJhc2g9e2FkZE5GVFRvVHJhc2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVORlRGcm9tVHJhc2g9e3JlbW92ZU5GVEZyb21UcmFzaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NvbnRlbnRXcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBweS02IGJnLWdyYWRpZW50LXRvLXQgZnJvbS13aGl0ZSB0by10cmFuc3BhcmVudCBzdGlja3kgYm90dG9tLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBidXR0b25OYW1lPVwiUmV2aWV3IFlvdXIgU2VsZWN0aW9uXCIgY2xpY2thYmxlID0geyhuZnRzX3RvX3RyYXNoLmxlbmd0aCA+IDApID8gdHJ1ZSA6IGZhbHNlfT48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1ZpZXdXcmFwcGVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlcG9zaXRUcmFzaENvbnRhaW5lcjsiXSwibmFtZXMiOlsidXNlV2FsbGV0IiwidXNlQ29ubmVjdGlvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwiY2x1c3RlckFwaVVybCIsIkNvbm5lY3Rpb24iLCJQdWJsaWNLZXkiLCJMQU1QT1JUU19QRVJfU09MIiwiVE9LRU5fUFJPR1JBTV9JRCIsIkNvbnRlbnRXcmFwcGVyIiwiVmlld1dyYXBwZXIiLCJ0ZXN0RGF0YSIsIk5GVENhcmQiLCJCdXR0b24iLCJ2NCIsInV1aWR2NCIsIkRlcG9zaXRUcmFzaENvbnRhaW5lciIsImFkZE5GVFRvVHJhc2giLCJuZnQiLCJwbGFjZWhvbGRlciIsIm5mdHNfdG9fdHJhc2giLCJjb25jYXQiLCJpZCIsInNldE5GVHNfVG9fVHJhc2giLCJyZW1vdmVORlRGcm9tVHJhc2giLCJpbmRleCIsImluZGV4T2YiLCJuZnRzX3RvX3RyYXNoc3BsaWNlIiwiY29uc29sZSIsImxvZyIsIndhbGxldCIsInB1YmxpY0tleSIsImNvbm5lY3Rpb24iLCJiYWxhbmNlIiwiZ2V0QmFsYW5jZSIsInJlc3BvbnNlIiwiZ2V0UGFyc2VkVG9rZW5BY2NvdW50c0J5T3duZXIiLCJwcm9ncmFtSWQiLCJ2YWx1ZSIsImZvckVhY2giLCJhY2NvdW50SW5mbyIsInB1YmtleSIsInRvQmFzZTU4IiwiYWNjb3VudCIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwibWFwIiwiYnV0dG9uTmFtZSIsImNsaWNrYWJsZSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DepositTrashView.js\n");

/***/ })

});