<a name="module_noop-x"></a>
## noop-x
<a href="https://travis-ci.org/Xotic750/noop-x"
title="Travis status">
<img src="https://travis-ci.org/Xotic750/noop-x.svg?branch=master"
alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/noop-x"
title="Dependency status">
<img src="https://david-dm.org/Xotic750/noop-x.svg"
alt="Dependency status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/noop-x#info=devDependencies"
title="devDependency status">
<img src="https://david-dm.org/Xotic750/noop-x/dev-status.svg"
alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/noop-x" title="npm version">
<img src="https://badge.fury.io/js/noop-x.svg"
alt="npm version" height="18">
</a>

noop module. Performs no operation but returns a constant `undefined`
inherently.

<h2>ECMAScript compatibility shims for legacy JavaScript engines</h2>
`es5-shim.js` monkey-patches a JavaScript context to contain all EcmaScript 5
methods that can be faithfully emulated with a legacy JavaScript engine.

`es5-sham.js` monkey-patches other ES5 methods as closely as possible.
For these methods, as closely as possible to ES5 is not very close.
Many of these shams are intended only to allow code to be written to ES5
without causing run-time errors in older engines. In many cases,
this means that these shams cause many ES5 methods to silently fail.
Decide carefully whether this is what you want. Note: es5-sham.js requires
es5-shim.js to be able to work properly.

`json3.js` monkey-patches the EcmaScript 5 JSON implimentation faithfully.

`es6.shim.js` provides compatibility shims so that legacy JavaScript engines
behave as closely as possible to ECMAScript 6 (Harmony).

**Version**: 1.0.9  
**Author:** Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
<a name="exp_module_noop-x--module.exports"></a>
### `module.exports()` ⏏
Performs no operation but returns a constant `undefined` inherently.

**Kind**: Exported function  
**Example**  
```js
var noop = require('noop-x');

noop(); // undefined
noop(Number.MIN_VALUE); // undefined
noop('abc'); // undefined
noop(true); // undefined
```
