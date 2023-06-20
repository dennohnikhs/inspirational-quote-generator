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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_pkoriobasu_workspace_tutorials_next_js_inspirational_quote_generator_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_pkoriobasu_workspace_tutorials_next_js_inspirational_quote_generator_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_pkoriobasu_workspace_tutorials_next_js_inspirational_quote_generator_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_pkoriobasu_workspace_tutorials_next_js_inspirational_quote_generator_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/quoteGenerator/quoteGeneratorElement */ \"./components/quoteGenerator/quoteGeneratorElement.tsx\");\n/* harmony import */ var _assets_clouds_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/clouds.png */ \"./assets/clouds.png\");\n/* harmony import */ var _assets_rain_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/rain.png */ \"./assets/rain.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _api_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/_app */ \"./pages/api/_app.tsx\");\n/* harmony import */ var _src_graphql_queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/src/graphql/queries */ \"./src/graphql/queries.ts\");\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! aws-amplify */ \"./node_modules/@aws-amplify/api/lib-esm/API.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n\n\nvar _jsxFileName = \"/home/pkoriobasu/workspace/tutorials/next-js/inspirational-quote-generator/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n// components\n // assets\n\n\n\n // import '../styles/global.css'\n\n\n\n //interface for our Dynamo Db object\n\n\n\n\nfunction isGraphQLResultForquotesQueryName(response) {\n  return response.data && response.data.quotesQueryName && response.data.quotesQueryName.items;\n} //type guard for our fetch function\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),\n      numberOfQuotes = _useState[0],\n      setNumberOfQuotes = _useState[1]; //function to fetch our DynamoDb Object (quotes generated)\n\n\n  var updateQuoteInfo = /*#__PURE__*/function () {\n    var _ref = (0,_home_pkoriobasu_workspace_tutorials_next_js_inspirational_quote_generator_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_home_pkoriobasu_workspace_tutorials_next_js_inspirational_quote_generator_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var response, receivedNumberOfQuotes;\n      return _home_pkoriobasu_workspace_tutorials_next_js_inspirational_quote_generator_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return aws_amplify__WEBPACK_IMPORTED_MODULE_10__.API.graphql({\n                //info from quries that was autogenerated from src graphql\n                query: _src_graphql_queries__WEBPACK_IMPORTED_MODULE_8__.quotesQueryName,\n                authMode: \"AWS_IAM\",\n                //this is the string variable we created in the dynamodb\n                variables: {\n                  queryName: \"LIVE\"\n                }\n              });\n\n            case 3:\n              response = _context.sent;\n\n              if (isGraphQLResultForquotesQueryName(response)) {\n                _context.next = 6;\n                break;\n              }\n\n              throw new Error(\"UnExpected response from API.graphql\");\n\n            case 6:\n              if (response.data) {\n                _context.next = 8;\n                break;\n              }\n\n              throw Error(\"Response data is undefined\");\n\n            case 8:\n              receivedNumberOfQuotes = response.data.quotesQueryName.items[0].quotesGenerated;\n              setNumberOfQuotes(receivedNumberOfQuotes);\n              _context.next = 15;\n              break;\n\n            case 12:\n              _context.prev = 12;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(\"error getting quote data\", _context.t0);\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 12]]);\n    }));\n\n    return function updateQuoteInfo() {\n      return _ref.apply(this, arguments);\n    };\n  }(); //use useEffect component which invokes the callback after initial rendering (mounting), and on later renderings, if any value inside dependencies has changed\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {\n    updateQuoteInfo();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"title\", {\n        children: \"Inspirational  Quote Generator\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"fun project to generate quotes\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"width=dev-width,initial-scale=1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.icon\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.GradientBackgroundCon, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.BackgroundImage1, {\n        src: _assets_clouds_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        height: \"300\",\n        alt: \"cloudbackground1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 14\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.BackgroundImage2, {\n        src: _assets_rain_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        height: \"300\",\n        alt: \"cloudbackground2\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 14\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.FooterCon, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {\n          children: [\"Quotes Generated:\", numberOfQuotes, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 14\n          }, this), \"Developed with  \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.RedSpan, {\n            children: \"\\u2764\\uFE0F\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 30\n          }, this), \" by \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.FooterLink, {\n            href: \"https://my-portfolio-hif6icsrf-davidsonlangat316-gmailcom.vercel.app/\",\n            target: \"_blank\",\n            rel: \"noopener noreferrer\",\n            children: \" @LangatDenis\\\"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 55\n          }, this)]\n        }, void 0, true)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.QuoteGeneratorCon, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.QuoteGeneratorInnerCon, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.QuoteGeneratorTitle, {\n          children: \"Daily Inspiration Generator\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.QuoteGeneratorSubTitle, {\n          children: [\"Looking for a splash of inspiration? Generate a quote card with a random inspirational quote provided by\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.FooterLink, {\n            href: \"https://zenquotes.io/\",\n            target: \"_blank\",\n            rel: \"noopener nooreferrer\",\n            children: \" ZenQuotesAPI\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 125\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.GenerateQuoteButton, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.GenerateQuoteButtonText, {\n            onClick: null,\n            children: \"Make a Quote\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"XBTzo9FCDK1YBlxB6CCoA9Xa9w4=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFFBSFosdUJBR3FDLDhEQUFDLHdGQUFEO1lBQVksSUFBSSxFQUFDLHVFQUFqQjtZQUN6QyxNQUFNLEVBQUMsUUFEa0M7WUFDekIsR0FBRyxFQUFDLHFCQURxQjtZQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQSxRQUhyQztRQUFBO01BREw7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQWJKO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQVBBLGVBa0NBLDhEQUFDLCtGQUFEO01BQUEsdUJBQ0ksOERBQUMsb0dBQUQ7UUFBQSx3QkFDSSw4REFBQyxpR0FBRDtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQURKLGVBSUksOERBQUMsb0dBQUQ7VUFBQSxvSUFDNEcsOERBQUMsd0ZBQUQ7WUFBWSxJQUFJLEVBQUMsdUJBQWpCO1lBQy9HLE1BQU0sRUFBQyxRQUR3RztZQUMvRixHQUFHLEVBQUMsc0JBRDJGO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFFBRDVHO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQUpKLGVBV0ksOERBQUMsaUdBQUQ7VUFBQSx1QkFDSSw4REFBQyxxR0FBRDtZQUF5QixPQUFPLEVBQUUsSUFBbEM7WUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFESjtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBWEo7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREo7TUFBQTtNQUFBO01BQUE7SUFBQSxRQWxDQTtFQUFBLGdCQURKO0FBdURDOztHQTdGbUJEOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbi8vIGNvbXBvbmVudHNcbmltcG9ydCB7IEJhY2tncm91bmRJbWFnZTEsIEJhY2tncm91bmRJbWFnZTIsIEZvb3RlckNvbiwgRm9vdGVyTGluaywgR2VuZXJhdGVRdW90ZUJ1dHRvbiwgR2VuZXJhdGVRdW90ZUJ1dHRvblRleHQsIEdyYWRpZW50QmFja2dyb3VuZENvbiwgUXVvdGVHZW5lcmF0b3JDb24sIFF1b3RlR2VuZXJhdG9ySW5uZXJDb24sIFF1b3RlR2VuZXJhdG9yU3ViVGl0bGUsIFF1b3RlR2VuZXJhdG9yVGl0bGUsIFJlZFNwYW4gfSBmcm9tICdAL2NvbXBvbmVudHMvcXVvdGVHZW5lcmF0b3IvcXVvdGVHZW5lcmF0b3JFbGVtZW50J1xuLy8gYXNzZXRzXG5pbXBvcnQgY2xvdWQgZnJvbSBcIi4uL2Fzc2V0cy9jbG91ZHMucG5nXCJcbmltcG9ydCByYWluaW5nIGZyb20gXCIuLi9hc3NldHMvcmFpbi5wbmdcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcydcbmltcG9ydCBcIi4vYXBpL19hcHBcIlxuaW1wb3J0IHsgdXBkYXRlUXVvdGVBcHBEYXRhIH0gZnJvbSAnQC9zcmMvZ3JhcGhxbC9tdXRhdGlvbnMnXG5pbXBvcnQgeyBxdW90ZXNRdWVyeU5hbWUgfSBmcm9tICdAL3NyYy9ncmFwaHFsL3F1ZXJpZXMnXG5pbXBvcnQge0dyYXBoUUxSZXN1bHR9IGZyb20gJ0Bhd3MtYW1wbGlmeS9hcGktZ3JhcGhxbCdcbmltcG9ydCB7IEFQSSB9IGZyb20gJ2F3cy1hbXBsaWZ5J1xuLy9pbnRlcmZhY2UgZm9yIG91ciBEeW5hbW8gRGIgb2JqZWN0XG5cbmludGVyZmFjZSBVcGRhdGVRdW90ZUluZm9EYXRhe1xuICAgIGlkOiBzdHJpbmdcbiAgcXVlcnlOYW1lOiBzdHJpbmdcbiAgcXVvdGVzR2VuZXJhdGVkOiBudW1iZXJcbiAgY3JlYXRlZEF0OiBzdHJpbmdcbiAgdXBkYXRlZEF0OiBzdHJpbmdcbn1cbmZ1bmN0aW9uIGlzR3JhcGhRTFJlc3VsdEZvcnF1b3Rlc1F1ZXJ5TmFtZShyZXNwb25zZTogYW55KTogcmVzcG9uc2UgaXMgR3JhcGhRTFJlc3VsdDx7XG4gICAgcXVvdGVzUXVlcnlOYW1lOntcbiAgICAgICAgaXRlbXM6W1VwZGF0ZVF1b3RlSW5mb0RhdGFdXG4gICAgfVxufT5cbntyZXR1cm4gcmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLnF1b3Rlc1F1ZXJ5TmFtZSAmJiByZXNwb25zZS5kYXRhLnF1b3Rlc1F1ZXJ5TmFtZS5pdGVtc31cbi8vdHlwZSBndWFyZCBmb3Igb3VyIGZldGNoIGZ1bmN0aW9uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCl7XG4gICAgY29uc3QgW251bWJlck9mUXVvdGVzLHNldE51bWJlck9mUXVvdGVzXSA9IHVzZVN0YXRlPE51bWJlcnxudWxsPigwKVxuICAgIC8vZnVuY3Rpb24gdG8gZmV0Y2ggb3VyIER5bmFtb0RiIE9iamVjdCAocXVvdGVzIGdlbmVyYXRlZClcbiAgICBjb25zdCB1cGRhdGVRdW90ZUluZm8gPSBhc3luYyAoKSA9PntcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL2ZldGNoIGRhdGEgZnJvbSB0aGUgZHluYW1vZGIgdXNpbmcgdGhlIEFQSSBcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQVBJLmdyYXBocWw8VXBkYXRlUXVvdGVJbmZvRGF0YT4oe1xuICAgICAgICAgICAgICAgIC8vaW5mbyBmcm9tIHF1cmllcyB0aGF0IHdhcyBhdXRvZ2VuZXJhdGVkIGZyb20gc3JjIGdyYXBocWxcbiAgICAgICAgICAgICAgICBxdWVyeTpxdW90ZXNRdWVyeU5hbWUsXG4gICAgICAgICAgICBhdXRoTW9kZTpcIkFXU19JQU1cIixcbiAgICAgICAgICAgIC8vdGhpcyBpcyB0aGUgc3RyaW5nIHZhcmlhYmxlIHdlIGNyZWF0ZWQgaW4gdGhlIGR5bmFtb2RiXG4gICAgICAgICAgICB2YXJpYWJsZXM6e1xuICAgICAgICAgICAgcXVlcnlOYW1lOlwiTElWRVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNwb25zZScscmVzcG9uc2UpXG4gICAgICAgICAgICAvLyBzZXROdW1iZXJPZlF1b3RlcygpXG4gICAgICAgICAgICAvL2NyZWF0ZSB0eXBlIGd1YXJkc1xuICAgICAgICAgICAgaWYoIWlzR3JhcGhRTFJlc3VsdEZvcnF1b3Rlc1F1ZXJ5TmFtZShyZXNwb25zZSkpe1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciAoXCJVbkV4cGVjdGVkIHJlc3BvbnNlIGZyb20gQVBJLmdyYXBocWxcIik7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCFyZXNwb25zZS5kYXRhKXtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvciAoXCJSZXNwb25zZSBkYXRhIGlzIHVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVjZWl2ZWROdW1iZXJPZlF1b3RlcyA9IHJlc3BvbnNlLmRhdGEucXVvdGVzUXVlcnlOYW1lLml0ZW1zWzBdLnF1b3Rlc0dlbmVyYXRlZDtcbiAgICAgICAgICAgIHNldE51bWJlck9mUXVvdGVzKHJlY2VpdmVkTnVtYmVyT2ZRdW90ZXMpXG4gICAgICAgIH1jYXRjaCAoZXJyb3Ipe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBnZXR0aW5nIHF1b3RlIGRhdGFcIixlcnJvcilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vdXNlIHVzZUVmZmVjdCBjb21wb25lbnQgd2hpY2ggaW52b2tlcyB0aGUgY2FsbGJhY2sgYWZ0ZXIgaW5pdGlhbCByZW5kZXJpbmcgKG1vdW50aW5nKSwgYW5kIG9uIGxhdGVyIHJlbmRlcmluZ3MsIGlmIGFueSB2YWx1ZSBpbnNpZGUgZGVwZW5kZW5jaWVzIGhhcyBjaGFuZ2VkXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIHVwZGF0ZVF1b3RlSW5mbygpXG4gICAgfSxbXSlcbiAgICAgXG4gICAgcmV0dXJuKFxuICAgICAgICA8PiBcbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+SW5zcGlyYXRpb25hbCAgUXVvdGUgR2VuZXJhdG9yPC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJmdW4gcHJvamVjdCB0byBnZW5lcmF0ZSBxdW90ZXNcIi8+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2LXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb25cIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxHcmFkaWVudEJhY2tncm91bmRDb24+XG4gICAgICAgIHsvKiBCYWNrZ3JvdW5kIGltYWdlcyAqL31cbiAgICAgICAgICAgICA8QmFja2dyb3VuZEltYWdlMVxuICAgICAgICAgICAgIHNyYz17Y2xvdWR9XG4gICAgICAgICAgICAgaGVpZ2h0PVwiMzAwXCJcbiAgICAgICAgICAgICBhbHQ9XCJjbG91ZGJhY2tncm91bmQxXCJcbiAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgIDxCYWNrZ3JvdW5kSW1hZ2UyXG4gICAgICAgICAgICAgc3JjPXtyYWluaW5nfVxuICAgICAgICAgICAgIGhlaWdodD1cIjMwMFwiXG4gICAgICAgICAgICAgYWx0PVwiY2xvdWRiYWNrZ3JvdW5kMlwiXG4gICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICB7LyogZm9vdGVyICAqL31cbiAgICAgICAgICAgIDxGb290ZXJDb24+XG4gICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgUXVvdGVzIEdlbmVyYXRlZDp7bnVtYmVyT2ZRdW90ZXN9XG4gICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgRGV2ZWxvcGVkIHdpdGggIDxSZWRTcGFuPuKdpO+4jzwvUmVkU3Bhbj4gYnkgPEZvb3RlckxpbmsgaHJlZj1cImh0dHBzOi8vbXktcG9ydGZvbGlvLWhpZjZpY3NyZi1kYXZpZHNvbmxhbmdhdDMxNi1nbWFpbGNvbS52ZXJjZWwuYXBwL1wiXG4gICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPiBATGFuZ2F0RGVuaXNcIlxuICAgICAgICAgICAgIDwvRm9vdGVyTGluaz4gXG4gICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICA8L0Zvb3RlckNvbj5cblxuICAgICAgICA8L0dyYWRpZW50QmFja2dyb3VuZENvbj5cbiAgICAgICAgey8qIFF1b3RlIEdlbmVyYXRvciBtb2RhbCBwb3AtdXAgKi99XG4gICAgICAgIHsvKiA8UXVvdGVHZW5lcmF0b3JNb2RhbCAvPiAqL31cbiAgICAgICAgey8qIFF1b3RlR2VuZXJhdG9yICovfVxuICAgICAgICA8UXVvdGVHZW5lcmF0b3JDb24+XG4gICAgICAgICAgICA8UXVvdGVHZW5lcmF0b3JJbm5lckNvbj5cbiAgICAgICAgICAgICAgICA8UXVvdGVHZW5lcmF0b3JUaXRsZSA+XG4gICAgICAgICAgICAgICAgICAgIERhaWx5IEluc3BpcmF0aW9uIEdlbmVyYXRvclxuICAgICAgICAgICAgICAgIDwvUXVvdGVHZW5lcmF0b3JUaXRsZT5cbiAgICAgICAgICAgICAgICA8UXVvdGVHZW5lcmF0b3JTdWJUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgTG9va2luZyBmb3IgYSBzcGxhc2ggb2YgaW5zcGlyYXRpb24/IEdlbmVyYXRlIGEgcXVvdGUgY2FyZCB3aXRoIGEgcmFuZG9tIGluc3BpcmF0aW9uYWwgcXVvdGUgcHJvdmlkZWQgYnk8Rm9vdGVyTGluayBocmVmPVwiaHR0cHM6Ly96ZW5xdW90ZXMuaW8vXCJcbiAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub29yZWZlcnJlclwiPiBaZW5RdW90ZXNBUElcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgPC9Gb290ZXJMaW5rPiBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9RdW90ZUdlbmVyYXRvclN1YlRpdGxlPlxuICAgICAgICAgICAgICAgIDxHZW5lcmF0ZVF1b3RlQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8R2VuZXJhdGVRdW90ZUJ1dHRvblRleHQgb25DbGljaz17bnVsbH0+TWFrZSBhIFF1b3RlXG4gICAgICAgICAgICAgICAgICAgIDwvR2VuZXJhdGVRdW90ZUJ1dHRvblRleHQ+XG4gICAgICAgICAgICAgICAgPC9HZW5lcmF0ZVF1b3RlQnV0dG9uPlxuICAgICAgICAgICAgPC9RdW90ZUdlbmVyYXRvcklubmVyQ29uPlxuICAgICAgICA8L1F1b3RlR2VuZXJhdG9yQ29uPlxuICAgICAgICA8Lz5cbiAgICAgICAgICAgKVxuICAgIH1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiQmFja2dyb3VuZEltYWdlMSIsIkJhY2tncm91bmRJbWFnZTIiLCJGb290ZXJDb24iLCJGb290ZXJMaW5rIiwiR2VuZXJhdGVRdW90ZUJ1dHRvbiIsIkdlbmVyYXRlUXVvdGVCdXR0b25UZXh0IiwiR3JhZGllbnRCYWNrZ3JvdW5kQ29uIiwiUXVvdGVHZW5lcmF0b3JDb24iLCJRdW90ZUdlbmVyYXRvcklubmVyQ29uIiwiUXVvdGVHZW5lcmF0b3JTdWJUaXRsZSIsIlF1b3RlR2VuZXJhdG9yVGl0bGUiLCJSZWRTcGFuIiwiY2xvdWQiLCJyYWluaW5nIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJxdW90ZXNRdWVyeU5hbWUiLCJBUEkiLCJpc0dyYXBoUUxSZXN1bHRGb3JxdW90ZXNRdWVyeU5hbWUiLCJyZXNwb25zZSIsImRhdGEiLCJpdGVtcyIsIkhvbWUiLCJudW1iZXJPZlF1b3RlcyIsInNldE51bWJlck9mUXVvdGVzIiwidXBkYXRlUXVvdGVJbmZvIiwiZ3JhcGhxbCIsInF1ZXJ5IiwiYXV0aE1vZGUiLCJ2YXJpYWJsZXMiLCJxdWVyeU5hbWUiLCJFcnJvciIsInJlY2VpdmVkTnVtYmVyT2ZRdW90ZXMiLCJxdW90ZXNHZW5lcmF0ZWQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});