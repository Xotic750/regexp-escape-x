(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.returnExports = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/regexp-escape-x"
 * title="Travis status">
 * <img src="https://travis-ci.org/Xotic750/regexp-escape-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/regexp-escape-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/regexp-escape-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a href="https://david-dm.org/Xotic750/regexp-escape-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/regexp-escape-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/regexp-escape-x" title="npm version">
 * <img src="https://badge.fury.io/js/regexp-escape-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * regexpEscape module.
 *
 * <h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
 * `es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
 * methods that can be faithfully emulated with a legacy JavaScript engine.
 *
 * `es5-sham.js` monkey-patches other ES5 methods as closely as possible.
 * For these methods, as closely as possible to ES5 is not very close.
 * Many of these shams are intended only to allow code to be written to ES5
 * without causing run-time errors in older engines. In many cases,
 * this means that these shams cause many ES5 methods to silently fail.
 * Decide carefully whether this is what you want. Note: es5-sham.js requires
 * es5-shim.js to be able to work properly.
 *
 * `json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.
 *
 * `es6.shim.js` provides compatibility shims so that legacy JavaScript engines
 * behave as closely as possible to ECMAScript 6 (Harmony).
 *
 * @version 1.0.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module regexp-escape-x
 */

/*jslint maxlen:80, es6:false, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:false, plusplus:true, maxparams:1, maxdepth:1,
  maxstatements:4, maxcomplexity:1 */

/*global module */

;(function () {
  'use strict';

  var $toString = _dereq_('to-string-x');
  var pReplace = String.prototype.replace;
  var syntaxChars = /[\^\$\\\.\*\+\?\(\)\[\]\{\}\|]/g;

  /**
   * Method to safely escape `RegExp` special tokens for use in `new RegExp`.
   *
   * @param {string} string The string to be escaped.
   * @return {string} The escaped string.
   * @example
   * var regexpEscape = require('regexp-escape-x');
   * var str = 'hello. how are you?';
   * var regex = new RegExp(regexpEscape(str), 'g');
   * String(regex); // '/hello\. how are you\?/g'
   */
  module.exports = function regexpEscape(string) {
    return pReplace.call($toString(string), syntaxChars, '\\$&');
  };
}());

},{"to-string-x":2}],2:[function(_dereq_,module,exports){
/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/to-string-x"
 * title="Travis status">
 * <img src="https://travis-ci.org/Xotic750/to-string-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/to-string-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/to-string-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a href="https://david-dm.org/Xotic750/to-string-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/to-string-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/to-string-x" title="npm version">
 * <img src="https://badge.fury.io/js/to-string-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * ToString module.
 *
 * <h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
 * `es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
 * methods that can be faithfully emulated with a legacy JavaScript engine.
 *
 * `es5-sham.js` monkey-patches other ES5 methods as closely as possible.
 * For these methods, as closely as possible to ES5 is not very close.
 * Many of these shams are intended only to allow code to be written to ES5
 * without causing run-time errors in older engines. In many cases,
 * this means that these shams cause many ES5 methods to silently fail.
 * Decide carefully whether this is what you want. Note: es5-sham.js requires
 * es5-shim.js to be able to work properly.
 *
 * `json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.
 *
 * `es6.shim.js` provides compatibility shims so that legacy JavaScript engines
 * behave as closely as possible to ECMAScript 6 (Harmony).
 *
 * @version 1.0.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-string-x
 */

/*jslint maxlen:80, es6:true, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:false, esnext:true, plusplus:true, maxparams:1, maxdepth:1,
  maxstatements:3, maxcomplexity:2 */

/*global module */

;(function () {
  'use strict';

  var $String = String;

  /**
   * The abstract operation ToString converts argument to a value of type
   * String.
   *
   * @param {*} value The value to convert to a string.
   * @throws {TypeError} If `value` is a Symbol.
   * @return {string} The converted value.
   * @example
   * var $toString = require('to-string-x');
   *
   * $toString(); // 'undefined'
   * $toString(null); // 'null'
   * $toString('abc'); // 'abc'
   * $toString(true); // 'true'
   * $toString(Symbol('foo')); // TypeError
   * $toString(Symbol.iterator); // TypeError
   * $toString(Object(Symbol.iterator)); // TypeError
   */
  module.exports = function ToString(value) {
    if (typeof value === 'symbol') {
      throw new TypeError('Cannot convert a Symbol value to a string');
    }
    return $String(value);
  };
}());

},{}]},{},[1])(1)
});