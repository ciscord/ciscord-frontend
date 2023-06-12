module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static/development/pages/_app.js": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apis/Community.js":
/*!***************************!*\
  !*** ./apis/Community.js ***!
  \***************************/
/*! exports provided: GET_COMMUNITY, GET_COMMUNITIES, SEARCH_COMMUNITIES, FOLLOW_COMMUNITY, UNFOLLOW_COMMUNITY, CREATE_COMMUNITY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COMMUNITY", function() { return GET_COMMUNITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COMMUNITIES", function() { return GET_COMMUNITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_COMMUNITIES", function() { return SEARCH_COMMUNITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_COMMUNITY", function() { return FOLLOW_COMMUNITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_COMMUNITY", function() { return UNFOLLOW_COMMUNITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_COMMUNITY", function() { return CREATE_COMMUNITY; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const GET_COMMUNITY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query community($url: String) {
    community(url: $url) {
      id
      url
      image
      name
      author {
        id
      }
      members {
        id
        username
        isOnline
        image
      }
      notifications {
        id
      }
    }
  }
`;
const GET_COMMUNITIES = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query communities {
    communities {
      id
      url
      image
      name
      author {
        id
      }
      members {
        id
      }
      notifications {
        id
      }
      channels {
        id
      }
    }
  }
`;
const SEARCH_COMMUNITIES = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query searchCommunities($searchString: String) {
    searchCommunities(searchString: $searchString) {
      id
      url
      image
      name
      description
      author {
        id
      }
      members {
        id
      }
      notifications {
        id
      }
    }
  }
`;
const FOLLOW_COMMUNITY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation followCommunity($url: String) {
    followCommunity(url: $url) {
      id
      members {
        id
      }
    }
  }
`;
const UNFOLLOW_COMMUNITY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation unfollowCommunity($url: String) {
    unfollowCommunity(url: $url) {
      id
      members {
        id
      }
    }
  }
`;
const CREATE_COMMUNITY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createCommunity(
    $name: String!
    $url: String!
    $description: String
    $isPrivate: Boolean
    $image: String
  ) {
    createCommunity(
      name: $name
      url: $url
      description: $description
      isPrivate: $isPrivate
      image: $image
    ) {
      url
    }
  }
`;

/***/ }),

/***/ "./apis/Fragments.js":
/*!***************************!*\
  !*** ./apis/Fragments.js ***!
  \***************************/
/*! exports provided: MessagesFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesFragment", function() { return MessagesFragment; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const MessagesFragment = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  fragment message on Message {
    id
    body
    createdAt
    urlList
    author {
      id
      username
      image
      role {
        color
      }
    }
    channel {
      url
      id
    }
    reactions {
      id
      name
      users {
        id
        username
        image
      }
    }
    children {
      id
      body
      createdAt
      author {
        id
        username
        image
        role {
          color
        }
      }
    }
  }
`;

/***/ }),

/***/ "./apis/Message.js":
/*!*************************!*\
  !*** ./apis/Message.js ***!
  \*************************/
/*! exports provided: GET_ALL_MESSAGES, GET_LAST_MESSAGES, GET_PREV_MESSAGES, SEARCH_MESSAGES_QUERY, GET_NEXT_MESSAGES, EDIT_MESSAGE, DELETE_MESSAGE, MESSAGES_SUBSCRIPTION, MESSAGE_EDIT_SUBSCRIPTION, MESSAGE_DELETE_SUBSCRIPTION, NEW_REACTION_SUBSCRIPTION, UPDATE_REACTION_SUBSCRIPTION, REMOVE_REACTION_SUBSCRIPTION, TOGGLE_REACTION, SEND_MESSAGE, SEND_NOTIFICATION, SET_USER_TYPING_STATUS, SEARCH_MESSAGES, REPLY_MESSAGE, EDIT_REPLY_MESSAGE, DELETE_REPLY_MESSAGE, GET_UNREAD_MESSAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_MESSAGES", function() { return GET_ALL_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LAST_MESSAGES", function() { return GET_LAST_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PREV_MESSAGES", function() { return GET_PREV_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_MESSAGES_QUERY", function() { return SEARCH_MESSAGES_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_NEXT_MESSAGES", function() { return GET_NEXT_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_MESSAGE", function() { return EDIT_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_MESSAGE", function() { return DELETE_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGES_SUBSCRIPTION", function() { return MESSAGES_SUBSCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_EDIT_SUBSCRIPTION", function() { return MESSAGE_EDIT_SUBSCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGE_DELETE_SUBSCRIPTION", function() { return MESSAGE_DELETE_SUBSCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_REACTION_SUBSCRIPTION", function() { return NEW_REACTION_SUBSCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_REACTION_SUBSCRIPTION", function() { return UPDATE_REACTION_SUBSCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_REACTION_SUBSCRIPTION", function() { return REMOVE_REACTION_SUBSCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_REACTION", function() { return TOGGLE_REACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_MESSAGE", function() { return SEND_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_NOTIFICATION", function() { return SEND_NOTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USER_TYPING_STATUS", function() { return SET_USER_TYPING_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_MESSAGES", function() { return SEARCH_MESSAGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REPLY_MESSAGE", function() { return REPLY_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_REPLY_MESSAGE", function() { return EDIT_REPLY_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_REPLY_MESSAGE", function() { return DELETE_REPLY_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_UNREAD_MESSAGES", function() { return GET_UNREAD_MESSAGES; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Fragments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fragments */ "./apis/Fragments.js");


const GET_ALL_MESSAGES = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query allMessages($channelUrl: String) {
    messages: allMessages(channelUrl: $channelUrl) {
      ...message
    }
  }
  ${_Fragments__WEBPACK_IMPORTED_MODULE_1__["MessagesFragment"]}
`;
const GET_LAST_MESSAGES = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getLastMessages($channelUrl: String!, $cursorId: ID, $lastVisitDate: String) {
    messages: getLastMessages(
      channelUrl: $channelUrl
      cursorId: $cursorId
      lastVisitDate: $lastVisitDate
    ) {
      ...message
    }
  }
  ${_Fragments__WEBPACK_IMPORTED_MODULE_1__["MessagesFragment"]}
`;
const GET_PREV_MESSAGES = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getPrevMessages($channelUrl: String, $cursorId: ID) {
    messages: getPrevMessages(channelUrl: $channelUrl, cursorId: $cursorId) {
      ...message
    }
  }
  ${_Fragments__WEBPACK_IMPORTED_MODULE_1__["MessagesFragment"]}
`;
const SEARCH_MESSAGES_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query searchMessages($channelUrl: String, $searchQuery: String) {
    messages: searchMessages(channelUrl: $channelUrl, searchQuery: $searchQuery) {
      ...message
    }
  }
  ${_Fragments__WEBPACK_IMPORTED_MODULE_1__["MessagesFragment"]}
`;
const GET_NEXT_MESSAGES = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getNextMessages($channelUrl: String, $cursorId: ID) {
    messages: getNextMessages(channelUrl: $channelUrl, cursorId: $cursorId) {
      ...message
    }
  }
  ${_Fragments__WEBPACK_IMPORTED_MODULE_1__["MessagesFragment"]}
`;
const EDIT_MESSAGE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation editMessage($messageId: String!, $body: String!) {
    editMessage(body: $body, messageId: $messageId) {
      body
      createdAt
      updatedAt
    }
  }
`;
const DELETE_MESSAGE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation deleteMessage($messageId: String!) {
    deleteMessage(messageId: $messageId) {
      id
    }
  }
`;
const MESSAGES_SUBSCRIPTION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  subscription newMessage($channelUrl: String, $tenant: String) {
    newMessage(channelUrl: $channelUrl, tenant: $tenant) {
      ...message
    }
  }
  ${_Fragments__WEBPACK_IMPORTED_MODULE_1__["MessagesFragment"]}
`;
const MESSAGE_EDIT_SUBSCRIPTION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  subscription editMessage($channelUrl: String, $tenant: String) {
    editMessage(channelUrl: $channelUrl, tenant: $tenant) {
      ...message
    }
  }
  ${_Fragments__WEBPACK_IMPORTED_MODULE_1__["MessagesFragment"]}
`;
const MESSAGE_DELETE_SUBSCRIPTION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  subscription deleteMessage($channelUrl: String, $tenant: String) {
    deleteMessage(channelUrl: $channelUrl, tenant: $tenant) {
      id
    }
  }
`;
const NEW_REACTION_SUBSCRIPTION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  subscription newReaction($channelUrl: String, $tenant: String) {
    newReaction(channelUrl: $channelUrl, tenant: $tenant) {
      id
      name
      createdAt
      updatedAt
      users {
        id
        username
        image
      }
      message {
        id
      }
    }
  }
`;
const UPDATE_REACTION_SUBSCRIPTION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  subscription updatedReaction($channelUrl: String, $tenant: String) {
    updatedReaction(channelUrl: $channelUrl, tenant: $tenant) {
      id
      name
      createdAt
      updatedAt
      users {
        id
        username
        image
      }
      message {
        id
      }
    }
  }
`;
const REMOVE_REACTION_SUBSCRIPTION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  subscription removedReaction($channelUrl: String, $tenant: String) {
    removedReaction(channelUrl: $channelUrl, tenant: $tenant) {
      id
    }
  }
`;
const TOGGLE_REACTION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation toggleReaction($messageId: String!, $name: String!) {
    toggleReaction(messageId: $messageId, name: $name) {
      id
      name
    }
  }
`;
const SEND_MESSAGE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation sendMessage(
    $body: String!
    $channelUrl: String!
    $urlList: [String!]
    $mentions: [String!]
    $communityUrl: String!
  ) {
    sendMessage(
      body: $body
      channelUrl: $channelUrl
      urlList: $urlList
      mentions: $mentions
      communityUrl: $communityUrl
    ) {
      id
      body
      createdAt
      urlList
      author {
        id
        username
        image
      }
    }
  }
`;
const SEND_NOTIFICATION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation sendNotification(
    $receiverName: String
    $messageId: ID!
    $channelUrl: String
    $communityUrl: String
  ) {
    sendNotification(
      receiverName: $receiverName
      messageId: $messageId
      channelUrl: $channelUrl
      communityUrl: $communityUrl
      type: "mention"
    ) {
      id
    }
  }
`;
const SET_USER_TYPING_STATUS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation setUserTypingStatus($channelUrl: String, $isTyping: Boolean) {
    setUserTypingStatus(channelUrl: $channelUrl, isTyping: $isTyping) {
      username
      isTyping
    }
  }
`;
const SEARCH_MESSAGES = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation searchMessages($channelUrl: String, $searchQuery: String) {
    messages: searchMessages(channelUrl: $channelUrl, searchQuery: $searchQuery) {
      ...message
    }
  }
  ${_Fragments__WEBPACK_IMPORTED_MODULE_1__["MessagesFragment"]}
`;
const REPLY_MESSAGE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation replyMessage(
    $parentId: String!
    $body: String!
    $urlList: [String!]
  ) {
    replyMessage(parentId: $parentId, body: $body, urlList: $urlList) {
      id
      body
      urlList
      author {
        id
        username
        image
        role {
          color
        }
      }
      parent {
        id
      }
    }
  }
`;
const EDIT_REPLY_MESSAGE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation editReplyMessage($messageId: String!, $body: String!) {
    editReplyMessage(body: $body, messageId: $messageId) {
      body
      createdAt
      updatedAt
    }
  }
`;
const DELETE_REPLY_MESSAGE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation deleteReplyMessage($messageId: String!) {
    deleteReplyMessage(messageId: $messageId) {
      id
    }
  }
`;
const GET_UNREAD_MESSAGES = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getUnreadMessagesCount($channelUrl: String, $username: String) {
    getUnreadMessagesCount(channelUrl: $channelUrl, username: $username) {
      messages {
        body
        createdAt
        author {
          username
          image
          isOnline
          fullname
        }
      }
      fromNewUser
      user {
        id
        fullname
        username
        bio
        email
        social
        image
        isOnline
        owner
        channelsInfo {
          id
          channel {
            id
            name
            url
          }
          lastUpdateAt
        }
      }
    }
  }
`;

/***/ }),

/***/ "./apis/Notification.js":
/*!******************************!*\
  !*** ./apis/Notification.js ***!
  \******************************/
/*! exports provided: NOTIFICATIONS_SUBSCRIPTION, GET_UNREAD_NOTIFICATIONS, GET_NOTIFICATIONS, MARK_NOTIFICATIONS_AS_READ, MARK_NOTIFICATION_AS_READ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTIFICATIONS_SUBSCRIPTION", function() { return NOTIFICATIONS_SUBSCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_UNREAD_NOTIFICATIONS", function() { return GET_UNREAD_NOTIFICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_NOTIFICATIONS", function() { return GET_NOTIFICATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARK_NOTIFICATIONS_AS_READ", function() { return MARK_NOTIFICATIONS_AS_READ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MARK_NOTIFICATION_AS_READ", function() { return MARK_NOTIFICATION_AS_READ; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const NOTIFICATIONS_SUBSCRIPTION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  subscription newNotification($receiverId: String!, $tenant: String!) {
    newNotification(receiverId: $receiverId, tenant: $tenant) {
      id
      type
      createdAt
      isRead
      message {
        id
        body
        createdAt
        author {
          id
          username
        }
      }
      receiver {
        id
        username
      }
      sender {
        id
        username
        isOnline
      }
      channel {
        url
        id
      }
      community {
        url
        id
      }
    }
  }
`;
const GET_UNREAD_NOTIFICATIONS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query unreadNotifications {
    unreadNotifications {
      id
      type
      isRead
    }
  }
`;
const GET_NOTIFICATIONS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query notifications {
    notifications {
      id
      type
      createdAt
      isRead
      message {
        id
        body
        createdAt
        author {
          id
          username
        }
      }
      receiver {
        id
        username
      }
      sender {
        id
        username
        isOnline
      }
      channel {
        url
        id
      }
      community {
        url
        id
      }
    }
  }
`;
const MARK_NOTIFICATIONS_AS_READ = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation markNotificationsAsRead($type: String!) {
    markNotificationsAsRead(type: $type) {
      count
    }
  }
`;
const MARK_NOTIFICATION_AS_READ = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation markNotificationAsRead($id: String!) {
    markNotificationAsRead(id: $id) {
      count
    }
  }
`;

/***/ }),

/***/ "./apis/User.js":
/*!**********************!*\
  !*** ./apis/User.js ***!
  \**********************/
/*! exports provided: LOGOUT_USER, GET_USERS, GET_ME, GET_USER, SEARCH_USERS, USER_WENT_ONLINE, USER_WENT_OFFLINE, SIGNUP, LOGIN, SET_CURRENT_CHANNEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_USER", function() { return LOGOUT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USERS", function() { return GET_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ME", function() { return GET_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER", function() { return GET_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_USERS", function() { return SEARCH_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_WENT_ONLINE", function() { return USER_WENT_ONLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_WENT_OFFLINE", function() { return USER_WENT_OFFLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP", function() { return SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_CHANNEL", function() { return SET_CURRENT_CHANNEL; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const LOGOUT_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation logout {
    logout {
      isOnline
    }
  }
`;
const GET_USERS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation users($searchString: String) {
    users(searchString: $searchString) {
      id
      username
      fullname
      image
      isOnline
    }
  }
`;
const GET_ME = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query me {
    me {
      id
      fullname
      username
      bio
      email
      social
      image
      isOnline
      owner
      communitiesOwned {
        id
        url
      }
      communitiesFollowed {
        id
        url
        author {
          id
        }
        image
        name
        members {
          id
        }
        notifications {
          id
        }
      }
      role {
        id
        roleSettings
        title
      }
      channelsInfo {
        id
        channel {
          id
          name
          url
        }
        lastUpdateAt
      }
    }
  }
`;
const GET_USER = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getUser($username: String!) {
    getUser(username: $username) {
      followers
      followings
      bio
      user {
        id
        fullname
        username
        email
        social
        image
        isOnline
        owner
        communitiesOwned {
          id
          url
        }
        communitiesFollowed {
          id
          url
          author {
            id
          }
          image
          name
          members {
            id
          }
          notifications {
            id
          }
        }
        role {
          id
          roleSettings
          title
          color
        }
        channelsInfo {
          id
          channel {
            id
            name
            url
          }
          lastUpdateAt
        }
      }
    }
  }
`;
const SEARCH_USERS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query users($searchString: String) {
    users(searchString: $searchString) {
      id
      fullname
      username
      bio
      social
      image
      owner
      isOnline
      communitiesOwned {
        id
        url
      }
      communitiesFollowed {
        id
        url
      }
      role {
        id
        roleSettings
        title
        color
      }
    }
  }
`;
const USER_WENT_ONLINE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  subscription userWentOnline($tenant: String!) {
    userWentOnline(tenant: $tenant) {
      id
      username
      isOnline
    }
  }
`;
const USER_WENT_OFFLINE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  subscription userWentOffline($tenant: String!) {
    userWentOffline(tenant: $tenant) {
      id
      username
      isOnline
    }
  }
`;
const SIGNUP = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation signup(
    $fullname: String!
    $username: String!
    $email: String!
    $password: String!
    $bio: String
  ) {
    signup(
      fullname: $fullname
      username: $username
      email: $email
      password: $password
      bio: $bio
    ) {
      token
      user {
        id
        username
        channelsInfo {
          id
          channel {
            id
            name
            url
          }
          lastUpdateAt
        }
      }
    }
  }
`;
const LOGIN = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        channelsInfo {
          id
          channel {
            id
            name
            url
          }
          lastUpdateAt
        }
      }
    }
  }
`;
const SET_CURRENT_CHANNEL = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation setCurrentChannel($channelUrl: String) {
    setCurrentChannel(channelUrl: $channelUrl) {
      id
    }
  }
`;

/***/ }),

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/*! exports provided: GET_COMMUNITIES, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_COMMUNITIES", function() { return GET_COMMUNITIES; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! context */ "./context/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Navbar/Navbar */ "./components/Navbar/Navbar.js");
/* harmony import */ var components_UI_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/Loader */ "./components/UI/Loader/index.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled */ "./components/Layout/styled.js");
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/Layout/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const GET_COMMUNITIES = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
  query communities {
    communities {
      id
      url
      image
      name
      author {
        id
      }
      members {
        id
      }
      notifications {
        id
      }
    }
  }
`;
const Layout = ({
  children,
  hideLayout
}) => {
  const {
    communitiesLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context__WEBPACK_IMPORTED_MODULE_1__["AppContext"]);
  if (hideLayout) {
    return children;
  }
  return __jsx(_styled__WEBPACK_IMPORTED_MODULE_5__["Layout"], {
    "data-hj-suppress": true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, !communitiesLoaded && __jsx(components_UI_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 30
    }
  }), __jsx(components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }), __jsx(_styled__WEBPACK_IMPORTED_MODULE_5__["Content"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, children, __jsx("div", {
    id: "portal-root",
    style: {
      width: '538px',
      minWidth: '538px',
      display: 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })), __jsx("div", {
    id: "alert-root",
    style: {
      width: '538px',
      minWidth: '538px',
      display: 'none'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "ReactModalPortal",
    style: {
      width: '100%',
      minWidth: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Layout/styled.js":
/*!*************************************!*\
  !*** ./components/Layout/styled.js ***!
  \*************************************/
/*! exports provided: Content, Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "styled__Content",
  componentId: "smw7ge-0"
})(["width:100%;height:100%;display:flex;height:calc(100vh - 42px);background:", ";"], props => props.theme.chatBG);
const Layout = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.attrs({
  id: 'vs-layout'
}).withConfig({
  displayName: "styled__Layout",
  componentId: "smw7ge-1"
})(["width:100%;height:100vh;background:", ";font-family:'Helvetica Neue';"], props => props.theme.chatBG);

/***/ }),

/***/ "./components/Navbar/More/ProfilePopup.js":
/*!************************************************!*\
  !*** ./components/Navbar/More/ProfilePopup.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var context_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! context/UserContext */ "./context/UserContext.js");
/* harmony import */ var utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/config */ "./utils/config.js");
/* harmony import */ var components_UI_Icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/Icons */ "./components/UI/Icons/index.js");
/* harmony import */ var components_UI_Toggle_Toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/UI/Toggle/Toggle */ "./components/UI/Toggle/Toggle.js");
/* harmony import */ var use_dark_mode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! use-dark-mode */ "use-dark-mode");
/* harmony import */ var use_dark_mode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(use_dark_mode__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ProfilePopup_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProfilePopup.styled */ "./components/Navbar/More/ProfilePopup.styled.js");
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/Navbar/More/ProfilePopup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const ModalMore = ({
  opened,
  close
}) => {
  const {
    user,
    logout
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context_UserContext__WEBPACK_IMPORTED_MODULE_2__["UserContext"]);
  const {
    value: isDarkMode,
    toggle
  } = use_dark_mode__WEBPACK_IMPORTED_MODULE_6___default()(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const listener = document.body.addEventListener('click', event => {
      const modalContainer = event.target.closest('#modal-more');
      const profileIconContainer = event.target.closest('#profile-icon');
      if (!modalContainer && !profileIconContainer) {
        close();
      }
    });
    return () => document.body.removeEventListener('click', listener);
  }, []);
  const onLogout = () => {
    logout();
    close();
  };
  return __jsx(_ProfilePopup_styled__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    opened: opened,
    id: "modal-more",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, user && __jsx(_ProfilePopup_styled__WEBPACK_IMPORTED_MODULE_7__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(_ProfilePopup_styled__WEBPACK_IMPORTED_MODULE_7__["Avatar"], {
    name: user.username,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), __jsx(_ProfilePopup_styled__WEBPACK_IMPORTED_MODULE_7__["Info"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx(_ProfilePopup_styled__WEBPACK_IMPORTED_MODULE_7__["Fullname"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, user.fullname), __jsx(_ProfilePopup_styled__WEBPACK_IMPORTED_MODULE_7__["Username"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, `@${user.username}`))), __jsx(_ProfilePopup_styled__WEBPACK_IMPORTED_MODULE_7__["Content"], {
    style: !user ? {
      border: 'none'
    } : {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, user && __jsx(_ProfilePopup_styled__WEBPACK_IMPORTED_MODULE_7__["MenuItem"], {
    onClick: () => {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/[company]/settings/members', `/${Object(utils_config__WEBPACK_IMPORTED_MODULE_3__["COMPANY_NAME"])()}/settings/members`, {
        shallow: true
      });
      close();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx(_ProfilePopup_styled__WEBPACK_IMPORTED_MODULE_7__["UsersIcon"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(components_UI_Icons__WEBPACK_IMPORTED_MODULE_4__["UsersIcon"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  })), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "Members")), user && __jsx(_ProfilePopup_styled__WEBPACK_IMPORTED_MODULE_7__["MenuItem"], {
    onClick: () => {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/[company]/settings/roles', `/${Object(utils_config__WEBPACK_IMPORTED_MODULE_3__["COMPANY_NAME"])()}/settings/roles`, {
        shallow: true
      });
      close();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx(_ProfilePopup_styled__WEBPACK_IMPORTED_MODULE_7__["RolesIcon"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx(components_UI_Icons__WEBPACK_IMPORTED_MODULE_4__["RolesIcon"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  })), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, "Roles")), user && __jsx(_ProfilePopup_styled__WEBPACK_IMPORTED_MODULE_7__["MenuItem"], {
    onClick: () => {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/[company]/settings/profile', `/${Object(utils_config__WEBPACK_IMPORTED_MODULE_3__["COMPANY_NAME"])()}/settings/profile`, {
        shallow: true
      });
      close();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, __jsx(components_UI_Icons__WEBPACK_IMPORTED_MODULE_4__["SettingsIcon"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "Settings")), __jsx(_ProfilePopup_styled__WEBPACK_IMPORTED_MODULE_7__["MenuItem"], {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx(components_UI_Icons__WEBPACK_IMPORTED_MODULE_4__["DarkModeIcon"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, "Dark mode")), __jsx(components_UI_Toggle_Toggle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onChange: toggle,
    value: isDarkMode,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }))), user && __jsx(_ProfilePopup_styled__WEBPACK_IMPORTED_MODULE_7__["Footer"], {
    onClick: () => onLogout(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, "Log out")));
};
/* harmony default export */ __webpack_exports__["default"] = (ModalMore);

/***/ }),

/***/ "./components/Navbar/More/ProfilePopup.styled.js":
/*!*******************************************************!*\
  !*** ./components/Navbar/More/ProfilePopup.styled.js ***!
  \*******************************************************/
/*! exports provided: ContainerFull, Container, Header, Avatar, Info, Fullname, Username, Footer, Content, IconSVG, MenuItem, ToggleWrapper, UsersIcon, RolesIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerFull", function() { return ContainerFull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return Avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fullname", function() { return Fullname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Username", function() { return Username; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconSVG", function() { return IconSVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleWrapper", function() { return ToggleWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersIcon", function() { return UsersIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesIcon", function() { return RolesIcon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_UI_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/UI/Avatar */ "./components/UI/Avatar/index.js");


const ContainerFull = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProfilePopupstyled__ContainerFull",
  componentId: "bhjyn5-0"
})(["display:flex;width:100vw;height:100vh;background:", ";position:absolute;top:42px;"], props => props.theme.background);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProfilePopupstyled__Container",
  componentId: "bhjyn5-1"
})(["width:250px;background:", ";color:", ";box-shadow:0 10px 25px rgba(6,8,37,0.14);opacity:0;position:fixed;top:50px;left:50px;border-radius:8px;font-size:0.95rem;z-index:5;transition:left 0.2s ease-in-out,opacity 0.2s ease-in-out;visibility:hidden;", ""], props => props.theme.notificationsBG, props => props.theme.textColor, props => props.opened && `
    opacity: 1;
    visibility: visible;
  `);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "ProfilePopupstyled__Header",
  componentId: "bhjyn5-2"
})(["display:flex;align-items:center;padding:20px;"]);
const Avatar = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(components_UI_Avatar__WEBPACK_IMPORTED_MODULE_1__["default"]).attrs({
  alt: 'Avatar'
}).withConfig({
  displayName: "ProfilePopupstyled__Avatar",
  componentId: "bhjyn5-3"
})(["width:36px;height:36px;border-radius:3px;background-color:#dde0e2;background-size:cover;flex-shrink:0;margin-right:8px;"]);
const Info = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProfilePopupstyled__Info",
  componentId: "bhjyn5-4"
})(["height:min-content;"]);
const Fullname = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "ProfilePopupstyled__Fullname",
  componentId: "bhjyn5-5"
})(["margin:0;font-weight:600;font-size:1rem;"]);
const Username = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "ProfilePopupstyled__Username",
  componentId: "bhjyn5-6"
})(["margin:0;font-size:0.8rem;opacity:0.6;margin-top:2px;"]);
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer.withConfig({
  displayName: "ProfilePopupstyled__Footer",
  componentId: "bhjyn5-7"
})(["display:flex;flex-direction:column;padding:18px 20px 20px 20px;cursor:pointer;user-select:none;"]);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProfilePopupstyled__Content",
  componentId: "bhjyn5-8"
})(["overflow-y:auto;padding:10px 0px;border-top:1px solid ", ";border-bottom:1px solid ", ";"], props => props.theme.profilePopupBorder, props => props.theme.profilePopupBorder);
const IconSVG = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProfilePopupstyled__IconSVG",
  componentId: "bhjyn5-9"
})(["width:16px;height:16px;margin-right:12px;margin-top:-1px;mask-image:url(", ");background-color:", ";"], ({
  src
}) => src, props => props.theme.textColor);
const MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProfilePopupstyled__MenuItem",
  componentId: "bhjyn5-10"
})(["display:flex;user-select:none;justify-content:flex-start;align-items:center;padding:10px 20px;height:18px;cursor:pointer;transition:all 0.05s linear;font-weight:400;&:hover{background:", ";.icon{opacity:0.7;}}"], props => props.theme.bgMoreItemsHover);
const ToggleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ProfilePopupstyled__ToggleWrapper",
  componentId: "bhjyn5-11"
})(["width:20px;position:relative;height:20px;right:34px;bottom:5px;"]);
const UsersIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.svg.withConfig({
  displayName: "ProfilePopupstyled__UsersIcon",
  componentId: "bhjyn5-12"
})(["margin-right:8px;width:18px;height:16px;fill:#989ba0;"]);
const RolesIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.svg.withConfig({
  displayName: "ProfilePopupstyled__RolesIcon",
  componentId: "bhjyn5-13"
})(["margin-right:8px;width:18px;height:16px;fill:#989ba0;"]);

/***/ }),

/***/ "./components/Navbar/More/index.js":
/*!*****************************************!*\
  !*** ./components/Navbar/More/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfilePopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfilePopup */ "./components/Navbar/More/ProfilePopup.js");

/* harmony default export */ __webpack_exports__["default"] = (_ProfilePopup__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/Navbar/Navbar.js":
/*!*************************************!*\
  !*** ./components/Navbar/Navbar.js ***!
  \*************************************/
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
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks */ "./hooks/index.js");
/* harmony import */ var context_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! context/UserContext */ "./context/UserContext.js");
/* harmony import */ var utils_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/config */ "./utils/config.js");
/* harmony import */ var apis_Notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apis/Notification */ "./apis/Notification.js");
/* harmony import */ var components_UI_Icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/UI/Icons */ "./components/UI/Icons/index.js");
/* harmony import */ var components_UI_Badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/UI/Badge */ "./components/UI/Badge/index.js");
/* harmony import */ var _Tabs_Tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Tabs/Tabs */ "./components/Navbar/Tabs/Tabs.js");
/* harmony import */ var _Notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Notifications */ "./components/Navbar/Notifications/index.js");
/* harmony import */ var _More__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./More */ "./components/Navbar/More/index.js");
/* harmony import */ var _Navbar_placeholder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Navbar.placeholder */ "./components/Navbar/Navbar.placeholder.js");
/* harmony import */ var _Navbar_styled__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Navbar.styled */ "./components/Navbar/Navbar.styled.js");
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/Navbar/Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const Navbar = () => {
  const {
    0: subscribed,
    1: setSubscribed
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    user,
    loading: userLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context_UserContext__WEBPACK_IMPORTED_MODULE_4__["UserContext"]);
  const {
    0: showNotifications,
    1: setShowNotifications
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: showMore,
    1: setShowMore
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const [markNotificationsAsRead] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(apis_Notification__WEBPACK_IMPORTED_MODULE_6__["MARK_NOTIFICATIONS_AS_READ"]);
  const [getUnreadNotification, {
    data: {
      unreadNotifications = []
    } = {},
    // loading: unreadNotificationsLoading,
    subscribeToMore,
    refetch
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useLazyQuery"])(apis_Notification__WEBPACK_IMPORTED_MODULE_6__["GET_UNREAD_NOTIFICATIONS"], {
    fetchPolicy: 'cache-and-network'
  });
  Object(hooks__WEBPACK_IMPORTED_MODULE_3__["useKeyboardShortcut"])({
    B: () => router.push(`/[company]/communities`, `/${Object(utils_config__WEBPACK_IMPORTED_MODULE_5__["COMPANY_NAME"])()}/communities`, {
      shallow: true
    })
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getUnreadNotification();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (user && subscribeToMore && !subscribed) {
      setSubscribed(true);
      subscribeToMore({
        document: apis_Notification__WEBPACK_IMPORTED_MODULE_6__["NOTIFICATIONS_SUBSCRIPTION"],
        variables: {
          receiverId: user.id,
          tenant: Object(utils_config__WEBPACK_IMPORTED_MODULE_5__["COMPANY_NAME"])()
        },
        updateQuery: (prev, {
          subscriptionData
        }) => {
          if (!subscriptionData.data) return prev;
          const {
            newNotification
          } = subscriptionData.data;
          // NotificationSound.play();
          if (prev.unreadNotifications.filter(e => e.id === newNotification.id).length === 0) {
            return _objectSpread({}, prev, {
              unreadNotifications: [newNotification, ...prev.unreadNotifications]
            });
          }
          return prev;
        }
      });
    }
  }, [user, subscribeToMore]);
  if (userLoading) {
    return __jsx(_Navbar_placeholder__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 12
      }
    });
  }
  const checkUnread = async () => {
    await refetch();
  };
  const onDirectChat = async () => {
    await markNotificationsAsRead({
      variables: {
        type: 'direct'
      }
    });
    await refetch();
    router.push(`/[company]/direct`, `/${Object(utils_config__WEBPACK_IMPORTED_MODULE_5__["COMPANY_NAME"])()}/direct`, {
      shallow: true
    });
  };
  const unreadNotificationsCount = unreadNotifications.filter(e => e.type === 'mention').length;
  const unreadDirectCount = unreadNotifications.filter(e => e.type === 'direct').length;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Navbar_styled__WEBPACK_IMPORTED_MODULE_13__["NavbarContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx(_Navbar_styled__WEBPACK_IMPORTED_MODULE_13__["IconsWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx(_Navbar_styled__WEBPACK_IMPORTED_MODULE_13__["Icons"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, __jsx(_Navbar_styled__WEBPACK_IMPORTED_MODULE_13__["IconBox"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx(components_UI_Icons__WEBPACK_IMPORTED_MODULE_7__["MessageIcon"], {
    onClick: () => onDirectChat(),
    active: unreadDirectCount > 0,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  })), __jsx(_Navbar_styled__WEBPACK_IMPORTED_MODULE_13__["IconBox"], {
    second: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, unreadNotificationsCount > 0 ? __jsx(components_UI_Badge__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "vs-icon-notifications",
    count: unreadNotificationsCount,
    onClick: () => setShowNotifications(!showNotifications),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }) : __jsx(components_UI_Icons__WEBPACK_IMPORTED_MODULE_7__["NotificationsIcon"], {
    id: "vs-icon-notifications",
    active: showNotifications,
    onClick: () => setShowNotifications(!showNotifications),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  })), __jsx(_Navbar_styled__WEBPACK_IMPORTED_MODULE_13__["IconBox"], {
    last: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, __jsx(components_UI_Icons__WEBPACK_IMPORTED_MODULE_7__["ProfileIcon"], {
    onClick: () => setShowMore(!showMore),
    active: showMore,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 15
    }
  })))), __jsx(_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }), __jsx(_Navbar_styled__WEBPACK_IMPORTED_MODULE_13__["AddCommunity"], {
    onClick: () => router.push(`/[company]/communities`, `/${Object(utils_config__WEBPACK_IMPORTED_MODULE_5__["COMPANY_NAME"])()}/communities`, {
      shallow: true
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }), __jsx(components_UI_Icons__WEBPACK_IMPORTED_MODULE_7__["CloseIcon"], {
    id: "vs-close-widget",
    onClick: () => window.parent.postMessage({
      message: 'close-widget'
    }, '*'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  })), showMore && __jsx(_More__WEBPACK_IMPORTED_MODULE_11__["default"], {
    opened: showMore,
    close: () => setShowMore(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 20
    }
  }), __jsx(_Notifications__WEBPACK_IMPORTED_MODULE_10__["default"], {
    opened: showNotifications,
    close: () => setShowNotifications(false),
    onMarkAsRead: checkUnread,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Navbar/Navbar.placeholder.js":
/*!*************************************************!*\
  !*** ./components/Navbar/Navbar.placeholder.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-content-loader */ "react-content-loader");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navbar_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar.styled */ "./components/Navbar/Navbar.styled.js");
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/Navbar/Navbar.placeholder.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NavbarPlaceholder = ({
  theme
}) => __jsx(_Navbar_styled__WEBPACK_IMPORTED_MODULE_3__["PlaceholderContainer"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, {
  width: 936,
  height: 35,
  speed: 2,
  backgroundColor: theme.placeholderTabsBG,
  foregroundColor: theme.placeholderTabsFG,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, __jsx("rect", {
  x: "6",
  y: "8",
  rx: "5",
  ry: "5",
  width: "19",
  height: "19",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }
}), __jsx("rect", {
  x: "35",
  y: "8",
  rx: "5",
  ry: "5",
  width: "19",
  height: "19",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }
}), __jsx("rect", {
  x: "65",
  y: "0",
  rx: "6",
  ry: "6",
  width: "135",
  height: "39",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }
})));

// const NavbarPlaceholder = () => (
//   <PlaceholderContainer>
//     <ContentLoader
//       width={960}
//       height={35}
//       speed={2}
//       backgroundColor="#ffffff"
//       foregroundColor="#f8fafc"
//     >
//       <rect x="7" y="7" rx="5" ry="5" width="19" height="19" />
//       <rect x="38" y="7" rx="5" ry="5" width="19" height="19" />
//       <rect x="69" y="7" rx="5" ry="5" width="19" height="19" />
//       <rect x="100" y="0" rx="6" ry="6" width="135" height="39" />
//     </ContentLoader>
//   </PlaceholderContainer>
// );

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(NavbarPlaceholder));

/***/ }),

/***/ "./components/Navbar/Navbar.styled.js":
/*!********************************************!*\
  !*** ./components/Navbar/Navbar.styled.js ***!
  \********************************************/
/*! exports provided: NavbarContainer, PlaceholderContainer, IconsWrapper, Icons, IconBox, AddCommunity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarContainer", function() { return NavbarContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceholderContainer", function() { return PlaceholderContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsWrapper", function() { return IconsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icons", function() { return Icons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconBox", function() { return IconBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommunity", function() { return AddCommunity; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var public_icons_new_plus_community_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! public/icons/new-plus-community.svg */ "./public/icons/new-plus-community.svg");
/* harmony import */ var public_icons_new_plus_community_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(public_icons_new_plus_community_svg__WEBPACK_IMPORTED_MODULE_1__);


const NavbarContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Navbarstyled__NavbarContainer",
  componentId: "sc-1xmt9e5-0"
})(["display:flex;align-items:center;background-color:", ";width:calc(100% - 24px);height:34px;padding:8px 12px 0;border-radius:16px 16px 0 0;"], props => props.theme.navbarContainerBG);
const PlaceholderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Navbarstyled__PlaceholderContainer",
  componentId: "sc-1xmt9e5-1"
})(["height:34px;width:calc(100% - 24px);border-radius:16px 16px 0 0;padding:8px 12px 0;background-color:", ";"], props => props.theme.navbarContainerBG);
const IconsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Navbarstyled__IconsWrapper",
  componentId: "sc-1xmt9e5-2"
})(["display:flex;height:34px;align-items:center;"]);
const Icons = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Navbarstyled__Icons",
  componentId: "sc-1xmt9e5-3"
})(["margin-right:11px;padding-left:1px;"]);
const IconBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Navbarstyled__IconBox",
  componentId: "sc-1xmt9e5-4"
})(["position:relative;margin:0 6px;display:inline-flex;align-items:center;justify-content:center;height:20px;width:19px;", " ", ""], props => props.last && `
      display: inline-flex;
      margin: 0 2px;
      margin-right: -5px;
      vertical-align: bottom;
      margin-bottom: 2px;
  `, props => props.second && `
      vertical-align: top;
      margin: 0 8px 0 10px;
  `);
const AddCommunity = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Navbarstyled__AddCommunity",
  componentId: "sc-1xmt9e5-5"
})(["cursor:pointer;display:block;width:15px;height:15px;background-image:url(", ");background-repeat:no-repeat;background-position:center;outline:none;margin:11px;margin-left:2px;cursor:pointer;:hover{opacity:0.85;}"], public_icons_new_plus_community_svg__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "./components/Navbar/Notifications/Notification/Notification.js":
/*!**********************************************************************!*\
  !*** ./components/Navbar/Notifications/Notification/Notification.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/helper */ "./utils/helper.js");
/* harmony import */ var _Notification_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Notification.styled */ "./components/Navbar/Notifications/Notification/Notification.styled.js");
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/Navbar/Notifications/Notification/Notification.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Notification = ({
  notification,
  onClick,
  closePopup
}) => {
  const {
    query: {
      company
    },
    push
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const handleLink = async () => {
    await onClick({
      variables: {
        id: notification.id
      }
    });
    push(`/[company]/[community]/[channel]`, `/${company}/${notification.channel.url}?linkMessageId=${notification.message.id}`, {
      shallow: true
    });
    closePopup();
  };
  if (!notification.message) return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 37
    }
  });
  return __jsx(_Notification_styled__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    onClick: handleLink,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(_Notification_styled__WEBPACK_IMPORTED_MODULE_5__["AvatarWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(_Notification_styled__WEBPACK_IMPORTED_MODULE_5__["Avatar"], {
    src: notification.message.author.image,
    name: notification.message.author.username,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  })), __jsx(_Notification_styled__WEBPACK_IMPORTED_MODULE_5__["Body"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx(_Notification_styled__WEBPACK_IMPORTED_MODULE_5__["Info"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(_Notification_styled__WEBPACK_IMPORTED_MODULE_5__["Author"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, notification.message.author.username), __jsx(_Notification_styled__WEBPACK_IMPORTED_MODULE_5__["Date"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, moment__WEBPACK_IMPORTED_MODULE_1___default()(notification.createdAt).format('h:mm A'))), __jsx(_Notification_styled__WEBPACK_IMPORTED_MODULE_5__["Message"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()(Object(utils_helper__WEBPACK_IMPORTED_MODULE_4__["transformMentions"])(notification.message.body))), notification.actions && __jsx(_Notification_styled__WEBPACK_IMPORTED_MODULE_5__["Actions"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, notification.actions.map(action => __jsx(_Notification_styled__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: () => {},
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, action.name)), __jsx(_Notification_styled__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    cancel: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, "Cancel"))));
};
/* harmony default export */ __webpack_exports__["default"] = (Notification);

/***/ }),

/***/ "./components/Navbar/Notifications/Notification/Notification.styled.js":
/*!*****************************************************************************!*\
  !*** ./components/Navbar/Notifications/Notification/Notification.styled.js ***!
  \*****************************************************************************/
/*! exports provided: Container, AvatarWrapper, Avatar, Body, Info, Author, Action, Message, Actions, Button, Footer, Date, Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarWrapper", function() { return AvatarWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return Avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Body", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Author", function() { return Author; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return Actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Date", function() { return Date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var public_icons_quote_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! public/icons/quote.svg */ "./public/icons/quote.svg");
/* harmony import */ var public_icons_quote_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(public_icons_quote_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_UI_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/UI/Avatar */ "./components/UI/Avatar/index.js");



const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Notificationstyled__Container",
  componentId: "nev94d-0"
})(["display:flex;cursor:pointer;align-items:flex-start;text-align:left;border-radius:4px;margin-bottom:12px;padding:6px 6px 4px 6px;:hover{background:", ";}"], props => props.theme.notificationBGHover);
const AvatarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Notificationstyled__AvatarWrapper",
  componentId: "nev94d-1"
})(["width:30px;min-width:30px;height:30px;position:relative;:after{content:'';display:flex;width:14px;height:14px;background-image:url(", ");background-size:cover;border-radius:50%;position:absolute;right:-4px;bottom:-3px;}"], public_icons_quote_svg__WEBPACK_IMPORTED_MODULE_1___default.a);
const Avatar = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(components_UI_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"]).attrs({
  alt: 'Avatar'
}).withConfig({
  displayName: "Notificationstyled__Avatar",
  componentId: "nev94d-2"
})(["width:100%;height:100%;border-radius:3px;overflow:hidden;"]);
const Body = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Notificationstyled__Body",
  componentId: "nev94d-3"
})(["cursor:pointer;line-height:100%;margin-top:-2px;margin-left:13px;"]);
const Info = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Notificationstyled__Info",
  componentId: "nev94d-4"
})(["font-size:15px;color:", ";line-height:22px;"], props => props.theme.chatText);
const Author = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "Notificationstyled__Author",
  componentId: "nev94d-5"
})(["font-size:15px;font-weight:700;letter-spacing:-0.15px;color:", ";"], props => props.theme.chatAuthor);
const Action = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "Notificationstyled__Action",
  componentId: "nev94d-6"
})([""]);
const Message = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "Notificationstyled__Message",
  componentId: "nev94d-7"
})(["margin:0;padding:0;font-size:15px;font-weight:400;line-height:165%;color:", ";"], props => props.theme.chatText);

// export const Mention = styled.a`
// `;

const Actions = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Notificationstyled__Actions",
  componentId: "nev94d-8"
})(["display:flex;align-items:center;margin-top:10px;"]);
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.attrs({
  type: 'button'
}).withConfig({
  displayName: "Notificationstyled__Button",
  componentId: "nev94d-9"
})(["height:24px;font-weight:500;font-size:13px;color:#fff;line-height:24px;background:#5c24d4;border-radius:5px;border:1px solid #5c24d4;padding:0 9px;:hover{background:#34378b;}:active{background:#212464;}", ""], props => props.cancel && `
    color: #000;
    background: #fff;
    border-color: #bababa;
    margin-left: 5px;
    :hover {
      background: #f6f6f6;
    }
    :active {
      background: #e6e4e4;
    }
  `);
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer.withConfig({
  displayName: "Notificationstyled__Footer",
  componentId: "nev94d-10"
})(["display:flex;align-items:center;margin-top:20px;"]);
const Date = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "Notificationstyled__Date",
  componentId: "nev94d-11"
})(["font-size:12px;font-weight:400;color:", ";margin-left:4px;display:inline-block;"], props => props.theme.notificationDate);
const Link = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "Notificationstyled__Link",
  componentId: "nev94d-12"
})(["font-weight:500;font-size:13px;cursor:pointer;color:#1264a3 !important;:hover{text-decoration:underline !important;}"]);

/***/ }),

/***/ "./components/Navbar/Notifications/NotificationsPopup.js":
/*!***************************************************************!*\
  !*** ./components/Navbar/Notifications/NotificationsPopup.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/main.cjs");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var context_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! context/UserContext */ "./context/UserContext.js");
/* harmony import */ var utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/config */ "./utils/config.js");
/* harmony import */ var apis_Notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apis/Notification */ "./apis/Notification.js");
/* harmony import */ var public_icons_close_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! public/icons/close.svg */ "./public/icons/close.svg");
/* harmony import */ var public_icons_close_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(public_icons_close_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Notification_Notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Notification/Notification */ "./components/Navbar/Notifications/Notification/Notification.js");
/* harmony import */ var _NotificationsPopup_placeholder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NotificationsPopup.placeholder */ "./components/Navbar/Notifications/NotificationsPopup.placeholder.js");
/* harmony import */ var _NotificationsPopup_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NotificationsPopup.styled */ "./components/Navbar/Notifications/NotificationsPopup.styled.js");
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/Navbar/Notifications/NotificationsPopup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










// import notificationSound from 'public/sounds/notification.wav';
// const NotificationSound = new Audio(notificationSound);

const Notifications = ({
  opened,
  close,
  onMarkAsRead
}) => {
  const {
    0: subscribed,
    1: setSubscribed
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  // const [active, setActiveTab] = useState('all');
  const {
    user
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context_UserContext__WEBPACK_IMPORTED_MODULE_2__["UserContext"]);
  const {
    data: {
      notifications
    } = {},
    refetch,
    loading: notificationsLoading,
    subscribeToMore
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(apis_Notification__WEBPACK_IMPORTED_MODULE_4__["GET_NOTIFICATIONS"], {
    fetchPolicy: 'cache-and-network'
  });
  const [markNotificationsAsRead] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(apis_Notification__WEBPACK_IMPORTED_MODULE_4__["MARK_NOTIFICATIONS_AS_READ"]);
  const [markNotificationAsRead] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(apis_Notification__WEBPACK_IMPORTED_MODULE_4__["MARK_NOTIFICATION_AS_READ"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (user && !subscribed) {
      setSubscribed(true);
      subscribeToMore({
        document: apis_Notification__WEBPACK_IMPORTED_MODULE_4__["NOTIFICATIONS_SUBSCRIPTION"],
        variables: {
          receiverId: user.id,
          tenant: Object(utils_config__WEBPACK_IMPORTED_MODULE_3__["COMPANY_NAME"])()
        },
        updateQuery: (prev, {
          subscriptionData
        }) => {
          if (!subscriptionData.data) return prev;
          const {
            newNotification
          } = subscriptionData.data;
          if (newNotification.type === 'direct') return prev;
          if (prev.notifications.filter(e => e.id === newNotification.id).length === 0) {
            return _objectSpread({}, prev, {
              notifications: [newNotification, ...prev.notifications]
            });
          }
          return prev;
        }
      });
    }
  }, [user]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const listener = document.body.addEventListener('click', event => {
      const modalContainer = event.target.closest('#modal-notifications');
      const notificationContainer = event.target.closest('#vs-icon-notifications');
      if (!modalContainer && !notificationContainer) {
        close();
      }
    });
    return () => document.body.removeEventListener('click', listener);
  }, []);
  const markAllAsRead = async () => {
    await markNotificationsAsRead({
      variables: {
        type: 'mention'
      }
    });
    await onMarkAsRead();
  };
  const markOneAsRead = async data => {
    await markNotificationAsRead(data);
    await onMarkAsRead();
  };
  if (!notifications) {
    return __jsx(_NotificationsPopup_placeholder__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 12
      }
    });
  }
  return __jsx(_NotificationsPopup_styled__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    opened: opened,
    id: "modal-notifications",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx(_NotificationsPopup_styled__WEBPACK_IMPORTED_MODULE_8__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx(_NotificationsPopup_styled__WEBPACK_IMPORTED_MODULE_8__["Heading"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx(_NotificationsPopup_styled__WEBPACK_IMPORTED_MODULE_8__["Title"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, "Recent mentions")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx(_NotificationsPopup_styled__WEBPACK_IMPORTED_MODULE_8__["MarkAsRead"], {
    onClick: markAllAsRead,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, "Mark all read"), __jsx(_NotificationsPopup_styled__WEBPACK_IMPORTED_MODULE_8__["CloseIcon"], {
    onClick: close,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, __jsx("use", {
    xlinkHref: `${public_icons_close_svg__WEBPACK_IMPORTED_MODULE_5___default.a}#icon-close`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  })))), __jsx(_NotificationsPopup_styled__WEBPACK_IMPORTED_MODULE_8__["NotificationsWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, notifications.length > 0 ? notifications.map(notification => __jsx(_Notification_Notification__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: notification.id,
    notification: notification,
    closePopup: close,
    onClick: markOneAsRead,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  })) : __jsx("div", {
    style: {
      opacity: 0.2,
      paddingLeft: 9
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, "No notifications")));
};
/* harmony default export */ __webpack_exports__["default"] = (Notifications);

/***/ }),

/***/ "./components/Navbar/Notifications/NotificationsPopup.placeholder.js":
/*!***************************************************************************!*\
  !*** ./components/Navbar/Notifications/NotificationsPopup.placeholder.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-content-loader */ "react-content-loader");
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NotificationsPopup_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NotificationsPopup.styled */ "./components/Navbar/Notifications/NotificationsPopup.styled.js");
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/Navbar/Notifications/NotificationsPopup.placeholder.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NotificationsPopupPlaceholder = ({
  theme
}) => __jsx(_NotificationsPopup_styled__WEBPACK_IMPORTED_MODULE_3__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, "Loading...", __jsx(react_content_loader__WEBPACK_IMPORTED_MODULE_1___default.a, {
  height: 40,
  width: 40,
  style: {
    width: 400,
    height: 61
  },
  speed: 1,
  backgroundColor: theme.placeholderBG,
  foregroundColor: theme.placeholderFG,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
}, __jsx("rect", {
  x: "10",
  y: "10",
  rx: "4",
  ry: "4",
  width: "20",
  height: "20",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }
})));
/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(NotificationsPopupPlaceholder));

/***/ }),

/***/ "./components/Navbar/Notifications/NotificationsPopup.styled.js":
/*!**********************************************************************!*\
  !*** ./components/Navbar/Notifications/NotificationsPopup.styled.js ***!
  \**********************************************************************/
/*! exports provided: Container, Header, Nav, Heading, Title, Count, MarkAsRead, CloseIcon, NotificationsWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Heading", function() { return Heading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Count", function() { return Count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkAsRead", function() { return MarkAsRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsWrapper", function() { return NotificationsWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "NotificationsPopupstyled__Container",
  componentId: "sc-1189by4-0"
})(["width:420px;height:560px;background:", ";box-shadow:0 10px 25px rgba(6,8,37,0.14);opacity:0;position:fixed;top:60px;border-radius:8px;z-index:5;left:22px;left:8px;visibility:hidden;:before{content:'';display:block;left:31px;left:13px;width:0;height:0;border-style:solid;border-width:0 8px 9px 8px;border-color:transparent transparent ", " transparent;position:absolute;top:-9px;z-index:4;filter:drop-shadow(0px -1.7px 1.3px rgba(0,0,0,0.04));}", ""], props => props.theme.popupBG, props => props.theme.popupBG, props => props.opened && `
    opacity: 1;
    visibility: visible;
  `);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "NotificationsPopupstyled__Header",
  componentId: "sc-1189by4-1"
})(["display:flex;justify-content:space-between;padding:30px 25px 18px 30px;color:", ";"], props => props.theme.textColor);
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "NotificationsPopupstyled__Nav",
  componentId: "sc-1189by4-2"
})(["display:flex;height:23px;margin-top:15px;> div{display:flex;justify-content:space-between;.tab{color:", ";font-weight:400;font-size:14px;padding:0 2px 7px 2px;letter-spacing:0.23px;&:first-child{margin-right:7px;}}.active{font-weight:500;border-bottom:2px solid #69a9ff;letter-spacing:0;}}.display{color:", ";opacity:0.9;font-weight:400;font-size:14px;line-height:23px;> span{text-decoration:underline;color:", ";:hover{opacity:0.8;}}}"], props => props.theme.textColor, props => props.theme.textColor, props => props.theme.textColor);
const Heading = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "NotificationsPopupstyled__Heading",
  componentId: "sc-1189by4-3"
})(["display:flex;flex-direction:row;align-items:center;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h4.withConfig({
  displayName: "NotificationsPopupstyled__Title",
  componentId: "sc-1189by4-4"
})(["font-size:17px;font-weight:700;line-height:100%;padding:0;margin:0 10px 0 0;color:", ";"], props => props.theme.textColor);
const Count = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "NotificationsPopupstyled__Count",
  componentId: "sc-1189by4-5"
})(["padding:2px 6px 1px;display:inline-flex;align-items:center;justify-content:center;border-radius:100%;background-color:#f45151;color:#fff;font-size:12px;font-weight:500;box-sizing:border-box;min-height:18px;"]);
const MarkAsRead = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.attrs({
  type: 'button'
}).withConfig({
  displayName: "NotificationsPopupstyled__MarkAsRead",
  componentId: "sc-1189by4-6"
})(["font-weight:400;font-size:14px;color:", ";background:", ";margin-right:15px;margin-bottom:-1px;:hover{text-decoration:underline;}"], props => props.theme.chatText, props => props.theme.popupBG);
const CloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.svg.withConfig({
  displayName: "NotificationsPopupstyled__CloseIcon",
  componentId: "sc-1189by4-7"
})(["width:12px;height:12px;margin-right:-2px;fill:", ";cursor:pointer;"], props => props.theme.iconColor);
const NotificationsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "NotificationsPopupstyled__NotificationsWrapper",
  componentId: "sc-1189by4-8"
})(["height:calc(100% - 96px);overflow-y:auto;margin:0 5px 0 0;padding:0 11px 0 21px;"]);

/***/ }),

/***/ "./components/Navbar/Notifications/index.js":
/*!**************************************************!*\
  !*** ./components/Navbar/Notifications/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotificationsPopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationsPopup */ "./components/Navbar/Notifications/NotificationsPopup.js");

/* harmony default export */ __webpack_exports__["default"] = (_NotificationsPopup__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/Navbar/Tabs/Tab/Tab.js":
/*!*******************************************!*\
  !*** ./components/Navbar/Tabs/Tab/Tab.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks */ "./hooks/index.js");
/* harmony import */ var utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/config */ "./utils/config.js");
/* harmony import */ var public_icons_close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! public/icons/close.svg */ "./public/icons/close.svg");
/* harmony import */ var public_icons_close_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(public_icons_close_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Tab_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Tab.styled */ "./components/Navbar/Tabs/Tab/Tab.styled.js");
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/Navbar/Tabs/Tab/Tab.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const tabsShortcutMap = {
  0: '!',
  1: '@',
  2: '#',
  3: '$'
};
const Tab = ({
  community,
  active,
  nextActive,
  index
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    community: selectedCommunity
  } = router.query;
  const onChangeTab = () => {
    if (community.url !== selectedCommunity) router.push('/[company]/[community]/[channel]', `/${Object(utils_config__WEBPACK_IMPORTED_MODULE_3__["COMPANY_NAME"])()}/${community.url}/general`, {
      shallow: true
    });
  };
  Object(hooks__WEBPACK_IMPORTED_MODULE_2__["useKeyboardShortcut"])({
    [tabsShortcutMap[index + 1]]: onChangeTab
  });
  return __jsx(_Tab_styled__WEBPACK_IMPORTED_MODULE_5__["Tab"], {
    active: active,
    onClick: onChangeTab,
    key: community.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_Tab_styled__WEBPACK_IMPORTED_MODULE_5__["TabContent"], {
    active: active,
    nextActive: nextActive,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(_Tab_styled__WEBPACK_IMPORTED_MODULE_5__["Community"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(_Tab_styled__WEBPACK_IMPORTED_MODULE_5__["CommunityLogo"], {
    src: community.image || 'http://mish-sanek.online/v5_helvetica/img/index2-img/widget-icon.svg',
    alt: "Logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }), __jsx(_Tab_styled__WEBPACK_IMPORTED_MODULE_5__["CommunityName"], {
    active: active,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, community.name)), __jsx(_Tab_styled__WEBPACK_IMPORTED_MODULE_5__["UnsubscribeIconWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(_Tab_styled__WEBPACK_IMPORTED_MODULE_5__["UnsubscribeIcon"], {
    onClick: () => {
      // Do: Unfollow. Update cache
      // unfollowCommunity({ variables: { url: community.url } });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("use", {
    xlinkHref: `${public_icons_close_svg__WEBPACK_IMPORTED_MODULE_4___default.a}#icon-close`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Tab);

/***/ }),

/***/ "./components/Navbar/Tabs/Tab/Tab.styled.js":
/*!**************************************************!*\
  !*** ./components/Navbar/Tabs/Tab/Tab.styled.js ***!
  \**************************************************/
/*! exports provided: UnsubscribeIcon, UnsubscribeIconWrapper, CommunityName, Tab, TabContent, Community, CommunityLogo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsubscribeIcon", function() { return UnsubscribeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsubscribeIconWrapper", function() { return UnsubscribeIconWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityName", function() { return CommunityName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabContent", function() { return TabContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Community", function() { return Community; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityLogo", function() { return CommunityLogo; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const UnsubscribeIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.svg.withConfig({
  displayName: "Tabstyled__UnsubscribeIcon",
  componentId: "jp4pih-0"
})(["transition:0.3s;fill:#7d7d7d;width:8px;height:8px;opacity:0;"]);
const UnsubscribeIconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Tabstyled__UnsubscribeIconWrapper",
  componentId: "jp4pih-1"
})(["width:16px;height:16px;border-radius:100%;display:flex;align-items:center;justify-content:center;position:absolute;top:10px;right:8px;:hover{background:#d7d7d7;opacity:0.85;}"]);
const CommunityName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "Tabstyled__CommunityName",
  componentId: "jp4pih-2"
})(["color:#7d7d7d;font-size:14px;font-weight:500;line-height:13px;text-overflow:ellipsis;white-space:nowrap;line-height:17px;margin-top:2px;"]);
const Tab = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Tabstyled__Tab",
  componentId: "jp4pih-3"
})(["cursor:pointer;display:flex;align-items:center;justify-content:center;min-width:135px;height:100%;background:", ";position:relative;user-select:none;:before,:after{content:'';display:", ";width:9px;height:9px;background-image:radial-gradient(circle at 0 0,transparent 9px,#f4f7f 9px);background-repeat:no-repeat;position:absolute;z-index:1;", "}:after{bottom:0;left:auto;right:-9px;transform:rotate(90deg);}:before{bottom:0;left:-9px;}", " ", ":hover{", "{opacity:1;}}"], props => props.theme.tabBG, props => props.active ? 'block' : 'none', props => props.theme.tabBG === '#f4f7fa' ? 'background-image: radial-gradient(circle at 0 0, transparent 9px, #fff 9px);' : 'background-image: radial-gradient(circle at 0 0, transparent 9px, #2f3136 9px);', props => !props.active && `
    :hover {
      background: ${props.theme.tabBGHover};
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      :before, :after {
        background-image: radial-gradient(circle at 0 0, transparent 9px, #eff2f5 9px);
      }
    }
  `, props => props.active && `
    background: ${props.theme.background};
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    opacity: 1;
    z-index: 1;
    :before, :after {
      z-index: 1;
    }
    ${UnsubscribeIcon} {
      fill: ${props.theme.activeTabText};
      opacity: 1;
    }
    ${CommunityName} {
      color: ${props.theme.activeTabText};
    }
  `, UnsubscribeIcon);
const TabContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Tabstyled__TabContent",
  componentId: "jp4pih-4"
})(["padding:0 11px;background:transparent;width:100%;display:flex;justify-content:space-between;align-items:center;", " ", ":hover &{:after{display:none;}}"], props => !props.active && !props.nextActive && `
    :after {
      position: absolute;
      content: "";
      display: inline-block;
      height: 25px;
      width: 1px;
      background: ${props.theme.tabDividerColor};
      bottom: 4px;
      right: 1px;
    }
  `, Tab);
const Community = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Tabstyled__Community",
  componentId: "jp4pih-5"
})(["display:flex;align-items:center;"]);
const CommunityLogo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.attrs({
  alt: 'Logo'
}).withConfig({
  displayName: "Tabstyled__CommunityLogo",
  componentId: "jp4pih-6"
})(["border-radius:4px;width:15px;height:15px;margin-right:7px;object-fit:contain;"]);

/***/ }),

/***/ "./components/Navbar/Tabs/Tabs.js":
/*!****************************************!*\
  !*** ./components/Navbar/Tabs/Tabs.js ***!
  \****************************************/
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
/* harmony import */ var context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! context */ "./context/index.js");
/* harmony import */ var context_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! context/UserContext */ "./context/UserContext.js");
/* harmony import */ var apis_Community__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apis/Community */ "./apis/Community.js");
/* harmony import */ var _Tab_Tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tab/Tab */ "./components/Navbar/Tabs/Tab/Tab.js");
/* harmony import */ var _Tabs_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Tabs.styled */ "./components/Navbar/Tabs/Tabs.styled.js");
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/Navbar/Tabs/Tabs.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Tabs = () => {
  const {
    communitiesLoaded,
    setCommunitiesLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context__WEBPACK_IMPORTED_MODULE_3__["AppContext"]);
  const {
    user
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(context_UserContext__WEBPACK_IMPORTED_MODULE_4__["UserContext"]);
  const {
    data: {
      communities: allCommunities = []
    } = {},
    loading: communitiesLoading,
    error
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(apis_Community__WEBPACK_IMPORTED_MODULE_5__["GET_COMMUNITIES"], {
    onCompleted: () => {
      if (!communitiesLoaded) {
        setCommunitiesLoaded(true);
      }
    }
  });
  if (error) {
    error;
  }
  const {
    query: {
      community: selectedCommunity
    }
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const communities = user ? user.communitiesFollowed : allCommunities;
  return __jsx(_Tabs_styled__WEBPACK_IMPORTED_MODULE_7__["Tabs"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, communities.filter(community => community.url !== 'direct').map((community, index) => {
    const active = community.url === selectedCommunity;
    const nextActive = index < communities.length - 1 ? communities[index + 1].url === selectedCommunity : false;
    return __jsx(_Tab_Tab__WEBPACK_IMPORTED_MODULE_6__["default"], {
      community: community,
      active: active,
      nextActive: nextActive,
      index: index,
      key: community.id,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    });
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./components/Navbar/Tabs/Tabs.styled.js":
/*!***********************************************!*\
  !*** ./components/Navbar/Tabs/Tabs.styled.js ***!
  \***********************************************/
/*! exports provided: Tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


// eslint-disable-next-line import/prefer-default-export
const Tabs = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Tabsstyled__Tabs",
  componentId: "xjsrd1-0"
})(["display:flex;flex-direction:row;max-width:676px;overflow-x:hidden;padding:0 11px;margin-left:-4px;height:34px;"]);

/***/ }),

/***/ "./components/UI/Avatar/index.js":
/*!***************************************!*\
  !*** ./components/UI/Avatar/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/UI/Avatar/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// import dynamic from 'next/dynamic';
// import AvatarPlaceholder from './AvatarPlaceholder';

// const AvatarGenerated = dynamic(import('./AvatarGenerated'), {
//   ssr: false,
//   loading: () => <AvatarPlaceholder />,
// });

const Avatar = _ref => {
  let {
      name,
      src,
      style
    } = _ref,
    props = _objectWithoutProperties(_ref, ["name", "src", "style"]);
  return __jsx("img", _extends({
    alt: "Avatar",
    src: src || `https://ui-avatars.com/api/?name=${name}`,
    style: style
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Avatar);

/***/ }),

/***/ "./components/UI/Badge/index.js":
/*!**************************************!*\
  !*** ./components/UI/Badge/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./components/UI/Badge/styled.js");
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/UI/Badge/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Badge = ({
  count,
  onClick,
  id
}) => __jsx(_styled__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
  id: id,
  onClick: onClick,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 3
  }
}, count);
/* harmony default export */ __webpack_exports__["default"] = (Badge);

/***/ }),

/***/ "./components/UI/Badge/styled.js":
/*!***************************************!*\
  !*** ./components/UI/Badge/styled.js ***!
  \***************************************/
/*! exports provided: Badge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return Badge; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


// eslint-disable-next-line import/prefer-default-export
const Badge = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "styled__Badge",
  componentId: "sc-1qiuqnt-0"
})(["height:19px;width:19px;padding-bottom:0.5px;display:inline-flex;align-items:center;justify-content:center;background:#f55152;color:#fff;line-height:100%;border-radius:5px;font-size:15px;font-family:'Product Sans',sans-serif;font-weight:700;align-self:center;position:relative;top:-1px;height:18.5px;cursor:pointer;user-select:none;"]);

/***/ }),

/***/ "./components/UI/Flag/Flag.js":
/*!************************************!*\
  !*** ./components/UI/Flag/Flag.js ***!
  \************************************/
/*! exports provided: default, FlagCloseButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagCloseButton", function() { return FlagCloseButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var public_icons_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! public/icons/close.svg */ "./public/icons/close.svg");
/* harmony import */ var public_icons_close_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(public_icons_close_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Flag_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Flag.styled */ "./components/UI/Flag/Flag.styled.js");
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/UI/Flag/Flag.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  label,
  action
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Flag_styled__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, label), __jsx(_Flag_styled__WEBPACK_IMPORTED_MODULE_2__["Actions"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(_Flag_styled__WEBPACK_IMPORTED_MODULE_2__["Action"], {
    onClick: action.onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, action.label)));
});
const FlagCloseButton = ({
  closeToast
}) => __jsx(_Flag_styled__WEBPACK_IMPORTED_MODULE_2__["CloseIcon"], {
  onClick: closeToast,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }
}, __jsx("use", {
  xlinkHref: `${public_icons_close_svg__WEBPACK_IMPORTED_MODULE_1___default.a}#icon-close`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
}));

/***/ }),

/***/ "./components/UI/Flag/Flag.styled.js":
/*!*******************************************!*\
  !*** ./components/UI/Flag/Flag.styled.js ***!
  \*******************************************/
/*! exports provided: Container, Label, Actions, Action, CloseIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return Actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Flagstyled__Container",
  componentId: "sc-1hdmjji-0"
})(["position:absolute;bottom:21px;right:22px;z-index:1;width:230px;height:55px;padding:18px 14px;box-sizing:border-box;background:#2f3136;box-shadow:0px 6px 8px rgba(0,0,0,0.1);border-radius:6px;border-left:6px solid #69a9ff;display:none;align-items:center;justify-content:space-between;", " ", " ", ""], props => props.show && `display: flex; `, props => props.type === 'notice' && `border-color: #69a9ff;`, props => props.type === 'danger' && `border-color: #ff4b4b;`);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "Flagstyled__Label",
  componentId: "sc-1hdmjji-1"
})(["font-size:12px;color:#ffffff;line-height:15px;"]);
const Actions = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Flagstyled__Actions",
  componentId: "sc-1hdmjji-2"
})(["display:flex;align-items:center;"]);
const Action = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "Flagstyled__Action",
  componentId: "sc-1hdmjji-3"
})(["font-size:12px;text-transform:uppercase;color:#69a9ff;margin-right:15px;background:none;border:none;box-shadow:none;padding:0;:hover{opacity:0.85;}"]);
const CloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.svg.withConfig({
  displayName: "Flagstyled__CloseIcon",
  componentId: "sc-1hdmjji-4"
})(["width:13px;height:19px;fill:#989ba0;cursor:pointer;"]);

/***/ }),

/***/ "./components/UI/Icons/AddIcon.js":
/*!****************************************!*\
  !*** ./components/UI/Icons/AddIcon.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_icons_right_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! public/icons/right.svg */ "./public/icons/right.svg");
/* harmony import */ var public_icons_right_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(public_icons_right_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/UI/Icons/AddIcon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const BackIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "AddIcon__BackIcon",
  componentId: "ps10f3-0"
})(["width:25px;height:25px;fill:#6a696a;margin-right:8px;cursor:pointer;:hover{opacity:0.85;}"]);
/* harmony default export */ __webpack_exports__["default"] = (({
  onClick
}) => __jsx(BackIcon, {
  id: "right-icon",
  onClick: onClick,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }
}, __jsx("use", {
  xlinkHref: `${public_icons_right_svg__WEBPACK_IMPORTED_MODULE_2___default.a}#icon-right`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
})));

/***/ }),

/***/ "./components/UI/Icons/AnalyticsIcon.js":
/*!**********************************************!*\
  !*** ./components/UI/Icons/AnalyticsIcon.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_icons_analytics_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! public/icons/analytics.svg */ "./public/icons/analytics.svg");
/* harmony import */ var public_icons_analytics_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(public_icons_analytics_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/UI/Icons/AnalyticsIcon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AnalyticsIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "AnalyticsIcon",
  componentId: "sc-12qnmxd-0"
})(["width:16px;height:16px;margin-right:10px;fill:#989ba0;"]);
/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(AnalyticsIcon, {
  id: "analytics-icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }
}, __jsx("use", {
  xlinkHref: `${public_icons_analytics_svg__WEBPACK_IMPORTED_MODULE_2___default.a}#icon-analytics`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
})));

/***/ }),

/***/ "./components/UI/Icons/BackIcon.js":
/*!*****************************************!*\
  !*** ./components/UI/Icons/BackIcon.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_icons_right_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! public/icons/right.svg */ "./public/icons/right.svg");
/* harmony import */ var public_icons_right_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(public_icons_right_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/UI/Icons/BackIcon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const BackIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "BackIcon",
  componentId: "sc-1eq419k-0"
})(["width:25px;height:18px;fill:#6a696a;margin-right:8px;cursor:pointer;:hover{opacity:0.85;}"]);
/* harmony default export */ __webpack_exports__["default"] = (({
  onClick
}) => __jsx(BackIcon, {
  id: "right-icon",
  onClick: onClick,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }
}, __jsx("use", {
  xlinkHref: `${public_icons_right_svg__WEBPACK_IMPORTED_MODULE_2___default.a}#icon-right`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
})));

/***/ }),

/***/ "./components/UI/Icons/CloseIcon.js":
/*!******************************************!*\
  !*** ./components/UI/Icons/CloseIcon.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_icons_close_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! public/icons/close.svg */ "./public/icons/close.svg");
/* harmony import */ var public_icons_close_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(public_icons_close_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/UI/Icons/CloseIcon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const CloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "CloseIcon",
  componentId: "sc-3nhwbr-0"
})(["transition:opacity 0.2s ease-in-out;height:13px;width:22px;fill:#9fa2a7;position:absolute;top:18px;right:20px;cursor:pointer;:hover{opacity:0.75;}"]);
/* harmony default export */ __webpack_exports__["default"] = (({
  onClick,
  style,
  id
}) => __jsx(CloseIcon, {
  id: id || '',
  onClick: onClick,
  style: style || {},
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 3
  }
}, __jsx("use", {
  xlinkHref: `${public_icons_close_svg__WEBPACK_IMPORTED_MODULE_2___default.a}#icon-close`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }
})));

/***/ }),

/***/ "./components/UI/Icons/DarkModeIcon.js":
/*!*********************************************!*\
  !*** ./components/UI/Icons/DarkModeIcon.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_icons_dark_mode_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! public/icons/dark-mode.svg */ "./public/icons/dark-mode.svg");
/* harmony import */ var public_icons_dark_mode_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(public_icons_dark_mode_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/UI/Icons/DarkModeIcon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const DarkModeIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "DarkModeIcon",
  componentId: "sc-1mv4ev-0"
})(["width:16px;height:16px;margin-right:10px;margin-bottom:-2px;fill:none;stroke:#989ba0;"]);
/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(DarkModeIcon, {
  id: "dark-mode-icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }
}, __jsx("use", {
  xlinkHref: `${public_icons_dark_mode_svg__WEBPACK_IMPORTED_MODULE_2___default.a}#icon-dark-mode`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
})));

/***/ }),

/***/ "./components/UI/Icons/EditIcon.js":
/*!*****************************************!*\
  !*** ./components/UI/Icons/EditIcon.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_icons_pencil_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! public/icons/pencil.svg */ "./public/icons/pencil.svg");
/* harmony import */ var public_icons_pencil_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(public_icons_pencil_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/UI/Icons/EditIcon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const EditIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "EditIcon",
  componentId: "qdimqb-0"
})(["width:16px;height:16px;margin-right:10px;fill:#989ba0;"]);
/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(EditIcon, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }
}, __jsx("use", {
  xlinkHref: `${public_icons_pencil_svg__WEBPACK_IMPORTED_MODULE_2___default.a}#icon-pencil`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
})));

/***/ }),

/***/ "./components/UI/Icons/MessageIcon.js":
/*!********************************************!*\
  !*** ./components/UI/Icons/MessageIcon.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_icons_messages_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! public/icons/messages.svg */ "./public/icons/messages.svg");
/* harmony import */ var public_icons_messages_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(public_icons_messages_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/UI/Icons/MessageIcon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const MessageIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "MessageIcon",
  componentId: "sc-1rk3xe-0"
})(["cursor:pointer;top:1px;height:18px;width:18px;position:relative;fill:none;stroke:", ";:hover{opacity:0.85;}"], props => props.active ? '#F55152' : '#989BA0');
/* harmony default export */ __webpack_exports__["default"] = (({
  onClick,
  active
}) => __jsx(MessageIcon, {
  id: "icon-message",
  onClick: onClick,
  active: active,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }
}, __jsx("use", {
  xlinkHref: `${public_icons_messages_svg__WEBPACK_IMPORTED_MODULE_2___default.a}#icon-message`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }
})));

/***/ }),

/***/ "./components/UI/Icons/MomentsIcon.js":
/*!********************************************!*\
  !*** ./components/UI/Icons/MomentsIcon.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_icons_moments_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! public/icons/moments.svg */ "./public/icons/moments.svg");
/* harmony import */ var public_icons_moments_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(public_icons_moments_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/UI/Icons/MomentsIcon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const MomentsIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "MomentsIcon",
  componentId: "sc-190yr9b-0"
})(["width:16px;height:16px;margin-right:10px;fill:#989ba0;"]);
/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(MomentsIcon, {
  id: "moments-icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }
}, __jsx("use", {
  xlinkHref: `${public_icons_moments_svg__WEBPACK_IMPORTED_MODULE_2___default.a}#icon-moments`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
})));

/***/ }),

/***/ "./components/UI/Icons/MoreIcon.js":
/*!*****************************************!*\
  !*** ./components/UI/Icons/MoreIcon.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_icons_more_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! public/icons/more.svg */ "./public/icons/more.svg");
/* harmony import */ var public_icons_more_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(public_icons_more_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/UI/Icons/MoreIcon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const MoreIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.attrs({
  className: 'vs-more-icon'
}).withConfig({
  displayName: "MoreIcon",
  componentId: "r4fai1-0"
})(["cursor:pointer;height:18px;width:18px;margin-left:8px;fill:", ";:hover{opacity:0.85;}"], props => props.active ? '#69a9ff' : props.theme.iconColor);
/* harmony default export */ __webpack_exports__["default"] = (({
  onClick,
  active,
  style
}) => __jsx(MoreIcon, {
  onClick: onClick,
  active: active,
  style: style || {},
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }
}, __jsx("use", {
  xlinkHref: `${public_icons_more_svg__WEBPACK_IMPORTED_MODULE_2___default.a}#icon-more`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }
})));

/***/ }),

/***/ "./components/UI/Icons/NotificationsIcon.js":
/*!**************************************************!*\
  !*** ./components/UI/Icons/NotificationsIcon.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_icons_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! public/icons/@.svg */ "./public/icons/@.svg");
/* harmony import */ var public_icons_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(public_icons_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/UI/Icons/NotificationsIcon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const NotificationsIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.attrs({
  id: 'vs-icon-notifications'
}).withConfig({
  displayName: "NotificationsIcon",
  componentId: "sc-1xq2da8-0"
})(["margin-top:1px;margin-bottom:-2px;height:17px;fill:#989ba0;cursor:pointer;:hover{opacity:0.85;}", ""], props => props.active && `
    fill: #69a9ff !important;
  `);
/* harmony default export */ __webpack_exports__["default"] = (({
  onClick,
  active
}) => __jsx(NotificationsIcon, {
  id: "vs-icon-notifications",
  onClick: onClick,
  active: active,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 3
  }
}, __jsx("use", {
  xlinkHref: `${public_icons_svg__WEBPACK_IMPORTED_MODULE_2___default.a}#icon-notification`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }
})));

/***/ }),

/***/ "./components/UI/Icons/PlusIcon.js":
/*!*****************************************!*\
  !*** ./components/UI/Icons/PlusIcon.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var public_icons_plus2_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! public/icons/plus2.svg */ "./public/icons/plus2.svg");
/* harmony import */ var public_icons_plus2_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(public_icons_plus2_svg__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/UI/Icons/PlusIcon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("use", {
  xlinkHref: `${public_icons_plus2_svg__WEBPACK_IMPORTED_MODULE_1___default.a}#icon-plus2`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 22
  }
}));

/***/ }),

/***/ "./components/UI/Icons/ProfileIcon.js":
/*!********************************************!*\
  !*** ./components/UI/Icons/ProfileIcon.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_icons_more_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! public/icons/more.svg */ "./public/icons/more.svg");
/* harmony import */ var public_icons_more_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(public_icons_more_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/UI/Icons/ProfileIcon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const MoreIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "ProfileIcon__MoreIcon",
  componentId: "aqc33b-0"
})(["width:18px;height:18px;cursor:pointer;display:block;outline:none;display:inline-flex;margin:0 2px;margin-right:-5px;fill:#989ba0;:hover{opacity:0.85;}", ""], props => props.active && `
    fill: #69a9ff;
  `);
/* harmony default export */ __webpack_exports__["default"] = (({
  onClick,
  active
}) => __jsx(MoreIcon, {
  id: "profile-icon",
  onClick: onClick,
  active: active,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 3
  }
}, __jsx("use", {
  xlinkHref: `${public_icons_more_svg__WEBPACK_IMPORTED_MODULE_2___default.a}#icon-more`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }
})));

/***/ }),

/***/ "./components/UI/Icons/RolesIcon.js":
/*!******************************************!*\
  !*** ./components/UI/Icons/RolesIcon.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var public_icons_roles_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! public/icons/roles.svg */ "./public/icons/roles.svg");
/* harmony import */ var public_icons_roles_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(public_icons_roles_svg__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/UI/Icons/RolesIcon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("use", {
  xlinkHref: `${public_icons_roles_svg__WEBPACK_IMPORTED_MODULE_1___default.a}#icon-roles`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 22
  }
}));

/***/ }),

/***/ "./components/UI/Icons/SearchIcon.js":
/*!*******************************************!*\
  !*** ./components/UI/Icons/SearchIcon.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_icons_search_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! public/icons/search.svg */ "./public/icons/search.svg");
/* harmony import */ var public_icons_search_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(public_icons_search_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/UI/Icons/SearchIcon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SearchIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "SearchIcon",
  componentId: "nso806-0"
})(["cursor:pointer;position:relative;top:-1px;height:19px;width:19px;fill:", ";:hover{opacity:0.85;}"], props => props.active ? '#69a9ff' : props.theme.iconColor);
/* harmony default export */ __webpack_exports__["default"] = (({
  onClick,
  active
}) => __jsx(SearchIcon, {
  onClick: onClick,
  active: active,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }
}, __jsx("use", {
  xlinkHref: `${public_icons_search_svg__WEBPACK_IMPORTED_MODULE_2___default.a}#icon-search`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }
})));

/***/ }),

/***/ "./components/UI/Icons/SettingsIcon.js":
/*!*********************************************!*\
  !*** ./components/UI/Icons/SettingsIcon.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_icons_settings_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! public/icons/settings.svg */ "./public/icons/settings.svg");
/* harmony import */ var public_icons_settings_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(public_icons_settings_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/UI/Icons/SettingsIcon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SettingsIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "SettingsIcon",
  componentId: "sc-1b3d4n7-0"
})(["width:16px;height:16px;margin-right:10px;fill:#989ba0;"]);
/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(SettingsIcon, {
  id: "settings-icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }
}, __jsx("use", {
  xlinkHref: `${public_icons_settings_svg__WEBPACK_IMPORTED_MODULE_2___default.a}#icon-settings`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
})));

/***/ }),

/***/ "./components/UI/Icons/TopicsIcon.js":
/*!*******************************************!*\
  !*** ./components/UI/Icons/TopicsIcon.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_icons_topic_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! public/icons/topic.svg */ "./public/icons/topic.svg");
/* harmony import */ var public_icons_topic_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(public_icons_topic_svg__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/UI/Icons/TopicsIcon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TopicsIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "TopicsIcon",
  componentId: "sc-6kmorj-0"
})(["width:16px;height:16px;margin-right:10px;fill:#989ba0;"]);
/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(TopicsIcon, {
  id: "topic-icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }
}, __jsx("use", {
  xlinkHref: `${public_icons_topic_svg__WEBPACK_IMPORTED_MODULE_2___default.a}#icon-topic`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
})));

/***/ }),

/***/ "./components/UI/Icons/UserIcon.js":
/*!*****************************************!*\
  !*** ./components/UI/Icons/UserIcon.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var public_icons_user_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! public/icons/user.svg */ "./public/icons/user.svg");
/* harmony import */ var public_icons_user_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(public_icons_user_svg__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/UI/Icons/UserIcon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("use", {
  xlinkHref: `${public_icons_user_svg__WEBPACK_IMPORTED_MODULE_1___default.a}#icon-user`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 22
  }
}));

/***/ }),

/***/ "./components/UI/Icons/UsersIcon.js":
/*!******************************************!*\
  !*** ./components/UI/Icons/UsersIcon.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var public_icons_users_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! public/icons/users.svg */ "./public/icons/users.svg");
/* harmony import */ var public_icons_users_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(public_icons_users_svg__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/UI/Icons/UsersIcon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("use", {
  xlinkHref: `${public_icons_users_svg__WEBPACK_IMPORTED_MODULE_1___default.a}#icon-users`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 22
  }
}));

/***/ }),

/***/ "./components/UI/Icons/index.js":
/*!**************************************!*\
  !*** ./components/UI/Icons/index.js ***!
  \**************************************/
/*! exports provided: CloseIcon, NotificationsIcon, ProfileIcon, SettingsIcon, AnalyticsIcon, DarkModeIcon, TopicsIcon, MomentsIcon, UserIcon, SearchIcon, PlusIcon, MoreIcon, EditIcon, BackIcon, AddIcon, MessageIcon, UsersIcon, RolesIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CloseIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CloseIcon */ "./components/UI/Icons/CloseIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return _CloseIcon__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _NotificationsIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationsIcon */ "./components/UI/Icons/NotificationsIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationsIcon", function() { return _NotificationsIcon__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ProfileIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileIcon */ "./components/UI/Icons/ProfileIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileIcon", function() { return _ProfileIcon__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _SettingsIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SettingsIcon */ "./components/UI/Icons/SettingsIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsIcon", function() { return _SettingsIcon__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _AnalyticsIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnalyticsIcon */ "./components/UI/Icons/AnalyticsIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnalyticsIcon", function() { return _AnalyticsIcon__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _DarkModeIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DarkModeIcon */ "./components/UI/Icons/DarkModeIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DarkModeIcon", function() { return _DarkModeIcon__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _TopicsIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TopicsIcon */ "./components/UI/Icons/TopicsIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicsIcon", function() { return _TopicsIcon__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _MomentsIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MomentsIcon */ "./components/UI/Icons/MomentsIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MomentsIcon", function() { return _MomentsIcon__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _UserIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserIcon */ "./components/UI/Icons/UserIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserIcon", function() { return _UserIcon__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _SearchIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SearchIcon */ "./components/UI/Icons/SearchIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchIcon", function() { return _SearchIcon__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _PlusIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PlusIcon */ "./components/UI/Icons/PlusIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlusIcon", function() { return _PlusIcon__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _MoreIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MoreIcon */ "./components/UI/Icons/MoreIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MoreIcon", function() { return _MoreIcon__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _EditIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./EditIcon */ "./components/UI/Icons/EditIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditIcon", function() { return _EditIcon__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _BackIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./BackIcon */ "./components/UI/Icons/BackIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BackIcon", function() { return _BackIcon__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _AddIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AddIcon */ "./components/UI/Icons/AddIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddIcon", function() { return _AddIcon__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _MessageIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./MessageIcon */ "./components/UI/Icons/MessageIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageIcon", function() { return _MessageIcon__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _UsersIcon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./UsersIcon */ "./components/UI/Icons/UsersIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersIcon", function() { return _UsersIcon__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _RolesIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./RolesIcon */ "./components/UI/Icons/RolesIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RolesIcon", function() { return _RolesIcon__WEBPACK_IMPORTED_MODULE_17__["default"]; });




















// todo: make styles available via props (width, height, fill)
// do margin styles in icon wrappers



/***/ }),

/***/ "./components/UI/Loader/Loader.js":
/*!****************************************!*\
  !*** ./components/UI/Loader/Loader.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loader_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.styled */ "./components/UI/Loader/Loader.styled.js");
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/UI/Loader/Loader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(_Loader_styled__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(_Loader_styled__WEBPACK_IMPORTED_MODULE_1__["LogoBox"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx(_Loader_styled__WEBPACK_IMPORTED_MODULE_1__["Logo"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  })), __jsx(_Loader_styled__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(_Loader_styled__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
    width: "20px",
    height: "20px",
    viewBox: "0 0 66 66",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_Loader_styled__WEBPACK_IMPORTED_MODULE_1__["Circle"], {
    fill: "none",
    strokeWidth: 6,
    strokeLinecap: "round",
    cx: 33,
    cy: 33,
    r: 30,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  })), "Loading..."));
});

/***/ }),

/***/ "./components/UI/Loader/Loader.styled.js":
/*!***********************************************!*\
  !*** ./components/UI/Loader/Loader.styled.js ***!
  \***********************************************/
/*! exports provided: Container, LogoBox, Logo, Text, Spinner, Circle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoBox", function() { return LogoBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var public_images_loader_bg_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! public/images/loader-bg.jpg */ "./public/images/loader-bg.jpg");
/* harmony import */ var public_images_loader_bg_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(public_images_loader_bg_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_logo_wide_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! public/logo-wide.svg */ "./public/logo-wide.svg");
/* harmony import */ var public_logo_wide_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(public_logo_wide_svg__WEBPACK_IMPORTED_MODULE_2__);



const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Loaderstyled__Container",
  componentId: "sc-118xkj5-0"
})(["display:flex;align-items:center;justify-content:center;position:absolute;top:0;bottom:0;left:0;right:0;z-index:20;background-image:url(", ");background-size:cover;background-position:center;overflow:hidden;:before{content:'';display:block;position:absolute;top:0;bottom:0;right:0;left:0;background:rgba(255,255,255,0.92);z-index:0;}"], public_images_loader_bg_jpg__WEBPACK_IMPORTED_MODULE_1___default.a);
const LogoBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Loaderstyled__LogoBox",
  componentId: "sc-118xkj5-1"
})(["position:relative;display:flex;align-items:center;justify-content:center;"]);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.attrs({
  src: public_logo_wide_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
  alt: 'ciscord'
}).withConfig({
  displayName: "Loaderstyled__Logo",
  componentId: "sc-118xkj5-2"
})([""]);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Loaderstyled__Text",
  componentId: "sc-118xkj5-3"
})(["display:flex;align-items:center;justify-content:center;position:absolute;top:auto;bottom:38px;left:0;right:0;font-family:'Helvetica Neue';font-size:16px;color:#33353b;"]);
const Spinner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.svg.withConfig({
  displayName: "Loaderstyled__Spinner",
  componentId: "sc-118xkj5-4"
})(["@keyframes rotator{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(270deg);transform:rotate(270deg);}}animation:rotator 1.4s linear infinite;margin-right:10px;"]);
const Circle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.circle.withConfig({
  displayName: "Loaderstyled__Circle",
  componentId: "sc-118xkj5-5"
})(["@keyframes dash{0%{stroke-dashoffset:187;}50%{stroke-dashoffset:46.75;-webkit-transform:rotate(135deg);transform:rotate(135deg);}100%{stroke-dashoffset:187;-webkit-transform:rotate(450deg);transform:rotate(450deg);}}stroke-dasharray:187;stroke-dashoffset:0;transform-origin:center;animation:dash 1.4s ease-in-out infinite;stroke:#33353b;"]);

/***/ }),

/***/ "./components/UI/Loader/index.js":
/*!***************************************!*\
  !*** ./components/UI/Loader/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader */ "./components/UI/Loader/Loader.js");

/* harmony default export */ __webpack_exports__["default"] = (_Loader__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/UI/Toggle/Toggle.js":
/*!****************************************!*\
  !*** ./components/UI/Toggle/Toggle.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var public_icons_CheckboxArrow_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! public/icons/CheckboxArrow.svg */ "./public/icons/CheckboxArrow.svg");
/* harmony import */ var public_icons_CheckboxArrow_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(public_icons_CheckboxArrow_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Toggle_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Toggle.styled */ "./components/UI/Toggle/Toggle.styled.js");
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/components/UI/Toggle/Toggle.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Toggle = ({
  value,
  onChange,
  name
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Toggle_styled__WEBPACK_IMPORTED_MODULE_2__["Toggle"], {
  img: public_icons_CheckboxArrow_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
  name: name || '',
  type: "checkbox",
  checked: value,
  onChange: onChange,
  id: name || 'checkboxNotifications',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}), __jsx(_Toggle_styled__WEBPACK_IMPORTED_MODULE_2__["ToggleLabel"], {
  htmlFor: name || 'checkboxNotifications',
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (Toggle);

/***/ }),

/***/ "./components/UI/Toggle/Toggle.styled.js":
/*!***********************************************!*\
  !*** ./components/UI/Toggle/Toggle.styled.js ***!
  \***********************************************/
/*! exports provided: ToggleLabel, Toggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleLabel", function() { return ToggleLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toggle", function() { return Toggle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ToggleLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label.withConfig({
  displayName: "Togglestyled__ToggleLabel",
  componentId: "sc-1bmbuvd-0"
})(["width:54px;border-radius:27px;background:", ";cursor:pointer;&::after{content:'';display:block;border-radius:50%;height:20px;width:20px;margin:5px;background:", ";transition:0.5s;align-items:center;justify-content:center;padding:0 5px;box-sizing:border-box;}"], props => props.theme.checkboxBG, props => props.theme.checkboxCircleBG);
const Toggle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "Togglestyled__Toggle",
  componentId: "sc-1bmbuvd-1"
})(["opacity:0;z-index:1;border-radius:27px;width:42px;&:checked + ", "{background:#0095ff;&::after{content:url(", ");display:flex;border-radius:50%;width:20px;height:20px;margin-left:29px;transition:0.4s;background-color:#fff;position:relative;}}"], ToggleLabel, ({
  img
}) => img);

/***/ }),

/***/ "./context/AppContext.js":
/*!*******************************!*\
  !*** ./context/AppContext.js ***!
  \*******************************/
/*! exports provided: default, AppContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return AppContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/context/AppContext.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const AppContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const AppProvider = ({
  children
}) => {
  const {
    0: userLoaded,
    1: setUserLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: communitiesLoaded,
    1: setCommunitiesLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: channelLoaded,
    1: setChannelLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: chatLoaded,
    1: setChatLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const appLoaded = userLoaded && communitiesLoaded && channelLoaded && chatLoaded;
  return __jsx(AppContext.Provider, {
    value: {
      appLoaded,
      userLoaded,
      setUserLoaded,
      communitiesLoaded,
      setCommunitiesLoaded,
      channelLoaded,
      setChannelLoaded,
      chatLoaded,
      setChatLoaded
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, children);
};


/***/ }),

/***/ "./context/ThemeProvider.js":
/*!**********************************!*\
  !*** ./context/ThemeProvider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/themes */ "./styles/themes.js");
/* harmony import */ var use_dark_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-dark-mode */ "use-dark-mode");
/* harmony import */ var use_dark_mode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(use_dark_mode__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/context/ThemeProvider.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (({
  children
}) => {
  const {
    value: isDarkMode
  } = use_dark_mode__WEBPACK_IMPORTED_MODULE_3___default()(false);
  const theme = isDarkMode ? styles_themes__WEBPACK_IMPORTED_MODULE_2__["themeDark"] : styles_themes__WEBPACK_IMPORTED_MODULE_2__["themeWhite"];
  const {
    0: mounted,
    1: setMounted
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setMounted(true);
  }, []);
  const body = __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 16
    }
  }, children);

  // prevents ssr flash for mismatched dark mode
  // https://brianlovin.com/overthought/adding-dark-mode-with-next-js
  if (!mounted) {
    return __jsx("div", {
      style: {
        visibility: 'hidden'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 12
      }
    }, body);
  }
  return body;
});

/***/ }),

/***/ "./context/UploadManager.js":
/*!**********************************!*\
  !*** ./context/UploadManager.js ***!
  \**********************************/
/*! exports provided: default, UploadManagerContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UploadManagerProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadManagerContext", function() { return UploadManagerContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/context/UploadManager.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const UploadManagerContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  uploadQueue: []
});
UploadManagerContext.displayName = 'UploadManager';
const UploadManagerProvider = ({
  children
}) => {
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: uploadQueue,
    1: setUploadQueue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: maxSteps,
    1: setMaxStep
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: sendMessageStatus,
    1: setSendMessageStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    label: '',
    step: 0
  });
  const upload = async () => {
    const nextUpload = uploadQueue[0];
    if (nextUpload && !loading) {
      setLoading(true);
      setMaxStep(nextUpload.data.attachments.length + 4);
      setSendMessageStatus({
        label: 'Message processing',
        step: 1
      });
      const uploadList = nextUpload.data.attachments.map(async file => {
        const url = `https://biznessapps.org/graphql/presign`;
        const filename = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])().slice(0, 8) + file.name;
        const params = new URLSearchParams({
          key: filename
        });
        let resp = await fetch(url, {
          method: "POST",
          body: params
        });
        let presignResp = await resp.json();
        resp = await fetch(presignResp.url, {
          method: "PUT",
          headers: {
            "Content-Type": file.type
          },
          body: file
        });
        if (filename) {
          setSendMessageStatus(({
            step
          }) => ({
            label: `${step - 2} / ${nextUpload.data.attachments.length}`,
            step: step + 1
          }));
        }
        return filename;
      });
      setSendMessageStatus({
        label: 'File uploading',
        step: 2
      });
      const sendMessage = async () => {
        const filesUrlList = await Promise.all(uploadList);
        setSendMessageStatus(({
          step
        }) => ({
          label: 'Message sending',
          step: step + 1
        }));
        await nextUpload.onSendMessage(filesUrlList);
        setSendMessageStatus({
          label: 'Success',
          step: setSendMessageStatus.step + 1
        });
        setMaxStep(0);
        setSendMessageStatus({
          label: '',
          step: 0
        });
        setUploadQueue(currentQueue => currentQueue.slice(1));
        setLoading(false);
      };
      sendMessage();
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    upload();
  }, [uploadQueue.length, loading]);
  const addUploadToQueue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(uploadItem => {
    setUploadQueue(currentQuery => [...currentQuery, uploadItem]);
  }, []);
  return __jsx(UploadManagerContext.Provider, {
    value: {
      uploadQueue,
      addUploadToQueue,
      uploadProgress: _objectSpread({
        maxSteps
      }, sendMessageStatus)
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 5
    }
  }, children);
};


/***/ }),

/***/ "./context/UserContext.js":
/*!********************************!*\
  !*** ./context/UserContext.js ***!
  \********************************/
/*! exports provided: default, UserContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/main.cjs");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/config */ "./utils/config.js");
/* harmony import */ var apis_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apis/User */ "./apis/User.js");
/* harmony import */ var apis_Message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apis/Message */ "./apis/Message.js");
/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AppContext */ "./context/AppContext.js");
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/context/UserContext.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const UserContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const UserProvider = ({
  children
}) => {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: messageQueue,
    1: setMessageQueue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const messageQueueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(messageQueue);
  messageQueueRef.current = messageQueue;
  const [logoutUser] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(apis_User__WEBPACK_IMPORTED_MODULE_4__["LOGOUT_USER"]);
  const [fetchMe, {
    data: {
      me,
      loading
    } = {}
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"])(apis_User__WEBPACK_IMPORTED_MODULE_4__["GET_ME"], {
    fetchPolicy: 'network-only',
    onCompleted: () => {
      sessionStorage.setItem('tenant', Object(utils_config__WEBPACK_IMPORTED_MODULE_3__["COMPANY_NAME"])());
      setUser(me);
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(`/[company]/[community]/[channel]`, `/${Object(utils_config__WEBPACK_IMPORTED_MODULE_3__["COMPANY_NAME"])()}/general/general`, {
        shallow: true
      });
    }
  });
  const {
    userLoaded,
    setUserLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_AppContext__WEBPACK_IMPORTED_MODULE_6__["AppContext"]);
  const [deleteMessageMutation] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(apis_Message__WEBPACK_IMPORTED_MODULE_5__["DELETE_MESSAGE"]);
  const [deleteReplyMessage] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(apis_Message__WEBPACK_IMPORTED_MODULE_5__["DELETE_REPLY_MESSAGE"]);
  const [fetchOnly, {
    data: {
      me: me1
    } = {}
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"])(apis_User__WEBPACK_IMPORTED_MODULE_4__["GET_ME"], {
    fetchPolicy: 'network-only',
    onCompleted: () => {
      sessionStorage.setItem('tenant', Object(utils_config__WEBPACK_IMPORTED_MODULE_3__["COMPANY_NAME"])());
      setUser(me1);
      if (!userLoaded) {
        setUserLoaded(true);
      }
    }
  });
  const logout = async () => {
    try {
      await logoutUser({});
    } catch (error) {
      alert(error);
    }
    sessionStorage.removeItem('token');
    setUser(null);
    if (window) {
      window.sessionStorage.setItem('logout', Date.now());
      sessionStorage.removeItem('user');
    }
  };
  const signin = token => {
    sessionStorage.setItem('token', token);
    fetchMe();
  };
  const getMe = () => {
    fetchOnly();
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!user) {
      getMe();
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (user === null) {
      const localState = JSON.parse(sessionStorage.getItem('user'));
      if (localState) {
        setUser(localState);
      }
    } else if (sessionStorage.getItem('tenant') !== Object(utils_config__WEBPACK_IMPORTED_MODULE_3__["COMPANY_NAME"])()) {
      logout();
    } else {
      sessionStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (messageQueue.length > 0) {
      setTimeout(deleteMessage, 5000);
    }
  }, [messageQueue]);
  const addMessageQueue = messageId => {
    if (messageQueueRef.current.indexOf(messageId) === -1) {
      setMessageQueue([...messageQueueRef.current, messageId]);
    }
  };
  const removeMessageQueue = messageId => {
    const data = messageQueueRef.current.filter(e => e !== messageId);
    setMessageQueue(data);
  };
  const deleteMessage = () => {
    const messageId = messageQueueRef.current.shift();
    if (messageId) {
      setMessageQueue(messageQueueRef.current);
      deleteMessageMutation({
        variables: {
          messageId
        }
      });
      deleteReplyMessage({
        variables: {
          messageId
        }
      });
    }
  };
  const getMessageQueue = () => {
    return messageQueueRef.current;
  };
  return __jsx(UserContext.Provider, {
    value: {
      isLogged: !!user,
      user,
      setUser,
      getMe,
      signin,
      logout,
      loading,
      addMessageQueue,
      removeMessageQueue,
      getMessageQueue
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 5
    }
  }, children);
};


/***/ }),

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/*! exports provided: UserContext, AppContext, UploadManagerContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserContext */ "./context/UserContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return _UserContext__WEBPACK_IMPORTED_MODULE_0__["UserContext"]; });

/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppContext */ "./context/AppContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return _AppContext__WEBPACK_IMPORTED_MODULE_1__["AppContext"]; });

/* harmony import */ var _UploadManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadManager */ "./context/UploadManager.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadManagerContext", function() { return _UploadManager__WEBPACK_IMPORTED_MODULE_2__["UploadManagerContext"]; });





/***/ }),

/***/ "./hooks/index.js":
/*!************************!*\
  !*** ./hooks/index.js ***!
  \************************/
/*! exports provided: useEscapeToClose, useKeyboardShortcut, useWindowDimensions, useModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useEscapeToClose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useEscapeToClose */ "./hooks/useEscapeToClose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEscapeToClose", function() { return _useEscapeToClose__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _useKeyboardShortcut__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useKeyboardShortcut */ "./hooks/useKeyboardShortcut.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useKeyboardShortcut", function() { return _useKeyboardShortcut__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useWindowDimensions */ "./hooks/useWindowDimensions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWindowDimensions", function() { return _useWindowDimensions__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _useModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useModal */ "./hooks/useModal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useModal", function() { return _useModal__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./hooks/useEscapeToClose.js":
/*!***********************************!*\
  !*** ./hooks/useEscapeToClose.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useEscapeToClose; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useEscapeToClose(onClose) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function handleKeyDown(e) {
      if (e.keyCode === 27) {
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
}

/***/ }),

/***/ "./hooks/useKeyboardShortcut.js":
/*!**************************************!*\
  !*** ./hooks/useKeyboardShortcut.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useKeyboardShortcut; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useKeyboardShortcut(keyMap) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function handleKeyPress(e) {
      if (!e.shiftKey) {
        return;
      }
      const callback = keyMap[e.key];
      if (callback) {
        callback();
      }
    }
    document.addEventListener('keypress', handleKeyPress);
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  });
}

/***/ }),

/***/ "./hooks/useModal.js":
/*!***************************!*\
  !*** ./hooks/useModal.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useModal = () => {
  const {
    0: showModal,
    1: setShowModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  function toggle() {
    setShowModal(!showModal);
  }
  const onKeyDown = e => {
    if (e.key === 'Escape') {
      setShowModal(false);
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (false) {}
    return window.removeEventListener('keydown', onKeyDown);
  }, []);
  return {
    isShowing: showModal,
    toggle,
    hide: () => setShowModal(false),
    show: () => setShowModal(true)
  };
};
/* harmony default export */ __webpack_exports__["default"] = (useModal);

/***/ }),

/***/ "./hooks/useWindowDimensions.js":
/*!**************************************!*\
  !*** ./hooks/useWindowDimensions.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function getWindowDimensions() {
  const {
    innerWidth: width,
    innerHeight: height
  } = window;
  return {
    width,
    height
  };
}
const useWindowDimensions = () => {
  const {
    0: windowDimensions,
    1: setWindowDimensions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getWindowDimensions());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
};
/* harmony default export */ __webpack_exports__["default"] = (useWindowDimensions);

/***/ }),

/***/ "./node_modules/@apollo/client/cache/cache.cjs":
/*!*****************************************************!*\
  !*** ./node_modules/@apollo/client/cache/cache.cjs ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var tslib = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.js");
var optimism = __webpack_require__(/*! optimism */ "./node_modules/@apollo/client/node_modules/optimism/lib/bundle.cjs.js");
var utilities = __webpack_require__(/*! ../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
var equality = __webpack_require__(/*! @wry/equality */ "./node_modules/@apollo/client/node_modules/@wry/equality/lib/equality.js");
var trie = __webpack_require__(/*! @wry/trie */ "@wry/trie");
var graphql = __webpack_require__(/*! graphql */ "graphql");
var context = __webpack_require__(/*! @wry/context */ "./node_modules/@apollo/client/node_modules/@wry/context/lib/context.js");

var ApolloCache = (function () {
    function ApolloCache() {
        this.getFragmentDoc = optimism.wrap(utilities.getFragmentQueryDocument);
    }
    ApolloCache.prototype.batch = function (options) {
        var _this = this;
        var optimisticId = typeof options.optimistic === "string" ? options.optimistic :
            options.optimistic === false ? null : void 0;
        var updateResult;
        this.performTransaction(function () { return updateResult = options.update(_this); }, optimisticId);
        return updateResult;
    };
    ApolloCache.prototype.recordOptimisticTransaction = function (transaction, optimisticId) {
        this.performTransaction(transaction, optimisticId);
    };
    ApolloCache.prototype.transformDocument = function (document) {
        return document;
    };
    ApolloCache.prototype.transformForLink = function (document) {
        return document;
    };
    ApolloCache.prototype.identify = function (object) {
        return;
    };
    ApolloCache.prototype.gc = function () {
        return [];
    };
    ApolloCache.prototype.modify = function (options) {
        return false;
    };
    ApolloCache.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = !!options.optimistic; }
        return this.read(tslib.__assign(tslib.__assign({}, options), { rootId: options.id || 'ROOT_QUERY', optimistic: optimistic }));
    };
    ApolloCache.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = !!options.optimistic; }
        return this.read(tslib.__assign(tslib.__assign({}, options), { query: this.getFragmentDoc(options.fragment, options.fragmentName), rootId: options.id, optimistic: optimistic }));
    };
    ApolloCache.prototype.writeQuery = function (_a) {
        var id = _a.id, data = _a.data, options = tslib.__rest(_a, ["id", "data"]);
        return this.write(Object.assign(options, {
            dataId: id || 'ROOT_QUERY',
            result: data,
        }));
    };
    ApolloCache.prototype.writeFragment = function (_a) {
        var id = _a.id, data = _a.data, fragment = _a.fragment, fragmentName = _a.fragmentName, options = tslib.__rest(_a, ["id", "data", "fragment", "fragmentName"]);
        return this.write(Object.assign(options, {
            query: this.getFragmentDoc(fragment, fragmentName),
            dataId: id,
            result: data,
        }));
    };
    ApolloCache.prototype.updateQuery = function (options, update) {
        return this.batch({
            update: function (cache) {
                var value = cache.readQuery(options);
                var data = update(value);
                if (data === void 0 || data === null)
                    return value;
                cache.writeQuery(tslib.__assign(tslib.__assign({}, options), { data: data }));
                return data;
            },
        });
    };
    ApolloCache.prototype.updateFragment = function (options, update) {
        return this.batch({
            update: function (cache) {
                var value = cache.readFragment(options);
                var data = update(value);
                if (data === void 0 || data === null)
                    return value;
                cache.writeFragment(tslib.__assign(tslib.__assign({}, options), { data: data }));
                return data;
            },
        });
    };
    return ApolloCache;
}());

exports.Cache = void 0;
(function (Cache) {
})(exports.Cache || (exports.Cache = {}));

var MissingFieldError = (function (_super) {
    tslib.__extends(MissingFieldError, _super);
    function MissingFieldError(message, path, query, variables) {
        var _a;
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.path = path;
        _this.query = query;
        _this.variables = variables;
        if (Array.isArray(_this.path)) {
            _this.missing = _this.message;
            for (var i = _this.path.length - 1; i >= 0; --i) {
                _this.missing = (_a = {}, _a[_this.path[i]] = _this.missing, _a);
            }
        }
        else {
            _this.missing = _this.path;
        }
        _this.__proto__ = MissingFieldError.prototype;
        return _this;
    }
    return MissingFieldError;
}(Error));

var hasOwn = Object.prototype.hasOwnProperty;
function isNullish(value) {
    return value === null || value === void 0;
}
function defaultDataIdFromObject(_a, context) {
    var __typename = _a.__typename, id = _a.id, _id = _a._id;
    if (typeof __typename === "string") {
        if (context) {
            context.keyObject =
                !isNullish(id) ? { id: id } :
                    !isNullish(_id) ? { _id: _id } :
                        void 0;
        }
        if (isNullish(id) && !isNullish(_id)) {
            id = _id;
        }
        if (!isNullish(id)) {
            return "".concat(__typename, ":").concat((typeof id === "number" ||
                typeof id === "string") ? id : JSON.stringify(id));
        }
    }
}
var defaultConfig = {
    dataIdFromObject: defaultDataIdFromObject,
    addTypename: true,
    resultCaching: true,
    canonizeResults: false,
};
function normalizeConfig(config) {
    return utilities.compact(defaultConfig, config);
}
function shouldCanonizeResults(config) {
    var value = config.canonizeResults;
    return value === void 0 ? defaultConfig.canonizeResults : value;
}
function getTypenameFromStoreObject(store, objectOrReference) {
    return utilities.isReference(objectOrReference)
        ? store.get(objectOrReference.__ref, "__typename")
        : objectOrReference && objectOrReference.__typename;
}
var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
function fieldNameFromStoreName(storeFieldName) {
    var match = storeFieldName.match(TypeOrFieldNameRegExp);
    return match ? match[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result, variables) {
    if (utilities.isNonNullObject(result)) {
        return utilities.isArray(result)
            ? result.every(function (item) { return selectionSetMatchesResult(selectionSet, item, variables); })
            : selectionSet.selections.every(function (field) {
                if (utilities.isField(field) && utilities.shouldInclude(field, variables)) {
                    var key = utilities.resultKeyNameFromField(field);
                    return hasOwn.call(result, key) &&
                        (!field.selectionSet ||
                            selectionSetMatchesResult(field.selectionSet, result[key], variables));
                }
                return true;
            });
    }
    return false;
}
function storeValueIsStoreObject(value) {
    return utilities.isNonNullObject(value) &&
        !utilities.isReference(value) &&
        !utilities.isArray(value);
}
function makeProcessedFieldsMerger() {
    return new utilities.DeepMerger;
}
function extractFragmentContext(document, fragments) {
    var fragmentMap = utilities.createFragmentMap(utilities.getFragmentDefinitions(document));
    return {
        fragmentMap: fragmentMap,
        lookupFragment: function (name) {
            var def = fragmentMap[name];
            if (!def && fragments) {
                def = fragments.lookup(name);
            }
            return def || null;
        },
    };
}

var DELETE = Object.create(null);
var delModifier = function () { return DELETE; };
var INVALIDATE = Object.create(null);
exports.EntityStore = (function () {
    function EntityStore(policies, group) {
        var _this = this;
        this.policies = policies;
        this.group = group;
        this.data = Object.create(null);
        this.rootIds = Object.create(null);
        this.refs = Object.create(null);
        this.getFieldValue = function (objectOrReference, storeFieldName) { return utilities.maybeDeepFreeze(utilities.isReference(objectOrReference)
            ? _this.get(objectOrReference.__ref, storeFieldName)
            : objectOrReference && objectOrReference[storeFieldName]); };
        this.canRead = function (objOrRef) {
            return utilities.isReference(objOrRef)
                ? _this.has(objOrRef.__ref)
                : typeof objOrRef === "object";
        };
        this.toReference = function (objOrIdOrRef, mergeIntoStore) {
            if (typeof objOrIdOrRef === "string") {
                return utilities.makeReference(objOrIdOrRef);
            }
            if (utilities.isReference(objOrIdOrRef)) {
                return objOrIdOrRef;
            }
            var id = _this.policies.identify(objOrIdOrRef)[0];
            if (id) {
                var ref = utilities.makeReference(id);
                if (mergeIntoStore) {
                    _this.merge(id, objOrIdOrRef);
                }
                return ref;
            }
        };
    }
    EntityStore.prototype.toObject = function () {
        return tslib.__assign({}, this.data);
    };
    EntityStore.prototype.has = function (dataId) {
        return this.lookup(dataId, true) !== void 0;
    };
    EntityStore.prototype.get = function (dataId, fieldName) {
        this.group.depend(dataId, fieldName);
        if (hasOwn.call(this.data, dataId)) {
            var storeObject = this.data[dataId];
            if (storeObject && hasOwn.call(storeObject, fieldName)) {
                return storeObject[fieldName];
            }
        }
        if (fieldName === "__typename" &&
            hasOwn.call(this.policies.rootTypenamesById, dataId)) {
            return this.policies.rootTypenamesById[dataId];
        }
        if (this instanceof Layer) {
            return this.parent.get(dataId, fieldName);
        }
    };
    EntityStore.prototype.lookup = function (dataId, dependOnExistence) {
        if (dependOnExistence)
            this.group.depend(dataId, "__exists");
        if (hasOwn.call(this.data, dataId)) {
            return this.data[dataId];
        }
        if (this instanceof Layer) {
            return this.parent.lookup(dataId, dependOnExistence);
        }
        if (this.policies.rootTypenamesById[dataId]) {
            return Object.create(null);
        }
    };
    EntityStore.prototype.merge = function (older, newer) {
        var _this = this;
        var dataId;
        if (utilities.isReference(older))
            older = older.__ref;
        if (utilities.isReference(newer))
            newer = newer.__ref;
        var existing = typeof older === "string"
            ? this.lookup(dataId = older)
            : older;
        var incoming = typeof newer === "string"
            ? this.lookup(dataId = newer)
            : newer;
        if (!incoming)
            return;
        __DEV__ ? globals.invariant(typeof dataId === "string", "store.merge expects a string ID") : globals.invariant(typeof dataId === "string", 1);
        var merged = new utilities.DeepMerger(storeObjectReconciler).merge(existing, incoming);
        this.data[dataId] = merged;
        if (merged !== existing) {
            delete this.refs[dataId];
            if (this.group.caching) {
                var fieldsToDirty_1 = Object.create(null);
                if (!existing)
                    fieldsToDirty_1.__exists = 1;
                Object.keys(incoming).forEach(function (storeFieldName) {
                    if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
                        fieldsToDirty_1[storeFieldName] = 1;
                        var fieldName = fieldNameFromStoreName(storeFieldName);
                        if (fieldName !== storeFieldName &&
                            !_this.policies.hasKeyArgs(merged.__typename, fieldName)) {
                            fieldsToDirty_1[fieldName] = 1;
                        }
                        if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
                            delete merged[storeFieldName];
                        }
                    }
                });
                if (fieldsToDirty_1.__typename &&
                    !(existing && existing.__typename) &&
                    this.policies.rootTypenamesById[dataId] === merged.__typename) {
                    delete fieldsToDirty_1.__typename;
                }
                Object.keys(fieldsToDirty_1).forEach(function (fieldName) { return _this.group.dirty(dataId, fieldName); });
            }
        }
    };
    EntityStore.prototype.modify = function (dataId, fields) {
        var _this = this;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var changedFields_1 = Object.create(null);
            var needToMerge_1 = false;
            var allDeleted_1 = true;
            var sharedDetails_1 = {
                DELETE: DELETE,
                INVALIDATE: INVALIDATE,
                isReference: utilities.isReference,
                toReference: this.toReference,
                canRead: this.canRead,
                readField: function (fieldNameOrOptions, from) { return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
                    fieldName: fieldNameOrOptions,
                    from: from || utilities.makeReference(dataId),
                } : fieldNameOrOptions, { store: _this }); },
            };
            Object.keys(storeObject).forEach(function (storeFieldName) {
                var fieldName = fieldNameFromStoreName(storeFieldName);
                var fieldValue = storeObject[storeFieldName];
                if (fieldValue === void 0)
                    return;
                var modify = typeof fields === "function"
                    ? fields
                    : fields[storeFieldName] || fields[fieldName];
                if (modify) {
                    var newValue = modify === delModifier ? DELETE :
                        modify(utilities.maybeDeepFreeze(fieldValue), tslib.__assign(tslib.__assign({}, sharedDetails_1), { fieldName: fieldName, storeFieldName: storeFieldName, storage: _this.getStorage(dataId, storeFieldName) }));
                    if (newValue === INVALIDATE) {
                        _this.group.dirty(dataId, storeFieldName);
                    }
                    else {
                        if (newValue === DELETE)
                            newValue = void 0;
                        if (newValue !== fieldValue) {
                            changedFields_1[storeFieldName] = newValue;
                            needToMerge_1 = true;
                            fieldValue = newValue;
                        }
                    }
                }
                if (fieldValue !== void 0) {
                    allDeleted_1 = false;
                }
            });
            if (needToMerge_1) {
                this.merge(dataId, changedFields_1);
                if (allDeleted_1) {
                    if (this instanceof Layer) {
                        this.data[dataId] = void 0;
                    }
                    else {
                        delete this.data[dataId];
                    }
                    this.group.dirty(dataId, "__exists");
                }
                return true;
            }
        }
        return false;
    };
    EntityStore.prototype.delete = function (dataId, fieldName, args) {
        var _a;
        var storeObject = this.lookup(dataId);
        if (storeObject) {
            var typename = this.getFieldValue(storeObject, "__typename");
            var storeFieldName = fieldName && args
                ? this.policies.getStoreFieldName({ typename: typename, fieldName: fieldName, args: args })
                : fieldName;
            return this.modify(dataId, storeFieldName ? (_a = {},
                _a[storeFieldName] = delModifier,
                _a) : delModifier);
        }
        return false;
    };
    EntityStore.prototype.evict = function (options, limit) {
        var evicted = false;
        if (options.id) {
            if (hasOwn.call(this.data, options.id)) {
                evicted = this.delete(options.id, options.fieldName, options.args);
            }
            if (this instanceof Layer && this !== limit) {
                evicted = this.parent.evict(options, limit) || evicted;
            }
            if (options.fieldName || evicted) {
                this.group.dirty(options.id, options.fieldName || "__exists");
            }
        }
        return evicted;
    };
    EntityStore.prototype.clear = function () {
        this.replace(null);
    };
    EntityStore.prototype.extract = function () {
        var _this = this;
        var obj = this.toObject();
        var extraRootIds = [];
        this.getRootIdSet().forEach(function (id) {
            if (!hasOwn.call(_this.policies.rootTypenamesById, id)) {
                extraRootIds.push(id);
            }
        });
        if (extraRootIds.length) {
            obj.__META = { extraRootIds: extraRootIds.sort() };
        }
        return obj;
    };
    EntityStore.prototype.replace = function (newData) {
        var _this = this;
        Object.keys(this.data).forEach(function (dataId) {
            if (!(newData && hasOwn.call(newData, dataId))) {
                _this.delete(dataId);
            }
        });
        if (newData) {
            var __META = newData.__META, rest_1 = tslib.__rest(newData, ["__META"]);
            Object.keys(rest_1).forEach(function (dataId) {
                _this.merge(dataId, rest_1[dataId]);
            });
            if (__META) {
                __META.extraRootIds.forEach(this.retain, this);
            }
        }
    };
    EntityStore.prototype.retain = function (rootId) {
        return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
    };
    EntityStore.prototype.release = function (rootId) {
        if (this.rootIds[rootId] > 0) {
            var count = --this.rootIds[rootId];
            if (!count)
                delete this.rootIds[rootId];
            return count;
        }
        return 0;
    };
    EntityStore.prototype.getRootIdSet = function (ids) {
        if (ids === void 0) { ids = new Set(); }
        Object.keys(this.rootIds).forEach(ids.add, ids);
        if (this instanceof Layer) {
            this.parent.getRootIdSet(ids);
        }
        else {
            Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
        }
        return ids;
    };
    EntityStore.prototype.gc = function () {
        var _this = this;
        var ids = this.getRootIdSet();
        var snapshot = this.toObject();
        ids.forEach(function (id) {
            if (hasOwn.call(snapshot, id)) {
                Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
                delete snapshot[id];
            }
        });
        var idsToRemove = Object.keys(snapshot);
        if (idsToRemove.length) {
            var root_1 = this;
            while (root_1 instanceof Layer)
                root_1 = root_1.parent;
            idsToRemove.forEach(function (id) { return root_1.delete(id); });
        }
        return idsToRemove;
    };
    EntityStore.prototype.findChildRefIds = function (dataId) {
        if (!hasOwn.call(this.refs, dataId)) {
            var found_1 = this.refs[dataId] = Object.create(null);
            var root = this.data[dataId];
            if (!root)
                return found_1;
            var workSet_1 = new Set([root]);
            workSet_1.forEach(function (obj) {
                if (utilities.isReference(obj)) {
                    found_1[obj.__ref] = true;
                }
                if (utilities.isNonNullObject(obj)) {
                    Object.keys(obj).forEach(function (key) {
                        var child = obj[key];
                        if (utilities.isNonNullObject(child)) {
                            workSet_1.add(child);
                        }
                    });
                }
            });
        }
        return this.refs[dataId];
    };
    EntityStore.prototype.makeCacheKey = function () {
        return this.group.keyMaker.lookupArray(arguments);
    };
    return EntityStore;
}());
var CacheGroup = (function () {
    function CacheGroup(caching, parent) {
        if (parent === void 0) { parent = null; }
        this.caching = caching;
        this.parent = parent;
        this.d = null;
        this.resetCaching();
    }
    CacheGroup.prototype.resetCaching = function () {
        this.d = this.caching ? optimism.dep() : null;
        this.keyMaker = new trie.Trie(utilities.canUseWeakMap);
    };
    CacheGroup.prototype.depend = function (dataId, storeFieldName) {
        if (this.d) {
            this.d(makeDepKey(dataId, storeFieldName));
            var fieldName = fieldNameFromStoreName(storeFieldName);
            if (fieldName !== storeFieldName) {
                this.d(makeDepKey(dataId, fieldName));
            }
            if (this.parent) {
                this.parent.depend(dataId, storeFieldName);
            }
        }
    };
    CacheGroup.prototype.dirty = function (dataId, storeFieldName) {
        if (this.d) {
            this.d.dirty(makeDepKey(dataId, storeFieldName), storeFieldName === "__exists" ? "forget" : "setDirty");
        }
    };
    return CacheGroup;
}());
function makeDepKey(dataId, storeFieldName) {
    return storeFieldName + '#' + dataId;
}
function maybeDependOnExistenceOfEntity(store, entityId) {
    if (supportsResultCaching(store)) {
        store.group.depend(entityId, "__exists");
    }
}
(function (EntityStore) {
    var Root = (function (_super) {
        tslib.__extends(Root, _super);
        function Root(_a) {
            var policies = _a.policies, _b = _a.resultCaching, resultCaching = _b === void 0 ? true : _b, seed = _a.seed;
            var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;
            _this.stump = new Stump(_this);
            _this.storageTrie = new trie.Trie(utilities.canUseWeakMap);
            if (seed)
                _this.replace(seed);
            return _this;
        }
        Root.prototype.addLayer = function (layerId, replay) {
            return this.stump.addLayer(layerId, replay);
        };
        Root.prototype.removeLayer = function () {
            return this;
        };
        Root.prototype.getStorage = function () {
            return this.storageTrie.lookupArray(arguments);
        };
        return Root;
    }(EntityStore));
    EntityStore.Root = Root;
})(exports.EntityStore || (exports.EntityStore = {}));
var Layer = (function (_super) {
    tslib.__extends(Layer, _super);
    function Layer(id, parent, replay, group) {
        var _this = _super.call(this, parent.policies, group) || this;
        _this.id = id;
        _this.parent = parent;
        _this.replay = replay;
        _this.group = group;
        replay(_this);
        return _this;
    }
    Layer.prototype.addLayer = function (layerId, replay) {
        return new Layer(layerId, this, replay, this.group);
    };
    Layer.prototype.removeLayer = function (layerId) {
        var _this = this;
        var parent = this.parent.removeLayer(layerId);
        if (layerId === this.id) {
            if (this.group.caching) {
                Object.keys(this.data).forEach(function (dataId) {
                    var ownStoreObject = _this.data[dataId];
                    var parentStoreObject = parent["lookup"](dataId);
                    if (!parentStoreObject) {
                        _this.delete(dataId);
                    }
                    else if (!ownStoreObject) {
                        _this.group.dirty(dataId, "__exists");
                        Object.keys(parentStoreObject).forEach(function (storeFieldName) {
                            _this.group.dirty(dataId, storeFieldName);
                        });
                    }
                    else if (ownStoreObject !== parentStoreObject) {
                        Object.keys(ownStoreObject).forEach(function (storeFieldName) {
                            if (!equality.equal(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) {
                                _this.group.dirty(dataId, storeFieldName);
                            }
                        });
                    }
                });
            }
            return parent;
        }
        if (parent === this.parent)
            return this;
        return parent.addLayer(this.id, this.replay);
    };
    Layer.prototype.toObject = function () {
        return tslib.__assign(tslib.__assign({}, this.parent.toObject()), this.data);
    };
    Layer.prototype.findChildRefIds = function (dataId) {
        var fromParent = this.parent.findChildRefIds(dataId);
        return hasOwn.call(this.data, dataId) ? tslib.__assign(tslib.__assign({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
    };
    Layer.prototype.getStorage = function () {
        var p = this.parent;
        while (p.parent)
            p = p.parent;
        return p.getStorage.apply(p, arguments);
    };
    return Layer;
}(exports.EntityStore));
var Stump = (function (_super) {
    tslib.__extends(Stump, _super);
    function Stump(root) {
        return _super.call(this, "EntityStore.Stump", root, function () { }, new CacheGroup(root.group.caching, root.group)) || this;
    }
    Stump.prototype.removeLayer = function () {
        return this;
    };
    Stump.prototype.merge = function () {
        return this.parent.merge.apply(this.parent, arguments);
    };
    return Stump;
}(Layer));
function storeObjectReconciler(existingObject, incomingObject, property) {
    var existingValue = existingObject[property];
    var incomingValue = incomingObject[property];
    return equality.equal(existingValue, incomingValue) ? existingValue : incomingValue;
}
function supportsResultCaching(store) {
    return !!(store instanceof exports.EntityStore && store.group.caching);
}

function shallowCopy(value) {
    if (utilities.isNonNullObject(value)) {
        return utilities.isArray(value)
            ? value.slice(0)
            : tslib.__assign({ __proto__: Object.getPrototypeOf(value) }, value);
    }
    return value;
}
var ObjectCanon = (function () {
    function ObjectCanon() {
        this.known = new (utilities.canUseWeakSet ? WeakSet : Set)();
        this.pool = new trie.Trie(utilities.canUseWeakMap);
        this.passes = new WeakMap();
        this.keysByJSON = new Map();
        this.empty = this.admit({});
    }
    ObjectCanon.prototype.isKnown = function (value) {
        return utilities.isNonNullObject(value) && this.known.has(value);
    };
    ObjectCanon.prototype.pass = function (value) {
        if (utilities.isNonNullObject(value)) {
            var copy = shallowCopy(value);
            this.passes.set(copy, value);
            return copy;
        }
        return value;
    };
    ObjectCanon.prototype.admit = function (value) {
        var _this = this;
        if (utilities.isNonNullObject(value)) {
            var original = this.passes.get(value);
            if (original)
                return original;
            var proto = Object.getPrototypeOf(value);
            switch (proto) {
                case Array.prototype: {
                    if (this.known.has(value))
                        return value;
                    var array = value.map(this.admit, this);
                    var node = this.pool.lookupArray(array);
                    if (!node.array) {
                        this.known.add(node.array = array);
                        if (__DEV__) {
                            Object.freeze(array);
                        }
                    }
                    return node.array;
                }
                case null:
                case Object.prototype: {
                    if (this.known.has(value))
                        return value;
                    var proto_1 = Object.getPrototypeOf(value);
                    var array_1 = [proto_1];
                    var keys = this.sortedKeys(value);
                    array_1.push(keys.json);
                    var firstValueIndex_1 = array_1.length;
                    keys.sorted.forEach(function (key) {
                        array_1.push(_this.admit(value[key]));
                    });
                    var node = this.pool.lookupArray(array_1);
                    if (!node.object) {
                        var obj_1 = node.object = Object.create(proto_1);
                        this.known.add(obj_1);
                        keys.sorted.forEach(function (key, i) {
                            obj_1[key] = array_1[firstValueIndex_1 + i];
                        });
                        if (__DEV__) {
                            Object.freeze(obj_1);
                        }
                    }
                    return node.object;
                }
            }
        }
        return value;
    };
    ObjectCanon.prototype.sortedKeys = function (obj) {
        var keys = Object.keys(obj);
        var node = this.pool.lookupArray(keys);
        if (!node.keys) {
            keys.sort();
            var json = JSON.stringify(keys);
            if (!(node.keys = this.keysByJSON.get(json))) {
                this.keysByJSON.set(json, node.keys = { sorted: keys, json: json });
            }
        }
        return node.keys;
    };
    return ObjectCanon;
}());
var canonicalStringify = Object.assign(function (value) {
    if (utilities.isNonNullObject(value)) {
        if (stringifyCanon === void 0) {
            resetCanonicalStringify();
        }
        var canonical = stringifyCanon.admit(value);
        var json = stringifyCache.get(canonical);
        if (json === void 0) {
            stringifyCache.set(canonical, json = JSON.stringify(canonical));
        }
        return json;
    }
    return JSON.stringify(value);
}, {
    reset: resetCanonicalStringify,
});
var stringifyCanon;
var stringifyCache;
function resetCanonicalStringify() {
    stringifyCanon = new ObjectCanon;
    stringifyCache = new (utilities.canUseWeakMap ? WeakMap : Map)();
}

function execSelectionSetKeyArgs(options) {
    return [
        options.selectionSet,
        options.objectOrReference,
        options.context,
        options.context.canonizeResults,
    ];
}
var StoreReader = (function () {
    function StoreReader(config) {
        var _this = this;
        this.knownResults = new (utilities.canUseWeakMap ? WeakMap : Map)();
        this.config = utilities.compact(config, {
            addTypename: config.addTypename !== false,
            canonizeResults: shouldCanonizeResults(config),
        });
        this.canon = config.canon || new ObjectCanon;
        this.executeSelectionSet = optimism.wrap(function (options) {
            var _a;
            var canonizeResults = options.context.canonizeResults;
            var peekArgs = execSelectionSetKeyArgs(options);
            peekArgs[3] = !canonizeResults;
            var other = (_a = _this.executeSelectionSet).peek.apply(_a, peekArgs);
            if (other) {
                if (canonizeResults) {
                    return tslib.__assign(tslib.__assign({}, other), { result: _this.canon.admit(other.result) });
                }
                return other;
            }
            maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
            return _this.execSelectionSetImpl(options);
        }, {
            max: this.config.resultCacheMaxSize,
            keyArgs: execSelectionSetKeyArgs,
            makeCacheKey: function (selectionSet, parent, context, canonizeResults) {
                if (supportsResultCaching(context.store)) {
                    return context.store.makeCacheKey(selectionSet, utilities.isReference(parent) ? parent.__ref : parent, context.varString, canonizeResults);
                }
            }
        });
        this.executeSubSelectedArray = optimism.wrap(function (options) {
            maybeDependOnExistenceOfEntity(options.context.store, options.enclosingRef.__ref);
            return _this.execSubSelectedArrayImpl(options);
        }, {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function (_a) {
                var field = _a.field, array = _a.array, context = _a.context;
                if (supportsResultCaching(context.store)) {
                    return context.store.makeCacheKey(field, array, context.varString);
                }
            }
        });
    }
    StoreReader.prototype.resetCanon = function () {
        this.canon = new ObjectCanon;
    };
    StoreReader.prototype.diffQueryAgainstStore = function (_a) {
        var store = _a.store, query = _a.query, _b = _a.rootId, rootId = _b === void 0 ? 'ROOT_QUERY' : _b, variables = _a.variables, _c = _a.returnPartialData, returnPartialData = _c === void 0 ? true : _c, _d = _a.canonizeResults, canonizeResults = _d === void 0 ? this.config.canonizeResults : _d;
        var policies = this.config.cache.policies;
        variables = tslib.__assign(tslib.__assign({}, utilities.getDefaultValues(utilities.getQueryDefinition(query))), variables);
        var rootRef = utilities.makeReference(rootId);
        var execResult = this.executeSelectionSet({
            selectionSet: utilities.getMainDefinition(query).selectionSet,
            objectOrReference: rootRef,
            enclosingRef: rootRef,
            context: tslib.__assign({ store: store, query: query, policies: policies, variables: variables, varString: canonicalStringify(variables), canonizeResults: canonizeResults }, extractFragmentContext(query, this.config.fragments)),
        });
        var missing;
        if (execResult.missing) {
            missing = [new MissingFieldError(firstMissing(execResult.missing), execResult.missing, query, variables)];
            if (!returnPartialData) {
                throw missing[0];
            }
        }
        return {
            result: execResult.result,
            complete: !missing,
            missing: missing,
        };
    };
    StoreReader.prototype.isFresh = function (result, parent, selectionSet, context) {
        if (supportsResultCaching(context.store) &&
            this.knownResults.get(result) === selectionSet) {
            var latest = this.executeSelectionSet.peek(selectionSet, parent, context, this.canon.isKnown(result));
            if (latest && result === latest.result) {
                return true;
            }
        }
        return false;
    };
    StoreReader.prototype.execSelectionSetImpl = function (_a) {
        var _this = this;
        var selectionSet = _a.selectionSet, objectOrReference = _a.objectOrReference, enclosingRef = _a.enclosingRef, context = _a.context;
        if (utilities.isReference(objectOrReference) &&
            !context.policies.rootTypenamesById[objectOrReference.__ref] &&
            !context.store.has(objectOrReference.__ref)) {
            return {
                result: this.canon.empty,
                missing: "Dangling reference to missing ".concat(objectOrReference.__ref, " object"),
            };
        }
        var variables = context.variables, policies = context.policies, store = context.store;
        var typename = store.getFieldValue(objectOrReference, "__typename");
        var objectsToMerge = [];
        var missing;
        var missingMerger = new utilities.DeepMerger();
        if (this.config.addTypename &&
            typeof typename === "string" &&
            !policies.rootIdsByTypename[typename]) {
            objectsToMerge.push({ __typename: typename });
        }
        function handleMissing(result, resultName) {
            var _a;
            if (result.missing) {
                missing = missingMerger.merge(missing, (_a = {}, _a[resultName] = result.missing, _a));
            }
            return result.result;
        }
        var workSet = new Set(selectionSet.selections);
        workSet.forEach(function (selection) {
            var _a, _b;
            if (!utilities.shouldInclude(selection, variables))
                return;
            if (utilities.isField(selection)) {
                var fieldValue = policies.readField({
                    fieldName: selection.name.value,
                    field: selection,
                    variables: context.variables,
                    from: objectOrReference,
                }, context);
                var resultName = utilities.resultKeyNameFromField(selection);
                if (fieldValue === void 0) {
                    if (!utilities.addTypenameToDocument.added(selection)) {
                        missing = missingMerger.merge(missing, (_a = {},
                            _a[resultName] = "Can't find field '".concat(selection.name.value, "' on ").concat(utilities.isReference(objectOrReference)
                                ? objectOrReference.__ref + " object"
                                : "object " + JSON.stringify(objectOrReference, null, 2)),
                            _a));
                    }
                }
                else if (utilities.isArray(fieldValue)) {
                    fieldValue = handleMissing(_this.executeSubSelectedArray({
                        field: selection,
                        array: fieldValue,
                        enclosingRef: enclosingRef,
                        context: context,
                    }), resultName);
                }
                else if (!selection.selectionSet) {
                    if (context.canonizeResults) {
                        fieldValue = _this.canon.pass(fieldValue);
                    }
                }
                else if (fieldValue != null) {
                    fieldValue = handleMissing(_this.executeSelectionSet({
                        selectionSet: selection.selectionSet,
                        objectOrReference: fieldValue,
                        enclosingRef: utilities.isReference(fieldValue) ? fieldValue : enclosingRef,
                        context: context,
                    }), resultName);
                }
                if (fieldValue !== void 0) {
                    objectsToMerge.push((_b = {}, _b[resultName] = fieldValue, _b));
                }
            }
            else {
                var fragment = utilities.getFragmentFromSelection(selection, context.lookupFragment);
                if (!fragment && selection.kind === graphql.Kind.FRAGMENT_SPREAD) {
                    throw __DEV__ ? new globals.InvariantError("No fragment named ".concat(selection.name.value)) : new globals.InvariantError(5);
                }
                if (fragment && policies.fragmentMatches(fragment, typename)) {
                    fragment.selectionSet.selections.forEach(workSet.add, workSet);
                }
            }
        });
        var result = utilities.mergeDeepArray(objectsToMerge);
        var finalResult = { result: result, missing: missing };
        var frozen = context.canonizeResults
            ? this.canon.admit(finalResult)
            : utilities.maybeDeepFreeze(finalResult);
        if (frozen.result) {
            this.knownResults.set(frozen.result, selectionSet);
        }
        return frozen;
    };
    StoreReader.prototype.execSubSelectedArrayImpl = function (_a) {
        var _this = this;
        var field = _a.field, array = _a.array, enclosingRef = _a.enclosingRef, context = _a.context;
        var missing;
        var missingMerger = new utilities.DeepMerger();
        function handleMissing(childResult, i) {
            var _a;
            if (childResult.missing) {
                missing = missingMerger.merge(missing, (_a = {}, _a[i] = childResult.missing, _a));
            }
            return childResult.result;
        }
        if (field.selectionSet) {
            array = array.filter(context.store.canRead);
        }
        array = array.map(function (item, i) {
            if (item === null) {
                return null;
            }
            if (utilities.isArray(item)) {
                return handleMissing(_this.executeSubSelectedArray({
                    field: field,
                    array: item,
                    enclosingRef: enclosingRef,
                    context: context,
                }), i);
            }
            if (field.selectionSet) {
                return handleMissing(_this.executeSelectionSet({
                    selectionSet: field.selectionSet,
                    objectOrReference: item,
                    enclosingRef: utilities.isReference(item) ? item : enclosingRef,
                    context: context,
                }), i);
            }
            if (__DEV__) {
                assertSelectionSetForIdValue(context.store, field, item);
            }
            return item;
        });
        return {
            result: context.canonizeResults ? this.canon.admit(array) : array,
            missing: missing,
        };
    };
    return StoreReader;
}());
function firstMissing(tree) {
    try {
        JSON.stringify(tree, function (_, value) {
            if (typeof value === "string")
                throw value;
            return value;
        });
    }
    catch (result) {
        return result;
    }
}
function assertSelectionSetForIdValue(store, field, fieldValue) {
    if (!field.selectionSet) {
        var workSet_1 = new Set([fieldValue]);
        workSet_1.forEach(function (value) {
            if (utilities.isNonNullObject(value)) {
                __DEV__ ? globals.invariant(!utilities.isReference(value), "Missing selection set for object of type ".concat(getTypenameFromStoreObject(store, value), " returned for query field ").concat(field.name.value)) : globals.invariant(!utilities.isReference(value), 6);
                Object.values(value).forEach(workSet_1.add, workSet_1);
            }
        });
    }
}

var cacheSlot = new context.Slot();
var cacheInfoMap = new WeakMap();
function getCacheInfo(cache) {
    var info = cacheInfoMap.get(cache);
    if (!info) {
        cacheInfoMap.set(cache, info = {
            vars: new Set,
            dep: optimism.dep(),
        });
    }
    return info;
}
function forgetCache(cache) {
    getCacheInfo(cache).vars.forEach(function (rv) { return rv.forgetCache(cache); });
}
function recallCache(cache) {
    getCacheInfo(cache).vars.forEach(function (rv) { return rv.attachCache(cache); });
}
function makeVar(value) {
    var caches = new Set();
    var listeners = new Set();
    var rv = function (newValue) {
        if (arguments.length > 0) {
            if (value !== newValue) {
                value = newValue;
                caches.forEach(function (cache) {
                    getCacheInfo(cache).dep.dirty(rv);
                    broadcast(cache);
                });
                var oldListeners = Array.from(listeners);
                listeners.clear();
                oldListeners.forEach(function (listener) { return listener(value); });
            }
        }
        else {
            var cache = cacheSlot.getValue();
            if (cache) {
                attach(cache);
                getCacheInfo(cache).dep(rv);
            }
        }
        return value;
    };
    rv.onNextChange = function (listener) {
        listeners.add(listener);
        return function () {
            listeners.delete(listener);
        };
    };
    var attach = rv.attachCache = function (cache) {
        caches.add(cache);
        getCacheInfo(cache).vars.add(rv);
        return rv;
    };
    rv.forgetCache = function (cache) { return caches.delete(cache); };
    return rv;
}
function broadcast(cache) {
    if (cache.broadcastWatches) {
        cache.broadcastWatches();
    }
}

var specifierInfoCache = Object.create(null);
function lookupSpecifierInfo(spec) {
    var cacheKey = JSON.stringify(spec);
    return specifierInfoCache[cacheKey] ||
        (specifierInfoCache[cacheKey] = Object.create(null));
}
function keyFieldsFnFromSpecifier(specifier) {
    var info = lookupSpecifierInfo(specifier);
    return info.keyFieldsFn || (info.keyFieldsFn = function (object, context) {
        var extract = function (from, key) { return context.readField(key, from); };
        var keyObject = context.keyObject = collectSpecifierPaths(specifier, function (schemaKeyPath) {
            var extracted = extractKeyPath(context.storeObject, schemaKeyPath, extract);
            if (extracted === void 0 &&
                object !== context.storeObject &&
                hasOwn.call(object, schemaKeyPath[0])) {
                extracted = extractKeyPath(object, schemaKeyPath, extractKey);
            }
            __DEV__ ? globals.invariant(extracted !== void 0, "Missing field '".concat(schemaKeyPath.join('.'), "' while extracting keyFields from ").concat(JSON.stringify(object))) : globals.invariant(extracted !== void 0, 2);
            return extracted;
        });
        return "".concat(context.typename, ":").concat(JSON.stringify(keyObject));
    });
}
function keyArgsFnFromSpecifier(specifier) {
    var info = lookupSpecifierInfo(specifier);
    return info.keyArgsFn || (info.keyArgsFn = function (args, _a) {
        var field = _a.field, variables = _a.variables, fieldName = _a.fieldName;
        var collected = collectSpecifierPaths(specifier, function (keyPath) {
            var firstKey = keyPath[0];
            var firstChar = firstKey.charAt(0);
            if (firstChar === "@") {
                if (field && utilities.isNonEmptyArray(field.directives)) {
                    var directiveName_1 = firstKey.slice(1);
                    var d = field.directives.find(function (d) { return d.name.value === directiveName_1; });
                    var directiveArgs = d && utilities.argumentsObjectFromField(d, variables);
                    return directiveArgs && extractKeyPath(directiveArgs, keyPath.slice(1));
                }
                return;
            }
            if (firstChar === "$") {
                var variableName = firstKey.slice(1);
                if (variables && hasOwn.call(variables, variableName)) {
                    var varKeyPath = keyPath.slice(0);
                    varKeyPath[0] = variableName;
                    return extractKeyPath(variables, varKeyPath);
                }
                return;
            }
            if (args) {
                return extractKeyPath(args, keyPath);
            }
        });
        var suffix = JSON.stringify(collected);
        if (args || suffix !== "{}") {
            fieldName += ":" + suffix;
        }
        return fieldName;
    });
}
function collectSpecifierPaths(specifier, extractor) {
    var merger = new utilities.DeepMerger;
    return getSpecifierPaths(specifier).reduce(function (collected, path) {
        var _a;
        var toMerge = extractor(path);
        if (toMerge !== void 0) {
            for (var i = path.length - 1; i >= 0; --i) {
                toMerge = (_a = {}, _a[path[i]] = toMerge, _a);
            }
            collected = merger.merge(collected, toMerge);
        }
        return collected;
    }, Object.create(null));
}
function getSpecifierPaths(spec) {
    var info = lookupSpecifierInfo(spec);
    if (!info.paths) {
        var paths_1 = info.paths = [];
        var currentPath_1 = [];
        spec.forEach(function (s, i) {
            if (utilities.isArray(s)) {
                getSpecifierPaths(s).forEach(function (p) { return paths_1.push(currentPath_1.concat(p)); });
                currentPath_1.length = 0;
            }
            else {
                currentPath_1.push(s);
                if (!utilities.isArray(spec[i + 1])) {
                    paths_1.push(currentPath_1.slice(0));
                    currentPath_1.length = 0;
                }
            }
        });
    }
    return info.paths;
}
function extractKey(object, key) {
    return object[key];
}
function extractKeyPath(object, path, extract) {
    extract = extract || extractKey;
    return normalize(path.reduce(function reducer(obj, key) {
        return utilities.isArray(obj)
            ? obj.map(function (child) { return reducer(child, key); })
            : obj && extract(obj, key);
    }, object));
}
function normalize(value) {
    if (utilities.isNonNullObject(value)) {
        if (utilities.isArray(value)) {
            return value.map(normalize);
        }
        return collectSpecifierPaths(Object.keys(value).sort(), function (path) { return extractKeyPath(value, path); });
    }
    return value;
}

utilities.getStoreKeyName.setStringify(canonicalStringify);
function argsFromFieldSpecifier(spec) {
    return spec.args !== void 0 ? spec.args :
        spec.field ? utilities.argumentsObjectFromField(spec.field, spec.variables) : null;
}
var nullKeyFieldsFn = function () { return void 0; };
var simpleKeyArgsFn = function (_args, context) { return context.fieldName; };
var mergeTrueFn = function (existing, incoming, _a) {
    var mergeObjects = _a.mergeObjects;
    return mergeObjects(existing, incoming);
};
var mergeFalseFn = function (_, incoming) { return incoming; };
var Policies = (function () {
    function Policies(config) {
        this.config = config;
        this.typePolicies = Object.create(null);
        this.toBeAdded = Object.create(null);
        this.supertypeMap = new Map();
        this.fuzzySubtypes = new Map();
        this.rootIdsByTypename = Object.create(null);
        this.rootTypenamesById = Object.create(null);
        this.usingPossibleTypes = false;
        this.config = tslib.__assign({ dataIdFromObject: defaultDataIdFromObject }, config);
        this.cache = this.config.cache;
        this.setRootTypename("Query");
        this.setRootTypename("Mutation");
        this.setRootTypename("Subscription");
        if (config.possibleTypes) {
            this.addPossibleTypes(config.possibleTypes);
        }
        if (config.typePolicies) {
            this.addTypePolicies(config.typePolicies);
        }
    }
    Policies.prototype.identify = function (object, partialContext) {
        var _a;
        var policies = this;
        var typename = partialContext && (partialContext.typename ||
            ((_a = partialContext.storeObject) === null || _a === void 0 ? void 0 : _a.__typename)) || object.__typename;
        if (typename === this.rootTypenamesById.ROOT_QUERY) {
            return ["ROOT_QUERY"];
        }
        var storeObject = partialContext && partialContext.storeObject || object;
        var context = tslib.__assign(tslib.__assign({}, partialContext), { typename: typename, storeObject: storeObject, readField: partialContext && partialContext.readField || function () {
                var options = normalizeReadFieldOptions(arguments, storeObject);
                return policies.readField(options, {
                    store: policies.cache["data"],
                    variables: options.variables,
                });
            } });
        var id;
        var policy = typename && this.getTypePolicy(typename);
        var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;
        while (keyFn) {
            var specifierOrId = keyFn(object, context);
            if (utilities.isArray(specifierOrId)) {
                keyFn = keyFieldsFnFromSpecifier(specifierOrId);
            }
            else {
                id = specifierOrId;
                break;
            }
        }
        id = id ? String(id) : void 0;
        return context.keyObject ? [id, context.keyObject] : [id];
    };
    Policies.prototype.addTypePolicies = function (typePolicies) {
        var _this = this;
        Object.keys(typePolicies).forEach(function (typename) {
            var _a = typePolicies[typename], queryType = _a.queryType, mutationType = _a.mutationType, subscriptionType = _a.subscriptionType, incoming = tslib.__rest(_a, ["queryType", "mutationType", "subscriptionType"]);
            if (queryType)
                _this.setRootTypename("Query", typename);
            if (mutationType)
                _this.setRootTypename("Mutation", typename);
            if (subscriptionType)
                _this.setRootTypename("Subscription", typename);
            if (hasOwn.call(_this.toBeAdded, typename)) {
                _this.toBeAdded[typename].push(incoming);
            }
            else {
                _this.toBeAdded[typename] = [incoming];
            }
        });
    };
    Policies.prototype.updateTypePolicy = function (typename, incoming) {
        var _this = this;
        var existing = this.getTypePolicy(typename);
        var keyFields = incoming.keyFields, fields = incoming.fields;
        function setMerge(existing, merge) {
            existing.merge =
                typeof merge === "function" ? merge :
                    merge === true ? mergeTrueFn :
                        merge === false ? mergeFalseFn :
                            existing.merge;
        }
        setMerge(existing, incoming.merge);
        existing.keyFn =
            keyFields === false ? nullKeyFieldsFn :
                utilities.isArray(keyFields) ? keyFieldsFnFromSpecifier(keyFields) :
                    typeof keyFields === "function" ? keyFields :
                        existing.keyFn;
        if (fields) {
            Object.keys(fields).forEach(function (fieldName) {
                var existing = _this.getFieldPolicy(typename, fieldName, true);
                var incoming = fields[fieldName];
                if (typeof incoming === "function") {
                    existing.read = incoming;
                }
                else {
                    var keyArgs = incoming.keyArgs, read = incoming.read, merge = incoming.merge;
                    existing.keyFn =
                        keyArgs === false ? simpleKeyArgsFn :
                            utilities.isArray(keyArgs) ? keyArgsFnFromSpecifier(keyArgs) :
                                typeof keyArgs === "function" ? keyArgs :
                                    existing.keyFn;
                    if (typeof read === "function") {
                        existing.read = read;
                    }
                    setMerge(existing, merge);
                }
                if (existing.read && existing.merge) {
                    existing.keyFn = existing.keyFn || simpleKeyArgsFn;
                }
            });
        }
    };
    Policies.prototype.setRootTypename = function (which, typename) {
        if (typename === void 0) { typename = which; }
        var rootId = "ROOT_" + which.toUpperCase();
        var old = this.rootTypenamesById[rootId];
        if (typename !== old) {
            __DEV__ ? globals.invariant(!old || old === which, "Cannot change root ".concat(which, " __typename more than once")) : globals.invariant(!old || old === which, 3);
            if (old)
                delete this.rootIdsByTypename[old];
            this.rootIdsByTypename[typename] = rootId;
            this.rootTypenamesById[rootId] = typename;
        }
    };
    Policies.prototype.addPossibleTypes = function (possibleTypes) {
        var _this = this;
        this.usingPossibleTypes = true;
        Object.keys(possibleTypes).forEach(function (supertype) {
            _this.getSupertypeSet(supertype, true);
            possibleTypes[supertype].forEach(function (subtype) {
                _this.getSupertypeSet(subtype, true).add(supertype);
                var match = subtype.match(TypeOrFieldNameRegExp);
                if (!match || match[0] !== subtype) {
                    _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
                }
            });
        });
    };
    Policies.prototype.getTypePolicy = function (typename) {
        var _this = this;
        if (!hasOwn.call(this.typePolicies, typename)) {
            var policy_1 = this.typePolicies[typename] = Object.create(null);
            policy_1.fields = Object.create(null);
            var supertypes = this.supertypeMap.get(typename);
            if (supertypes && supertypes.size) {
                supertypes.forEach(function (supertype) {
                    var _a = _this.getTypePolicy(supertype), fields = _a.fields, rest = tslib.__rest(_a, ["fields"]);
                    Object.assign(policy_1, rest);
                    Object.assign(policy_1.fields, fields);
                });
            }
        }
        var inbox = this.toBeAdded[typename];
        if (inbox && inbox.length) {
            inbox.splice(0).forEach(function (policy) {
                _this.updateTypePolicy(typename, policy);
            });
        }
        return this.typePolicies[typename];
    };
    Policies.prototype.getFieldPolicy = function (typename, fieldName, createIfMissing) {
        if (typename) {
            var fieldPolicies = this.getTypePolicy(typename).fields;
            return fieldPolicies[fieldName] || (createIfMissing && (fieldPolicies[fieldName] = Object.create(null)));
        }
    };
    Policies.prototype.getSupertypeSet = function (subtype, createIfMissing) {
        var supertypeSet = this.supertypeMap.get(subtype);
        if (!supertypeSet && createIfMissing) {
            this.supertypeMap.set(subtype, supertypeSet = new Set());
        }
        return supertypeSet;
    };
    Policies.prototype.fragmentMatches = function (fragment, typename, result, variables) {
        var _this = this;
        if (!fragment.typeCondition)
            return true;
        if (!typename)
            return false;
        var supertype = fragment.typeCondition.name.value;
        if (typename === supertype)
            return true;
        if (this.usingPossibleTypes &&
            this.supertypeMap.has(supertype)) {
            var typenameSupertypeSet = this.getSupertypeSet(typename, true);
            var workQueue_1 = [typenameSupertypeSet];
            var maybeEnqueue_1 = function (subtype) {
                var supertypeSet = _this.getSupertypeSet(subtype, false);
                if (supertypeSet &&
                    supertypeSet.size &&
                    workQueue_1.indexOf(supertypeSet) < 0) {
                    workQueue_1.push(supertypeSet);
                }
            };
            var needToCheckFuzzySubtypes = !!(result && this.fuzzySubtypes.size);
            var checkingFuzzySubtypes = false;
            for (var i = 0; i < workQueue_1.length; ++i) {
                var supertypeSet = workQueue_1[i];
                if (supertypeSet.has(supertype)) {
                    if (!typenameSupertypeSet.has(supertype)) {
                        if (checkingFuzzySubtypes) {
                            __DEV__ && globals.invariant.warn("Inferring subtype ".concat(typename, " of supertype ").concat(supertype));
                        }
                        typenameSupertypeSet.add(supertype);
                    }
                    return true;
                }
                supertypeSet.forEach(maybeEnqueue_1);
                if (needToCheckFuzzySubtypes &&
                    i === workQueue_1.length - 1 &&
                    selectionSetMatchesResult(fragment.selectionSet, result, variables)) {
                    needToCheckFuzzySubtypes = false;
                    checkingFuzzySubtypes = true;
                    this.fuzzySubtypes.forEach(function (regExp, fuzzyString) {
                        var match = typename.match(regExp);
                        if (match && match[0] === typename) {
                            maybeEnqueue_1(fuzzyString);
                        }
                    });
                }
            }
        }
        return false;
    };
    Policies.prototype.hasKeyArgs = function (typename, fieldName) {
        var policy = this.getFieldPolicy(typename, fieldName, false);
        return !!(policy && policy.keyFn);
    };
    Policies.prototype.getStoreFieldName = function (fieldSpec) {
        var typename = fieldSpec.typename, fieldName = fieldSpec.fieldName;
        var policy = this.getFieldPolicy(typename, fieldName, false);
        var storeFieldName;
        var keyFn = policy && policy.keyFn;
        if (keyFn && typename) {
            var context = {
                typename: typename,
                fieldName: fieldName,
                field: fieldSpec.field || null,
                variables: fieldSpec.variables,
            };
            var args = argsFromFieldSpecifier(fieldSpec);
            while (keyFn) {
                var specifierOrString = keyFn(args, context);
                if (utilities.isArray(specifierOrString)) {
                    keyFn = keyArgsFnFromSpecifier(specifierOrString);
                }
                else {
                    storeFieldName = specifierOrString || fieldName;
                    break;
                }
            }
        }
        if (storeFieldName === void 0) {
            storeFieldName = fieldSpec.field
                ? utilities.storeKeyNameFromField(fieldSpec.field, fieldSpec.variables)
                : utilities.getStoreKeyName(fieldName, argsFromFieldSpecifier(fieldSpec));
        }
        if (storeFieldName === false) {
            return fieldName;
        }
        return fieldName === fieldNameFromStoreName(storeFieldName)
            ? storeFieldName
            : fieldName + ":" + storeFieldName;
    };
    Policies.prototype.readField = function (options, context) {
        var objectOrReference = options.from;
        if (!objectOrReference)
            return;
        var nameOrField = options.field || options.fieldName;
        if (!nameOrField)
            return;
        if (options.typename === void 0) {
            var typename = context.store.getFieldValue(objectOrReference, "__typename");
            if (typename)
                options.typename = typename;
        }
        var storeFieldName = this.getStoreFieldName(options);
        var fieldName = fieldNameFromStoreName(storeFieldName);
        var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
        var policy = this.getFieldPolicy(options.typename, fieldName, false);
        var read = policy && policy.read;
        if (read) {
            var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage(utilities.isReference(objectOrReference)
                ? objectOrReference.__ref
                : objectOrReference, storeFieldName));
            return cacheSlot.withValue(this.cache, read, [existing, readOptions]);
        }
        return existing;
    };
    Policies.prototype.getReadFunction = function (typename, fieldName) {
        var policy = this.getFieldPolicy(typename, fieldName, false);
        return policy && policy.read;
    };
    Policies.prototype.getMergeFunction = function (parentTypename, fieldName, childTypename) {
        var policy = this.getFieldPolicy(parentTypename, fieldName, false);
        var merge = policy && policy.merge;
        if (!merge && childTypename) {
            policy = this.getTypePolicy(childTypename);
            merge = policy && policy.merge;
        }
        return merge;
    };
    Policies.prototype.runMergeFunction = function (existing, incoming, _a, context, storage) {
        var field = _a.field, typename = _a.typename, merge = _a.merge;
        if (merge === mergeTrueFn) {
            return makeMergeObjectsFunction(context.store)(existing, incoming);
        }
        if (merge === mergeFalseFn) {
            return incoming;
        }
        if (context.overwrite) {
            existing = void 0;
        }
        return merge(existing, incoming, makeFieldFunctionOptions(this, void 0, { typename: typename, fieldName: field.name.value, field: field, variables: context.variables }, context, storage || Object.create(null)));
    };
    return Policies;
}());
function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
    var storeFieldName = policies.getStoreFieldName(fieldSpec);
    var fieldName = fieldNameFromStoreName(storeFieldName);
    var variables = fieldSpec.variables || context.variables;
    var _a = context.store, toReference = _a.toReference, canRead = _a.canRead;
    return {
        args: argsFromFieldSpecifier(fieldSpec),
        field: fieldSpec.field || null,
        fieldName: fieldName,
        storeFieldName: storeFieldName,
        variables: variables,
        isReference: utilities.isReference,
        toReference: toReference,
        storage: storage,
        cache: policies.cache,
        canRead: canRead,
        readField: function () {
            return policies.readField(normalizeReadFieldOptions(arguments, objectOrReference, variables), context);
        },
        mergeObjects: makeMergeObjectsFunction(context.store),
    };
}
function normalizeReadFieldOptions(readFieldArgs, objectOrReference, variables) {
    var fieldNameOrOptions = readFieldArgs[0], from = readFieldArgs[1], argc = readFieldArgs.length;
    var options;
    if (typeof fieldNameOrOptions === "string") {
        options = {
            fieldName: fieldNameOrOptions,
            from: argc > 1 ? from : objectOrReference,
        };
    }
    else {
        options = tslib.__assign({}, fieldNameOrOptions);
        if (!hasOwn.call(options, "from")) {
            options.from = objectOrReference;
        }
    }
    if (__DEV__ && options.from === void 0) {
        __DEV__ && globals.invariant.warn("Undefined 'from' passed to readField with arguments ".concat(utilities.stringifyForDisplay(Array.from(readFieldArgs))));
    }
    if (void 0 === options.variables) {
        options.variables = variables;
    }
    return options;
}
function makeMergeObjectsFunction(store) {
    return function mergeObjects(existing, incoming) {
        if (utilities.isArray(existing) || utilities.isArray(incoming)) {
            throw __DEV__ ? new globals.InvariantError("Cannot automatically merge arrays") : new globals.InvariantError(4);
        }
        if (utilities.isNonNullObject(existing) &&
            utilities.isNonNullObject(incoming)) {
            var eType = store.getFieldValue(existing, "__typename");
            var iType = store.getFieldValue(incoming, "__typename");
            var typesDiffer = eType && iType && eType !== iType;
            if (typesDiffer) {
                return incoming;
            }
            if (utilities.isReference(existing) &&
                storeValueIsStoreObject(incoming)) {
                store.merge(existing.__ref, incoming);
                return existing;
            }
            if (storeValueIsStoreObject(existing) &&
                utilities.isReference(incoming)) {
                store.merge(existing, incoming.__ref);
                return incoming;
            }
            if (storeValueIsStoreObject(existing) &&
                storeValueIsStoreObject(incoming)) {
                return tslib.__assign(tslib.__assign({}, existing), incoming);
            }
        }
        return incoming;
    };
}

function getContextFlavor(context, clientOnly, deferred) {
    var key = "".concat(clientOnly).concat(deferred);
    var flavored = context.flavors.get(key);
    if (!flavored) {
        context.flavors.set(key, flavored = (context.clientOnly === clientOnly &&
            context.deferred === deferred) ? context : tslib.__assign(tslib.__assign({}, context), { clientOnly: clientOnly, deferred: deferred }));
    }
    return flavored;
}
var StoreWriter = (function () {
    function StoreWriter(cache, reader, fragments) {
        this.cache = cache;
        this.reader = reader;
        this.fragments = fragments;
    }
    StoreWriter.prototype.writeToStore = function (store, _a) {
        var _this = this;
        var query = _a.query, result = _a.result, dataId = _a.dataId, variables = _a.variables, overwrite = _a.overwrite;
        var operationDefinition = utilities.getOperationDefinition(query);
        var merger = makeProcessedFieldsMerger();
        variables = tslib.__assign(tslib.__assign({}, utilities.getDefaultValues(operationDefinition)), variables);
        var context = tslib.__assign(tslib.__assign({ store: store, written: Object.create(null), merge: function (existing, incoming) {
                return merger.merge(existing, incoming);
            }, variables: variables, varString: canonicalStringify(variables) }, extractFragmentContext(query, this.fragments)), { overwrite: !!overwrite, incomingById: new Map, clientOnly: false, deferred: false, flavors: new Map });
        var ref = this.processSelectionSet({
            result: result || Object.create(null),
            dataId: dataId,
            selectionSet: operationDefinition.selectionSet,
            mergeTree: { map: new Map },
            context: context,
        });
        if (!utilities.isReference(ref)) {
            throw __DEV__ ? new globals.InvariantError("Could not identify object ".concat(JSON.stringify(result))) : new globals.InvariantError(7);
        }
        context.incomingById.forEach(function (_a, dataId) {
            var storeObject = _a.storeObject, mergeTree = _a.mergeTree, fieldNodeSet = _a.fieldNodeSet;
            var entityRef = utilities.makeReference(dataId);
            if (mergeTree && mergeTree.map.size) {
                var applied = _this.applyMerges(mergeTree, entityRef, storeObject, context);
                if (utilities.isReference(applied)) {
                    return;
                }
                storeObject = applied;
            }
            if (__DEV__ && !context.overwrite) {
                var fieldsWithSelectionSets_1 = Object.create(null);
                fieldNodeSet.forEach(function (field) {
                    if (field.selectionSet) {
                        fieldsWithSelectionSets_1[field.name.value] = true;
                    }
                });
                var hasSelectionSet_1 = function (storeFieldName) {
                    return fieldsWithSelectionSets_1[fieldNameFromStoreName(storeFieldName)] === true;
                };
                var hasMergeFunction_1 = function (storeFieldName) {
                    var childTree = mergeTree && mergeTree.map.get(storeFieldName);
                    return Boolean(childTree && childTree.info && childTree.info.merge);
                };
                Object.keys(storeObject).forEach(function (storeFieldName) {
                    if (hasSelectionSet_1(storeFieldName) &&
                        !hasMergeFunction_1(storeFieldName)) {
                        warnAboutDataLoss(entityRef, storeObject, storeFieldName, context.store);
                    }
                });
            }
            store.merge(dataId, storeObject);
        });
        store.retain(ref.__ref);
        return ref;
    };
    StoreWriter.prototype.processSelectionSet = function (_a) {
        var _this = this;
        var dataId = _a.dataId, result = _a.result, selectionSet = _a.selectionSet, context = _a.context, mergeTree = _a.mergeTree;
        var policies = this.cache.policies;
        var incoming = Object.create(null);
        var typename = (dataId && policies.rootTypenamesById[dataId]) ||
            utilities.getTypenameFromResult(result, selectionSet, context.fragmentMap) ||
            (dataId && context.store.get(dataId, "__typename"));
        if ("string" === typeof typename) {
            incoming.__typename = typename;
        }
        var readField = function () {
            var options = normalizeReadFieldOptions(arguments, incoming, context.variables);
            if (utilities.isReference(options.from)) {
                var info = context.incomingById.get(options.from.__ref);
                if (info) {
                    var result_1 = policies.readField(tslib.__assign(tslib.__assign({}, options), { from: info.storeObject }), context);
                    if (result_1 !== void 0) {
                        return result_1;
                    }
                }
            }
            return policies.readField(options, context);
        };
        var fieldNodeSet = new Set();
        this.flattenFields(selectionSet, result, context, typename).forEach(function (context, field) {
            var _a;
            var resultFieldKey = utilities.resultKeyNameFromField(field);
            var value = result[resultFieldKey];
            fieldNodeSet.add(field);
            if (value !== void 0) {
                var storeFieldName = policies.getStoreFieldName({
                    typename: typename,
                    fieldName: field.name.value,
                    field: field,
                    variables: context.variables,
                });
                var childTree = getChildMergeTree(mergeTree, storeFieldName);
                var incomingValue = _this.processFieldValue(value, field, field.selectionSet
                    ? getContextFlavor(context, false, false)
                    : context, childTree);
                var childTypename = void 0;
                if (field.selectionSet &&
                    (utilities.isReference(incomingValue) ||
                        storeValueIsStoreObject(incomingValue))) {
                    childTypename = readField("__typename", incomingValue);
                }
                var merge = policies.getMergeFunction(typename, field.name.value, childTypename);
                if (merge) {
                    childTree.info = {
                        field: field,
                        typename: typename,
                        merge: merge,
                    };
                }
                else {
                    maybeRecycleChildMergeTree(mergeTree, storeFieldName);
                }
                incoming = context.merge(incoming, (_a = {},
                    _a[storeFieldName] = incomingValue,
                    _a));
            }
            else if (__DEV__ &&
                !context.clientOnly &&
                !context.deferred &&
                !utilities.addTypenameToDocument.added(field) &&
                !policies.getReadFunction(typename, field.name.value)) {
                __DEV__ && globals.invariant.error("Missing field '".concat(utilities.resultKeyNameFromField(field), "' while writing result ").concat(JSON.stringify(result, null, 2)).substring(0, 1000));
            }
        });
        try {
            var _b = policies.identify(result, {
                typename: typename,
                selectionSet: selectionSet,
                fragmentMap: context.fragmentMap,
                storeObject: incoming,
                readField: readField,
            }), id = _b[0], keyObject = _b[1];
            dataId = dataId || id;
            if (keyObject) {
                incoming = context.merge(incoming, keyObject);
            }
        }
        catch (e) {
            if (!dataId)
                throw e;
        }
        if ("string" === typeof dataId) {
            var dataRef = utilities.makeReference(dataId);
            var sets = context.written[dataId] || (context.written[dataId] = []);
            if (sets.indexOf(selectionSet) >= 0)
                return dataRef;
            sets.push(selectionSet);
            if (this.reader && this.reader.isFresh(result, dataRef, selectionSet, context)) {
                return dataRef;
            }
            var previous_1 = context.incomingById.get(dataId);
            if (previous_1) {
                previous_1.storeObject = context.merge(previous_1.storeObject, incoming);
                previous_1.mergeTree = mergeMergeTrees(previous_1.mergeTree, mergeTree);
                fieldNodeSet.forEach(function (field) { return previous_1.fieldNodeSet.add(field); });
            }
            else {
                context.incomingById.set(dataId, {
                    storeObject: incoming,
                    mergeTree: mergeTreeIsEmpty(mergeTree) ? void 0 : mergeTree,
                    fieldNodeSet: fieldNodeSet,
                });
            }
            return dataRef;
        }
        return incoming;
    };
    StoreWriter.prototype.processFieldValue = function (value, field, context, mergeTree) {
        var _this = this;
        if (!field.selectionSet || value === null) {
            return __DEV__ ? utilities.cloneDeep(value) : value;
        }
        if (utilities.isArray(value)) {
            return value.map(function (item, i) {
                var value = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i));
                maybeRecycleChildMergeTree(mergeTree, i);
                return value;
            });
        }
        return this.processSelectionSet({
            result: value,
            selectionSet: field.selectionSet,
            context: context,
            mergeTree: mergeTree,
        });
    };
    StoreWriter.prototype.flattenFields = function (selectionSet, result, context, typename) {
        if (typename === void 0) { typename = utilities.getTypenameFromResult(result, selectionSet, context.fragmentMap); }
        var fieldMap = new Map();
        var policies = this.cache.policies;
        var limitingTrie = new trie.Trie(false);
        (function flatten(selectionSet, inheritedContext) {
            var visitedNode = limitingTrie.lookup(selectionSet, inheritedContext.clientOnly, inheritedContext.deferred);
            if (visitedNode.visited)
                return;
            visitedNode.visited = true;
            selectionSet.selections.forEach(function (selection) {
                if (!utilities.shouldInclude(selection, context.variables))
                    return;
                var clientOnly = inheritedContext.clientOnly, deferred = inheritedContext.deferred;
                if (!(clientOnly && deferred) &&
                    utilities.isNonEmptyArray(selection.directives)) {
                    selection.directives.forEach(function (dir) {
                        var name = dir.name.value;
                        if (name === "client")
                            clientOnly = true;
                        if (name === "defer") {
                            var args = utilities.argumentsObjectFromField(dir, context.variables);
                            if (!args || args.if !== false) {
                                deferred = true;
                            }
                        }
                    });
                }
                if (utilities.isField(selection)) {
                    var existing = fieldMap.get(selection);
                    if (existing) {
                        clientOnly = clientOnly && existing.clientOnly;
                        deferred = deferred && existing.deferred;
                    }
                    fieldMap.set(selection, getContextFlavor(context, clientOnly, deferred));
                }
                else {
                    var fragment = utilities.getFragmentFromSelection(selection, context.lookupFragment);
                    if (!fragment && selection.kind === graphql.Kind.FRAGMENT_SPREAD) {
                        throw __DEV__ ? new globals.InvariantError("No fragment named ".concat(selection.name.value)) : new globals.InvariantError(8);
                    }
                    if (fragment &&
                        policies.fragmentMatches(fragment, typename, result, context.variables)) {
                        flatten(fragment.selectionSet, getContextFlavor(context, clientOnly, deferred));
                    }
                }
            });
        })(selectionSet, context);
        return fieldMap;
    };
    StoreWriter.prototype.applyMerges = function (mergeTree, existing, incoming, context, getStorageArgs) {
        var _a;
        var _this = this;
        if (mergeTree.map.size && !utilities.isReference(incoming)) {
            var e_1 = (!utilities.isArray(incoming) &&
                (utilities.isReference(existing) || storeValueIsStoreObject(existing))) ? existing : void 0;
            var i_1 = incoming;
            if (e_1 && !getStorageArgs) {
                getStorageArgs = [utilities.isReference(e_1) ? e_1.__ref : e_1];
            }
            var changedFields_1;
            var getValue_1 = function (from, name) {
                return utilities.isArray(from)
                    ? (typeof name === "number" ? from[name] : void 0)
                    : context.store.getFieldValue(from, String(name));
            };
            mergeTree.map.forEach(function (childTree, storeFieldName) {
                var eVal = getValue_1(e_1, storeFieldName);
                var iVal = getValue_1(i_1, storeFieldName);
                if (void 0 === iVal)
                    return;
                if (getStorageArgs) {
                    getStorageArgs.push(storeFieldName);
                }
                var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);
                if (aVal !== iVal) {
                    changedFields_1 = changedFields_1 || new Map;
                    changedFields_1.set(storeFieldName, aVal);
                }
                if (getStorageArgs) {
                    globals.invariant(getStorageArgs.pop() === storeFieldName);
                }
            });
            if (changedFields_1) {
                incoming = (utilities.isArray(i_1) ? i_1.slice(0) : tslib.__assign({}, i_1));
                changedFields_1.forEach(function (value, name) {
                    incoming[name] = value;
                });
            }
        }
        if (mergeTree.info) {
            return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a = context.store).getStorage.apply(_a, getStorageArgs));
        }
        return incoming;
    };
    return StoreWriter;
}());
var emptyMergeTreePool = [];
function getChildMergeTree(_a, name) {
    var map = _a.map;
    if (!map.has(name)) {
        map.set(name, emptyMergeTreePool.pop() || { map: new Map });
    }
    return map.get(name);
}
function mergeMergeTrees(left, right) {
    if (left === right || !right || mergeTreeIsEmpty(right))
        return left;
    if (!left || mergeTreeIsEmpty(left))
        return right;
    var info = left.info && right.info ? tslib.__assign(tslib.__assign({}, left.info), right.info) : left.info || right.info;
    var needToMergeMaps = left.map.size && right.map.size;
    var map = needToMergeMaps ? new Map :
        left.map.size ? left.map : right.map;
    var merged = { info: info, map: map };
    if (needToMergeMaps) {
        var remainingRightKeys_1 = new Set(right.map.keys());
        left.map.forEach(function (leftTree, key) {
            merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
            remainingRightKeys_1.delete(key);
        });
        remainingRightKeys_1.forEach(function (key) {
            merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
        });
    }
    return merged;
}
function mergeTreeIsEmpty(tree) {
    return !tree || !(tree.info || tree.map.size);
}
function maybeRecycleChildMergeTree(_a, name) {
    var map = _a.map;
    var childTree = map.get(name);
    if (childTree && mergeTreeIsEmpty(childTree)) {
        emptyMergeTreePool.push(childTree);
        map.delete(name);
    }
}
var warnings = new Set();
function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
    var getChild = function (objOrRef) {
        var child = store.getFieldValue(objOrRef, storeFieldName);
        return typeof child === "object" && child;
    };
    var existing = getChild(existingRef);
    if (!existing)
        return;
    var incoming = getChild(incomingObj);
    if (!incoming)
        return;
    if (utilities.isReference(existing))
        return;
    if (equality.equal(existing, incoming))
        return;
    if (Object.keys(existing).every(function (key) { return store.getFieldValue(incoming, key) !== void 0; })) {
        return;
    }
    var parentType = store.getFieldValue(existingRef, "__typename") ||
        store.getFieldValue(incomingObj, "__typename");
    var fieldName = fieldNameFromStoreName(storeFieldName);
    var typeDotName = "".concat(parentType, ".").concat(fieldName);
    if (warnings.has(typeDotName))
        return;
    warnings.add(typeDotName);
    var childTypenames = [];
    if (!utilities.isArray(existing) &&
        !utilities.isArray(incoming)) {
        [existing, incoming].forEach(function (child) {
            var typename = store.getFieldValue(child, "__typename");
            if (typeof typename === "string" &&
                !childTypenames.includes(typename)) {
                childTypenames.push(typename);
            }
        });
    }
    __DEV__ && globals.invariant.warn("Cache data may be lost when replacing the ".concat(fieldName, " field of a ").concat(parentType, " object.\n\nTo address this problem (which is not a bug in Apollo Client), ").concat(childTypenames.length
        ? "either ensure all objects of type " +
            childTypenames.join(" and ") + " have an ID or a custom merge function, or "
        : "", "define a custom merge function for the ").concat(typeDotName, " field, so InMemoryCache can safely merge these objects:\n\n  existing: ").concat(JSON.stringify(existing).slice(0, 1000), "\n  incoming: ").concat(JSON.stringify(incoming).slice(0, 1000), "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n"));
}

var InMemoryCache = (function (_super) {
    tslib.__extends(InMemoryCache, _super);
    function InMemoryCache(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this) || this;
        _this.watches = new Set();
        _this.typenameDocumentCache = new Map();
        _this.makeVar = makeVar;
        _this.txCount = 0;
        _this.config = normalizeConfig(config);
        _this.addTypename = !!_this.config.addTypename;
        _this.policies = new Policies({
            cache: _this,
            dataIdFromObject: _this.config.dataIdFromObject,
            possibleTypes: _this.config.possibleTypes,
            typePolicies: _this.config.typePolicies,
        });
        _this.init();
        return _this;
    }
    InMemoryCache.prototype.init = function () {
        var rootStore = this.data = new exports.EntityStore.Root({
            policies: this.policies,
            resultCaching: this.config.resultCaching,
        });
        this.optimisticData = rootStore.stump;
        this.resetResultCache();
    };
    InMemoryCache.prototype.resetResultCache = function (resetResultIdentities) {
        var _this = this;
        var previousReader = this.storeReader;
        var fragments = this.config.fragments;
        this.storeWriter = new StoreWriter(this, this.storeReader = new StoreReader({
            cache: this,
            addTypename: this.addTypename,
            resultCacheMaxSize: this.config.resultCacheMaxSize,
            canonizeResults: shouldCanonizeResults(this.config),
            canon: resetResultIdentities
                ? void 0
                : previousReader && previousReader.canon,
            fragments: fragments,
        }), fragments);
        this.maybeBroadcastWatch = optimism.wrap(function (c, options) {
            return _this.broadcastWatch(c, options);
        }, {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function (c) {
                var store = c.optimistic ? _this.optimisticData : _this.data;
                if (supportsResultCaching(store)) {
                    var optimistic = c.optimistic, id = c.id, variables = c.variables;
                    return store.makeCacheKey(c.query, c.callback, canonicalStringify({ optimistic: optimistic, id: id, variables: variables }));
                }
            }
        });
        new Set([
            this.data.group,
            this.optimisticData.group,
        ]).forEach(function (group) { return group.resetCaching(); });
    };
    InMemoryCache.prototype.restore = function (data) {
        this.init();
        if (data)
            this.data.replace(data);
        return this;
    };
    InMemoryCache.prototype.extract = function (optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return (optimistic ? this.optimisticData : this.data).extract();
    };
    InMemoryCache.prototype.read = function (options) {
        var _a = options.returnPartialData, returnPartialData = _a === void 0 ? false : _a;
        try {
            return this.storeReader.diffQueryAgainstStore(tslib.__assign(tslib.__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: returnPartialData })).result || null;
        }
        catch (e) {
            if (e instanceof MissingFieldError) {
                return null;
            }
            throw e;
        }
    };
    InMemoryCache.prototype.write = function (options) {
        try {
            ++this.txCount;
            return this.storeWriter.writeToStore(this.data, options);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.modify = function (options) {
        if (hasOwn.call(options, "id") && !options.id) {
            return false;
        }
        var store = options.optimistic
            ? this.optimisticData
            : this.data;
        try {
            ++this.txCount;
            return store.modify(options.id || "ROOT_QUERY", options.fields);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.diff = function (options) {
        return this.storeReader.diffQueryAgainstStore(tslib.__assign(tslib.__assign({}, options), { store: options.optimistic ? this.optimisticData : this.data, rootId: options.id || "ROOT_QUERY", config: this.config }));
    };
    InMemoryCache.prototype.watch = function (watch) {
        var _this = this;
        if (!this.watches.size) {
            recallCache(this);
        }
        this.watches.add(watch);
        if (watch.immediate) {
            this.maybeBroadcastWatch(watch);
        }
        return function () {
            if (_this.watches.delete(watch) && !_this.watches.size) {
                forgetCache(_this);
            }
            _this.maybeBroadcastWatch.forget(watch);
        };
    };
    InMemoryCache.prototype.gc = function (options) {
        canonicalStringify.reset();
        var ids = this.optimisticData.gc();
        if (options && !this.txCount) {
            if (options.resetResultCache) {
                this.resetResultCache(options.resetResultIdentities);
            }
            else if (options.resetResultIdentities) {
                this.storeReader.resetCanon();
            }
        }
        return ids;
    };
    InMemoryCache.prototype.retain = function (rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).retain(rootId);
    };
    InMemoryCache.prototype.release = function (rootId, optimistic) {
        return (optimistic ? this.optimisticData : this.data).release(rootId);
    };
    InMemoryCache.prototype.identify = function (object) {
        if (utilities.isReference(object))
            return object.__ref;
        try {
            return this.policies.identify(object)[0];
        }
        catch (e) {
            __DEV__ && globals.invariant.warn(e);
        }
    };
    InMemoryCache.prototype.evict = function (options) {
        if (!options.id) {
            if (hasOwn.call(options, "id")) {
                return false;
            }
            options = tslib.__assign(tslib.__assign({}, options), { id: "ROOT_QUERY" });
        }
        try {
            ++this.txCount;
            return this.optimisticData.evict(options, this.data);
        }
        finally {
            if (!--this.txCount && options.broadcast !== false) {
                this.broadcastWatches();
            }
        }
    };
    InMemoryCache.prototype.reset = function (options) {
        var _this = this;
        this.init();
        canonicalStringify.reset();
        if (options && options.discardWatches) {
            this.watches.forEach(function (watch) { return _this.maybeBroadcastWatch.forget(watch); });
            this.watches.clear();
            forgetCache(this);
        }
        else {
            this.broadcastWatches();
        }
        return Promise.resolve();
    };
    InMemoryCache.prototype.removeOptimistic = function (idToRemove) {
        var newOptimisticData = this.optimisticData.removeLayer(idToRemove);
        if (newOptimisticData !== this.optimisticData) {
            this.optimisticData = newOptimisticData;
            this.broadcastWatches();
        }
    };
    InMemoryCache.prototype.batch = function (options) {
        var _this = this;
        var update = options.update, _a = options.optimistic, optimistic = _a === void 0 ? true : _a, removeOptimistic = options.removeOptimistic, onWatchUpdated = options.onWatchUpdated;
        var updateResult;
        var perform = function (layer) {
            var _a = _this, data = _a.data, optimisticData = _a.optimisticData;
            ++_this.txCount;
            if (layer) {
                _this.data = _this.optimisticData = layer;
            }
            try {
                return updateResult = update(_this);
            }
            finally {
                --_this.txCount;
                _this.data = data;
                _this.optimisticData = optimisticData;
            }
        };
        var alreadyDirty = new Set();
        if (onWatchUpdated && !this.txCount) {
            this.broadcastWatches(tslib.__assign(tslib.__assign({}, options), { onWatchUpdated: function (watch) {
                    alreadyDirty.add(watch);
                    return false;
                } }));
        }
        if (typeof optimistic === 'string') {
            this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
        }
        else if (optimistic === false) {
            perform(this.data);
        }
        else {
            perform();
        }
        if (typeof removeOptimistic === "string") {
            this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
        }
        if (onWatchUpdated && alreadyDirty.size) {
            this.broadcastWatches(tslib.__assign(tslib.__assign({}, options), { onWatchUpdated: function (watch, diff) {
                    var result = onWatchUpdated.call(this, watch, diff);
                    if (result !== false) {
                        alreadyDirty.delete(watch);
                    }
                    return result;
                } }));
            if (alreadyDirty.size) {
                alreadyDirty.forEach(function (watch) { return _this.maybeBroadcastWatch.dirty(watch); });
            }
        }
        else {
            this.broadcastWatches(options);
        }
        return updateResult;
    };
    InMemoryCache.prototype.performTransaction = function (update, optimisticId) {
        return this.batch({
            update: update,
            optimistic: optimisticId || (optimisticId !== null),
        });
    };
    InMemoryCache.prototype.transformDocument = function (document) {
        if (this.addTypename) {
            var result = this.typenameDocumentCache.get(document);
            if (!result) {
                result = utilities.addTypenameToDocument(document);
                this.typenameDocumentCache.set(document, result);
                this.typenameDocumentCache.set(result, result);
            }
            return result;
        }
        return document;
    };
    InMemoryCache.prototype.transformForLink = function (document) {
        var fragments = this.config.fragments;
        return fragments
            ? fragments.transform(document)
            : document;
    };
    InMemoryCache.prototype.broadcastWatches = function (options) {
        var _this = this;
        if (!this.txCount) {
            this.watches.forEach(function (c) { return _this.maybeBroadcastWatch(c, options); });
        }
    };
    InMemoryCache.prototype.broadcastWatch = function (c, options) {
        var lastDiff = c.lastDiff;
        var diff = this.diff(c);
        if (options) {
            if (c.optimistic &&
                typeof options.optimistic === "string") {
                diff.fromOptimisticTransaction = true;
            }
            if (options.onWatchUpdated &&
                options.onWatchUpdated.call(this, c, diff, lastDiff) === false) {
                return;
            }
        }
        if (!lastDiff || !equality.equal(lastDiff.result, diff.result)) {
            c.callback(c.lastDiff = diff, lastDiff);
        }
    };
    return InMemoryCache;
}(ApolloCache));

function createFragmentRegistry() {
    var fragments = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fragments[_i] = arguments[_i];
    }
    return new (FragmentRegistry.bind.apply(FragmentRegistry, tslib.__spreadArray([void 0], fragments, false)))();
}
var arrayLikeForEach = Array.prototype.forEach;
var FragmentRegistry = (function () {
    function FragmentRegistry() {
        var fragments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fragments[_i] = arguments[_i];
        }
        this.registry = Object.create(null);
        this.resetCaches();
        if (fragments.length) {
            this.register.apply(this, fragments);
        }
    }
    FragmentRegistry.prototype.register = function () {
        var _this = this;
        var definitions = new Map();
        arrayLikeForEach.call(arguments, function (doc) {
            utilities.getFragmentDefinitions(doc).forEach(function (node) {
                definitions.set(node.name.value, node);
            });
        });
        definitions.forEach(function (node, name) {
            if (node !== _this.registry[name]) {
                _this.registry[name] = node;
                _this.invalidate(name);
            }
        });
        return this;
    };
    FragmentRegistry.prototype.invalidate = function (name) { };
    FragmentRegistry.prototype.resetCaches = function () {
        this.invalidate = (this.lookup = this.cacheUnaryMethod("lookup")).dirty;
        this.transform = this.cacheUnaryMethod("transform");
        this.findFragmentSpreads = this.cacheUnaryMethod("findFragmentSpreads");
    };
    FragmentRegistry.prototype.cacheUnaryMethod = function (name) {
        var registry = this;
        var originalMethod = FragmentRegistry.prototype[name];
        return optimism.wrap(function () {
            return originalMethod.apply(registry, arguments);
        }, {
            makeCacheKey: function (arg) { return arg; },
        });
    };
    FragmentRegistry.prototype.lookup = function (fragmentName) {
        return this.registry[fragmentName] || null;
    };
    FragmentRegistry.prototype.transform = function (document) {
        var _this = this;
        var defined = new Map();
        utilities.getFragmentDefinitions(document).forEach(function (def) {
            defined.set(def.name.value, def);
        });
        var unbound = new Set();
        var enqueue = function (spreadName) {
            if (!defined.has(spreadName)) {
                unbound.add(spreadName);
            }
        };
        var enqueueChildSpreads = function (node) { return Object.keys(_this.findFragmentSpreads(node)).forEach(enqueue); };
        enqueueChildSpreads(document);
        var missing = [];
        var map = Object.create(null);
        unbound.forEach(function (fragmentName) {
            var knownFragmentDef = defined.get(fragmentName);
            if (knownFragmentDef) {
                enqueueChildSpreads(map[fragmentName] = knownFragmentDef);
            }
            else {
                missing.push(fragmentName);
                var def = _this.lookup(fragmentName);
                if (def) {
                    enqueueChildSpreads(map[fragmentName] = def);
                }
            }
        });
        if (missing.length) {
            var defsToAppend_1 = [];
            missing.forEach(function (name) {
                var def = map[name];
                if (def) {
                    defsToAppend_1.push(def);
                }
            });
            if (defsToAppend_1.length) {
                document = tslib.__assign(tslib.__assign({}, document), { definitions: document.definitions.concat(defsToAppend_1) });
            }
        }
        return document;
    };
    FragmentRegistry.prototype.findFragmentSpreads = function (root) {
        var spreads = Object.create(null);
        graphql.visit(root, {
            FragmentSpread: function (node) {
                spreads[node.name.value] = node;
            },
        });
        return spreads;
    };
    return FragmentRegistry;
}());

exports.isReference = utilities.isReference;
exports.makeReference = utilities.makeReference;
exports.ApolloCache = ApolloCache;
exports.InMemoryCache = InMemoryCache;
exports.MissingFieldError = MissingFieldError;
exports.Policies = Policies;
exports.cacheSlot = cacheSlot;
exports.canonicalStringify = canonicalStringify;
exports.createFragmentRegistry = createFragmentRegistry;
exports.defaultDataIdFromObject = defaultDataIdFromObject;
exports.fieldNameFromStoreName = fieldNameFromStoreName;
exports.makeVar = makeVar;
//# sourceMappingURL=cache.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/core/core.cjs":
/*!***************************************************!*\
  !*** ./node_modules/@apollo/client/core/core.cjs ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var tslib = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.js");
var core = __webpack_require__(/*! ../link/core */ "./node_modules/@apollo/client/link/core/core.cjs");
var http = __webpack_require__(/*! ../link/http */ "./node_modules/@apollo/client/link/http/http.cjs");
var equality = __webpack_require__(/*! @wry/equality */ "./node_modules/@apollo/client/node_modules/@wry/equality/lib/equality.js");
var cache = __webpack_require__(/*! ../cache */ "./node_modules/@apollo/client/cache/cache.cjs");
var utilities = __webpack_require__(/*! ../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
var errors = __webpack_require__(/*! ../errors */ "./node_modules/@apollo/client/errors/errors.cjs");
var graphql = __webpack_require__(/*! graphql */ "graphql");
var utils = __webpack_require__(/*! ../link/utils */ "./node_modules/@apollo/client/link/utils/utils.cjs");
var tsInvariant = __webpack_require__(/*! ts-invariant */ "./node_modules/@apollo/client/node_modules/ts-invariant/lib/invariant.cjs");
var graphqlTag = __webpack_require__(/*! graphql-tag */ "./node_modules/@apollo/client/node_modules/graphql-tag/main.js");

var version = '3.7.10';

function isNonEmptyArray(value) {
    return Array.isArray(value) && value.length > 0;
}

function isNonNullObject(obj) {
    return obj !== null && typeof obj === 'object';
}

var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
var defaultReconciler = function (target, source, property) {
    return this.merge(target[property], source[property]);
};
var DeepMerger = (function () {
    function DeepMerger(reconciler) {
        if (reconciler === void 0) { reconciler = defaultReconciler; }
        this.reconciler = reconciler;
        this.isObject = isNonNullObject;
        this.pastCopies = new Set();
    }
    DeepMerger.prototype.merge = function (target, source) {
        var _this = this;
        var context = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            context[_i - 2] = arguments[_i];
        }
        if (isNonNullObject(source) && isNonNullObject(target)) {
            Object.keys(source).forEach(function (sourceKey) {
                if (hasOwnProperty$2.call(target, sourceKey)) {
                    var targetValue = target[sourceKey];
                    if (source[sourceKey] !== targetValue) {
                        var result = _this.reconciler.apply(_this, tslib.__spreadArray([target, source, sourceKey], context, false));
                        if (result !== targetValue) {
                            target = _this.shallowCopyForMerge(target);
                            target[sourceKey] = result;
                        }
                    }
                }
                else {
                    target = _this.shallowCopyForMerge(target);
                    target[sourceKey] = source[sourceKey];
                }
            });
            return target;
        }
        return source;
    };
    DeepMerger.prototype.shallowCopyForMerge = function (value) {
        if (isNonNullObject(value)) {
            if (!this.pastCopies.has(value)) {
                if (Array.isArray(value)) {
                    value = value.slice(0);
                }
                else {
                    value = tslib.__assign({ __proto__: Object.getPrototypeOf(value) }, value);
                }
                this.pastCopies.add(value);
            }
        }
        return value;
    };
    return DeepMerger;
}());

function isExecutionPatchIncrementalResult(value) {
    return "incremental" in value;
}
function isExecutionPatchInitialResult(value) {
    return "hasNext" in value && "data" in value;
}
function isExecutionPatchResult(value) {
    return (isExecutionPatchIncrementalResult(value) ||
        isExecutionPatchInitialResult(value));
}
function mergeIncrementalData(prevResult, result) {
    var mergedData = prevResult;
    var merger = new DeepMerger();
    if (isExecutionPatchIncrementalResult(result) &&
        isNonEmptyArray(result.incremental)) {
        result.incremental.forEach(function (_a) {
            var data = _a.data, path = _a.path;
            for (var i = path.length - 1; i >= 0; --i) {
                var key = path[i];
                var isNumericKey = !isNaN(+key);
                var parent_1 = isNumericKey ? [] : {};
                parent_1[key] = data;
                data = parent_1;
            }
            mergedData = merger.merge(mergedData, data);
        });
    }
    return mergedData;
}

exports.NetworkStatus = void 0;
(function (NetworkStatus) {
    NetworkStatus[NetworkStatus["loading"] = 1] = "loading";
    NetworkStatus[NetworkStatus["setVariables"] = 2] = "setVariables";
    NetworkStatus[NetworkStatus["fetchMore"] = 3] = "fetchMore";
    NetworkStatus[NetworkStatus["refetch"] = 4] = "refetch";
    NetworkStatus[NetworkStatus["poll"] = 6] = "poll";
    NetworkStatus[NetworkStatus["ready"] = 7] = "ready";
    NetworkStatus[NetworkStatus["error"] = 8] = "error";
})(exports.NetworkStatus || (exports.NetworkStatus = {}));
function isNetworkRequestInFlight(networkStatus) {
    return networkStatus ? networkStatus < 7 : false;
}

var assign = Object.assign, hasOwnProperty$1 = Object.hasOwnProperty;
var ObservableQuery = (function (_super) {
    tslib.__extends(ObservableQuery, _super);
    function ObservableQuery(_a) {
        var queryManager = _a.queryManager, queryInfo = _a.queryInfo, options = _a.options;
        var _this = _super.call(this, function (observer) {
            try {
                var subObserver = observer._subscription._observer;
                if (subObserver && !subObserver.error) {
                    subObserver.error = defaultSubscriptionObserverErrorCallback;
                }
            }
            catch (_a) { }
            var first = !_this.observers.size;
            _this.observers.add(observer);
            var last = _this.last;
            if (last && last.error) {
                observer.error && observer.error(last.error);
            }
            else if (last && last.result) {
                observer.next && observer.next(last.result);
            }
            if (first) {
                _this.reobserve().catch(function () { });
            }
            return function () {
                if (_this.observers.delete(observer) && !_this.observers.size) {
                    _this.tearDownQuery();
                }
            };
        }) || this;
        _this.observers = new Set();
        _this.subscriptions = new Set();
        _this.queryInfo = queryInfo;
        _this.queryManager = queryManager;
        _this.isTornDown = false;
        var _b = queryManager.defaultOptions.watchQuery, _c = _b === void 0 ? {} : _b, _d = _c.fetchPolicy, defaultFetchPolicy = _d === void 0 ? "cache-first" : _d;
        var _e = options.fetchPolicy, fetchPolicy = _e === void 0 ? defaultFetchPolicy : _e, _f = options.initialFetchPolicy, initialFetchPolicy = _f === void 0 ? (fetchPolicy === "standby" ? defaultFetchPolicy : fetchPolicy) : _f;
        _this.options = tslib.__assign(tslib.__assign({}, options), { initialFetchPolicy: initialFetchPolicy, fetchPolicy: fetchPolicy });
        _this.queryId = queryInfo.queryId || queryManager.generateQueryId();
        var opDef = utilities.getOperationDefinition(_this.query);
        _this.queryName = opDef && opDef.name && opDef.name.value;
        return _this;
    }
    Object.defineProperty(ObservableQuery.prototype, "query", {
        get: function () {
            return this.queryManager.transform(this.options.query).document;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObservableQuery.prototype, "variables", {
        get: function () {
            return this.options.variables;
        },
        enumerable: false,
        configurable: true
    });
    ObservableQuery.prototype.result = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var observer = {
                next: function (result) {
                    resolve(result);
                    _this.observers.delete(observer);
                    if (!_this.observers.size) {
                        _this.queryManager.removeQuery(_this.queryId);
                    }
                    setTimeout(function () {
                        subscription.unsubscribe();
                    }, 0);
                },
                error: reject,
            };
            var subscription = _this.subscribe(observer);
        });
    };
    ObservableQuery.prototype.getCurrentResult = function (saveAsLastResult) {
        if (saveAsLastResult === void 0) { saveAsLastResult = true; }
        var lastResult = this.getLastResult(true);
        var networkStatus = this.queryInfo.networkStatus ||
            (lastResult && lastResult.networkStatus) ||
            exports.NetworkStatus.ready;
        var result = tslib.__assign(tslib.__assign({}, lastResult), { loading: isNetworkRequestInFlight(networkStatus), networkStatus: networkStatus });
        var _a = this.options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a;
        if (fetchPolicy === 'network-only' ||
            fetchPolicy === 'no-cache' ||
            fetchPolicy === 'standby' ||
            this.queryManager.transform(this.options.query).hasForcedResolvers) ;
        else {
            var diff = this.queryInfo.getDiff();
            if (diff.complete || this.options.returnPartialData) {
                result.data = diff.result;
            }
            if (equality.equal(result.data, {})) {
                result.data = void 0;
            }
            if (diff.complete) {
                delete result.partial;
                if (diff.complete &&
                    result.networkStatus === exports.NetworkStatus.loading &&
                    (fetchPolicy === 'cache-first' ||
                        fetchPolicy === 'cache-only')) {
                    result.networkStatus = exports.NetworkStatus.ready;
                    result.loading = false;
                }
            }
            else {
                result.partial = true;
            }
            if (__DEV__ &&
                !diff.complete &&
                !this.options.partialRefetch &&
                !result.loading &&
                !result.data &&
                !result.error) {
                logMissingFieldErrors(diff.missing);
            }
        }
        if (saveAsLastResult) {
            this.updateLastResult(result);
        }
        return result;
    };
    ObservableQuery.prototype.isDifferentFromLastResult = function (newResult, variables) {
        return (!this.last ||
            !equality.equal(this.last.result, newResult) ||
            (variables && !equality.equal(this.last.variables, variables)));
    };
    ObservableQuery.prototype.getLast = function (key, variablesMustMatch) {
        var last = this.last;
        if (last &&
            last[key] &&
            (!variablesMustMatch || equality.equal(last.variables, this.variables))) {
            return last[key];
        }
    };
    ObservableQuery.prototype.getLastResult = function (variablesMustMatch) {
        return this.getLast("result", variablesMustMatch);
    };
    ObservableQuery.prototype.getLastError = function (variablesMustMatch) {
        return this.getLast("error", variablesMustMatch);
    };
    ObservableQuery.prototype.resetLastResults = function () {
        delete this.last;
        this.isTornDown = false;
    };
    ObservableQuery.prototype.resetQueryStoreErrors = function () {
        this.queryManager.resetErrors(this.queryId);
    };
    ObservableQuery.prototype.refetch = function (variables) {
        var _a;
        var reobserveOptions = {
            pollInterval: 0,
        };
        var fetchPolicy = this.options.fetchPolicy;
        if (fetchPolicy === 'cache-and-network') {
            reobserveOptions.fetchPolicy = fetchPolicy;
        }
        else if (fetchPolicy === 'no-cache') {
            reobserveOptions.fetchPolicy = 'no-cache';
        }
        else {
            reobserveOptions.fetchPolicy = 'network-only';
        }
        if (__DEV__ && variables && hasOwnProperty$1.call(variables, "variables")) {
            var queryDef = utilities.getQueryDefinition(this.query);
            var vars = queryDef.variableDefinitions;
            if (!vars || !vars.some(function (v) { return v.variable.name.value === "variables"; })) {
                __DEV__ && globals.invariant.warn("Called refetch(".concat(JSON.stringify(variables), ") for query ").concat(((_a = queryDef.name) === null || _a === void 0 ? void 0 : _a.value) || JSON.stringify(queryDef), ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?"));
            }
        }
        if (variables && !equality.equal(this.options.variables, variables)) {
            reobserveOptions.variables = this.options.variables = tslib.__assign(tslib.__assign({}, this.options.variables), variables);
        }
        this.queryInfo.resetLastWrite();
        return this.reobserve(reobserveOptions, exports.NetworkStatus.refetch);
    };
    ObservableQuery.prototype.fetchMore = function (fetchMoreOptions) {
        var _this = this;
        var combinedOptions = tslib.__assign(tslib.__assign({}, (fetchMoreOptions.query ? fetchMoreOptions : tslib.__assign(tslib.__assign(tslib.__assign(tslib.__assign({}, this.options), { query: this.query }), fetchMoreOptions), { variables: tslib.__assign(tslib.__assign({}, this.options.variables), fetchMoreOptions.variables) }))), { fetchPolicy: "no-cache" });
        var qid = this.queryManager.generateQueryId();
        var queryInfo = this.queryInfo;
        var originalNetworkStatus = queryInfo.networkStatus;
        queryInfo.networkStatus = exports.NetworkStatus.fetchMore;
        if (combinedOptions.notifyOnNetworkStatusChange) {
            this.observe();
        }
        var updatedQuerySet = new Set();
        return this.queryManager.fetchQuery(qid, combinedOptions, exports.NetworkStatus.fetchMore).then(function (fetchMoreResult) {
            _this.queryManager.removeQuery(qid);
            if (queryInfo.networkStatus === exports.NetworkStatus.fetchMore) {
                queryInfo.networkStatus = originalNetworkStatus;
            }
            _this.queryManager.cache.batch({
                update: function (cache) {
                    var updateQuery = fetchMoreOptions.updateQuery;
                    if (updateQuery) {
                        cache.updateQuery({
                            query: _this.query,
                            variables: _this.variables,
                            returnPartialData: true,
                            optimistic: false,
                        }, function (previous) { return updateQuery(previous, {
                            fetchMoreResult: fetchMoreResult.data,
                            variables: combinedOptions.variables,
                        }); });
                    }
                    else {
                        cache.writeQuery({
                            query: combinedOptions.query,
                            variables: combinedOptions.variables,
                            data: fetchMoreResult.data,
                        });
                    }
                },
                onWatchUpdated: function (watch) {
                    updatedQuerySet.add(watch.query);
                },
            });
            return fetchMoreResult;
        }).finally(function () {
            if (!updatedQuerySet.has(_this.query)) {
                reobserveCacheFirst(_this);
            }
        });
    };
    ObservableQuery.prototype.subscribeToMore = function (options) {
        var _this = this;
        var subscription = this.queryManager
            .startGraphQLSubscription({
            query: options.document,
            variables: options.variables,
            context: options.context,
        })
            .subscribe({
            next: function (subscriptionData) {
                var updateQuery = options.updateQuery;
                if (updateQuery) {
                    _this.updateQuery(function (previous, _a) {
                        var variables = _a.variables;
                        return updateQuery(previous, {
                            subscriptionData: subscriptionData,
                            variables: variables,
                        });
                    });
                }
            },
            error: function (err) {
                if (options.onError) {
                    options.onError(err);
                    return;
                }
                __DEV__ && globals.invariant.error('Unhandled GraphQL subscription error', err);
            },
        });
        this.subscriptions.add(subscription);
        return function () {
            if (_this.subscriptions.delete(subscription)) {
                subscription.unsubscribe();
            }
        };
    };
    ObservableQuery.prototype.setOptions = function (newOptions) {
        return this.reobserve(newOptions);
    };
    ObservableQuery.prototype.setVariables = function (variables) {
        if (equality.equal(this.variables, variables)) {
            return this.observers.size
                ? this.result()
                : Promise.resolve();
        }
        this.options.variables = variables;
        if (!this.observers.size) {
            return Promise.resolve();
        }
        return this.reobserve({
            fetchPolicy: this.options.initialFetchPolicy,
            variables: variables,
        }, exports.NetworkStatus.setVariables);
    };
    ObservableQuery.prototype.updateQuery = function (mapFn) {
        var queryManager = this.queryManager;
        var result = queryManager.cache.diff({
            query: this.options.query,
            variables: this.variables,
            returnPartialData: true,
            optimistic: false,
        }).result;
        var newResult = mapFn(result, {
            variables: this.variables,
        });
        if (newResult) {
            queryManager.cache.writeQuery({
                query: this.options.query,
                data: newResult,
                variables: this.variables,
            });
            queryManager.broadcastQueries();
        }
    };
    ObservableQuery.prototype.startPolling = function (pollInterval) {
        this.options.pollInterval = pollInterval;
        this.updatePolling();
    };
    ObservableQuery.prototype.stopPolling = function () {
        this.options.pollInterval = 0;
        this.updatePolling();
    };
    ObservableQuery.prototype.applyNextFetchPolicy = function (reason, options) {
        if (options.nextFetchPolicy) {
            var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? "cache-first" : _a, _b = options.initialFetchPolicy, initialFetchPolicy = _b === void 0 ? fetchPolicy : _b;
            if (fetchPolicy === "standby") ;
            else if (typeof options.nextFetchPolicy === "function") {
                options.fetchPolicy = options.nextFetchPolicy(fetchPolicy, {
                    reason: reason,
                    options: options,
                    observable: this,
                    initialFetchPolicy: initialFetchPolicy,
                });
            }
            else if (reason === "variables-changed") {
                options.fetchPolicy = initialFetchPolicy;
            }
            else {
                options.fetchPolicy = options.nextFetchPolicy;
            }
        }
        return options.fetchPolicy;
    };
    ObservableQuery.prototype.fetch = function (options, newNetworkStatus) {
        this.queryManager.setObservableQuery(this);
        return this.queryManager.fetchQueryObservable(this.queryId, options, newNetworkStatus);
    };
    ObservableQuery.prototype.updatePolling = function () {
        var _this = this;
        if (this.queryManager.ssrMode) {
            return;
        }
        var _a = this, pollingInfo = _a.pollingInfo, pollInterval = _a.options.pollInterval;
        if (!pollInterval) {
            if (pollingInfo) {
                clearTimeout(pollingInfo.timeout);
                delete this.pollingInfo;
            }
            return;
        }
        if (pollingInfo &&
            pollingInfo.interval === pollInterval) {
            return;
        }
        __DEV__ ? globals.invariant(pollInterval, 'Attempted to start a polling query without a polling interval.') : globals.invariant(pollInterval, 13);
        var info = pollingInfo || (this.pollingInfo = {});
        info.interval = pollInterval;
        var maybeFetch = function () {
            if (_this.pollingInfo) {
                if (!isNetworkRequestInFlight(_this.queryInfo.networkStatus)) {
                    _this.reobserve({
                        fetchPolicy: _this.options.initialFetchPolicy === 'no-cache' ? 'no-cache' : 'network-only',
                    }, exports.NetworkStatus.poll).then(poll, poll);
                }
                else {
                    poll();
                }
            }
        };
        var poll = function () {
            var info = _this.pollingInfo;
            if (info) {
                clearTimeout(info.timeout);
                info.timeout = setTimeout(maybeFetch, info.interval);
            }
        };
        poll();
    };
    ObservableQuery.prototype.updateLastResult = function (newResult, variables) {
        if (variables === void 0) { variables = this.variables; }
        this.last = tslib.__assign(tslib.__assign({}, this.last), { result: this.queryManager.assumeImmutableResults
                ? newResult
                : utilities.cloneDeep(newResult), variables: variables });
        if (!utilities.isNonEmptyArray(newResult.errors)) {
            delete this.last.error;
        }
        return this.last;
    };
    ObservableQuery.prototype.reobserve = function (newOptions, newNetworkStatus) {
        var _this = this;
        this.isTornDown = false;
        var useDisposableConcast = newNetworkStatus === exports.NetworkStatus.refetch ||
            newNetworkStatus === exports.NetworkStatus.fetchMore ||
            newNetworkStatus === exports.NetworkStatus.poll;
        var oldVariables = this.options.variables;
        var oldFetchPolicy = this.options.fetchPolicy;
        var mergedOptions = utilities.compact(this.options, newOptions || {});
        var options = useDisposableConcast
            ? mergedOptions
            : assign(this.options, mergedOptions);
        if (!useDisposableConcast) {
            this.updatePolling();
            if (newOptions &&
                newOptions.variables &&
                !equality.equal(newOptions.variables, oldVariables) &&
                options.fetchPolicy !== "standby" &&
                options.fetchPolicy === oldFetchPolicy) {
                this.applyNextFetchPolicy("variables-changed", options);
                if (newNetworkStatus === void 0) {
                    newNetworkStatus = exports.NetworkStatus.setVariables;
                }
            }
        }
        var variables = options.variables && tslib.__assign({}, options.variables);
        var concast = this.fetch(options, newNetworkStatus);
        var observer = {
            next: function (result) {
                _this.reportResult(result, variables);
            },
            error: function (error) {
                _this.reportError(error, variables);
            },
        };
        if (!useDisposableConcast) {
            if (this.concast && this.observer) {
                this.concast.removeObserver(this.observer);
            }
            this.concast = concast;
            this.observer = observer;
        }
        concast.addObserver(observer);
        return concast.promise;
    };
    ObservableQuery.prototype.observe = function () {
        this.reportResult(this.getCurrentResult(false), this.variables);
    };
    ObservableQuery.prototype.reportResult = function (result, variables) {
        var lastError = this.getLastError();
        if (lastError || this.isDifferentFromLastResult(result, variables)) {
            if (lastError || !result.partial || this.options.returnPartialData) {
                this.updateLastResult(result, variables);
            }
            utilities.iterateObserversSafely(this.observers, 'next', result);
        }
    };
    ObservableQuery.prototype.reportError = function (error, variables) {
        var errorResult = tslib.__assign(tslib.__assign({}, this.getLastResult()), { error: error, errors: error.graphQLErrors, networkStatus: exports.NetworkStatus.error, loading: false });
        this.updateLastResult(errorResult, variables);
        utilities.iterateObserversSafely(this.observers, 'error', this.last.error = error);
    };
    ObservableQuery.prototype.hasObservers = function () {
        return this.observers.size > 0;
    };
    ObservableQuery.prototype.tearDownQuery = function () {
        if (this.isTornDown)
            return;
        if (this.concast && this.observer) {
            this.concast.removeObserver(this.observer);
            delete this.concast;
            delete this.observer;
        }
        this.stopPolling();
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        this.subscriptions.clear();
        this.queryManager.stopQuery(this.queryId);
        this.observers.clear();
        this.isTornDown = true;
    };
    return ObservableQuery;
}(utilities.Observable));
utilities.fixObservableSubclass(ObservableQuery);
function reobserveCacheFirst(obsQuery) {
    var _a = obsQuery.options, fetchPolicy = _a.fetchPolicy, nextFetchPolicy = _a.nextFetchPolicy;
    if (fetchPolicy === "cache-and-network" ||
        fetchPolicy === "network-only") {
        return obsQuery.reobserve({
            fetchPolicy: "cache-first",
            nextFetchPolicy: function () {
                this.nextFetchPolicy = nextFetchPolicy;
                if (typeof nextFetchPolicy === "function") {
                    return nextFetchPolicy.apply(this, arguments);
                }
                return fetchPolicy;
            },
        });
    }
    return obsQuery.reobserve();
}
function defaultSubscriptionObserverErrorCallback(error) {
    __DEV__ && globals.invariant.error('Unhandled error', error.message, error.stack);
}
function logMissingFieldErrors(missing) {
    if (__DEV__ && missing) {
        __DEV__ && globals.invariant.debug("Missing cache result fields: ".concat(JSON.stringify(missing)), missing);
    }
}

var LocalState = (function () {
    function LocalState(_a) {
        var cache = _a.cache, client = _a.client, resolvers = _a.resolvers, fragmentMatcher = _a.fragmentMatcher;
        this.selectionsToResolveCache = new WeakMap();
        this.cache = cache;
        if (client) {
            this.client = client;
        }
        if (resolvers) {
            this.addResolvers(resolvers);
        }
        if (fragmentMatcher) {
            this.setFragmentMatcher(fragmentMatcher);
        }
    }
    LocalState.prototype.addResolvers = function (resolvers) {
        var _this = this;
        this.resolvers = this.resolvers || {};
        if (Array.isArray(resolvers)) {
            resolvers.forEach(function (resolverGroup) {
                _this.resolvers = utilities.mergeDeep(_this.resolvers, resolverGroup);
            });
        }
        else {
            this.resolvers = utilities.mergeDeep(this.resolvers, resolvers);
        }
    };
    LocalState.prototype.setResolvers = function (resolvers) {
        this.resolvers = {};
        this.addResolvers(resolvers);
    };
    LocalState.prototype.getResolvers = function () {
        return this.resolvers || {};
    };
    LocalState.prototype.runResolvers = function (_a) {
        var document = _a.document, remoteResult = _a.remoteResult, context = _a.context, variables = _a.variables, _b = _a.onlyRunForcedResolvers, onlyRunForcedResolvers = _b === void 0 ? false : _b;
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_c) {
                if (document) {
                    return [2, this.resolveDocument(document, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function (localResult) { return (tslib.__assign(tslib.__assign({}, remoteResult), { data: localResult.result })); })];
                }
                return [2, remoteResult];
            });
        });
    };
    LocalState.prototype.setFragmentMatcher = function (fragmentMatcher) {
        this.fragmentMatcher = fragmentMatcher;
    };
    LocalState.prototype.getFragmentMatcher = function () {
        return this.fragmentMatcher;
    };
    LocalState.prototype.clientQuery = function (document) {
        if (utilities.hasDirectives(['client'], document)) {
            if (this.resolvers) {
                return document;
            }
        }
        return null;
    };
    LocalState.prototype.serverQuery = function (document) {
        return utilities.removeClientSetsFromDocument(document);
    };
    LocalState.prototype.prepareContext = function (context) {
        var cache = this.cache;
        return tslib.__assign(tslib.__assign({}, context), { cache: cache, getCacheKey: function (obj) {
                return cache.identify(obj);
            } });
    };
    LocalState.prototype.addExportedVariables = function (document, variables, context) {
        if (variables === void 0) { variables = {}; }
        if (context === void 0) { context = {}; }
        return tslib.__awaiter(this, void 0, void 0, function () {
            return tslib.__generator(this, function (_a) {
                if (document) {
                    return [2, this.resolveDocument(document, this.buildRootValueFromCache(document, variables) || {}, this.prepareContext(context), variables).then(function (data) { return (tslib.__assign(tslib.__assign({}, variables), data.exportedVariables)); })];
                }
                return [2, tslib.__assign({}, variables)];
            });
        });
    };
    LocalState.prototype.shouldForceResolvers = function (document) {
        var forceResolvers = false;
        graphql.visit(document, {
            Directive: {
                enter: function (node) {
                    if (node.name.value === 'client' && node.arguments) {
                        forceResolvers = node.arguments.some(function (arg) {
                            return arg.name.value === 'always' &&
                                arg.value.kind === 'BooleanValue' &&
                                arg.value.value === true;
                        });
                        if (forceResolvers) {
                            return graphql.BREAK;
                        }
                    }
                },
            },
        });
        return forceResolvers;
    };
    LocalState.prototype.buildRootValueFromCache = function (document, variables) {
        return this.cache.diff({
            query: utilities.buildQueryFromSelectionSet(document),
            variables: variables,
            returnPartialData: true,
            optimistic: false,
        }).result;
    };
    LocalState.prototype.resolveDocument = function (document, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
        if (context === void 0) { context = {}; }
        if (variables === void 0) { variables = {}; }
        if (fragmentMatcher === void 0) { fragmentMatcher = function () { return true; }; }
        if (onlyRunForcedResolvers === void 0) { onlyRunForcedResolvers = false; }
        return tslib.__awaiter(this, void 0, void 0, function () {
            var mainDefinition, fragments, fragmentMap, selectionsToResolve, definitionOperation, defaultOperationType, _a, cache, client, execContext, isClientFieldDescendant;
            return tslib.__generator(this, function (_b) {
                mainDefinition = utilities.getMainDefinition(document);
                fragments = utilities.getFragmentDefinitions(document);
                fragmentMap = utilities.createFragmentMap(fragments);
                selectionsToResolve = this.collectSelectionsToResolve(mainDefinition, fragmentMap);
                definitionOperation = mainDefinition.operation;
                defaultOperationType = definitionOperation
                    ? definitionOperation.charAt(0).toUpperCase() +
                        definitionOperation.slice(1)
                    : 'Query';
                _a = this, cache = _a.cache, client = _a.client;
                execContext = {
                    fragmentMap: fragmentMap,
                    context: tslib.__assign(tslib.__assign({}, context), { cache: cache, client: client }),
                    variables: variables,
                    fragmentMatcher: fragmentMatcher,
                    defaultOperationType: defaultOperationType,
                    exportedVariables: {},
                    selectionsToResolve: selectionsToResolve,
                    onlyRunForcedResolvers: onlyRunForcedResolvers,
                };
                isClientFieldDescendant = false;
                return [2, this.resolveSelectionSet(mainDefinition.selectionSet, isClientFieldDescendant, rootValue, execContext).then(function (result) { return ({
                        result: result,
                        exportedVariables: execContext.exportedVariables,
                    }); })];
            });
        });
    };
    LocalState.prototype.resolveSelectionSet = function (selectionSet, isClientFieldDescendant, rootValue, execContext) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var fragmentMap, context, variables, resultsToMerge, execute;
            var _this = this;
            return tslib.__generator(this, function (_a) {
                fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
                resultsToMerge = [rootValue];
                execute = function (selection) { return tslib.__awaiter(_this, void 0, void 0, function () {
                    var fragment, typeCondition;
                    return tslib.__generator(this, function (_a) {
                        if (!isClientFieldDescendant && !execContext.selectionsToResolve.has(selection)) {
                            return [2];
                        }
                        if (!utilities.shouldInclude(selection, variables)) {
                            return [2];
                        }
                        if (utilities.isField(selection)) {
                            return [2, this.resolveField(selection, isClientFieldDescendant, rootValue, execContext).then(function (fieldResult) {
                                    var _a;
                                    if (typeof fieldResult !== 'undefined') {
                                        resultsToMerge.push((_a = {},
                                            _a[utilities.resultKeyNameFromField(selection)] = fieldResult,
                                            _a));
                                    }
                                })];
                        }
                        if (utilities.isInlineFragment(selection)) {
                            fragment = selection;
                        }
                        else {
                            fragment = fragmentMap[selection.name.value];
                            __DEV__ ? globals.invariant(fragment, "No fragment named ".concat(selection.name.value)) : globals.invariant(fragment, 11);
                        }
                        if (fragment && fragment.typeCondition) {
                            typeCondition = fragment.typeCondition.name.value;
                            if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                                return [2, this.resolveSelectionSet(fragment.selectionSet, isClientFieldDescendant, rootValue, execContext).then(function (fragmentResult) {
                                        resultsToMerge.push(fragmentResult);
                                    })];
                            }
                        }
                        return [2];
                    });
                }); };
                return [2, Promise.all(selectionSet.selections.map(execute)).then(function () {
                        return utilities.mergeDeepArray(resultsToMerge);
                    })];
            });
        });
    };
    LocalState.prototype.resolveField = function (field, isClientFieldDescendant, rootValue, execContext) {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;
            var _this = this;
            return tslib.__generator(this, function (_a) {
                if (!rootValue) {
                    return [2, null];
                }
                variables = execContext.variables;
                fieldName = field.name.value;
                aliasedFieldName = utilities.resultKeyNameFromField(field);
                aliasUsed = fieldName !== aliasedFieldName;
                defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
                resultPromise = Promise.resolve(defaultResult);
                if (!execContext.onlyRunForcedResolvers ||
                    this.shouldForceResolvers(field)) {
                    resolverType = rootValue.__typename || execContext.defaultOperationType;
                    resolverMap = this.resolvers && this.resolvers[resolverType];
                    if (resolverMap) {
                        resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];
                        if (resolve) {
                            resultPromise = Promise.resolve(cache.cacheSlot.withValue(this.cache, resolve, [
                                rootValue,
                                utilities.argumentsObjectFromField(field, variables),
                                execContext.context,
                                { field: field, fragmentMap: execContext.fragmentMap },
                            ]));
                        }
                    }
                }
                return [2, resultPromise.then(function (result) {
                        var _a, _b;
                        if (result === void 0) { result = defaultResult; }
                        if (field.directives) {
                            field.directives.forEach(function (directive) {
                                if (directive.name.value === 'export' && directive.arguments) {
                                    directive.arguments.forEach(function (arg) {
                                        if (arg.name.value === 'as' && arg.value.kind === 'StringValue') {
                                            execContext.exportedVariables[arg.value.value] = result;
                                        }
                                    });
                                }
                            });
                        }
                        if (!field.selectionSet) {
                            return result;
                        }
                        if (result == null) {
                            return result;
                        }
                        var isClientField = (_b = (_a = field.directives) === null || _a === void 0 ? void 0 : _a.some(function (d) { return d.name.value === 'client'; })) !== null && _b !== void 0 ? _b : false;
                        if (Array.isArray(result)) {
                            return _this.resolveSubSelectedArray(field, isClientFieldDescendant || isClientField, result, execContext);
                        }
                        if (field.selectionSet) {
                            return _this.resolveSelectionSet(field.selectionSet, isClientFieldDescendant || isClientField, result, execContext);
                        }
                    })];
            });
        });
    };
    LocalState.prototype.resolveSubSelectedArray = function (field, isClientFieldDescendant, result, execContext) {
        var _this = this;
        return Promise.all(result.map(function (item) {
            if (item === null) {
                return null;
            }
            if (Array.isArray(item)) {
                return _this.resolveSubSelectedArray(field, isClientFieldDescendant, item, execContext);
            }
            if (field.selectionSet) {
                return _this.resolveSelectionSet(field.selectionSet, isClientFieldDescendant, item, execContext);
            }
        }));
    };
    LocalState.prototype.collectSelectionsToResolve = function (mainDefinition, fragmentMap) {
        var isSingleASTNode = function (node) { return !Array.isArray(node); };
        var selectionsToResolveCache = this.selectionsToResolveCache;
        function collectByDefinition(definitionNode) {
            if (!selectionsToResolveCache.has(definitionNode)) {
                var matches_1 = new Set();
                selectionsToResolveCache.set(definitionNode, matches_1);
                graphql.visit(definitionNode, {
                    Directive: function (node, _, __, ___, ancestors) {
                        if (node.name.value === 'client') {
                            ancestors.forEach(function (node) {
                                if (isSingleASTNode(node) && graphql.isSelectionNode(node)) {
                                    matches_1.add(node);
                                }
                            });
                        }
                    },
                    FragmentSpread: function (spread, _, __, ___, ancestors) {
                        var fragment = fragmentMap[spread.name.value];
                        __DEV__ ? globals.invariant(fragment, "No fragment named ".concat(spread.name.value)) : globals.invariant(fragment, 12);
                        var fragmentSelections = collectByDefinition(fragment);
                        if (fragmentSelections.size > 0) {
                            ancestors.forEach(function (node) {
                                if (isSingleASTNode(node) && graphql.isSelectionNode(node)) {
                                    matches_1.add(node);
                                }
                            });
                            matches_1.add(spread);
                            fragmentSelections.forEach(function (selection) {
                                matches_1.add(selection);
                            });
                        }
                    }
                });
            }
            return selectionsToResolveCache.get(definitionNode);
        }
        return collectByDefinition(mainDefinition);
    };
    return LocalState;
}());

var destructiveMethodCounts = new (utilities.canUseWeakMap ? WeakMap : Map)();
function wrapDestructiveCacheMethod(cache, methodName) {
    var original = cache[methodName];
    if (typeof original === "function") {
        cache[methodName] = function () {
            destructiveMethodCounts.set(cache, (destructiveMethodCounts.get(cache) + 1) % 1e15);
            return original.apply(this, arguments);
        };
    }
}
function cancelNotifyTimeout(info) {
    if (info["notifyTimeout"]) {
        clearTimeout(info["notifyTimeout"]);
        info["notifyTimeout"] = void 0;
    }
}
var QueryInfo = (function () {
    function QueryInfo(queryManager, queryId) {
        if (queryId === void 0) { queryId = queryManager.generateQueryId(); }
        this.queryId = queryId;
        this.listeners = new Set();
        this.document = null;
        this.lastRequestId = 1;
        this.subscriptions = new Set();
        this.stopped = false;
        this.dirty = false;
        this.observableQuery = null;
        var cache = this.cache = queryManager.cache;
        if (!destructiveMethodCounts.has(cache)) {
            destructiveMethodCounts.set(cache, 0);
            wrapDestructiveCacheMethod(cache, "evict");
            wrapDestructiveCacheMethod(cache, "modify");
            wrapDestructiveCacheMethod(cache, "reset");
        }
    }
    QueryInfo.prototype.init = function (query) {
        var networkStatus = query.networkStatus || exports.NetworkStatus.loading;
        if (this.variables &&
            this.networkStatus !== exports.NetworkStatus.loading &&
            !equality.equal(this.variables, query.variables)) {
            networkStatus = exports.NetworkStatus.setVariables;
        }
        if (!equality.equal(query.variables, this.variables)) {
            this.lastDiff = void 0;
        }
        Object.assign(this, {
            document: query.document,
            variables: query.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: networkStatus,
        });
        if (query.observableQuery) {
            this.setObservableQuery(query.observableQuery);
        }
        if (query.lastRequestId) {
            this.lastRequestId = query.lastRequestId;
        }
        return this;
    };
    QueryInfo.prototype.reset = function () {
        cancelNotifyTimeout(this);
        this.dirty = false;
    };
    QueryInfo.prototype.getDiff = function (variables) {
        if (variables === void 0) { variables = this.variables; }
        var options = this.getDiffOptions(variables);
        if (this.lastDiff && equality.equal(options, this.lastDiff.options)) {
            return this.lastDiff.diff;
        }
        this.updateWatch(this.variables = variables);
        var oq = this.observableQuery;
        if (oq && oq.options.fetchPolicy === "no-cache") {
            return { complete: false };
        }
        var diff = this.cache.diff(options);
        this.updateLastDiff(diff, options);
        return diff;
    };
    QueryInfo.prototype.updateLastDiff = function (diff, options) {
        this.lastDiff = diff ? {
            diff: diff,
            options: options || this.getDiffOptions(),
        } : void 0;
    };
    QueryInfo.prototype.getDiffOptions = function (variables) {
        var _a;
        if (variables === void 0) { variables = this.variables; }
        return {
            query: this.document,
            variables: variables,
            returnPartialData: true,
            optimistic: true,
            canonizeResults: (_a = this.observableQuery) === null || _a === void 0 ? void 0 : _a.options.canonizeResults,
        };
    };
    QueryInfo.prototype.setDiff = function (diff) {
        var _this = this;
        var oldDiff = this.lastDiff && this.lastDiff.diff;
        this.updateLastDiff(diff);
        if (!this.dirty &&
            !equality.equal(oldDiff && oldDiff.result, diff && diff.result)) {
            this.dirty = true;
            if (!this.notifyTimeout) {
                this.notifyTimeout = setTimeout(function () { return _this.notify(); }, 0);
            }
        }
    };
    QueryInfo.prototype.setObservableQuery = function (oq) {
        var _this = this;
        if (oq === this.observableQuery)
            return;
        if (this.oqListener) {
            this.listeners.delete(this.oqListener);
        }
        this.observableQuery = oq;
        if (oq) {
            oq["queryInfo"] = this;
            this.listeners.add(this.oqListener = function () {
                var diff = _this.getDiff();
                if (diff.fromOptimisticTransaction) {
                    oq["observe"]();
                }
                else {
                    reobserveCacheFirst(oq);
                }
            });
        }
        else {
            delete this.oqListener;
        }
    };
    QueryInfo.prototype.notify = function () {
        var _this = this;
        cancelNotifyTimeout(this);
        if (this.shouldNotify()) {
            this.listeners.forEach(function (listener) { return listener(_this); });
        }
        this.dirty = false;
    };
    QueryInfo.prototype.shouldNotify = function () {
        if (!this.dirty || !this.listeners.size) {
            return false;
        }
        if (isNetworkRequestInFlight(this.networkStatus) &&
            this.observableQuery) {
            var fetchPolicy = this.observableQuery.options.fetchPolicy;
            if (fetchPolicy !== "cache-only" &&
                fetchPolicy !== "cache-and-network") {
                return false;
            }
        }
        return true;
    };
    QueryInfo.prototype.stop = function () {
        if (!this.stopped) {
            this.stopped = true;
            this.reset();
            this.cancel();
            this.cancel = QueryInfo.prototype.cancel;
            this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
            var oq = this.observableQuery;
            if (oq)
                oq.stopPolling();
        }
    };
    QueryInfo.prototype.cancel = function () { };
    QueryInfo.prototype.updateWatch = function (variables) {
        var _this = this;
        if (variables === void 0) { variables = this.variables; }
        var oq = this.observableQuery;
        if (oq && oq.options.fetchPolicy === "no-cache") {
            return;
        }
        var watchOptions = tslib.__assign(tslib.__assign({}, this.getDiffOptions(variables)), { watcher: this, callback: function (diff) { return _this.setDiff(diff); } });
        if (!this.lastWatch ||
            !equality.equal(watchOptions, this.lastWatch)) {
            this.cancel();
            this.cancel = this.cache.watch(this.lastWatch = watchOptions);
        }
    };
    QueryInfo.prototype.resetLastWrite = function () {
        this.lastWrite = void 0;
    };
    QueryInfo.prototype.shouldWrite = function (result, variables) {
        var lastWrite = this.lastWrite;
        return !(lastWrite &&
            lastWrite.dmCount === destructiveMethodCounts.get(this.cache) &&
            equality.equal(variables, lastWrite.variables) &&
            equality.equal(result.data, lastWrite.result.data));
    };
    QueryInfo.prototype.markResult = function (result, document, options, cacheWriteBehavior) {
        var _this = this;
        var merger = new utilities.DeepMerger();
        var graphQLErrors = utilities.isNonEmptyArray(result.errors)
            ? result.errors.slice(0)
            : [];
        this.reset();
        if ('incremental' in result && utilities.isNonEmptyArray(result.incremental)) {
            var mergedData = mergeIncrementalData(this.getDiff().result, result);
            result.data = mergedData;
        }
        else if ('hasNext' in result && result.hasNext) {
            var diff = this.getDiff();
            result.data = merger.merge(diff.result, result.data);
        }
        this.graphQLErrors = graphQLErrors;
        if (options.fetchPolicy === 'no-cache') {
            this.updateLastDiff({ result: result.data, complete: true }, this.getDiffOptions(options.variables));
        }
        else if (cacheWriteBehavior !== 0) {
            if (shouldWriteResult(result, options.errorPolicy)) {
                this.cache.performTransaction(function (cache) {
                    if (_this.shouldWrite(result, options.variables)) {
                        cache.writeQuery({
                            query: document,
                            data: result.data,
                            variables: options.variables,
                            overwrite: cacheWriteBehavior === 1,
                        });
                        _this.lastWrite = {
                            result: result,
                            variables: options.variables,
                            dmCount: destructiveMethodCounts.get(_this.cache),
                        };
                    }
                    else {
                        if (_this.lastDiff &&
                            _this.lastDiff.diff.complete) {
                            result.data = _this.lastDiff.diff.result;
                            return;
                        }
                    }
                    var diffOptions = _this.getDiffOptions(options.variables);
                    var diff = cache.diff(diffOptions);
                    if (!_this.stopped) {
                        _this.updateWatch(options.variables);
                    }
                    _this.updateLastDiff(diff, diffOptions);
                    if (diff.complete) {
                        result.data = diff.result;
                    }
                });
            }
            else {
                this.lastWrite = void 0;
            }
        }
    };
    QueryInfo.prototype.markReady = function () {
        this.networkError = null;
        return this.networkStatus = exports.NetworkStatus.ready;
    };
    QueryInfo.prototype.markError = function (error) {
        this.networkStatus = exports.NetworkStatus.error;
        this.lastWrite = void 0;
        this.reset();
        if (error.graphQLErrors) {
            this.graphQLErrors = error.graphQLErrors;
        }
        if (error.networkError) {
            this.networkError = error.networkError;
        }
        return error;
    };
    return QueryInfo;
}());
function shouldWriteResult(result, errorPolicy) {
    if (errorPolicy === void 0) { errorPolicy = "none"; }
    var ignoreErrors = errorPolicy === "ignore" ||
        errorPolicy === "all";
    var writeWithErrors = !utilities.graphQLResultHasError(result);
    if (!writeWithErrors && ignoreErrors && result.data) {
        writeWithErrors = true;
    }
    return writeWithErrors;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var QueryManager = (function () {
    function QueryManager(_a) {
        var cache = _a.cache, link = _a.link, defaultOptions = _a.defaultOptions, _b = _a.queryDeduplication, queryDeduplication = _b === void 0 ? false : _b, onBroadcast = _a.onBroadcast, _c = _a.ssrMode, ssrMode = _c === void 0 ? false : _c, _d = _a.clientAwareness, clientAwareness = _d === void 0 ? {} : _d, localState = _a.localState, assumeImmutableResults = _a.assumeImmutableResults;
        this.clientAwareness = {};
        this.queries = new Map();
        this.fetchCancelFns = new Map();
        this.transformCache = new (utilities.canUseWeakMap ? WeakMap : Map)();
        this.queryIdCounter = 1;
        this.requestIdCounter = 1;
        this.mutationIdCounter = 1;
        this.inFlightLinkObservables = new Map();
        this.cache = cache;
        this.link = link;
        this.defaultOptions = defaultOptions || Object.create(null);
        this.queryDeduplication = queryDeduplication;
        this.clientAwareness = clientAwareness;
        this.localState = localState || new LocalState({ cache: cache });
        this.ssrMode = ssrMode;
        this.assumeImmutableResults = !!assumeImmutableResults;
        if ((this.onBroadcast = onBroadcast)) {
            this.mutationStore = Object.create(null);
        }
    }
    QueryManager.prototype.stop = function () {
        var _this = this;
        this.queries.forEach(function (_info, queryId) {
            _this.stopQueryNoBroadcast(queryId);
        });
        this.cancelPendingFetches(__DEV__ ? new globals.InvariantError('QueryManager stopped while query was in flight') : new globals.InvariantError(14));
    };
    QueryManager.prototype.cancelPendingFetches = function (error) {
        this.fetchCancelFns.forEach(function (cancel) { return cancel(error); });
        this.fetchCancelFns.clear();
    };
    QueryManager.prototype.mutate = function (_a) {
        var _b, _c;
        var mutation = _a.mutation, variables = _a.variables, optimisticResponse = _a.optimisticResponse, updateQueries = _a.updateQueries, _d = _a.refetchQueries, refetchQueries = _d === void 0 ? [] : _d, _e = _a.awaitRefetchQueries, awaitRefetchQueries = _e === void 0 ? false : _e, updateWithProxyFn = _a.update, onQueryUpdated = _a.onQueryUpdated, _f = _a.fetchPolicy, fetchPolicy = _f === void 0 ? ((_b = this.defaultOptions.mutate) === null || _b === void 0 ? void 0 : _b.fetchPolicy) || "network-only" : _f, _g = _a.errorPolicy, errorPolicy = _g === void 0 ? ((_c = this.defaultOptions.mutate) === null || _c === void 0 ? void 0 : _c.errorPolicy) || "none" : _g, keepRootFields = _a.keepRootFields, context = _a.context;
        return tslib.__awaiter(this, void 0, void 0, function () {
            var mutationId, _h, document, hasClientExports, mutationStoreValue, self;
            return tslib.__generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        __DEV__ ? globals.invariant(mutation, 'mutation option is required. You must specify your GraphQL document in the mutation option.') : globals.invariant(mutation, 15);
                        __DEV__ ? globals.invariant(fetchPolicy === 'network-only' ||
                            fetchPolicy === 'no-cache', "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : globals.invariant(fetchPolicy === 'network-only' ||
                            fetchPolicy === 'no-cache', 16);
                        mutationId = this.generateMutationId();
                        _h = this.transform(mutation), document = _h.document, hasClientExports = _h.hasClientExports;
                        mutation = this.cache.transformForLink(document);
                        variables = this.getVariables(mutation, variables);
                        if (!hasClientExports) return [3, 2];
                        return [4, this.localState.addExportedVariables(mutation, variables, context)];
                    case 1:
                        variables = (_j.sent());
                        _j.label = 2;
                    case 2:
                        mutationStoreValue = this.mutationStore &&
                            (this.mutationStore[mutationId] = {
                                mutation: mutation,
                                variables: variables,
                                loading: true,
                                error: null,
                            });
                        if (optimisticResponse) {
                            this.markMutationOptimistic(optimisticResponse, {
                                mutationId: mutationId,
                                document: mutation,
                                variables: variables,
                                fetchPolicy: fetchPolicy,
                                errorPolicy: errorPolicy,
                                context: context,
                                updateQueries: updateQueries,
                                update: updateWithProxyFn,
                                keepRootFields: keepRootFields,
                            });
                        }
                        this.broadcastQueries();
                        self = this;
                        return [2, new Promise(function (resolve, reject) {
                                return utilities.asyncMap(self.getObservableFromLink(mutation, tslib.__assign(tslib.__assign({}, context), { optimisticResponse: optimisticResponse }), variables, false), function (result) {
                                    if (utilities.graphQLResultHasError(result) && errorPolicy === 'none') {
                                        throw new errors.ApolloError({
                                            graphQLErrors: utilities.getGraphQLErrorsFromResult(result),
                                        });
                                    }
                                    if (mutationStoreValue) {
                                        mutationStoreValue.loading = false;
                                        mutationStoreValue.error = null;
                                    }
                                    var storeResult = tslib.__assign({}, result);
                                    if (typeof refetchQueries === "function") {
                                        refetchQueries = refetchQueries(storeResult);
                                    }
                                    if (errorPolicy === 'ignore' &&
                                        utilities.graphQLResultHasError(storeResult)) {
                                        delete storeResult.errors;
                                    }
                                    return self.markMutationResult({
                                        mutationId: mutationId,
                                        result: storeResult,
                                        document: mutation,
                                        variables: variables,
                                        fetchPolicy: fetchPolicy,
                                        errorPolicy: errorPolicy,
                                        context: context,
                                        update: updateWithProxyFn,
                                        updateQueries: updateQueries,
                                        awaitRefetchQueries: awaitRefetchQueries,
                                        refetchQueries: refetchQueries,
                                        removeOptimistic: optimisticResponse ? mutationId : void 0,
                                        onQueryUpdated: onQueryUpdated,
                                        keepRootFields: keepRootFields,
                                    });
                                }).subscribe({
                                    next: function (storeResult) {
                                        self.broadcastQueries();
                                        if (!('hasNext' in storeResult) || storeResult.hasNext === false) {
                                            resolve(storeResult);
                                        }
                                    },
                                    error: function (err) {
                                        if (mutationStoreValue) {
                                            mutationStoreValue.loading = false;
                                            mutationStoreValue.error = err;
                                        }
                                        if (optimisticResponse) {
                                            self.cache.removeOptimistic(mutationId);
                                        }
                                        self.broadcastQueries();
                                        reject(err instanceof errors.ApolloError ? err : new errors.ApolloError({
                                            networkError: err,
                                        }));
                                    },
                                });
                            })];
                }
            });
        });
    };
    QueryManager.prototype.markMutationResult = function (mutation, cache) {
        var _this = this;
        if (cache === void 0) { cache = this.cache; }
        var result = mutation.result;
        var cacheWrites = [];
        var skipCache = mutation.fetchPolicy === "no-cache";
        if (!skipCache && shouldWriteResult(result, mutation.errorPolicy)) {
            if (!isExecutionPatchIncrementalResult(result)) {
                cacheWrites.push({
                    result: result.data,
                    dataId: 'ROOT_MUTATION',
                    query: mutation.document,
                    variables: mutation.variables,
                });
            }
            if (isExecutionPatchIncrementalResult(result) && utilities.isNonEmptyArray(result.incremental)) {
                var diff = cache.diff({
                    id: "ROOT_MUTATION",
                    query: this.transform(mutation.document).asQuery,
                    variables: mutation.variables,
                    optimistic: false,
                    returnPartialData: true,
                });
                var mergedData = void 0;
                if (diff.result) {
                    mergedData = mergeIncrementalData(diff.result, result);
                }
                if (typeof mergedData !== 'undefined') {
                    result.data = mergedData;
                    cacheWrites.push({
                        result: mergedData,
                        dataId: 'ROOT_MUTATION',
                        query: mutation.document,
                        variables: mutation.variables,
                    });
                }
            }
            var updateQueries_1 = mutation.updateQueries;
            if (updateQueries_1) {
                this.queries.forEach(function (_a, queryId) {
                    var observableQuery = _a.observableQuery;
                    var queryName = observableQuery && observableQuery.queryName;
                    if (!queryName || !hasOwnProperty.call(updateQueries_1, queryName)) {
                        return;
                    }
                    var updater = updateQueries_1[queryName];
                    var _b = _this.queries.get(queryId), document = _b.document, variables = _b.variables;
                    var _c = cache.diff({
                        query: document,
                        variables: variables,
                        returnPartialData: true,
                        optimistic: false,
                    }), currentQueryResult = _c.result, complete = _c.complete;
                    if (complete && currentQueryResult) {
                        var nextQueryResult = updater(currentQueryResult, {
                            mutationResult: result,
                            queryName: document && utilities.getOperationName(document) || void 0,
                            queryVariables: variables,
                        });
                        if (nextQueryResult) {
                            cacheWrites.push({
                                result: nextQueryResult,
                                dataId: 'ROOT_QUERY',
                                query: document,
                                variables: variables,
                            });
                        }
                    }
                });
            }
        }
        if (cacheWrites.length > 0 ||
            mutation.refetchQueries ||
            mutation.update ||
            mutation.onQueryUpdated ||
            mutation.removeOptimistic) {
            var results_1 = [];
            this.refetchQueries({
                updateCache: function (cache) {
                    if (!skipCache) {
                        cacheWrites.forEach(function (write) { return cache.write(write); });
                    }
                    var update = mutation.update;
                    var isFinalResult = !isExecutionPatchResult(result) ||
                        (isExecutionPatchIncrementalResult(result) && !result.hasNext);
                    if (update) {
                        if (!skipCache) {
                            var diff = cache.diff({
                                id: "ROOT_MUTATION",
                                query: _this.transform(mutation.document).asQuery,
                                variables: mutation.variables,
                                optimistic: false,
                                returnPartialData: true,
                            });
                            if (diff.complete) {
                                result = tslib.__assign(tslib.__assign({}, result), { data: diff.result });
                                if ('incremental' in result) {
                                    delete result.incremental;
                                }
                                if ('hasNext' in result) {
                                    delete result.hasNext;
                                }
                            }
                        }
                        if (isFinalResult) {
                            update(cache, result, {
                                context: mutation.context,
                                variables: mutation.variables,
                            });
                        }
                    }
                    if (!skipCache && !mutation.keepRootFields && isFinalResult) {
                        cache.modify({
                            id: 'ROOT_MUTATION',
                            fields: function (value, _a) {
                                var fieldName = _a.fieldName, DELETE = _a.DELETE;
                                return fieldName === "__typename" ? value : DELETE;
                            },
                        });
                    }
                },
                include: mutation.refetchQueries,
                optimistic: false,
                removeOptimistic: mutation.removeOptimistic,
                onQueryUpdated: mutation.onQueryUpdated || null,
            }).forEach(function (result) { return results_1.push(result); });
            if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) {
                return Promise.all(results_1).then(function () { return result; });
            }
        }
        return Promise.resolve(result);
    };
    QueryManager.prototype.markMutationOptimistic = function (optimisticResponse, mutation) {
        var _this = this;
        var data = typeof optimisticResponse === "function"
            ? optimisticResponse(mutation.variables)
            : optimisticResponse;
        return this.cache.recordOptimisticTransaction(function (cache) {
            try {
                _this.markMutationResult(tslib.__assign(tslib.__assign({}, mutation), { result: { data: data } }), cache);
            }
            catch (error) {
                __DEV__ && globals.invariant.error(error);
            }
        }, mutation.mutationId);
    };
    QueryManager.prototype.fetchQuery = function (queryId, options, networkStatus) {
        return this.fetchQueryObservable(queryId, options, networkStatus).promise;
    };
    QueryManager.prototype.getQueryStore = function () {
        var store = Object.create(null);
        this.queries.forEach(function (info, queryId) {
            store[queryId] = {
                variables: info.variables,
                networkStatus: info.networkStatus,
                networkError: info.networkError,
                graphQLErrors: info.graphQLErrors,
            };
        });
        return store;
    };
    QueryManager.prototype.resetErrors = function (queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo) {
            queryInfo.networkError = undefined;
            queryInfo.graphQLErrors = [];
        }
    };
    QueryManager.prototype.transform = function (document) {
        var transformCache = this.transformCache;
        if (!transformCache.has(document)) {
            var transformed = this.cache.transformDocument(document);
            var noConnection = utilities.removeConnectionDirectiveFromDocument(transformed);
            var clientQuery = this.localState.clientQuery(transformed);
            var serverQuery = noConnection && this.localState.serverQuery(noConnection);
            var cacheEntry_1 = {
                document: transformed,
                hasClientExports: utilities.hasClientExports(transformed),
                hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
                clientQuery: clientQuery,
                serverQuery: serverQuery,
                defaultVars: utilities.getDefaultValues(utilities.getOperationDefinition(transformed)),
                asQuery: tslib.__assign(tslib.__assign({}, transformed), { definitions: transformed.definitions.map(function (def) {
                        if (def.kind === "OperationDefinition" &&
                            def.operation !== "query") {
                            return tslib.__assign(tslib.__assign({}, def), { operation: "query" });
                        }
                        return def;
                    }) })
            };
            var add = function (doc) {
                if (doc && !transformCache.has(doc)) {
                    transformCache.set(doc, cacheEntry_1);
                }
            };
            add(document);
            add(transformed);
            add(clientQuery);
            add(serverQuery);
        }
        return transformCache.get(document);
    };
    QueryManager.prototype.getVariables = function (document, variables) {
        return tslib.__assign(tslib.__assign({}, this.transform(document).defaultVars), variables);
    };
    QueryManager.prototype.watchQuery = function (options) {
        options = tslib.__assign(tslib.__assign({}, options), { variables: this.getVariables(options.query, options.variables) });
        if (typeof options.notifyOnNetworkStatusChange === 'undefined') {
            options.notifyOnNetworkStatusChange = false;
        }
        var queryInfo = new QueryInfo(this);
        var observable = new ObservableQuery({
            queryManager: this,
            queryInfo: queryInfo,
            options: options,
        });
        this.queries.set(observable.queryId, queryInfo);
        queryInfo.init({
            document: observable.query,
            observableQuery: observable,
            variables: observable.variables,
        });
        return observable;
    };
    QueryManager.prototype.query = function (options, queryId) {
        var _this = this;
        if (queryId === void 0) { queryId = this.generateQueryId(); }
        __DEV__ ? globals.invariant(options.query, 'query option is required. You must specify your GraphQL document ' +
            'in the query option.') : globals.invariant(options.query, 17);
        __DEV__ ? globals.invariant(options.query.kind === 'Document', 'You must wrap the query string in a "gql" tag.') : globals.invariant(options.query.kind === 'Document', 18);
        __DEV__ ? globals.invariant(!options.returnPartialData, 'returnPartialData option only supported on watchQuery.') : globals.invariant(!options.returnPartialData, 19);
        __DEV__ ? globals.invariant(!options.pollInterval, 'pollInterval option only supported on watchQuery.') : globals.invariant(!options.pollInterval, 20);
        return this.fetchQuery(queryId, options).finally(function () { return _this.stopQuery(queryId); });
    };
    QueryManager.prototype.generateQueryId = function () {
        return String(this.queryIdCounter++);
    };
    QueryManager.prototype.generateRequestId = function () {
        return this.requestIdCounter++;
    };
    QueryManager.prototype.generateMutationId = function () {
        return String(this.mutationIdCounter++);
    };
    QueryManager.prototype.stopQueryInStore = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryInStoreNoBroadcast = function (queryId) {
        var queryInfo = this.queries.get(queryId);
        if (queryInfo)
            queryInfo.stop();
    };
    QueryManager.prototype.clearStore = function (options) {
        if (options === void 0) { options = {
            discardWatches: true,
        }; }
        this.cancelPendingFetches(__DEV__ ? new globals.InvariantError('Store reset while query was in flight (not completed in link chain)') : new globals.InvariantError(21));
        this.queries.forEach(function (queryInfo) {
            if (queryInfo.observableQuery) {
                queryInfo.networkStatus = exports.NetworkStatus.loading;
            }
            else {
                queryInfo.stop();
            }
        });
        if (this.mutationStore) {
            this.mutationStore = Object.create(null);
        }
        return this.cache.reset(options);
    };
    QueryManager.prototype.getObservableQueries = function (include) {
        var _this = this;
        if (include === void 0) { include = "active"; }
        var queries = new Map();
        var queryNamesAndDocs = new Map();
        var legacyQueryOptions = new Set();
        if (Array.isArray(include)) {
            include.forEach(function (desc) {
                if (typeof desc === "string") {
                    queryNamesAndDocs.set(desc, false);
                }
                else if (utilities.isDocumentNode(desc)) {
                    queryNamesAndDocs.set(_this.transform(desc).document, false);
                }
                else if (utilities.isNonNullObject(desc) && desc.query) {
                    legacyQueryOptions.add(desc);
                }
            });
        }
        this.queries.forEach(function (_a, queryId) {
            var oq = _a.observableQuery, document = _a.document;
            if (oq) {
                if (include === "all") {
                    queries.set(queryId, oq);
                    return;
                }
                var queryName = oq.queryName, fetchPolicy = oq.options.fetchPolicy;
                if (fetchPolicy === "standby" ||
                    (include === "active" && !oq.hasObservers())) {
                    return;
                }
                if (include === "active" ||
                    (queryName && queryNamesAndDocs.has(queryName)) ||
                    (document && queryNamesAndDocs.has(document))) {
                    queries.set(queryId, oq);
                    if (queryName)
                        queryNamesAndDocs.set(queryName, true);
                    if (document)
                        queryNamesAndDocs.set(document, true);
                }
            }
        });
        if (legacyQueryOptions.size) {
            legacyQueryOptions.forEach(function (options) {
                var queryId = utilities.makeUniqueId("legacyOneTimeQuery");
                var queryInfo = _this.getQuery(queryId).init({
                    document: options.query,
                    variables: options.variables,
                });
                var oq = new ObservableQuery({
                    queryManager: _this,
                    queryInfo: queryInfo,
                    options: tslib.__assign(tslib.__assign({}, options), { fetchPolicy: "network-only" }),
                });
                globals.invariant(oq.queryId === queryId);
                queryInfo.setObservableQuery(oq);
                queries.set(queryId, oq);
            });
        }
        if (__DEV__ && queryNamesAndDocs.size) {
            queryNamesAndDocs.forEach(function (included, nameOrDoc) {
                if (!included) {
                    __DEV__ && globals.invariant.warn("Unknown query ".concat(typeof nameOrDoc === "string" ? "named " : "").concat(JSON.stringify(nameOrDoc, null, 2), " requested in refetchQueries options.include array"));
                }
            });
        }
        return queries;
    };
    QueryManager.prototype.reFetchObservableQueries = function (includeStandby) {
        var _this = this;
        if (includeStandby === void 0) { includeStandby = false; }
        var observableQueryPromises = [];
        this.getObservableQueries(includeStandby ? "all" : "active").forEach(function (observableQuery, queryId) {
            var fetchPolicy = observableQuery.options.fetchPolicy;
            observableQuery.resetLastResults();
            if (includeStandby ||
                (fetchPolicy !== "standby" &&
                    fetchPolicy !== "cache-only")) {
                observableQueryPromises.push(observableQuery.refetch());
            }
            _this.getQuery(queryId).setDiff(null);
        });
        this.broadcastQueries();
        return Promise.all(observableQueryPromises);
    };
    QueryManager.prototype.setObservableQuery = function (observableQuery) {
        this.getQuery(observableQuery.queryId).setObservableQuery(observableQuery);
    };
    QueryManager.prototype.startGraphQLSubscription = function (_a) {
        var _this = this;
        var query = _a.query, fetchPolicy = _a.fetchPolicy, errorPolicy = _a.errorPolicy, variables = _a.variables, _b = _a.context, context = _b === void 0 ? {} : _b;
        query = this.transform(query).document;
        variables = this.getVariables(query, variables);
        var makeObservable = function (variables) {
            return _this.getObservableFromLink(query, context, variables).map(function (result) {
                if (fetchPolicy !== 'no-cache') {
                    if (shouldWriteResult(result, errorPolicy)) {
                        _this.cache.write({
                            query: query,
                            result: result.data,
                            dataId: 'ROOT_SUBSCRIPTION',
                            variables: variables,
                        });
                    }
                    _this.broadcastQueries();
                }
                if (utilities.graphQLResultHasError(result)) {
                    throw new errors.ApolloError({
                        graphQLErrors: result.errors,
                    });
                }
                return result;
            });
        };
        if (this.transform(query).hasClientExports) {
            var observablePromise_1 = this.localState.addExportedVariables(query, variables, context).then(makeObservable);
            return new utilities.Observable(function (observer) {
                var sub = null;
                observablePromise_1.then(function (observable) { return sub = observable.subscribe(observer); }, observer.error);
                return function () { return sub && sub.unsubscribe(); };
            });
        }
        return makeObservable(variables);
    };
    QueryManager.prototype.stopQuery = function (queryId) {
        this.stopQueryNoBroadcast(queryId);
        this.broadcastQueries();
    };
    QueryManager.prototype.stopQueryNoBroadcast = function (queryId) {
        this.stopQueryInStoreNoBroadcast(queryId);
        this.removeQuery(queryId);
    };
    QueryManager.prototype.removeQuery = function (queryId) {
        this.fetchCancelFns.delete(queryId);
        if (this.queries.has(queryId)) {
            this.getQuery(queryId).stop();
            this.queries.delete(queryId);
        }
    };
    QueryManager.prototype.broadcastQueries = function () {
        if (this.onBroadcast)
            this.onBroadcast();
        this.queries.forEach(function (info) { return info.notify(); });
    };
    QueryManager.prototype.getLocalState = function () {
        return this.localState;
    };
    QueryManager.prototype.getObservableFromLink = function (query, context, variables, deduplication) {
        var _this = this;
        var _a;
        if (deduplication === void 0) { deduplication = (_a = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a !== void 0 ? _a : this.queryDeduplication; }
        var observable;
        var serverQuery = this.transform(query).serverQuery;
        if (serverQuery) {
            var _b = this, inFlightLinkObservables_1 = _b.inFlightLinkObservables, link = _b.link;
            var operation = {
                query: serverQuery,
                variables: variables,
                operationName: utilities.getOperationName(serverQuery) || void 0,
                context: this.prepareContext(tslib.__assign(tslib.__assign({}, context), { forceFetch: !deduplication })),
            };
            context = operation.context;
            if (deduplication) {
                var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || new Map();
                inFlightLinkObservables_1.set(serverQuery, byVariables_1);
                var varJson_1 = cache.canonicalStringify(variables);
                observable = byVariables_1.get(varJson_1);
                if (!observable) {
                    var concast = new utilities.Concast([
                        core.execute(link, operation)
                    ]);
                    byVariables_1.set(varJson_1, observable = concast);
                    concast.beforeNext(function () {
                        if (byVariables_1.delete(varJson_1) &&
                            byVariables_1.size < 1) {
                            inFlightLinkObservables_1.delete(serverQuery);
                        }
                    });
                }
            }
            else {
                observable = new utilities.Concast([
                    core.execute(link, operation)
                ]);
            }
        }
        else {
            observable = new utilities.Concast([
                utilities.Observable.of({ data: {} })
            ]);
            context = this.prepareContext(context);
        }
        var clientQuery = this.transform(query).clientQuery;
        if (clientQuery) {
            observable = utilities.asyncMap(observable, function (result) {
                return _this.localState.runResolvers({
                    document: clientQuery,
                    remoteResult: result,
                    context: context,
                    variables: variables,
                });
            });
        }
        return observable;
    };
    QueryManager.prototype.getResultsFromLink = function (queryInfo, cacheWriteBehavior, options) {
        var requestId = queryInfo.lastRequestId = this.generateRequestId();
        var linkDocument = this.cache.transformForLink(this.transform(queryInfo.document).document);
        return utilities.asyncMap(this.getObservableFromLink(linkDocument, options.context, options.variables), function (result) {
            var graphQLErrors = utilities.getGraphQLErrorsFromResult(result);
            var hasErrors = graphQLErrors.length > 0;
            if (requestId >= queryInfo.lastRequestId) {
                if (hasErrors && options.errorPolicy === "none") {
                    throw queryInfo.markError(new errors.ApolloError({
                        graphQLErrors: graphQLErrors,
                    }));
                }
                queryInfo.markResult(result, linkDocument, options, cacheWriteBehavior);
                queryInfo.markReady();
            }
            var aqr = {
                data: result.data,
                loading: false,
                networkStatus: exports.NetworkStatus.ready,
            };
            if (hasErrors && options.errorPolicy !== "ignore") {
                aqr.errors = graphQLErrors;
                aqr.networkStatus = exports.NetworkStatus.error;
            }
            return aqr;
        }, function (networkError) {
            var error = errors.isApolloError(networkError)
                ? networkError
                : new errors.ApolloError({ networkError: networkError });
            if (requestId >= queryInfo.lastRequestId) {
                queryInfo.markError(error);
            }
            throw error;
        });
    };
    QueryManager.prototype.fetchQueryObservable = function (queryId, options, networkStatus) {
        var _this = this;
        if (networkStatus === void 0) { networkStatus = exports.NetworkStatus.loading; }
        var query = this.transform(options.query).document;
        var variables = this.getVariables(query, options.variables);
        var queryInfo = this.getQuery(queryId);
        var defaults = this.defaultOptions.watchQuery;
        var _a = options.fetchPolicy, fetchPolicy = _a === void 0 ? defaults && defaults.fetchPolicy || "cache-first" : _a, _b = options.errorPolicy, errorPolicy = _b === void 0 ? defaults && defaults.errorPolicy || "none" : _b, _c = options.returnPartialData, returnPartialData = _c === void 0 ? false : _c, _d = options.notifyOnNetworkStatusChange, notifyOnNetworkStatusChange = _d === void 0 ? false : _d, _e = options.context, context = _e === void 0 ? {} : _e;
        var normalized = Object.assign({}, options, {
            query: query,
            variables: variables,
            fetchPolicy: fetchPolicy,
            errorPolicy: errorPolicy,
            returnPartialData: returnPartialData,
            notifyOnNetworkStatusChange: notifyOnNetworkStatusChange,
            context: context,
        });
        var fromVariables = function (variables) {
            normalized.variables = variables;
            var concastSources = _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
            if (normalized.fetchPolicy !== "standby" &&
                concastSources.length > 0 &&
                queryInfo.observableQuery) {
                queryInfo.observableQuery["applyNextFetchPolicy"]("after-fetch", options);
            }
            return concastSources;
        };
        var cleanupCancelFn = function () { return _this.fetchCancelFns.delete(queryId); };
        this.fetchCancelFns.set(queryId, function (reason) {
            cleanupCancelFn();
            setTimeout(function () { return concast.cancel(reason); });
        });
        var concast = new utilities.Concast(this.transform(normalized.query).hasClientExports
            ? this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables)
            : fromVariables(normalized.variables));
        concast.promise.then(cleanupCancelFn, cleanupCancelFn);
        return concast;
    };
    QueryManager.prototype.refetchQueries = function (_a) {
        var _this = this;
        var updateCache = _a.updateCache, include = _a.include, _b = _a.optimistic, optimistic = _b === void 0 ? false : _b, _c = _a.removeOptimistic, removeOptimistic = _c === void 0 ? optimistic ? utilities.makeUniqueId("refetchQueries") : void 0 : _c, onQueryUpdated = _a.onQueryUpdated;
        var includedQueriesById = new Map();
        if (include) {
            this.getObservableQueries(include).forEach(function (oq, queryId) {
                includedQueriesById.set(queryId, {
                    oq: oq,
                    lastDiff: _this.getQuery(queryId).getDiff(),
                });
            });
        }
        var results = new Map;
        if (updateCache) {
            this.cache.batch({
                update: updateCache,
                optimistic: optimistic && removeOptimistic || false,
                removeOptimistic: removeOptimistic,
                onWatchUpdated: function (watch, diff, lastDiff) {
                    var oq = watch.watcher instanceof QueryInfo &&
                        watch.watcher.observableQuery;
                    if (oq) {
                        if (onQueryUpdated) {
                            includedQueriesById.delete(oq.queryId);
                            var result = onQueryUpdated(oq, diff, lastDiff);
                            if (result === true) {
                                result = oq.refetch();
                            }
                            if (result !== false) {
                                results.set(oq, result);
                            }
                            return result;
                        }
                        if (onQueryUpdated !== null) {
                            includedQueriesById.set(oq.queryId, { oq: oq, lastDiff: lastDiff, diff: diff });
                        }
                    }
                },
            });
        }
        if (includedQueriesById.size) {
            includedQueriesById.forEach(function (_a, queryId) {
                var oq = _a.oq, lastDiff = _a.lastDiff, diff = _a.diff;
                var result;
                if (onQueryUpdated) {
                    if (!diff) {
                        var info = oq["queryInfo"];
                        info.reset();
                        diff = info.getDiff();
                    }
                    result = onQueryUpdated(oq, diff, lastDiff);
                }
                if (!onQueryUpdated || result === true) {
                    result = oq.refetch();
                }
                if (result !== false) {
                    results.set(oq, result);
                }
                if (queryId.indexOf("legacyOneTimeQuery") >= 0) {
                    _this.stopQueryNoBroadcast(queryId);
                }
            });
        }
        if (removeOptimistic) {
            this.cache.removeOptimistic(removeOptimistic);
        }
        return results;
    };
    QueryManager.prototype.fetchQueryByPolicy = function (queryInfo, _a, networkStatus) {
        var _this = this;
        var query = _a.query, variables = _a.variables, fetchPolicy = _a.fetchPolicy, refetchWritePolicy = _a.refetchWritePolicy, errorPolicy = _a.errorPolicy, returnPartialData = _a.returnPartialData, context = _a.context, notifyOnNetworkStatusChange = _a.notifyOnNetworkStatusChange;
        var oldNetworkStatus = queryInfo.networkStatus;
        queryInfo.init({
            document: this.transform(query).document,
            variables: variables,
            networkStatus: networkStatus,
        });
        var readCache = function () { return queryInfo.getDiff(variables); };
        var resultsFromCache = function (diff, networkStatus) {
            if (networkStatus === void 0) { networkStatus = queryInfo.networkStatus || exports.NetworkStatus.loading; }
            var data = diff.result;
            if (__DEV__ &&
                !returnPartialData &&
                !equality.equal(data, {})) {
                logMissingFieldErrors(diff.missing);
            }
            var fromData = function (data) { return utilities.Observable.of(tslib.__assign({ data: data, loading: isNetworkRequestInFlight(networkStatus), networkStatus: networkStatus }, (diff.complete ? null : { partial: true }))); };
            if (data && _this.transform(query).hasForcedResolvers) {
                return _this.localState.runResolvers({
                    document: query,
                    remoteResult: { data: data },
                    context: context,
                    variables: variables,
                    onlyRunForcedResolvers: true,
                }).then(function (resolved) { return fromData(resolved.data || void 0); });
            }
            if (errorPolicy === 'none' &&
                networkStatus === exports.NetworkStatus.refetch &&
                Array.isArray(diff.missing)) {
                return fromData(void 0);
            }
            return fromData(data);
        };
        var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 :
            (networkStatus === exports.NetworkStatus.refetch &&
                refetchWritePolicy !== "merge") ? 1
                : 2;
        var resultsFromLink = function () { return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
            variables: variables,
            context: context,
            fetchPolicy: fetchPolicy,
            errorPolicy: errorPolicy,
        }); };
        var shouldNotify = notifyOnNetworkStatusChange &&
            typeof oldNetworkStatus === "number" &&
            oldNetworkStatus !== networkStatus &&
            isNetworkRequestInFlight(networkStatus);
        switch (fetchPolicy) {
            default:
            case "cache-first": {
                var diff = readCache();
                if (diff.complete) {
                    return [
                        resultsFromCache(diff, queryInfo.markReady()),
                    ];
                }
                if (returnPartialData || shouldNotify) {
                    return [
                        resultsFromCache(diff),
                        resultsFromLink(),
                    ];
                }
                return [
                    resultsFromLink(),
                ];
            }
            case "cache-and-network": {
                var diff = readCache();
                if (diff.complete || returnPartialData || shouldNotify) {
                    return [
                        resultsFromCache(diff),
                        resultsFromLink(),
                    ];
                }
                return [
                    resultsFromLink(),
                ];
            }
            case "cache-only":
                return [
                    resultsFromCache(readCache(), queryInfo.markReady()),
                ];
            case "network-only":
                if (shouldNotify) {
                    return [
                        resultsFromCache(readCache()),
                        resultsFromLink(),
                    ];
                }
                return [resultsFromLink()];
            case "no-cache":
                if (shouldNotify) {
                    return [
                        resultsFromCache(queryInfo.getDiff()),
                        resultsFromLink(),
                    ];
                }
                return [resultsFromLink()];
            case "standby":
                return [];
        }
    };
    QueryManager.prototype.getQuery = function (queryId) {
        if (queryId && !this.queries.has(queryId)) {
            this.queries.set(queryId, new QueryInfo(this, queryId));
        }
        return this.queries.get(queryId);
    };
    QueryManager.prototype.prepareContext = function (context) {
        if (context === void 0) { context = {}; }
        var newContext = this.localState.prepareContext(context);
        return tslib.__assign(tslib.__assign({}, newContext), { clientAwareness: this.clientAwareness });
    };
    return QueryManager;
}());

var hasSuggestedDevtools = false;
var ApolloClient = (function () {
    function ApolloClient(options) {
        var _this = this;
        this.resetStoreCallbacks = [];
        this.clearStoreCallbacks = [];
        var uri = options.uri, credentials = options.credentials, headers = options.headers, cache = options.cache, _a = options.ssrMode, ssrMode = _a === void 0 ? false : _a, _b = options.ssrForceFetchDelay, ssrForceFetchDelay = _b === void 0 ? 0 : _b, _c = options.connectToDevTools, connectToDevTools = _c === void 0 ? typeof window === 'object' &&
            !window.__APOLLO_CLIENT__ &&
            __DEV__ : _c, _d = options.queryDeduplication, queryDeduplication = _d === void 0 ? true : _d, defaultOptions = options.defaultOptions, _e = options.assumeImmutableResults, assumeImmutableResults = _e === void 0 ? false : _e, resolvers = options.resolvers, typeDefs = options.typeDefs, fragmentMatcher = options.fragmentMatcher, clientAwarenessName = options.name, clientAwarenessVersion = options.version;
        var link = options.link;
        if (!link) {
            link = uri
                ? new http.HttpLink({ uri: uri, credentials: credentials, headers: headers })
                : core.ApolloLink.empty();
        }
        if (!cache) {
            throw __DEV__ ? new globals.InvariantError("To initialize Apollo Client, you must specify a 'cache' property " +
                "in the options object. \n" +
                "For more information, please visit: https://go.apollo.dev/c/docs") : new globals.InvariantError(9);
        }
        this.link = link;
        this.cache = cache;
        this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
        this.queryDeduplication = queryDeduplication;
        this.defaultOptions = defaultOptions || Object.create(null);
        this.typeDefs = typeDefs;
        if (ssrForceFetchDelay) {
            setTimeout(function () { return (_this.disableNetworkFetches = false); }, ssrForceFetchDelay);
        }
        this.watchQuery = this.watchQuery.bind(this);
        this.query = this.query.bind(this);
        this.mutate = this.mutate.bind(this);
        this.resetStore = this.resetStore.bind(this);
        this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
        if (connectToDevTools && typeof window === 'object') {
            window.__APOLLO_CLIENT__ = this;
        }
        if (!hasSuggestedDevtools && connectToDevTools && __DEV__) {
            hasSuggestedDevtools = true;
            if (typeof window !== 'undefined' &&
                window.document &&
                window.top === window.self &&
                !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
                var nav = window.navigator;
                var ua = nav && nav.userAgent;
                var url = void 0;
                if (typeof ua === "string") {
                    if (ua.indexOf("Chrome/") > -1) {
                        url = "https://chrome.google.com/webstore/detail/" +
                            "apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm";
                    }
                    else if (ua.indexOf("Firefox/") > -1) {
                        url = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/";
                    }
                }
                if (url) {
                    __DEV__ && globals.invariant.log("Download the Apollo DevTools for a better development " +
                        "experience: " + url);
                }
            }
        }
        this.version = version;
        this.localState = new LocalState({
            cache: cache,
            client: this,
            resolvers: resolvers,
            fragmentMatcher: fragmentMatcher,
        });
        this.queryManager = new QueryManager({
            cache: this.cache,
            link: this.link,
            defaultOptions: this.defaultOptions,
            queryDeduplication: queryDeduplication,
            ssrMode: ssrMode,
            clientAwareness: {
                name: clientAwarenessName,
                version: clientAwarenessVersion,
            },
            localState: this.localState,
            assumeImmutableResults: assumeImmutableResults,
            onBroadcast: connectToDevTools ? function () {
                if (_this.devToolsHookCb) {
                    _this.devToolsHookCb({
                        action: {},
                        state: {
                            queries: _this.queryManager.getQueryStore(),
                            mutations: _this.queryManager.mutationStore || {},
                        },
                        dataWithOptimisticResults: _this.cache.extract(true),
                    });
                }
            } : void 0,
        });
    }
    ApolloClient.prototype.stop = function () {
        this.queryManager.stop();
    };
    ApolloClient.prototype.watchQuery = function (options) {
        if (this.defaultOptions.watchQuery) {
            options = utilities.mergeOptions(this.defaultOptions.watchQuery, options);
        }
        if (this.disableNetworkFetches &&
            (options.fetchPolicy === 'network-only' ||
                options.fetchPolicy === 'cache-and-network')) {
            options = tslib.__assign(tslib.__assign({}, options), { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.watchQuery(options);
    };
    ApolloClient.prototype.query = function (options) {
        if (this.defaultOptions.query) {
            options = utilities.mergeOptions(this.defaultOptions.query, options);
        }
        __DEV__ ? globals.invariant(options.fetchPolicy !== 'cache-and-network', 'The cache-and-network fetchPolicy does not work with client.query, because ' +
            'client.query can only return a single result. Please use client.watchQuery ' +
            'to receive multiple results from the cache and the network, or consider ' +
            'using a different fetchPolicy, such as cache-first or network-only.') : globals.invariant(options.fetchPolicy !== 'cache-and-network', 10);
        if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') {
            options = tslib.__assign(tslib.__assign({}, options), { fetchPolicy: 'cache-first' });
        }
        return this.queryManager.query(options);
    };
    ApolloClient.prototype.mutate = function (options) {
        if (this.defaultOptions.mutate) {
            options = utilities.mergeOptions(this.defaultOptions.mutate, options);
        }
        return this.queryManager.mutate(options);
    };
    ApolloClient.prototype.subscribe = function (options) {
        return this.queryManager.startGraphQLSubscription(options);
    };
    ApolloClient.prototype.readQuery = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readQuery(options, optimistic);
    };
    ApolloClient.prototype.readFragment = function (options, optimistic) {
        if (optimistic === void 0) { optimistic = false; }
        return this.cache.readFragment(options, optimistic);
    };
    ApolloClient.prototype.writeQuery = function (options) {
        var ref = this.cache.writeQuery(options);
        if (options.broadcast !== false) {
            this.queryManager.broadcastQueries();
        }
        return ref;
    };
    ApolloClient.prototype.writeFragment = function (options) {
        var ref = this.cache.writeFragment(options);
        if (options.broadcast !== false) {
            this.queryManager.broadcastQueries();
        }
        return ref;
    };
    ApolloClient.prototype.__actionHookForDevTools = function (cb) {
        this.devToolsHookCb = cb;
    };
    ApolloClient.prototype.__requestRaw = function (payload) {
        return core.execute(this.link, payload);
    };
    ApolloClient.prototype.resetStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.queryManager.clearStore({
            discardWatches: false,
        }); })
            .then(function () { return Promise.all(_this.resetStoreCallbacks.map(function (fn) { return fn(); })); })
            .then(function () { return _this.reFetchObservableQueries(); });
    };
    ApolloClient.prototype.clearStore = function () {
        var _this = this;
        return Promise.resolve()
            .then(function () { return _this.queryManager.clearStore({
            discardWatches: true,
        }); })
            .then(function () { return Promise.all(_this.clearStoreCallbacks.map(function (fn) { return fn(); })); });
    };
    ApolloClient.prototype.onResetStore = function (cb) {
        var _this = this;
        this.resetStoreCallbacks.push(cb);
        return function () {
            _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.onClearStore = function (cb) {
        var _this = this;
        this.clearStoreCallbacks.push(cb);
        return function () {
            _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function (c) { return c !== cb; });
        };
    };
    ApolloClient.prototype.reFetchObservableQueries = function (includeStandby) {
        return this.queryManager.reFetchObservableQueries(includeStandby);
    };
    ApolloClient.prototype.refetchQueries = function (options) {
        var map = this.queryManager.refetchQueries(options);
        var queries = [];
        var results = [];
        map.forEach(function (result, obsQuery) {
            queries.push(obsQuery);
            results.push(result);
        });
        var result = Promise.all(results);
        result.queries = queries;
        result.results = results;
        result.catch(function (error) {
            __DEV__ && globals.invariant.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(error));
        });
        return result;
    };
    ApolloClient.prototype.getObservableQueries = function (include) {
        if (include === void 0) { include = "active"; }
        return this.queryManager.getObservableQueries(include);
    };
    ApolloClient.prototype.extract = function (optimistic) {
        return this.cache.extract(optimistic);
    };
    ApolloClient.prototype.restore = function (serializedState) {
        return this.cache.restore(serializedState);
    };
    ApolloClient.prototype.addResolvers = function (resolvers) {
        this.localState.addResolvers(resolvers);
    };
    ApolloClient.prototype.setResolvers = function (resolvers) {
        this.localState.setResolvers(resolvers);
    };
    ApolloClient.prototype.getResolvers = function () {
        return this.localState.getResolvers();
    };
    ApolloClient.prototype.setLocalStateFragmentMatcher = function (fragmentMatcher) {
        this.localState.setFragmentMatcher(fragmentMatcher);
    };
    ApolloClient.prototype.setLink = function (newLink) {
        this.link = this.queryManager.link = newLink;
    };
    return ApolloClient;
}());

tsInvariant.setVerbosity(globals.DEV ? "log" : "silent");

exports.ApolloCache = cache.ApolloCache;
exports.Cache = cache.Cache;
exports.InMemoryCache = cache.InMemoryCache;
exports.MissingFieldError = cache.MissingFieldError;
exports.defaultDataIdFromObject = cache.defaultDataIdFromObject;
exports.makeVar = cache.makeVar;
exports.Observable = utilities.Observable;
exports.isReference = utilities.isReference;
exports.makeReference = utilities.makeReference;
exports.mergeOptions = utilities.mergeOptions;
exports.ApolloError = errors.ApolloError;
exports.isApolloError = errors.isApolloError;
exports.fromError = utils.fromError;
exports.fromPromise = utils.fromPromise;
exports.throwServerError = utils.throwServerError;
exports.toPromise = utils.toPromise;
exports.setLogVerbosity = tsInvariant.setVerbosity;
exports.disableExperimentalFragmentVariables = graphqlTag.disableExperimentalFragmentVariables;
exports.disableFragmentWarnings = graphqlTag.disableFragmentWarnings;
exports.enableExperimentalFragmentVariables = graphqlTag.enableExperimentalFragmentVariables;
exports.gql = graphqlTag.gql;
exports.resetCaches = graphqlTag.resetCaches;
exports.ApolloClient = ApolloClient;
exports.ObservableQuery = ObservableQuery;
for (var k in core) {
    if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = core[k];
}
for (var k in http) {
    if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = http[k];
}
//# sourceMappingURL=core.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/errors/errors.cjs":
/*!*******************************************************!*\
  !*** ./node_modules/@apollo/client/errors/errors.cjs ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.js");
__webpack_require__(/*! ../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var utilities = __webpack_require__(/*! ../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");

function isApolloError(err) {
    return err.hasOwnProperty('graphQLErrors');
}
var generateErrorMessage = function (err) {
    var message = '';
    if (utilities.isNonEmptyArray(err.graphQLErrors) || utilities.isNonEmptyArray(err.clientErrors)) {
        var errors = (err.graphQLErrors || [])
            .concat(err.clientErrors || []);
        errors.forEach(function (error) {
            var errorMessage = error
                ? error.message
                : 'Error message not found.';
            message += "".concat(errorMessage, "\n");
        });
    }
    if (err.networkError) {
        message += "".concat(err.networkError.message, "\n");
    }
    message = message.replace(/\n$/, '');
    return message;
};
var ApolloError = (function (_super) {
    tslib.__extends(ApolloError, _super);
    function ApolloError(_a) {
        var graphQLErrors = _a.graphQLErrors, clientErrors = _a.clientErrors, networkError = _a.networkError, errorMessage = _a.errorMessage, extraInfo = _a.extraInfo;
        var _this = _super.call(this, errorMessage) || this;
        _this.name = 'ApolloError';
        _this.graphQLErrors = graphQLErrors || [];
        _this.clientErrors = clientErrors || [];
        _this.networkError = networkError || null;
        _this.message = errorMessage || generateErrorMessage(_this);
        _this.extraInfo = extraInfo;
        _this.__proto__ = ApolloError.prototype;
        return _this;
    }
    return ApolloError;
}(Error));

exports.ApolloError = ApolloError;
exports.isApolloError = isApolloError;
//# sourceMappingURL=errors.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/core/core.cjs":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/core.cjs ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var tslib = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.js");
var utilities = __webpack_require__(/*! ../../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
var utils = __webpack_require__(/*! ../utils */ "./node_modules/@apollo/client/link/utils/utils.cjs");

function passthrough(op, forward) {
    return (forward ? forward(op) : utilities.Observable.of());
}
function toLink(handler) {
    return typeof handler === 'function' ? new ApolloLink(handler) : handler;
}
function isTerminating(link) {
    return link.request.length <= 1;
}
var LinkError = (function (_super) {
    tslib.__extends(LinkError, _super);
    function LinkError(message, link) {
        var _this = _super.call(this, message) || this;
        _this.link = link;
        return _this;
    }
    return LinkError;
}(Error));
var ApolloLink = (function () {
    function ApolloLink(request) {
        if (request)
            this.request = request;
    }
    ApolloLink.empty = function () {
        return new ApolloLink(function () { return utilities.Observable.of(); });
    };
    ApolloLink.from = function (links) {
        if (links.length === 0)
            return ApolloLink.empty();
        return links.map(toLink).reduce(function (x, y) { return x.concat(y); });
    };
    ApolloLink.split = function (test, left, right) {
        var leftLink = toLink(left);
        var rightLink = toLink(right || new ApolloLink(passthrough));
        if (isTerminating(leftLink) && isTerminating(rightLink)) {
            return new ApolloLink(function (operation) {
                return test(operation)
                    ? leftLink.request(operation) || utilities.Observable.of()
                    : rightLink.request(operation) || utilities.Observable.of();
            });
        }
        else {
            return new ApolloLink(function (operation, forward) {
                return test(operation)
                    ? leftLink.request(operation, forward) || utilities.Observable.of()
                    : rightLink.request(operation, forward) || utilities.Observable.of();
            });
        }
    };
    ApolloLink.execute = function (link, operation) {
        return (link.request(utils.createOperation(operation.context, utils.transformOperation(utils.validateOperation(operation)))) || utilities.Observable.of());
    };
    ApolloLink.concat = function (first, second) {
        var firstLink = toLink(first);
        if (isTerminating(firstLink)) {
            __DEV__ && globals.invariant.warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
            return firstLink;
        }
        var nextLink = toLink(second);
        if (isTerminating(nextLink)) {
            return new ApolloLink(function (operation) {
                return firstLink.request(operation, function (op) { return nextLink.request(op) || utilities.Observable.of(); }) || utilities.Observable.of();
            });
        }
        else {
            return new ApolloLink(function (operation, forward) {
                return (firstLink.request(operation, function (op) {
                    return nextLink.request(op, forward) || utilities.Observable.of();
                }) || utilities.Observable.of());
            });
        }
    };
    ApolloLink.prototype.split = function (test, left, right) {
        return this.concat(ApolloLink.split(test, left, right || new ApolloLink(passthrough)));
    };
    ApolloLink.prototype.concat = function (next) {
        return ApolloLink.concat(this, next);
    };
    ApolloLink.prototype.request = function (operation, forward) {
        throw __DEV__ ? new globals.InvariantError('request is not implemented') : new globals.InvariantError(22);
    };
    ApolloLink.prototype.onError = function (error, observer) {
        if (observer && observer.error) {
            observer.error(error);
            return false;
        }
        throw error;
    };
    ApolloLink.prototype.setOnError = function (fn) {
        this.onError = fn;
        return this;
    };
    return ApolloLink;
}());

var empty = ApolloLink.empty;

var from = ApolloLink.from;

var split = ApolloLink.split;

var concat = ApolloLink.concat;

var execute = ApolloLink.execute;

exports.ApolloLink = ApolloLink;
exports.concat = concat;
exports.empty = empty;
exports.execute = execute;
exports.from = from;
exports.split = split;
//# sourceMappingURL=core.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/error/error.cjs":
/*!**********************************************************!*\
  !*** ./node_modules/@apollo/client/link/error/error.cjs ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.js");
var utilities = __webpack_require__(/*! ../../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
var core = __webpack_require__(/*! ../core */ "./node_modules/@apollo/client/link/core/core.cjs");

function onError(errorHandler) {
    return new core.ApolloLink(function (operation, forward) {
        return new utilities.Observable(function (observer) {
            var sub;
            var retriedSub;
            var retriedResult;
            try {
                sub = forward(operation).subscribe({
                    next: function (result) {
                        if (result.errors) {
                            retriedResult = errorHandler({
                                graphQLErrors: result.errors,
                                response: result,
                                operation: operation,
                                forward: forward,
                            });
                            if (retriedResult) {
                                retriedSub = retriedResult.subscribe({
                                    next: observer.next.bind(observer),
                                    error: observer.error.bind(observer),
                                    complete: observer.complete.bind(observer),
                                });
                                return;
                            }
                        }
                        observer.next(result);
                    },
                    error: function (networkError) {
                        retriedResult = errorHandler({
                            operation: operation,
                            networkError: networkError,
                            graphQLErrors: networkError &&
                                networkError.result &&
                                networkError.result.errors,
                            forward: forward,
                        });
                        if (retriedResult) {
                            retriedSub = retriedResult.subscribe({
                                next: observer.next.bind(observer),
                                error: observer.error.bind(observer),
                                complete: observer.complete.bind(observer),
                            });
                            return;
                        }
                        observer.error(networkError);
                    },
                    complete: function () {
                        if (!retriedResult) {
                            observer.complete.bind(observer)();
                        }
                    },
                });
            }
            catch (e) {
                errorHandler({ networkError: e, operation: operation, forward: forward });
                observer.error(e);
            }
            return function () {
                if (sub)
                    sub.unsubscribe();
                if (retriedSub)
                    sub.unsubscribe();
            };
        });
    });
}
var ErrorLink = (function (_super) {
    tslib.__extends(ErrorLink, _super);
    function ErrorLink(errorHandler) {
        var _this = _super.call(this) || this;
        _this.link = onError(errorHandler);
        return _this;
    }
    ErrorLink.prototype.request = function (operation, forward) {
        return this.link.request(operation, forward);
    };
    return ErrorLink;
}(core.ApolloLink));

exports.ErrorLink = ErrorLink;
exports.onError = onError;
//# sourceMappingURL=error.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/http/http.cjs":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/http.cjs ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var tslib = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.js");
var utilities = __webpack_require__(/*! ../../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
var utils = __webpack_require__(/*! ../utils */ "./node_modules/@apollo/client/link/utils/utils.cjs");
var graphql = __webpack_require__(/*! graphql */ "graphql");
var core = __webpack_require__(/*! ../core */ "./node_modules/@apollo/client/link/core/core.cjs");

typeof WeakMap === 'function' &&
    globals.maybe(function () { return navigator.product; }) !== 'ReactNative';
var canUseSymbol = typeof Symbol === 'function' &&
    typeof Symbol.for === 'function';
var canUseAsyncIteratorSymbol = canUseSymbol && Symbol.asyncIterator;
typeof globals.maybe(function () { return window.document.createElement; }) === "function";
globals.maybe(function () { return navigator.userAgent.indexOf("jsdom") >= 0; }) || false;

function isNodeResponse(value) {
    return !!value.body;
}
function isReadableStream(value) {
    return !!value.getReader;
}
function isAsyncIterableIterator(value) {
    return !!(canUseAsyncIteratorSymbol &&
        value[Symbol.asyncIterator]);
}
function isStreamableBlob(value) {
    return !!value.stream;
}
function isBlob(value) {
    return !!value.arrayBuffer;
}
function isNodeReadableStream(value) {
    return !!value.pipe;
}

function asyncIterator(source) {
    var _a;
    var iterator = source[Symbol.asyncIterator]();
    return _a = {
            next: function () {
                return iterator.next();
            }
        },
        _a[Symbol.asyncIterator] = function () {
            return this;
        },
        _a;
}

function nodeStreamIterator(stream) {
    var cleanup = null;
    var error = null;
    var done = false;
    var data = [];
    var waiting = [];
    function onData(chunk) {
        if (error)
            return;
        if (waiting.length) {
            var shiftedArr = waiting.shift();
            if (Array.isArray(shiftedArr) && shiftedArr[0]) {
                return shiftedArr[0]({ value: chunk, done: false });
            }
        }
        data.push(chunk);
    }
    function onError(err) {
        error = err;
        var all = waiting.slice();
        all.forEach(function (pair) {
            pair[1](err);
        });
        !cleanup || cleanup();
    }
    function onEnd() {
        done = true;
        var all = waiting.slice();
        all.forEach(function (pair) {
            pair[0]({ value: undefined, done: true });
        });
        !cleanup || cleanup();
    }
    cleanup = function () {
        cleanup = null;
        stream.removeListener("data", onData);
        stream.removeListener("error", onError);
        stream.removeListener("end", onEnd);
        stream.removeListener("finish", onEnd);
        stream.removeListener("close", onEnd);
    };
    stream.on("data", onData);
    stream.on("error", onError);
    stream.on("end", onEnd);
    stream.on("finish", onEnd);
    stream.on("close", onEnd);
    function getNext() {
        return new Promise(function (resolve, reject) {
            if (error)
                return reject(error);
            if (data.length)
                return resolve({ value: data.shift(), done: false });
            if (done)
                return resolve({ value: undefined, done: true });
            waiting.push([resolve, reject]);
        });
    }
    var iterator = {
        next: function () {
            return getNext();
        },
    };
    if (utilities.canUseAsyncIteratorSymbol) {
        iterator[Symbol.asyncIterator] = function () {
            return this;
        };
    }
    return iterator;
}

function promiseIterator(promise) {
    var resolved = false;
    var iterator = {
        next: function () {
            if (resolved)
                return Promise.resolve({
                    value: undefined,
                    done: true,
                });
            resolved = true;
            return new Promise(function (resolve, reject) {
                promise
                    .then(function (value) {
                    resolve({ value: value, done: false });
                })
                    .catch(reject);
            });
        },
    };
    if (utilities.canUseAsyncIteratorSymbol) {
        iterator[Symbol.asyncIterator] = function () {
            return this;
        };
    }
    return iterator;
}

function readerIterator(reader) {
    var iterator = {
        next: function () {
            return reader.read();
        },
    };
    if (utilities.canUseAsyncIteratorSymbol) {
        iterator[Symbol.asyncIterator] = function () {
            return this;
        };
    }
    return iterator;
}

function responseIterator(response) {
    var body = response;
    if (isNodeResponse(response))
        body = response.body;
    if (isAsyncIterableIterator(body))
        return asyncIterator(body);
    if (isReadableStream(body))
        return readerIterator(body.getReader());
    if (isStreamableBlob(body)) {
        return readerIterator(body.stream().getReader());
    }
    if (isBlob(body))
        return promiseIterator(body.arrayBuffer());
    if (isNodeReadableStream(body))
        return nodeStreamIterator(body);
    throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function readMultipartBody(response, observer) {
    var _a, _b, _c;
    return tslib.__awaiter(this, void 0, void 0, function () {
        var decoder, contentType, delimiter, boundaryVal, boundary, buffer, iterator, running, _d, value, done, chunk, bi, message, i, headers, contentType_1, body, result;
        var _e;
        return tslib.__generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    if (TextDecoder === undefined) {
                        throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
                    }
                    decoder = new TextDecoder("utf-8");
                    contentType = (_a = response.headers) === null || _a === void 0 ? void 0 : _a.get('content-type');
                    delimiter = "boundary=";
                    boundaryVal = (contentType === null || contentType === void 0 ? void 0 : contentType.includes(delimiter))
                        ? contentType === null || contentType === void 0 ? void 0 : contentType.substring((contentType === null || contentType === void 0 ? void 0 : contentType.indexOf(delimiter)) + delimiter.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim()
                        : "-";
                    boundary = "--".concat(boundaryVal);
                    buffer = "";
                    iterator = responseIterator(response);
                    running = true;
                    _f.label = 1;
                case 1:
                    if (!running) return [3, 3];
                    return [4, iterator.next()];
                case 2:
                    _d = _f.sent(), value = _d.value, done = _d.done;
                    chunk = typeof value === "string" ? value : decoder.decode(value);
                    running = !done;
                    buffer += chunk;
                    bi = buffer.indexOf(boundary);
                    while (bi > -1) {
                        message = void 0;
                        _e = [
                            buffer.slice(0, bi),
                            buffer.slice(bi + boundary.length),
                        ], message = _e[0], buffer = _e[1];
                        if (message.trim()) {
                            i = message.indexOf("\r\n\r\n");
                            headers = parseHeaders(message.slice(0, i));
                            contentType_1 = headers["content-type"];
                            if (contentType_1 &&
                                contentType_1.toLowerCase().indexOf("application/json") === -1) {
                                throw new Error("Unsupported patch content type: application/json is required.");
                            }
                            body = message.slice(i);
                            try {
                                result = parseJsonBody(response, body.replace("\r\n", ""));
                                if (Object.keys(result).length > 1 ||
                                    "data" in result ||
                                    "incremental" in result ||
                                    "errors" in result) {
                                    (_b = observer.next) === null || _b === void 0 ? void 0 : _b.call(observer, result);
                                }
                            }
                            catch (err) {
                                handleError(err, observer);
                            }
                        }
                        bi = buffer.indexOf(boundary);
                    }
                    return [3, 1];
                case 3:
                    (_c = observer.complete) === null || _c === void 0 ? void 0 : _c.call(observer);
                    return [2];
            }
        });
    });
}
function parseHeaders(headerText) {
    var headersInit = {};
    headerText.split("\n").forEach(function (line) {
        var i = line.indexOf(":");
        if (i > -1) {
            var name_1 = line.slice(0, i).trim().toLowerCase();
            var value = line.slice(i + 1).trim();
            headersInit[name_1] = value;
        }
    });
    return headersInit;
}
function parseJsonBody(response, bodyText) {
    if (response.status >= 300) {
        var getResult = function () {
            try {
                return JSON.parse(bodyText);
            }
            catch (err) {
                return bodyText;
            }
        };
        utils.throwServerError(response, getResult(), "Response not successful: Received status code ".concat(response.status));
    }
    try {
        return JSON.parse(bodyText);
    }
    catch (err) {
        var parseError = err;
        parseError.name = "ServerParseError";
        parseError.response = response;
        parseError.statusCode = response.status;
        parseError.bodyText = bodyText;
        throw parseError;
    }
}
function handleError(err, observer) {
    var _a, _b;
    if (err.name === "AbortError")
        return;
    if (err.result && err.result.errors && err.result.data) {
        (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, err.result);
    }
    (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, err);
}
function readJsonBody(response, operation, observer) {
    parseAndCheckHttpResponse(operation)(response)
        .then(function (result) {
        var _a, _b;
        (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, result);
        (_b = observer.complete) === null || _b === void 0 ? void 0 : _b.call(observer);
    })
        .catch(function (err) { return handleError(err, observer); });
}
function parseAndCheckHttpResponse(operations) {
    return function (response) {
        return response
            .text()
            .then(function (bodyText) { return parseJsonBody(response, bodyText); })
            .then(function (result) {
            if (response.status >= 300) {
                utils.throwServerError(response, result, "Response not successful: Received status code ".concat(response.status));
            }
            if (!Array.isArray(result) &&
                !hasOwnProperty.call(result, "data") &&
                !hasOwnProperty.call(result, "errors")) {
                utils.throwServerError(response, result, "Server response was missing for query '".concat(Array.isArray(operations)
                    ? operations.map(function (op) { return op.operationName; })
                    : operations.operationName, "'."));
            }
            return result;
        });
    };
}

var serializeFetchParameter = function (p, label) {
    var serialized;
    try {
        serialized = JSON.stringify(p);
    }
    catch (e) {
        var parseError = __DEV__ ? new globals.InvariantError("Network request failed. ".concat(label, " is not serializable: ").concat(e.message)) : new globals.InvariantError(24);
        parseError.parseError = e;
        throw parseError;
    }
    return serialized;
};

var defaultHttpOptions = {
    includeQuery: true,
    includeExtensions: false,
    preserveHeaderCase: false,
};
var defaultHeaders = {
    accept: '*/*',
    'content-type': 'application/json',
};
var defaultOptions = {
    method: 'POST',
};
var fallbackHttpConfig = {
    http: defaultHttpOptions,
    headers: defaultHeaders,
    options: defaultOptions,
};
var defaultPrinter = function (ast, printer) { return printer(ast); };
function selectHttpOptionsAndBody(operation, fallbackConfig) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
    }
    configs.unshift(fallbackConfig);
    return selectHttpOptionsAndBodyInternal.apply(void 0, tslib.__spreadArray([operation,
        defaultPrinter], configs, false));
}
function selectHttpOptionsAndBodyInternal(operation, printer) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
    }
    var options = {};
    var http = {};
    configs.forEach(function (config) {
        options = tslib.__assign(tslib.__assign(tslib.__assign({}, options), config.options), { headers: tslib.__assign(tslib.__assign({}, options.headers), config.headers) });
        if (config.credentials) {
            options.credentials = config.credentials;
        }
        http = tslib.__assign(tslib.__assign({}, http), config.http);
    });
    if (options.headers) {
        options.headers = removeDuplicateHeaders(options.headers, http.preserveHeaderCase);
    }
    var operationName = operation.operationName, extensions = operation.extensions, variables = operation.variables, query = operation.query;
    var body = { operationName: operationName, variables: variables };
    if (http.includeExtensions)
        body.extensions = extensions;
    if (http.includeQuery)
        body.query = printer(query, graphql.print);
    return {
        options: options,
        body: body,
    };
}
function removeDuplicateHeaders(headers, preserveHeaderCase) {
    if (!preserveHeaderCase) {
        var normalizedHeaders_1 = Object.create(null);
        Object.keys(Object(headers)).forEach(function (name) {
            normalizedHeaders_1[name.toLowerCase()] = headers[name];
        });
        return normalizedHeaders_1;
    }
    var headerData = Object.create(null);
    Object.keys(Object(headers)).forEach(function (name) {
        headerData[name.toLowerCase()] = { originalName: name, value: headers[name] };
    });
    var normalizedHeaders = Object.create(null);
    Object.keys(headerData).forEach(function (name) {
        normalizedHeaders[headerData[name].originalName] = headerData[name].value;
    });
    return normalizedHeaders;
}

var checkFetcher = function (fetcher) {
    if (!fetcher && typeof fetch === 'undefined') {
        throw __DEV__ ? new globals.InvariantError("\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    ") : new globals.InvariantError(23);
    }
};

var createSignalIfSupported = function () {
    if (typeof AbortController === 'undefined')
        return { controller: false, signal: false };
    var controller = new AbortController();
    var signal = controller.signal;
    return { controller: controller, signal: signal };
};

var selectURI = function (operation, fallbackURI) {
    var context = operation.getContext();
    var contextURI = context.uri;
    if (contextURI) {
        return contextURI;
    }
    else if (typeof fallbackURI === 'function') {
        return fallbackURI(operation);
    }
    else {
        return fallbackURI || '/graphql';
    }
};

function rewriteURIForGET(chosenURI, body) {
    var queryParams = [];
    var addQueryParam = function (key, value) {
        queryParams.push("".concat(key, "=").concat(encodeURIComponent(value)));
    };
    if ('query' in body) {
        addQueryParam('query', body.query);
    }
    if (body.operationName) {
        addQueryParam('operationName', body.operationName);
    }
    if (body.variables) {
        var serializedVariables = void 0;
        try {
            serializedVariables = serializeFetchParameter(body.variables, 'Variables map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('variables', serializedVariables);
    }
    if (body.extensions) {
        var serializedExtensions = void 0;
        try {
            serializedExtensions = serializeFetchParameter(body.extensions, 'Extensions map');
        }
        catch (parseError) {
            return { parseError: parseError };
        }
        addQueryParam('extensions', serializedExtensions);
    }
    var fragment = '', preFragment = chosenURI;
    var fragmentStart = chosenURI.indexOf('#');
    if (fragmentStart !== -1) {
        fragment = chosenURI.substr(fragmentStart);
        preFragment = chosenURI.substr(0, fragmentStart);
    }
    var queryParamsPrefix = preFragment.indexOf('?') === -1 ? '?' : '&';
    var newURI = preFragment + queryParamsPrefix + queryParams.join('&') + fragment;
    return { newURI: newURI };
}

var backupFetch = utilities.maybe(function () { return fetch; });
var createHttpLink = function (linkOptions) {
    if (linkOptions === void 0) { linkOptions = {}; }
    var _a = linkOptions.uri, uri = _a === void 0 ? '/graphql' : _a, preferredFetch = linkOptions.fetch, _b = linkOptions.print, print = _b === void 0 ? defaultPrinter : _b, includeExtensions = linkOptions.includeExtensions, preserveHeaderCase = linkOptions.preserveHeaderCase, useGETForQueries = linkOptions.useGETForQueries, _c = linkOptions.includeUnusedVariables, includeUnusedVariables = _c === void 0 ? false : _c, requestOptions = tslib.__rest(linkOptions, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
    if (__DEV__) {
        checkFetcher(preferredFetch || backupFetch);
    }
    var linkConfig = {
        http: { includeExtensions: includeExtensions, preserveHeaderCase: preserveHeaderCase },
        options: requestOptions.fetchOptions,
        credentials: requestOptions.credentials,
        headers: requestOptions.headers,
    };
    return new core.ApolloLink(function (operation) {
        var chosenURI = selectURI(operation, uri);
        var context = operation.getContext();
        var clientAwarenessHeaders = {};
        if (context.clientAwareness) {
            var _a = context.clientAwareness, name_1 = _a.name, version = _a.version;
            if (name_1) {
                clientAwarenessHeaders['apollographql-client-name'] = name_1;
            }
            if (version) {
                clientAwarenessHeaders['apollographql-client-version'] = version;
            }
        }
        var contextHeaders = tslib.__assign(tslib.__assign({}, clientAwarenessHeaders), context.headers);
        var contextConfig = {
            http: context.http,
            options: context.fetchOptions,
            credentials: context.credentials,
            headers: contextHeaders,
        };
        var _b = selectHttpOptionsAndBodyInternal(operation, print, fallbackHttpConfig, linkConfig, contextConfig), options = _b.options, body = _b.body;
        if (body.variables && !includeUnusedVariables) {
            var unusedNames_1 = new Set(Object.keys(body.variables));
            graphql.visit(operation.query, {
                Variable: function (node, _key, parent) {
                    if (parent && parent.kind !== 'VariableDefinition') {
                        unusedNames_1.delete(node.name.value);
                    }
                },
            });
            if (unusedNames_1.size) {
                body.variables = tslib.__assign({}, body.variables);
                unusedNames_1.forEach(function (name) {
                    delete body.variables[name];
                });
            }
        }
        var controller;
        if (!options.signal) {
            var _c = createSignalIfSupported(), _controller = _c.controller, signal = _c.signal;
            controller = _controller;
            if (controller)
                options.signal = signal;
        }
        var definitionIsMutation = function (d) {
            return d.kind === 'OperationDefinition' && d.operation === 'mutation';
        };
        if (useGETForQueries &&
            !operation.query.definitions.some(definitionIsMutation)) {
            options.method = 'GET';
        }
        if (utilities.hasDirectives(['defer'], operation.query)) {
            options.headers = options.headers || {};
            options.headers.accept = "multipart/mixed; deferSpec=20220824, application/json";
        }
        if (options.method === 'GET') {
            var _d = rewriteURIForGET(chosenURI, body), newURI = _d.newURI, parseError = _d.parseError;
            if (parseError) {
                return utils.fromError(parseError);
            }
            chosenURI = newURI;
        }
        else {
            try {
                options.body = serializeFetchParameter(body, 'Payload');
            }
            catch (parseError) {
                return utils.fromError(parseError);
            }
        }
        return new utilities.Observable(function (observer) {
            var currentFetch = preferredFetch || utilities.maybe(function () { return fetch; }) || backupFetch;
            currentFetch(chosenURI, options)
                .then(function (response) {
                var _a;
                operation.setContext({ response: response });
                var ctype = (_a = response.headers) === null || _a === void 0 ? void 0 : _a.get('content-type');
                if (ctype !== null && /^multipart\/mixed/i.test(ctype)) {
                    return readMultipartBody(response, observer);
                }
                else {
                    return readJsonBody(response, operation, observer);
                }
            })
                .catch(function (err) { return handleError(err, observer); });
            return function () {
                if (controller)
                    controller.abort();
            };
        });
    });
};

var HttpLink = (function (_super) {
    tslib.__extends(HttpLink, _super);
    function HttpLink(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, createHttpLink(options).request) || this;
        _this.options = options;
        return _this;
    }
    return HttpLink;
}(core.ApolloLink));

exports.HttpLink = HttpLink;
exports.checkFetcher = checkFetcher;
exports.createHttpLink = createHttpLink;
exports.createSignalIfSupported = createSignalIfSupported;
exports.defaultPrinter = defaultPrinter;
exports.fallbackHttpConfig = fallbackHttpConfig;
exports.parseAndCheckHttpResponse = parseAndCheckHttpResponse;
exports.rewriteURIForGET = rewriteURIForGET;
exports.selectHttpOptionsAndBody = selectHttpOptionsAndBody;
exports.selectHttpOptionsAndBodyInternal = selectHttpOptionsAndBodyInternal;
exports.selectURI = selectURI;
exports.serializeFetchParameter = serializeFetchParameter;
//# sourceMappingURL=http.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/subscriptions/subscriptions.cjs":
/*!**************************************************************************!*\
  !*** ./node_modules/@apollo/client/link/subscriptions/subscriptions.cjs ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.js");
var graphql = __webpack_require__(/*! graphql */ "graphql");
var core = __webpack_require__(/*! ../core */ "./node_modules/@apollo/client/link/core/core.cjs");
var utilities = __webpack_require__(/*! ../../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
var errors = __webpack_require__(/*! ../../errors */ "./node_modules/@apollo/client/errors/errors.cjs");

function isLikeCloseEvent(val) {
    return utilities.isNonNullObject(val) && 'code' in val && 'reason' in val;
}
var GraphQLWsLink = (function (_super) {
    tslib.__extends(GraphQLWsLink, _super);
    function GraphQLWsLink(client) {
        var _this = _super.call(this) || this;
        _this.client = client;
        return _this;
    }
    GraphQLWsLink.prototype.request = function (operation) {
        var _this = this;
        return new utilities.Observable(function (observer) {
            return _this.client.subscribe(tslib.__assign(tslib.__assign({}, operation), { query: graphql.print(operation.query) }), {
                next: observer.next.bind(observer),
                complete: observer.complete.bind(observer),
                error: function (err) {
                    if (err instanceof Error) {
                        return observer.error(err);
                    }
                    if (isLikeCloseEvent(err)) {
                        return observer.error(new Error("Socket closed with event ".concat(err.code, " ").concat(err.reason || "")));
                    }
                    return observer.error(new errors.ApolloError({
                        graphQLErrors: Array.isArray(err) ? err : [err],
                    }));
                },
            });
        });
    };
    return GraphQLWsLink;
}(core.ApolloLink));

exports.GraphQLWsLink = GraphQLWsLink;
//# sourceMappingURL=subscriptions.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/utils.cjs":
/*!**********************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/utils.cjs ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var utilities = __webpack_require__(/*! ../../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
var tslib = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.js");

function fromError(errorValue) {
    return new utilities.Observable(function (observer) {
        observer.error(errorValue);
    });
}

function toPromise(observable) {
    var completed = false;
    return new Promise(function (resolve, reject) {
        observable.subscribe({
            next: function (data) {
                if (completed) {
                    __DEV__ && globals.invariant.warn("Promise Wrapper does not support multiple results from Observable");
                }
                else {
                    completed = true;
                    resolve(data);
                }
            },
            error: reject,
        });
    });
}

function fromPromise(promise) {
    return new utilities.Observable(function (observer) {
        promise
            .then(function (value) {
            observer.next(value);
            observer.complete();
        })
            .catch(observer.error.bind(observer));
    });
}

var throwServerError = function (response, result, message) {
    var error = new Error(message);
    error.name = 'ServerError';
    error.response = response;
    error.statusCode = response.status;
    error.result = result;
    throw error;
};

function validateOperation(operation) {
    var OPERATION_FIELDS = [
        'query',
        'operationName',
        'variables',
        'extensions',
        'context',
    ];
    for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
        var key = _a[_i];
        if (OPERATION_FIELDS.indexOf(key) < 0) {
            throw __DEV__ ? new globals.InvariantError("illegal argument: ".concat(key)) : new globals.InvariantError(27);
        }
    }
    return operation;
}

function createOperation(starting, operation) {
    var context = tslib.__assign({}, starting);
    var setContext = function (next) {
        if (typeof next === 'function') {
            context = tslib.__assign(tslib.__assign({}, context), next(context));
        }
        else {
            context = tslib.__assign(tslib.__assign({}, context), next);
        }
    };
    var getContext = function () { return (tslib.__assign({}, context)); };
    Object.defineProperty(operation, 'setContext', {
        enumerable: false,
        value: setContext,
    });
    Object.defineProperty(operation, 'getContext', {
        enumerable: false,
        value: getContext,
    });
    return operation;
}

function transformOperation(operation) {
    var transformedOperation = {
        variables: operation.variables || {},
        extensions: operation.extensions || {},
        operationName: operation.operationName,
        query: operation.query,
    };
    if (!transformedOperation.operationName) {
        transformedOperation.operationName =
            typeof transformedOperation.query !== 'string'
                ? utilities.getOperationName(transformedOperation.query) || undefined
                : '';
    }
    return transformedOperation;
}

exports.createOperation = createOperation;
exports.fromError = fromError;
exports.fromPromise = fromPromise;
exports.throwServerError = throwServerError;
exports.toPromise = toPromise;
exports.transformOperation = transformOperation;
exports.validateOperation = validateOperation;
//# sourceMappingURL=utils.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/main.cjs":
/*!**********************************************!*\
  !*** ./node_modules/@apollo/client/main.cjs ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var core = __webpack_require__(/*! ./core */ "./node_modules/@apollo/client/core/core.cjs");
var react = __webpack_require__(/*! ./react */ "./node_modules/@apollo/client/react/react.cjs");



for (var k in core) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = core[k];
}
for (var k in react) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = react[k];
}
//# sourceMappingURL=main.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/node_modules/@wry/context/lib/context.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@apollo/client/node_modules/@wry/context/lib/context.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

// This currentContext variable will only be used if the makeSlotClass
// function is called, which happens only if this is the first copy of the
// @wry/context package to be imported.
var currentContext = null;
// This unique internal object is used to denote the absence of a value
// for a given Slot, and is never exposed to outside code.
var MISSING_VALUE = {};
var idCounter = 1;
// Although we can't do anything about the cost of duplicated code from
// accidentally bundling multiple copies of the @wry/context package, we can
// avoid creating the Slot class more than once using makeSlotClass.
var makeSlotClass = function () { return /** @class */ (function () {
    function Slot() {
        // If you have a Slot object, you can find out its slot.id, but you cannot
        // guess the slot.id of a Slot you don't have access to, thanks to the
        // randomized suffix.
        this.id = [
            "slot",
            idCounter++,
            Date.now(),
            Math.random().toString(36).slice(2),
        ].join(":");
    }
    Slot.prototype.hasValue = function () {
        for (var context_1 = currentContext; context_1; context_1 = context_1.parent) {
            // We use the Slot object iself as a key to its value, which means the
            // value cannot be obtained without a reference to the Slot object.
            if (this.id in context_1.slots) {
                var value = context_1.slots[this.id];
                if (value === MISSING_VALUE)
                    break;
                if (context_1 !== currentContext) {
                    // Cache the value in currentContext.slots so the next lookup will
                    // be faster. This caching is safe because the tree of contexts and
                    // the values of the slots are logically immutable.
                    currentContext.slots[this.id] = value;
                }
                return true;
            }
        }
        if (currentContext) {
            // If a value was not found for this Slot, it's never going to be found
            // no matter how many times we look it up, so we might as well cache
            // the absence of the value, too.
            currentContext.slots[this.id] = MISSING_VALUE;
        }
        return false;
    };
    Slot.prototype.getValue = function () {
        if (this.hasValue()) {
            return currentContext.slots[this.id];
        }
    };
    Slot.prototype.withValue = function (value, callback, 
    // Given the prevalence of arrow functions, specifying arguments is likely
    // to be much more common than specifying `this`, hence this ordering:
    args, thisArg) {
        var _a;
        var slots = (_a = {
                __proto__: null
            },
            _a[this.id] = value,
            _a);
        var parent = currentContext;
        currentContext = { parent: parent, slots: slots };
        try {
            // Function.prototype.apply allows the arguments array argument to be
            // omitted or undefined, so args! is fine here.
            return callback.apply(thisArg, args);
        }
        finally {
            currentContext = parent;
        }
    };
    // Capture the current context and wrap a callback function so that it
    // reestablishes the captured context when called.
    Slot.bind = function (callback) {
        var context = currentContext;
        return function () {
            var saved = currentContext;
            try {
                currentContext = context;
                return callback.apply(this, arguments);
            }
            finally {
                currentContext = saved;
            }
        };
    };
    // Immediately run a callback function without any captured context.
    Slot.noContext = function (callback, 
    // Given the prevalence of arrow functions, specifying arguments is likely
    // to be much more common than specifying `this`, hence this ordering:
    args, thisArg) {
        if (currentContext) {
            var saved = currentContext;
            try {
                currentContext = null;
                // Function.prototype.apply allows the arguments array argument to be
                // omitted or undefined, so args! is fine here.
                return callback.apply(thisArg, args);
            }
            finally {
                currentContext = saved;
            }
        }
        else {
            return callback.apply(thisArg, args);
        }
    };
    return Slot;
}()); };
function maybe(fn) {
    try {
        return fn();
    }
    catch (ignored) { }
}
// We store a single global implementation of the Slot class as a permanent
// non-enumerable property of the globalThis object. This obfuscation does
// nothing to prevent access to the Slot class, but at least it ensures the
// implementation (i.e. currentContext) cannot be tampered with, and all copies
// of the @wry/context package (hopefully just one) will share the same Slot
// implementation. Since the first copy of the @wry/context package to be
// imported wins, this technique imposes a steep cost for any future breaking
// changes to the Slot class.
var globalKey = "@wry/context:Slot";
var host = 
// Prefer globalThis when available.
// https://github.com/benjamn/wryware/issues/347
maybe(function () { return globalThis; }) ||
    // Fall back to global, which works in Node.js and may be converted by some
    // bundlers to the appropriate identifier (window, self, ...) depending on the
    // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
    maybe(function () { return global; }) ||
    // Otherwise, use a dummy host that's local to this module. We used to fall
    // back to using the Array constructor as a namespace, but that was flagged in
    // https://github.com/benjamn/wryware/issues/347, and can be avoided.
    Object.create(null);
// Whichever globalHost we're using, make TypeScript happy about the additional
// globalKey property.
var globalHost = host;
var Slot = globalHost[globalKey] ||
    // Earlier versions of this package stored the globalKey property on the Array
    // constructor, so we check there as well, to prevent Slot class duplication.
    Array[globalKey] ||
    (function (Slot) {
        try {
            Object.defineProperty(globalHost, globalKey, {
                value: Slot,
                enumerable: false,
                writable: false,
                // When it was possible for globalHost to be the Array constructor (a
                // legacy Slot dedup strategy), it was important for the property to be
                // configurable:true so it could be deleted. That does not seem to be as
                // important when globalHost is the global object, but I don't want to
                // cause similar problems again, and configurable:true seems safest.
                // https://github.com/endojs/endo/issues/576#issuecomment-1178274008
                configurable: true
            });
        }
        finally {
            return Slot;
        }
    })(makeSlotClass());

var bind = Slot.bind, noContext = Slot.noContext;
function setTimeoutWithContext(callback, delay) {
    return setTimeout(bind(callback), delay);
}
// Turn any generator function into an async function (using yield instead
// of await), with context automatically preserved across yields.
function asyncFromGen(genFn) {
    return function () {
        var gen = genFn.apply(this, arguments);
        var boundNext = bind(gen.next);
        var boundThrow = bind(gen.throw);
        return new Promise(function (resolve, reject) {
            function invoke(method, argument) {
                try {
                    var result = method.call(gen, argument);
                }
                catch (error) {
                    return reject(error);
                }
                var next = result.done ? resolve : invokeNext;
                if (isPromiseLike(result.value)) {
                    result.value.then(next, result.done ? reject : invokeThrow);
                }
                else {
                    next(result.value);
                }
            }
            var invokeNext = function (value) { return invoke(boundNext, value); };
            var invokeThrow = function (error) { return invoke(boundThrow, error); };
            invokeNext();
        });
    };
}
function isPromiseLike(value) {
    return value && typeof value.then === "function";
}
// If you use the fibers npm package to implement coroutines in Node.js,
// you should call this function at least once to ensure context management
// remains coherent across any yields.
var wrappedFibers = [];
function wrapYieldingFiberMethods(Fiber) {
    // There can be only one implementation of Fiber per process, so this array
    // should never grow longer than one element.
    if (wrappedFibers.indexOf(Fiber) < 0) {
        var wrap = function (obj, method) {
            var fn = obj[method];
            obj[method] = function () {
                return noContext(fn, arguments, this);
            };
        };
        // These methods can yield, according to
        // https://github.com/laverdet/node-fibers/blob/ddebed9b8ae3883e57f822e2108e6943e5c8d2a8/fibers.js#L97-L100
        wrap(Fiber, "yield");
        wrap(Fiber.prototype, "run");
        wrap(Fiber.prototype, "throwInto");
        wrappedFibers.push(Fiber);
    }
    return Fiber;
}

exports.Slot = Slot;
exports.asyncFromGen = asyncFromGen;
exports.bind = bind;
exports.noContext = noContext;
exports.setTimeout = setTimeoutWithContext;
exports.wrapYieldingFiberMethods = wrapYieldingFiberMethods;
//# sourceMappingURL=context.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/node_modules/@wry/equality/lib/equality.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@apollo/client/node_modules/@wry/equality/lib/equality.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var _a = Object.prototype, toString = _a.toString, hasOwnProperty = _a.hasOwnProperty;
var fnToStr = Function.prototype.toString;
var previousComparisons = new Map();
/**
 * Performs a deep equality check on two JavaScript values, tolerating cycles.
 */
function equal(a, b) {
    try {
        return check(a, b);
    }
    finally {
        previousComparisons.clear();
    }
}
function check(a, b) {
    // If the two values are strictly equal, our job is easy.
    if (a === b) {
        return true;
    }
    // Object.prototype.toString returns a representation of the runtime type of
    // the given value that is considerably more precise than typeof.
    var aTag = toString.call(a);
    var bTag = toString.call(b);
    // If the runtime types of a and b are different, they could maybe be equal
    // under some interpretation of equality, but for simplicity and performance
    // we just return false instead.
    if (aTag !== bTag) {
        return false;
    }
    switch (aTag) {
        case '[object Array]':
            // Arrays are a lot like other objects, but we can cheaply compare their
            // lengths as a short-cut before comparing their elements.
            if (a.length !== b.length)
                return false;
        // Fall through to object case...
        case '[object Object]': {
            if (previouslyCompared(a, b))
                return true;
            var aKeys = definedKeys(a);
            var bKeys = definedKeys(b);
            // If `a` and `b` have a different number of enumerable keys, they
            // must be different.
            var keyCount = aKeys.length;
            if (keyCount !== bKeys.length)
                return false;
            // Now make sure they have the same keys.
            for (var k = 0; k < keyCount; ++k) {
                if (!hasOwnProperty.call(b, aKeys[k])) {
                    return false;
                }
            }
            // Finally, check deep equality of all child properties.
            for (var k = 0; k < keyCount; ++k) {
                var key = aKeys[k];
                if (!check(a[key], b[key])) {
                    return false;
                }
            }
            return true;
        }
        case '[object Error]':
            return a.name === b.name && a.message === b.message;
        case '[object Number]':
            // Handle NaN, which is !== itself.
            if (a !== a)
                return b !== b;
        // Fall through to shared +a === +b case...
        case '[object Boolean]':
        case '[object Date]':
            return +a === +b;
        case '[object RegExp]':
        case '[object String]':
            return a == "".concat(b);
        case '[object Map]':
        case '[object Set]': {
            if (a.size !== b.size)
                return false;
            if (previouslyCompared(a, b))
                return true;
            var aIterator = a.entries();
            var isMap = aTag === '[object Map]';
            while (true) {
                var info = aIterator.next();
                if (info.done)
                    break;
                // If a instanceof Set, aValue === aKey.
                var _a = info.value, aKey = _a[0], aValue = _a[1];
                // So this works the same way for both Set and Map.
                if (!b.has(aKey)) {
                    return false;
                }
                // However, we care about deep equality of values only when dealing
                // with Map structures.
                if (isMap && !check(aValue, b.get(aKey))) {
                    return false;
                }
            }
            return true;
        }
        case '[object Uint16Array]':
        case '[object Uint8Array]': // Buffer, in Node.js.
        case '[object Uint32Array]':
        case '[object Int32Array]':
        case '[object Int8Array]':
        case '[object Int16Array]':
        case '[object ArrayBuffer]':
            // DataView doesn't need these conversions, but the equality check is
            // otherwise the same.
            a = new Uint8Array(a);
            b = new Uint8Array(b);
        // Fall through...
        case '[object DataView]': {
            var len = a.byteLength;
            if (len === b.byteLength) {
                while (len-- && a[len] === b[len]) {
                    // Keep looping as long as the bytes are equal.
                }
            }
            return len === -1;
        }
        case '[object AsyncFunction]':
        case '[object GeneratorFunction]':
        case '[object AsyncGeneratorFunction]':
        case '[object Function]': {
            var aCode = fnToStr.call(a);
            if (aCode !== fnToStr.call(b)) {
                return false;
            }
            // We consider non-native functions equal if they have the same code
            // (native functions require === because their code is censored).
            // Note that this behavior is not entirely sound, since !== function
            // objects with the same code can behave differently depending on
            // their closure scope. However, any function can behave differently
            // depending on the values of its input arguments (including this)
            // and its calling context (including its closure scope), even
            // though the function object is === to itself; and it is entirely
            // possible for functions that are not === to behave exactly the
            // same under all conceivable circumstances. Because none of these
            // factors are statically decidable in JavaScript, JS function
            // equality is not well-defined. This ambiguity allows us to
            // consider the best possible heuristic among various imperfect
            // options, and equating non-native functions that have the same
            // code has enormous practical benefits, such as when comparing
            // functions that are repeatedly passed as fresh function
            // expressions within objects that are otherwise deeply equal. Since
            // any function created from the same syntactic expression (in the
            // same code location) will always stringify to the same code
            // according to fnToStr.call, we can reasonably expect these
            // repeatedly passed function expressions to have the same code, and
            // thus behave "the same" (with all the caveats mentioned above),
            // even though the runtime function objects are !== to one another.
            return !endsWith(aCode, nativeCodeSuffix);
        }
    }
    // Otherwise the values are not equal.
    return false;
}
function definedKeys(obj) {
    // Remember that the second argument to Array.prototype.filter will be
    // used as `this` within the callback function.
    return Object.keys(obj).filter(isDefinedKey, obj);
}
function isDefinedKey(key) {
    return this[key] !== void 0;
}
var nativeCodeSuffix = "{ [native code] }";
function endsWith(full, suffix) {
    var fromIndex = full.length - suffix.length;
    return fromIndex >= 0 &&
        full.indexOf(suffix, fromIndex) === fromIndex;
}
function previouslyCompared(a, b) {
    // Though cyclic references can make an object graph appear infinite from the
    // perspective of a depth-first traversal, the graph still contains a finite
    // number of distinct object references. We use the previousComparisons cache
    // to avoid comparing the same pair of object references more than once, which
    // guarantees termination (even if we end up comparing every object in one
    // graph to every object in the other graph, which is extremely unlikely),
    // while still allowing weird isomorphic structures (like rings with different
    // lengths) a chance to pass the equality test.
    var bSet = previousComparisons.get(a);
    if (bSet) {
        // Return true here because we can be sure false will be returned somewhere
        // else if the objects are not equivalent.
        if (bSet.has(b))
            return true;
    }
    else {
        previousComparisons.set(a, bSet = new Set);
    }
    bSet.add(b);
    return false;
}

exports["default"] = equal;
exports.equal = equal;
//# sourceMappingURL=equality.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/node_modules/graphql-tag/lib/graphql-tag.umd.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@apollo/client/node_modules/graphql-tag/lib/graphql-tag.umd.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports, __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.js"), __webpack_require__(/*! graphql */ "graphql")) :
    undefined;
}(this, (function (exports, tslib, graphql) { 'use strict';

    var docCache = new Map();
    var fragmentSourceMap = new Map();
    var printFragmentWarnings = true;
    var experimentalFragmentVariables = false;
    function normalize(string) {
        return string.replace(/[\s,]+/g, ' ').trim();
    }
    function cacheKeyFromLoc(loc) {
        return normalize(loc.source.body.substring(loc.start, loc.end));
    }
    function processFragments(ast) {
        var seenKeys = new Set();
        var definitions = [];
        ast.definitions.forEach(function (fragmentDefinition) {
            if (fragmentDefinition.kind === 'FragmentDefinition') {
                var fragmentName = fragmentDefinition.name.value;
                var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
                var sourceKeySet = fragmentSourceMap.get(fragmentName);
                if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
                    if (printFragmentWarnings) {
                        console.warn("Warning: fragment with name " + fragmentName + " already exists.\n"
                            + "graphql-tag enforces all fragment names across your application to be unique; read more about\n"
                            + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
                    }
                }
                else if (!sourceKeySet) {
                    fragmentSourceMap.set(fragmentName, sourceKeySet = new Set);
                }
                sourceKeySet.add(sourceKey);
                if (!seenKeys.has(sourceKey)) {
                    seenKeys.add(sourceKey);
                    definitions.push(fragmentDefinition);
                }
            }
            else {
                definitions.push(fragmentDefinition);
            }
        });
        return tslib.__assign(tslib.__assign({}, ast), { definitions: definitions });
    }
    function stripLoc(doc) {
        var workSet = new Set(doc.definitions);
        workSet.forEach(function (node) {
            if (node.loc)
                delete node.loc;
            Object.keys(node).forEach(function (key) {
                var value = node[key];
                if (value && typeof value === 'object') {
                    workSet.add(value);
                }
            });
        });
        var loc = doc.loc;
        if (loc) {
            delete loc.startToken;
            delete loc.endToken;
        }
        return doc;
    }
    function parseDocument(source) {
        var cacheKey = normalize(source);
        if (!docCache.has(cacheKey)) {
            var parsed = graphql.parse(source, {
                experimentalFragmentVariables: experimentalFragmentVariables,
                allowLegacyFragmentVariables: experimentalFragmentVariables
            });
            if (!parsed || parsed.kind !== 'Document') {
                throw new Error('Not a valid GraphQL document.');
            }
            docCache.set(cacheKey, stripLoc(processFragments(parsed)));
        }
        return docCache.get(cacheKey);
    }
    function gql(literals) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (typeof literals === 'string') {
            literals = [literals];
        }
        var result = literals[0];
        args.forEach(function (arg, i) {
            if (arg && arg.kind === 'Document') {
                result += arg.loc.source.body;
            }
            else {
                result += arg;
            }
            result += literals[i + 1];
        });
        return parseDocument(result);
    }
    function resetCaches() {
        docCache.clear();
        fragmentSourceMap.clear();
    }
    function disableFragmentWarnings() {
        printFragmentWarnings = false;
    }
    function enableExperimentalFragmentVariables() {
        experimentalFragmentVariables = true;
    }
    function disableExperimentalFragmentVariables() {
        experimentalFragmentVariables = false;
    }
    var extras = {
        gql: gql,
        resetCaches: resetCaches,
        disableFragmentWarnings: disableFragmentWarnings,
        enableExperimentalFragmentVariables: enableExperimentalFragmentVariables,
        disableExperimentalFragmentVariables: disableExperimentalFragmentVariables
    };
    (function (gql_1) {
        gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
    })(gql || (gql = {}));
    gql["default"] = gql;
    var gql$1 = gql;

    exports.default = gql$1;
    exports.disableExperimentalFragmentVariables = disableExperimentalFragmentVariables;
    exports.disableFragmentWarnings = disableFragmentWarnings;
    exports.enableExperimentalFragmentVariables = enableExperimentalFragmentVariables;
    exports.gql = gql;
    exports.resetCaches = resetCaches;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=graphql-tag.umd.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/node_modules/graphql-tag/main.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/node_modules/graphql-tag/main.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// For backwards compatibility, make sure require("graphql-tag") returns
// the gql function, rather than an exports object.
module.exports = __webpack_require__(/*! ./lib/graphql-tag.umd.js */ "./node_modules/@apollo/client/node_modules/graphql-tag/lib/graphql-tag.umd.js").gql;


/***/ }),

/***/ "./node_modules/@apollo/client/node_modules/optimism/lib/bundle.cjs.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@apollo/client/node_modules/optimism/lib/bundle.cjs.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var trie = __webpack_require__(/*! @wry/trie */ "@wry/trie");
var context = __webpack_require__(/*! @wry/context */ "./node_modules/@apollo/client/node_modules/@wry/context/lib/context.js");

function defaultDispose() { }
var Cache = /** @class */ (function () {
    function Cache(max, dispose) {
        if (max === void 0) { max = Infinity; }
        if (dispose === void 0) { dispose = defaultDispose; }
        this.max = max;
        this.dispose = dispose;
        this.map = new Map();
        this.newest = null;
        this.oldest = null;
    }
    Cache.prototype.has = function (key) {
        return this.map.has(key);
    };
    Cache.prototype.get = function (key) {
        var node = this.getNode(key);
        return node && node.value;
    };
    Cache.prototype.getNode = function (key) {
        var node = this.map.get(key);
        if (node && node !== this.newest) {
            var older = node.older, newer = node.newer;
            if (newer) {
                newer.older = older;
            }
            if (older) {
                older.newer = newer;
            }
            node.older = this.newest;
            node.older.newer = node;
            node.newer = null;
            this.newest = node;
            if (node === this.oldest) {
                this.oldest = newer;
            }
        }
        return node;
    };
    Cache.prototype.set = function (key, value) {
        var node = this.getNode(key);
        if (node) {
            return node.value = value;
        }
        node = {
            key: key,
            value: value,
            newer: null,
            older: this.newest
        };
        if (this.newest) {
            this.newest.newer = node;
        }
        this.newest = node;
        this.oldest = this.oldest || node;
        this.map.set(key, node);
        return node.value;
    };
    Cache.prototype.clean = function () {
        while (this.oldest && this.map.size > this.max) {
            this.delete(this.oldest.key);
        }
    };
    Cache.prototype.delete = function (key) {
        var node = this.map.get(key);
        if (node) {
            if (node === this.newest) {
                this.newest = node.older;
            }
            if (node === this.oldest) {
                this.oldest = node.newer;
            }
            if (node.newer) {
                node.newer.older = node.older;
            }
            if (node.older) {
                node.older.newer = node.newer;
            }
            this.map.delete(key);
            this.dispose(node.value, key);
            return true;
        }
        return false;
    };
    return Cache;
}());

var parentEntrySlot = new context.Slot();

var _a;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var 
// This Array.from polyfill is restricted to working with Set<any> for now,
// but we can improve the polyfill and add other input types, as needed. Note
// that this fallback implementation will only be used if the host environment
// does not support a native Array.from function. In most modern JS runtimes,
// the toArray function exported here will be === Array.from.
toArray = (_a = Array.from, _a === void 0 ? function (collection) {
    var array = [];
    collection.forEach(function (item) { return array.push(item); });
    return array;
} : _a);
function maybeUnsubscribe(entryOrDep) {
    var unsubscribe = entryOrDep.unsubscribe;
    if (typeof unsubscribe === "function") {
        entryOrDep.unsubscribe = void 0;
        unsubscribe();
    }
}

var emptySetPool = [];
var POOL_TARGET_SIZE = 100;
// Since this package might be used browsers, we should avoid using the
// Node built-in assert module.
function assert(condition, optionalMessage) {
    if (!condition) {
        throw new Error(optionalMessage || "assertion failure");
    }
}
function valueIs(a, b) {
    var len = a.length;
    return (
    // Unknown values are not equal to each other.
    len > 0 &&
        // Both values must be ordinary (or both exceptional) to be equal.
        len === b.length &&
        // The underlying value or exception must be the same.
        a[len - 1] === b[len - 1]);
}
function valueGet(value) {
    switch (value.length) {
        case 0: throw new Error("unknown value");
        case 1: return value[0];
        case 2: throw value[1];
    }
}
function valueCopy(value) {
    return value.slice(0);
}
var Entry = /** @class */ (function () {
    function Entry(fn) {
        this.fn = fn;
        this.parents = new Set();
        this.childValues = new Map();
        // When this Entry has children that are dirty, this property becomes
        // a Set containing other Entry objects, borrowed from emptySetPool.
        // When the set becomes empty, it gets recycled back to emptySetPool.
        this.dirtyChildren = null;
        this.dirty = true;
        this.recomputing = false;
        this.value = [];
        this.deps = null;
        ++Entry.count;
    }
    Entry.prototype.peek = function () {
        if (this.value.length === 1 && !mightBeDirty(this)) {
            rememberParent(this);
            return this.value[0];
        }
    };
    // This is the most important method of the Entry API, because it
    // determines whether the cached this.value can be returned immediately,
    // or must be recomputed. The overall performance of the caching system
    // depends on the truth of the following observations: (1) this.dirty is
    // usually false, (2) this.dirtyChildren is usually null/empty, and thus
    // (3) valueGet(this.value) is usually returned without recomputation.
    Entry.prototype.recompute = function (args) {
        assert(!this.recomputing, "already recomputing");
        rememberParent(this);
        return mightBeDirty(this)
            ? reallyRecompute(this, args)
            : valueGet(this.value);
    };
    Entry.prototype.setDirty = function () {
        if (this.dirty)
            return;
        this.dirty = true;
        this.value.length = 0;
        reportDirty(this);
        // We can go ahead and unsubscribe here, since any further dirty
        // notifications we receive will be redundant, and unsubscribing may
        // free up some resources, e.g. file watchers.
        maybeUnsubscribe(this);
    };
    Entry.prototype.dispose = function () {
        var _this = this;
        this.setDirty();
        // Sever any dependency relationships with our own children, so those
        // children don't retain this parent Entry in their child.parents sets,
        // thereby preventing it from being fully garbage collected.
        forgetChildren(this);
        // Because this entry has been kicked out of the cache (in index.js),
        // we've lost the ability to find out if/when this entry becomes dirty,
        // whether that happens through a subscription, because of a direct call
        // to entry.setDirty(), or because one of its children becomes dirty.
        // Because of this loss of future information, we have to assume the
        // worst (that this entry might have become dirty very soon), so we must
        // immediately mark this entry's parents as dirty. Normally we could
        // just call entry.setDirty() rather than calling parent.setDirty() for
        // each parent, but that would leave this entry in parent.childValues
        // and parent.dirtyChildren, which would prevent the child from being
        // truly forgotten.
        eachParent(this, function (parent, child) {
            parent.setDirty();
            forgetChild(parent, _this);
        });
    };
    Entry.prototype.forget = function () {
        // The code that creates Entry objects in index.ts will replace this method
        // with one that actually removes the Entry from the cache, which will also
        // trigger the entry.dispose method.
        this.dispose();
    };
    Entry.prototype.dependOn = function (dep) {
        dep.add(this);
        if (!this.deps) {
            this.deps = emptySetPool.pop() || new Set();
        }
        this.deps.add(dep);
    };
    Entry.prototype.forgetDeps = function () {
        var _this = this;
        if (this.deps) {
            toArray(this.deps).forEach(function (dep) { return dep.delete(_this); });
            this.deps.clear();
            emptySetPool.push(this.deps);
            this.deps = null;
        }
    };
    Entry.count = 0;
    return Entry;
}());
function rememberParent(child) {
    var parent = parentEntrySlot.getValue();
    if (parent) {
        child.parents.add(parent);
        if (!parent.childValues.has(child)) {
            parent.childValues.set(child, []);
        }
        if (mightBeDirty(child)) {
            reportDirtyChild(parent, child);
        }
        else {
            reportCleanChild(parent, child);
        }
        return parent;
    }
}
function reallyRecompute(entry, args) {
    forgetChildren(entry);
    // Set entry as the parent entry while calling recomputeNewValue(entry).
    parentEntrySlot.withValue(entry, recomputeNewValue, [entry, args]);
    if (maybeSubscribe(entry, args)) {
        // If we successfully recomputed entry.value and did not fail to
        // (re)subscribe, then this Entry is no longer explicitly dirty.
        setClean(entry);
    }
    return valueGet(entry.value);
}
function recomputeNewValue(entry, args) {
    entry.recomputing = true;
    // Set entry.value as unknown.
    entry.value.length = 0;
    try {
        // If entry.fn succeeds, entry.value will become a normal Value.
        entry.value[0] = entry.fn.apply(null, args);
    }
    catch (e) {
        // If entry.fn throws, entry.value will become exceptional.
        entry.value[1] = e;
    }
    // Either way, this line is always reached.
    entry.recomputing = false;
}
function mightBeDirty(entry) {
    return entry.dirty || !!(entry.dirtyChildren && entry.dirtyChildren.size);
}
function setClean(entry) {
    entry.dirty = false;
    if (mightBeDirty(entry)) {
        // This Entry may still have dirty children, in which case we can't
        // let our parents know we're clean just yet.
        return;
    }
    reportClean(entry);
}
function reportDirty(child) {
    eachParent(child, reportDirtyChild);
}
function reportClean(child) {
    eachParent(child, reportCleanChild);
}
function eachParent(child, callback) {
    var parentCount = child.parents.size;
    if (parentCount) {
        var parents = toArray(child.parents);
        for (var i = 0; i < parentCount; ++i) {
            callback(parents[i], child);
        }
    }
}
// Let a parent Entry know that one of its children may be dirty.
function reportDirtyChild(parent, child) {
    // Must have called rememberParent(child) before calling
    // reportDirtyChild(parent, child).
    assert(parent.childValues.has(child));
    assert(mightBeDirty(child));
    var parentWasClean = !mightBeDirty(parent);
    if (!parent.dirtyChildren) {
        parent.dirtyChildren = emptySetPool.pop() || new Set;
    }
    else if (parent.dirtyChildren.has(child)) {
        // If we already know this child is dirty, then we must have already
        // informed our own parents that we are dirty, so we can terminate
        // the recursion early.
        return;
    }
    parent.dirtyChildren.add(child);
    // If parent was clean before, it just became (possibly) dirty (according to
    // mightBeDirty), since we just added child to parent.dirtyChildren.
    if (parentWasClean) {
        reportDirty(parent);
    }
}
// Let a parent Entry know that one of its children is no longer dirty.
function reportCleanChild(parent, child) {
    // Must have called rememberChild(child) before calling
    // reportCleanChild(parent, child).
    assert(parent.childValues.has(child));
    assert(!mightBeDirty(child));
    var childValue = parent.childValues.get(child);
    if (childValue.length === 0) {
        parent.childValues.set(child, valueCopy(child.value));
    }
    else if (!valueIs(childValue, child.value)) {
        parent.setDirty();
    }
    removeDirtyChild(parent, child);
    if (mightBeDirty(parent)) {
        return;
    }
    reportClean(parent);
}
function removeDirtyChild(parent, child) {
    var dc = parent.dirtyChildren;
    if (dc) {
        dc.delete(child);
        if (dc.size === 0) {
            if (emptySetPool.length < POOL_TARGET_SIZE) {
                emptySetPool.push(dc);
            }
            parent.dirtyChildren = null;
        }
    }
}
// Removes all children from this entry and returns an array of the
// removed children.
function forgetChildren(parent) {
    if (parent.childValues.size > 0) {
        parent.childValues.forEach(function (_value, child) {
            forgetChild(parent, child);
        });
    }
    // Remove this parent Entry from any sets to which it was added by the
    // addToSet method.
    parent.forgetDeps();
    // After we forget all our children, this.dirtyChildren must be empty
    // and therefore must have been reset to null.
    assert(parent.dirtyChildren === null);
}
function forgetChild(parent, child) {
    child.parents.delete(parent);
    parent.childValues.delete(child);
    removeDirtyChild(parent, child);
}
function maybeSubscribe(entry, args) {
    if (typeof entry.subscribe === "function") {
        try {
            maybeUnsubscribe(entry); // Prevent double subscriptions.
            entry.unsubscribe = entry.subscribe.apply(null, args);
        }
        catch (e) {
            // If this Entry has a subscribe function and it threw an exception
            // (or an unsubscribe function it previously returned now throws),
            // return false to indicate that we were not able to subscribe (or
            // unsubscribe), and this Entry should remain dirty.
            entry.setDirty();
            return false;
        }
    }
    // Returning true indicates either that there was no entry.subscribe
    // function or that it succeeded.
    return true;
}

var EntryMethods = {
    setDirty: true,
    dispose: true,
    forget: true, // Fully remove parent Entry from LRU cache and computation graph
};
function dep(options) {
    var depsByKey = new Map();
    var subscribe = options && options.subscribe;
    function depend(key) {
        var parent = parentEntrySlot.getValue();
        if (parent) {
            var dep_1 = depsByKey.get(key);
            if (!dep_1) {
                depsByKey.set(key, dep_1 = new Set);
            }
            parent.dependOn(dep_1);
            if (typeof subscribe === "function") {
                maybeUnsubscribe(dep_1);
                dep_1.unsubscribe = subscribe(key);
            }
        }
    }
    depend.dirty = function dirty(key, entryMethodName) {
        var dep = depsByKey.get(key);
        if (dep) {
            var m_1 = (entryMethodName &&
                hasOwnProperty.call(EntryMethods, entryMethodName)) ? entryMethodName : "setDirty";
            // We have to use toArray(dep).forEach instead of dep.forEach, because
            // modifying a Set while iterating over it can cause elements in the Set
            // to be removed from the Set before they've been iterated over.
            toArray(dep).forEach(function (entry) { return entry[m_1](); });
            depsByKey.delete(key);
            maybeUnsubscribe(dep);
        }
    };
    return depend;
}

function makeDefaultMakeCacheKeyFunction() {
    var keyTrie = new trie.Trie(typeof WeakMap === "function");
    return function () {
        return keyTrie.lookupArray(arguments);
    };
}
// The defaultMakeCacheKey function is remarkably powerful, because it gives
// a unique object for any shallow-identical list of arguments. If you need
// to implement a custom makeCacheKey function, you may find it helpful to
// delegate the final work to defaultMakeCacheKey, which is why we export it
// here. However, you may want to avoid defaultMakeCacheKey if your runtime
// does not support WeakMap, or you have the ability to return a string key.
// In those cases, just write your own custom makeCacheKey functions.
var defaultMakeCacheKey = makeDefaultMakeCacheKeyFunction();
var caches = new Set();
function wrap(originalFunction, options) {
    if (options === void 0) { options = Object.create(null); }
    var cache = new Cache(options.max || Math.pow(2, 16), function (entry) { return entry.dispose(); });
    var keyArgs = options.keyArgs;
    var makeCacheKey = options.makeCacheKey ||
        makeDefaultMakeCacheKeyFunction();
    var optimistic = function () {
        var key = makeCacheKey.apply(null, keyArgs ? keyArgs.apply(null, arguments) : arguments);
        if (key === void 0) {
            return originalFunction.apply(null, arguments);
        }
        var entry = cache.get(key);
        if (!entry) {
            cache.set(key, entry = new Entry(originalFunction));
            entry.subscribe = options.subscribe;
            // Give the Entry the ability to trigger cache.delete(key), even though
            // the Entry itself does not know about key or cache.
            entry.forget = function () { return cache.delete(key); };
        }
        var value = entry.recompute(Array.prototype.slice.call(arguments));
        // Move this entry to the front of the least-recently used queue,
        // since we just finished computing its value.
        cache.set(key, entry);
        caches.add(cache);
        // Clean up any excess entries in the cache, but only if there is no
        // active parent entry, meaning we're not in the middle of a larger
        // computation that might be flummoxed by the cleaning.
        if (!parentEntrySlot.hasValue()) {
            caches.forEach(function (cache) { return cache.clean(); });
            caches.clear();
        }
        return value;
    };
    Object.defineProperty(optimistic, "size", {
        get: function () {
            return cache["map"].size;
        },
        configurable: false,
        enumerable: false,
    });
    function dirtyKey(key) {
        var entry = cache.get(key);
        if (entry) {
            entry.setDirty();
        }
    }
    optimistic.dirtyKey = dirtyKey;
    optimistic.dirty = function dirty() {
        dirtyKey(makeCacheKey.apply(null, arguments));
    };
    function peekKey(key) {
        var entry = cache.get(key);
        if (entry) {
            return entry.peek();
        }
    }
    optimistic.peekKey = peekKey;
    optimistic.peek = function peek() {
        return peekKey(makeCacheKey.apply(null, arguments));
    };
    function forgetKey(key) {
        return cache.delete(key);
    }
    optimistic.forgetKey = forgetKey;
    optimistic.forget = function forget() {
        return forgetKey(makeCacheKey.apply(null, arguments));
    };
    optimistic.makeCacheKey = makeCacheKey;
    optimistic.getKey = keyArgs ? function getKey() {
        return makeCacheKey.apply(null, keyArgs.apply(null, arguments));
    } : makeCacheKey;
    return Object.freeze(optimistic);
}

Object.defineProperty(exports, 'KeyTrie', {
  enumerable: true,
  get: function () {
    return trie.Trie;
  }
});
Object.defineProperty(exports, 'asyncFromGen', {
  enumerable: true,
  get: function () {
    return context.asyncFromGen;
  }
});
Object.defineProperty(exports, 'bindContext', {
  enumerable: true,
  get: function () {
    return context.bind;
  }
});
Object.defineProperty(exports, 'noContext', {
  enumerable: true,
  get: function () {
    return context.noContext;
  }
});
Object.defineProperty(exports, 'setTimeout', {
  enumerable: true,
  get: function () {
    return context.setTimeout;
  }
});
exports.defaultMakeCacheKey = defaultMakeCacheKey;
exports.dep = dep;
exports.wrap = wrap;
//# sourceMappingURL=bundle.cjs.js.map


/***/ }),

/***/ "./node_modules/@apollo/client/node_modules/symbol-observable/lib/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@apollo/client/node_modules/symbol-observable/lib/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/@apollo/client/node_modules/symbol-observable/lib/ponyfill.js");

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../next/node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/@apollo/client/node_modules/symbol-observable/lib/ponyfill.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@apollo/client/node_modules/symbol-observable/lib/ponyfill.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {

			if (typeof _Symbol['for'] === 'function') {
				// This just needs to be something that won't trample other user's Symbol.for use
				// It also will guide people to the source of their issues, if this is problematic.
				// META: It's a resource locator!
				result = _Symbol['for']('https://github.com/benlesh/symbol-observable');
			} else {
				// Symbol.for didn't exist! The best we can do at this point is a totally 
				// unique symbol. Note that the string argument here is a descriptor, not
				// an identifier. This symbol is unique.
				result = _Symbol('https://github.com/benlesh/symbol-observable');
			}
			try {
				_Symbol.observable = result;
			} catch (err) {
				// Do nothing. In some environments, users have frozen `Symbol` for security reasons,
				// if it is frozen assigning to it will throw. In this case, we don't care, because
				// they will need to use the returned value from the ponyfill.
			}
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),

/***/ "./node_modules/@apollo/client/node_modules/ts-invariant/lib/invariant.cjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/@apollo/client/node_modules/ts-invariant/lib/invariant.cjs ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tslib = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.js");

var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf, setPrototypeOf = _a === void 0 ? function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
} : _a;
var InvariantError = /** @class */ (function (_super) {
    tslib.__extends(InvariantError, _super);
    function InvariantError(message) {
        if (message === void 0) { message = genericMessage; }
        var _this = _super.call(this, typeof message === "number"
            ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)"
            : message) || this;
        _this.framesToPop = 1;
        _this.name = genericMessage;
        setPrototypeOf(_this, InvariantError.prototype);
        return _this;
    }
    return InvariantError;
}(Error));
function invariant(condition, message) {
    if (!condition) {
        throw new InvariantError(message);
    }
}
var verbosityLevels = ["debug", "log", "warn", "error", "silent"];
var verbosityLevel = verbosityLevels.indexOf("log");
function wrapConsoleMethod(name) {
    return function () {
        if (verbosityLevels.indexOf(name) >= verbosityLevel) {
            // Default to console.log if this host environment happens not to provide
            // all the console.* methods we need.
            var method = console[name] || console.log;
            return method.apply(console, arguments);
        }
    };
}
(function (invariant) {
    invariant.debug = wrapConsoleMethod("debug");
    invariant.log = wrapConsoleMethod("log");
    invariant.warn = wrapConsoleMethod("warn");
    invariant.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));
function setVerbosity(level) {
    var old = verbosityLevels[verbosityLevel];
    verbosityLevel = Math.max(0, verbosityLevels.indexOf(level));
    return old;
}
var invariant$1 = invariant;

exports.InvariantError = InvariantError;
exports["default"] = invariant$1;
exports.invariant = invariant;
exports.setVerbosity = setVerbosity;
//# sourceMappingURL=invariant.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/node_modules/ts-invariant/process/main.cjs":
/*!********************************************************************************!*\
  !*** ./node_modules/@apollo/client/node_modules/ts-invariant/process/main.cjs ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function maybe(thunk) {
  try { return thunk() } catch (_) {}
}

var safeGlobal = (
  maybe(function() { return globalThis }) ||
  maybe(function() { return window }) ||
  maybe(function() { return self }) ||
  maybe(function() { return global }) ||
  // We don't expect the Function constructor ever to be invoked at runtime, as
  // long as at least one of globalThis, window, self, or global is defined, so
  // we are under no obligation to make it easy for static analysis tools to
  // detect syntactic usage of the Function constructor. If you think you can
  // improve your static analysis to detect this obfuscation, think again. This
  // is an arms race you cannot win, at least not in JavaScript.
  maybe(function() { return maybe.constructor("return this")() })
);

var needToRemove = false;

function install() {
  if (safeGlobal &&
      !maybe(function() { return "development" }) &&
      !maybe(function() { return process })) {
    Object.defineProperty(safeGlobal, "process", {
      value: {
        env: {
          // This default needs to be "production" instead of "development", to
          // avoid the problem https://github.com/graphql/graphql-js/pull/2894
          // will eventually solve, once merged and released.
          NODE_ENV: "production",
        },
      },
      // Let anyone else change global.process as they see fit, but hide it from
      // Object.keys(global) enumeration.
      configurable: true,
      enumerable: false,
      writable: true,
    });
    needToRemove = true;
  }
}

// Call install() at least once, when this module is imported.
install();

function remove() {
  if (needToRemove) {
    delete safeGlobal.process;
    needToRemove = false;
  }
}

exports.install = install;
exports.remove = remove;
//# sourceMappingURL=main.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/node_modules/tslib/tslib.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/node_modules/tslib/tslib.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __esDecorate;
var __runInitializers;
var __propKey;
var __setFunctionName;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __classPrivateFieldIn;
var __createBinding;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) { factory(createExporter(root, createExporter(exports))); }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    else {}
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

    __extends = function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __esDecorate = function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
        function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
        var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
        var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
        var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
        var _, done = false;
        for (var i = decorators.length - 1; i >= 0; i--) {
            var context = {};
            for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
            for (var p in contextIn.access) context.access[p] = contextIn.access[p];
            context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
            var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
            if (kind === "accessor") {
                if (result === void 0) continue;
                if (result === null || typeof result !== "object") throw new TypeError("Object expected");
                if (_ = accept(result.get)) descriptor.get = _;
                if (_ = accept(result.set)) descriptor.set = _;
                if (_ = accept(result.init)) initializers.push(_);
            }
            else if (_ = accept(result)) {
                if (kind === "field") initializers.push(_);
                else descriptor[key] = _;
            }
        }
        if (target) Object.defineProperty(target, contextIn.name, descriptor);
        done = true;
    };

    __runInitializers = function (thisArg, initializers, value) {
        var useValue = arguments.length > 2;
        for (var i = 0; i < initializers.length; i++) {
            value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
        }
        return useValue ? value : void 0;
    };

    __propKey = function (x) {
        return typeof x === "symbol" ? x : "".concat(x);
    };

    __setFunctionName = function (f, name, prefix) {
        if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
        return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (g && (g = 0, op[0] && (_ = 0)), _) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };

    __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function() { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __spreadArray = function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    };

    __classPrivateFieldIn = function (state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__esDecorate", __esDecorate);
    exporter("__runInitializers", __runInitializers);
    exporter("__propKey", __propKey);
    exporter("__setFunctionName", __setFunctionName);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
    exporter("__classPrivateFieldIn", __classPrivateFieldIn);
});


/***/ }),

/***/ "./node_modules/@apollo/client/node_modules/zen-observable-ts/index.cjs":
/*!******************************************************************************!*\
  !*** ./node_modules/@apollo/client/node_modules/zen-observable-ts/index.cjs ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.Observable = __webpack_require__(/*! zen-observable/index.js */ "zen-observable/index.js");


/***/ }),

/***/ "./node_modules/@apollo/client/react/context/context.cjs":
/*!***************************************************************!*\
  !*** ./node_modules/@apollo/client/react/context/context.cjs ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var React = __webpack_require__(/*! react */ "react");
var utilities = __webpack_require__(/*! ../../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        for (var k in e) {
            n[k] = e[k];
        }
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

var contextKey = utilities.canUseSymbol
    ? Symbol.for('__APOLLO_CONTEXT__')
    : '__APOLLO_CONTEXT__';
function getApolloContext() {
    var context = React__namespace.createContext[contextKey];
    if (!context) {
        Object.defineProperty(React__namespace.createContext, contextKey, {
            value: context = React__namespace.createContext({}),
            enumerable: false,
            writable: false,
            configurable: true,
        });
        context.displayName = 'ApolloContext';
    }
    return context;
}

var ApolloConsumer = function (props) {
    var ApolloContext = getApolloContext();
    return (React__namespace.createElement(ApolloContext.Consumer, null, function (context) {
        __DEV__ ? globals.invariant(context && context.client, 'Could not find "client" in the context of ApolloConsumer. ' +
            'Wrap the root component in an <ApolloProvider>.') : globals.invariant(context && context.client, 28);
        return props.children(context.client);
    }));
};

var ApolloProvider = function (_a) {
    var client = _a.client, children = _a.children;
    var ApolloContext = getApolloContext();
    return (React__namespace.createElement(ApolloContext.Consumer, null, function (context) {
        if (context === void 0) { context = {}; }
        if (client && context.client !== client) {
            context = Object.assign({}, context, { client: client });
        }
        __DEV__ ? globals.invariant(context.client, 'ApolloProvider was not passed a client instance. Make ' +
            'sure you pass in your client via the "client" prop.') : globals.invariant(context.client, 29);
        return (React__namespace.createElement(ApolloContext.Provider, { value: context }, children));
    }));
};

exports.ApolloConsumer = ApolloConsumer;
exports.ApolloProvider = ApolloProvider;
exports.getApolloContext = getApolloContext;
exports.resetApolloContext = getApolloContext;
//# sourceMappingURL=context.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/hooks.cjs":
/*!***********************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/hooks.cjs ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var React = __webpack_require__(/*! react */ "react");
var context = __webpack_require__(/*! ../context */ "./node_modules/@apollo/client/react/context/context.cjs");
var tslib = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.js");
var utilities = __webpack_require__(/*! ../../utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
var equality = __webpack_require__(/*! @wry/equality */ "./node_modules/@apollo/client/node_modules/@wry/equality/lib/equality.js");
var core = __webpack_require__(/*! ../../core */ "./node_modules/@apollo/client/core/core.cjs");
var errors = __webpack_require__(/*! ../../errors */ "./node_modules/@apollo/client/errors/errors.cjs");
var parser = __webpack_require__(/*! ../parser */ "./node_modules/@apollo/client/react/parser/parser.cjs");

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        for (var k in e) {
            n[k] = e[k];
        }
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

function useApolloClient(override) {
    var context$1 = React.useContext(context.getApolloContext());
    var client = override || context$1.client;
    __DEV__ ? globals.invariant(!!client, 'Could not find "client" in the context or passed in as an option. ' +
        'Wrap the root component in an <ApolloProvider>, or pass an ApolloClient ' +
        'instance in via options.') : globals.invariant(!!client, 32);
    return client;
}

var didWarnUncachedGetSnapshot = false;
var uSESKey = "useSyncExternalStore";
var realHook = React__namespace[uSESKey];
var useSyncExternalStore = realHook || (function (subscribe, getSnapshot, getServerSnapshot) {
    var value = getSnapshot();
    if (__DEV__ &&
        !didWarnUncachedGetSnapshot &&
        value !== getSnapshot()) {
        didWarnUncachedGetSnapshot = true;
        __DEV__ && globals.invariant.error('The result of getSnapshot should be cached to avoid an infinite loop');
    }
    var _a = React__namespace.useState({ inst: { value: value, getSnapshot: getSnapshot } }), inst = _a[0].inst, forceUpdate = _a[1];
    if (utilities.canUseLayoutEffect) {
        React__namespace.useLayoutEffect(function () {
            Object.assign(inst, { value: value, getSnapshot: getSnapshot });
            if (checkIfSnapshotChanged(inst)) {
                forceUpdate({ inst: inst });
            }
        }, [subscribe, value, getSnapshot]);
    }
    else {
        Object.assign(inst, { value: value, getSnapshot: getSnapshot });
    }
    React__namespace.useEffect(function () {
        if (checkIfSnapshotChanged(inst)) {
            forceUpdate({ inst: inst });
        }
        return subscribe(function handleStoreChange() {
            if (checkIfSnapshotChanged(inst)) {
                forceUpdate({ inst: inst });
            }
        });
    }, [subscribe]);
    return value;
});
function checkIfSnapshotChanged(_a) {
    var value = _a.value, getSnapshot = _a.getSnapshot;
    try {
        return value !== getSnapshot();
    }
    catch (_b) {
        return true;
    }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function useQuery(query, options) {
    if (options === void 0) { options = Object.create(null); }
    return useInternalState(useApolloClient(options.client), query).useQuery(options);
}
function useInternalState(client, query) {
    var stateRef = React.useRef();
    if (!stateRef.current ||
        client !== stateRef.current.client ||
        query !== stateRef.current.query) {
        stateRef.current = new InternalState(client, query, stateRef.current);
    }
    var state = stateRef.current;
    var _a = React.useState(0); _a[0]; var setTick = _a[1];
    state.forceUpdate = function () {
        setTick(function (tick) { return tick + 1; });
    };
    return state;
}
var InternalState = (function () {
    function InternalState(client, query, previous) {
        this.client = client;
        this.query = query;
        this.asyncResolveFns = new Set();
        this.optionsToIgnoreOnce = new (utilities.canUseWeakSet ? WeakSet : Set)();
        this.ssrDisabledResult = utilities.maybeDeepFreeze({
            loading: true,
            data: void 0,
            error: void 0,
            networkStatus: core.NetworkStatus.loading,
        });
        this.skipStandbyResult = utilities.maybeDeepFreeze({
            loading: false,
            data: void 0,
            error: void 0,
            networkStatus: core.NetworkStatus.ready,
        });
        this.toQueryResultCache = new (utilities.canUseWeakMap ? WeakMap : Map)();
        parser.verifyDocumentType(query, parser.DocumentType.Query);
        var previousResult = previous && previous.result;
        var previousData = previousResult && previousResult.data;
        if (previousData) {
            this.previousData = previousData;
        }
    }
    InternalState.prototype.forceUpdate = function () {
        __DEV__ && globals.invariant.warn("Calling default no-op implementation of InternalState#forceUpdate");
    };
    InternalState.prototype.asyncUpdate = function (signal) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var watchQueryOptions = _this.watchQueryOptions;
            var handleAborted = function () {
                _this.asyncResolveFns.delete(resolve);
                _this.optionsToIgnoreOnce.delete(watchQueryOptions);
                signal.removeEventListener('abort', handleAborted);
                reject(signal.reason);
            };
            _this.asyncResolveFns.add(resolve);
            _this.optionsToIgnoreOnce.add(watchQueryOptions);
            signal.addEventListener('abort', handleAborted);
            _this.forceUpdate();
        });
    };
    InternalState.prototype.useQuery = function (options) {
        var _this = this;
        this.renderPromises = React.useContext(context.getApolloContext()).renderPromises;
        this.useOptions(options);
        var obsQuery = this.useObservableQuery();
        var result = useSyncExternalStore(React.useCallback(function () {
            if (_this.renderPromises) {
                return function () { };
            }
            var onNext = function () {
                var previousResult = _this.result;
                var result = obsQuery.getCurrentResult();
                if (previousResult &&
                    previousResult.loading === result.loading &&
                    previousResult.networkStatus === result.networkStatus &&
                    equality.equal(previousResult.data, result.data)) {
                    return;
                }
                _this.setResult(result);
            };
            var onError = function (error) {
                var last = obsQuery["last"];
                subscription.unsubscribe();
                try {
                    obsQuery.resetLastResults();
                    subscription = obsQuery.subscribe(onNext, onError);
                }
                finally {
                    obsQuery["last"] = last;
                }
                if (!hasOwnProperty.call(error, 'graphQLErrors')) {
                    throw error;
                }
                var previousResult = _this.result;
                if (!previousResult ||
                    (previousResult && previousResult.loading) ||
                    !equality.equal(error, previousResult.error)) {
                    _this.setResult({
                        data: (previousResult && previousResult.data),
                        error: error,
                        loading: false,
                        networkStatus: core.NetworkStatus.error,
                    });
                }
            };
            var subscription = obsQuery.subscribe(onNext, onError);
            return function () { return subscription.unsubscribe(); };
        }, [
            obsQuery,
            this.renderPromises,
            this.client.disableNetworkFetches,
        ]), function () { return _this.getCurrentResult(); }, function () { return _this.getCurrentResult(); });
        this.unsafeHandlePartialRefetch(result);
        var queryResult = this.toQueryResult(result);
        if (!queryResult.loading && this.asyncResolveFns.size) {
            this.asyncResolveFns.forEach(function (resolve) { return resolve(queryResult); });
            this.asyncResolveFns.clear();
        }
        return queryResult;
    };
    InternalState.prototype.useOptions = function (options) {
        var _a;
        var watchQueryOptions = this.createWatchQueryOptions(this.queryHookOptions = options);
        var currentWatchQueryOptions = this.watchQueryOptions;
        if (this.optionsToIgnoreOnce.has(currentWatchQueryOptions) ||
            !equality.equal(watchQueryOptions, currentWatchQueryOptions)) {
            this.watchQueryOptions = watchQueryOptions;
            if (currentWatchQueryOptions && this.observable) {
                this.optionsToIgnoreOnce.delete(currentWatchQueryOptions);
                this.observable.reobserve(this.getObsQueryOptions());
                this.previousData = ((_a = this.result) === null || _a === void 0 ? void 0 : _a.data) || this.previousData;
                this.result = void 0;
            }
        }
        this.onCompleted = options.onCompleted || InternalState.prototype.onCompleted;
        this.onError = options.onError || InternalState.prototype.onError;
        if ((this.renderPromises || this.client.disableNetworkFetches) &&
            this.queryHookOptions.ssr === false &&
            !this.queryHookOptions.skip) {
            this.result = this.ssrDisabledResult;
        }
        else if (this.queryHookOptions.skip ||
            this.watchQueryOptions.fetchPolicy === 'standby') {
            this.result = this.skipStandbyResult;
        }
        else if (this.result === this.ssrDisabledResult ||
            this.result === this.skipStandbyResult) {
            this.result = void 0;
        }
    };
    InternalState.prototype.getObsQueryOptions = function () {
        var toMerge = [];
        var globalDefaults = this.client.defaultOptions.watchQuery;
        if (globalDefaults)
            toMerge.push(globalDefaults);
        if (this.queryHookOptions.defaultOptions) {
            toMerge.push(this.queryHookOptions.defaultOptions);
        }
        toMerge.push(utilities.compact(this.observable && this.observable.options, this.watchQueryOptions));
        return toMerge.reduce(core.mergeOptions);
    };
    InternalState.prototype.createWatchQueryOptions = function (_a) {
        var _b;
        if (_a === void 0) { _a = {}; }
        var skip = _a.skip; _a.ssr; _a.onCompleted; _a.onError; _a.defaultOptions; var otherOptions = tslib.__rest(_a, ["skip", "ssr", "onCompleted", "onError", "defaultOptions"]);
        var watchQueryOptions = Object.assign(otherOptions, { query: this.query });
        if (this.renderPromises &&
            (watchQueryOptions.fetchPolicy === 'network-only' ||
                watchQueryOptions.fetchPolicy === 'cache-and-network')) {
            watchQueryOptions.fetchPolicy = 'cache-first';
        }
        if (!watchQueryOptions.variables) {
            watchQueryOptions.variables = {};
        }
        if (skip) {
            var _c = watchQueryOptions.fetchPolicy, fetchPolicy = _c === void 0 ? this.getDefaultFetchPolicy() : _c, _d = watchQueryOptions.initialFetchPolicy, initialFetchPolicy = _d === void 0 ? fetchPolicy : _d;
            Object.assign(watchQueryOptions, {
                initialFetchPolicy: initialFetchPolicy,
                fetchPolicy: 'standby',
            });
        }
        else if (!watchQueryOptions.fetchPolicy) {
            watchQueryOptions.fetchPolicy =
                ((_b = this.observable) === null || _b === void 0 ? void 0 : _b.options.initialFetchPolicy) ||
                    this.getDefaultFetchPolicy();
        }
        return watchQueryOptions;
    };
    InternalState.prototype.getDefaultFetchPolicy = function () {
        var _a, _b;
        return (((_a = this.queryHookOptions.defaultOptions) === null || _a === void 0 ? void 0 : _a.fetchPolicy) ||
            ((_b = this.client.defaultOptions.watchQuery) === null || _b === void 0 ? void 0 : _b.fetchPolicy) ||
            "cache-first");
    };
    InternalState.prototype.onCompleted = function (data) { };
    InternalState.prototype.onError = function (error) { };
    InternalState.prototype.useObservableQuery = function () {
        var obsQuery = this.observable =
            this.renderPromises
                && this.renderPromises.getSSRObservable(this.watchQueryOptions)
                || this.observable
                || this.client.watchQuery(this.getObsQueryOptions());
        this.obsQueryFields = React.useMemo(function () { return ({
            refetch: obsQuery.refetch.bind(obsQuery),
            reobserve: obsQuery.reobserve.bind(obsQuery),
            fetchMore: obsQuery.fetchMore.bind(obsQuery),
            updateQuery: obsQuery.updateQuery.bind(obsQuery),
            startPolling: obsQuery.startPolling.bind(obsQuery),
            stopPolling: obsQuery.stopPolling.bind(obsQuery),
            subscribeToMore: obsQuery.subscribeToMore.bind(obsQuery),
        }); }, [obsQuery]);
        var ssrAllowed = !(this.queryHookOptions.ssr === false ||
            this.queryHookOptions.skip);
        if (this.renderPromises && ssrAllowed) {
            this.renderPromises.registerSSRObservable(obsQuery);
            if (obsQuery.getCurrentResult().loading) {
                this.renderPromises.addObservableQueryPromise(obsQuery);
            }
        }
        return obsQuery;
    };
    InternalState.prototype.setResult = function (nextResult) {
        var previousResult = this.result;
        if (previousResult && previousResult.data) {
            this.previousData = previousResult.data;
        }
        this.result = nextResult;
        this.forceUpdate();
        this.handleErrorOrCompleted(nextResult);
    };
    InternalState.prototype.handleErrorOrCompleted = function (result) {
        var _this = this;
        if (!result.loading) {
            var error_1 = this.toApolloError(result);
            Promise.resolve().then(function () {
                if (error_1) {
                    _this.onError(error_1);
                }
                else if (result.data) {
                    _this.onCompleted(result.data);
                }
            }).catch(function (error) {
                __DEV__ && globals.invariant.warn(error);
            });
        }
    };
    InternalState.prototype.toApolloError = function (result) {
        return utilities.isNonEmptyArray(result.errors)
            ? new errors.ApolloError({ graphQLErrors: result.errors })
            : result.error;
    };
    InternalState.prototype.getCurrentResult = function () {
        if (!this.result) {
            this.handleErrorOrCompleted(this.result = this.observable.getCurrentResult());
        }
        return this.result;
    };
    InternalState.prototype.toQueryResult = function (result) {
        var queryResult = this.toQueryResultCache.get(result);
        if (queryResult)
            return queryResult;
        var data = result.data; result.partial; var resultWithoutPartial = tslib.__rest(result, ["data", "partial"]);
        this.toQueryResultCache.set(result, queryResult = tslib.__assign(tslib.__assign(tslib.__assign({ data: data }, resultWithoutPartial), this.obsQueryFields), { client: this.client, observable: this.observable, variables: this.observable.variables, called: !this.queryHookOptions.skip, previousData: this.previousData }));
        if (!queryResult.error && utilities.isNonEmptyArray(result.errors)) {
            queryResult.error = new errors.ApolloError({ graphQLErrors: result.errors });
        }
        return queryResult;
    };
    InternalState.prototype.unsafeHandlePartialRefetch = function (result) {
        if (result.partial &&
            this.queryHookOptions.partialRefetch &&
            !result.loading &&
            (!result.data || Object.keys(result.data).length === 0) &&
            this.observable.options.fetchPolicy !== 'cache-only') {
            Object.assign(result, {
                loading: true,
                networkStatus: core.NetworkStatus.refetch,
            });
            this.observable.refetch();
        }
    };
    return InternalState;
}());

var EAGER_METHODS = [
    'refetch',
    'reobserve',
    'fetchMore',
    'updateQuery',
    'startPolling',
    'subscribeToMore',
];
function useLazyQuery(query, options) {
    var _a;
    var abortControllersRef = React.useRef(new Set());
    var execOptionsRef = React.useRef();
    var merged = execOptionsRef.current ? utilities.mergeOptions(options, execOptionsRef.current) : options;
    var internalState = useInternalState(useApolloClient(options && options.client), (_a = merged === null || merged === void 0 ? void 0 : merged.query) !== null && _a !== void 0 ? _a : query);
    var useQueryResult = internalState.useQuery(tslib.__assign(tslib.__assign({}, merged), { skip: !execOptionsRef.current }));
    var initialFetchPolicy = useQueryResult.observable.options.initialFetchPolicy ||
        internalState.getDefaultFetchPolicy();
    var result = Object.assign(useQueryResult, {
        called: !!execOptionsRef.current,
    });
    var eagerMethods = React.useMemo(function () {
        var eagerMethods = {};
        var _loop_1 = function (key) {
            var method = result[key];
            eagerMethods[key] = function () {
                if (!execOptionsRef.current) {
                    execOptionsRef.current = Object.create(null);
                    internalState.forceUpdate();
                }
                return method.apply(this, arguments);
            };
        };
        for (var _i = 0, EAGER_METHODS_1 = EAGER_METHODS; _i < EAGER_METHODS_1.length; _i++) {
            var key = EAGER_METHODS_1[_i];
            _loop_1(key);
        }
        return eagerMethods;
    }, []);
    Object.assign(result, eagerMethods);
    React.useEffect(function () {
        return function () {
            abortControllersRef.current.forEach(function (controller) {
                controller.abort();
            });
        };
    }, []);
    var execute = React.useCallback(function (executeOptions) {
        var controller = new AbortController();
        abortControllersRef.current.add(controller);
        execOptionsRef.current = executeOptions ? tslib.__assign(tslib.__assign({}, executeOptions), { fetchPolicy: executeOptions.fetchPolicy || initialFetchPolicy }) : {
            fetchPolicy: initialFetchPolicy,
        };
        var promise = internalState
            .asyncUpdate(controller.signal)
            .then(function (queryResult) {
            abortControllersRef.current.delete(controller);
            return Object.assign(queryResult, eagerMethods);
        });
        promise.catch(function () {
            abortControllersRef.current.delete(controller);
        });
        return promise;
    }, []);
    return [execute, result];
}

function useMutation(mutation, options) {
    var client = useApolloClient(options === null || options === void 0 ? void 0 : options.client);
    parser.verifyDocumentType(mutation, parser.DocumentType.Mutation);
    var _a = React.useState({
        called: false,
        loading: false,
        client: client,
    }), result = _a[0], setResult = _a[1];
    var ref = React.useRef({
        result: result,
        mutationId: 0,
        isMounted: true,
        client: client,
        mutation: mutation,
        options: options,
    });
    {
        Object.assign(ref.current, { client: client, options: options, mutation: mutation });
    }
    var execute = React.useCallback(function (executeOptions) {
        if (executeOptions === void 0) { executeOptions = {}; }
        var _a = ref.current, options = _a.options, mutation = _a.mutation;
        var baseOptions = tslib.__assign(tslib.__assign({}, options), { mutation: mutation });
        var client = executeOptions.client || ref.current.client;
        if (!ref.current.result.loading && !baseOptions.ignoreResults && ref.current.isMounted) {
            setResult(ref.current.result = {
                loading: true,
                error: void 0,
                data: void 0,
                called: true,
                client: client,
            });
        }
        var mutationId = ++ref.current.mutationId;
        var clientOptions = core.mergeOptions(baseOptions, executeOptions);
        return client.mutate(clientOptions).then(function (response) {
            var _a;
            var data = response.data, errors$1 = response.errors;
            var error = errors$1 && errors$1.length > 0
                ? new errors.ApolloError({ graphQLErrors: errors$1 })
                : void 0;
            if (mutationId === ref.current.mutationId &&
                !clientOptions.ignoreResults) {
                var result_1 = {
                    called: true,
                    loading: false,
                    data: data,
                    error: error,
                    client: client,
                };
                if (ref.current.isMounted && !equality.equal(ref.current.result, result_1)) {
                    setResult(ref.current.result = result_1);
                }
            }
            var onCompleted = executeOptions.onCompleted || ((_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onCompleted);
            onCompleted === null || onCompleted === void 0 ? void 0 : onCompleted(response.data, clientOptions);
            return response;
        }).catch(function (error) {
            var _a;
            if (mutationId === ref.current.mutationId &&
                ref.current.isMounted) {
                var result_2 = {
                    loading: false,
                    error: error,
                    data: void 0,
                    called: true,
                    client: client,
                };
                if (!equality.equal(ref.current.result, result_2)) {
                    setResult(ref.current.result = result_2);
                }
            }
            var onError = executeOptions.onError || ((_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onError);
            if (onError) {
                onError(error, clientOptions);
                return { data: void 0, errors: error };
            }
            throw error;
        });
    }, []);
    var reset = React.useCallback(function () {
        if (ref.current.isMounted) {
            setResult({ called: false, loading: false, client: client });
        }
    }, []);
    React.useEffect(function () {
        ref.current.isMounted = true;
        return function () {
            ref.current.isMounted = false;
        };
    }, []);
    return [execute, tslib.__assign({ reset: reset }, result)];
}

function useSubscription(subscription, options) {
    var hasIssuedDeprecationWarningRef = React.useRef(false);
    var client = useApolloClient(options === null || options === void 0 ? void 0 : options.client);
    parser.verifyDocumentType(subscription, parser.DocumentType.Subscription);
    var _a = React.useState({
        loading: !(options === null || options === void 0 ? void 0 : options.skip),
        error: void 0,
        data: void 0,
        variables: options === null || options === void 0 ? void 0 : options.variables,
    }), result = _a[0], setResult = _a[1];
    if (!hasIssuedDeprecationWarningRef.current) {
        hasIssuedDeprecationWarningRef.current = true;
        if (options === null || options === void 0 ? void 0 : options.onSubscriptionData) {
            __DEV__ && globals.invariant.warn(options.onData
                ? "'useSubscription' supports only the 'onSubscriptionData' or 'onData' option, but not both. Only the 'onData' option will be used."
                : "'onSubscriptionData' is deprecated and will be removed in a future major version. Please use the 'onData' option instead.");
        }
        if (options === null || options === void 0 ? void 0 : options.onSubscriptionComplete) {
            __DEV__ && globals.invariant.warn(options.onComplete
                ? "'useSubscription' supports only the 'onSubscriptionComplete' or 'onComplete' option, but not both. Only the 'onComplete' option will be used."
                : "'onSubscriptionComplete' is deprecated and will be removed in a future major version. Please use the 'onComplete' option instead.");
        }
    }
    var _b = React.useState(function () {
        if (options === null || options === void 0 ? void 0 : options.skip) {
            return null;
        }
        return client.subscribe({
            query: subscription,
            variables: options === null || options === void 0 ? void 0 : options.variables,
            fetchPolicy: options === null || options === void 0 ? void 0 : options.fetchPolicy,
            context: options === null || options === void 0 ? void 0 : options.context,
        });
    }), observable = _b[0], setObservable = _b[1];
    var canResetObservableRef = React.useRef(false);
    React.useEffect(function () {
        return function () {
            canResetObservableRef.current = true;
        };
    }, []);
    var ref = React.useRef({ client: client, subscription: subscription, options: options });
    React.useEffect(function () {
        var _a, _b, _c, _d;
        var shouldResubscribe = options === null || options === void 0 ? void 0 : options.shouldResubscribe;
        if (typeof shouldResubscribe === 'function') {
            shouldResubscribe = !!shouldResubscribe(options);
        }
        if (options === null || options === void 0 ? void 0 : options.skip) {
            if (!(options === null || options === void 0 ? void 0 : options.skip) !== !((_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.skip) || canResetObservableRef.current) {
                setResult({
                    loading: false,
                    data: void 0,
                    error: void 0,
                    variables: options === null || options === void 0 ? void 0 : options.variables,
                });
                setObservable(null);
                canResetObservableRef.current = false;
            }
        }
        else if ((shouldResubscribe !== false &&
            (client !== ref.current.client ||
                subscription !== ref.current.subscription ||
                (options === null || options === void 0 ? void 0 : options.fetchPolicy) !== ((_b = ref.current.options) === null || _b === void 0 ? void 0 : _b.fetchPolicy) ||
                !(options === null || options === void 0 ? void 0 : options.skip) !== !((_c = ref.current.options) === null || _c === void 0 ? void 0 : _c.skip) ||
                !equality.equal(options === null || options === void 0 ? void 0 : options.variables, (_d = ref.current.options) === null || _d === void 0 ? void 0 : _d.variables))) ||
            canResetObservableRef.current) {
            setResult({
                loading: true,
                data: void 0,
                error: void 0,
                variables: options === null || options === void 0 ? void 0 : options.variables,
            });
            setObservable(client.subscribe({
                query: subscription,
                variables: options === null || options === void 0 ? void 0 : options.variables,
                fetchPolicy: options === null || options === void 0 ? void 0 : options.fetchPolicy,
                context: options === null || options === void 0 ? void 0 : options.context,
            }));
            canResetObservableRef.current = false;
        }
        Object.assign(ref.current, { client: client, subscription: subscription, options: options });
    }, [client, subscription, options, canResetObservableRef.current]);
    React.useEffect(function () {
        if (!observable) {
            return;
        }
        var subscription = observable.subscribe({
            next: function (fetchResult) {
                var _a, _b;
                var result = {
                    loading: false,
                    data: fetchResult.data,
                    error: void 0,
                    variables: options === null || options === void 0 ? void 0 : options.variables,
                };
                setResult(result);
                if ((_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onData) {
                    ref.current.options.onData({
                        client: client,
                        data: result
                    });
                }
                else if ((_b = ref.current.options) === null || _b === void 0 ? void 0 : _b.onSubscriptionData) {
                    ref.current.options.onSubscriptionData({
                        client: client,
                        subscriptionData: result
                    });
                }
            },
            error: function (error) {
                var _a, _b;
                setResult({
                    loading: false,
                    data: void 0,
                    error: error,
                    variables: options === null || options === void 0 ? void 0 : options.variables,
                });
                (_b = (_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onError) === null || _b === void 0 ? void 0 : _b.call(_a, error);
            },
            complete: function () {
                var _a, _b;
                if ((_a = ref.current.options) === null || _a === void 0 ? void 0 : _a.onComplete) {
                    ref.current.options.onComplete();
                }
                else if ((_b = ref.current.options) === null || _b === void 0 ? void 0 : _b.onSubscriptionComplete) {
                    ref.current.options.onSubscriptionComplete();
                }
            },
        });
        return function () {
            subscription.unsubscribe();
        };
    }, [observable]);
    return result;
}

function useReactiveVar(rv) {
    var value = rv();
    var setValue = React.useState(value)[1];
    React.useEffect(function () {
        var probablySameValue = rv();
        if (value !== probablySameValue) {
            setValue(probablySameValue);
        }
        else {
            return rv.onNextChange(setValue);
        }
    }, [value]);
    return value;
}

function useFragment_experimental(options) {
    var cache = useApolloClient().cache;
    var fragment = options.fragment, fragmentName = options.fragmentName, from = options.from, _a = options.optimistic, optimistic = _a === void 0 ? true : _a, rest = tslib.__rest(options, ["fragment", "fragmentName", "from", "optimistic"]);
    var diffOptions = tslib.__assign(tslib.__assign({}, rest), { id: typeof from === "string" ? from : cache.identify(from), query: cache["getFragmentDoc"](fragment, fragmentName), optimistic: optimistic });
    var resultRef = React.useRef();
    var latestDiff = cache.diff(diffOptions);
    var getSnapshot = function () {
        var latestDiffToResult = diffToResult(latestDiff);
        return resultRef.current &&
            equality.equal(resultRef.current.data, latestDiffToResult.data)
            ? resultRef.current
            : (resultRef.current = latestDiffToResult);
    };
    return useSyncExternalStore(function (forceUpdate) {
        return cache.watch(tslib.__assign(tslib.__assign({}, diffOptions), { immediate: true, callback: function (diff) {
                if (!equality.equal(diff, latestDiff)) {
                    resultRef.current = diffToResult((latestDiff = diff));
                    forceUpdate();
                }
            } }));
    }, getSnapshot, getSnapshot);
}
function diffToResult(diff) {
    var result = {
        data: diff.result,
        complete: !!diff.complete,
    };
    if (diff.missing) {
        result.missing = utilities.mergeDeepArray(diff.missing.map(function (error) { return error.missing; }));
    }
    return result;
}

exports.useApolloClient = useApolloClient;
exports.useFragment_experimental = useFragment_experimental;
exports.useLazyQuery = useLazyQuery;
exports.useMutation = useMutation;
exports.useQuery = useQuery;
exports.useReactiveVar = useReactiveVar;
exports.useSubscription = useSubscription;
//# sourceMappingURL=hooks.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/parser/parser.cjs":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/react/parser/parser.cjs ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ../../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");

exports.DocumentType = void 0;
(function (DocumentType) {
    DocumentType[DocumentType["Query"] = 0] = "Query";
    DocumentType[DocumentType["Mutation"] = 1] = "Mutation";
    DocumentType[DocumentType["Subscription"] = 2] = "Subscription";
})(exports.DocumentType || (exports.DocumentType = {}));
var cache = new Map();
function operationName(type) {
    var name;
    switch (type) {
        case exports.DocumentType.Query:
            name = 'Query';
            break;
        case exports.DocumentType.Mutation:
            name = 'Mutation';
            break;
        case exports.DocumentType.Subscription:
            name = 'Subscription';
            break;
    }
    return name;
}
function parser(document) {
    var cached = cache.get(document);
    if (cached)
        return cached;
    var variables, type, name;
    __DEV__ ? globals.invariant(!!document && !!document.kind, "Argument of ".concat(document, " passed to parser was not a valid GraphQL ") +
        "DocumentNode. You may need to use 'graphql-tag' or another method " +
        "to convert your operation into a document") : globals.invariant(!!document && !!document.kind, 33);
    var fragments = [];
    var queries = [];
    var mutations = [];
    var subscriptions = [];
    for (var _i = 0, _a = document.definitions; _i < _a.length; _i++) {
        var x = _a[_i];
        if (x.kind === 'FragmentDefinition') {
            fragments.push(x);
            continue;
        }
        if (x.kind === 'OperationDefinition') {
            switch (x.operation) {
                case 'query':
                    queries.push(x);
                    break;
                case 'mutation':
                    mutations.push(x);
                    break;
                case 'subscription':
                    subscriptions.push(x);
                    break;
            }
        }
    }
    __DEV__ ? globals.invariant(!fragments.length ||
        (queries.length || mutations.length || subscriptions.length), "Passing only a fragment to 'graphql' is not yet supported. " +
        "You must include a query, subscription or mutation as well") : globals.invariant(!fragments.length ||
        (queries.length || mutations.length || subscriptions.length), 34);
    __DEV__ ? globals.invariant(queries.length + mutations.length + subscriptions.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " +
        "".concat(document, " had ").concat(queries.length, " queries, ").concat(subscriptions.length, " ") +
        "subscriptions and ".concat(mutations.length, " mutations. ") +
        "You can use 'compose' to join multiple operation types to a component") : globals.invariant(queries.length + mutations.length + subscriptions.length <= 1, 35);
    type = queries.length ? exports.DocumentType.Query : exports.DocumentType.Mutation;
    if (!queries.length && !mutations.length)
        type = exports.DocumentType.Subscription;
    var definitions = queries.length
        ? queries
        : mutations.length
            ? mutations
            : subscriptions;
    __DEV__ ? globals.invariant(definitions.length === 1, "react-apollo only supports one definition per HOC. ".concat(document, " had ") +
        "".concat(definitions.length, " definitions. ") +
        "You can use 'compose' to join multiple operation types to a component") : globals.invariant(definitions.length === 1, 36);
    var definition = definitions[0];
    variables = definition.variableDefinitions || [];
    if (definition.name && definition.name.kind === 'Name') {
        name = definition.name.value;
    }
    else {
        name = 'data';
    }
    var payload = { name: name, type: type, variables: variables };
    cache.set(document, payload);
    return payload;
}
function verifyDocumentType(document, type) {
    var operation = parser(document);
    var requiredOperationName = operationName(type);
    var usedOperationName = operationName(operation.type);
    __DEV__ ? globals.invariant(operation.type === type, "Running a ".concat(requiredOperationName, " requires a graphql ") +
        "".concat(requiredOperationName, ", but a ").concat(usedOperationName, " was used instead.")) : globals.invariant(operation.type === type, 37);
}

exports.operationName = operationName;
exports.parser = parser;
exports.verifyDocumentType = verifyDocumentType;
//# sourceMappingURL=parser.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/react/react.cjs":
/*!*****************************************************!*\
  !*** ./node_modules/@apollo/client/react/react.cjs ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

__webpack_require__(/*! ../utilities/globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var context = __webpack_require__(/*! ./context */ "./node_modules/@apollo/client/react/context/context.cjs");
var hooks = __webpack_require__(/*! ./hooks */ "./node_modules/@apollo/client/react/hooks/hooks.cjs");
var parser = __webpack_require__(/*! ./parser */ "./node_modules/@apollo/client/react/parser/parser.cjs");



exports.ApolloConsumer = context.ApolloConsumer;
exports.ApolloProvider = context.ApolloProvider;
exports.getApolloContext = context.getApolloContext;
exports.resetApolloContext = context.resetApolloContext;
exports.DocumentType = parser.DocumentType;
exports.operationName = parser.operationName;
exports.parser = parser.parser;
for (var k in hooks) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) exports[k] = hooks[k];
}
//# sourceMappingURL=react.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/utilities/globals/globals.cjs":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/globals/globals.cjs ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var tsInvariant = __webpack_require__(/*! ts-invariant */ "./node_modules/@apollo/client/node_modules/ts-invariant/lib/invariant.cjs");
var process$1 = __webpack_require__(/*! ts-invariant/process */ "./node_modules/@apollo/client/node_modules/ts-invariant/process/main.cjs");
var graphql = __webpack_require__(/*! graphql */ "graphql");

function maybe(thunk) {
    try {
        return thunk();
    }
    catch (_a) { }
}

var global$1 = (maybe(function () { return globalThis; }) ||
    maybe(function () { return window; }) ||
    maybe(function () { return self; }) ||
    maybe(function () { return global; }) ||
    maybe(function () { return maybe.constructor("return this")(); }));

var __ = "__";
var GLOBAL_KEY = [__, __].join("DEV");
function getDEV() {
    try {
        return Boolean(__DEV__);
    }
    catch (_a) {
        Object.defineProperty(global$1, GLOBAL_KEY, {
            value: maybe(function () { return "development"; }) !== "production",
            enumerable: false,
            configurable: true,
            writable: true,
        });
        return global$1[GLOBAL_KEY];
    }
}
var DEV = getDEV();

function removeTemporaryGlobals() {
    return typeof graphql.Source === "function" ? process$1.remove() : process$1.remove();
}

function checkDEV() {
    __DEV__ ? tsInvariant.invariant("boolean" === typeof DEV, DEV) : tsInvariant.invariant("boolean" === typeof DEV, 39);
}
removeTemporaryGlobals();
checkDEV();

exports.InvariantError = tsInvariant.InvariantError;
exports.invariant = tsInvariant.invariant;
exports.DEV = DEV;
exports.checkDEV = checkDEV;
exports.global = global$1;
exports.maybe = maybe;
//# sourceMappingURL=globals.cjs.map


/***/ }),

/***/ "./node_modules/@apollo/client/utilities/utilities.cjs":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/utilities.cjs ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var globals = __webpack_require__(/*! ./globals */ "./node_modules/@apollo/client/utilities/globals/globals.cjs");
var graphql = __webpack_require__(/*! graphql */ "graphql");
var tslib = __webpack_require__(/*! tslib */ "./node_modules/@apollo/client/node_modules/tslib/tslib.js");
var zenObservableTs = __webpack_require__(/*! zen-observable-ts */ "./node_modules/@apollo/client/node_modules/zen-observable-ts/index.cjs");
__webpack_require__(/*! symbol-observable */ "./node_modules/@apollo/client/node_modules/symbol-observable/lib/index.js");

function shouldInclude(_a, variables) {
    var directives = _a.directives;
    if (!directives || !directives.length) {
        return true;
    }
    return getInclusionDirectives(directives).every(function (_a) {
        var directive = _a.directive, ifArgument = _a.ifArgument;
        var evaledValue = false;
        if (ifArgument.value.kind === 'Variable') {
            evaledValue = variables && variables[ifArgument.value.name.value];
            __DEV__ ? globals.invariant(evaledValue !== void 0, "Invalid variable referenced in @".concat(directive.name.value, " directive.")) : globals.invariant(evaledValue !== void 0, 40);
        }
        else {
            evaledValue = ifArgument.value.value;
        }
        return directive.name.value === 'skip' ? !evaledValue : evaledValue;
    });
}
function getDirectiveNames(root) {
    var names = [];
    graphql.visit(root, {
        Directive: function (node) {
            names.push(node.name.value);
        },
    });
    return names;
}
var hasAnyDirectives = function (names, root) { return hasDirectives(names, root, false); };
var hasAllDirectives = function (names, root) { return hasDirectives(names, root, true); };
function hasDirectives(names, root, all) {
    var nameSet = new Set(names);
    var uniqueCount = nameSet.size;
    graphql.visit(root, {
        Directive: function (node) {
            if (nameSet.delete(node.name.value) &&
                (!all || !nameSet.size)) {
                return graphql.BREAK;
            }
        },
    });
    return all ? !nameSet.size : nameSet.size < uniqueCount;
}
function hasClientExports(document) {
    return document && hasDirectives(['client', 'export'], document, true);
}
function isInclusionDirective(_a) {
    var value = _a.name.value;
    return value === 'skip' || value === 'include';
}
function getInclusionDirectives(directives) {
    var result = [];
    if (directives && directives.length) {
        directives.forEach(function (directive) {
            if (!isInclusionDirective(directive))
                return;
            var directiveArguments = directive.arguments;
            var directiveName = directive.name.value;
            __DEV__ ? globals.invariant(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @".concat(directiveName, " directive.")) : globals.invariant(directiveArguments && directiveArguments.length === 1, 41);
            var ifArgument = directiveArguments[0];
            __DEV__ ? globals.invariant(ifArgument.name && ifArgument.name.value === 'if', "Invalid argument for the @".concat(directiveName, " directive.")) : globals.invariant(ifArgument.name && ifArgument.name.value === 'if', 42);
            var ifValue = ifArgument.value;
            __DEV__ ? globals.invariant(ifValue &&
                (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), "Argument for the @".concat(directiveName, " directive must be a variable or a boolean value.")) : globals.invariant(ifValue &&
                (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), 43);
            result.push({ directive: directive, ifArgument: ifArgument });
        });
    }
    return result;
}

function getFragmentQueryDocument(document, fragmentName) {
    var actualFragmentName = fragmentName;
    var fragments = [];
    document.definitions.forEach(function (definition) {
        if (definition.kind === 'OperationDefinition') {
            throw __DEV__ ? new globals.InvariantError("Found a ".concat(definition.operation, " operation").concat(definition.name ? " named '".concat(definition.name.value, "'") : '', ". ") +
                'No operations are allowed when using a fragment as a query. Only fragments are allowed.') : new globals.InvariantError(44);
        }
        if (definition.kind === 'FragmentDefinition') {
            fragments.push(definition);
        }
    });
    if (typeof actualFragmentName === 'undefined') {
        __DEV__ ? globals.invariant(fragments.length === 1, "Found ".concat(fragments.length, " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.")) : globals.invariant(fragments.length === 1, 45);
        actualFragmentName = fragments[0].name.value;
    }
    var query = tslib.__assign(tslib.__assign({}, document), { definitions: tslib.__spreadArray([
            {
                kind: 'OperationDefinition',
                operation: 'query',
                selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                        {
                            kind: 'FragmentSpread',
                            name: {
                                kind: 'Name',
                                value: actualFragmentName,
                            },
                        },
                    ],
                },
            }
        ], document.definitions, true) });
    return query;
}
function createFragmentMap(fragments) {
    if (fragments === void 0) { fragments = []; }
    var symTable = {};
    fragments.forEach(function (fragment) {
        symTable[fragment.name.value] = fragment;
    });
    return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
    switch (selection.kind) {
        case 'InlineFragment':
            return selection;
        case 'FragmentSpread': {
            var fragmentName = selection.name.value;
            if (typeof fragmentMap === "function") {
                return fragmentMap(fragmentName);
            }
            var fragment = fragmentMap && fragmentMap[fragmentName];
            __DEV__ ? globals.invariant(fragment, "No fragment named ".concat(fragmentName)) : globals.invariant(fragment, 46);
            return fragment || null;
        }
        default:
            return null;
    }
}

function isNonNullObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function makeReference(id) {
    return { __ref: String(id) };
}
function isReference(obj) {
    return Boolean(obj && typeof obj === 'object' && typeof obj.__ref === 'string');
}
function isDocumentNode(value) {
    return (isNonNullObject(value) &&
        value.kind === "Document" &&
        Array.isArray(value.definitions));
}
function isStringValue(value) {
    return value.kind === 'StringValue';
}
function isBooleanValue(value) {
    return value.kind === 'BooleanValue';
}
function isIntValue(value) {
    return value.kind === 'IntValue';
}
function isFloatValue(value) {
    return value.kind === 'FloatValue';
}
function isVariable(value) {
    return value.kind === 'Variable';
}
function isObjectValue(value) {
    return value.kind === 'ObjectValue';
}
function isListValue(value) {
    return value.kind === 'ListValue';
}
function isEnumValue(value) {
    return value.kind === 'EnumValue';
}
function isNullValue(value) {
    return value.kind === 'NullValue';
}
function valueToObjectRepresentation(argObj, name, value, variables) {
    if (isIntValue(value) || isFloatValue(value)) {
        argObj[name.value] = Number(value.value);
    }
    else if (isBooleanValue(value) || isStringValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isObjectValue(value)) {
        var nestedArgObj_1 = {};
        value.fields.map(function (obj) {
            return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
        });
        argObj[name.value] = nestedArgObj_1;
    }
    else if (isVariable(value)) {
        var variableValue = (variables || {})[value.name.value];
        argObj[name.value] = variableValue;
    }
    else if (isListValue(value)) {
        argObj[name.value] = value.values.map(function (listValue) {
            var nestedArgArrayObj = {};
            valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
            return nestedArgArrayObj[name.value];
        });
    }
    else if (isEnumValue(value)) {
        argObj[name.value] = value.value;
    }
    else if (isNullValue(value)) {
        argObj[name.value] = null;
    }
    else {
        throw __DEV__ ? new globals.InvariantError("The inline argument \"".concat(name.value, "\" of kind \"").concat(value.kind, "\"") +
            'is not supported. Use variables instead of inline arguments to ' +
            'overcome this limitation.') : new globals.InvariantError(55);
    }
}
function storeKeyNameFromField(field, variables) {
    var directivesObj = null;
    if (field.directives) {
        directivesObj = {};
        field.directives.forEach(function (directive) {
            directivesObj[directive.name.value] = {};
            if (directive.arguments) {
                directive.arguments.forEach(function (_a) {
                    var name = _a.name, value = _a.value;
                    return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
                });
            }
        });
    }
    var argObj = null;
    if (field.arguments && field.arguments.length) {
        argObj = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj, name, value, variables);
        });
    }
    return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = [
    'connection',
    'include',
    'skip',
    'client',
    'rest',
    'export',
];
var getStoreKeyName = Object.assign(function (fieldName, args, directives) {
    if (args &&
        directives &&
        directives['connection'] &&
        directives['connection']['key']) {
        if (directives['connection']['filter'] &&
            directives['connection']['filter'].length > 0) {
            var filterKeys = directives['connection']['filter']
                ? directives['connection']['filter']
                : [];
            filterKeys.sort();
            var filteredArgs_1 = {};
            filterKeys.forEach(function (key) {
                filteredArgs_1[key] = args[key];
            });
            return "".concat(directives['connection']['key'], "(").concat(stringify(filteredArgs_1), ")");
        }
        else {
            return directives['connection']['key'];
        }
    }
    var completeFieldName = fieldName;
    if (args) {
        var stringifiedArgs = stringify(args);
        completeFieldName += "(".concat(stringifiedArgs, ")");
    }
    if (directives) {
        Object.keys(directives).forEach(function (key) {
            if (KNOWN_DIRECTIVES.indexOf(key) !== -1)
                return;
            if (directives[key] && Object.keys(directives[key]).length) {
                completeFieldName += "@".concat(key, "(").concat(stringify(directives[key]), ")");
            }
            else {
                completeFieldName += "@".concat(key);
            }
        });
    }
    return completeFieldName;
}, {
    setStringify: function (s) {
        var previous = stringify;
        stringify = s;
        return previous;
    },
});
var stringify = function defaultStringify(value) {
    return JSON.stringify(value, stringifyReplacer);
};
function stringifyReplacer(_key, value) {
    if (isNonNullObject(value) && !Array.isArray(value)) {
        value = Object.keys(value).sort().reduce(function (copy, key) {
            copy[key] = value[key];
            return copy;
        }, {});
    }
    return value;
}
function argumentsObjectFromField(field, variables) {
    if (field.arguments && field.arguments.length) {
        var argObj_1 = {};
        field.arguments.forEach(function (_a) {
            var name = _a.name, value = _a.value;
            return valueToObjectRepresentation(argObj_1, name, value, variables);
        });
        return argObj_1;
    }
    return null;
}
function resultKeyNameFromField(field) {
    return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result, selectionSet, fragmentMap) {
    if (typeof result.__typename === 'string') {
        return result.__typename;
    }
    for (var _i = 0, _a = selectionSet.selections; _i < _a.length; _i++) {
        var selection = _a[_i];
        if (isField(selection)) {
            if (selection.name.value === '__typename') {
                return result[resultKeyNameFromField(selection)];
            }
        }
        else {
            var typename = getTypenameFromResult(result, getFragmentFromSelection(selection, fragmentMap).selectionSet, fragmentMap);
            if (typeof typename === 'string') {
                return typename;
            }
        }
    }
}
function isField(selection) {
    return selection.kind === 'Field';
}
function isInlineFragment(selection) {
    return selection.kind === 'InlineFragment';
}

function checkDocument(doc) {
    __DEV__ ? globals.invariant(doc && doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql") : globals.invariant(doc && doc.kind === 'Document', 47);
    var operations = doc.definitions
        .filter(function (d) { return d.kind !== 'FragmentDefinition'; })
        .map(function (definition) {
        if (definition.kind !== 'OperationDefinition') {
            throw __DEV__ ? new globals.InvariantError("Schema type definitions not allowed in queries. Found: \"".concat(definition.kind, "\"")) : new globals.InvariantError(48);
        }
        return definition;
    });
    __DEV__ ? globals.invariant(operations.length <= 1, "Ambiguous GraphQL document: contains ".concat(operations.length, " operations")) : globals.invariant(operations.length <= 1, 49);
    return doc;
}
function getOperationDefinition(doc) {
    checkDocument(doc);
    return doc.definitions.filter(function (definition) {
        return definition.kind === 'OperationDefinition';
    })[0];
}
function getOperationName(doc) {
    return (doc.definitions
        .filter(function (definition) {
        return definition.kind === 'OperationDefinition' && !!definition.name;
    })
        .map(function (x) { return x.name.value; })[0] || null);
}
function getFragmentDefinitions(doc) {
    return doc.definitions.filter(function (definition) {
        return definition.kind === 'FragmentDefinition';
    });
}
function getQueryDefinition(doc) {
    var queryDef = getOperationDefinition(doc);
    __DEV__ ? globals.invariant(queryDef && queryDef.operation === 'query', 'Must contain a query definition.') : globals.invariant(queryDef && queryDef.operation === 'query', 50);
    return queryDef;
}
function getFragmentDefinition(doc) {
    __DEV__ ? globals.invariant(doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql") : globals.invariant(doc.kind === 'Document', 51);
    __DEV__ ? globals.invariant(doc.definitions.length <= 1, 'Fragment must have exactly one definition.') : globals.invariant(doc.definitions.length <= 1, 52);
    var fragmentDef = doc.definitions[0];
    __DEV__ ? globals.invariant(fragmentDef.kind === 'FragmentDefinition', 'Must be a fragment definition.') : globals.invariant(fragmentDef.kind === 'FragmentDefinition', 53);
    return fragmentDef;
}
function getMainDefinition(queryDoc) {
    checkDocument(queryDoc);
    var fragmentDefinition;
    for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
        var definition = _a[_i];
        if (definition.kind === 'OperationDefinition') {
            var operation = definition.operation;
            if (operation === 'query' ||
                operation === 'mutation' ||
                operation === 'subscription') {
                return definition;
            }
        }
        if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
            fragmentDefinition = definition;
        }
    }
    if (fragmentDefinition) {
        return fragmentDefinition;
    }
    throw __DEV__ ? new globals.InvariantError('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.') : new globals.InvariantError(54);
}
function getDefaultValues(definition) {
    var defaultValues = Object.create(null);
    var defs = definition && definition.variableDefinitions;
    if (defs && defs.length) {
        defs.forEach(function (def) {
            if (def.defaultValue) {
                valueToObjectRepresentation(defaultValues, def.variable.name, def.defaultValue);
            }
        });
    }
    return defaultValues;
}

var isArray = Array.isArray;
function isNonEmptyArray(value) {
    return Array.isArray(value) && value.length > 0;
}

var TYPENAME_FIELD = {
    kind: graphql.Kind.FIELD,
    name: {
        kind: graphql.Kind.NAME,
        value: '__typename',
    },
};
function isEmpty(op, fragmentMap) {
    return !op || op.selectionSet.selections.every(function (selection) { return selection.kind === graphql.Kind.FRAGMENT_SPREAD &&
        isEmpty(fragmentMap[selection.name.value], fragmentMap); });
}
function nullIfDocIsEmpty(doc) {
    return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc)))
        ? null
        : doc;
}
function getDirectiveMatcher(directives) {
    var nameSet = new Set();
    var tests = [];
    directives.forEach(function (directive) {
        if (directive.name) {
            nameSet.add(directive.name);
        }
        else if (directive.test) {
            tests.push(directive.test);
        }
    });
    return function (directive) { return (nameSet.has(directive.name.value) ||
        tests.some(function (test) { return test(directive); })); };
}
function makeInUseGetterFunction(defaultKey) {
    var map = new Map();
    return function inUseGetterFunction(key) {
        if (key === void 0) { key = defaultKey; }
        var inUse = map.get(key);
        if (!inUse) {
            map.set(key, inUse = {
                variables: new Set,
                fragmentSpreads: new Set,
            });
        }
        return inUse;
    };
}
function removeDirectivesFromDocument(directives, doc) {
    var getInUseByOperationName = makeInUseGetterFunction("");
    var getInUseByFragmentName = makeInUseGetterFunction("");
    var getInUse = function (ancestors) {
        for (var p = 0, ancestor = void 0; p < ancestors.length && (ancestor = ancestors[p]); ++p) {
            if (isArray(ancestor))
                continue;
            if (ancestor.kind === graphql.Kind.OPERATION_DEFINITION) {
                return getInUseByOperationName(ancestor.name && ancestor.name.value);
            }
            if (ancestor.kind === graphql.Kind.FRAGMENT_DEFINITION) {
                return getInUseByFragmentName(ancestor.name.value);
            }
        }
        __DEV__ && globals.invariant.error("Could not find operation or fragment");
        return null;
    };
    var operationCount = 0;
    for (var i = doc.definitions.length - 1; i >= 0; --i) {
        if (doc.definitions[i].kind === graphql.Kind.OPERATION_DEFINITION) {
            ++operationCount;
        }
    }
    var directiveMatcher = getDirectiveMatcher(directives);
    var hasRemoveDirective = directives.some(function (directive) { return directive.remove; });
    var shouldRemoveField = function (nodeDirectives) { return (hasRemoveDirective &&
        nodeDirectives &&
        nodeDirectives.some(directiveMatcher)); };
    var originalFragmentDefsByPath = new Map();
    var firstVisitMadeChanges = false;
    var fieldOrInlineFragmentVisitor = {
        enter: function (node) {
            if (shouldRemoveField(node.directives)) {
                firstVisitMadeChanges = true;
                return null;
            }
        },
    };
    var docWithoutDirectiveSubtrees = graphql.visit(doc, {
        Field: fieldOrInlineFragmentVisitor,
        InlineFragment: fieldOrInlineFragmentVisitor,
        VariableDefinition: {
            enter: function () {
                return false;
            },
        },
        Variable: {
            enter: function (node, _key, _parent, _path, ancestors) {
                var inUse = getInUse(ancestors);
                if (inUse) {
                    inUse.variables.add(node.name.value);
                }
            },
        },
        FragmentSpread: {
            enter: function (node, _key, _parent, _path, ancestors) {
                if (shouldRemoveField(node.directives)) {
                    firstVisitMadeChanges = true;
                    return null;
                }
                var inUse = getInUse(ancestors);
                if (inUse) {
                    inUse.fragmentSpreads.add(node.name.value);
                }
            },
        },
        FragmentDefinition: {
            enter: function (node, _key, _parent, path) {
                originalFragmentDefsByPath.set(JSON.stringify(path), node);
            },
            leave: function (node, _key, _parent, path) {
                var originalNode = originalFragmentDefsByPath.get(JSON.stringify(path));
                if (node === originalNode) {
                    return node;
                }
                if (operationCount > 0 &&
                    node.selectionSet.selections.every(function (selection) { return (selection.kind === graphql.Kind.FIELD &&
                        selection.name.value === '__typename'); })) {
                    getInUseByFragmentName(node.name.value).removed = true;
                    firstVisitMadeChanges = true;
                    return null;
                }
            },
        },
        Directive: {
            leave: function (node) {
                if (directiveMatcher(node)) {
                    firstVisitMadeChanges = true;
                    return null;
                }
            },
        },
    });
    if (!firstVisitMadeChanges) {
        return doc;
    }
    var populateTransitiveVars = function (inUse) {
        if (!inUse.transitiveVars) {
            inUse.transitiveVars = new Set(inUse.variables);
            if (!inUse.removed) {
                inUse.fragmentSpreads.forEach(function (childFragmentName) {
                    populateTransitiveVars(getInUseByFragmentName(childFragmentName)).transitiveVars.forEach(function (varName) {
                        inUse.transitiveVars.add(varName);
                    });
                });
            }
        }
        return inUse;
    };
    var allFragmentNamesUsed = new Set();
    docWithoutDirectiveSubtrees.definitions.forEach(function (def) {
        if (def.kind === graphql.Kind.OPERATION_DEFINITION) {
            populateTransitiveVars(getInUseByOperationName(def.name && def.name.value)).fragmentSpreads.forEach(function (childFragmentName) {
                allFragmentNamesUsed.add(childFragmentName);
            });
        }
        else if (def.kind === graphql.Kind.FRAGMENT_DEFINITION &&
            operationCount === 0 &&
            !getInUseByFragmentName(def.name.value).removed) {
            allFragmentNamesUsed.add(def.name.value);
        }
    });
    allFragmentNamesUsed.forEach(function (fragmentName) {
        populateTransitiveVars(getInUseByFragmentName(fragmentName)).fragmentSpreads.forEach(function (childFragmentName) {
            allFragmentNamesUsed.add(childFragmentName);
        });
    });
    var fragmentWillBeRemoved = function (fragmentName) { return !!(!allFragmentNamesUsed.has(fragmentName) ||
        getInUseByFragmentName(fragmentName).removed); };
    var enterVisitor = {
        enter: function (node) {
            if (fragmentWillBeRemoved(node.name.value)) {
                return null;
            }
        },
    };
    return nullIfDocIsEmpty(graphql.visit(docWithoutDirectiveSubtrees, {
        FragmentSpread: enterVisitor,
        FragmentDefinition: enterVisitor,
        OperationDefinition: {
            leave: function (node) {
                if (node.variableDefinitions) {
                    var usedVariableNames_1 = populateTransitiveVars(getInUseByOperationName(node.name && node.name.value)).transitiveVars;
                    if (usedVariableNames_1.size < node.variableDefinitions.length) {
                        return tslib.__assign(tslib.__assign({}, node), { variableDefinitions: node.variableDefinitions.filter(function (varDef) { return usedVariableNames_1.has(varDef.variable.name.value); }) });
                    }
                }
            },
        },
    }));
}
var addTypenameToDocument = Object.assign(function (doc) {
    return graphql.visit(doc, {
        SelectionSet: {
            enter: function (node, _key, parent) {
                if (parent &&
                    parent.kind === graphql.Kind.OPERATION_DEFINITION) {
                    return;
                }
                var selections = node.selections;
                if (!selections) {
                    return;
                }
                var skip = selections.some(function (selection) {
                    return (isField(selection) &&
                        (selection.name.value === '__typename' ||
                            selection.name.value.lastIndexOf('__', 0) === 0));
                });
                if (skip) {
                    return;
                }
                var field = parent;
                if (isField(field) &&
                    field.directives &&
                    field.directives.some(function (d) { return d.name.value === 'export'; })) {
                    return;
                }
                return tslib.__assign(tslib.__assign({}, node), { selections: tslib.__spreadArray(tslib.__spreadArray([], selections, true), [TYPENAME_FIELD], false) });
            },
        },
    });
}, {
    added: function (field) {
        return field === TYPENAME_FIELD;
    },
});
var connectionRemoveConfig = {
    test: function (directive) {
        var willRemove = directive.name.value === 'connection';
        if (willRemove) {
            if (!directive.arguments ||
                !directive.arguments.some(function (arg) { return arg.name.value === 'key'; })) {
                __DEV__ && globals.invariant.warn('Removing an @connection directive even though it does not have a key. ' +
                    'You may want to use the key parameter to specify a store key.');
            }
        }
        return willRemove;
    },
};
function removeConnectionDirectiveFromDocument(doc) {
    return removeDirectivesFromDocument([connectionRemoveConfig], checkDocument(doc));
}
function getArgumentMatcher(config) {
    return function argumentMatcher(argument) {
        return config.some(function (aConfig) {
            return argument.value &&
                argument.value.kind === graphql.Kind.VARIABLE &&
                argument.value.name &&
                (aConfig.name === argument.value.name.value ||
                    (aConfig.test && aConfig.test(argument)));
        });
    };
}
function removeArgumentsFromDocument(config, doc) {
    var argMatcher = getArgumentMatcher(config);
    return nullIfDocIsEmpty(graphql.visit(doc, {
        OperationDefinition: {
            enter: function (node) {
                return tslib.__assign(tslib.__assign({}, node), { variableDefinitions: node.variableDefinitions ? node.variableDefinitions.filter(function (varDef) {
                        return !config.some(function (arg) { return arg.name === varDef.variable.name.value; });
                    }) : [] });
            },
        },
        Field: {
            enter: function (node) {
                var shouldRemoveField = config.some(function (argConfig) { return argConfig.remove; });
                if (shouldRemoveField) {
                    var argMatchCount_1 = 0;
                    if (node.arguments) {
                        node.arguments.forEach(function (arg) {
                            if (argMatcher(arg)) {
                                argMatchCount_1 += 1;
                            }
                        });
                    }
                    if (argMatchCount_1 === 1) {
                        return null;
                    }
                }
            },
        },
        Argument: {
            enter: function (node) {
                if (argMatcher(node)) {
                    return null;
                }
            },
        },
    }));
}
function removeFragmentSpreadFromDocument(config, doc) {
    function enter(node) {
        if (config.some(function (def) { return def.name === node.name.value; })) {
            return null;
        }
    }
    return nullIfDocIsEmpty(graphql.visit(doc, {
        FragmentSpread: { enter: enter },
        FragmentDefinition: { enter: enter },
    }));
}
function buildQueryFromSelectionSet(document) {
    var definition = getMainDefinition(document);
    var definitionOperation = definition.operation;
    if (definitionOperation === 'query') {
        return document;
    }
    var modifiedDoc = graphql.visit(document, {
        OperationDefinition: {
            enter: function (node) {
                return tslib.__assign(tslib.__assign({}, node), { operation: 'query' });
            },
        },
    });
    return modifiedDoc;
}
function removeClientSetsFromDocument(document) {
    checkDocument(document);
    var modifiedDoc = removeDirectivesFromDocument([
        {
            test: function (directive) { return directive.name.value === 'client'; },
            remove: true,
        },
    ], document);
    return modifiedDoc;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function mergeDeep() {
    var sources = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
    }
    return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
    var target = sources[0] || {};
    var count = sources.length;
    if (count > 1) {
        var merger = new DeepMerger();
        for (var i = 1; i < count; ++i) {
            target = merger.merge(target, sources[i]);
        }
    }
    return target;
}
var defaultReconciler = function (target, source, property) {
    return this.merge(target[property], source[property]);
};
var DeepMerger = (function () {
    function DeepMerger(reconciler) {
        if (reconciler === void 0) { reconciler = defaultReconciler; }
        this.reconciler = reconciler;
        this.isObject = isNonNullObject;
        this.pastCopies = new Set();
    }
    DeepMerger.prototype.merge = function (target, source) {
        var _this = this;
        var context = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            context[_i - 2] = arguments[_i];
        }
        if (isNonNullObject(source) && isNonNullObject(target)) {
            Object.keys(source).forEach(function (sourceKey) {
                if (hasOwnProperty.call(target, sourceKey)) {
                    var targetValue = target[sourceKey];
                    if (source[sourceKey] !== targetValue) {
                        var result = _this.reconciler.apply(_this, tslib.__spreadArray([target, source, sourceKey], context, false));
                        if (result !== targetValue) {
                            target = _this.shallowCopyForMerge(target);
                            target[sourceKey] = result;
                        }
                    }
                }
                else {
                    target = _this.shallowCopyForMerge(target);
                    target[sourceKey] = source[sourceKey];
                }
            });
            return target;
        }
        return source;
    };
    DeepMerger.prototype.shallowCopyForMerge = function (value) {
        if (isNonNullObject(value)) {
            if (!this.pastCopies.has(value)) {
                if (Array.isArray(value)) {
                    value = value.slice(0);
                }
                else {
                    value = tslib.__assign({ __proto__: Object.getPrototypeOf(value) }, value);
                }
                this.pastCopies.add(value);
            }
        }
        return value;
    };
    return DeepMerger;
}());

function concatPagination(keyArgs) {
    if (keyArgs === void 0) { keyArgs = false; }
    return {
        keyArgs: keyArgs,
        merge: function (existing, incoming) {
            return existing ? tslib.__spreadArray(tslib.__spreadArray([], existing, true), incoming, true) : incoming;
        },
    };
}
function offsetLimitPagination(keyArgs) {
    if (keyArgs === void 0) { keyArgs = false; }
    return {
        keyArgs: keyArgs,
        merge: function (existing, incoming, _a) {
            var args = _a.args;
            var merged = existing ? existing.slice(0) : [];
            if (incoming) {
                if (args) {
                    var _b = args.offset, offset = _b === void 0 ? 0 : _b;
                    for (var i = 0; i < incoming.length; ++i) {
                        merged[offset + i] = incoming[i];
                    }
                }
                else {
                    merged.push.apply(merged, incoming);
                }
            }
            return merged;
        },
    };
}
function relayStylePagination(keyArgs) {
    if (keyArgs === void 0) { keyArgs = false; }
    return {
        keyArgs: keyArgs,
        read: function (existing, _a) {
            var canRead = _a.canRead, readField = _a.readField;
            if (!existing)
                return existing;
            var edges = [];
            var firstEdgeCursor = "";
            var lastEdgeCursor = "";
            existing.edges.forEach(function (edge) {
                if (canRead(readField("node", edge))) {
                    edges.push(edge);
                    if (edge.cursor) {
                        firstEdgeCursor = firstEdgeCursor || edge.cursor || "";
                        lastEdgeCursor = edge.cursor || lastEdgeCursor;
                    }
                }
            });
            var _b = existing.pageInfo || {}, startCursor = _b.startCursor, endCursor = _b.endCursor;
            return tslib.__assign(tslib.__assign({}, getExtras(existing)), { edges: edges, pageInfo: tslib.__assign(tslib.__assign({}, existing.pageInfo), { startCursor: startCursor || firstEdgeCursor, endCursor: endCursor || lastEdgeCursor }) });
        },
        merge: function (existing, incoming, _a) {
            var args = _a.args, isReference = _a.isReference, readField = _a.readField;
            if (!existing) {
                existing = makeEmptyData();
            }
            if (!incoming) {
                return existing;
            }
            var incomingEdges = incoming.edges ? incoming.edges.map(function (edge) {
                if (isReference(edge = tslib.__assign({}, edge))) {
                    edge.cursor = readField("cursor", edge);
                }
                return edge;
            }) : [];
            if (incoming.pageInfo) {
                var pageInfo_1 = incoming.pageInfo;
                var startCursor = pageInfo_1.startCursor, endCursor = pageInfo_1.endCursor;
                var firstEdge = incomingEdges[0];
                var lastEdge = incomingEdges[incomingEdges.length - 1];
                if (firstEdge && startCursor) {
                    firstEdge.cursor = startCursor;
                }
                if (lastEdge && endCursor) {
                    lastEdge.cursor = endCursor;
                }
                var firstCursor = firstEdge && firstEdge.cursor;
                if (firstCursor && !startCursor) {
                    incoming = mergeDeep(incoming, {
                        pageInfo: {
                            startCursor: firstCursor,
                        },
                    });
                }
                var lastCursor = lastEdge && lastEdge.cursor;
                if (lastCursor && !endCursor) {
                    incoming = mergeDeep(incoming, {
                        pageInfo: {
                            endCursor: lastCursor,
                        },
                    });
                }
            }
            var prefix = existing.edges;
            var suffix = [];
            if (args && args.after) {
                var index = prefix.findIndex(function (edge) { return edge.cursor === args.after; });
                if (index >= 0) {
                    prefix = prefix.slice(0, index + 1);
                }
            }
            else if (args && args.before) {
                var index = prefix.findIndex(function (edge) { return edge.cursor === args.before; });
                suffix = index < 0 ? prefix : prefix.slice(index);
                prefix = [];
            }
            else if (incoming.edges) {
                prefix = [];
            }
            var edges = tslib.__spreadArray(tslib.__spreadArray(tslib.__spreadArray([], prefix, true), incomingEdges, true), suffix, true);
            var pageInfo = tslib.__assign(tslib.__assign({}, incoming.pageInfo), existing.pageInfo);
            if (incoming.pageInfo) {
                var _b = incoming.pageInfo, hasPreviousPage = _b.hasPreviousPage, hasNextPage = _b.hasNextPage, startCursor = _b.startCursor, endCursor = _b.endCursor, extras = tslib.__rest(_b, ["hasPreviousPage", "hasNextPage", "startCursor", "endCursor"]);
                Object.assign(pageInfo, extras);
                if (!prefix.length) {
                    if (void 0 !== hasPreviousPage)
                        pageInfo.hasPreviousPage = hasPreviousPage;
                    if (void 0 !== startCursor)
                        pageInfo.startCursor = startCursor;
                }
                if (!suffix.length) {
                    if (void 0 !== hasNextPage)
                        pageInfo.hasNextPage = hasNextPage;
                    if (void 0 !== endCursor)
                        pageInfo.endCursor = endCursor;
                }
            }
            return tslib.__assign(tslib.__assign(tslib.__assign({}, getExtras(existing)), getExtras(incoming)), { edges: edges, pageInfo: pageInfo });
        },
    };
}
var getExtras = function (obj) { return tslib.__rest(obj, notExtras); };
var notExtras = ["edges", "pageInfo"];
function makeEmptyData() {
    return {
        edges: [],
        pageInfo: {
            hasPreviousPage: false,
            hasNextPage: true,
            startCursor: "",
            endCursor: "",
        },
    };
}

var toString = Object.prototype.toString;
function cloneDeep(value) {
    return cloneDeepHelper(value);
}
function cloneDeepHelper(val, seen) {
    switch (toString.call(val)) {
        case "[object Array]": {
            seen = seen || new Map;
            if (seen.has(val))
                return seen.get(val);
            var copy_1 = val.slice(0);
            seen.set(val, copy_1);
            copy_1.forEach(function (child, i) {
                copy_1[i] = cloneDeepHelper(child, seen);
            });
            return copy_1;
        }
        case "[object Object]": {
            seen = seen || new Map;
            if (seen.has(val))
                return seen.get(val);
            var copy_2 = Object.create(Object.getPrototypeOf(val));
            seen.set(val, copy_2);
            Object.keys(val).forEach(function (key) {
                copy_2[key] = cloneDeepHelper(val[key], seen);
            });
            return copy_2;
        }
        default:
            return val;
    }
}

function deepFreeze(value) {
    var workSet = new Set([value]);
    workSet.forEach(function (obj) {
        if (isNonNullObject(obj) && shallowFreeze(obj) === obj) {
            Object.getOwnPropertyNames(obj).forEach(function (name) {
                if (isNonNullObject(obj[name]))
                    workSet.add(obj[name]);
            });
        }
    });
    return value;
}
function shallowFreeze(obj) {
    if (__DEV__ && !Object.isFrozen(obj)) {
        try {
            Object.freeze(obj);
        }
        catch (e) {
            if (e instanceof TypeError)
                return null;
            throw e;
        }
    }
    return obj;
}
function maybeDeepFreeze(obj) {
    if (__DEV__) {
        deepFreeze(obj);
    }
    return obj;
}

function iterateObserversSafely(observers, method, argument) {
    var observersWithMethod = [];
    observers.forEach(function (obs) { return obs[method] && observersWithMethod.push(obs); });
    observersWithMethod.forEach(function (obs) { return obs[method](argument); });
}

function asyncMap(observable, mapFn, catchFn) {
    return new zenObservableTs.Observable(function (observer) {
        var next = observer.next, error = observer.error, complete = observer.complete;
        var activeCallbackCount = 0;
        var completed = false;
        var promiseQueue = {
            then: function (callback) {
                return new Promise(function (resolve) { return resolve(callback()); });
            },
        };
        function makeCallback(examiner, delegate) {
            if (examiner) {
                return function (arg) {
                    ++activeCallbackCount;
                    var both = function () { return examiner(arg); };
                    promiseQueue = promiseQueue.then(both, both).then(function (result) {
                        --activeCallbackCount;
                        next && next.call(observer, result);
                        if (completed) {
                            handler.complete();
                        }
                    }, function (error) {
                        --activeCallbackCount;
                        throw error;
                    }).catch(function (caught) {
                        error && error.call(observer, caught);
                    });
                };
            }
            else {
                return function (arg) { return delegate && delegate.call(observer, arg); };
            }
        }
        var handler = {
            next: makeCallback(mapFn, next),
            error: makeCallback(catchFn, error),
            complete: function () {
                completed = true;
                if (!activeCallbackCount) {
                    complete && complete.call(observer);
                }
            },
        };
        var sub = observable.subscribe(handler);
        return function () { return sub.unsubscribe(); };
    });
}

var canUseWeakMap = typeof WeakMap === 'function' &&
    globals.maybe(function () { return navigator.product; }) !== 'ReactNative';
var canUseWeakSet = typeof WeakSet === 'function';
var canUseSymbol = typeof Symbol === 'function' &&
    typeof Symbol.for === 'function';
var canUseAsyncIteratorSymbol = canUseSymbol && Symbol.asyncIterator;
var canUseDOM = typeof globals.maybe(function () { return window.document.createElement; }) === "function";
var usingJSDOM = globals.maybe(function () { return navigator.userAgent.indexOf("jsdom") >= 0; }) || false;
var canUseLayoutEffect = canUseDOM && !usingJSDOM;

function fixObservableSubclass(subclass) {
    function set(key) {
        Object.defineProperty(subclass, key, { value: zenObservableTs.Observable });
    }
    if (canUseSymbol && Symbol.species) {
        set(Symbol.species);
    }
    set("@@species");
    return subclass;
}

function isPromiseLike(value) {
    return value && typeof value.then === "function";
}
var Concast = (function (_super) {
    tslib.__extends(Concast, _super);
    function Concast(sources) {
        var _this = _super.call(this, function (observer) {
            _this.addObserver(observer);
            return function () { return _this.removeObserver(observer); };
        }) || this;
        _this.observers = new Set();
        _this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
        _this.handlers = {
            next: function (result) {
                if (_this.sub !== null) {
                    _this.latest = ["next", result];
                    _this.notify("next", result);
                    iterateObserversSafely(_this.observers, "next", result);
                }
            },
            error: function (error) {
                var sub = _this.sub;
                if (sub !== null) {
                    if (sub)
                        setTimeout(function () { return sub.unsubscribe(); });
                    _this.sub = null;
                    _this.latest = ["error", error];
                    _this.reject(error);
                    _this.notify("error", error);
                    iterateObserversSafely(_this.observers, "error", error);
                }
            },
            complete: function () {
                var _a = _this, sub = _a.sub, _b = _a.sources, sources = _b === void 0 ? [] : _b;
                if (sub !== null) {
                    var value = sources.shift();
                    if (!value) {
                        if (sub)
                            setTimeout(function () { return sub.unsubscribe(); });
                        _this.sub = null;
                        if (_this.latest &&
                            _this.latest[0] === "next") {
                            _this.resolve(_this.latest[1]);
                        }
                        else {
                            _this.resolve();
                        }
                        _this.notify("complete");
                        iterateObserversSafely(_this.observers, "complete");
                    }
                    else if (isPromiseLike(value)) {
                        value.then(function (obs) { return _this.sub = obs.subscribe(_this.handlers); });
                    }
                    else {
                        _this.sub = value.subscribe(_this.handlers);
                    }
                }
            },
        };
        _this.nextResultListeners = new Set();
        _this.cancel = function (reason) {
            _this.reject(reason);
            _this.sources = [];
            _this.handlers.complete();
        };
        _this.promise.catch(function (_) { });
        if (typeof sources === "function") {
            sources = [new zenObservableTs.Observable(sources)];
        }
        if (isPromiseLike(sources)) {
            sources.then(function (iterable) { return _this.start(iterable); }, _this.handlers.error);
        }
        else {
            _this.start(sources);
        }
        return _this;
    }
    Concast.prototype.start = function (sources) {
        if (this.sub !== void 0)
            return;
        this.sources = Array.from(sources);
        this.handlers.complete();
    };
    Concast.prototype.deliverLastMessage = function (observer) {
        if (this.latest) {
            var nextOrError = this.latest[0];
            var method = observer[nextOrError];
            if (method) {
                method.call(observer, this.latest[1]);
            }
            if (this.sub === null &&
                nextOrError === "next" &&
                observer.complete) {
                observer.complete();
            }
        }
    };
    Concast.prototype.addObserver = function (observer) {
        if (!this.observers.has(observer)) {
            this.deliverLastMessage(observer);
            this.observers.add(observer);
        }
    };
    Concast.prototype.removeObserver = function (observer) {
        if (this.observers.delete(observer) &&
            this.observers.size < 1) {
            this.handlers.complete();
        }
    };
    Concast.prototype.notify = function (method, arg) {
        var nextResultListeners = this.nextResultListeners;
        if (nextResultListeners.size) {
            this.nextResultListeners = new Set;
            nextResultListeners.forEach(function (listener) { return listener(method, arg); });
        }
    };
    Concast.prototype.beforeNext = function (callback) {
        var called = false;
        this.nextResultListeners.add(function (method, arg) {
            if (!called) {
                called = true;
                callback(method, arg);
            }
        });
    };
    return Concast;
}(zenObservableTs.Observable));
fixObservableSubclass(Concast);

function isExecutionPatchIncrementalResult(value) {
    return "incremental" in value;
}

function graphQLResultHasError(result) {
    var errors = getGraphQLErrorsFromResult(result);
    return isNonEmptyArray(errors);
}
function getGraphQLErrorsFromResult(result) {
    var graphQLErrors = isNonEmptyArray(result.errors)
        ? result.errors.slice(0)
        : [];
    if (isExecutionPatchIncrementalResult(result) &&
        isNonEmptyArray(result.incremental)) {
        result.incremental.forEach(function (incrementalResult) {
            if (incrementalResult.errors) {
                graphQLErrors.push.apply(graphQLErrors, incrementalResult.errors);
            }
        });
    }
    return graphQLErrors;
}

function compact() {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    var result = Object.create(null);
    objects.forEach(function (obj) {
        if (!obj)
            return;
        Object.keys(obj).forEach(function (key) {
            var value = obj[key];
            if (value !== void 0) {
                result[key] = value;
            }
        });
    });
    return result;
}

var prefixCounts = new Map();
function makeUniqueId(prefix) {
    var count = prefixCounts.get(prefix) || 1;
    prefixCounts.set(prefix, count + 1);
    return "".concat(prefix, ":").concat(count, ":").concat(Math.random().toString(36).slice(2));
}

function stringifyForDisplay(value) {
    var undefId = makeUniqueId("stringifyForDisplay");
    return JSON.stringify(value, function (key, value) {
        return value === void 0 ? undefId : value;
    }).split(JSON.stringify(undefId)).join("<undefined>");
}

function mergeOptions(defaults, options) {
    return compact(defaults, options, options.variables && {
        variables: tslib.__assign(tslib.__assign({}, (defaults && defaults.variables)), options.variables),
    });
}

exports.DEV = globals.DEV;
exports.maybe = globals.maybe;
exports.Observable = zenObservableTs.Observable;
exports.Concast = Concast;
exports.DeepMerger = DeepMerger;
exports.addTypenameToDocument = addTypenameToDocument;
exports.argumentsObjectFromField = argumentsObjectFromField;
exports.asyncMap = asyncMap;
exports.buildQueryFromSelectionSet = buildQueryFromSelectionSet;
exports.canUseAsyncIteratorSymbol = canUseAsyncIteratorSymbol;
exports.canUseDOM = canUseDOM;
exports.canUseLayoutEffect = canUseLayoutEffect;
exports.canUseSymbol = canUseSymbol;
exports.canUseWeakMap = canUseWeakMap;
exports.canUseWeakSet = canUseWeakSet;
exports.checkDocument = checkDocument;
exports.cloneDeep = cloneDeep;
exports.compact = compact;
exports.concatPagination = concatPagination;
exports.createFragmentMap = createFragmentMap;
exports.fixObservableSubclass = fixObservableSubclass;
exports.getDefaultValues = getDefaultValues;
exports.getDirectiveNames = getDirectiveNames;
exports.getFragmentDefinition = getFragmentDefinition;
exports.getFragmentDefinitions = getFragmentDefinitions;
exports.getFragmentFromSelection = getFragmentFromSelection;
exports.getFragmentQueryDocument = getFragmentQueryDocument;
exports.getGraphQLErrorsFromResult = getGraphQLErrorsFromResult;
exports.getInclusionDirectives = getInclusionDirectives;
exports.getMainDefinition = getMainDefinition;
exports.getOperationDefinition = getOperationDefinition;
exports.getOperationName = getOperationName;
exports.getQueryDefinition = getQueryDefinition;
exports.getStoreKeyName = getStoreKeyName;
exports.getTypenameFromResult = getTypenameFromResult;
exports.graphQLResultHasError = graphQLResultHasError;
exports.hasAllDirectives = hasAllDirectives;
exports.hasAnyDirectives = hasAnyDirectives;
exports.hasClientExports = hasClientExports;
exports.hasDirectives = hasDirectives;
exports.isArray = isArray;
exports.isDocumentNode = isDocumentNode;
exports.isField = isField;
exports.isInlineFragment = isInlineFragment;
exports.isNonEmptyArray = isNonEmptyArray;
exports.isNonNullObject = isNonNullObject;
exports.isReference = isReference;
exports.iterateObserversSafely = iterateObserversSafely;
exports.makeReference = makeReference;
exports.makeUniqueId = makeUniqueId;
exports.maybeDeepFreeze = maybeDeepFreeze;
exports.mergeDeep = mergeDeep;
exports.mergeDeepArray = mergeDeepArray;
exports.mergeOptions = mergeOptions;
exports.offsetLimitPagination = offsetLimitPagination;
exports.relayStylePagination = relayStylePagination;
exports.removeArgumentsFromDocument = removeArgumentsFromDocument;
exports.removeClientSetsFromDocument = removeClientSetsFromDocument;
exports.removeConnectionDirectiveFromDocument = removeConnectionDirectiveFromDocument;
exports.removeDirectivesFromDocument = removeDirectivesFromDocument;
exports.removeFragmentSpreadFromDocument = removeFragmentSpreadFromDocument;
exports.resultKeyNameFromField = resultKeyNameFromField;
exports.shouldInclude = shouldInclude;
exports.storeKeyNameFromField = storeKeyNameFromField;
exports.stringifyForDisplay = stringifyForDisplay;
exports.valueToObjectRepresentation = valueToObjectRepresentation;
//# sourceMappingURL=utilities.cjs.map


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */
function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}
exports.execOnce = execOnce;
function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
exports.getLocationOrigin = getLocationOrigin;
function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}
exports.getURL = getURL;
function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
exports.getDisplayName = getDisplayName;
function isResSent(res) {
  return res.finished || res.headersSent;
}
exports.isResSent = isResSent;
async function loadGetInitialProps(App, ctx) {
  var _a;
  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  }
  // when called from _app `ctx` is nested in `ctx`
  const res = ctx.res || ctx.ctx && ctx.ctx.res;
  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }
    return {};
  }
  const props = await App.getInitialProps(ctx);
  if (res && isResSent(res)) {
    return props;
  }
  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }
  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }
  return props;
}
exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }
  return url_1.format(url, options);
}
exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
exports.AppInitialProps = _utils.AppInitialProps; /**
                                                  * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
                                                  * This allows for keeping state between navigation, custom error handling, injecting additional data.
                                                  */
async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}
class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }
  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, Object.assign({}, pageProps, {
      url: url
    }));
  }
}
exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;
if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal
function Container(p) {
  if (true) warnContainer();
  return p.children;
}
function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },
    get pathname() {
      if (true) warnUrl();
      return pathname;
    },
    get asPath() {
      if (true) warnUrl();
      return asPath;
    },
    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/react-perfect-scrollbar/dist/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/react-perfect-scrollbar/dist/css/styles.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.min.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.min.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/apollo */ "./utils/apollo/index.js");
/* harmony import */ var context_UploadManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! context/UploadManager */ "./context/UploadManager.js");
/* harmony import */ var context_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! context/ThemeProvider */ "./context/ThemeProvider.js");
/* harmony import */ var context_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! context/AppContext */ "./context/AppContext.js");
/* harmony import */ var context_UserContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! context/UserContext */ "./context/UserContext.js");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Layout */ "./components/Layout/index.js");
/* harmony import */ var components_UI_Flag_Flag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/UI/Flag/Flag */ "./components/UI/Flag/Flag.js");
/* harmony import */ var styles_reset__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styles/reset */ "./styles/reset.js");
/* harmony import */ var styles_global__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styles/global */ "./styles/global.js");
/* harmony import */ var styles_fonts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styles/fonts */ "./styles/fonts.js");
/* harmony import */ var styles_progressbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styles/progressbar */ "./styles/progressbar.js");
/* harmony import */ var styles_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styles/flex */ "./styles/flex.js");
/* harmony import */ var styles_toastify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styles/toastify */ "./styles/toastify.js");
/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-perfect-scrollbar/dist/css/styles.css */ "./node_modules/react-perfect-scrollbar/dist/css/styles.css");
/* harmony import */ var react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_perfect_scrollbar_dist_css_styles_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ "./node_modules/react-toastify/dist/ReactToastify.min.css");
/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















const Providers = ({
  children
}) => __jsx(context_AppContext__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 3
  }
}, __jsx(context_UserContext__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }
}, __jsx(context_UploadManager__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 7
  }
}, __jsx(context_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }
}, children))));
class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  render() {
    const {
      Component,
      pageProps,
      router: {
        route
      }
    } = this.props;
    const hideLayout = route === '/' || route === '/[company]/signup' || route === '/[company]/login' || route === '/[company]/communities/new';
    const isWidget = route !== '/';
    if (!isWidget) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(styles_reset__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }
      }), __jsx(styles_fonts__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }
      }), __jsx(Component, _extends({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }
      })));
    }
    return __jsx(Providers, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }
    }, __jsx(components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], {
      hideLayout: hideLayout,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }
    }, __jsx(styles_toastify__WEBPACK_IMPORTED_MODULE_14__["default"], {
      closeButton: __jsx(components_UI_Flag_Flag__WEBPACK_IMPORTED_MODULE_8__["FlagCloseButton"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 46
        }
      }),
      autoClose: 4000,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }), __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    })), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(styles_fonts__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }), __jsx(styles_reset__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }), __jsx(styles_global__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    }), __jsx(styles_progressbar__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }
    }), __jsx(styles_flex__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }))));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(utils_apollo__WEBPACK_IMPORTED_MODULE_2__["withApollo"])()(MyApp));

/***/ }),

/***/ "./public/icons/@.svg":
/*!****************************!*\
  !*** ./public/icons/@.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbi1ub3RpZmljYXRpb24iIHZpZXdCb3g9IjAgMCAxOCAxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0gImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgICAgICAgICA8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZD0iTTcuOTcxMDEgMC4wNTc4MTA1QzMuOTExMyAwLjUxMDY5MyAwLjYxNDEwMyAzLjczMzk2IDAuMDgwMTg0OSA3Ljc4Mzc1Qy0wLjY3NjMwNyAxMy41MjI3IDQuMDE1NTEgMTguNDA1IDkuNjk4NTUgMTcuOTczOEMxMS43ODkxIDE3LjgxNTEgMTMuNzQ1OSAxNi44ODA5IDE1LjI3OTEgMTUuNDUxTDE1LjQxMDggMTUuMzI4MkMxNS41NjIzIDE1LjE4NyAxNS41NzA2IDE0Ljk0OTYgMTUuNDI5MyAxNC43OTgyTDE0LjkxNzYgMTQuMjQ5NUMxNC43NzYzIDE0LjA5OCAxNC41MzkxIDE0LjA4OTggMTQuMzg3NiAxNC4yMzFMMTQuMTEzMyAxNC40ODY5QzEyLjQwNzggMTYuMDc3IDEwLjA2NjYgMTYuNzkyNSA3LjcwNDg0IDE2LjM5MDJDNC4zNTc0NCAxNS44MjAyIDEuNzg0MTQgMTIuOTc4MyAxLjUyMjc1IDkuNTkyNzFDMS4xNzcxMyA1LjExNTgxIDQuNzg4MzggMS4zNzQ2NiA5LjIyMjE4IDEuNTAzNTFDMTMuMzEwNCAxLjYyMjM3IDE2LjQ5OTggNS4xMTExIDE2LjQ5OTggOS4yMDEwN1Y5Ljc1MDI4QzE2LjQ5OTggMTAuNjI2OSAxNS43NDQ1IDExLjMyOTkgMTQuODUwMyAxMS4yNDNDMTQuMDcxIDExLjE2NzIgMTMuNDk5OSAxMC40NjY4IDEzLjQ5OTkgOS42ODM4VjYuMzc1MzJDMTMuNDk5OSA2LjE2ODE4IDEzLjMzMTkgNi4wMDAzMSAxMy4xMjQ4IDYuMDAwMzFIMTIuMzc0OUMxMi4yMjQzIDYuMDAwMzEgMTIuMDk2NCA2LjA5MDMxIDEyLjAzNjcgNi4yMTgzOEMxMS4yODIxIDUuMzk1MjcgMTAuMjAxOSA0Ljg3NTMxIDguOTk5ODUgNC44NzUzMUM2LjcyNTMxIDQuODc1MzEgNC44NzQ4NyA2LjcyNTc2IDQuODc0ODcgOS4wMDAzQzQuODc0ODcgMTEuMjc0OCA2LjcyNTMxIDEzLjEyNTMgOC45OTk4NSAxMy4xMjUzQzEwLjQzMjYgMTMuMTI1MyAxMS42OTYgMTIuMzkwMiAxMi40MzU3IDExLjI3ODJDMTIuOTkyNyAxMi4yMDkgMTQuMDI3NSAxMi44MjIzIDE1LjIwNTQgMTIuNzQzNEMxNi43OTggMTIuNjM2NyAxNy45OTk5IDExLjI0MDYgMTcuOTk5OSA5LjY0NDM5VjkuMDAwM0MxNy45OTk5IDMuNjk4OCAxMy4zOTIgLTAuNTQ2OTQ3IDcuOTcxMDEgMC4wNTc4MTA1Wk04Ljk5OTg1IDExLjYyNTNDNy41NTI1OCAxMS42MjUzIDYuMzc0ODQgMTAuNDQ3NiA2LjM3NDg0IDkuMDAwM0M2LjM3NDg0IDcuNTUzMDIgNy41NTI1OCA2LjM3NTI4IDguOTk5ODUgNi4zNzUyOEMxMC40NDcxIDYuMzc1MjggMTEuNjI0OSA3LjU1MzAyIDExLjYyNDkgOS4wMDAzQzExLjYyNDkgMTAuNDQ3NiAxMC40NDcxIDExLjYyNTMgOC45OTk4NSAxMS42MjUzWiI+PC9wYXRoPgo8L2c+CgogICAgICAgIDwvc3ZnPgo="

/***/ }),

/***/ "./public/icons/CheckboxArrow.svg":
/*!****************************************!*\
  !*** ./public/icons/CheckboxArrow.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSI4IiB2aWV3Qm94PSIwIDAgMTkgMTUiPjxnPjxnPjxwYXRoIGZpbGw9IiMwMDk1ZmYiIGQ9Ik02LjcyNSAxMi4wNzZsLTQuMjk3LTQuMzlMLjk5NSA5LjE1bDUuNzMgNS44NTNMMTkuMDA1IDIuNDYgMTcuNTcyLjk5N3oiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDk1ZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjUwIiBkPSJNNi43MjUgMTIuMDc2djBsLTQuMjk3LTQuMzl2MEwuOTk1IDkuMTV2MGw1LjczIDUuODUzdjBMMTkuMDA1IDIuNDZ2MEwxNy41NzIuOTk3djB6Ii8+PC9nPjwvZz48L3N2Zz4="

/***/ }),

/***/ "./public/icons/analytics.svg":
/*!************************************!*\
  !*** ./public/icons/analytics.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbi1hbmFseXRpY3MiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0gImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMEM3LjUwOTMzIDAgNy4xMTExMSAwLjM5Nzk1NiA3LjExMTExIDAuODg4ODg5VjE1LjExMTFDNy4xMTExMSAxNS42MDIgNy41MDkzMyAxNiA4IDE2QzguNDkwNjcgMTYgOC44ODg4OSAxNS42MDIgOC44ODg4OSAxNS4xMTExVjAuODg4ODg5QzguODg4ODkgMC4zOTc5NTYgOC40OTA2NyAwIDggMFpNMy41NTU1NiA0LjQ0NDQ0QzMuNTU1NTYgMy45NTM1MSAzLjk1Mzc4IDMuNTU1NTYgNC40NDQ0NCAzLjU1NTU2QzQuOTM1MTEgMy41NTU1NiA1LjMzMzMzIDMuOTUzNTEgNS4zMzMzMyA0LjQ0NDQ0VjExLjU1NTZDNS4zMzMzMyAxMi4wNDY1IDQuOTM1MTEgMTIuNDQ0NCA0LjQ0NDQ0IDEyLjQ0NDRDMy45NTM3OCAxMi40NDQ0IDMuNTU1NTYgMTIuMDQ2NSAzLjU1NTU2IDExLjU1NTZWNC40NDQ0NFpNMCA2LjIyMjIyQzAgNS43MzEyOSAwLjM5ODIyMiA1LjMzMzMzIDAuODg4ODg5IDUuMzMzMzNDMS4zNzk1NiA1LjMzMzMzIDEuNzc3NzggNS43MzEyOSAxLjc3Nzc4IDYuMjIyMjJWOS43Nzc3OEMxLjc3Nzc4IDEwLjI2ODcgMS4zNzk1NiAxMC42NjY3IDAuODg4ODg5IDEwLjY2NjdDMC4zOTgyMjIgMTAuNjY2NyAwIDEwLjI2ODcgMCA5Ljc3Nzc4VjYuMjIyMjJaTTEwLjY2NjcgNC40NDQ0NEMxMC42NjY3IDMuOTUzNTEgMTEuMDY0OSAzLjU1NTU2IDExLjU1NTYgMy41NTU1NkMxMi4wNDYyIDMuNTU1NTYgMTIuNDQ0NCAzLjk1MzUxIDEyLjQ0NDQgNC40NDQ0NFYxMS41NTU2QzEyLjQ0NDQgMTIuMDQ2NSAxMi4wNDYyIDEyLjQ0NDQgMTEuNTU1NiAxMi40NDQ0QzExLjA2NDkgMTIuNDQ0NCAxMC42NjY3IDEyLjA0NjUgMTAuNjY2NyAxMS41NTU2VjQuNDQ0NDRaTTE1LjExMTEgNS4zMzMzM0MxNC42MjA0IDUuMzMzMzMgMTQuMjIyMiA1LjczMTI5IDE0LjIyMjIgNi4yMjIyMlY5Ljc3Nzc4QzE0LjIyMjIgMTAuMjY4NyAxNC42MjA0IDEwLjY2NjcgMTUuMTExMSAxMC42NjY3QzE1LjYwMTggMTAuNjY2NyAxNiAxMC4yNjg3IDE2IDkuNzc3NzhWNi4yMjIyMkMxNiA1LjczMTI5IDE1LjYwMTggNS4zMzMzMyAxNS4xMTExIDUuMzMzMzNaIj48L3BhdGg+CiAgICAgICAgPC9zdmc+Cg=="

/***/ }),

/***/ "./public/icons/close.svg":
/*!********************************!*\
  !*** ./public/icons/close.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbi1jbG9zZSIgdmlld0JveD0iMCAwIDE0IDE0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSAiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNCAxLjRMMTIuNiAwTDcgNS42TDEuNCAwTDAgMS40TDUuNiA3TDAgMTIuNkwxLjQgMTRMNyA4LjRMMTIuNiAxNEwxNCAxMi42TDguNCA3TDE0IDEuNFoiPjwvcGF0aD4KICAgICAgICA8L3N2Zz4K"

/***/ }),

/***/ "./public/icons/dark-mode.svg":
/*!************************************!*\
  !*** ./public/icons/dark-mode.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbi1kYXJrLW1vZGUiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0gImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTQuNzUwMiA4LjU5MjVDMTQuNjMyMiA5Ljg2OTE1IDE0LjE1MzEgMTEuMDg1OCAxMy4zNjg5IDEyLjEwMDFDMTIuNTg0NiAxMy4xMTQ0IDExLjUyNzggMTMuODg0MyAxMC4zMjE5IDE0LjMxOTlDOS4xMTYxMSAxNC43NTU1IDcuODExMTYgMTQuODM4NiA2LjU1OTggMTQuNTU5NkM1LjMwODQzIDE0LjI4MDUgNC4xNjI0MiAxMy42NTA5IDMuMjU1ODQgMTIuNzQ0M0MyLjM0OTI2IDExLjgzNzggMS43MTk2MiAxMC42OTE3IDEuNDQwNiA5LjQ0MDM3QzEuMTYxNTggOC4xODkwMSAxLjI0NDcxIDYuODg0MDYgMS42ODAyNyA1LjY3ODIyQzIuMTE1ODIgNC40NzIzOCAyLjg4NTc5IDMuNDE1NTIgMy45MDAwOCAyLjYzMTMxQzQuOTE0MzcgMS44NDcxIDYuMTMxMDIgMS4zNjc5OCA3LjQwNzY3IDEuMjVDNi42NjAyMyAyLjI2MTIgNi4zMDA1NiAzLjUwNzA5IDYuMzk0MDcgNC43NjEwNkM2LjQ4NzU4IDYuMDE1MDMgNy4wMjgwNyA3LjE5Mzc5IDcuOTE3MjIgOC4wODI5NUM4LjgwNjM4IDguOTcyMSA5Ljk4NTE0IDkuNTEyNTkgMTEuMjM5MSA5LjYwNjFDMTIuNDkzMSA5LjY5OTYxIDEzLjczOSA5LjMzOTk0IDE0Ljc1MDIgOC41OTI1VjguNTkyNVoiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4KICAgICAgICA8L3N2Zz4K"

/***/ }),

/***/ "./public/icons/messages.svg":
/*!***********************************!*\
  !*** ./public/icons/messages.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbi1tZXNzYWdlIiB2aWV3Qm94PSIwIDAgMTQgMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9ICJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMyA5QzEzIDkuMzUzNjIgMTIuODU5NSA5LjY5Mjc2IDEyLjYwOTUgOS45NDI4MUMxMi4zNTk0IDEwLjE5MjkgMTIuMDIwMyAxMC4zMzMzIDExLjY2NjcgMTAuMzMzM0gzLjY2NjY3TDEgMTNWMi4zMzMzM0MxIDEuOTc5NzEgMS4xNDA0OCAxLjY0MDU3IDEuMzkwNTIgMS4zOTA1MkMxLjY0MDU3IDEuMTQwNDggMS45Nzk3MSAxIDIuMzMzMzMgMUgxMS42NjY3QzEyLjAyMDMgMSAxMi4zNTk0IDEuMTQwNDggMTIuNjA5NSAxLjM5MDUyQzEyLjg1OTUgMS42NDA1NyAxMyAxLjk3OTcxIDEzIDIuMzMzMzNWOVoiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4KICAgICAgICA8L3N2Zz4K"

/***/ }),

/***/ "./public/icons/moments.svg":
/*!**********************************!*\
  !*** ./public/icons/moments.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbi1tb21lbnRzIiB2aWV3Qm94PSIwIDAgMTYgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9ICJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjE3MzYxIDAuNjkxMjExQzQuMTczNjEgMC4zMDk2MTEgMy44NjIzOSAwIDMuNDc4MzkgMEMzLjA5NDM5IDAgMi43ODI0IDAuMzA5NjExIDIuNzgyNCAwLjY5MTIxMVYzLjU2Mzk5QzIuNzgyNCAzLjk0NTU5IDMuMDk0MzkgNC4yNTQzOSAzLjQ3ODM5IDQuMjU0MzlDMy44NjIzOSA0LjI1NDM5IDQuMTczNjEgMy45NDU1OSA0LjE3MzYxIDMuNTYzOTlWMC42OTEyMTFaTTAgNi4zMjcyQzAgNS45NDU2IDAuMzExMTk2IDUuNjM2MDEgMC42OTU5OTYgNS42MzYwMUgxMS44MjY0SDEyLjUyMTZDMTMuNDQ0IDUuNjM2MDEgMTQuMzI4OCA2IDE0Ljk4MTYgNi42NDhDMTUuNjMzNiA3LjI5NiAxNiA4LjE3NDQxIDE2IDkuMDkxMjFDMTYgMTAuMDA3MiAxNS42MzM2IDEwLjg4NTYgMTQuOTgxNiAxMS41MzM2QzE0LjMyODggMTIuMTgxNiAxMy40NDQgMTIuNTQ1NiAxMi41MjE2IDEyLjU0NTZDMTIuNTIxNiAxMy40NjE2IDEyLjE1NTIgMTQuMzQgMTEuNTAzMiAxNC45ODhDMTAuODUwNCAxNS42MzYgOS45NjYzOSAxNiA5LjA0MzE5IDE2SDMuNDc4MzlDMi41NTU5OSAxNiAxLjY3MTIxIDE1LjYzNiAxLjAxODQxIDE0Ljk4OEMwLjM2NjQwOCAxNC4zNCAwIDEzLjQ2MTYgMCAxMi41NDU2VjYuMzI3MlpNMTIuNTIxNiAxMS4xNjRWNy4wMTg0MUMxMy4wNzUyIDcuMDE4NDEgMTMuNjA2NCA3LjIzNjgxIDEzLjk5NzYgNy42MjU2MUMxNC4zODg4IDguMDE0NDEgMTQuNjA4OCA4LjU0MTYxIDE0LjYwODggOS4wOTEyMUMxNC42MDg4IDkuNjQwODEgMTQuMzg4OCAxMC4xNjggMTMuOTk3NiAxMC41NTY4QzEzLjYwNjQgMTAuOTQ1NiAxMy4wNzUyIDExLjE2NCAxMi41MjE2IDExLjE2NFpNMTEuMTMwNCA3LjAxODQxVjExLjg0NTZWMTEuODU0NFYxMS44NjMyVjEyLjU0NTZDMTEuMTMwNCAxMy4wOTUyIDEwLjkxMDQgMTMuNjIyNCAxMC41MTkyIDE0LjAxMTJDMTAuMTI4IDE0LjQgOS41OTY3OSAxNC42MTg0IDkuMDQzMTkgMTQuNjE4NEgzLjQ3ODM5QzIuOTI0NzkgMTQuNjE4NCAyLjM5MzU5IDE0LjQgMi4wMDIzOSAxNC4wMTEyQzEuNjExMTkgMTMuNjIyNCAxLjM5MTIxIDEzLjA5NTIgMS4zOTEyMSAxMi41NDU2VjcuMDE4NDFIMTEuMTMwNFpNNi4yNjA3OSAwQzYuNjQ0NzkgMCA2Ljk1NjgxIDAuMzA5NjExIDYuOTU2ODEgMC42OTEyMTFWMy41NjM5OUM2Ljk1NjgxIDMuOTQ1NTkgNi42NDQ3OSA0LjI1NDM5IDYuMjYwNzkgNC4yNTQzOUM1Ljg3Njc5IDQuMjU0MzkgNS41NjQ4IDMuOTQ1NTkgNS41NjQ4IDMuNTYzOTlWMC42OTEyMTFDNS41NjQ4IDAuMzA5NjExIDUuODc2NzkgMCA2LjI2MDc5IDBaTTkuNzM5MjEgMC42OTEyMTFDOS43MzkyMSAwLjMwOTYxMSA5LjQyNzk5IDAgOS4wNDMxOSAwQzguNjU5MTkgMCA4LjM0OCAwLjMwOTYxMSA4LjM0OCAwLjY5MTIxMVYzLjU2Mzk5QzguMzQ4IDMuOTQ1NTkgOC42NTkxOSA0LjI1NDM5IDkuMDQzMTkgNC4yNTQzOUM5LjQyNzk5IDQuMjU0MzkgOS43MzkyMSAzLjk0NTU5IDkuNzM5MjEgMy41NjM5OVYwLjY5MTIxMVoiPjwvcGF0aD4KICAgICAgICA8L3N2Zz4K"

/***/ }),

/***/ "./public/icons/more.svg":
/*!*******************************!*\
  !*** ./public/icons/more.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbi1tb3JlIiB2aWV3Qm94PSIwIDAgMTggMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9ICJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgICAgICAgICAgPHBhdGggZD0iTTkuMDAwMDEgNC4wMDAwM0MxMC4xMDQ2IDQuMDAwMDMgMTEgMy4xMDQ1OSAxMSAyLjAwMDAyQzExIDAuODk1NDM3IDEwLjEwNDYgMCA5LjAwMDAxIDBDNy44OTU0MyAwIDYuOTk5OTkgMC44OTU0MzcgNi45OTk5OSAyLjAwMDAyQzYuOTk5OTkgMy4xMDQ1OSA3Ljg5NTQzIDQuMDAwMDMgOS4wMDAwMSA0LjAwMDAzWiI+PC9wYXRoPgo8cGF0aCBkPSJNOS4wMDAwMSAxMUMxMC4xMDQ2IDExIDExIDEwLjEwNDYgMTEgOUMxMSA3Ljg5NTQyIDEwLjEwNDYgNi45OTk5OCA5LjAwMDAxIDYuOTk5OThDNy44OTU0MyA2Ljk5OTk4IDYuOTk5OTkgNy44OTU0MiA2Ljk5OTk5IDlDNi45OTk5OSAxMC4xMDQ2IDcuODk1NDMgMTEgOS4wMDAwMSAxMVoiPjwvcGF0aD4KPHBhdGggZD0iTTkuMDAwMDEgMThDMTAuMTA0NiAxOCAxMSAxNy4xMDQ2IDExIDE2QzExIDE0Ljg5NTQgMTAuMTA0NiAxNCA5LjAwMDAxIDE0QzcuODk1NDMgMTQgNi45OTk5OSAxNC44OTU0IDYuOTk5OTkgMTZDNi45OTk5OSAxNy4xMDQ2IDcuODk1NDMgMTggOS4wMDAwMSAxOFoiPjwvcGF0aD4KICAgICAgICA8L3N2Zz4K"

/***/ }),

/***/ "./public/icons/new-plus-community.svg":
/*!*********************************************!*\
  !*** ./public/icons/new-plus-community.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,CjxzdmcKICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnCiAgdmlld0JveD0nMCAwIDE0IDE0JwogIHdpZHRoPScxNCcgaGVpZ2h0PScxNCcKICBmaWxsPScjNjVhN2ZmJz4KICA8cGF0aCBkPSdNNiA2IEw2IDAgTDggMCBMOCA2IEwxNCA2IEwxNCA4IEw4IDggTDggMTQgTDYgMTQgTDYgOCBMMCA4IEwwIDYgWicgLz4KPC9zdmc+"

/***/ }),

/***/ "./public/icons/pencil.svg":
/*!*********************************!*\
  !*** ./public/icons/pencil.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbi1wZW5jaWwiIHZpZXdCb3g9IjAgMCAxNCAxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0gImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgICAgICAgICA8cGF0aCBkPSJNOS43ODcwNyAwLjUxODU1NUwxMy4zNTE5IDQuMDgzMzdMNC4wODMzNyAxMy4zNTE5SDAuNTE4NTU1VjkuNzg3MDdMOS43ODcwNyAwLjUxODU1NVoiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PC9wYXRoPgogICAgICAgIDwvc3ZnPgo="

/***/ }),

/***/ "./public/icons/plus2.svg":
/*!********************************!*\
  !*** ./public/icons/plus2.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbi1wbHVzMiIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9ICJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOCAxMEgxMFYxOEg4VjEwSDBWOEg4VjBIMTBWOEgxOFYxMFoiIC8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./public/icons/quote.svg":
/*!********************************!*\
  !*** ./public/icons/quote.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDI4IDI4Ij48Zz48Zz48Zz48cGF0aCBmaWxsPSIjOGI4ZDkxIiBkPSJNMTQgMGM3LjczMiAwIDE0IDYuMjY4IDE0IDE0cy02LjI2OCAxNC0xNCAxNFMwIDIxLjczMiAwIDE0IDYuMjY4IDAgMTQgMHoiLz48L2c+PGc+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEzLjM3MiAxNS42MDFjLjQ4Ny44NDMuNjA3IDEuODIuMzQgMi43NTFDMTMuMjY1IDE5LjkxMSAxMS43OTQgMjEgMTAuMTM2IDIxaC0uMDE2Yy0xLjM0NC0uMDUyLTIuMzg4LS41NjMtMy4xMDQtMS41MjEtMS4yOC0xLjcxMi0xLjEyNy00LjQzMi0uNjA4LTYuMjRDNy4yOTMgMTAuMTU0IDkuMzkgOCAxMS41MDYgOGMuMTMyIDAgLjI2NS4wMDkuMzk1LjAyNi4xMi4wMTYuMjI2LjA4MS4yOTMuMThhLjQuNCAwIDAgMSAuMDUzLjMzNGwtLjM4NSAxLjM0NGEuNDE2LjQxNiAwIDAgMS0uMzQyLjI5M2MtMS43NjQuMjU2LTIuNjUgMi41MjUtMy4wMTggMy44NGEzLjc1MyAzLjc1MyAwIDAgMSAxLjQ2Ni0uMjkzYy4zODMgMCAuNzc3LjA1NiAxLjE3LjE2NmEzLjcxIDMuNzEgMCAwIDEgMi4yMzQgMS43MXptOC40ODYgMi43NTJjLS40NDcgMS41NTgtMS45MTggMi42NDYtMy41NzYgMi42NDZoLS4wMTZjLTEuMzQ0LS4wNTEtMi4zODgtLjU2My0zLjEwNC0xLjUyLTEuMjgtMS43MTMtMS4xMjctNC40MzMtLjYwOC02LjI0MUMxNS40MzkgMTAuMTU0IDE3LjUzNSA4IDE5LjY1MiA4YTMgMyAwIDAgMSAuMzk1LjAyNi40Mi40MiAwIDAgMSAuMjkzLjE4LjQuNCAwIDAgMSAuMDUzLjMzNGwtLjM4NSAxLjM0NGEuNDE2LjQxNiAwIDAgMS0uMzQyLjI5M2MtMS43NjQuMjU2LTIuNjUgMi41MjUtMy4wMTggMy44NGEzLjc1NSAzLjc1NSAwIDAgMSAxLjQ2Ni0uMjkzYy4zODMgMCAuNzc2LjA1NiAxLjE3LjE2NmEzLjcxIDMuNzEgMCAwIDEgMi4yMzMgMS43MWMuNDg3Ljg0My42MDggMS44Mi4zNDEgMi43NTJ6Ii8+PC9nPjwvZz48L2c+PC9zdmc+"

/***/ }),

/***/ "./public/icons/right.svg":
/*!********************************!*\
  !*** ./public/icons/right.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbi1yaWdodCIgdmlld0JveD0iMCAwIDE1IDExIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSAiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik00Ljg5OTE3IDEwLjYxNDlDNS4xMDM1MiAxMC44MjY0IDUuNDQzNjMgMTAuODI2NCA1LjY1NTEzIDEwLjYxNDlDNS44NTk0OCAxMC40MTA1IDUuODU5NDggMTAuMDcwNCA1LjY1NTEzIDkuODY2NTJMMS44MjIwMSA2LjAzMzRMMTQuNDcwOCA2LjAzMzRDMTQuNzY1NiA2LjAzMjkyIDE1IDUuNzk4NTYgMTUgNS41MDM3MUMxNSA1LjIwODg1IDE0Ljc2NTYgNC45NjY4NyAxNC40NzA4IDQuOTY2ODdMMS44MjIwMSA0Ljk2Njg3TDUuNjU1MTMgMS4xNDA4OUM1Ljg1OTQ4IDAuOTI5Mzk5IDUuODU5NDggMC41ODg4MTUgNS42NTUxMyAwLjM4NDk0MUM1LjQ0MzYzIDAuMTczNDQ1IDUuMTAzMDUgMC4xNzM0NDUgNC44OTkxNyAwLjM4NDk0MUwwLjE1ODYyMiA1LjEyNTQ5Qy0wLjA1Mjg3NDIgNS4zMjk4NCAtMC4wNTI4NzQxIDUuNjY5OTUgMC4xNTg2MjIgNS44NzM4M0w0Ljg5OTE3IDEwLjYxNDlaIj48L3BhdGg+CiAgICAgICAgPC9zdmc+Cg=="

/***/ }),

/***/ "./public/icons/roles.svg":
/*!********************************!*\
  !*** ./public/icons/roles.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbi1yb2xlcyIgdmlld0JveD0iMCAwIDI0IDE3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIzLjQgNS4xMDAwMUMyMy44IDUuMzAwMDEgMjQgNS42IDI0IDZDMjQgNi40IDIzLjggNi42OTk5OSAyMy40IDYuODk5OTlMMTkgOC44OTk5OVYxNEMxOSAxNS43IDE1LjkgMTcgMTIgMTdDOC4xIDE3IDUgMTUuNyA1IDE0VjguODk5OTlMMC42MDAwMDYgNi44OTk5OUMwLjIwMDAwNiA2LjY5OTk5IDAgNi40IDAgNkMwIDUuNiAwLjMwMDAwNiA1LjMwMDAxIDAuNjAwMDA2IDUuMTAwMDFMMTEuNiAwLjEwMDAwNkMxMS43IDYuMTAyMDNlLTA2IDExLjkgMCAxMiAwQzEyLjEgMCAxMi4zIDYuMTAyMDNlLTA2IDEyLjQgMC4xMDAwMDZMMjMuNCA1LjEwMDAxWk0xMiAxNUMxNC44IDE1IDE3IDE0LjEgMTcgMTRWOS43OTk5OUwxMi40IDExLjlDMTIuMyAxMiAxMi4xIDEyIDEyIDEyQzExLjkgMTIgMTEuNyAxMiAxMS42IDExLjlMNyA5Ljc5OTk5VjE0QzcgMTQuMiA5LjIgMTUgMTIgMTVaTTMuNDA1IDUuOTk4OTlMMTEuOTk5IDkuODk4OTlMMjAuNjAyIDUuODk4OTlMMTIuMDAxIDIuMTAwMDFMMy40MDUgNS45OTg5OVoiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./public/icons/search.svg":
/*!*********************************!*\
  !*** ./public/icons/search.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbi1zZWFyY2giIHZpZXdCb3g9IjAgMCAxOCAxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0gImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgICAgICAgIDxwYXRoIGQ9Ik03LjkyNjgyIDBDMy41NTYwOSAwIDAgMy41NTYwOSAwIDcuOTI2ODJDMCAxMi4yOTc4IDMuNTU2MDkgMTUuODUzNiA3LjkyNjgyIDE1Ljg1MzZDMTIuMjk3OCAxNS44NTM2IDE1Ljg1MzYgMTIuMjk3OCAxNS44NTM2IDcuOTI2ODJDMTUuODUzNiAzLjU1NjA5IDEyLjI5NzggMCA3LjkyNjgyIDBaTTcuOTI2ODIgMTQuMzkwM0M0LjM2MjkzIDE0LjM5MDMgMS40NjM0MSAxMS40OTA4IDEuNDYzNDEgNy45MjY4NkMxLjQ2MzQxIDQuMzYyOTYgNC4zNjI5MyAxLjQ2MzQxIDcuOTI2ODIgMS40NjM0MUMxMS40OTA3IDEuNDYzNDEgMTQuMzkwMiA0LjM2MjkzIDE0LjM5MDIgNy45MjY4MkMxNC4zOTAyIDExLjQ5MDcgMTEuNDkwNyAxNC4zOTAzIDcuOTI2ODIgMTQuMzkwM1oiPjwvcGF0aD4KPHBhdGggZD0iTTE3Ljc4NTYgMTYuNzUwOUwxMy41OTA1IDEyLjU1NThDMTMuMzA0NiAxMi4yNyAxMi44NDE3IDEyLjI3IDEyLjU1NTggMTIuNTU1OEMxMi4yNyAxMi44NDE0IDEyLjI3IDEzLjMwNDkgMTIuNTU1OCAxMy41OTA1TDE2Ljc1MDkgMTcuNzg1NkMxNi44OTM5IDE3LjkyODUgMTcuMDgxIDE4IDE3LjI2ODMgMThDMTcuNDU1MyAxOCAxNy42NDI2IDE3LjkyODUgMTcuNzg1NiAxNy43ODU2QzE4LjA3MTUgMTcuNSAxOC4wNzE1IDE3LjAzNjYgMTcuNzg1NiAxNi43NTA5WiI+PC9wYXRoPgogICAgPC9zdmc+Cg=="

/***/ }),

/***/ "./public/icons/settings.svg":
/*!***********************************!*\
  !*** ./public/icons/settings.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbi1zZXR0aW5ncyIgaWV3Ym94PSIwIDAgMTYgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9ICJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjI3MjggMEM2LjQ2OTYgMCA1LjgxODQxIDAuNjUxMTk1IDUuODE4NDEgMS40NTQzOVYyLjczMjc5TDQuOTE0NCAxLjgyODgxQzQuMzQ2NCAxLjI2MDgxIDMuNDI1NTkgMS4yNjA4MSAyLjg1NzU5IDEuODI4ODFMMS44Mjg4MSAyLjg1NzU5QzEuMjYwODEgMy40MjU1OSAxLjI2MDgxIDQuMzQ2NCAxLjgyODgxIDQuOTE0NEwyLjczMjc5IDUuODE4NDFIMS40NTQzOUMwLjY1MTE5NSA1LjgxODQxIDAgNi40Njk2IDAgNy4yNzI4VjguNzI3MkMwIDkuNTMwNCAwLjY1MTE5NSAxMC4xODE2IDEuNDU0MzkgMTAuMTgxNkgyLjczMjc5TDEuODI4ODEgMTEuMDg1NkMxLjI2MDgxIDExLjY1MzYgMS4yNjA4MSAxMi41NzQ0IDEuODI4ODEgMTMuMTQyNEwyLjg1NzU5IDE0LjE3MTJDMy40MjU1OSAxNC43MzkyIDQuMzQ2NCAxNC43MzkyIDQuOTE0NCAxNC4xNzEyTDUuODE4NDEgMTMuMjY3MlYxNC41NDU2QzUuODE4NDEgMTUuMzQ4OCA2LjQ2OTYgMTYgNy4yNzI4IDE2SDguNzI3MkM5LjUzMDQgMTYgMTAuMTgxNiAxNS4zNDg4IDEwLjE4MTYgMTQuNTQ1NlYxMy4yNjcyTDExLjA4NTYgMTQuMTcxMkMxMS42NTM2IDE0LjczOTIgMTIuNTc0NCAxNC43MzkyIDEzLjE0MjQgMTQuMTcxMkwxNC4xNzEyIDEzLjE0MjRDMTQuNzM5MiAxMi41NzQ0IDE0LjczOTIgMTEuNjUzNiAxNC4xNzEyIDExLjA4NTZMMTMuMjY3MiAxMC4xODE2SDE0LjU0NTZDMTUuMzQ4OCAxMC4xODE2IDE2IDkuNTMwNCAxNiA4LjcyNzJWNy4yNzI4QzE2IDYuNDY5NiAxNS4zNDg4IDUuODE4NDEgMTQuNTQ1NiA1LjgxODQxSDEzLjI2NzJMMTQuMTcxMiA0LjkxNDRDMTQuNzM5MiA0LjM0NjQgMTQuNzM5MiAzLjQyNTU5IDE0LjE3MTIgMi44NTc1OUwxMy4xNDI0IDEuODI4ODFDMTIuNTc0NCAxLjI2MDgxIDExLjY1MzYgMS4yNjA4MSAxMS4wODU2IDEuODI4ODFMMTAuMTgxNiAyLjczMjc5VjEuNDU0MzlDMTAuMTgxNiAwLjY1MTE5NSA5LjUzMDQgMCA4LjcyNzIgMEg3LjI3MjhaTTMuODg1NiAyLjg1NzU5TDQuNzg5NiAzLjc2MDc5QzUuNzA1NiA0LjY3NzU5IDcuMjcyOCA0LjAyODc5IDcuMjcyOCAyLjczMjc5VjEuNDU0MzlIOC43MjcyVjIuNzMyNzlDOC43MjcyIDQuMDI4NzkgMTAuMjk0NCA0LjY3NzU5IDExLjIxMDQgMy43NjA3OUwxMi4xMTQ0IDIuODU3NTlMMTMuMTQyNCAzLjg4NTZMMTIuMjM5MiA0Ljc4OTZDMTEuMzIyNCA1LjcwNTYgMTEuOTcxMiA3LjI3MjggMTMuMjY3MiA3LjI3MjhIMTQuNTQ1NlY4LjcyNzJIMTMuMjY3MkMxMS45NzEyIDguNzI3MiAxMS4zMjI0IDEwLjI5NDQgMTIuMjM5MiAxMS4yMTA0TDEzLjE0MjQgMTIuMTE0NEwxMi4xMTQ0IDEzLjE0MjRMMTEuMjEwNCAxMi4yMzkyQzEwLjI5NDQgMTEuMzIyNCA4LjcyNzIgMTEuOTcxMiA4LjcyNzIgMTMuMjY3MlYxNC41NDU2SDcuMjcyOFYxMy4yNjcyQzcuMjcyOCAxMS45NzEyIDUuNzA1NiAxMS4zMjI0IDQuNzg5NiAxMi4yMzkyTDMuODg1NiAxMy4xNDI0TDIuODU3NTkgMTIuMTE0NEwzLjc2MDc5IDExLjIxMDRDNC42Nzc1OSAxMC4yOTQ0IDQuMDI4NzkgOC43MjcyIDIuNzMyNzkgOC43MjcySDEuNDU0MzlWNy4yNzI4SDIuNzMyNzlDNC4wMjg3OSA3LjI3MjggNC42Nzc1OSA1LjcwNTYgMy43NjA3OSA0Ljc4OTZMMi44NTc1OSAzLjg4NTZMMy44ODU2IDIuODU3NTlaTTYuNTQ1NjEgOEM2LjU0NTYxIDcuMTk2OCA3LjE5NjggNi41NDU2MSA4IDYuNTQ1NjFDOC44MDMyIDYuNTQ1NjEgOS40NTQzOSA3LjE5NjggOS40NTQzOSA4QzkuNDU0MzkgOC44MDMyIDguODAzMiA5LjQ1NDM5IDggOS40NTQzOUM3LjE5NjggOS40NTQzOSA2LjU0NTYxIDguODAzMiA2LjU0NTYxIDhaTTggNS4wOTEyMUM2LjM5MzYgNS4wOTEyMSA1LjA5MTIxIDYuMzkzNiA1LjA5MTIxIDhDNS4wOTEyMSA5LjYwNjQgNi4zOTM2IDEwLjkwODggOCAxMC45MDg4QzkuNjA2NCAxMC45MDg4IDEwLjkwODggOS42MDY0IDEwLjkwODggOEMxMC45MDg4IDYuMzkzNiA5LjYwNjQgNS4wOTEyMSA4IDUuMDkxMjFaIj48L3BhdGg+CiAgICAgICAgPC9zdmc+Cg=="

/***/ }),

/***/ "./public/icons/topic.svg":
/*!********************************!*\
  !*** ./public/icons/topic.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbi10b3BpYyIgdmlld0JveD0iMCAwIDE2IDE2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSAiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMC44NDYzNDYgMTEuNTc0QzAuMjg3MTkgMTAuNDY3NyAtMC4wMDMzMzk0NSA5LjI0MTAxIDIuODk1OTJlLTA1IDcuOTk3NDhWNy41NzczN0MwLjIyNTcxMiAzLjQ2ODc3IDMuNDY5NSAwLjIyNTY3NyA3LjUzMjY0IDAuMDAxNzI0NzNMOCAyLjg5NTQyZS0wNUM5LjI0MjExIC0wLjAwMzMzODc1IDEwLjQ2OTEgMC4yODcxMTYgMTEuNTc5OCAwLjg0NzgzOUMxNC4yODYzIDIuMjAwODIgMTUuOTk5MSA0Ljk2OTA4IDE2IDcuOTk4MzNDMTYuMDAyNSA5LjEyMDYyIDE1Ljc2NTkgMTAuMjMwMyAxNS4zMDYxIDExLjI1MzJMMTYgMTUuMTAyNUMxNiAxNS43NzYgMTUuNjI4NiAxNS45NTAzIDE1LjE1NzkgMTZMMTEuMjU1NiAxNS4zMDI5QzEwLjIzMjQgMTUuNzYyNiA5LjEyMTY4IDE2IDcuOTk3NDcgMTUuOTk2NkM0Ljk3MDExIDE1Ljk5NTggMi4yMDEyOSAxNC4yODMzIDAuODQ2MzQ2IDExLjU3NFpNMTEuNDY2MSAxMy41OThMMTQuMzE1OCAxNC4zMTI4TDEzLjYwMDggMTEuNDYzN0MxMy41MzAxIDExLjI1MDcgMTMuNTQ2OSAxMS4wMTgzIDEzLjY0OCAxMC44MTc5QzE0LjA4OTIgOS45NDQ4NyAxNC4zMTgzIDguOTc5MTcgMTQuMzE1OCA4LjAwMDg1QzE0LjMxNDkgNS42MDcyNSAxMi45NjI1IDMuNDIxNjMgMTAuODIzNiAyLjM1MzIyQzkuOTQ2OTQgMS45MTAzNyA4Ljk4MTA2IDEuNjgxMzYgOC4wMDI1NCAxLjY4Mzg4SDcuNTc4OTVDNC40MTkzOCAxLjg1OTg0IDEuODU5MzkgNC40MTg0NSAxLjY4MjU1IDcuNjIzNjdMMS42ODQyMyA4LjAwMDg1QzEuNjgxNzEgOC45NzkxNyAxLjkwOTkyIDkuOTQ0ODcgMi4zNTIwMiAxMC44MTc5QzMuNDIyMzMgMTIuOTYwNiA1LjYwODQzIDE0LjMxMTkgOCAxNC4zMTI4QzguOTgxMDUgMTQuMzE1MyA5Ljk0Njk1IDE0LjA4NzEgMTAuODIwMiAxMy42NDUxQzExLjAyMDYgMTMuNTQ0MSAxMS4yNTMgMTMuNTI3MyAxMS40NjYxIDEzLjU5OFoiPjwvcGF0aD4KICAgICAgICA8L3N2Zz4K"

/***/ }),

/***/ "./public/icons/user.svg":
/*!*******************************!*\
  !*** ./public/icons/user.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbi11c2VyIiB2aWV3Qm94PSIwIDAgMTAgMTEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9ICJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgICAgICAgICAgPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS4wMDEwMiA1LjcwNTY0QzUuNTYzMTEgNS42OTYzOCA2LjEwOTk1IDUuNTIxMjcgNi41NzI4NiA1LjIwMjI4QzcuMDM1NzYgNC44ODMzIDcuMzk0MDggNC40MzQ2OCA3LjYwMjg5IDMuOTEyNzNDNy44MTE2OSAzLjM5MDc4IDcuODYxNjcgMi44MTg3NSA3Ljc0NjUgMi4yNjg1MUM3LjYzMTMzIDEuNzE4MjYgNy4zNTYxNiAxLjIxNDI5IDYuOTU1NTUgMC44MTk4OTlDNi41NTQ5NCAwLjQyNTUwOCA2LjA0Njc3IDAuMTU4MjY1IDUuNDk0NzkgMC4wNTE3MTFDNC45NDI4MiAtMC4wNTQ4NDI2IDQuMzcxNjMgMC4wMDQwNzg1MiAzLjg1MzAxIDAuMjIxMDIyQzMuMzM0MzkgMC40Mzc5NjYgMi44OTE0NiAwLjgwMzI5MyAyLjU3OTc1IDEuMjcxMTNDMi4yNjgwNSAxLjczODk3IDIuMTAxNDYgMi4yODg0MyAyLjEwMDk5IDIuODUwNkMyLjEwOTU3IDMuNjEyOTQgMi40MTkyOCA0LjM0MDk1IDIuOTYyNTcgNC44NzU4MUMzLjUwNTg1IDUuNDEwNjYgNC4yMzg2NCA1LjcwODk5IDUuMDAxMDIgNS43MDU2NFpNOS45ODEgNy45OTA2MUM5LjkwNjM4IDcuODA0MzEgOS44MDg5OSA3LjYyNzk1IDkuNjkxMDIgNy40NjU1OUM5LjQwNjYyIDcuMDQ3NjIgOS4wMzc1MyA2LjY5NDA5IDguNjA3NzEgNi40Mjc5M0M4LjE3Nzg5IDYuMTYxNzcgNy42OTY5NCA1Ljk4ODkzIDcuMTk2MDMgNS45MjA2MUM3LjA2NjQxIDUuOTAxOTQgNi45MzQ1IDUuOTMyMjcgNi44MjYwMyA2LjAwNTYzQzYuMjkzNTYgNi4zODYxMiA1LjY1NTQ3IDYuNTkwNjUgNS4wMDEwMiA2LjU5MDY1QzQuMzQ2NTcgNi41OTA2NSAzLjcwODQ4IDYuMzg2MTIgMy4xNzYwMSA2LjAwNTYzQzMuMTI0MTUgNS45NjczNyAzLjA2NTA2IDUuOTQwMTEgMy4wMDIzIDUuOTI1NDlDMi45Mzk1NCA1LjkxMDg3IDIuODc0NDQgNS45MDkxOSAyLjgxMTAyIDUuOTIwNjFDMi4zMDg2NSA1Ljk4NjM2IDEuODI1OTkgNi4xNTgxIDEuMzk1IDYuNDI0NDVDMC45NjQwMDkgNi42OTA4MSAwLjU5NDUxNyA3LjA0NTY4IDAuMzExMDE2IDcuNDY1NTlDMC4xOTc5ODIgNy42MzEwNCAwLjEwMDkwMyA3LjgwNjg1IDAuMDIxMDM4IDcuOTkwNjFDMC4wMDQ5NDg5OCA4LjAyODIyIC0wLjAwMjA3NTQxIDguMDY5MDYgMC4wMDA1MzAxNDEgOC4xMDk4OEMwLjAwMzEzNTY5IDguMTUwNyAwLjAxNTI1MTkgOC4xOTAzNCAwLjAzNTk5MTYgOC4yMjU2QzAuMTM4MjYgOC4zOTk1MyAwLjI1MTg2NCA4LjU2NjU1IDAuMzc2MDE4IDguNzI1NkMwLjU1MjM1NCA4Ljk1NjgyIDAuNzQ4MDgzIDkuMTcyNjIgMC45NjEwNCA5LjM3MDYyQzEuMTQ1MTkgOS41NDc2NSAxLjMzODc3IDkuNzE0NTYgMS41NDEgOS44NzA2MkMyLjU0MzEgMTAuNTk4NSAzLjc0OTkyIDEwLjk5MDYgNC45ODg1MSAxMC45OTA2QzYuMjI3MDkgMTAuOTkwNiA3LjQzMzkxIDEwLjU5ODUgOC40MzYwMiA5Ljg3MDYyQzguNjQyMjQgOS43MTc1NSA4LjgzNzcyIDkuNTUwNDkgOS4wMjEwNCA5LjM3MDYyQzkuMjI5NzMgOS4xNjk5NCA5LjQyMzUzIDguOTU0MzYgOS42MDA5OSA4LjcyNTZDOS43MjY2OCA4LjU2NjU3IDkuODQxOTUgOC4zOTk1NSA5Ljk0NjAzIDguMjI1NkM5Ljk3NTA5IDguMTk0NjUgOS45OTQwMyA4LjE1NTYgMTAuMDAwMyA4LjExMzZDMTAuMDA2NSA4LjA3MTYxIDkuOTk5NzkgOC4wMjg2OSA5Ljk4MSA3Ljk5MDYxWiIgZmlsbD0iIzkzOTM5MyI+PC9wYXRoPgo8L2c+CgogICAgICAgIDwvc3ZnPgo="

/***/ }),

/***/ "./public/icons/users.svg":
/*!********************************!*\
  !*** ./public/icons/users.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iaWNvbi11c2VycyIgdmlld0JveD0iMCAwIDI0IDE4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzIDQuNUMxMyAzLjE4OCAxNC4wNjMzIDIuMTI1IDE1LjM3NSAyLjEyNUMxNi42ODY3IDIuMTI1IDE3Ljc1IDMuMTg4IDE3Ljc1IDQuNUMxNy43NSA1LjgxMiAxNi42ODY3IDYuODc1IDE1LjM3NSA2Ljg3NUMxNC4wNjMzIDYuODc1IDEzIDUuODEyIDEzIDQuNVpNMTUuMzc1IDAuMTI1QzEyLjk1ODggMC4xMjUgMTEgMi4wODQgMTEgNC41QzExIDYuOTE2IDEyLjk1ODggOC44NzUgMTUuMzc1IDguODc1QzE3Ljc5MTIgOC44NzUgMTkuNzUgNi45MTYgMTkuNzUgNC41QzE5Ljc1IDIuMDg0IDE3Ljc5MTIgMC4xMjUgMTUuMzc1IDAuMTI1Wk01LjEyNSA1LjYyNUM1LjEyNSA0LjkzNSA1LjY4NDYgNC4zNzUgNi4zNzUgNC4zNzVDNy4wNjU0IDQuMzc1IDcuNjI1IDQuOTM1IDcuNjI1IDUuNjI1QzcuNjI1IDYuMzE1IDcuMDY1NCA2Ljg3NSA2LjM3NSA2Ljg3NUM1LjY4NDYgNi44NzUgNS4xMjUgNi4zMTUgNS4xMjUgNS42MjVaTTYuMzc1IDIuMzc1QzQuNTgwMSAyLjM3NSAzLjEyNSAzLjgzIDMuMTI1IDUuNjI1QzMuMTI1IDcuNDIgNC41ODAxIDguODc1IDYuMzc1IDguODc1QzguMTY5OSA4Ljg3NSA5LjYyNSA3LjQyIDkuNjI1IDUuNjI1QzkuNjI1IDMuODMgOC4xNjk5IDIuMzc1IDYuMzc1IDIuMzc1Wk0xMC42MjUgMTEuMTI1QzEwLjA3MjcgMTEuMTI1IDkuNjI1IDExLjU3MyA5LjYyNSAxMi4xMjVWMTQuODc1QzkuNjI1IDE1LjQyNyAxMC4wNzI3IDE1Ljg3NSAxMC42MjUgMTUuODc1SDIwLjEyNUMyMC42NzczIDE1Ljg3NSAyMS4xMjUgMTUuNDI3IDIxLjEyNSAxNC44NzVWMTIuMTI1QzIxLjEyNSAxMS41NzMgMjAuNjc3MyAxMS4xMjUgMjAuMTI1IDExLjEyNUgxOS4zMTI1QzE4Ljc2MDIgMTEuMTI1IDE4LjMxMjUgMTAuNjc3IDE4LjMxMjUgMTAuMTI1QzE4LjMxMjUgOS41NzMgMTguNzYwMiA5LjEyNSAxOS4zMTI1IDkuMTI1SDIwLjEyNUMyMS43ODE5IDkuMTI1IDIzLjEyNSAxMC40NjggMjMuMTI1IDEyLjEyNVYxNC44NzVDMjMuMTI1IDE2LjUzMiAyMS43ODE5IDE3Ljg3NSAyMC4xMjUgMTcuODc1SDEwLjYyNUM4Ljk2ODEgMTcuODc1IDcuNjI1IDE2LjUzMiA3LjYyNSAxNC44NzVWMTIuMTI1QzcuNjI1IDEwLjQ2OCA4Ljk2ODEgOS4xMjUgMTAuNjI1IDkuMTI1SDExLjQzNzVDMTEuOTg5OCA5LjEyNSAxMi40Mzc1IDkuNTczIDEyLjQzNzUgMTAuMTI1QzEyLjQzNzUgMTAuNjc3IDExLjk4OTggMTEuMTI1IDExLjQzNzUgMTEuMTI1SDEwLjYyNVpNMi44NzUgOS4xMjVDMS43NzA0IDkuMTI1IDAuODc1IDEwLjAyIDAuODc1IDExLjEyNVYxMy42MjVDMC44NzUgMTQuNzMgMS43NzA0IDE1LjYyNSAyLjg3NSAxNS42MjVINS4yNUM1LjgwMjMgMTUuNjI1IDYuMjUgMTUuMTc3IDYuMjUgMTQuNjI1QzYuMjUgMTQuMDczIDUuODAyMyAxMy42MjUgNS4yNSAxMy42MjVIMi44NzVWMTEuMTI1SDMuNTYyNUM0LjExNDggMTEuMTI1IDQuNTYyNSAxMC42NzcgNC41NjI1IDEwLjEyNUM0LjU2MjUgOS41NzMgNC4xMTQ4IDkuMTI1IDMuNTYyNSA5LjEyNUgyLjg3NVoiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./public/images/loader-bg.jpg":
/*!*************************************!*\
  !*** ./public/images/loader-bg.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/loader-bg-09a48fc0600748f0a528ad0311563efa.jpg";

/***/ }),

/***/ "./public/logo-wide.svg":
/*!******************************!*\
  !*** ./public/logo-wide.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTkiIGhlaWdodD0iNjYiIHZpZXdCb3g9IjAgMCA1OSA2NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTU0LjIyODggMTIuODA4MUw1MS44OTI0IDExLjQ1MjVMMzQuMzI3NSAxLjI4NTA2QzMzLjkzMzQgMS4wNTkxMiAzMy41MTEyIDAuODYxNDIyIDMzLjA4OSAwLjY5MTk2NUMzMS4zNDM3IDAuMjI1OTU5IDI5LjUgMS41MjUxMyAyOS41IDMuNDczODhWMTMuMDc2NEMyOS41IDEzLjg2NzIgMjkuMTc2MyAxNC41ODc0IDI4LjY1NTUgMTUuMTA5OUMyOC41Mjg5IDE1LjIzNyAyOC4zODgxIDE1LjM2NDEgMjguMjMzMyAxNS40NjI5QzI3LjkyMzcgMTUuNjc0OCAyNy41ODU5IDE1LjgxNiAyNy4yMDU5IDE1LjkwMDdDMjcuMDIyOSAxNS45NDMxIDI2LjgyNTkgMTUuOTU3MiAyNi42Mjg4IDE1Ljk1NzJINC43NzEyQzQuMzc3MSAxNS45NTcyIDQuMDExMiAxNS45OTk2IDMuNjQ1MyAxNi4wODQzQzMuNDA2IDE2LjE0MDggMy4xNjY3IDE2LjIyNTUgMi45NDE2IDE2LjMxMDJDMi44MjkgMTYuMzUyNiAyLjcxNjQgMTYuNDA5MSAyLjYxNzggMTYuNDY1NkMyLjI5NDEgMTYuNjM1IDEuOTg0NSAxNi44MzI3IDEuNzE3MSAxNy4wNTg3QzEuNDM1NiAxNy4yODQ2IDEuMTk2MyAxNy41NTI5IDAuOTcxMSAxNy44MzUzQzAuNjc1NiAxOC4yMTY2IDAuNDUwNCAxOC42NTQ0IDAuMjgxNSAxOS4xMDYzQzAuMDk4NDk5OSAxOS44NTQ3IDAgMjAuNjE3MyAwIDIxLjQwODFWNDQuMjE0MUMwIDQ3LjYzMTUgMS44MTU2IDUwLjc5NDcgNC43NzEyIDUyLjUwMzRMMTEuODA4NCA1Ni41ODQ1TDI0LjcyODggNjQuMDY4OEMyNy42ODQ0IDY1Ljc3NzUgMzEuMzE1NiA2NS43Nzc1IDM0LjI3MTIgNjQuMDY4OEw0Ny4xOTE2IDU2LjU4NDVMNTQuMjI4OCA1Mi41MDM0QzU3LjE4NDQgNTAuNzk0NyA1OSA0Ny42MzE1IDU5IDQ0LjIxNDFWMjEuMTExNUM1OSAxNy42OCA1Ny4xNzAzIDE0LjUxNjggNTQuMjI4OCAxMi44MDgxWk00NS44ODI2IDQwLjExODlDNDQuNjg2MyA0My40Mzc0IDQyLjUzMjkgNDYuMjkgMzkuNjQ3NyA0OC4zNTE3QzM2LjcwNjEgNTAuNDU1OCAzMy4yMjk3IDUxLjU3MTQgMjkuNTk4NSA1MS41NzE0QzI1Ljk2NzMgNTEuNTcxNCAyMi40OTA5IDUwLjQ1NTggMTkuNTQ5NCA0OC4zNTE3QzE2LjY2NDEgNDYuMjkgMTQuNTEwNyA0My40Mzc0IDEzLjMxNDQgNDAuMTE4OUMxMi44MzU5IDM4Ljc5MTUgMTMuNTI1NSAzNy4zMDg3IDE0Ljg0ODUgMzYuODI4NkMxNi4xNzE1IDM2LjM0ODUgMTcuNjQ5MyAzNy4wNDA0IDE4LjEyNzkgMzguMzY3OUMxOS44NzMxIDQzLjE5NzQgMjQuNDc1NCA0Ni40MzEyIDI5LjU5ODUgNDYuNDMxMkMzNC43MjE2IDQ2LjQzMTIgMzkuMzIzOSA0My4xODMzIDQxLjA2OTIgMzguMzY3OUM0MS41NDc3IDM3LjA0MDQgNDMuMDExNCAzNi4zNDg1IDQ0LjM0ODUgMzYuODI4NkM0NS42NzE1IDM3LjMwODcgNDYuMzYxMiAzOC43OTE1IDQ1Ljg4MjYgNDAuMTE4OVoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPHBhdGggZD0iTTEuNzE3MSAxNy4wNTg3QzEuOTk4NiAxNi44MzI3IDIuMjk0MSAxNi42MjA5IDIuNjE3OCAxNi40NjU2QzIuNzMwNCAxNi40MDkxIDIuODQzIDE2LjM2NjcgMi45NDE2IDE2LjMxMDJDMy4xNjY4IDE2LjIxMTQgMy40MDYgMTYuMTQwOCAzLjY0NTMgMTYuMDg0M0M0LjAxMTIgMTUuOTk5NSA0LjM3NzIgMTUuOTU3MiA0Ljc3MTIgMTUuOTU3MkgyNi42Mjg4QzI2LjgyNTkgMTUuOTU3MiAyNy4wMjI5IDE1Ljk0MzEgMjcuMjA1OSAxNS45MDA3QzI3LjU3MTggMTUuODMwMSAyNy45MjM3IDE1LjY3NDggMjguMjMzMyAxNS40NjI5QzI4LjM4ODEgMTUuMzY0MSAyOC41Mjg5IDE1LjIzNyAyOC42NTU1IDE1LjEwOTlDMjkuMTc2MyAxNC41ODc0IDI5LjUgMTMuODY3MiAyOS41IDEzLjA3NjRWMy40NzM4N0MyOS41IDEuNTI1MTEgMzEuMzQzOCAwLjIyNTk0MiAzMy4wODkgMC42OTE5NDlDMzEuOTM0OSAwLjIyNTk0MiAzMC43MTA0IDAgMjkuNSAwQzI3LjgzOTIgMC4wMTQxMjE0IDI2LjE3ODQgMC40NTE4ODUgMjQuNzAwNiAxLjMyNzQxTDQuNzAwOSAxMy4xNjExQzMuNTA0NSAxMy44NjcyIDIuNDkxMiAxNC44Mjc1IDEuNzE3MSAxNS45NDMxQzEuMDQxNSAxNi45MDMzIDAuNTYzMDAyIDE3Ljk3NjUgMC4yODE1MDIgMTkuMTIwNEMwLjQ1MDQwMiAxOC42NTQ0IDAuNjc1NjAyIDE4LjIzMDcgMC45NzExMDIgMTcuODQ5NUMxLjE4MjMgMTcuNTUyOSAxLjQzNTYgMTcuMjg0NiAxLjcxNzEgMTcuMDU4N1oiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcikiLz4KCjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIxMy4zNDM4IiB5MT0iOC40OTMzNSIgeDI9IjQ2LjE1NTQiIHkyPSI1Ny4yNjAxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM0RThGRkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjA1OTUyMjkiIHN0b3AtY29sb3I9IiM1Nzk4RkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjIyOTEiIHN0b3AtY29sb3I9IiM2Q0FDRkUiLz4KPHN0b3Agb2Zmc2V0PSIwLjQxOTQiIHN0b3AtY29sb3I9IiM3QkJCRkUiLz4KPHN0b3Agb2Zmc2V0PSIwLjY0NTciIHN0b3AtY29sb3I9IiM4M0MzRkUiLz4KCjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhciIgeDE9IjExLjcxNjMiIHkxPSI0LjMwOTg3IiB4Mj0iMjMuOTA1NSIgeTI9IjE3LjkzMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjQjZFNEY5Ii8+CjxzdG9wIG9mZnNldD0iMC42MjQyIiBzdG9wLWNvbG9yPSIjOTBDQ0ZEIi8+CjxzdG9wIG9mZnNldD0iMC43Njk5IiBzdG9wLWNvbG9yPSIjODZDNkZFIi8+CjwvbGluZWFyR3JhZGllbnQ+Cgo8L2RlZnM+Cjwvc3ZnPgo="

/***/ }),

/***/ "./styles/flex.js":
/*!************************!*\
  !*** ./styles/flex.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  .d-flex {
    display: flex;
  }

  .d-flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`);

/***/ }),

/***/ "./styles/fonts.js":
/*!*************************!*\
  !*** ./styles/fonts.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`

`);

/***/ }),

/***/ "./styles/global.js":
/*!**************************!*\
  !*** ./styles/global.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  * {
    -webkit-font-smoothing: antialiased;
    outline: none !important;
  }

  body {
    font-family: 'Helvetica Neue' !important;
    color: black;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  input {
    background: transparent;
  }

  textarea {
    border: 0;
    font-size: 15px;
    line-height: 26px;
    outline: none;
    background: transparent;
  }

  button, input {
    transition: background-color 0.2s ease-in-out,
                border-color 0.2s ease-in-out,
                opacity 0.2s ease-in-out;
  }

  .ps__rail-y {
    z-index: 1;
    background: ${props => props.theme.chatBG} !important;
    :hover {
      background: transparent !important;
    }
  }


  .ps__thumb-y {
    width: 7px !important;
    right: 7px !important;
    background-color: #888588 !important;
    transition: opacity 0.2s ease-in-out !important;
    opacity: 0;
  }

  .ps--active-y {
    .ps__rail-y {
      opacity: 1 !important;
    }
  }

  .ps__rail-y:hover {
    background-color: transparent;
  }

  .mention {
    color: #69A9FF;
    cursor: pointer;
    :hover {
      text-decoration: underline;
      opacity: 0.85;
    }
  }

  .emoji-mart-bar {
    display: none;
  }
  .emoji-mart-search {
    display: none;
  }
  .emoji-mart-category-label {
    font-weight: 500;
    font-size: 12px;
    color: #000000;
    margin-bottom: 8px;
  }
`);

/***/ }),

/***/ "./styles/progressbar.js":
/*!*******************************!*\
  !*** ./styles/progressbar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const color = '#3d367d';
/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: ${color};

    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 2px;
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
    opacity: 1;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }

  /* Remove these to get rid of the spinner */
  #nprogress .spinner {
    display: none;
  }
  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }
`);

/***/ }),

/***/ "./styles/reset.js":
/*!*************************!*\
  !*** ./styles/reset.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-reset */ "styled-reset");
/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_reset__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  ${styled_reset__WEBPACK_IMPORTED_MODULE_1___default.a}
`);

/***/ }),

/***/ "./styles/themes.js":
/*!**************************!*\
  !*** ./styles/themes.js ***!
  \**************************/
/*! exports provided: themeWhite, themeDark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeWhite", function() { return themeWhite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeDark", function() { return themeDark; });
const themeWhite = {
  navbarContainerBG: '#f4f7fa',
  tabBG: '#f4f7fa',
  tabBGHover: '#eff2f5',
  tabDividerColor: '#dde0e2',
  activeTabText: '#080808',
  chatBG: '#fff',
  chatText: '#131313',
  chatAuthor: '#1d1c1d',
  chatDate: '#6A696A',
  chatTopicText: '#767676',
  chatTopicBorder: '#cacaca',
  chatHeaderBorder: '#e8e8e8',
  reactionBG: '#f6f6f6',
  reactionBGHover: '#fff',
  messageActionBG: '#FFFFFF',
  messageActionBGHover: '#fbfbfb',
  messageActionBorder: '1px solid #D2D2D2',
  replyAvatarBorder: '1px solid #fff',
  replyText: '#424242',
  replyIcon: '#666566',
  channelActive: '#000',
  channelUnread: '#969696',
  channelRead: '#969696',
  placeholderBG: '#eeeeee',
  placeholderFG: '#f0f0f0',
  placeholderTabsBG: '#ffffff',
  placeholderTabsFG: '#f8fafc',
  popupBG: '#fff',
  popupBorder: '#EFEFEF',
  profilePopupBorder: '#EFEFEF',
  searchModalBG: '#69a9ff',
  searchModalListBG: '#fff',
  searchModalInput: '#fff',
  searchModalSearchIcon: '#fff',
  searchModalCloseIcon: '#fff',
  notificationBGHover: '#F8F8F8',
  notificationDate: '#616061',
  sectionTitle: '#74757a',
  buttonSubtleBG: 'transparent',
  buttonSubtleBorder: '1px solid #bababa',
  buttonSubtleBGHover: '#f6f6f6',
  buttonSubtleBGActive: '#e6e4e4',
  buttonOutlineBGHover: '#ececec',
  buttonOutlineBGActive: '#dfdede',
  buttonOutlineBorder: '#c4c4c4',
  checkboxBG: '#e2e2e2',
  checkboxCircleBG: '#bfbfbf',
  iconColor: '#525252',
  titleColor: '#111111',
  subtitleColor: '#939393',
  communityBorder: '#e2e2e2',
  communityBorderHover: '#f8f8f8',
  communityFollowButton: '#d6d9dc',
  // old:
  background: '#fff',
  textColor: '#000',
  navColorBG: '#16123e',
  inputsBackground: '#fff',
  placeholderTextColor: '#e8e8e8',
  rightMembersColorBG: '#fff',
  shadowForRightMembers: 0.06,
  notificationsBG: '#fff',
  bgMoreItemsHover: '#fbfbfb',
  btnsFolowColor: '#d6d9dc',
  textNotifDialogs: '#616061',
  bgNotifDialogs: '#e2e2e2',
  textColorNotifications: '#616061',
  textDialogsColor: '#828282',
  border: '#e8e8e8'
};
const themeDark = {
  navbarContainerBG: '#202225',
  tabBG: '#202225',
  tabBGHover: '#272a2d',
  tabDividerColor: '#343637',
  activeTabText: '#fff',
  chatBG: '#2f3136',
  chatText: '#fff',
  chatAuthor: '#919498',
  chatDate: '#94979B',
  chatTopicText: '#95989C',
  chatTopicBorder: '#95989C',
  chatHeaderBorder: '#37393E',
  reactionBG: '#45474D',
  reactionBGHover: 'none',
  messageActionBG: '#202225',
  messageActionBGHover: 'hsla(216, 7%, 14%, 0.85)',
  messageActionBorder: '1px solid #37393e',
  replyAvatarBorder: '2px solid #2f3136',
  replyText: '#fdfdfd',
  replyIcon: '#E7E7E7',
  channelActive: '#fff',
  channelUnread: '#95989C',
  channelRead: '#95989c',
  placeholderFG: '#3a3c40',
  placeholderBG: '#42464e',
  placeholderTabsFG: '#3a3c40',
  placeholderTabsBG: '#42464e',
  popupBG: '#202225',
  popupBorder: '#343637',
  profilePopupBorder: '#37393E',
  searchModalBG: '#69a9ff',
  searchModalListBG: '#37393E',
  searchModalInput: '#fff',
  searchModalSearchIcon: '#fff',
  searchModalCloseIcon: '#fff',
  notificationBGHover: '#3F4147',
  notificationDate: '#919498',
  sectionTitle: '#74757a',
  buttonSubtleBG: '#3F4147',
  buttonSubtleBorder: 'none',
  buttonSubtleBGHover: '#3F4147',
  buttonSubtleBGActive: '#3F4147',
  buttonOutlineBGHover: '#000',
  buttonOutlineBGActive: '#111',
  buttonOutlineBorder: '#757575',
  checkboxBG: '#606060',
  checkboxCircleBG: '#2f3136',
  iconColor: '#95989C',
  titleColor: '#fff',
  subtitleColor: '#939393',
  communityBorder: '#37393E',
  communityBorderHover: '#37393E',
  communityFollowButton: '#3c3f48',
  // old:
  background: '#2f3136',
  textColor: '#fff',
  navColorBG: '#202225',
  inputsBackground: '#7b7b7b',
  placeholderTextColor: '#000',
  rightMembersColorBG: '#202225',
  shadowForRightMembers: 1,
  notificationsBG: '#202225',
  bgMoreItemsHover: '#25282b',
  btnsFolowColor: '#3c3f48',
  textNotifDialogs: '#fff',
  bgNotifDialogs: '#898789',
  textColorNotifications: '#919498',
  textDialogsColor: '#fff',
  border: '#505050'
};

/***/ }),

/***/ "./styles/toastify.js":
/*!****************************!*\
  !*** ./styles/toastify.js ***!
  \****************************/
/*! exports provided: WrappedToastContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrappedToastContainer", function() { return WrappedToastContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/styles/toastify.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const WrappedToastContainer = _ref => {
  let {
      className
    } = _ref,
    rest = _objectWithoutProperties(_ref, ["className"]);
  return __jsx("div", {
    className: className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__["ToastContainer"], _extends({}, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_1___default()(WrappedToastContainer).attrs({
  // custom props
}).withConfig({
  displayName: "toastify",
  componentId: "gk8fny-0"
})([".Toastify__toast-container{}.Toastify__toast{width:230px;height:55px;padding:18px 14px;box-sizing:border-box;background:#2f3136;box-shadow:0px 6px 8px rgba(0,0,0,0.1);border-radius:6px;border-left:6px solid #69a9ff;display:flex;align-items:center;justify-content:space-between;}.Toastify__toast--error{border-color:#ff4b4b;}.Toastify__toast--warning{border-color:#69a9ff;}.Toastify__toast--success{}.Toastify__toast-body{display:flex;align-items:center;justify-content:space-between;}.Toastify__progress-bar{visibility:hidden;}"]));

/***/ }),

/***/ "./utils/apollo/createApolloClient.js":
/*!********************************************!*\
  !*** ./utils/apollo/createApolloClient.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createApolloClient; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/main.cjs");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./links */ "./utils/apollo/links.js");



function createApolloClient(initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    ssrMode: Boolean(ctx),
    link: Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__["from"])([_links__WEBPACK_IMPORTED_MODULE_1__["errorLink"],
    // requestLink.concat(uploadLink),
    _links__WEBPACK_IMPORTED_MODULE_1__["requestLink"], _links__WEBPACK_IMPORTED_MODULE_1__["link"]]),
    request: _links__WEBPACK_IMPORTED_MODULE_1__["request"],
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]().restore(initialState),
    connectToDevTools: true
  });
}

/***/ }),

/***/ "./utils/apollo/index.js":
/*!*******************************!*\
  !*** ./utils/apollo/index.js ***!
  \*******************************/
/*! exports provided: initOnContext, withApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initOnContext", function() { return initOnContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withApollo", function() { return withApollo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/main.cjs");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _initApolloClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initApolloClient */ "./utils/apollo/initApolloClient.js");
var _jsxFileName = "/Volumes/MacData/work/ciscord-frontend.git/utils/apollo/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





/* eslint-disable no-console */

/**
 * Installs the Apollo Client on NextPageContext
 * or NextAppContext. Useful if you want to use apolloClient
 * inside getStaticProps, getStaticPaths or getServerProps
 * @param {NextPageContext | NextAppContext} ctx
 */
const initOnContext = ctx => {
  const inAppContext = Boolean(ctx.ctx);

  // We consider installing `withApollo({ ssr: true })` on global App level
  // as antipattern since it disables project wide Automatic Static Optimization.
  if (true) {
    if (inAppContext) {
      console.warn('Warning: You have opted-out of Automatic Static Optimization due to `withApollo` in `pages/_app`.\n' + 'Read more: https://err.sh/next.js/opt-out-auto-static-optimization\n');
    }
  }

  // Initialize ApolloClient if not already done
  const apolloClient = ctx.apolloClient || Object(_initApolloClient__WEBPACK_IMPORTED_MODULE_3__["default"])(ctx.apolloState || {}, inAppContext ? ctx.ctx : ctx);

  // We send the Apollo Client as a prop to the component to avoid calling initApollo() twice in the server.
  // Otherwise, the component would have to call initApollo() again but this
  // time without the context. Once that happens, the following code will make sure we send
  // the prop as `null` to the browser.
  apolloClient.toJSON = () => null;

  // Add apolloClient to NextPageContext & NextAppContext.
  // This allows us to consume the apolloClient inside our
  // custom `getInitialProps({ apolloClient })`.
  ctx.apolloClient = apolloClient;
  if (inAppContext) {
    ctx.ctx.apolloClient = apolloClient;
  }
  return ctx;
};
const withApollo = ({
  ssr = false
} = {}) => PageComponent => {
  const WithApollo = _ref => {
    let {
        apolloClient,
        apolloState
      } = _ref,
      pageProps = _objectWithoutProperties(_ref, ["apolloClient", "apolloState"]);
    let client;
    if (apolloClient) {
      // Happens on: getDataFromTree & next.js ssr
      client = apolloClient;
    } else {
      // Happens on: next.js csr
      client = Object(_initApolloClient__WEBPACK_IMPORTED_MODULE_3__["default"])(apolloState, undefined);
    }
    return __jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {
      client: client,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }
    }, __jsx(PageComponent, _extends({}, pageProps, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    })));
  };

  // Set the correct displayName in development
  if (true) {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';
    WithApollo.displayName = `withApollo(${displayName})`;
  }
  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async ctx => {
      const inAppContext = Boolean(ctx.ctx);
      const {
        apolloClient
      } = initOnContext(ctx);

      // Run wrapped getInitialProps methods
      let pageProps = {};
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      } else if (inAppContext) {
        pageProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(ctx);
      }

      // Only on the server:
      if (true) {
        const {
          AppTree
        } = ctx;
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return pageProps;
        }

        // Only if dataFromTree is enabled
        if (ssr && AppTree) {
          try {
            // Import `@apollo/react-ssr` dynamically.
            // We don't want to have this in our client bundle.
            const {
              getDataFromTree
            } = await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! @apollo/client/react/ssr */ "./node_modules/@apollo/client/react/ssr/ssr.cjs", 7));

            // Since AppComponents and PageComponents have different context types
            // we need to modify their props a little.
            let props;
            if (inAppContext) {
              props = _objectSpread({}, pageProps, {
                apolloClient
              });
            } else {
              props = {
                pageProps: _objectSpread({}, pageProps, {
                  apolloClient
                })
              };
            }

            // Take the Next.js AppTree, determine which queries are needed to render,
            // and fetch them. This method can be pretty slow since it renders
            // your entire AppTree once for every query. Check out apollo fragments
            // if you want to reduce the number of rerenders.
            // https://www.apollographql.com/docs/react/data/fragments/
            await getDataFromTree(__jsx(AppTree, _extends({}, props, {
              __self: undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 35
              }
            })));
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error('Error while running `getDataFromTree`', error);
          }
        }
      }
      return _objectSpread({}, pageProps, {
        // Extract query data from the Apollo store
        apolloState: apolloClient.cache.extract(),
        // Provide the client for ssr. As soon as this payload
        // gets JSON.stringified it will remove itself.
        apolloClient: ctx.apolloClient
      });
    };
  }
  return WithApollo;
};

/***/ }),

/***/ "./utils/apollo/initApolloClient.js":
/*!******************************************!*\
  !*** ./utils/apollo/initApolloClient.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createApolloClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createApolloClient */ "./utils/apollo/createApolloClient.js");


// On the client, we store the Apollo Client in the following variable.
// This prevents the client from reinitializing between page transitions.
let globalApolloClient = null;

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {NormalizedCacheObject} initialState
 * @param  {NextPageContext} ctx
 */
const initApolloClient = (initialState, ctx) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (true) {
    return Object(_createApolloClient__WEBPACK_IMPORTED_MODULE_0__["default"])(initialState, ctx);
  }

  // Reuse client on the client-side
  if (!globalApolloClient) {
    globalApolloClient = Object(_createApolloClient__WEBPACK_IMPORTED_MODULE_0__["default"])(initialState, ctx);
  }
  return globalApolloClient;
};
/* harmony default export */ __webpack_exports__["default"] = (initApolloClient);

/***/ }),

/***/ "./utils/apollo/links.js":
/*!*******************************!*\
  !*** ./utils/apollo/links.js ***!
  \*******************************/
/*! exports provided: httpLink, wsLink, request, errorLink, requestLink, link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpLink", function() { return httpLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wsLink", function() { return wsLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorLink", function() { return errorLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestLink", function() { return requestLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "link", function() { return link; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/main.cjs");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client/link/error */ "./node_modules/@apollo/client/link/error/error.cjs");
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-upload-client */ "apollo-upload-client");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_upload_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client_link_subscriptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client/link/subscriptions */ "./node_modules/@apollo/client/link/subscriptions/subscriptions.cjs");
/* harmony import */ var _apollo_client_link_subscriptions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_subscriptions__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_ws__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-ws */ "graphql-ws");
/* harmony import */ var graphql_ws__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_ws__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client/utilities */ "./node_modules/@apollo/client/utilities/utilities.cjs");
/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var utils_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/config */ "./utils/config.js");
// import { ApolloLink, split, Observable } from 'apollo-link';








const uri = `https://biznessapps.org/graphql`;
const wsUri = `wss://biznessapps.org/graphql`;
console.log(uri, 'uri');
console.log(wsUri, 'wsUri');
const httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["HttpLink"]({
  uri
});
const wsLink = false ? undefined : () => console.log('SSR');
const request = async operation => {
  const token = sessionStorage.getItem('token');
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
      "x-hasura-admin-secret": "9R5zjnzbmUlI6DgZaAmUQzwJPdVpiCj3ik96xQsYm9wWENmfej7uPCs4KyOTZTbw",
      'ciscord-tenant': Object(utils_config__WEBPACK_IMPORTED_MODULE_7__["COMPANY_NAME"])()
    }
  });
};
const errorLink = Object(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_1__["onError"])(({
  graphQLErrors,
  networkError
}) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({
      message,
      locations,
      path
    }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});
const requestLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"]((operation, forward) => new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["Observable"](observer => {
  let handle;
  Promise.resolve(operation).then(oper => request(oper)).then(() => {
    handle = forward(operation).subscribe({
      next: observer.next.bind(observer),
      error: observer.error.bind(observer),
      complete: observer.complete.bind(observer)
    });
  }).catch(observer.error.bind(observer));
  return () => {
    if (handle) handle.unsubscribe();
  };
}));
const uploadLink = Object(apollo_upload_client__WEBPACK_IMPORTED_MODULE_2__["createUploadLink"])({
  uri
});
const link = false ? undefined : uploadLink;

/***/ }),

/***/ "./utils/config.js":
/*!*************************!*\
  !*** ./utils/config.js ***!
  \*************************/
/*! exports provided: COMPANY_NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPANY_NAME", function() { return COMPANY_NAME; });
// eslint-disable-next-line import/prefer-default-export
const COMPANY_NAME = () => {
  if (window.parent.document.getElementById('ciscord-iframe')) {
    return window.parent.document.getElementById('ciscord-iframe').src.split('/')[3];
  }
  return location.pathname.split('/')[1];
};

/***/ }),

/***/ "./utils/helper.js":
/*!*************************!*\
  !*** ./utils/helper.js ***!
  \*************************/
/*! exports provided: chatTime, transformMentions, transformMessage, getUsername, awsUrl, notificationHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatTime", function() { return chatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMentions", function() { return transformMentions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMessage", function() { return transformMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsername", function() { return getUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awsUrl", function() { return awsUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notificationHandler", function() { return notificationHandler; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_1__);


moment__WEBPACK_IMPORTED_MODULE_0___default.a.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s',
    s: '',
    ss: '%ss',
    m: '1m',
    mm: '%dm',
    h: '1h',
    hh: '%dh',
    d: '1d',
    dd: '%dd',
    M: '1m',
    MM: '%dM',
    y: '1y',
    yy: '%dY'
  }
});
const chatTime = time => {
  const date1 = new Date(time);
  const date2 = new Date();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays > 0) {
    return moment__WEBPACK_IMPORTED_MODULE_0___default()(time).format('L');
  }
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(time).format('LT');
};
const transformMentions = message => message.replace(/@(\[[^]*\]\([^ ]*?\))/g, mention => `<a class="mention">@${mention.match(/\[(.*)\]/)[1]}</a>`);
const transformLinebreaks = (message, multi) => {
  if (multi) return message.replace(/(?:\r\n|\r|\n)/g, '<br>');
  return message.match(/^.*$/m)[0];
};
const transformUrls = message => message.replace(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi, url => `<a href="${url}" target="_blank" rel="noopener noreferrer" class="Message__link"> ${url}</a>`);
const transformMessage = (message, multi = true) => react_html_parser__WEBPACK_IMPORTED_MODULE_1___default()(transformLinebreaks(transformMentions(transformUrls(message)), multi));
const getUsername = user => user && user.name ? user.name : user.email;
const awsUrl = process.env.AWS_S3_URL;
const notificationHandler = title => {
  // Let's check if the browser supports notifications
  if (!('Notification' in window)) {
    alert('This browser does not support desktop notification');
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === 'granted') {
    // If it's okay let's create a notification
    new Notification(title);
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === 'granted') {
        new Notification(title);
      }
    });
  }
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@wry/trie":
/*!****************************!*\
  !*** external "@wry/trie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@wry/trie");

/***/ }),

/***/ "apollo-upload-client":
/*!***************************************!*\
  !*** external "apollo-upload-client" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-upload-client");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "graphql-ws":
/*!*****************************!*\
  !*** external "graphql-ws" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-ws");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-content-loader":
/*!***************************************!*\
  !*** external "react-content-loader" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-content-loader");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-html-parser":
/*!************************************!*\
  !*** external "react-html-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-reset":
/*!*******************************!*\
  !*** external "styled-reset" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-reset");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "use-dark-mode":
/*!********************************!*\
  !*** external "use-dark-mode" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("use-dark-mode");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "zen-observable/index.js":
/*!******************************************!*\
  !*** external "zen-observable/index.js" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("zen-observable/index.js");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map