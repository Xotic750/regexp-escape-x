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
 * ECMAScript proposed RegExp.escape.
 *
 * Requires ES3 or above.
 *
 * @see {@link https://github.com/benjamingr/RegExp.escape|RegExp.escape}
 *
 * @version 1.2.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module regexp-escape-x
 */

/* eslint strict: 1 */

/* global module */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var $toString = require('to-string-x');
  var syntaxChars = /[\^$\\.*+?()[\]{}|]/g;

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
  module.exports = function RegExpEscape(string) {
    return $toString(string).replace(syntaxChars, '\\$&');
  };
}());
