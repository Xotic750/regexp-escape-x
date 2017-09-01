/**
 * @file ECMAScript proposed RegExp.escape.
 * @see {@link https://github.com/benjamingr/RegExp.escape|RegExp.escape}
 * @version 1.4.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module regexp-escape-x
 */

'use strict';

var toStr = require('to-string-x');
var syntaxChars = /[\^$\\.*+?()[\]{}|]/g;

/**
 * Method to safely escape `RegExp` special tokens for use in `new RegExp`.
 *
 * @param {string} string - The string to be escaped.
 * @returns {string} The escaped string.
 * @example
 * var regexpEscape = require('regexp-escape-x');
 * var str = 'hello. how are you?';
 * var regex = new RegExp(regexpEscape(str), 'g');
 * String(regex); // '/hello\. how are you\?/g'
 */
module.exports = function regExpEscape(string) {
  return toStr(string).replace(syntaxChars, '\\$&');
};
