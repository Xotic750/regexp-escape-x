import requireCoercibleToString from 'require-coercible-to-string-x';
var syntaxChars = /[\^$\\.*+?()[\]{}|]/g;
var _ref = '',
    replace = _ref.replace;
/**
 * Method to safely escape `RegExp` special tokens for use in `new RegExp`.
 *
 * @param {string} string - The string to be escaped.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The escaped string.
 */

var regExpEscape = function regExpEscape(string) {
  return replace.call(requireCoercibleToString(string), syntaxChars, '\\$&');
};

export default regExpEscape;

//# sourceMappingURL=regexp-escape-x.esm.js.map