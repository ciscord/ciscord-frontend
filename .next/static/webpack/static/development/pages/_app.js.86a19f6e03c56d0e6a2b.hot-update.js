webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/@apollo/client/index.js":
/*!**********************************************!*\
  !*** ./node_modules/@apollo/client/index.js ***!
  \**********************************************/
/*! exports provided: ApolloClient, mergeOptions, ObservableQuery, NetworkStatus, isApolloError, ApolloError, Cache, ApolloCache, InMemoryCache, MissingFieldError, defaultDataIdFromObject, makeVar, parseAndCheckHttpResponse, serializeFetchParameter, fallbackHttpConfig, defaultPrinter, selectHttpOptionsAndBody, selectHttpOptionsAndBodyInternal, checkFetcher, createSignalIfSupported, selectURI, createHttpLink, HttpLink, rewriteURIForGET, fromError, toPromise, fromPromise, throwServerError, Observable, isReference, makeReference, setLogVerbosity, gql, resetCaches, disableFragmentWarnings, enableExperimentalFragmentVariables, disableExperimentalFragmentVariables, ApolloProvider, ApolloConsumer, getApolloContext, resetApolloContext, DocumentType, operationName, parser, empty, from, split, concat, execute, ApolloLink, useApolloClient, useLazyQuery, useMutation, useQuery, useSubscription, useReactiveVar, useFragment_experimental */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/index.js */ "./node_modules/@apollo/client/core/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloClient", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["mergeOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservableQuery", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["ObservableQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkStatus", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["NetworkStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isApolloError", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["isApolloError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloError", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["ApolloError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["Cache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloCache", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["ApolloCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InMemoryCache", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MissingFieldError", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["MissingFieldError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultDataIdFromObject", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["defaultDataIdFromObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeVar", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["makeVar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAndCheckHttpResponse", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["parseAndCheckHttpResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serializeFetchParameter", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["serializeFetchParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fallbackHttpConfig", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["fallbackHttpConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultPrinter", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["defaultPrinter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectHttpOptionsAndBody", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["selectHttpOptionsAndBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectHttpOptionsAndBodyInternal", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["selectHttpOptionsAndBodyInternal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkFetcher", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["checkFetcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSignalIfSupported", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["createSignalIfSupported"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectURI", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["selectURI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHttpLink", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["createHttpLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpLink", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["HttpLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rewriteURIForGET", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["rewriteURIForGET"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromError", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["fromError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["toPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["fromPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwServerError", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["throwServerError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["Observable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReference", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["isReference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeReference", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["makeReference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLogVerbosity", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["setLogVerbosity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gql", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["gql"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetCaches", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["resetCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableFragmentWarnings", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["disableFragmentWarnings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableExperimentalFragmentVariables", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["enableExperimentalFragmentVariables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableExperimentalFragmentVariables", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["disableExperimentalFragmentVariables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["empty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "from", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["from"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "split", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["split"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["concat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["execute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloLink", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"]; });

/* harmony import */ var _react_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react/index.js */ "./node_modules/@apollo/client/react/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["ApolloProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloConsumer", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["ApolloConsumer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getApolloContext", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["getApolloContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetApolloContext", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["resetApolloContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentType", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["DocumentType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "operationName", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["operationName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parser", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["parser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useApolloClient", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["useApolloClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLazyQuery", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMutation", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["useMutation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["useQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSubscription", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["useSubscription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReactiveVar", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["useReactiveVar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFragment_experimental", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["useFragment_experimental"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@apollo/client/react/index.js ***!
  \****************************************************/
/*! exports provided: ApolloProvider, ApolloConsumer, getApolloContext, resetApolloContext, DocumentType, operationName, parser, useApolloClient, useLazyQuery, useMutation, useQuery, useSubscription, useReactiveVar, useFragment_experimental */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context/index.js */ "./node_modules/@apollo/client/react/context/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return _context_index_js__WEBPACK_IMPORTED_MODULE_1__["ApolloProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloConsumer", function() { return _context_index_js__WEBPACK_IMPORTED_MODULE_1__["ApolloConsumer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getApolloContext", function() { return _context_index_js__WEBPACK_IMPORTED_MODULE_1__["getApolloContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetApolloContext", function() { return _context_index_js__WEBPACK_IMPORTED_MODULE_1__["resetApolloContext"]; });

/* harmony import */ var _hooks_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/index.js */ "./node_modules/@apollo/client/react/hooks/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useApolloClient", function() { return _hooks_index_js__WEBPACK_IMPORTED_MODULE_2__["useApolloClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLazyQuery", function() { return _hooks_index_js__WEBPACK_IMPORTED_MODULE_2__["useLazyQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMutation", function() { return _hooks_index_js__WEBPACK_IMPORTED_MODULE_2__["useMutation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _hooks_index_js__WEBPACK_IMPORTED_MODULE_2__["useQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSubscription", function() { return _hooks_index_js__WEBPACK_IMPORTED_MODULE_2__["useSubscription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReactiveVar", function() { return _hooks_index_js__WEBPACK_IMPORTED_MODULE_2__["useReactiveVar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFragment_experimental", function() { return _hooks_index_js__WEBPACK_IMPORTED_MODULE_2__["useFragment_experimental"]; });

/* harmony import */ var _parser_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parser/index.js */ "./node_modules/@apollo/client/react/parser/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentType", function() { return _parser_index_js__WEBPACK_IMPORTED_MODULE_3__["DocumentType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "operationName", function() { return _parser_index_js__WEBPACK_IMPORTED_MODULE_3__["operationName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parser", function() { return _parser_index_js__WEBPACK_IMPORTED_MODULE_3__["parser"]; });

/* harmony import */ var _types_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types/types.js */ "./node_modules/@apollo/client/react/types/types.js");
/* empty/unused harmony star reexport */




//# sourceMappingURL=index.js.map

/***/ })

})
//# sourceMappingURL=_app.js.86a19f6e03c56d0e6a2b.hot-update.js.map