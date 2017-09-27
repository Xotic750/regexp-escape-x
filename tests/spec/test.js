'use strict';

var regexpEscape;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  regexpEscape = require('../../index.js');
} else {
  regexpEscape = returnExports;
}

var hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
var ifSymbolIt = hasSymbol ? it : xit;

describe('regexpEscape', function () {
  it('is a function', function () {
    expect(typeof regexpEscape).toBe('function');
  });

  it('should throw when target is null or undefined', function () {
    expect(function () {
      regexpEscape();
    }).toThrow();

    expect(function () {
      regexpEscape(void 0);
    }).toThrow();

    expect(function () {
      regexpEscape(null);
    }).toThrow();
  });

  it('simple strings', function () {
    var strings = [
      'The Quick Brown Fox',
      'hello there',
      ''
    ];

    strings.forEach(function (str) {
      expect(regexpEscape(str)).toBe(str, JSON.stringify(str) + ' regexpEscapes to itself.');
    });
  });

  it('strings that need escaping', function () {
    expect(regexpEscape('hi. how are you?')).toBe('hi\\. how are you\\?');
    var syntaxCharacters = '^$\\.*+?()[]{}|';
    expect(regexpEscape(syntaxCharacters).length).toBe(syntaxCharacters.length * 2);
    expect(regexpEscape('\uD834\uDF06.')).toBe('\uD834\uDF06\\.');
  });

  it('non-strings', function () {
    var strings = [
      'hello there',
      '^$\\.*+?()[]{}|',
      '\uD834\uDF06.'
    ];

    strings.forEach(function (str) {
      expect(regexpEscape({
        toString: function () {
          return str;
        }
      })).toBe(regexpEscape(str));
    });
  });

  it('should return a string for everything', function () {
    var values = [
      true,
      'abc',
      1,
      [],
      /r/
    ];

    var expected = values.map(String);
    var actual = values.map(regexpEscape);
    expect(actual).toEqual(expected);
  });

  it('should throw for Object.create(null)', function () {
    expect(function () {
      regexpEscape(Object.create(null));
    }).toThrow();
  });

  ifSymbolIt('should throw for Symbol', function () {
    var sym = Symbol('foo');
    expect(function () {
      regexpEscape(sym);
    }).toThrow();

    var symObj = Object(sym);
    expect(function () {
      regexpEscape(Object(symObj));
    }).toThrow();
  });
});
