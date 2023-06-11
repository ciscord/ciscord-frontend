exports.ids = [1];
exports.modules = {

/***/ "./components/Chat/Input/TypingStatus/TypingStatus.js":
/*!************************************************************!*\
  !*** ./components/Chat/Input/TypingStatus/TypingStatus.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/main.cjs");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/config */ "./utils/config.js");
/* harmony import */ var context_UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! context/UserContext */ "./context/UserContext.js");
/* harmony import */ var _TypingStatus_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TypingStatus.styled */ "./components/Chat/Input/TypingStatus/TypingStatus.styled.js");
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/Chat/Input/TypingStatus/TypingStatus.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const USER_TYPING_STATUS = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
  subscription userTypingStatus($channelUrl: String, $tenant: String, $username: String) {
    userTypingStatus(channelUrl: $channelUrl, tenant: $tenant, username: $username) {
      username
      isTyping
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    0: typingUsers,
    1: setTypingUsers
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: typingTimeouts,
    1: setTypingTimeouts
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    user
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context_UserContext__WEBPACK_IMPORTED_MODULE_5__["UserContext"]);
  const {
    query: {
      channel: channelUrl,
      community: communityUrl
    }
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const url = `${communityUrl}/${channelUrl}`;
  const startTimeout = username => {
    const timeout = {};
    timeout[username] = setTimeout(() => {
      setTypingUsers(currentTypingUsers => currentTypingUsers.filter(typingUsername => typingUsername !== username));
    }, 3000);
    setTypingTimeouts(_objectSpread({
      typingTimeouts
    }, timeout));
  };
  Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useSubscription"])(USER_TYPING_STATUS, {
    variables: {
      channelUrl: url,
      tenant: Object(utils_config__WEBPACK_IMPORTED_MODULE_4__["COMPANY_NAME"])(),
      username: user && user.username || ''
    },
    onSubscriptionData: ({
      subscriptionData: {
        data: {
          userTypingStatus
        }
      }
    }) => {
      const userIndex = typingUsers.findIndex(username => userTypingStatus.username === username);
      clearTimeout(typingTimeouts[userTypingStatus.username]);
      if (userTypingStatus.isTyping) {
        if (userIndex === -1) {
          setTypingUsers([...typingUsers, userTypingStatus.username]);
        }
        startTimeout(userTypingStatus.username);
      } else if (userIndex !== -1) {
        setTypingUsers(typingUsers.filter(username => username !== userTypingStatus.username));
      }
    }
  });
  const getStatusString = () => {
    const visibleUsers = typingUsers.slice(0, 2).join(', ');
    const moreUsers = typingUsers.length > 2 ? `and ${typingUsers.length - 2} others` : '';
    return `${visibleUsers} ${moreUsers} is responding`;
  };
  return typingUsers.length > 0 && __jsx(_TypingStatus_styled__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }, __jsx("span", {
    style: {
      marginRight: 5
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, getStatusString()), __jsx(_TypingStatus_styled__WEBPACK_IMPORTED_MODULE_6__["Circle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }), __jsx(_TypingStatus_styled__WEBPACK_IMPORTED_MODULE_6__["Circle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }), __jsx(_TypingStatus_styled__WEBPACK_IMPORTED_MODULE_6__["Circle"], {
    __self: undefined,
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const jump = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{transform:translateY(0);}33%{transform:translateY(-5px);}66%{transform:translateY(5px);}100%{transform:translateY(0);}"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "TypingStatusstyled__Container",
  componentId: "afr36e-0"
})(["font-weight:400;font-size:13px;color:#484848;width:300px;position:absolute;top:-20px;"]);
const Circle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "TypingStatusstyled__Circle",
  componentId: "afr36e-1"
})(["display:inline-block;width:3px;height:3px;min-width:3px;min-height:3px;background:#666566;border-radius:50%;margin-bottom:4px;animation-name:", ";animation-duration:1s;animation-iteration-count:infinite;margin-left:5px;:nth-of-type(2){animation-delay:0.1s;}:nth-of-type(3){animation-delay:0.2s;}:nth-of-type(4){animation-delay:0.3s;}"], jump);

/***/ })

};;
//# sourceMappingURL=1.js.map