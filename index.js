/**
 * @file ECMAScript proposed RegExp.escape.
 * @see {@link https://github.com/benjamingr/RegExp.escape|RegExp.escape}
 * @version 2.0.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module regexp-escape-x
 */

'use strict';

var requireCoercibleToString = require('require-coercible-to-string-x');
var syntaxChars = /[\^$\\.*+?()[\]{}|]/g;
var replace = ''.replace;

/**
 * Method to safely escape `RegExp` special tokens for use in `new RegExp`.
 *
 * @param {string} string - The string to be escaped.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The escaped string.
 * @example
 * var regexpEscape = require('regexp-escape-x');
 *
 * var str = 'hello. how are you?';
 * var regex = new RegExp(regexpEscape(str), 'g');
 * String(regex); // '/hello\. how are you\?/g'
 */
module.exports = function regExpEscape(string) {
  return replace.call(requireCoercibleToString(string), syntaxChars, '\\$&');
};
