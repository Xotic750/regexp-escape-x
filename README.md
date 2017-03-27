<a name="module_regexp-escape-x"></a>

## regexp-escape-x
<a href="https://travis-ci.org/Xotic750/regexp-escape-x"
title="Travis status">
<img src="https://travis-ci.org/Xotic750/regexp-escape-x.svg?branch=master"
alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/regexp-escape-x"
title="Dependency status">
<img src="https://david-dm.org/Xotic750/regexp-escape-x.svg"
alt="Dependency status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/regexp-escape-x#info=devDependencies"
title="devDependency status">
<img src="https://david-dm.org/Xotic750/regexp-escape-x/dev-status.svg"
alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/regexp-escape-x" title="npm version">
<img src="https://badge.fury.io/js/regexp-escape-x.svg"
alt="npm version" height="18">
</a>

ECMAScript proposed RegExp.escape.

Requires ES3 or above.

**See**: [RegExp.escape](https://github.com/benjamingr/RegExp.escape)  
**Version**: 1.1.1  
**Author**: Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
<a name="exp_module_regexp-escape-x--module.exports"></a>

### `module.exports(string)` ⇒ <code>string</code> ⏏
Method to safely escape `RegExp` special tokens for use in `new RegExp`.

**Kind**: Exported function  
**Returns**: <code>string</code> - The escaped string.  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | The string to be escaped. |

**Example**  
```js
var regexpEscape = require('regexp-escape-x');
var str = 'hello. how are you?';
var regex = new RegExp(regexpEscape(str), 'g');
String(regex); // '/hello\. how are you\?/g'
```
