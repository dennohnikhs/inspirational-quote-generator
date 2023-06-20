"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_pkoriobasu_workspace_tutorials_next_js_inspirational_quote_generator_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_pkoriobasu_workspace_tutorials_next_js_inspirational_quote_generator_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_pkoriobasu_workspace_tutorials_next_js_inspirational_quote_generator_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_pkoriobasu_workspace_tutorials_next_js_inspirational_quote_generator_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/quoteGenerator/quoteGeneratorElement */ \"./components/quoteGenerator/quoteGeneratorElement.tsx\");\n/* harmony import */ var _assets_clouds_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/clouds.png */ \"./assets/clouds.png\");\n/* harmony import */ var _assets_rain_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/rain.png */ \"./assets/rain.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _api_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/_app */ \"./pages/api/_app.tsx\");\n/* harmony import */ var _src_graphql_queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/src/graphql/queries */ \"./src/graphql/queries.ts\");\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! aws-amplify */ \"./node_modules/@aws-amplify/api/lib-esm/API.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n\n\nvar _jsxFileName = \"/home/pkoriobasu/workspace/tutorials/next-js/inspirational-quote-generator/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n// components\n // assets\n\n\n\n // import '../styles/global.css'\n\n\n\n //interface for our Dynamo Db object\n\n\n\n//type guard for our fetch function\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),\n      numberOfQuotes = _useState[0],\n      setNumberOfQuotes = _useState[1]; //function to fetch our DynamoDb Object (quotes generated)\n\n\n  var updateQuoteInfo = /*#__PURE__*/function () {\n    var _ref = (0,_home_pkoriobasu_workspace_tutorials_next_js_inspirational_quote_generator_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_home_pkoriobasu_workspace_tutorials_next_js_inspirational_quote_generator_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var response;\n      return _home_pkoriobasu_workspace_tutorials_next_js_inspirational_quote_generator_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return aws_amplify__WEBPACK_IMPORTED_MODULE_10__.API.graphql({\n                //info from quries that was autogenerated from src graphql\n                query: _src_graphql_queries__WEBPACK_IMPORTED_MODULE_8__.quotesQueryName,\n                authMode: \"AWS_IAM\",\n                //this is the string variable we created in the dynamodb\n                variables: {\n                  queryName: \"LIVE\"\n                }\n              });\n\n            case 3:\n              response = _context.sent;\n              console.log('response', response);\n              _context.next = 10;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(\"error getting quote data\", _context.t0);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }));\n\n    return function updateQuoteInfo() {\n      return _ref.apply(this, arguments);\n    };\n  }(); //use useEffect component which invokes the callback after initial rendering (mounting), and on later renderings, if any value inside dependencies has changed\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {\n    updateQuoteInfo;\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"title\", {\n        children: \"Inspirational  Quote Generator\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"fun project to generate quotes\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"width=dev-width,initial-scale=1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.icon\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.GradientBackgroundCon, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.BackgroundImage1, {\n        src: _assets_clouds_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        height: \"300\",\n        alt: \"cloudbackground1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 14\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.BackgroundImage2, {\n        src: _assets_rain_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        height: \"300\",\n        alt: \"cloudbackground2\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 14\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.FooterCon, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {\n          children: [\"Quotes Generated:\", numberOfQuotes, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 14\n          }, this), \"Developed with  \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.RedSpan, {\n            children: \"\\u2764\\uFE0F\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 30\n          }, this), \" by \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.FooterLink, {\n            href: \"https://my-portfolio-hif6icsrf-davidsonlangat316-gmailcom.vercel.app/\",\n            target: \"_blank\",\n            rel: \"noopener noreferrer\",\n            children: \" @LangatDenis\\\"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 55\n          }, this)]\n        }, void 0, true)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.QuoteGeneratorCon, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.QuoteGeneratorInnerCon, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.QuoteGeneratorTitle, {\n          children: \"Daily Inspiration Generator\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.QuoteGeneratorSubTitle, {\n          children: [\"Looking for a splash of inspiration? Generate a quote card with a random inspirational quote provided by\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.FooterLink, {\n            href: \"https://zenquotes.io/\",\n            target: \"_blank\",\n            rel: \"noopener nooreferrer\",\n            children: \" ZenQuotesAPI\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 125\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.GenerateQuoteButton, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.GenerateQuoteButtonText, {\n            onClick: null,\n            children: \"Make a Quote\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"XBTzo9FCDK1YBlxB6CCoA9Xa9w4=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLHNCQUQyRjtZQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQSxRQUQ1RztRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFKSixlQVdJLDhEQUFDLGlHQUFEO1VBQUEsdUJBQ0ksOERBQUMscUdBQUQ7WUFBeUIsT0FBTyxFQUFFLElBQWxDO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBO1FBREo7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQVhKO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQURKO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFsQ0E7RUFBQSxnQkFESjtBQXVEQzs7R0EvRW1CRDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG4vLyBjb21wb25lbnRzXG5pbXBvcnQgeyBCYWNrZ3JvdW5kSW1hZ2UxLCBCYWNrZ3JvdW5kSW1hZ2UyLCBGb290ZXJDb24sIEZvb3RlckxpbmssIEdlbmVyYXRlUXVvdGVCdXR0b24sIEdlbmVyYXRlUXVvdGVCdXR0b25UZXh0LCBHcmFkaWVudEJhY2tncm91bmRDb24sIFF1b3RlR2VuZXJhdG9yQ29uLCBRdW90ZUdlbmVyYXRvcklubmVyQ29uLCBRdW90ZUdlbmVyYXRvclN1YlRpdGxlLCBRdW90ZUdlbmVyYXRvclRpdGxlLCBSZWRTcGFuIH0gZnJvbSAnQC9jb21wb25lbnRzL3F1b3RlR2VuZXJhdG9yL3F1b3RlR2VuZXJhdG9yRWxlbWVudCdcbi8vIGFzc2V0c1xuaW1wb3J0IGNsb3VkIGZyb20gXCIuLi9hc3NldHMvY2xvdWRzLnBuZ1wiXG5pbXBvcnQgcmFpbmluZyBmcm9tIFwiLi4vYXNzZXRzL3JhaW4ucG5nXCJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbC5jc3MnXG5pbXBvcnQgXCIuL2FwaS9fYXBwXCJcbmltcG9ydCB7IHVwZGF0ZVF1b3RlQXBwRGF0YSB9IGZyb20gJ0Avc3JjL2dyYXBocWwvbXV0YXRpb25zJ1xuaW1wb3J0IHsgcXVvdGVzUXVlcnlOYW1lIH0gZnJvbSAnQC9zcmMvZ3JhcGhxbC9xdWVyaWVzJ1xuaW1wb3J0IHsgQVBJIH0gZnJvbSAnYXdzLWFtcGxpZnknXG4vL2ludGVyZmFjZSBmb3Igb3VyIER5bmFtbyBEYiBvYmplY3RcblxuaW50ZXJmYWNlIFVwZGF0ZVF1b3RlSW5mb0RhdGF7XG4gICAgaWQ6IHN0cmluZ1xuICBxdWVyeU5hbWU6IHN0cmluZ1xuICBxdW90ZXNHZW5lcmF0ZWQ6IG51bWJlclxuICBjcmVhdGVkQXQ6IHN0cmluZ1xuICB1cGRhdGVkQXQ6IHN0cmluZ1xufVxuLy90eXBlIGd1YXJkIGZvciBvdXIgZmV0Y2ggZnVuY3Rpb25cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKXtcbiAgICBjb25zdCBbbnVtYmVyT2ZRdW90ZXMsc2V0TnVtYmVyT2ZRdW90ZXNdID0gdXNlU3RhdGU8TnVtYmVyfG51bGw+KDApXG4gICAgLy9mdW5jdGlvbiB0byBmZXRjaCBvdXIgRHluYW1vRGIgT2JqZWN0IChxdW90ZXMgZ2VuZXJhdGVkKVxuICAgIGNvbnN0IHVwZGF0ZVF1b3RlSW5mbyA9IGFzeW5jICgpID0+e1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFQSS5ncmFwaHFsPFVwZGF0ZVF1b3RlSW5mb0RhdGE+KHtcbiAgICAgICAgICAgICAgICAvL2luZm8gZnJvbSBxdXJpZXMgdGhhdCB3YXMgYXV0b2dlbmVyYXRlZCBmcm9tIHNyYyBncmFwaHFsXG4gICAgICAgICAgICAgICAgcXVlcnk6cXVvdGVzUXVlcnlOYW1lLFxuICAgICAgICAgICAgYXV0aE1vZGU6XCJBV1NfSUFNXCIsXG4gICAgICAgICAgICAvL3RoaXMgaXMgdGhlIHN0cmluZyB2YXJpYWJsZSB3ZSBjcmVhdGVkIGluIHRoZSBkeW5hbW9kYlxuICAgICAgICAgICAgdmFyaWFibGVzOntcbiAgICAgICAgICAgIHF1ZXJ5TmFtZTpcIkxJVkVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVzcG9uc2UnLHJlc3BvbnNlKVxuICAgICAgICB9Y2F0Y2ggKGVycm9yKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZ2V0dGluZyBxdW90ZSBkYXRhXCIsZXJyb3IpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL3VzZSB1c2VFZmZlY3QgY29tcG9uZW50IHdoaWNoIGludm9rZXMgdGhlIGNhbGxiYWNrIGFmdGVyIGluaXRpYWwgcmVuZGVyaW5nIChtb3VudGluZyksIGFuZCBvbiBsYXRlciByZW5kZXJpbmdzLCBpZiBhbnkgdmFsdWUgaW5zaWRlIGRlcGVuZGVuY2llcyBoYXMgY2hhbmdlZFxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICB1cGRhdGVRdW90ZUluZm9cbiAgICB9LFtdKVxuICAgIHJldHVybihcbiAgICAgICAgPD4gXG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPkluc3BpcmF0aW9uYWwgIFF1b3RlIEdlbmVyYXRvcjwvdGl0bGU+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiZnVuIHByb2plY3QgdG8gZ2VuZXJhdGUgcXVvdGVzXCIvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldi13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29uXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8R3JhZGllbnRCYWNrZ3JvdW5kQ29uPlxuICAgICAgICB7LyogQmFja2dyb3VuZCBpbWFnZXMgKi99XG4gICAgICAgICAgICAgPEJhY2tncm91bmRJbWFnZTFcbiAgICAgICAgICAgICBzcmM9e2Nsb3VkfVxuICAgICAgICAgICAgIGhlaWdodD1cIjMwMFwiXG4gICAgICAgICAgICAgYWx0PVwiY2xvdWRiYWNrZ3JvdW5kMVwiXG4gICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICA8QmFja2dyb3VuZEltYWdlMlxuICAgICAgICAgICAgIHNyYz17cmFpbmluZ31cbiAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBcIlxuICAgICAgICAgICAgIGFsdD1cImNsb3VkYmFja2dyb3VuZDJcIlxuICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgey8qIGZvb3RlciAgKi99XG4gICAgICAgICAgICA8Rm9vdGVyQ29uPlxuICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgIFF1b3RlcyBHZW5lcmF0ZWQ6e251bWJlck9mUXVvdGVzfVxuICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgIERldmVsb3BlZCB3aXRoICA8UmVkU3Bhbj7inaTvuI88L1JlZFNwYW4+IGJ5IDxGb290ZXJMaW5rIGhyZWY9XCJodHRwczovL215LXBvcnRmb2xpby1oaWY2aWNzcmYtZGF2aWRzb25sYW5nYXQzMTYtZ21haWxjb20udmVyY2VsLmFwcC9cIlxuICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj4gQExhbmdhdERlbmlzXCJcbiAgICAgICAgICAgICA8L0Zvb3Rlckxpbms+IFxuICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgPC9Gb290ZXJDb24+XG5cbiAgICAgICAgPC9HcmFkaWVudEJhY2tncm91bmRDb24+XG4gICAgICAgIHsvKiBRdW90ZSBHZW5lcmF0b3IgbW9kYWwgcG9wLXVwICovfVxuICAgICAgICB7LyogPFF1b3RlR2VuZXJhdG9yTW9kYWwgLz4gKi99XG4gICAgICAgIHsvKiBRdW90ZUdlbmVyYXRvciAqL31cbiAgICAgICAgPFF1b3RlR2VuZXJhdG9yQ29uPlxuICAgICAgICAgICAgPFF1b3RlR2VuZXJhdG9ySW5uZXJDb24+XG4gICAgICAgICAgICAgICAgPFF1b3RlR2VuZXJhdG9yVGl0bGUgPlxuICAgICAgICAgICAgICAgICAgICBEYWlseSBJbnNwaXJhdGlvbiBHZW5lcmF0b3JcbiAgICAgICAgICAgICAgICA8L1F1b3RlR2VuZXJhdG9yVGl0bGU+XG4gICAgICAgICAgICAgICAgPFF1b3RlR2VuZXJhdG9yU3ViVGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIExvb2tpbmcgZm9yIGEgc3BsYXNoIG9mIGluc3BpcmF0aW9uPyBHZW5lcmF0ZSBhIHF1b3RlIGNhcmQgd2l0aCBhIHJhbmRvbSBpbnNwaXJhdGlvbmFsIHF1b3RlIHByb3ZpZGVkIGJ5PEZvb3RlckxpbmsgaHJlZj1cImh0dHBzOi8vemVucXVvdGVzLmlvL1wiXG4gICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9vcmVmZXJyZXJcIj4gWmVuUXVvdGVzQVBJXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgIDwvRm9vdGVyTGluaz4gXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvUXVvdGVHZW5lcmF0b3JTdWJUaXRsZT5cbiAgICAgICAgICAgICAgICA8R2VuZXJhdGVRdW90ZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEdlbmVyYXRlUXVvdGVCdXR0b25UZXh0IG9uQ2xpY2s9e251bGx9Pk1ha2UgYSBRdW90ZVxuICAgICAgICAgICAgICAgICAgICA8L0dlbmVyYXRlUXVvdGVCdXR0b25UZXh0PlxuICAgICAgICAgICAgICAgIDwvR2VuZXJhdGVRdW90ZUJ1dHRvbj5cbiAgICAgICAgICAgIDwvUXVvdGVHZW5lcmF0b3JJbm5lckNvbj5cbiAgICAgICAgPC9RdW90ZUdlbmVyYXRvckNvbj5cbiAgICAgICAgPC8+XG4gICAgICAgICAgIClcbiAgICB9XG4iXSwibmFtZXMiOlsiSGVhZCIsIkJhY2tncm91bmRJbWFnZTEiLCJCYWNrZ3JvdW5kSW1hZ2UyIiwiRm9vdGVyQ29uIiwiRm9vdGVyTGluayIsIkdlbmVyYXRlUXVvdGVCdXR0b24iLCJHZW5lcmF0ZVF1b3RlQnV0dG9uVGV4dCIsIkdyYWRpZW50QmFja2dyb3VuZENvbiIsIlF1b3RlR2VuZXJhdG9yQ29uIiwiUXVvdGVHZW5lcmF0b3JJbm5lckNvbiIsIlF1b3RlR2VuZXJhdG9yU3ViVGl0bGUiLCJRdW90ZUdlbmVyYXRvclRpdGxlIiwiUmVkU3BhbiIsImNsb3VkIiwicmFpbmluZyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwicXVvdGVzUXVlcnlOYW1lIiwiQVBJIiwiSG9tZSIsIm51bWJlck9mUXVvdGVzIiwic2V0TnVtYmVyT2ZRdW90ZXMiLCJ1cGRhdGVRdW90ZUluZm8iLCJncmFwaHFsIiwicXVlcnkiLCJhdXRoTW9kZSIsInZhcmlhYmxlcyIsInF1ZXJ5TmFtZSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});