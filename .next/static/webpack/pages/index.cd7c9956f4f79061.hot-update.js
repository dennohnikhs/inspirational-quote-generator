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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_pkoriobasu_workspace_tutorials_next_js_inspirational_quote_generator_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_pkoriobasu_workspace_tutorials_next_js_inspirational_quote_generator_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js */ \"./node_modules/next/dist/compiled/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_pkoriobasu_workspace_tutorials_next_js_inspirational_quote_generator_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_pkoriobasu_workspace_tutorials_next_js_inspirational_quote_generator_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/quoteGenerator/quoteGeneratorElement */ \"./components/quoteGenerator/quoteGeneratorElement.tsx\");\n/* harmony import */ var _assets_clouds_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/clouds.png */ \"./assets/clouds.png\");\n/* harmony import */ var _assets_rain_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/rain.png */ \"./assets/rain.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _api_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api/_app */ \"./pages/api/_app.tsx\");\n/* harmony import */ var _src_graphql_queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/src/graphql/queries */ \"./src/graphql/queries.ts\");\n/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! aws-amplify */ \"./node_modules/@aws-amplify/api/lib-esm/API.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n\n\nvar _jsxFileName = \"/home/pkoriobasu/workspace/tutorials/next-js/inspirational-quote-generator/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n// components\n // assets\n\n\n\n // import '../styles/global.css'\n\n\n\n //interface for our Dynamo Db object\n\n\n\n\nfunction isGraphQLResultForquotesQueryName(response) {\n  return response.data && response.data.QuotesQueryName && response.data.QuotesQueryName.items;\n} //type guard for our fetch function\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0),\n      numberOfQuotes = _useState[0],\n      setNumberOfQuotes = _useState[1]; //function to fetch our DynamoDb Object (quotes generated)\n\n\n  var updateQuoteInfo = /*#__PURE__*/function () {\n    var _ref = (0,_home_pkoriobasu_workspace_tutorials_next_js_inspirational_quote_generator_node_modules_next_dist_compiled_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_home_pkoriobasu_workspace_tutorials_next_js_inspirational_quote_generator_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      var response, receivedNumberOfQuotes;\n      return _home_pkoriobasu_workspace_tutorials_next_js_inspirational_quote_generator_node_modules_next_dist_compiled_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return aws_amplify__WEBPACK_IMPORTED_MODULE_10__.API.graphql({\n                //info from quries that was autogenerated from src graphql\n                query: _src_graphql_queries__WEBPACK_IMPORTED_MODULE_8__.quotesQueryName,\n                authMode: \"AWS_IAM\",\n                //this is the string variable we created in the dynamodb\n                variables: {\n                  queryName: \"LIVE\"\n                }\n              });\n\n            case 3:\n              response = _context.sent;\n              console.log('response', response); // setNumberOfQuotes()\n              //create type guards\n\n              if (isGraphQLResultForquotesQueryName(response)) {\n                _context.next = 7;\n                break;\n              }\n\n              throw new Error(\"UnExpected response from API.graphql\");\n\n            case 7:\n              if (response.data) {\n                _context.next = 9;\n                break;\n              }\n\n              throw Error(\"Response data is undefined\");\n\n            case 9:\n              receivedNumberOfQuotes = response.data.QuotesQueryName.items[0].quotesGenerated;\n              setNumberOfQuotes(receivedNumberOfQuotes);\n              _context.next = 16;\n              break;\n\n            case 13:\n              _context.prev = 13;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(\"error getting quote data\", _context.t0);\n\n            case 16:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 13]]);\n    }));\n\n    return function updateQuoteInfo() {\n      return _ref.apply(this, arguments);\n    };\n  }(); //use useEffect component which invokes the callback after initial rendering (mounting), and on later renderings, if any value inside dependencies has changed\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function () {\n    updateQuoteInfo();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"title\", {\n        children: \"Inspirational  Quote Generator\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"fun project to generate quotes\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"meta\", {\n        name: \"viewport\",\n        content: \"width=dev-width,initial-scale=1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.icon\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.GradientBackgroundCon, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.BackgroundImage1, {\n        src: _assets_clouds_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        height: \"300\",\n        alt: \"cloudbackground1\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 14\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.BackgroundImage2, {\n        src: _assets_rain_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        height: \"300\",\n        alt: \"cloudbackground2\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 14\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.FooterCon, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {\n          children: [\"Quotes Generated:\", numberOfQuotes, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 14\n          }, this), \"Developed with  \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.RedSpan, {\n            children: \"\\u2764\\uFE0F\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 30\n          }, this), \" by \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.FooterLink, {\n            href: \"https://my-portfolio-hif6icsrf-davidsonlangat316-gmailcom.vercel.app/\",\n            target: \"_blank\",\n            rel: \"noopener noreferrer\",\n            children: \" @LangatDenis\\\"\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 55\n          }, this)]\n        }, void 0, true)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.QuoteGeneratorCon, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.QuoteGeneratorInnerCon, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.QuoteGeneratorTitle, {\n          children: \"Daily Inspiration Generator\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.QuoteGeneratorSubTitle, {\n          children: [\"Looking for a splash of inspiration? Generate a quote card with a random inspirational quote provided by\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.FooterLink, {\n            href: \"https://zenquotes.io/\",\n            target: \"_blank\",\n            rel: \"noopener nooreferrer\",\n            children: \" ZenQuotesAPI\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 125\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.GenerateQuoteButton, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_quoteGenerator_quoteGeneratorElement__WEBPACK_IMPORTED_MODULE_3__.GenerateQuoteButtonText, {\n            onClick: null,\n            children: \"Make a Quote\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"XBTzo9FCDK1YBlxB6CCoA9Xa9w4=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQUEsZ0NBQ2NXLGNBRGQsZUFFSjtZQUFBO1lBQUE7WUFBQTtVQUFBLFFBRkksbUNBR1ksOERBQUMscUZBQUQ7WUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUEsUUFIWix1QkFHcUMsOERBQUMsd0ZBQUQ7WUFBWSxJQUFJLEVBQUMsdUVBQWpCO1lBQ3pDLE1BQU0sRUFBQyxRQURrQztZQUN6QixHQUFHLEVBQUMscUJBRHFCO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLFFBSHJDO1FBQUE7TUFETDtRQUFBO1FBQUE7UUFBQTtNQUFBLFFBYko7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBUEEsZUFrQ0EsOERBQUMsK0ZBQUQ7TUFBQSx1QkFDSSw4REFBQyxvR0FBRDtRQUFBLHdCQUNJLDhEQUFDLGlHQUFEO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBREosZUFJSSw4REFBQyxvR0FBRDtVQUFBLG9JQUM0Ryw4REFBQyx3RkFBRDtZQUFZLElBQUksRUFBQyx1QkFBakI7WUFDL0csTUFBTSxFQUFDLFFBRHdHO1lBQy9GLEdBQUcsRUFBQyxzQkFEMkY7WUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBO1VBQUEsUUFENUc7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBLFFBSkosZUFXSSw4REFBQyxpR0FBRDtVQUFBLHVCQUNJLDhEQUFDLHFHQUFEO1lBQXlCLE9BQU8sRUFBRSxJQUFsQztZQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQURKO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFYSjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFESjtNQUFBO01BQUE7TUFBQTtJQUFBLFFBbENBO0VBQUEsZ0JBREo7QUF1REM7O0dBN0ZtQkQ7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuLy8gY29tcG9uZW50c1xuaW1wb3J0IHsgQmFja2dyb3VuZEltYWdlMSwgQmFja2dyb3VuZEltYWdlMiwgRm9vdGVyQ29uLCBGb290ZXJMaW5rLCBHZW5lcmF0ZVF1b3RlQnV0dG9uLCBHZW5lcmF0ZVF1b3RlQnV0dG9uVGV4dCwgR3JhZGllbnRCYWNrZ3JvdW5kQ29uLCBRdW90ZUdlbmVyYXRvckNvbiwgUXVvdGVHZW5lcmF0b3JJbm5lckNvbiwgUXVvdGVHZW5lcmF0b3JTdWJUaXRsZSwgUXVvdGVHZW5lcmF0b3JUaXRsZSwgUmVkU3BhbiB9IGZyb20gJ0AvY29tcG9uZW50cy9xdW90ZUdlbmVyYXRvci9xdW90ZUdlbmVyYXRvckVsZW1lbnQnXG4vLyBhc3NldHNcbmltcG9ydCBjbG91ZCBmcm9tIFwiLi4vYXNzZXRzL2Nsb3Vkcy5wbmdcIlxuaW1wb3J0IHJhaW5pbmcgZnJvbSBcIi4uL2Fzc2V0cy9yYWluLnBuZ1wiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuY3NzJ1xuaW1wb3J0IFwiLi9hcGkvX2FwcFwiXG5pbXBvcnQgeyB1cGRhdGVRdW90ZUFwcERhdGEgfSBmcm9tICdAL3NyYy9ncmFwaHFsL211dGF0aW9ucydcbmltcG9ydCB7IHF1b3Rlc1F1ZXJ5TmFtZSB9IGZyb20gJ0Avc3JjL2dyYXBocWwvcXVlcmllcydcbmltcG9ydCB7R3JhcGhRTFJlc3VsdH0gZnJvbSAnQGF3cy1hbXBsaWZ5L2FwaS1ncmFwaHFsJ1xuaW1wb3J0IHsgQVBJIH0gZnJvbSAnYXdzLWFtcGxpZnknXG4vL2ludGVyZmFjZSBmb3Igb3VyIER5bmFtbyBEYiBvYmplY3RcblxuaW50ZXJmYWNlIFVwZGF0ZVF1b3RlSW5mb0RhdGF7XG4gICAgaWQ6IHN0cmluZ1xuICBxdWVyeU5hbWU6IHN0cmluZ1xuICBxdW90ZXNHZW5lcmF0ZWQ6IG51bWJlclxuICBjcmVhdGVkQXQ6IHN0cmluZ1xuICB1cGRhdGVkQXQ6IHN0cmluZ1xufVxuZnVuY3Rpb24gaXNHcmFwaFFMUmVzdWx0Rm9ycXVvdGVzUXVlcnlOYW1lKHJlc3BvbnNlOiBhbnkpOiByZXNwb25zZSBpcyBHcmFwaFFMUmVzdWx0PHtcbiAgICBRdW90ZXNRdWVyeU5hbWU6e1xuICAgICAgICBpdGVtczpbVXBkYXRlUXVvdGVJbmZvRGF0YV1cbiAgICB9XG59Plxue3JldHVybiByZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuUXVvdGVzUXVlcnlOYW1lICYmIHJlc3BvbnNlLmRhdGEuUXVvdGVzUXVlcnlOYW1lLml0ZW1zfVxuLy90eXBlIGd1YXJkIGZvciBvdXIgZmV0Y2ggZnVuY3Rpb25cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKXtcbiAgICBjb25zdCBbbnVtYmVyT2ZRdW90ZXMsc2V0TnVtYmVyT2ZRdW90ZXNdID0gdXNlU3RhdGU8TnVtYmVyfG51bGw+KDApXG4gICAgLy9mdW5jdGlvbiB0byBmZXRjaCBvdXIgRHluYW1vRGIgT2JqZWN0IChxdW90ZXMgZ2VuZXJhdGVkKVxuICAgIGNvbnN0IHVwZGF0ZVF1b3RlSW5mbyA9IGFzeW5jICgpID0+e1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vZmV0Y2ggZGF0YSBmcm9tIHRoZSBkeW5hbW9kYiB1c2luZyB0aGUgQVBJIFxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBUEkuZ3JhcGhxbDxVcGRhdGVRdW90ZUluZm9EYXRhPih7XG4gICAgICAgICAgICAgICAgLy9pbmZvIGZyb20gcXVyaWVzIHRoYXQgd2FzIGF1dG9nZW5lcmF0ZWQgZnJvbSBzcmMgZ3JhcGhxbFxuICAgICAgICAgICAgICAgIHF1ZXJ5OnF1b3Rlc1F1ZXJ5TmFtZSxcbiAgICAgICAgICAgIGF1dGhNb2RlOlwiQVdTX0lBTVwiLFxuICAgICAgICAgICAgLy90aGlzIGlzIHRoZSBzdHJpbmcgdmFyaWFibGUgd2UgY3JlYXRlZCBpbiB0aGUgZHluYW1vZGJcbiAgICAgICAgICAgIHZhcmlhYmxlczp7XG4gICAgICAgICAgICBxdWVyeU5hbWU6XCJMSVZFXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlJyxyZXNwb25zZSlcbiAgICAgICAgICAgIC8vIHNldE51bWJlck9mUXVvdGVzKClcbiAgICAgICAgICAgIC8vY3JlYXRlIHR5cGUgZ3VhcmRzXG4gICAgICAgICAgICBpZighaXNHcmFwaFFMUmVzdWx0Rm9ycXVvdGVzUXVlcnlOYW1lKHJlc3BvbnNlKSl7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIChcIlVuRXhwZWN0ZWQgcmVzcG9uc2UgZnJvbSBBUEkuZ3JhcGhxbFwiKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoIXJlc3BvbnNlLmRhdGEpe1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yIChcIlJlc3BvbnNlIGRhdGEgaXMgdW5kZWZpbmVkXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWNlaXZlZE51bWJlck9mUXVvdGVzID0gcmVzcG9uc2UuZGF0YS5RdW90ZXNRdWVyeU5hbWUuaXRlbXNbMF0ucXVvdGVzR2VuZXJhdGVkO1xuICAgICAgICAgICAgc2V0TnVtYmVyT2ZRdW90ZXMocmVjZWl2ZWROdW1iZXJPZlF1b3RlcylcbiAgICAgICAgfWNhdGNoIChlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGdldHRpbmcgcXVvdGUgZGF0YVwiLGVycm9yKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy91c2UgdXNlRWZmZWN0IGNvbXBvbmVudCB3aGljaCBpbnZva2VzIHRoZSBjYWxsYmFjayBhZnRlciBpbml0aWFsIHJlbmRlcmluZyAobW91bnRpbmcpLCBhbmQgb24gbGF0ZXIgcmVuZGVyaW5ncywgaWYgYW55IHZhbHVlIGluc2lkZSBkZXBlbmRlbmNpZXMgaGFzIGNoYW5nZWRcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgdXBkYXRlUXVvdGVJbmZvKClcbiAgICB9LFtdKVxuICAgICBcbiAgICByZXR1cm4oXG4gICAgICAgIDw+IFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5JbnNwaXJhdGlvbmFsICBRdW90ZSBHZW5lcmF0b3I8L3RpdGxlPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cImZ1biBwcm9qZWN0IHRvIGdlbmVyYXRlIHF1b3Rlc1wiLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXYtd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvblwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPEdyYWRpZW50QmFja2dyb3VuZENvbj5cbiAgICAgICAgey8qIEJhY2tncm91bmQgaW1hZ2VzICovfVxuICAgICAgICAgICAgIDxCYWNrZ3JvdW5kSW1hZ2UxXG4gICAgICAgICAgICAgc3JjPXtjbG91ZH1cbiAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBcIlxuICAgICAgICAgICAgIGFsdD1cImNsb3VkYmFja2dyb3VuZDFcIlxuICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgPEJhY2tncm91bmRJbWFnZTJcbiAgICAgICAgICAgICBzcmM9e3JhaW5pbmd9XG4gICAgICAgICAgICAgaGVpZ2h0PVwiMzAwXCJcbiAgICAgICAgICAgICBhbHQ9XCJjbG91ZGJhY2tncm91bmQyXCJcbiAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgIHsvKiBmb290ZXIgICovfVxuICAgICAgICAgICAgPEZvb3RlckNvbj5cbiAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICBRdW90ZXMgR2VuZXJhdGVkOntudW1iZXJPZlF1b3Rlc31cbiAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICBEZXZlbG9wZWQgd2l0aCAgPFJlZFNwYW4+4p2k77iPPC9SZWRTcGFuPiBieSA8Rm9vdGVyTGluayBocmVmPVwiaHR0cHM6Ly9teS1wb3J0Zm9saW8taGlmNmljc3JmLWRhdmlkc29ubGFuZ2F0MzE2LWdtYWlsY29tLnZlcmNlbC5hcHAvXCJcbiAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+IEBMYW5nYXREZW5pc1wiXG4gICAgICAgICAgICAgPC9Gb290ZXJMaW5rPiBcbiAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIDwvRm9vdGVyQ29uPlxuXG4gICAgICAgIDwvR3JhZGllbnRCYWNrZ3JvdW5kQ29uPlxuICAgICAgICB7LyogUXVvdGUgR2VuZXJhdG9yIG1vZGFsIHBvcC11cCAqL31cbiAgICAgICAgey8qIDxRdW90ZUdlbmVyYXRvck1vZGFsIC8+ICovfVxuICAgICAgICB7LyogUXVvdGVHZW5lcmF0b3IgKi99XG4gICAgICAgIDxRdW90ZUdlbmVyYXRvckNvbj5cbiAgICAgICAgICAgIDxRdW90ZUdlbmVyYXRvcklubmVyQ29uPlxuICAgICAgICAgICAgICAgIDxRdW90ZUdlbmVyYXRvclRpdGxlID5cbiAgICAgICAgICAgICAgICAgICAgRGFpbHkgSW5zcGlyYXRpb24gR2VuZXJhdG9yXG4gICAgICAgICAgICAgICAgPC9RdW90ZUdlbmVyYXRvclRpdGxlPlxuICAgICAgICAgICAgICAgIDxRdW90ZUdlbmVyYXRvclN1YlRpdGxlPlxuICAgICAgICAgICAgICAgICAgICBMb29raW5nIGZvciBhIHNwbGFzaCBvZiBpbnNwaXJhdGlvbj8gR2VuZXJhdGUgYSBxdW90ZSBjYXJkIHdpdGggYSByYW5kb20gaW5zcGlyYXRpb25hbCBxdW90ZSBwcm92aWRlZCBieTxGb290ZXJMaW5rIGhyZWY9XCJodHRwczovL3plbnF1b3Rlcy5pby9cIlxuICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vb3JlZmVycmVyXCI+IFplblF1b3Rlc0FQSVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICA8L0Zvb3Rlckxpbms+IFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L1F1b3RlR2VuZXJhdG9yU3ViVGl0bGU+XG4gICAgICAgICAgICAgICAgPEdlbmVyYXRlUXVvdGVCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxHZW5lcmF0ZVF1b3RlQnV0dG9uVGV4dCBvbkNsaWNrPXtudWxsfT5NYWtlIGEgUXVvdGVcbiAgICAgICAgICAgICAgICAgICAgPC9HZW5lcmF0ZVF1b3RlQnV0dG9uVGV4dD5cbiAgICAgICAgICAgICAgICA8L0dlbmVyYXRlUXVvdGVCdXR0b24+XG4gICAgICAgICAgICA8L1F1b3RlR2VuZXJhdG9ySW5uZXJDb24+XG4gICAgICAgIDwvUXVvdGVHZW5lcmF0b3JDb24+XG4gICAgICAgIDwvPlxuICAgICAgICAgICApXG4gICAgfVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJCYWNrZ3JvdW5kSW1hZ2UxIiwiQmFja2dyb3VuZEltYWdlMiIsIkZvb3RlckNvbiIsIkZvb3RlckxpbmsiLCJHZW5lcmF0ZVF1b3RlQnV0dG9uIiwiR2VuZXJhdGVRdW90ZUJ1dHRvblRleHQiLCJHcmFkaWVudEJhY2tncm91bmRDb24iLCJRdW90ZUdlbmVyYXRvckNvbiIsIlF1b3RlR2VuZXJhdG9ySW5uZXJDb24iLCJRdW90ZUdlbmVyYXRvclN1YlRpdGxlIiwiUXVvdGVHZW5lcmF0b3JUaXRsZSIsIlJlZFNwYW4iLCJjbG91ZCIsInJhaW5pbmciLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInF1b3Rlc1F1ZXJ5TmFtZSIsIkFQSSIsImlzR3JhcGhRTFJlc3VsdEZvcnF1b3Rlc1F1ZXJ5TmFtZSIsInJlc3BvbnNlIiwiZGF0YSIsIlF1b3Rlc1F1ZXJ5TmFtZSIsIml0ZW1zIiwiSG9tZSIsIm51bWJlck9mUXVvdGVzIiwic2V0TnVtYmVyT2ZRdW90ZXMiLCJ1cGRhdGVRdW90ZUluZm8iLCJncmFwaHFsIiwicXVlcnkiLCJhdXRoTW9kZSIsInZhcmlhYmxlcyIsInF1ZXJ5TmFtZSIsImNvbnNvbGUiLCJsb2ciLCJFcnJvciIsInJlY2VpdmVkTnVtYmVyT2ZRdW90ZXMiLCJxdW90ZXNHZW5lcmF0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});