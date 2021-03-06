<a
  href="https://travis-ci.org/Xotic750/regexp-escape-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/regexp-escape-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/regexp-escape-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/regexp-escape-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/regexp-escape-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/regexp-escape-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/regexp-escape-x"
  title="npm version">
<img src="https://badge.fury.io/js/regexp-escape-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/regexp-escape-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/regexp-escape-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/regexp-escape-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/regexp-escape-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/regexp-escape-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/regexp-escape-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_regexp-escape-x"></a>

## regexp-escape-x

ECMAScript proposed RegExp.escape.

**See**: [RegExp.escape](https://github.com/benjamingr/RegExp.escape)

<a name="exp_module_regexp-escape-x--module.exports"></a>

### `module.exports(string)` ⇒ <code>string</code> ⏏

Method to safely escape `RegExp` special tokens for use in `new RegExp`.

**Kind**: Exported function  
**Returns**: <code>string</code> - The escaped string.  
**Throws**:

- <code>TypeError</code> If string is null or undefined or not coercible.

| Param  | Type                | Description               |
| ------ | ------------------- | ------------------------- |
| string | <code>string</code> | The string to be escaped. |

**Example**

```js
import regexpEscape from 'regexp-escape-x';

const str = 'hello. how are you?';
const regex = new RegExp(regexpEscape(str), 'g');
console.log(String(regex)); // '/hello\. how are you\?/g'
```
