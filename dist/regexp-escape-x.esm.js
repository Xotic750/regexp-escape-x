import requireCoercibleToString from 'require-coercible-to-string-x';
import methodize from 'simple-methodize-x';
var syntaxChars = /[\^$\\.*+?()[\]{}|]/g;
var REPLACE_PATTERN = '\\$&';
var methodizedReplace = methodize(REPLACE_PATTERN.replace);
/**
 * Method to safely escape `RegExp` special tokens for use in `new RegExp`.
 *
 * @param {string} string - The string to be escaped.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The escaped string.
 */

var regExpEscape = function regExpEscape(string) {
  return methodizedReplace(requireCoercibleToString(string), syntaxChars, REPLACE_PATTERN);
};

export default regExpEscape;

//# sourceMappingURL=regexp-escape-x.esm.js.map