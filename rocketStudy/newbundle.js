/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/funct.js":
/*!**********************!*\
  !*** ./src/funct.js ***!
  \**********************/
/*! exports provided: default, sub, mult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return soma; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sub\", function() { return sub; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mult\", function() { return mult; });\nfunction soma(a, b) {\n  return a + b;\n}\n\nvar sub = function sub(a, b) {\n  return a - b;\n};\n\nvar mult = function mult(a, b) {\n  return a * b;\n};\n\n // outra forma de fazer -> com arrow function\n\n//# sourceURL=webpack:///./src/funct.js?");
    
    /***/ }),
    
    /***/ "./src/main.js":
    /*!*********************!*\
      !*** ./src/main.js ***!
      \*********************/
    /*! no exports provided */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _funct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funct */ \"./src/funct.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar TodoList =\n/*#__PURE__*/\nfunction () {\n  function TodoList() {\n    _classCallCheck(this, TodoList);\n\n    this.todos = [];\n  }\n\n  _createClass(TodoList, [{\n    key: \"addTodo\",\n    value: function addTodo() {\n      if (typeof this.todos === 'undefined') this.todos = new Array();\n      this.todos.push('eae');\n      console.log(this.todos);\n    }\n  }]);\n\n  return TodoList;\n}();\n\nvar MinnhaListaTodos = new TodoList(); //import {default, sub, mult } from './funct'   // don't work\n\n // como existe um valor default jogo fora do {}\n\n // deste modo default functions entram como default? yes\n\nconsole.log('teste');\n\ndocument.getElementById('button-todo').onclick = function () {\n  MinnhaListaTodos.addTodo();\n  console.log(Object(_funct__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4, 3));\n  console.log(Object(_funct__WEBPACK_IMPORTED_MODULE_0__[\"sub\"])(5, 3));\n  console.log(Object(_funct__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(10, 10));\n  console.log(Object(_funct__WEBPACK_IMPORTED_MODULE_0__[\"mult\"])(10, 11));\n  console.log(_funct__WEBPACK_IMPORTED_MODULE_0__); // now func is a wrapper object\n\n  console.log(_funct__WEBPACK_IMPORTED_MODULE_0__[\"sub\"](5, 3)); // with properties\n\n  console.log(_funct__WEBPACK_IMPORTED_MODULE_0__[\"mult\"](10, 11));\n  console.log(_funct__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10, 11));\n};\n\n//# sourceURL=webpack:///./src/main.js?");
    
    /***/ })
    
    /******/ });