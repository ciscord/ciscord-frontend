module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Main/Main.development/Landing/Landing.js":
/*!*************************************************************!*\
  !*** ./components/Main/Main.development/Landing/Landing.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Landing_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Landing.styled */ "./components/Main/Main.development/Landing/Landing.styled.js");
/* harmony import */ var _normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./normalize.css */ "./components/Main/Main.development/Landing/normalize.css");
/* harmony import */ var _normalize_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_normalize_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index2_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index2.css */ "./components/Main/Main.development/Landing/index2.css");
/* harmony import */ var _index2_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index2_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/Main/Main.development/Landing/Landing.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (({
  children
}) => __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}, __jsx("link", {
  rel: "stylesheet",
  href: "https://unpkg.com/tachyons@4/css/tachyons.min.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }
})), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "first-block",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }
}, __jsx("h1", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}, "Community for any websites."), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }
}, "Save time building community pages. You can easily build your perfect community."), __jsx("a", {
  href: "https://shants-tech.com",
  target: "_blank",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }
}, "Watch Demo"), __jsx("img", {
  src: '/assets/img/index2-img/user-left1.png',
  alt: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }
}), __jsx("img", {
  src: '/assets/img/index2-img/user-left2.png',
  alt: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }
}), __jsx("img", {
  src: '/assets/img/index2-img/user-left3.png',
  alt: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 9
  }
}), __jsx("img", {
  src: '/assets/img/index2-img/user-left4.png',
  alt: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }
}), __jsx("img", {
  src: '/assets/img/index2-img/user-left5.png',
  alt: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }
}), __jsx("img", {
  src: '/assets/img/index2-img/user-right1.png',
  alt: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }
}), __jsx("img", {
  src: '/assets/img/index2-img/user-right2.png',
  alt: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }
}), __jsx("img", {
  src: '/assets/img/index2-img/user-right3.png',
  alt: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }
}), __jsx("img", {
  src: '/assets/img/index2-img/user-right4.png',
  alt: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }
}), __jsx("img", {
  src: '/assets/img/index2-img/user-right5.png',
  alt: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }
})), __jsx("div", {
  className: "second-block",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 7
  }
}, __jsx("h2", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }
}, "Fast. Covenient. Effortless."), __jsx("div", {
  className: "second-block__wrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }
}, __jsx("ul", {
  className: "second-block__tabs",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 11
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 13
  }
}, "Over 20", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 15
  }
}), "Communities"), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 13
  }
}, "Ask, Interview", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 15
  }
}), "& Learn"), __jsx("li", {
  className: "active",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 13
  }
}, "Third Party", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 15
  }
}), "Integrations"), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 13
  }
}, "API", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 15
  }
}), "Support"), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 13
  }
}, "Export Your", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 15
  }
}), "Data")), __jsx("div", {
  className: "second-block__slider",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 11
  }
}, __jsx("img", {
  src: 'assets/img/index2-img/second-block-img.png',
  alt: "",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 13
  }
})))), __jsx("div", {
  className: "third-block__wrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "third-block",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 9
  }
}, __jsx("h3", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 11
  }
}, "A better way for community"), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 11
  }
}, "Here are some ways we can help you build community."), __jsx("div", {
  className: "third-block__row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 11
  }
}, __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 13
  }
}, __jsx("li", {
  className: "caption calendar",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 15
  }
}, "Finding problems"), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 15
  }
}, "Most of business websites want to build community pages, but it will take effort to develop ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 109
  }
}))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 13
  }
}, __jsx("li", {
  className: "caption control",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89,
    columnNumber: 15
  }
}, "Finding solutions"), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 15
  }
}, "Discord can be a community platform for startups, but users don't like manage his discord account ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 61
  }
}))), __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 13
  }
}, __jsx("li", {
  className: "caption flexible",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 15
  }
}, "Generate ideas"), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 15
  }
}, "We are here to build community plugin for any websites"))))), __jsx("div", {
  className: "fourth-block",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "fourth-block__wrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107,
    columnNumber: 9
  }
}, __jsx("h4", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108,
    columnNumber: 11
  }
}, "Understand diversity and", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 13
  }
}), "be what people need"), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 11
  }
}, "Every community is different. Engage and ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 54
  }
}), " convert users into fans."))), __jsx("div", {
  className: "fifth-block",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121,
    columnNumber: 7
  }
}, __jsx("h5", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 9
  }
}, "Secure. Scalable. Efficient."), __jsx("div", {
  className: "fifth-block__info",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 123,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "info-block",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 11
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 13
  }
}, "Secure your privacy and data", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 15
  }
}), "with Ciscord"), __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 130,
    columnNumber: 13
  }
}, "With Ciscord, your data is secured beyond global security and privacy standards.")), __jsx("div", {
  className: "info-block",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 135,
    columnNumber: 11
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 136,
    columnNumber: 13
  }
}, "Automate your research", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 138,
    columnNumber: 15
  }
}), "and feedback collection"), __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 141,
    columnNumber: 13
  }
}, "Use our tools to automate all your campaigns, so you can turn hours of research into minutes.")), __jsx("div", {
  className: "info-block",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146,
    columnNumber: 11
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147,
    columnNumber: 13
  }
}, "Scalable pricing to help you run more research at lower cost.", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 149,
    columnNumber: 15
  }
})), __jsx("span", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 151,
    columnNumber: 13
  }
}, "Get more research done, so you can generate more value and save cost.")))), __jsx("div", {
  className: "sixth-block",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 160,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "sixth-block__wrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 161,
    columnNumber: 9
  }
}, __jsx("h6", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 162,
    columnNumber: 11
  }
}, "Find your solution"), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 163,
    columnNumber: 11
  }
}, "Experience the best way to do research."), __jsx("a", {
  href: "https://shants-tech.com",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 164,
    columnNumber: 11
  }
}, "Watch Demo")))), children));

/***/ }),

/***/ "./components/Main/Main.development/Landing/Landing.styled.js":
/*!********************************************************************!*\
  !*** ./components/Main/Main.development/Landing/Landing.styled.js ***!
  \********************************************************************/
/*! exports provided: Container, Logo, Heading, SubHeading, Picture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubHeading", function() { return SubHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Picture", function() { return Picture; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var public_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! public/logo.svg */ "./public/logo.svg");
/* harmony import */ var public_logo_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(public_logo_svg__WEBPACK_IMPORTED_MODULE_1__);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Landingstyled__Container",
  componentId: "sitieo-0"
})(["display:flex;flex-direction:column;align-items:center;"]);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.attrs({
  src: public_logo_svg__WEBPACK_IMPORTED_MODULE_1___default.a
}).withConfig({
  displayName: "Landingstyled__Logo",
  componentId: "sitieo-1"
})(["align-self:flex-start;margin:35px 0 0 97px;"]);
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.attrs({
  className: 'f1 fw7 mb4'
}).withConfig({
  displayName: "Landingstyled__Heading",
  componentId: "sitieo-2"
})(["font-family:Avenirnext;margin:100px 0 0;text-transform:capitalize;"]);
const SubHeading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.attrs({
  className: 'f3 fw4 o-60'
}).withConfig({
  displayName: "Landingstyled__SubHeading",
  componentId: "sitieo-3"
})(["font-family:Avenirnext;margin:0;"]);
const Picture = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.attrs({
  className: 'w-60'
}).withConfig({
  displayName: "Landingstyled__Picture",
  componentId: "sitieo-4"
})(["margin-top:-80px;flex:0 0 auto;"]);

/***/ }),

/***/ "./components/Main/Main.development/Landing/index2.css":
/*!*************************************************************!*\
  !*** ./components/Main/Main.development/Landing/index2.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Main/Main.development/Landing/normalize.css":
/*!****************************************************************!*\
  !*** ./components/Main/Main.development/Landing/normalize.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Main/Main.development/Main.js":
/*!**************************************************!*\
  !*** ./components/Main/Main.development/Main.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Landing_Landing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Landing/Landing */ "./components/Main/Main.development/Landing/Landing.js");
/* harmony import */ var _Widget_Widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Widget/Widget */ "./components/Main/Main.development/Widget/Widget.js");
/* harmony import */ var _WidgetIcon_WidgetIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WidgetIcon/WidgetIcon */ "./components/Main/Main.development/WidgetIcon/WidgetIcon.js");
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/Main/Main.development/Main.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const openSound = 'widget-open';
const closeSound = 'widget-close';
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const widgetUrl = `${process.env.FRONTEND_URL}/vs/general/general`;
  const {
    0: widgetOpened,
    1: setWidgetOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const playSound = sound => {
    if (false) {}
  };
  const openWidget = () => {
    playSound(openSound);
    setWidgetOpened(true);
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (document) {
      document.onkeyup = e => {
        if (e.key === 's') {
          playSound(openSound);
          setWidgetOpened(!widgetOpened);
        }
      };
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const onClose = window.addEventListener('message', event => {
      if (event.data.message === 'close-widget') {
        playSound(closeSound);
        setWidgetOpened(false);
      }
    }, false);
    return () => window.removeEventListener('message', onClose);
  }, []);
  return __jsx(_Landing_Landing__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(_WidgetIcon_WidgetIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    openWidget: openWidget,
    show: !widgetOpened,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), __jsx(_Widget_Widget__WEBPACK_IMPORTED_MODULE_2__["default"], {
    widgetUrl: widgetUrl,
    show: widgetOpened,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }));
});

/***/ }),

/***/ "./components/Main/Main.development/Widget/Widget.js":
/*!***********************************************************!*\
  !*** ./components/Main/Main.development/Widget/Widget.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Widget_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Widget.styled */ "./components/Main/Main.development/Widget/Widget.styled.js");
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/Main/Main.development/Widget/Widget.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  show,
  widgetUrl
}) => __jsx(_Widget_styled__WEBPACK_IMPORTED_MODULE_1__["WidgetIframe"], {
  id: "vs-iframe",
  active: show,
  src: widgetUrl,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}));

/***/ }),

/***/ "./components/Main/Main.development/Widget/Widget.styled.js":
/*!******************************************************************!*\
  !*** ./components/Main/Main.development/Widget/Widget.styled.js ***!
  \******************************************************************/
/*! exports provided: WidgetIframe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetIframe", function() { return WidgetIframe; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


// eslint-disable-next-line
const WidgetIframe = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.iframe.withConfig({
  displayName: "Widgetstyled__WidgetIframe",
  componentId: "sc-1yj219s-0"
})(["width:960px;height:640px;right:40px;bottom:40px;display:flex;flex-direction:column;align-items:flex-start;background:", ";border:none;position:fixed;transform:scale(0);transform-origin:right bottom 0;transition:opacity 0.4s ease-in-out,transform 0.2s ease-in-out;box-shadow:0 8px 50px rgba(7,5,47,0.2);border-radius:16px 16px 10px 10px;opacity:0;visibility:hidden;z-index:-3;", ""], props => props.theme.chatBG, props => props.active && `
    opacity: 1;
    visibility: visible;
    z-index: 3;
    transform: scale(1);
  `);

/***/ }),

/***/ "./components/Main/Main.development/WidgetIcon/WidgetIcon.js":
/*!*******************************************************************!*\
  !*** ./components/Main/Main.development/WidgetIcon/WidgetIcon.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WidgetIcon_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WidgetIcon.styled */ "./components/Main/Main.development/WidgetIcon/WidgetIcon.styled.js");
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/Main/Main.development/WidgetIcon/WidgetIcon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  openWidget,
  show
}) => __jsx(_WidgetIcon_styled__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  id: "ciscord",
  show: show,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, __jsx(_WidgetIcon_styled__WEBPACK_IMPORTED_MODULE_1__["WidgetIcon"], {
  onClick: openWidget,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
})));

/***/ }),

/***/ "./components/Main/Main.development/WidgetIcon/WidgetIcon.styled.js":
/*!**************************************************************************!*\
  !*** ./components/Main/Main.development/WidgetIcon/WidgetIcon.styled.js ***!
  \**************************************************************************/
/*! exports provided: Container, WidgetIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetIcon", function() { return WidgetIcon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var public_widget_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! public/widget-icon.svg */ "./public/widget-icon.svg");
/* harmony import */ var public_widget_icon_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(public_widget_icon_svg__WEBPACK_IMPORTED_MODULE_1__);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "WidgetIconstyled__Container",
  componentId: "sc-1uo9220-0"
})(["position:fixed;bottom:20px;right:45px;background:none;border:none;outline:none;cursor:pointer;z-index:555;opacity:1;transition:opacity 0.2s ease-in-out;", ""], props => !props.show && `opacity: 0;`);
const WidgetIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.attrs({
  alt: 'Open ciscord',
  src: public_widget_icon_svg__WEBPACK_IMPORTED_MODULE_1___default.a
}).withConfig({
  displayName: "WidgetIconstyled__WidgetIcon",
  componentId: "sc-1uo9220-1"
})([""]);

/***/ }),

/***/ "./components/Main/Main.development/index.js":
/*!***************************************************!*\
  !*** ./components/Main/Main.development/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main */ "./components/Main/Main.development/Main.js");

/* harmony default export */ __webpack_exports__["default"] = (_Main__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/Main/index.js":
/*!**********************************!*\
  !*** ./components/Main/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_development__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.development */ "./components/Main/Main.development/index.js");

// import Widget from './Main.production';

/* harmony default export */ __webpack_exports__["default"] = (_Main_development__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/Main */ "./components/Main/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return components_Main__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./public/logo.svg":
/*!*************************!*\
  !*** ./public/logo.svg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTkiIGhlaWdodD0iNjYiIHZpZXdCb3g9IjAgMCA1OSA2NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTU0LjIyODggMTIuODA4MUw1MS44OTI0IDExLjQ1MjVMMzQuMzI3NSAxLjI4NTA2QzMzLjkzMzQgMS4wNTkxMiAzMy41MTEyIDAuODYxNDIyIDMzLjA4OSAwLjY5MTk2NUMzMS4zNDM3IDAuMjI1OTU5IDI5LjUgMS41MjUxMyAyOS41IDMuNDczODhWMTMuMDc2NEMyOS41IDEzLjg2NzIgMjkuMTc2MyAxNC41ODc0IDI4LjY1NTUgMTUuMTA5OUMyOC41Mjg5IDE1LjIzNyAyOC4zODgxIDE1LjM2NDEgMjguMjMzMyAxNS40NjI5QzI3LjkyMzcgMTUuNjc0OCAyNy41ODU5IDE1LjgxNiAyNy4yMDU5IDE1LjkwMDdDMjcuMDIyOSAxNS45NDMxIDI2LjgyNTkgMTUuOTU3MiAyNi42Mjg4IDE1Ljk1NzJINC43NzEyQzQuMzc3MSAxNS45NTcyIDQuMDExMiAxNS45OTk2IDMuNjQ1MyAxNi4wODQzQzMuNDA2IDE2LjE0MDggMy4xNjY3IDE2LjIyNTUgMi45NDE2IDE2LjMxMDJDMi44MjkgMTYuMzUyNiAyLjcxNjQgMTYuNDA5MSAyLjYxNzggMTYuNDY1NkMyLjI5NDEgMTYuNjM1IDEuOTg0NSAxNi44MzI3IDEuNzE3MSAxNy4wNTg3QzEuNDM1NiAxNy4yODQ2IDEuMTk2MyAxNy41NTI5IDAuOTcxMSAxNy44MzUzQzAuNjc1NiAxOC4yMTY2IDAuNDUwNCAxOC42NTQ0IDAuMjgxNSAxOS4xMDYzQzAuMDk4NDk5OSAxOS44NTQ3IDAgMjAuNjE3MyAwIDIxLjQwODFWNDQuMjE0MUMwIDQ3LjYzMTUgMS44MTU2IDUwLjc5NDcgNC43NzEyIDUyLjUwMzRMMTEuODA4NCA1Ni41ODQ1TDI0LjcyODggNjQuMDY4OEMyNy42ODQ0IDY1Ljc3NzUgMzEuMzE1NiA2NS43Nzc1IDM0LjI3MTIgNjQuMDY4OEw0Ny4xOTE2IDU2LjU4NDVMNTQuMjI4OCA1Mi41MDM0QzU3LjE4NDQgNTAuNzk0NyA1OSA0Ny42MzE1IDU5IDQ0LjIxNDFWMjEuMTExNUM1OSAxNy42OCA1Ny4xNzAzIDE0LjUxNjggNTQuMjI4OCAxMi44MDgxWk00NS44ODI2IDQwLjExODlDNDQuNjg2MyA0My40Mzc0IDQyLjUzMjkgNDYuMjkgMzkuNjQ3NyA0OC4zNTE3QzM2LjcwNjEgNTAuNDU1OCAzMy4yMjk3IDUxLjU3MTQgMjkuNTk4NSA1MS41NzE0QzI1Ljk2NzMgNTEuNTcxNCAyMi40OTA5IDUwLjQ1NTggMTkuNTQ5NCA0OC4zNTE3QzE2LjY2NDEgNDYuMjkgMTQuNTEwNyA0My40Mzc0IDEzLjMxNDQgNDAuMTE4OUMxMi44MzU5IDM4Ljc5MTUgMTMuNTI1NSAzNy4zMDg3IDE0Ljg0ODUgMzYuODI4NkMxNi4xNzE1IDM2LjM0ODUgMTcuNjQ5MyAzNy4wNDA0IDE4LjEyNzkgMzguMzY3OUMxOS44NzMxIDQzLjE5NzQgMjQuNDc1NCA0Ni40MzEyIDI5LjU5ODUgNDYuNDMxMkMzNC43MjE2IDQ2LjQzMTIgMzkuMzIzOSA0My4xODMzIDQxLjA2OTIgMzguMzY3OUM0MS41NDc3IDM3LjA0MDQgNDMuMDExNCAzNi4zNDg1IDQ0LjM0ODUgMzYuODI4NkM0NS42NzE1IDM3LjMwODcgNDYuMzYxMiAzOC43OTE1IDQ1Ljg4MjYgNDAuMTE4OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPHBhdGggZD0iTTEuNzE3MSAxNy4wNTg3QzEuOTk4NiAxNi44MzI3IDIuMjk0MSAxNi42MjA5IDIuNjE3OCAxNi40NjU2QzIuNzMwNCAxNi40MDkxIDIuODQzIDE2LjM2NjcgMi45NDE2IDE2LjMxMDJDMy4xNjY4IDE2LjIxMTQgMy40MDYgMTYuMTQwOCAzLjY0NTMgMTYuMDg0M0M0LjAxMTIgMTUuOTk5NSA0LjM3NzIgMTUuOTU3MiA0Ljc3MTIgMTUuOTU3MkgyNi42Mjg4QzI2LjgyNTkgMTUuOTU3MiAyNy4wMjI5IDE1Ljk0MzEgMjcuMjA1OSAxNS45MDA3QzI3LjU3MTggMTUuODMwMSAyNy45MjM3IDE1LjY3NDggMjguMjMzMyAxNS40NjI5QzI4LjM4ODEgMTUuMzY0MSAyOC41Mjg5IDE1LjIzNyAyOC42NTU1IDE1LjEwOTlDMjkuMTc2MyAxNC41ODc0IDI5LjUgMTMuODY3MiAyOS41IDEzLjA3NjRWMy40NzM4N0MyOS41IDEuNTI1MTEgMzEuMzQzOCAwLjIyNTk0MiAzMy4wODkgMC42OTE5NDlDMzEuOTM0OSAwLjIyNTk0MiAzMC43MTA0IDAgMjkuNSAwQzI3LjgzOTIgMC4wMTQxMjE0IDI2LjE3ODQgMC40NTE4ODUgMjQuNzAwNiAxLjMyNzQxTDQuNzAwOSAxMy4xNjExQzMuNTA0NSAxMy44NjcyIDIuNDkxMiAxNC44Mjc1IDEuNzE3MSAxNS45NDMxQzEuMDQxNSAxNi45MDMzIDAuNTYzMDAyIDE3Ljk3NjUgMC4yODE1MDIgMTkuMTIwNEMwLjQ1MDQwMiAxOC42NTQ0IDAuNjc1NjAyIDE4LjIzMDcgMC45NzExMDIgMTcuODQ5NUMxLjE4MjMgMTcuNTUyOSAxLjQzNTYgMTcuMjg0NiAxLjcxNzEgMTcuMDU4N1oiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcikiLz4KCjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIxMy4zNDM4IiB5MT0iOC40OTMzNSIgeDI9IjQ2LjE1NTQiIHkyPSI1Ny4yNjAxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM0RThGRkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjA1OTUyMjkiIHN0b3AtY29sb3I9IiM1Nzk4RkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjIyOTEiIHN0b3AtY29sb3I9IiM2Q0FDRkUiLz4KPHN0b3Agb2Zmc2V0PSIwLjQxOTQiIHN0b3AtY29sb3I9IiM3QkJCRkUiLz4KPHN0b3Agb2Zmc2V0PSIwLjY0NTciIHN0b3AtY29sb3I9IiM4M0MzRkUiLz4KCjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjExLjcxNjMiIHkxPSI0LjMwOTg3IiB4Mj0iMjMuOTA1NSIgeTI9IjE3LjkzMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjQjZFNEY5Ii8+CjxzdG9wIG9mZnNldD0iMC42MjQyIiBzdG9wLWNvbG9yPSIjOTBDQ0ZEIi8+CjxzdG9wIG9mZnNldD0iMC43Njk5IiBzdG9wLWNvbG9yPSIjODZDNkZFIi8+CjwvbGluZWFyR3JhZGllbnQ+Cgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),

/***/ "./public/widget-icon.svg":
/*!********************************!*\
  !*** ./public/widget-icon.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTkiIGhlaWdodD0iNjYiIHZpZXdCb3g9IjAgMCA1OSA2NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTU0LjIyODggMTIuODA4MUw1MS44OTI0IDExLjQ1MjVMMzQuMzI3NSAxLjI4NTA2QzMzLjkzMzQgMS4wNTkxMiAzMy41MTEyIDAuODYxNDIyIDMzLjA4OSAwLjY5MTk2NUMzMS4zNDM3IDAuMjI1OTU5IDI5LjUgMS41MjUxMyAyOS41IDMuNDczODhWMTMuMDc2NEMyOS41IDEzLjg2NzIgMjkuMTc2MyAxNC41ODc0IDI4LjY1NTUgMTUuMTA5OUMyOC41Mjg5IDE1LjIzNyAyOC4zODgxIDE1LjM2NDEgMjguMjMzMyAxNS40NjI5QzI3LjkyMzcgMTUuNjc0OCAyNy41ODU5IDE1LjgxNiAyNy4yMDU5IDE1LjkwMDdDMjcuMDIyOSAxNS45NDMxIDI2LjgyNTkgMTUuOTU3MiAyNi42Mjg4IDE1Ljk1NzJINC43NzEyQzQuMzc3MSAxNS45NTcyIDQuMDExMiAxNS45OTk2IDMuNjQ1MyAxNi4wODQzQzMuNDA2IDE2LjE0MDggMy4xNjY3IDE2LjIyNTUgMi45NDE2IDE2LjMxMDJDMi44MjkgMTYuMzUyNiAyLjcxNjQgMTYuNDA5MSAyLjYxNzggMTYuNDY1NkMyLjI5NDEgMTYuNjM1IDEuOTg0NSAxNi44MzI3IDEuNzE3MSAxNy4wNTg3QzEuNDM1NiAxNy4yODQ2IDEuMTk2MyAxNy41NTI5IDAuOTcxMSAxNy44MzUzQzAuNjc1NiAxOC4yMTY2IDAuNDUwNCAxOC42NTQ0IDAuMjgxNSAxOS4xMDYzQzAuMDk4NDk5OSAxOS44NTQ3IDAgMjAuNjE3MyAwIDIxLjQwODFWNDQuMjE0MUMwIDQ3LjYzMTUgMS44MTU2IDUwLjc5NDcgNC43NzEyIDUyLjUwMzRMMTEuODA4NCA1Ni41ODQ1TDI0LjcyODggNjQuMDY4OEMyNy42ODQ0IDY1Ljc3NzUgMzEuMzE1NiA2NS43Nzc1IDM0LjI3MTIgNjQuMDY4OEw0Ny4xOTE2IDU2LjU4NDVMNTQuMjI4OCA1Mi41MDM0QzU3LjE4NDQgNTAuNzk0NyA1OSA0Ny42MzE1IDU5IDQ0LjIxNDFWMjEuMTExNUM1OSAxNy42OCA1Ny4xNzAzIDE0LjUxNjggNTQuMjI4OCAxMi44MDgxWk00NS44ODI2IDQwLjExODlDNDQuNjg2MyA0My40Mzc0IDQyLjUzMjkgNDYuMjkgMzkuNjQ3NyA0OC4zNTE3QzM2LjcwNjEgNTAuNDU1OCAzMy4yMjk3IDUxLjU3MTQgMjkuNTk4NSA1MS41NzE0QzI1Ljk2NzMgNTEuNTcxNCAyMi40OTA5IDUwLjQ1NTggMTkuNTQ5NCA0OC4zNTE3QzE2LjY2NDEgNDYuMjkgMTQuNTEwNyA0My40Mzc0IDEzLjMxNDQgNDAuMTE4OUMxMi44MzU5IDM4Ljc5MTUgMTMuNTI1NSAzNy4zMDg3IDE0Ljg0ODUgMzYuODI4NkMxNi4xNzE1IDM2LjM0ODUgMTcuNjQ5MyAzNy4wNDA0IDE4LjEyNzkgMzguMzY3OUMxOS44NzMxIDQzLjE5NzQgMjQuNDc1NCA0Ni40MzEyIDI5LjU5ODUgNDYuNDMxMkMzNC43MjE2IDQ2LjQzMTIgMzkuMzIzOSA0My4xODMzIDQxLjA2OTIgMzguMzY3OUM0MS41NDc3IDM3LjA0MDQgNDMuMDExNCAzNi4zNDg1IDQ0LjM0ODUgMzYuODI4NkM0NS42NzE1IDM3LjMwODcgNDYuMzYxMiAzOC43OTE1IDQ1Ljg4MjYgNDAuMTE4OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPHBhdGggZD0iTTEuNzE3MSAxNy4wNTg3QzEuOTk4NiAxNi44MzI3IDIuMjk0MSAxNi42MjA5IDIuNjE3OCAxNi40NjU2QzIuNzMwNCAxNi40MDkxIDIuODQzIDE2LjM2NjcgMi45NDE2IDE2LjMxMDJDMy4xNjY4IDE2LjIxMTQgMy40MDYgMTYuMTQwOCAzLjY0NTMgMTYuMDg0M0M0LjAxMTIgMTUuOTk5NSA0LjM3NzIgMTUuOTU3MiA0Ljc3MTIgMTUuOTU3MkgyNi42Mjg4QzI2LjgyNTkgMTUuOTU3MiAyNy4wMjI5IDE1Ljk0MzEgMjcuMjA1OSAxNS45MDA3QzI3LjU3MTggMTUuODMwMSAyNy45MjM3IDE1LjY3NDggMjguMjMzMyAxNS40NjI5QzI4LjM4ODEgMTUuMzY0MSAyOC41Mjg5IDE1LjIzNyAyOC42NTU1IDE1LjEwOTlDMjkuMTc2MyAxNC41ODc0IDI5LjUgMTMuODY3MiAyOS41IDEzLjA3NjRWMy40NzM4N0MyOS41IDEuNTI1MTEgMzEuMzQzOCAwLjIyNTk0MiAzMy4wODkgMC42OTE5NDlDMzEuOTM0OSAwLjIyNTk0MiAzMC43MTA0IDAgMjkuNSAwQzI3LjgzOTIgMC4wMTQxMjE0IDI2LjE3ODQgMC40NTE4ODUgMjQuNzAwNiAxLjMyNzQxTDQuNzAwOSAxMy4xNjExQzMuNTA0NSAxMy44NjcyIDIuNDkxMiAxNC44Mjc1IDEuNzE3MSAxNS45NDMxQzEuMDQxNSAxNi45MDMzIDAuNTYzMDAyIDE3Ljk3NjUgMC4yODE1MDIgMTkuMTIwNEMwLjQ1MDQwMiAxOC42NTQ0IDAuNjc1NjAyIDE4LjIzMDcgMC45NzExMDIgMTcuODQ5NUMxLjE4MjMgMTcuNTUyOSAxLjQzNTYgMTcuMjg0NiAxLjcxNzEgMTcuMDU4N1oiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcikiLz4KCjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIxMy4zNDM4IiB5MT0iOC40OTMzNSIgeDI9IjQ2LjE1NTQiIHkyPSI1Ny4yNjAxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM0RThGRkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjA1OTUyMjkiIHN0b3AtY29sb3I9IiM1Nzk4RkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjIyOTEiIHN0b3AtY29sb3I9IiM2Q0FDRkUiLz4KPHN0b3Agb2Zmc2V0PSIwLjQxOTQiIHN0b3AtY29sb3I9IiM3QkJCRkUiLz4KPHN0b3Agb2Zmc2V0PSIwLjY0NTciIHN0b3AtY29sb3I9IiM4M0MzRkUiLz4KCjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjExLjcxNjMiIHkxPSI0LjMwOTg3IiB4Mj0iMjMuOTA1NSIgeTI9IjE3LjkzMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjQjZFNEY5Ii8+CjxzdG9wIG9mZnNldD0iMC42MjQyIiBzdG9wLWNvbG9yPSIjOTBDQ0ZEIi8+CjxzdG9wIG9mZnNldD0iMC43Njk5IiBzdG9wLWNvbG9yPSIjODZDNkZFIi8+CjwvbGluZWFyR3JhZGllbnQ+Cgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/MacData/work/ciscord-frontend.git/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map