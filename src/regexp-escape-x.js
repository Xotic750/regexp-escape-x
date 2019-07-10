import requireCoercibleToString from 'require-coercible-to-string-x';

const syntaxChars = /[\^$\\.*+?()[\]{}|]/g;
const {replace} = '';

/**
 * Method to safely escape `RegExp` special tokens for use in `new RegExp`.
 *
 * @param {string} string - The string to be escaped.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The escaped string.
 */
export default function regExpEscape(string) {
  return replace.call(requireCoercibleToString(string), syntaxChars, '\\$&');
}
