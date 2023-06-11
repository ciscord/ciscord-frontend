(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./components/Chat/Input/TypingStatus/TypingStatus.js":
/*!************************************************************!*\
  !*** ./components/Chat/Input/TypingStatus/TypingStatus.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var utils_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! utils/config */ "./utils/config.js");
/* harmony import */ var context_UserContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! context/UserContext */ "./context/UserContext.js");
/* harmony import */ var _TypingStatus_styled__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TypingStatus.styled */ "./components/Chat/Input/TypingStatus/TypingStatus.styled.js");









var _templateObject,
  _this = undefined,
  _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/Chat/Input/TypingStatus/TypingStatus.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }) : _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a ? _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)) : ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } return target; }







var USER_TYPING_STATUS = graphql_tag__WEBPACK_IMPORTED_MODULE_12___default()(_templateObject || (_templateObject = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  subscription userTypingStatus($channelUrl: String, $tenant: String, $username: String) {\n    userTypingStatus(channelUrl: $channelUrl, tenant: $tenant, username: $username) {\n      username\n      isTyping\n    }\n  }\n"])));
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])([]),
    typingUsers = _useState[0],
    setTypingUsers = _useState[1];
  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])({}),
    typingTimeouts = _useState2[0],
    setTypingTimeouts = _useState2[1];
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_9__["useContext"])(context_UserContext__WEBPACK_IMPORTED_MODULE_14__["UserContext"]),
    user = _useContext.user;
  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])(),
    _useRouter$query = _useRouter.query,
    channelUrl = _useRouter$query.channel,
    communityUrl = _useRouter$query.community;
  var url = "".concat(communityUrl, "/").concat(channelUrl);
  var startTimeout = function startTimeout(username) {
    var timeout = {};
    timeout[username] = setTimeout(function () {
      setTypingUsers(function (currentTypingUsers) {
        return currentTypingUsers.filter(function (typingUsername) {
          return typingUsername !== username;
        });
      });
    }, 3000);
    setTypingTimeouts(_objectSpread({
      typingTimeouts: typingTimeouts
    }, timeout));
  };
  Object(_apollo_client__WEBPACK_IMPORTED_MODULE_11__["useSubscription"])(USER_TYPING_STATUS, {
    variables: {
      channelUrl: url,
      tenant: Object(utils_config__WEBPACK_IMPORTED_MODULE_13__["COMPANY_NAME"])(),
      username: user && user.username || ''
    },
    onSubscriptionData: function onSubscriptionData(_ref) {
      var userTypingStatus = _ref.subscriptionData.data.userTypingStatus;
      var userIndex = typingUsers.findIndex(function (username) {
        return userTypingStatus.username === username;
      });
      clearTimeout(typingTimeouts[userTypingStatus.username]);
      if (userTypingStatus.isTyping) {
        if (userIndex === -1) {
          setTypingUsers([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(typingUsers), [userTypingStatus.username]));
        }
        startTimeout(userTypingStatus.username);
      } else if (userIndex !== -1) {
        setTypingUsers(typingUsers.filter(function (username) {
          return username !== userTypingStatus.username;
        }));
      }
    }
  });
  var getStatusString = function getStatusString() {
    var visibleUsers = typingUsers.slice(0, 2).join(', ');
    var moreUsers = typingUsers.length > 2 ? "and ".concat(typingUsers.length - 2, " others") : '';
    return "".concat(visibleUsers, " ").concat(moreUsers, " is responding");
  };
  return typingUsers.length > 0 && __jsx(_TypingStatus_styled__WEBPACK_IMPORTED_MODULE_15__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx("span", {
    style: {
      marginRight: 5
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, getStatusString()), __jsx(_TypingStatus_styled__WEBPACK_IMPORTED_MODULE_15__["Circle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), __jsx(_TypingStatus_styled__WEBPACK_IMPORTED_MODULE_15__["Circle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }), __jsx(_TypingStatus_styled__WEBPACK_IMPORTED_MODULE_15__["Circle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }));
});

/***/ }),

/***/ "./components/Chat/Input/TypingStatus/TypingStatus.styled.js":
/*!*******************************************************************!*\
  !*** ./components/Chat/Input/TypingStatus/TypingStatus.styled.js ***!
  \*******************************************************************/
/*! exports provided: Container, Circle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var jump = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{transform:translateY(0);}33%{transform:translateY(-5px);}66%{transform:translateY(5px);}100%{transform:translateY(0);}"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "TypingStatusstyled__Container",
  componentId: "afr36e-0"
})(["font-weight:400;font-size:13px;color:#484848;width:300px;position:absolute;top:-20px;"]);
var Circle = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "TypingStatusstyled__Circle",
  componentId: "afr36e-1"
})(["display:inline-block;width:3px;height:3px;min-width:3px;min-height:3px;background:#666566;border-radius:50%;margin-bottom:4px;animation-name:", ";animation-duration:1s;animation-iteration-count:infinite;margin-left:5px;:nth-of-type(2){animation-delay:0.1s;}:nth-of-type(3){animation-delay:0.2s;}:nth-of-type(4){animation-delay:0.3s;}"], jump);

/***/ })

}]);
//# sourceMappingURL=2.js.map