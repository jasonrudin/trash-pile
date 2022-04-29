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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/spl-token */ \"./node_modules/@solana/spl-token/lib/index.browser.esm.js\");\n/* harmony import */ var _ContentWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContentWrapper */ \"./components/ContentWrapper.js\");\n/* harmony import */ var _ViewWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ViewWrapper */ \"./components/ViewWrapper.js\");\n/* harmony import */ var _NFTSelectionCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NFTSelectionCard */ \"./components/NFTSelectionCard.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Button */ \"./components/Button.js\");\n/* harmony import */ var _DepositConfirmationView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DepositConfirmationView */ \"./components/DepositConfirmationView.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction DepositTrashContainer() {\n    var addNFTToTrash = function addNFTToTrash(nft) {\n        console.log(nfts_to_trash);\n        if (nfts_to_trash.some(function(element) {\n            return element.mintAddress === nft.mintAddress;\n        })) {\n            console.log(\"To Trash does include the NFT already\");\n            return;\n        } else {\n            console.log(\"To Trash does NOT include the NFT\");\n            var placeholder = nfts_to_trash.concat(nft);\n            setNFTs_To_Trash(placeholder);\n        }\n    };\n    var removeNFTFromTrash = function removeNFTFromTrash(nft) {\n        var placeholder = nfts_to_trash.filter(function(element) {\n            return element != nft;\n        });\n        setNFTs_To_Trash(placeholder);\n    };\n    var changeConfirmationScreen = function changeConfirmationScreen() {\n        setIsConfirming(!isConfirming);\n    };\n    _s();\n    var ref = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet)(), wallet = ref.wallet, publicKey = ref.publicKey;\n    var connection = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection)().connection;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), nfts_to_trash = ref1[0], setNFTs_To_Trash = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isConfirming = ref2[0], setIsConfirming = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), fullNFTList = ref3[0], setFullNFTList = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(_asyncToGenerator(_Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var requestOptions, response, data, dataJSON;\n        return _Users_jasonrudin_Documents_trash_pile_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    if (!publicKey) {\n                        _ctx.next = 10;\n                        break;\n                    }\n                    requestOptions = {\n                        method: \"GET\",\n                        redirect: \"follow\"\n                    };\n                    _ctx.next = 4;\n                    return fetch(\"https://api-mainnet.magiceden.dev/v2/wallets/\".concat(publicKey.toBase58(), \"/tokens\"), requestOptions);\n                case 4:\n                    response = _ctx.sent;\n                    _ctx.next = 7;\n                    return response.text();\n                case 7:\n                    data = _ctx.sent;\n                    dataJSON = JSON.parse(data);\n                    setFullNFTList(dataJSON);\n                case 10:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    })));\n    if (!isConfirming) {\n        var _this = this;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ViewWrapper__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"max-h-[600px] overflow-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ContentWrapper__WEBPACK_IMPORTED_MODULE_6__.ContentWrapper, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"bg-white sticky top-0 z-10 mb-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                        className: \"text-3xl font-bold pt-2\",\n                                        children: \"Your NFTs\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        className: \"\",\n                                        children: \" Select the NFTs to add to the trash pile.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                lineNumber: 61,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"grid grid-cols-4 gap-y-4 gap-x-2 justify-items-center\",\n                                children: fullNFTList.map(function(nft, index) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_NFTSelectionCard__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        nft: nft,\n                                        addNFTToTrash: addNFTToTrash,\n                                        removeNFTFromTrash: removeNFTFromTrash\n                                    }, index, false, {\n                                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 37\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                                lineNumber: 65,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center py-6 bg-gradient-to-t from-white to-transparent sticky bottom-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            buttonName: \"Review Your Selection\",\n                            clickable: nfts_to_trash.length > 0 ? true : false,\n                            onClick: function() {\n                                return setIsConfirming(true);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                            lineNumber: 79,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                        lineNumber: 78,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n                lineNumber: 59,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n            lineNumber: 58,\n            columnNumber: 13\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_DepositConfirmationView__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n            nftsToTrash: nfts_to_trash,\n            changeConfirmationScreen: changeConfirmationScreen,\n            removeNFTFromTrash: removeNFTFromTrash\n        }, void 0, false, {\n            fileName: \"/Users/jasonrudin/Documents/trash-pile/components/DepositTrashView.js\",\n            lineNumber: 92,\n            columnNumber: 13\n        }, this);\n    }\n}\n_s(DepositTrashContainer, \"f07kgidNO5bfIgCYRgZ8L5I1QZI=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useWallet,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.useConnection\n    ];\n});\n_c = DepositTrashContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DepositTrashContainer); // async function getBalance() {\n //     if (publicKey) {\n //         try {\n //             balance = await connection.getBalance(\n //                 publicKey,\n //                 'confirmed'\n //             );\n //             let response = await connection.getParsedTokenAccountsByOwner(publicKey, { programId: TOKEN_PROGRAM_ID });\n //             response.value.forEach((accountInfo) => {\n //                 console.log(`pubkey: ${accountInfo.pubkey.toBase58()}`)\n //                 console.log(`mint: ${accountInfo.account.data[\"parsed\"][\"info\"][\"mint\"]}`);\n //                 console.log(`owner: ${accountInfo.account.data[\"parsed\"][\"info\"][\"owner\"]}`);\n //                 console.log(`decimals: ${accountInfo.account.data[\"parsed\"][\"info\"][\"tokenAmount\"][\"decimals\"]}`);\n //                 console.log(`amount: ${accountInfo.account.data[\"parsed\"][\"info\"][\"tokenAmount\"][\"amount\"]}`);\n //                 console.log(\"====================\")\n //             });\n //             balance = balance / LAMPORTS_PER_SOL;\n //             console.log(balance);\n //         } catch (e) {\n //             console.log(`error getting balance: `, e);\n //         }\n //     }\n // }\nvar _c;\n$RefreshReg$(_c, \"DepositTrashContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQUksQ0FDeko7S0FDTDtDQUNKO0dBbkZRWixxQkFBcUI7O1FBQ0loQixtRUFBUztRQUNoQkMsdUVBQWE7OztBQUYvQmUsS0FBQUEscUJBQXFCO0FBcUY5QiwrREFBZUEscUJBQXFCLEVBQUMsQ0FFckMsZ0NBQWdDO0NBQ2hDLHVCQUF1QjtDQUN2QixnQkFBZ0I7Q0FDaEIscURBQXFEO0NBQ3JELDZCQUE2QjtDQUM3Qiw4QkFBOEI7Q0FDOUIsaUJBQWlCO0NBQ2pCLHlIQUF5SDtDQUN6SCx3REFBd0Q7Q0FDeEQsMEVBQTBFO0NBQzFFLDhGQUE4RjtDQUM5RixnR0FBZ0c7Q0FDaEcscUhBQXFIO0NBQ3JILGlIQUFpSDtDQUNqSCxzREFBc0Q7Q0FDdEQsa0JBQWtCO0NBQ2xCLG9EQUFvRDtDQUNwRCxvQ0FBb0M7Q0FDcEMsd0JBQXdCO0NBQ3hCLHlEQUF5RDtDQUN6RCxZQUFZO0NBQ1osUUFBUTtDQUNSLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXBvc2l0VHJhc2hWaWV3LmpzPzA3MWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlV2FsbGV0LCB1c2VDb25uZWN0aW9uIH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjbHVzdGVyQXBpVXJsLCBDb25uZWN0aW9uLCBQdWJsaWNLZXksIExBTVBPUlRTX1BFUl9TT0wgfSBmcm9tIFwiQHNvbGFuYS93ZWIzLmpzXCI7XG5pbXBvcnQgeyBUT0tFTl9QUk9HUkFNX0lEIH0gZnJvbSBcIkBzb2xhbmEvc3BsLXRva2VuXCI7XG5pbXBvcnQgeyBDb250ZW50V3JhcHBlciB9IGZyb20gXCIuL0NvbnRlbnRXcmFwcGVyXCI7XG5pbXBvcnQgVmlld1dyYXBwZXIgZnJvbSBcIi4vVmlld1dyYXBwZXJcIjtcbmltcG9ydCBORlRTZWxlY3Rpb25DYXJkIGZyb20gXCIuL05GVFNlbGVjdGlvbkNhcmRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgRGVwb3NpdENvbmZpcm1hdGlvblZpZXcgZnJvbSBcIi4vRGVwb3NpdENvbmZpcm1hdGlvblZpZXdcIjtcblxuXG5mdW5jdGlvbiBEZXBvc2l0VHJhc2hDb250YWluZXIoKSB7XG4gICAgY29uc3QgeyB3YWxsZXQsIHB1YmxpY0tleSB9ID0gdXNlV2FsbGV0KCk7XG4gICAgY29uc3QgeyBjb25uZWN0aW9uIH0gPSB1c2VDb25uZWN0aW9uKCk7XG4gICAgY29uc3QgW25mdHNfdG9fdHJhc2gsIHNldE5GVHNfVG9fVHJhc2hdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtpc0NvbmZpcm1pbmcsIHNldElzQ29uZmlybWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBbZnVsbE5GVExpc3QsIHNldEZ1bGxORlRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZihwdWJsaWNLZXkpe1xuICAgICAgICAgICAgdmFyIHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLW1haW5uZXQubWFnaWNlZGVuLmRldi92Mi93YWxsZXRzLyR7cHVibGljS2V5LnRvQmFzZTU4KCl9L3Rva2Vuc2AsIHJlcXVlc3RPcHRpb25zKTtcbiAgICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICAgIGxldCBkYXRhSlNPTiA9IEpTT04ucGFyc2UoZGF0YSk7XG5cbiAgICAgICAgICAgICAgc2V0RnVsbE5GVExpc3QoZGF0YUpTT04pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBhZGRORlRUb1RyYXNoKG5mdCkge1xuICAgICAgICBjb25zb2xlLmxvZyhuZnRzX3RvX3RyYXNoKTtcbiAgICAgICAgaWYobmZ0c190b190cmFzaC5zb21lKGVsZW1lbnQgPT4gZWxlbWVudC5taW50QWRkcmVzcyA9PT0gbmZ0Lm1pbnRBZGRyZXNzKSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVG8gVHJhc2ggZG9lcyBpbmNsdWRlIHRoZSBORlQgYWxyZWFkeScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVG8gVHJhc2ggZG9lcyBOT1QgaW5jbHVkZSB0aGUgTkZUJyk7XG4gICAgICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IG5mdHNfdG9fdHJhc2guY29uY2F0KG5mdCk7XG4gICAgICAgICAgICBzZXRORlRzX1RvX1RyYXNoKHBsYWNlaG9sZGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZU5GVEZyb21UcmFzaChuZnQpIHtcbiAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gbmZ0c190b190cmFzaC5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQgIT0gbmZ0KTtcbiAgICAgICAgc2V0TkZUc19Ub19UcmFzaChwbGFjZWhvbGRlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlQ29uZmlybWF0aW9uU2NyZWVuKCl7XG4gICAgICAgIHNldElzQ29uZmlybWluZyghaXNDb25maXJtaW5nKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzQ29uZmlybWluZykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFZpZXdXcmFwcGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LWgtWzYwMHB4XSBvdmVyZmxvdy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50V3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc3RpY2t5IHRvcC0wIHotMTAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgcHQtMlwiPllvdXIgTkZUczwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIlwiPiBTZWxlY3QgdGhlIE5GVHMgdG8gYWRkIHRvIHRoZSB0cmFzaCBwaWxlLjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAteS00IGdhcC14LTIganVzdGlmeS1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxORlRMaXN0Lm1hcCgobmZ0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5GVFNlbGVjdGlvbkNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZnQ9e25mdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZE5GVFRvVHJhc2g9e2FkZE5GVFRvVHJhc2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTkZURnJvbVRyYXNoPXtyZW1vdmVORlRGcm9tVHJhc2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcHktNiBiZy1ncmFkaWVudC10by10IGZyb20td2hpdGUgdG8tdHJhbnNwYXJlbnQgc3RpY2t5IGJvdHRvbS0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uTmFtZT1cIlJldmlldyBZb3VyIFNlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlPXsobmZ0c190b190cmFzaC5sZW5ndGggPiAwKSA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0NvbmZpcm1pbmcodHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvVmlld1dyYXBwZXI+XG5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxEZXBvc2l0Q29uZmlybWF0aW9uVmlldyBuZnRzVG9UcmFzaD17bmZ0c190b190cmFzaH0gY2hhbmdlQ29uZmlybWF0aW9uU2NyZWVuID0ge2NoYW5nZUNvbmZpcm1hdGlvblNjcmVlbn0gcmVtb3ZlTkZURnJvbVRyYXNoID0ge3JlbW92ZU5GVEZyb21UcmFzaH0gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlcG9zaXRUcmFzaENvbnRhaW5lcjtcblxuLy8gYXN5bmMgZnVuY3Rpb24gZ2V0QmFsYW5jZSgpIHtcbi8vICAgICBpZiAocHVibGljS2V5KSB7XG4vLyAgICAgICAgIHRyeSB7XG4vLyAgICAgICAgICAgICBiYWxhbmNlID0gYXdhaXQgY29ubmVjdGlvbi5nZXRCYWxhbmNlKFxuLy8gICAgICAgICAgICAgICAgIHB1YmxpY0tleSxcbi8vICAgICAgICAgICAgICAgICAnY29uZmlybWVkJ1xuLy8gICAgICAgICAgICAgKTtcbi8vICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGNvbm5lY3Rpb24uZ2V0UGFyc2VkVG9rZW5BY2NvdW50c0J5T3duZXIocHVibGljS2V5LCB7IHByb2dyYW1JZDogVE9LRU5fUFJPR1JBTV9JRCB9KTtcbi8vICAgICAgICAgICAgIHJlc3BvbnNlLnZhbHVlLmZvckVhY2goKGFjY291bnRJbmZvKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHB1YmtleTogJHthY2NvdW50SW5mby5wdWJrZXkudG9CYXNlNTgoKX1gKVxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBtaW50OiAke2FjY291bnRJbmZvLmFjY291bnQuZGF0YVtcInBhcnNlZFwiXVtcImluZm9cIl1bXCJtaW50XCJdfWApO1xuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBvd25lcjogJHthY2NvdW50SW5mby5hY2NvdW50LmRhdGFbXCJwYXJzZWRcIl1bXCJpbmZvXCJdW1wib3duZXJcIl19YCk7XG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGRlY2ltYWxzOiAke2FjY291bnRJbmZvLmFjY291bnQuZGF0YVtcInBhcnNlZFwiXVtcImluZm9cIl1bXCJ0b2tlbkFtb3VudFwiXVtcImRlY2ltYWxzXCJdfWApO1xuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBhbW91bnQ6ICR7YWNjb3VudEluZm8uYWNjb3VudC5kYXRhW1wicGFyc2VkXCJdW1wiaW5mb1wiXVtcInRva2VuQW1vdW50XCJdW1wiYW1vdW50XCJdfWApO1xuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT1cIilcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgYmFsYW5jZSA9IGJhbGFuY2UgLyBMQU1QT1JUU19QRVJfU09MO1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coYmFsYW5jZSk7XG4vLyAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBlcnJvciBnZXR0aW5nIGJhbGFuY2U6IGAsIGUpO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfSJdLCJuYW1lcyI6WyJ1c2VXYWxsZXQiLCJ1c2VDb25uZWN0aW9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJjbHVzdGVyQXBpVXJsIiwiQ29ubmVjdGlvbiIsIlB1YmxpY0tleSIsIkxBTVBPUlRTX1BFUl9TT0wiLCJUT0tFTl9QUk9HUkFNX0lEIiwiQ29udGVudFdyYXBwZXIiLCJWaWV3V3JhcHBlciIsIk5GVFNlbGVjdGlvbkNhcmQiLCJCdXR0b24iLCJEZXBvc2l0Q29uZmlybWF0aW9uVmlldyIsIkRlcG9zaXRUcmFzaENvbnRhaW5lciIsImFkZE5GVFRvVHJhc2giLCJuZnQiLCJjb25zb2xlIiwibG9nIiwibmZ0c190b190cmFzaCIsInNvbWUiLCJlbGVtZW50IiwibWludEFkZHJlc3MiLCJwbGFjZWhvbGRlciIsImNvbmNhdCIsInNldE5GVHNfVG9fVHJhc2giLCJyZW1vdmVORlRGcm9tVHJhc2giLCJmaWx0ZXIiLCJjaGFuZ2VDb25maXJtYXRpb25TY3JlZW4iLCJzZXRJc0NvbmZpcm1pbmciLCJpc0NvbmZpcm1pbmciLCJ3YWxsZXQiLCJwdWJsaWNLZXkiLCJjb25uZWN0aW9uIiwiZnVsbE5GVExpc3QiLCJzZXRGdWxsTkZUTGlzdCIsInJlcXVlc3RPcHRpb25zIiwicmVzcG9uc2UiLCJkYXRhIiwiZGF0YUpTT04iLCJtZXRob2QiLCJyZWRpcmVjdCIsImZldGNoIiwidG9CYXNlNTgiLCJ0ZXh0IiwiSlNPTiIsInBhcnNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJoMiIsIm1hcCIsImluZGV4IiwiYnV0dG9uTmFtZSIsImNsaWNrYWJsZSIsImxlbmd0aCIsIm9uQ2xpY2siLCJuZnRzVG9UcmFzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/DepositTrashView.js\n");

/***/ })

});