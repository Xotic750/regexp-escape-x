import requireCoercibleToString from 'require-coercible-to-string-x';
import methodize from 'simple-methodize-x';

const syntaxChars = /[\^$\\.*+?()[\]{}|]/g;
const REPLACE_PATTERN = '\\$&';
const methodizedReplace = methodize(REPLACE_PATTERN.replace);

/**
 * Method to safely escape `RegExp` special tokens for use in `new RegExp`.
 *
 * @param {string} string - The string to be escaped.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The escaped string.
 */
const regExpEscape = function regExpEscape(string) {
  return methodizedReplace(requireCoercibleToString(string), syntaxChars, REPLACE_PATTERN);
};

export default regExpEscape;
